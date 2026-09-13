/* ------------------------------------------------------------------------- */
/* Mesa — várias fichas, seis jogadores e um mestre                            */
/*                                                                             */
/* O armazenamento é plugável de propósito. Hoje roda no LOCAL, que guarda      */
/* tudo no navegador de quem abriu: serve para uma pessoa cuidar de várias      */
/* fichas, mas NÃO compartilha nada entre computadores diferentes.              */
/*                                                                             */
/* Para seis pessoas em seis máquinas é preciso um servidor. O adaptador        */
/* NUVEM (Supabase) está escrito abaixo e liga preenchendo MESA_CONFIG —        */
/* aí a senha vira senha de verdade, conferida no servidor, e o mestre lê       */
/* todas as fichas por política do banco, não por gentileza deste arquivo.      */
/* ------------------------------------------------------------------------- */

var MESA_CONFIG = {
    /* preencha para ligar o modo nuvem; vazio = modo local */
    supabaseUrl: "",
    supabaseChave: "",   /* a chave "anon"/publishable — é pública por design */
    maxJogadores: 6
};

var MESA_CHAVE = "fem-mesa-v1";

/* --------------------------------------------------------- PIN ---------- */

/* O PIN é derivado com PBKDF2 e guardado só como hash + sal. Mesmo no modo
   local isso evita que o PIN apareça em texto puro no armazenamento. Ainda
   assim, no modo local o PIN é uma tranca de conveniência: quem abrir o
   console do navegador lê os dados de qualquer forma. Só o modo nuvem, com
   as regras do banco, torna isso uma barreira real. */

function _bytesParaHex(buf) {
    return Array.prototype.map.call(new Uint8Array(buf), function (b) {
        return ("0" + b.toString(16)).slice(-2);
    }).join("");
}

function _novoSal() {
    var s = new Uint8Array(16);
    (window.crypto || window.msCrypto).getRandomValues(s);
    return _bytesParaHex(s.buffer);
}

async function derivarPin(pin, sal) {
    var enc = new TextEncoder();
    var chave = await crypto.subtle.importKey(
        "raw", enc.encode(String(pin)), { name: "PBKDF2" }, false, ["deriveBits"]);
    var bits = await crypto.subtle.deriveBits(
        { name: "PBKDF2", salt: enc.encode(sal), iterations: 150000, hash: "SHA-256" },
        chave, 256);
    return _bytesParaHex(bits);
}

async function criarSegredoPin(pin) {
    var sal = _novoSal();
    return { sal: sal, hash: await derivarPin(pin, sal) };
}

async function conferirPin(pin, segredo) {
    if (!segredo || !segredo.sal) { return true; }   /* ficha sem PIN */
    var h = await derivarPin(pin, segredo.sal);
    /* comparação de tempo constante, para não vazar o prefixo certo */
    if (h.length !== segredo.hash.length) { return false; }
    var dif = 0;
    for (var i = 0; i < h.length; i++) { dif |= h.charCodeAt(i) ^ segredo.hash.charCodeAt(i); }
    return dif === 0;
}

/* ---------------------------------------------------- adaptadores ------- */

/* Local: tudo no navegador de quem abriu. Não compartilha entre pessoas. */
var ArmazemLocal = {
    id: "local",
    rotulo: "Neste navegador",
    compartilha: false,

    async ler() {
        try {
            var bruto = localStorage.getItem(MESA_CHAVE);
            return bruto ? JSON.parse(bruto) : null;
        } catch (e) { return null; }
    },

    async gravar(mesa) {
        try { localStorage.setItem(MESA_CHAVE, JSON.stringify(mesa)); return true; }
        catch (e) { return false; }
    }
};

/* Nuvem: Supabase. A tabela e as políticas estão em MESA.md — sem elas o
   servidor recusa tudo, que é justamente o ponto. */
var ArmazemNuvem = {
    id: "nuvem",
    rotulo: "Compartilhado (Supabase)",
    compartilha: true,
    _sessao: null,

    get ativo() {
        return !!(MESA_CONFIG.supabaseUrl && MESA_CONFIG.supabaseChave);
    },

    _url(caminho) { return MESA_CONFIG.supabaseUrl.replace(/\/+$/, "") + caminho; },

    _cabecalhos(comAuth) {
        var h = {
            "apikey": MESA_CONFIG.supabaseChave,
            "Content-Type": "application/json"
        };
        if (comAuth && this._sessao) { h["Authorization"] = "Bearer " + this._sessao.access_token; }
        return h;
    },

    /* Entrar cria a sessão; a senha vai para o servidor, não fica na página. */
    async entrar(email, senha) {
        var r = await fetch(this._url("/auth/v1/token?grant_type=password"), {
            method: "POST", headers: this._cabecalhos(false),
            body: JSON.stringify({ email: email, password: senha })
        });
        if (!r.ok) { return { ok: false, erro: (await r.json()).error_description || "não entrou" }; }
        this._sessao = await r.json();
        return { ok: true };
    },

    async criarConta(email, senha) {
        var r = await fetch(this._url("/auth/v1/signup"), {
            method: "POST", headers: this._cabecalhos(false),
            body: JSON.stringify({ email: email, password: senha })
        });
        if (!r.ok) { return { ok: false, erro: (await r.json()).msg || "não criou" }; }
        return { ok: true };
    },

    sair() { this._sessao = null; },

    /* O servidor decide o que volta: jogador recebe a própria linha,
       mestre recebe todas. A página não filtra nada. */
    async ler() {
        if (!this._sessao) { return null; }
        var r = await fetch(this._url("/rest/v1/fichas?select=*"), { headers: this._cabecalhos(true) });
        if (!r.ok) { return null; }
        var linhas = await r.json();
        return { fichas: linhas.map(function (l) { return l.dados; }) };
    },

    async gravar(mesa) {
        if (!this._sessao) { return false; }
        var minha = mesa.fichas.filter(function (f) { return f.dono === "eu"; })[0];
        if (!minha) { return false; }
        var r = await fetch(this._url("/rest/v1/fichas?on_conflict=id"), {
            method: "POST",
            headers: Object.assign(this._cabecalhos(true), { "Prefer": "resolution=merge-duplicates" }),
            body: JSON.stringify({ id: minha.id, dados: minha })
        });
        return r.ok;
    }
};

/* -------------------------------------------------------- a mesa -------- */

var MESA = null;
var ARMAZEM = null;

function mesa_nova() {
    return { versao: 1, nome: "Minha mesa", fichas: [], mestrePin: null };
}

function armazemAtual() {
    if (ArmazemNuvem.ativo && ArmazemNuvem._sessao) { return ArmazemNuvem; }
    return ArmazemLocal;
}

async function mesa_carregar() {
    ARMAZEM = armazemAtual();
    MESA = (await ARMAZEM.ler()) || mesa_nova();
    if (!Array.isArray(MESA.fichas)) { MESA.fichas = []; }
    return MESA;
}

async function mesa_gravar() {
    if (!MESA) { return false; }
    return await (ARMAZEM || ArmazemLocal).gravar(MESA);
}

function mesa_lugares() {
    return MESA_CONFIG.maxJogadores;
}

function mesa_cheia() {
    return MESA.fichas.filter(function (f) { return f.papel !== "mestre"; }).length >= mesa_lugares();
}

/* Cada ficha na mesa é um envelope: quem é, que papel tem, o PIN e a ficha
   em si no mesmo formato que o Exportar já produz. */
async function mesa_adicionar(nome, papel, pin) {
    if (papel !== "mestre" && mesa_cheia()) {
        return { ok: false, erro: "A mesa já tem " + mesa_lugares() + " jogadores." };
    }
    if (papel === "mestre" && MESA.fichas.some(function (f) { return f.papel === "mestre"; })) {
        return { ok: false, erro: "A mesa já tem um mestre." };
    }
    var env = {
        id: "f" + Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
        titulo: nome || "Sem nome",
        papel: papel === "mestre" ? "mestre" : "jogador",
        dono: "eu",
        criadaEm: new Date().toISOString(),
        pin: pin ? await criarSegredoPin(pin) : null,
        ficha: ficha_nova()
    };
    env.ficha.nome = nome || "";
    MESA.fichas.push(env);
    await mesa_gravar();
    return { ok: true, envelope: env };
}

function mesa_buscar(id) {
    return MESA.fichas.filter(function (f) { return f.id === id; })[0] || null;
}

async function mesa_remover(id) {
    MESA.fichas = MESA.fichas.filter(function (f) { return f.id !== id; });
    await mesa_gravar();
}

/* O mestre enxerga todas; um jogador enxerga a própria. No modo local isso
   é só a interface se comportando — no modo nuvem quem decide é o banco. */
function mesa_visiveis(envelopeAtivo) {
    if (envelopeAtivo && envelopeAtivo.papel === "mestre") { return MESA.fichas; }
    if (!envelopeAtivo) { return MESA.fichas; }
    return MESA.fichas.filter(function (f) { return f.id === envelopeAtivo.id; });
}
