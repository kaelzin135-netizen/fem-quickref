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
    /* Projeto fem-mesa. A chave abaixo é a "publishable" do Supabase, que é
       PÚBLICA por desenho — ela vai no código da página de qualquer jeito, e
       sozinha não abre nada: as três tabelas estão seladas (RLS sem policy) e
       o que ela alcança são as funções, que exigem o PIN. Conferido contra o
       banco: GET em fichas, mesa_config e tentativas devolve 401. */
    supabaseUrl: "https://unwbsqlsegjdcbfnykoo.supabase.co",
    supabaseChave: "sb_publishable_tw75XZYOphr8a-f1LnMGSA_4ekxhsyY",
    maxJogadores: 6
};

var MESA_CHAVE = "fem-mesa-v1";

/* Os lugares da mesa, na ordem. Ninguem nasce com PIN: cada pessoa
   define o seu na primeira vez que abre a propria ficha. */
var MESA_PADRAO = [
    { personagem: "Amanaí",      jogador: "Kael",    papel: "jogador", arquivo: "fichas/amanai-aratupana.json" },
    { personagem: "Annalise",    jogador: "Maruh",   papel: "jogador" },
    { personagem: "Miyu",        jogador: "Akiis",   papel: "jogador" },
    { personagem: "Woo Ji Sang", jogador: "Delta",   papel: "jogador" },
    { personagem: "Aanarsi",     jogador: "Kentaro", papel: "jogador" },
    { personagem: "Evelyn",      jogador: "Koha",    papel: "jogador" }
];

/* O mestre nao tem ficha: e uma credencial que destranca as dos outros. */
var MESA_MESTRE = { nome: "Kian" };

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

/* Nuvem: Supabase, SEM tela de login.
 *
 * A tabela fica selada (RLS ligado e nenhuma policy), e a pagina so alcanca
 * quatro funcoes "security definer" que exigem o PIN da ficha. O PIN e a
 * tranca; nao ha conta de usuario. O SQL inteiro esta em MESA.md.
 *
 * Consequencia no desenho: o quadro da mesa lista RESUMOS (nome, jogador,
 * nivel, se tem PIN) e a ficha inteira so desce quando alguem abre com o PIN
 * certo. O PIN fica na memoria desta aba enquanto a ficha estiver aberta,
 * para os saves seguintes — nunca vai para o localStorage.
 */
var ArmazemNuvem = {
    id: "nuvem",
    rotulo: "Compartilhado (Supabase)",
    compartilha: true,
    _pins: {},        /* id -> PIN, so em memoria */
    _pinMestre: null, /* idem: o PIN de mestre desta aba */
    _resumos: [],     /* ultimo mesa_listar() */

    get configurado() {
        return !!(MESA_CONFIG.supabaseUrl && MESA_CONFIG.supabaseChave);
    },

    /* No modo nuvem nao ha sessao: configurado ja basta para estar ativo. */
    get ativo() { return this.configurado; },

    _url(caminho) { return MESA_CONFIG.supabaseUrl.replace(/\/+$/, "") + caminho; },

    /* Toda conversa com o banco e uma chamada de funcao. */
    async _rpc(nome, args) {
        try {
            var r = await fetch(this._url("/rest/v1/rpc/" + nome), {
                method: "POST",
                headers: {
                    "apikey": MESA_CONFIG.supabaseChave,
                    "Authorization": "Bearer " + MESA_CONFIG.supabaseChave,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(args || {})
            });
            var corpo = await r.json().catch(function () { return null; });
            if (!r.ok) {
                var msg = (corpo && (corpo.message || corpo.hint)) || "o servidor recusou";
                return { ok: false, erro: msg };
            }
            return { ok: true, dados: corpo };
        } catch (e) {
            return { ok: false, erro: "Não deu para falar com o servidor." };
        }
    },

    /* Guarda o PIN desta aba para os proximos saves. */
    lembrarPin(id, pin) { this._pins[id] = pin || null; },
    esquecerPin(id) { delete this._pins[id]; },

    /* ------------------------------------------------------------ leitura -- */

    /* Devolve a mesa so com os resumos. A ficha de cada envelope vem vazia
       ate alguem abrir com o PIN — e por isso que o cartao mostra nome,
       jogador e nivel, e nada mais. */
    async ler() {
        var r = await this._rpc("mesa_listar", {});
        if (!r.ok || !Array.isArray(r.dados)) { return null; }
        this._resumos = r.dados;
        var self = this;
        return {
            versao: 3,
            nome: "Mesa",
            mestre: null,
            fichas: r.dados.map(function (l) {
                var resumo = l.resumo || {};
                return {
                    id: l.id,
                    titulo: l.titulo,
                    jogador: l.jogador || "",
                    papel: "jogador",
                    criadaEm: l.atualizado_em,
                    /* o cartao so precisa saber SE tem PIN */
                    pin: l.tem_pin ? { remoto: true } : null,
                    resumoRemoto: resumo,
                    capaRemota: l.capa || "",
                    carregada: !!self._pins[l.id],
                    ficha: null
                };
            })
        };
    },

    /* Baixa a ficha inteira. Sem o PIN certo o servidor recusa. */
    async abrir(id, pin) {
        /* sem PIN proprio, tenta o de mestre: o banco aceita os dois */
        var usar = pin || this._pins[id] || this._pinMestre || null;
        var r = await this._rpc("mesa_abrir", { p_id: id, p_pin: usar });
        if (!r.ok) { return { ok: false, erro: r.erro }; }
        this.lembrarPin(id, pin);
        return { ok: true, ficha: r.dados || {} };
    },

    /* ------------------------------------------------------------ escrita -- */

    /* Grava so a ficha aberta, com o PIN que destrancou ela. */
    async gravar(mesa) {
        var self = this;
        var comFicha = (mesa.fichas || []).filter(function (f) { return f.ficha; });
        var abertos = comFicha.filter(function (f) { return self._pins[f.id] !== undefined; });
        /* Nada aberto: nao ha o que gravar, e isso e normal (quadro da mesa
           sem ficha aberta). Mas se ha ficha carregada SEM o PIN em memoria,
           gravar falhou de verdade — nao devolver true e esconder a perda. */
        if (!abertos.length) { return comFicha.length === 0; }
        var todosOk = true;
        for (var i = 0; i < abertos.length; i++) {
            var env = abertos[i];
            var copia = Object.assign({}, env);
            delete copia.resumoRemoto;
            delete copia.carregada;
            var r = await this._rpc("mesa_gravar", {
                p_id: env.id,
                p_pin: this._pins[env.id] || null,
                p_dados: copia,
                p_titulo: env.titulo || null,
                p_jogador: env.jogador || null,
                p_resumo: resumoDaFicha(env.ficha),
                p_capa: (env.ficha && env.ficha.capa) || null
            });
            if (!r.ok) { todosOk = false; }
        }
        return todosOk;
    },

    /* O PIN de mestre vive no banco como hash, numa linha de mesa_config.
       Quem confere e o servidor; a pagina so acende o modo mestre. */
    async conferirMestre(pin) {
        var r = await this._rpc("mesa_e_mestre", { p_pin: pin || null });
        if (!r.ok) { return { ok: false, erro: r.erro }; }
        if (r.dados !== true) { return { ok: false, erro: "PIN de mestre incorreto." }; }
        this._pinMestre = pin;
        return { ok: true };
    },

    async definirPinMestre(atual, novo) {
        var r = await this._rpc("mesa_definir_pin_mestre", {
            p_atual: atual || null, p_novo: novo || null
        });
        if (!r.ok) { return { ok: false, erro: r.erro }; }
        this._pinMestre = novo || null;
        return { ok: true };
    },

    async definirPin(id, atual, novo) {
        var r = await this._rpc("mesa_definir_pin", {
            p_id: id, p_atual: atual || null, p_novo: novo || null
        });
        if (!r.ok) { return { ok: false, erro: r.erro }; }
        this.lembrarPin(id, novo || null);
        return { ok: true, removido: !novo };
    }
};

/* O pouco que o quadro da mesa precisa saber sem abrir a ficha. */
function resumoDaFicha(f) {
    if (!f) { return {}; }
    return {
        nivel: f.nivel || 1,
        especializacao: f.especializacao || "",
        tecnica: f.tecnica || "",
        origem: f.origem || ""
    };
}

/* -------------------------------------------------------- a mesa -------- */

var MESA = null;
var ARMAZEM = null;

function mesa_nova() {
    return { versao: 2, nome: "Minha mesa", fichas: [], mestre: null };
}

function armazemAtual() {
    return ArmazemNuvem.ativo ? ArmazemNuvem : ArmazemLocal;
}

async function mesa_carregar() {
    ARMAZEM = armazemAtual();
    MESA = (await ARMAZEM.ler()) || mesa_nova();
    if (!Array.isArray(MESA.fichas)) { MESA.fichas = []; }
    return MESA;
}

/* ------------------------------------------------------------ gravacao -- */

/* recalcular() chama salvar() a cada tecla. No localStorage isso e barato;
   no servidor nao: medido, doze letras digitadas viravam DOZE POSTs, cada um
   levando a ficha inteira — com o retrato em base64, megabytes por palavra.
   Trava a digitacao, queima a cota e ainda deixa respostas chegarem fora de
   ordem. Entao o modo nuvem junta as gravacoes numa so, pouco depois de a
   pessoa parar de mexer. */
var ESPERA_GRAVACAO = 1200;
var _timerGravacao = null;
var _gravando = false;
var _pedidoNovo = false;

async function _descarregar() {
    if (_gravando) { _pedidoNovo = true; return; }
    _gravando = true;
    var ok = false;
    try {
        ok = await ArmazemNuvem.gravar(MESA);
    } finally {
        _gravando = false;
    }
    if (typeof avisar_salvo === "function") { avisar_salvo(ok ? null : new Error("servidor")); }
    /* mexeu de novo enquanto o POST estava no ar: manda mais uma rodada */
    if (_pedidoNovo) { _pedidoNovo = false; await _descarregar(); }
    return ok;
}

/* Fecha a aba, troca de janela: grava agora, sem esperar o timer. */
function mesa_descarregar_ja() {
    if (!ArmazemNuvem.ativo || !MESA) { return; }
    clearTimeout(_timerGravacao);
    _timerGravacao = null;
    _descarregar();
}

if (typeof window !== "undefined") {
    window.addEventListener("pagehide", mesa_descarregar_ja);
    document.addEventListener("visibilitychange", function () {
        if (document.visibilityState === "hidden") { mesa_descarregar_ja(); }
    });
}

async function mesa_gravar() {
    if (!MESA) { return false; }
    if (!ArmazemNuvem.ativo) { return await (ARMAZEM || ArmazemLocal).gravar(MESA); }

    /* nuvem: adia e junta. Quem avisa o resultado e o _descarregar(). */
    clearTimeout(_timerGravacao);
    _timerGravacao = setTimeout(function () {
        _timerGravacao = null;
        _descarregar();
    }, ESPERA_GRAVACAO);
    return true;
}

/* Cria os lugares na primeira vez. Idempotente: nao duplica ninguem, e
   se a ficha do personagem existir como arquivo, ela vem junto. */
async function mesa_semear() {
    /* No modo nuvem quem cria as fichas e o banco, pela tela da mesa: semear
       aqui criaria seis linhas locais que ninguem mais veria. */
    if (ArmazemNuvem.ativo) { return 0; }
    var criou = 0;
    if (!MESA.mestre) { MESA.mestre = { nome: MESA_MESTRE.nome, pin: null }; criou++; }
    for (var i = 0; i < MESA_PADRAO.length; i++) {
        var lugar = MESA_PADRAO[i];
        var jaTem = MESA.fichas.some(function (f) { return f.titulo === lugar.personagem; });
        if (jaTem) { continue; }

        var ficha = ficha_nova();
        if (lugar.arquivo) {
            try {
                var r = await fetch(lugar.arquivo, { cache: "no-store" });
                if (r.ok) {
                    var salvo = await r.json();
                    Object.keys(ficha).forEach(function (k) {
                        if (salvo[k] !== undefined && salvo[k] !== null) { ficha[k] = salvo[k]; }
                    });
                }
            } catch (e) { /* sem o arquivo, entra a ficha em branco */ }
        }
        ficha.nome = ficha.nome || lugar.personagem;
        ficha.jogador = ficha.jogador || lugar.jogador;

        MESA.fichas.push({
            id: "f" + Date.now().toString(36) + i + Math.random().toString(36).slice(2, 6),
            titulo: lugar.personagem,
            jogador: lugar.jogador,
            papel: lugar.papel,
            dono: "eu",
            criadaEm: new Date().toISOString(),
            pin: null,
            ficha: ficha
        });
        criou++;
    }
    if (criou) { await mesa_gravar(); }
    return criou;
}

/* Definir ou trocar o PIN. Para trocar e preciso o PIN atual — quem ja
   trancou a ficha e o unico que pode destrancar. */
async function mesa_definir_pin(id, pinAtual, pinNovo) {
    /* No modo nuvem o PIN mora no banco como hash: quem confere e troca e o
       servidor, nao esta pagina. */
    if (ArmazemNuvem.ativo && id !== "mestre") {
        var res = await ArmazemNuvem.definirPin(id, pinAtual, pinNovo);
        if (res.ok) { await mesa_carregar(); }
        return res;
    }
    var env = (id === "mestre") ? MESA.mestre : mesa_buscar(id);
    if (!env) { return { ok: false, erro: "não encontrado" }; }
    if (env.pin && env.pin.sal) {
        if (!await conferirPin(pinAtual, env.pin)) { return { ok: false, erro: "PIN atual incorreto." }; }
    }
    env.pin = pinNovo ? await criarSegredoPin(pinNovo) : null;
    await mesa_gravar();
    return { ok: true, removido: !pinNovo };
}

/* Entrar como mestre nao abre ficha nenhuma: liga o acesso as seis. */
async function mesa_entrar_mestre(pin) {
    /* No modo nuvem o PIN de mestre e conferido pelo banco, e e ele que
       destranca as fichas dos outros — a pagina nao tem hash nenhum. */
    if (ArmazemNuvem.ativo) { return await ArmazemNuvem.conferirMestre(pin); }
    if (!MESA.mestre) { return { ok: false, erro: "esta mesa não tem mestre" }; }
    if (!await conferirPin(pin, MESA.mestre.pin)) { return { ok: false, erro: "PIN incorreto." }; }
    return { ok: true };
}

function mesa_lugares() {
    return MESA_CONFIG.maxJogadores;
}

function mesa_cheia() {
    return MESA.fichas.length >= mesa_lugares();
}

/* Cada ficha na mesa é um envelope: quem é, que papel tem, o PIN e a ficha
   em si no mesmo formato que o Exportar já produz. */
async function mesa_adicionar(nome, papel, pin) {
    if (mesa_cheia()) {
        return { ok: false, erro: "A mesa já tem " + mesa_lugares() + " jogadores." };
    }
    var id = "f" + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
    var ficha = ficha_nova();
    ficha.nome = nome || "";

    /* No modo nuvem a linha nasce no servidor, e e ele que guarda o hash do
       PIN. Nao da para seguir o caminho local aqui: gravar() so escreve as
       fichas cujo PIN esta em memoria, e uma ficha recem-criada nao tem —
       ela seria filtrada e a ficha sumiria no proximo carregamento, sem
       erro nenhum na tela. */
    if (ArmazemNuvem.ativo) {
        var env = {
            id: id, titulo: nome || "Sem nome", jogador: "", papel: "jogador",
            criadaEm: new Date().toISOString(), pin: pin ? { remoto: true } : null,
            ficha: ficha
        };
        var r = await ArmazemNuvem._rpc("mesa_gravar", {
            p_id: id,
            p_pin: pin || null,          /* texto puro: quem faz o hash e o banco */
            p_dados: env,
            p_titulo: env.titulo,
            p_jogador: null,
            p_resumo: resumoDaFicha(ficha),
            p_capa: null
        });
        if (!r.ok) { return { ok: false, erro: r.erro }; }
        ArmazemNuvem.lembrarPin(id, pin || null);
        MESA.fichas.push(env);
        return { ok: true, envelope: env };
    }

    var envLocal = {
        id: id,
        titulo: nome || "Sem nome",
        papel: "jogador",
        dono: "eu",
        criadaEm: new Date().toISOString(),
        pin: pin ? await criarSegredoPin(pin) : null,
        ficha: ficha
    };
    MESA.fichas.push(envLocal);
    await mesa_gravar();
    return { ok: true, envelope: envLocal };
}

function mesa_buscar(id) {
    return MESA.fichas.filter(function (f) { return f.id === id; })[0] || null;
}

async function mesa_remover(id) {
    MESA.fichas = MESA.fichas.filter(function (f) { return f.id !== id; });
    if (ArmazemNuvem.ativo) {
        /* sem funcao de apagar no banco: a ficha some so desta tela.
           Apagar de verdade e no painel do Supabase, de proposito. */
        return;
    }
    await mesa_gravar();
}

/* O mestre enxerga todas; um jogador enxerga a própria. No modo local isso
   é só a interface se comportando — no modo nuvem quem decide é o banco. */
function mesa_visiveis(souMestre, envelopeAtivo) {
    if (souMestre || !envelopeAtivo) { return MESA.fichas; }
    return MESA.fichas.filter(function (f) { return f.id === envelopeAtivo.id; });
}
