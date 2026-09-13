/* ------------------------------------------------------------------------- */
/* Tela da mesa: escolher, criar e destrancar fichas                           */
/* ------------------------------------------------------------------------- */

var ENVELOPE = null;   /* a ficha aberta no momento */

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

function _cartaoFicha(env, podeAbrir) {
    var trancada = !!(env.pin && env.pin.sal);
    return '<div class="mesa-vaga ocupada' + (env.papel === "mestre" ? " mestre" : "") + '">' +
        '<div class="mesa-vaga-papel">' + (env.papel === "mestre" ? "Mestre" : "Jogador") + "</div>" +
        '<div class="mesa-vaga-nome">' + _esc(env.titulo || "Sem nome") + "</div>" +
        (env.jogador ? '<div class="mesa-vaga-jogador">' + _esc(env.jogador) + "</div>" : "") +
        '<div class="mesa-vaga-sub">' +
        (env.ficha && env.ficha.especializacao ? _esc(env.ficha.especializacao) + " · " : "") +
        "nível " + ((env.ficha && env.ficha.nivel) || 1) +
        (trancada ? " · trancada" : " · sem PIN") + "</div>" +
        '<div class="mesa-vaga-acoes">' +
        (podeAbrir
            ? '<button type="button" class="btn" data-abrir-ficha="' + env.id + '">Abrir</button>'
            : '<span class="mesa-bloqueada">só o mestre</span>') +
        '<button type="button" class="btn-mini" data-pin-ficha="' + env.id + '">' +
        (trancada ? "trocar PIN" : "definir PIN") + "</button>" +
        '<button type="button" class="btn-mini perigo" data-apagar-ficha="' + env.id +
        '" title="Remover da mesa">remover</button>' +
        "</div></div>";
}

function desenhar_mesa() {
    var jogadores = MESA.fichas.filter(function (f) { return f.papel !== "mestre"; });
    var mestre = MESA.fichas.filter(function (f) { return f.papel === "mestre"; })[0] || null;
    var souMestre = !!(ENVELOPE && ENVELOPE.papel === "mestre");

    var vagas = jogadores.map(function (e) {
        return _cartaoFicha(e, souMestre || !ENVELOPE || ENVELOPE.id === e.id);
    });
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
        (mestre ? _cartaoFicha(mestre, true)
            : '<div class="mesa-vaga vazia"><div class="mesa-vaga-papel">Mestre</div>' +
              '<div class="mesa-vaga-nome">vaga livre</div>' +
              '<div class="mesa-vaga-acoes"><button type="button" class="btn secundario" ' +
              'data-nova-ficha="mestre">Criar ficha do mestre</button></div></div>') +
        "</div>" +
        '<div class="mesa-form hidden" id="mesa-form"></div>';
}

function desenhar_form(papel) {
    var alvo = document.getElementById("mesa-form");
    alvo.classList.remove("hidden");
    alvo.innerHTML =
        "<h3>" + (papel === "mestre" ? "Ficha do mestre" : "Nova ficha de jogador") + "</h3>" +
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
        '</div><p class="mesa-erro hidden" id="mesa-erro"></p>';
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

function _erro(msg) {
    var p = document.getElementById("mesa-erro");
    if (!p) { return; }
    p.textContent = msg;
    p.classList.remove("hidden");
}

/* Abre a ficha: joga o conteúdo do envelope em F e volta para a ficha. */
function abrir_envelope(env) {
    ENVELOPE = env;
    var base = ficha_nova();
    Object.keys(base).forEach(function (k) {
        if (env.ficha && env.ficha[k] !== undefined && env.ficha[k] !== null) { base[k] = env.ficha[k]; }
    });
    F = base;
    mesa_esconder();
    desenhar();
    var faixa = document.getElementById("faixa-papel");
    if (faixa) {
        faixa.textContent = env.papel === "mestre" ? "Mestre" : "Jogador";
        faixa.className = "pilula-papel " + env.papel;
    }
}

function ligar_mesa() {
    var tela = document.getElementById("tela-mesa");
    if (!tela) { return; }

    tela.addEventListener("click", async function (e) {
        var b = e.target.closest("button");
        if (!b) { return; }
        var d = b.dataset;

        if (d.novaFicha) { desenhar_form(d.novaFicha); return; }
        if (d.cancelarForm) { document.getElementById("mesa-form").classList.add("hidden"); return; }

        if (d.criarFicha) {
            var nome = (document.getElementById("mesa-nome").value || "").trim();
            if (!nome) { _erro("Dê um nome ao personagem."); return; }
            var pin = document.getElementById("mesa-pin").value;
            var r = await mesa_adicionar(nome, d.criarFicha, pin || null);
            if (!r.ok) { _erro(r.erro); return; }
            abrir_envelope(r.envelope);
            return;
        }

        if (d.abrirFicha) {
            var env = mesa_buscar(d.abrirFicha);
            if (!env) { return; }
            if (env.pin && env.pin.sal) { desenhar_destrancar(env); return; }
            abrir_envelope(env);
            return;
        }

        if (d.destrancar) {
            var alvo = mesa_buscar(d.destrancar);
            var ok = await conferirPin(document.getElementById("mesa-pin").value, alvo.pin);
            if (!ok) { _erro("PIN incorreto."); return; }
            abrir_envelope(alvo);
            return;
        }

        if (d.pinFicha) { desenhar_pin(mesa_buscar(d.pinFicha)); return; }

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

    var btn = document.getElementById("btn-mesa");
    if (btn) { btn.onclick = mesa_mostrar; }
}
