/* ------------------------------------------------------------------------- */
/* Rolador de dados e bandeja de rolagens                                      */
/*                                                                             */
/* O C.R.I.S. rola quando você clica no teste; aqui é o mesmo gesto. Clicar no */
/* bônus de uma perícia, resistência ou ataque rola 1d20 + bônus; o resultado  */
/* cai numa bandeja no canto, com as últimas rolagens e os botões de repetir   */
/* com vantagem ou desvantagem (o livro usa os dois o tempo todo).             */
/* ------------------------------------------------------------------------- */

var ROLAGENS = [];          /* mais recente primeiro */
var BANDEJA = false;        /* bandeja aberta? */
var MAX_ROLAGENS = 12;

function _face(faces) {
    /* o navegador tem gerador de verdade; Math.random bastaria, mas o
       crypto deixa a mesa sem discussão sobre dado viciado. */
    if (window.crypto && window.crypto.getRandomValues) {
        var a = new Uint32Array(1);
        window.crypto.getRandomValues(a);
        return (a[0] % faces) + 1;
    }
    return Math.floor(Math.random() * faces) + 1;
}

/* Lê "2d6 + 1d10 + 3" e devolve as parcelas já roladas.
   Aceita o que o jogador digita na ficha: "1d6+1d10", "1d8 + 2", "10". */
function rolarExpr(expr) {
    var limpo = String(expr || "").replace(/\s+/g, "").replace(/−/g, "-");
    var termos = limpo.match(/[+-]?(\d*d\d+|\d+)/gi) || [];
    var partes = [], total = 0;

    termos.forEach(function (t) {
        var sinal = t.charAt(0) === "-" ? -1 : 1;
        var corpo = t.replace(/^[+-]/, "");
        var d = /^(\d*)d(\d+)$/i.exec(corpo);
        if (d) {
            var qtd = Math.min(Number(d[1] || 1), 50);
            var faces = Math.min(Number(d[2]), 1000);
            if (!faces) { return; }
            var caiu = [];
            for (var i = 0; i < qtd; i++) { caiu.push(_face(faces)); }
            var soma = caiu.reduce(function (a, b) { return a + b; }, 0);
            total += sinal * soma;
            partes.push({ texto: qtd + "d" + faces, valores: caiu, sinal: sinal, faces: faces });
        } else if (corpo !== "") {
            total += sinal * Number(corpo);
            partes.push({ texto: null, fixo: sinal * Number(corpo), sinal: sinal });
        }
    });

    return { total: total, partes: partes, vazia: !partes.length };
}

/* Um teste: 1d20 + bônus, com o d20 guardado à parte para marcar 20 e 1.
   modo: "normal" | "vantagem" | "desvantagem" */
function rolarTeste(nome, bonus, modo) {
    var a = _face(20), b = _face(20), d20 = a;
    if (modo === "vantagem") { d20 = Math.max(a, b); }
    if (modo === "desvantagem") { d20 = Math.min(a, b); }

    return {
        tipo: "teste",
        nome: nome,
        modo: modo || "normal",
        bonus: Number(bonus) || 0,
        d20: d20,
        pares: (modo === "normal" || !modo) ? null : [a, b],
        total: d20 + (Number(bonus) || 0),
        critico: d20 === 20,
        desastre: d20 === 1,
        hora: new Date()
    };
}

function rolarDano(nome, expr) {
    var r = rolarExpr(expr);
    if (r.vazia) { return null; }
    return {
        tipo: "dano",
        nome: nome,
        expr: String(expr),
        detalhe: r,
        total: r.total,
        hora: new Date()
    };
}

/* --------------------------------------------------------------- registro -- */

function guardarRolagem(r) {
    if (!r) { return; }
    ROLAGENS.unshift(r);
    if (ROLAGENS.length > MAX_ROLAGENS) { ROLAGENS.length = MAX_ROLAGENS; }
    BANDEJA = true;
    desenhar_bandeja();
}

function _hora(d) {
    return String(d.getHours()).padStart(2, "0") + ":" + String(d.getMinutes()).padStart(2, "0");
}

function _detalheTeste(r) {
    var dado = r.pares
        ? "d20 " + (r.modo === "vantagem" ? "↑" : "↓") + " (" + r.pares.join(", ") + ")"
        : "d20 (" + r.d20 + ")";
    var b = r.bonus;
    return dado + (b ? (b < 0 ? " − " : " + ") + Math.abs(b) : "");
}

function _detalheDano(r) {
    return r.detalhe.partes.map(function (p) {
        if (p.texto) { return p.texto + " (" + p.valores.join(", ") + ")"; }
        return (p.fixo < 0 ? "− " : "+ ") + Math.abs(p.fixo);
    }).join(" + ").replace(/\+ − /g, "− ");
}

function cartaoRolagem(r, i) {
    var classe = "rol" + (r.critico ? " critico" : "") + (r.desastre ? " desastre" : "") +
        (i === 0 ? " nova" : "");
    var selo = r.critico ? '<span class="rol-selo">crítico</span>'
        : r.desastre ? '<span class="rol-selo ruim">desastre</span>' : "";

    return '<div class="' + classe + '">' +
        '<div class="rol-total">' + r.total + "</div>" +
        '<div class="rol-corpo">' +
        '<div class="rol-nome">' + esc(r.nome) + selo + "</div>" +
        '<div class="rol-detalhe">' +
        (r.tipo === "teste" ? esc(_detalheTeste(r)) : esc(_detalheDano(r))) +
        '<span class="rol-hora">' + _hora(r.hora) + "</span></div>" +
        (r.tipo === "teste" && i === 0
            ? '<div class="rol-acoes">' +
              '<button type="button" class="btn-mini" data-rerolar="vantagem">vantagem</button>' +
              '<button type="button" class="btn-mini" data-rerolar="desvantagem">desvantagem</button>' +
              "</div>"
            : "") +
        "</div></div>";
}

function desenhar_bandeja() {
    var caixa = document.getElementById("bandeja");
    if (!caixa) { return; }

    caixa.classList.toggle("aberta", BANDEJA);
    caixa.innerHTML = BANDEJA
        ? '<div class="bandeja-topo">' +
          "<h3>Rolagens</h3>" +
          '<button type="button" class="btn-mini" id="bandeja-limpar">limpar</button>' +
          '<button type="button" class="modal-x" id="bandeja-fechar" aria-label="Fechar"></button>' +
          "</div>" +
          '<div class="bandeja-lista">' +
          (ROLAGENS.length
              ? ROLAGENS.map(cartaoRolagem).join("")
              : '<p class="aviso">Clique no bônus de uma perícia, resistência ou ataque para rolar.</p>') +
          "</div>"
        : '<button type="button" class="bandeja-bolha" id="bandeja-abrir" ' +
          'title="Rolagens (R)">' + dadoSvg() +
          (ROLAGENS.length ? '<span class="bandeja-n">' + ROLAGENS.length + "</span>" : "") +
          "</button>";
}

/* d20 desenhado na mesma grade de 24 dos outros ícones */
function dadoSvg() {
    return '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
        '<path d="M12 2 3 7.2v9.6L12 22l9-5.2V7.2L12 2zm0 2.3 6.6 3.8L12 11.9 5.4 8.1 12 4.3zM' +
        '4.8 9.6 11 13.2v6.9l-6.2-3.6V9.6zm8.2 10.5v-6.9l6.2-3.6v6.9l-6.2 3.6z"/></svg>';
}

/* Repete a última rolagem de teste em outro modo. */
function rerolar(modo) {
    var ultima = ROLAGENS[0];
    if (!ultima || ultima.tipo !== "teste") { return; }
    guardarRolagem(rolarTeste(ultima.nome, ultima.bonus, modo));
}
