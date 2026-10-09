/* ------------------------------------------------------------------------- */
/* Tela da mesa: escolher, criar e destrancar fichas                           */
/* ------------------------------------------------------------------------- */

var ENVELOPE = null;     /* a ficha aberta no momento */
var SOU_MESTRE = false;  /* entrou como mestre nesta sessao */
var LEITURA = false;     /* mestre olhando a ficha de outra pessoa */

function _esc(s) {
    return String(s == null ? "" : s)
        .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function mesa_mostrar() {
    document.getElementById("tela-mesa").classList.remove("hidden");
    document.body.classList.add("na-mesa");
    desenhar_mesa();
}

function mesa_esconder() {
    document.getElementById("tela-mesa").classList.add("hidden");
    document.body.classList.remove("na-mesa");
}

/* O quadro da mesa, no molde da aba Campanhas do C.R.I.S.: capa em cima,
   os dados embaixo e UMA acao primaria por cartao ("Acessar"). O que la e a
   arte da campanha, aqui e o retrato do personagem — a ficha ja guarda um.

   Quem protege a ficha e o PIN, nao o estado da tela: qualquer um pode pedir
   para abrir qualquer ficha, e quem tem PIN pede o PIN. */

var ICONE_CADEADO =
    '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true">' +
    '<path d="M12 2a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 ' +
    '0 0 0-2-2h-1V7a5 5 0 0 0-5-5zm0 2a3 3 0 0 1 3 3v3H9V7a3 3 0 0 1 3-3zm0 10a2 2 0 0 1 1 ' +
    '3.7V19a1 1 0 0 1-2 0v-1.3A2 2 0 0 1 12 14z"/></svg>';

function _resumoFicha(env) {
    /* no modo nuvem a ficha inteira so desce com o PIN; ate la o cartao se
       vira com o resumo que mesa_listar() devolveu */
    var f = env.ficha || env.resumoRemoto || {};
    var partes = [];
    var e = (typeof ESPECIALIZACOES !== "undefined")
        ? ESPECIALIZACOES.filter(function (x) { return x.id === f.especializacao; })[0]
        : null;
    if (e) { partes.push(e.nome); }
    partes.push("nível " + (f.nivel || 1));
    if (f.tecnica) { partes.push(f.tecnica); }
    return partes.join(" · ");
}

function _cartaoFicha(env) {
    var trancada = !!(env.pin && env.pin.sal);
    var atual = typeof ENVELOPE !== "undefined" && ENVELOPE && ENVELOPE.id === env.id;
    var f = env.ficha || {};

    var capa = f.retrato
        ? '<img src="' + _esc(f.retrato) + '" alt="">'
        : '<span class="mesa-capa-vazia">' + _esc((env.titulo || "?").slice(0, 1)) + "</span>";

    return '<div class="mesa-vaga ocupada' + (atual ? " atual" : "") + '">' +
        '<div class="mesa-capa">' + capa +
        (trancada ? '<span class="mesa-cadeado" title="Protegida por PIN">' +
            ICONE_CADEADO + "</span>" : "") +
        (atual ? '<span class="mesa-selo-atual">aberta</span>' : "") +
        "</div>" +

        '<div class="mesa-vaga-corpo">' +
        '<div class="mesa-vaga-nome">' + _esc(env.titulo || "Sem nome") + "</div>" +
        '<div class="mesa-vaga-sub">' + _esc(_resumoFicha(env)) + "</div>" +
        (env.jogador ? '<div class="mesa-vaga-jogador">' + _esc(env.jogador) + "</div>" : "") +
        "</div>" +

        '<div class="mesa-vaga-acoes">' +
        '<button type="button" class="btn' + (atual ? " secundario" : "") +
        '" data-abrir-ficha="' + env.id + '">' +
        (atual ? "Voltar" : SOU_MESTRE ? "Ver" : "Acessar") + "</button>" +
        '<button type="button" class="btn-mini" data-pin-ficha="' + env.id +
        '" title="' + (trancada ? "Trocar o PIN" : "Definir um PIN") + '">' +
        (trancada ? "trocar PIN" : "definir PIN") + "</button>" +
        '<button type="button" class="btn-mini perigo" data-apagar-ficha="' + env.id +
        '" title="Remover da mesa">' + icone("fechar") + "</button>" +
        "</div></div>";
}

function desenhar_mesa() {
    var jogadores = MESA.fichas;
    var mestre = MESA.mestre;

    var vagas = jogadores.map(_cartaoFicha);
    for (var i = jogadores.length; i < mesa_lugares(); i++) {
        vagas.push('<div class="mesa-vaga vazia"><div class="mesa-vaga-papel">Jogador ' + (i + 1) +
            '</div><div class="mesa-vaga-nome">vaga livre</div>' +
            '<div class="mesa-vaga-acoes"><button type="button" class="btn secundario" ' +
            'data-nova-ficha="jogador">Criar ficha</button></div></div>');
    }

    var arm = armazemAtual();
    document.getElementById("mesa-corpo").innerHTML =
        '<div class="mesa-aviso ' + (arm.compartilha ? "ok" : "atencao") + '">' +
        (arm.compartilha
            ? "<b>Modo compartilhado.</b> As fichas ficam no servidor e quem manda no acesso é ele: cada jogador vê a própria, o mestre vê todas."
            : "<b>Modo local.</b> Estas fichas ficam <b>só neste navegador</b> — nada é compartilhado com outras pessoas. O PIN aqui é uma tranca de conveniência, não segurança: quem abrir o console lê tudo. Para valer entre seis computadores, ligue o modo compartilhado (veja MESA.md).") +
        "</div>" +
        '<h3 class="mesa-titulo">Jogadores <span>' + jogadores.length + " de " + mesa_lugares() + "</span></h3>" +
        '<div class="mesa-grade">' + vagas.join("") + "</div>" +
        '<h3 class="mesa-titulo">Mestre</h3>' +
        '<div class="mesa-grade">' +
        '<div class="mesa-vaga mestre">' +
        '<div class="mesa-vaga-papel">Mestre</div>' +
        '<div class="mesa-vaga-nome">' + _esc(mestre ? mestre.nome : "—") + "</div>" +
        '<div class="mesa-vaga-sub">sem ficha própria · lê as ' + jogadores.length + " fichas" +
        (mestre && mestre.pin ? " · trancado" : " · sem PIN") + "</div>" +
        '<div class="mesa-vaga-acoes">' +
        (SOU_MESTRE
            ? '<span class="mesa-bloqueada">acesso ligado</span>' +
              '<button type="button" class="btn-mini" data-sair-mestre="1">sair</button>'
            : '<button type="button" class="btn" data-entrar-mestre="1">Entrar como mestre</button>') +
        '<button type="button" class="btn-mini" data-pin-ficha="mestre">' +
        (mestre && mestre.pin ? "trocar PIN" : "definir PIN") + "</button>" +
        "</div></div></div>" +
        '<div class="mesa-form hidden" id="mesa-form"></div>';
}

function desenhar_form(papel) {
    var alvo = document.getElementById("mesa-form");
    alvo.classList.remove("hidden");
    alvo.innerHTML =
        "<h3>" + (papel === "mestre" ? "Ficha do mestre" : "Nova ficha de jogador") + "</h3>" +
        '<div class="imp-abas">' +
        '<button type="button" class="imp-aba ativa" data-modo-novo="zero">Em branco</button>' +
        '<button type="button" class="imp-aba" data-modo-novo="planilha">Da minha planilha</button>' +
        "</div>" +
        '<div id="modo-planilha" class="hidden">' + painel_importar() + "</div>" +
        '<div id="modo-zero">' +
        '<label class="cab-campo"><span>Nome</span>' +
        '<input type="text" id="mesa-nome" placeholder="Nome do personagem"></label>' +
        '<label class="cab-campo"><span>PIN</span>' +
        '<input type="password" id="mesa-pin" inputmode="numeric" autocomplete="new-password" ' +
        'placeholder="opcional — deixe vazio para não trancar"></label>' +
        '<p class="mesa-nota">O PIN é guardado como hash (PBKDF2, 150 mil iterações), nunca em texto puro. ' +
        "No modo local ele impede alguém de abrir a ficha pela interface, e só isso.</p>" +
        '<div class="mesa-form-acoes">' +
        '<button type="button" class="btn" data-criar-ficha="' + papel + '">Criar</button>' +
        '<button type="button" class="btn secundario" data-cancelar-form="1">Cancelar</button>' +
        "</div></div>" +
        '<p class="mesa-erro hidden" id="mesa-erro"></p>';
    document.getElementById("mesa-nome").focus();
}

function desenhar_destrancar(env) {
    var alvo = document.getElementById("mesa-form");
    alvo.classList.remove("hidden");
    alvo.innerHTML =
        "<h3>" + _esc(env.titulo) + "</h3>" +
        '<label class="cab-campo"><span>PIN</span>' +
        '<input type="password" id="mesa-pin" inputmode="numeric" autocomplete="current-password"></label>' +
        '<div class="mesa-form-acoes">' +
        '<button type="button" class="btn" data-destrancar="' + env.id + '">Abrir</button>' +
        '<button type="button" class="btn secundario" data-cancelar-form="1">Cancelar</button>' +
        '</div><p class="mesa-erro hidden" id="mesa-erro"></p>';
    var campo = document.getElementById("mesa-pin");
    campo.focus();
    campo.onkeydown = function (e) {
        if (e.key === "Enter") { document.querySelector('[data-destrancar]').click(); }
    };
}

function desenhar_pin(env) {
    var trancada = !!(env.pin && env.pin.sal);
    var alvo = document.getElementById("mesa-form");
    alvo.classList.remove("hidden");
    alvo.innerHTML =
        "<h3>" + (trancada ? "Trocar o PIN de " : "Definir o PIN de ") + _esc(env.titulo) + "</h3>" +
        (trancada
            ? '<label class="cab-campo"><span>PIN atual</span>' +
              '<input type="password" id="pin-atual" inputmode="numeric" autocomplete="current-password"></label>'
            : "") +
        '<label class="cab-campo"><span>Novo PIN</span>' +
        '<input type="password" id="pin-novo" inputmode="numeric" autocomplete="new-password" ' +
        'placeholder="vazio remove o PIN"></label>' +
        '<label class="cab-campo"><span>Repita</span>' +
        '<input type="password" id="pin-conf" inputmode="numeric" autocomplete="new-password"></label>' +
        '<p class="mesa-nota">Guardado como hash PBKDF2 com sal, nunca em texto puro. ' +
        "Se esquecer, não há como recuperar — só remover a ficha e criar outra.</p>" +
        '<div class="mesa-form-acoes">' +
        '<button type="button" class="btn" data-salvar-pin="' + env.id + '">Salvar</button>' +
        '<button type="button" class="btn secundario" data-cancelar-form="1">Cancelar</button>' +
        '</div><p class="mesa-erro hidden" id="mesa-erro"></p>';
    (document.getElementById("pin-atual") || document.getElementById("pin-novo")).focus();
}

function desenhar_entrar_mestre() {
    var alvo = document.getElementById("mesa-form");
    alvo.classList.remove("hidden");
    alvo.innerHTML =
        "<h3>Entrar como mestre</h3>" +
        '<p class="mesa-nota">O mestre não tem ficha própria: entrar aqui libera a leitura ' +
        "das fichas de jogador.</p>" +
        '<label class="cab-campo"><span>PIN</span>' +
        '<input type="password" id="mesa-pin" inputmode="numeric" autocomplete="current-password"></label>' +
        '<div class="mesa-form-acoes">' +
        '<button type="button" class="btn" data-confirmar-mestre="1">Entrar</button>' +
        '<button type="button" class="btn secundario" data-cancelar-form="1">Cancelar</button>' +
        '</div><p class="mesa-erro hidden" id="mesa-erro"></p>';
    var c = document.getElementById("mesa-pin");
    c.focus();
    c.onkeydown = function (e) {
        if (e.key === "Enter") { document.querySelector("[data-confirmar-mestre]").click(); }
    };
}

/* Com o mestre a ficha abre em leitura: ele acompanha, nao edita por cima
   do jogador. O botao no aviso libera a edicao quando ele quiser. */
function aplicar_leitura() {
    var app = document.getElementById("ficha");
    if (!app) { return; }
    document.body.classList.toggle("somente-leitura", LEITURA);

    /* Travar e destravar nao e simetrico: alguns controles ja nascem
       desligados por conta propria (o assistente desliga "aplicar base"
       quando nao ha o que aplicar). Marcamos quem foi travado aqui para
       destravar so esses depois, em vez de ligar tudo. */
    var trancar = function (el) {
        if (LEITURA) {
            if (!el.disabled) { el.dataset.travado = "1"; el.disabled = true; }
        } else if (el.dataset.travado) {
            delete el.dataset.travado;
            el.disabled = false;
        }
    };

    app.querySelectorAll("input, select, textarea").forEach(trancar);
    app.querySelectorAll("button").forEach(function (el) {
        /* abas, o nome da pericia e os dados seguem clicaveis: nenhum
           deles escreve na ficha, e o mestre precisa rolar pelos NPCs */
        if (el.classList.contains("aba-btn") || el.dataset.periciaVer || el.dataset.ver ||
            el.dataset.rolar !== undefined || el.dataset.rolarArma !== undefined) { return; }
        trancar(el);
    });
    var faixa = document.getElementById("aviso-leitura");
    if (faixa) { faixa.classList.toggle("hidden", !LEITURA); }
}

function _erro(msg) {
    var p = document.getElementById("mesa-erro");
    if (!p) { return; }
    p.textContent = msg;
    p.classList.remove("hidden");
}

/* Abre a ficha: joga o conteúdo do envelope em F e volta para a ficha. */
function abrir_envelope(env, comoMestre) {
    ENVELOPE = env;
    LEITURA = !!comoMestre;
    var base = ficha_nova();
    Object.keys(base).forEach(function (k) {
        if (env.ficha && env.ficha[k] !== undefined && env.ficha[k] !== null) { base[k] = env.ficha[k]; }
    });
    F = base;
    mesa_esconder();
    desenhar();
    var faixa = document.getElementById("faixa-papel");
    if (faixa) {
        faixa.textContent = SOU_MESTRE ? "Mestre · " + env.titulo : env.titulo;
        faixa.className = "pilula-papel " + (SOU_MESTRE ? "mestre" : "jogador");
    }
    aplicar_leitura();
}

function ligar_mesa() {
    var tela = document.getElementById("tela-mesa");
    if (!tela) { return; }

    tela.addEventListener("click", async function (e) {
        var b = e.target.closest("button");
        if (!b) { return; }
        var d = b.dataset;

        if (d.novaFicha) { desenhar_form(d.novaFicha); return; }

        if (d.modoNovo) {
            var planilha = d.modoNovo === "planilha";
            document.getElementById("modo-planilha").classList.toggle("hidden", !planilha);
            document.getElementById("modo-zero").classList.toggle("hidden", planilha);
            tela.querySelectorAll(".imp-aba").forEach(function (x) {
                x.classList.toggle("ativa", x.dataset.modoNovo === d.modoNovo);
            });
            return;
        }

        if (d.cancelarImport) {
            _IMPORTADO = null;
            document.getElementById("imp-saida").innerHTML = "";
            return;
        }

        if (d.confirmarImport) {
            if (!_IMPORTADO) { return; }
            var vindo = _IMPORTADO.ficha;
            if (mesa_cheia()) { _erro("A mesa já tem " + mesa_lugares() + " jogadores."); return; }
            var env = {
                id: "f" + Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
                titulo: vindo.nome || "Importada",
                jogador: vindo.jogador || "",
                papel: "jogador",
                dono: "eu",
                criadaEm: new Date().toISOString(),
                pin: null,
                ficha: vindo
            };
            MESA.fichas.push(env);
            await mesa_gravar();
            _IMPORTADO = null;
            abrir_envelope(env, false);
            return;
        }
        if (d.cancelarForm) { document.getElementById("mesa-form").classList.add("hidden"); return; }

        if (d.criarFicha) {
            var nome = (document.getElementById("mesa-nome").value || "").trim();
            if (!nome) { _erro("Dê um nome ao personagem."); return; }
            var pin = document.getElementById("mesa-pin").value;
            var r = await mesa_adicionar(nome, d.criarFicha, pin || null);
            if (!r.ok) { _erro(r.erro); return; }
            abrir_envelope(r.envelope, false);
            return;
        }

        if (d.abrirFicha) {
            var env = mesa_buscar(d.abrirFicha);
            if (!env) { return; }
            /* No modo nuvem a ficha ainda nao esta aqui: quem confere o PIN e
               manda os dados e o servidor. Sem PIN na ficha, abre direto. */
            if (ArmazemNuvem.ativo) {
                if (env.pin) { desenhar_destrancar(env); return; }
                var baixada = await ArmazemNuvem.abrir(env.id, null);
                if (!baixada.ok) { _erro(baixada.erro); return; }
                env.ficha = baixada.ficha.ficha || baixada.ficha;
                abrir_envelope(env, SOU_MESTRE);
                return;
            }
            /* o mestre ja provou quem e ao entrar: nao pede o PIN do jogador */
            if (SOU_MESTRE) { abrir_envelope(env, true); return; }
            if (env.pin && env.pin.sal) { desenhar_destrancar(env); return; }
            abrir_envelope(env, false);
            return;
        }

        if (d.destrancar) {
            var alvo = mesa_buscar(d.destrancar);
            if (!alvo) { return; }
            var digitado = document.getElementById("mesa-pin").value;

            /* No modo nuvem quem confere e o banco: se o PIN estiver errado,
               os dados simplesmente nao descem. Aqui a pagina nao tem o hash
               para comparar, e e bom que nao tenha. */
            if (ArmazemNuvem.ativo) {
                var baixada = await ArmazemNuvem.abrir(alvo.id, digitado);
                if (!baixada.ok) { _erro(baixada.erro || "PIN incorreto."); return; }
                alvo.ficha = baixada.ficha.ficha || baixada.ficha;
                abrir_envelope(alvo, SOU_MESTRE);
                return;
            }

            var ok = await conferirPin(digitado, alvo.pin);
            if (!ok) { _erro("PIN incorreto."); return; }
            abrir_envelope(alvo, false);
            return;
        }

        if (d.entrarMestre) { desenhar_entrar_mestre(); return; }

        if (d.confirmarMestre) {
            var res = await mesa_entrar_mestre(document.getElementById("mesa-pin").value);
            if (!res.ok) { _erro(res.erro); return; }
            SOU_MESTRE = true;
            ENVELOPE = null;
            desenhar_mesa();
            return;
        }

        if (d.sairMestre) { SOU_MESTRE = false; LEITURA = false; desenhar_mesa(); return; }

        if (d.pinFicha) {
            desenhar_pin(d.pinFicha === "mestre"
                ? { id: "mestre", titulo: MESA.mestre.nome, pin: MESA.mestre.pin }
                : mesa_buscar(d.pinFicha));
            return;
        }

        if (d.salvarPin) {
            var atualEl = document.getElementById("pin-atual");
            var novo = document.getElementById("pin-novo").value;
            var conf = document.getElementById("pin-conf").value;
            if (novo !== conf) { _erro("Os dois campos do novo PIN não batem."); return; }
            var res = await mesa_definir_pin(d.salvarPin, atualEl ? atualEl.value : null, novo || null);
            if (!res.ok) { _erro(res.erro); return; }
            desenhar_mesa();
            return;
        }

        if (d.apagarFicha) {
            var vitima = mesa_buscar(d.apagarFicha);
            if (!vitima) { return; }
            if (!confirm('Remover "' + vitima.titulo + '" da mesa? Não dá para desfazer.')) { return; }
            await mesa_remover(d.apagarFicha);
            if (ENVELOPE && ENVELOPE.id === d.apagarFicha) { ENVELOPE = null; }
            desenhar_mesa();
        }
    });

    if (typeof ligar_importar === "function") { ligar_importar(tela); }

    var btn = document.getElementById("btn-mesa");
    if (btn) { btn.onclick = mesa_mostrar; }
}
