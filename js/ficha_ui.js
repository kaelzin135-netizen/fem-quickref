/* ------------------------------------------------------------------------- */
/* Ficha — três colunas em uma tela, coluna 3 em abas                          */
/* Estrutura inspirada na do C.R.I.S. (424 / 356 / 500, rolagem por coluna).   */
/* ------------------------------------------------------------------------- */

function esc(s) {
    return String(s == null ? "" : s)
        .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

/* Ícones Material Design (filled, viewBox 24) — o mesmo conjunto que o C.R.I.S.
   usa. Lá eles são <img> com data-URI de cor fixa; aqui vão inline com
   fill: currentColor, que segue o botão e não precisa de versão clara. */
var ICONES = {
    /* "add" e "close" são os do Material, iguais aos do C.R.I.S. */
    add: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z",
    fechar: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 " +
        "17.59 19 19 17.59 13.41 12z",
    /* frasco desenhado na mesma grade de 24, para separar homebrew de catálogo */
    frasco: "M9 2h6v2h-1v5.2l4.9 8.5A2 2 0 0 1 17.2 21H6.8a2 2 0 0 1-1.7-3.3L10 9.2V4H9V2z"
};

function icone(nome) {
    return '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
        '<path d="' + ICONES[nome] + '"/></svg>';
}

function formula(res) {
    if (!res.partes.length) { return "sem parcelas"; }
    return res.partes.map(function (p, i) {
        var v = Math.round(p.valor * 10) / 10;
        var sinal = i === 0 ? (v < 0 ? "−" : "") : (v < 0 ? " − " : " + ");
        return sinal + Math.abs(v) + " " + p.rotulo;
    }).join("");
}

function formulaCurta(res) {
    if (!res.partes.length) { return ""; }
    return res.partes.map(function (p, i) {
        var v = Math.round(p.valor * 10) / 10;
        return (i === 0 ? (v < 0 ? "−" : "") : (v < 0 ? "−" : "+")) + Math.abs(v);
    }).join("");
}

function conta(res) {
    return '<span class="conta" title="' + esc(formula(res)) + '">' +
        '<span class="conta-curta">' + esc(formulaCurta(res)) + "</span>" +
        '<span class="conta-longa">' + esc(formula(res)) + "</span></span>";
}

function opcoes(lista, valor, campoId, campoNome) {
    return lista.map(function (o) {
        var id = o[campoId || "id"], nome = o[campoNome || "nome"];
        return '<option value="' + esc(id) + '"' + (id === valor ? " selected" : "") + ">" +
            esc(nome) + "</option>";
    }).join("");
}

function origemAtual() {
    return ORIGENS.filter(function (o) { return o.id === F.origem; })[0] || null;
}

/* --------------------------------------------------- coluna 1: topo ------ */

function campoCab(rotulo, dentro, cls) {
    return '<label class="cab-campo' + (cls ? " " + cls : "") + '">' +
        "<span>" + esc(rotulo) + "</span>" + dentro + "</label>";
}

/* Faixa de identidade de largura total, no lugar da barra superior do
   C.R.I.S.: rotulo em versalete pequeno e o valor sobre um fio. */
function desenhar_identidade() {
    var e = espec();
    document.getElementById("ficha-identidade").innerHTML =
        '<div class="cab-selo" aria-hidden="true">' +
        '<svg viewBox="0 0 100 100"><polygon points="50,6 88,28 88,72 50,94 12,72 12,28"/>' +
        '<polygon class="cab-selo-int" points="50,26 71,38 71,62 50,74 29,62 29,38"/></svg></div>' +

        '<div class="cab-campos">' +
        campoCab("Personagem",
            '<input type="text" data-campo="nome" placeholder="sem nome" value="' +
            esc(F.nome) + '">', "largo") +
        campoCab("Especialização",
            '<select data-campo="especializacao"><option value="">—</option>' +
            opcoes(ESPECIALIZACOES, F.especializacao) + "</select>") +
        campoCab("Origem",
            '<select data-campo="origem"><option value="">—</option>' +
            opcoes(ORIGENS, F.origem) + "</select>") +
        campoCab("Jogador",
            '<input type="text" data-campo="jogador" value="' + esc(F.jogador) + '">') +
        campoCab("Campanha",
            '<input type="text" data-campo="campanha" value="' + esc(F.campanha) + '">') +
        campoCab("Técnica",
            '<input type="text" data-campo="tecnica" value="' + esc(F.tecnica) + '">', "largo") +
        "</div>" +

        '<div class="cab-nivel">' +
        '<label class="cab-caixa"><input type="number" min="1" max="20" data-campo="nivel" value="' +
        F.nivel + '"><span>Nível</span></label>' +
        '<div class="cab-caixa estatica"><b>' + esc(grau()) + "</b><span>Grau</span></div>" +
        '<div class="cab-caixa estatica" title="' + esc(formula(bt())) + '"><b>' +
        fmt(bt().total) + "</b><span>Treino</span></div>" +
        (e ? '<div class="cab-caixa estatica"><b>' + esc(e.pvDado) + "×" + F.nivel +
            "</b><span>Dado de PV</span></div>" : "") +
        "</div>" +
        (origemAtual() ? '<p class="nota-origem">' + esc(origemAtual().notas) + "</p>" : "");

    var alvo = document.getElementById("ficha-atrib-chave");
    if (alvo) {
        alvo.innerHTML =
            campoCab("Atrib. da CD", '<select data-campo="atribCD">' +
                opcoes(e ? ATRIBUTOS.filter(function (a) { return e.chave.indexOf(a.id) >= 0; }) :
                    ATRIBUTOS, F.atribCD) + "</select>") +
            campoCab("Atrib. de jujutsu", '<select data-campo="atribJujutsu">' +
                opcoes(ATRIBUTOS, F.atribJujutsu) + "</select>");
    }
}

function campoTexto(campo, rotulo) {
    return '<label class="campo"><span>' + esc(rotulo) + "</span>" +
        '<input type="text" data-campo="' + campo + '" value="' + esc(F[campo]) + '"></label>';
}

/* Seis atributos nos vértices do selo. As posições em % espelham o hexágono
   do SVG (raio 105 num viewBox de 300). */
var POS_SELO = {
    for: [50, 15], des: [80.3, 32.5], con: [80.3, 67.5],
    int: [50, 85], sab: [19.7, 67.5], pre: [19.7, 32.5]
};

function desenhar_atributos() {
    document.getElementById("ficha-atributos").innerHTML =
        ATRIBUTOS.map(function (a) {
            var v = valorAtributo(a.id);
            var extras = v.partes.length > 1;
            var pos = POS_SELO[a.id];
            return '<div class="no' + (extras ? " tem-bonus" : "") + '" style="left:' + pos[0] +
                "%;top:" + pos[1] + '%" title="' + esc(a.nome + " — " + formula(v)) + '">' +
                '<span class="no-mod">' + fmt(modAtributo(a.id)) + "</span>" +
                '<input type="number" min="1" max="30" data-atributo="' + a.id + '" value="' +
                (Number(F.atributosBase[a.id]) || 0) + '">' +
                '<span class="no-nome">' + esc(a.curto) + "</span>" +
                "</div>";
        }).join("");

    var e = espec();
    var cd = cdEspec();
    document.getElementById("ficha-selo-centro").innerHTML =
        '<span class="centro-rot">CD</span>' +
        '<span class="centro-val" title="' + esc(formula(cd)) + '">' + cd.total + "</span>" +
        '<span class="centro-sub">' + esc(e ? nomeAtributo(F.atribCD).slice(0, 3) : "—") + "</span>";
}

/* Barra de recurso no molde do info-bar do C.R.I.S.: rotulo centrado em
   14/700, caixa de 2.5rem com fio, o preenchimento por dentro como fundo
   e os botoes de 1.5x2rem por cima. As setas mexem no valor ATUAL - a
   esquerda perde, a direita recupera - que e mais claro que somar em
   "perdidos". */
function passoRec(campo, delta, max, glifo, titulo) {
    return '<button type="button" class="rec-bt" data-rec="' + campo +
        '" data-delta="' + delta + '" data-max="' + max + '" title="' + esc(titulo) + '">' +
        glifo + "</button>";
}

function barra(rotulo, res, campo) {
    var perdidos = Number(F[campo]) || 0;
    var atual = res.total - perdidos;
    var pct = res.total > 0 ? Math.max(0, Math.min(100, (atual / res.total) * 100)) : 0;
    var baixo = pct <= 25 ? " baixo" : pct <= 50 ? " meio" : "";
    return '<div class="rec">' +
        '<div class="rec-rot">' + esc(rotulo) + "</div>" +
        '<div class="rec-caixa">' +
        '<div class="rec-fill' + baixo + '" style="width:' + pct + '%"></div>' +
        '<div class="rec-linha">' +
        passoRec(campo, 5, res.total, "«", "−5") +
        passoRec(campo, 1, res.total, "‹", "−1") +
        '<span class="rec-valor">' +
        '<input type="number" min="0" max="' + res.total + '" data-atual="' + campo +
        '" data-max="' + res.total + '" value="' + atual + '" title="Valor atual">' +
        "<i>/" + res.total + "</i></span>" +
        passoRec(campo, -1, res.total, "›", "+1") +
        passoRec(campo, -5, res.total, "»", "+5") +
        "</div></div>" +
        '<div class="rec-pe">' + conta(res) + "</div></div>";
}

function desenhar_recursos() {
    var e = espec();
    document.getElementById("ficha-recursos").innerHTML =
        barra("Pontos de Vida", pvMax(), "pvPerdidos") +
        barra("Pontos de " + (e ? e.recurso : "Energia"), peMax(), "pePerdidos") +
        barra("Integridade da Alma", integridadeMax(), "integridadePerdida");
}

function tile(rotulo, res, sufixo) {
    return '<div class="tile">' +
        '<span class="tile-rot">' + esc(rotulo) + "</span>" +
        '<span class="tile-val">' + (Math.round(res.total * 10) / 10) +
        (sufixo ? "<i>" + esc(sufixo) + "</i>" : "") + "</span>" +
        conta(res) + "</div>";
}

function desenhar_valores() {
    document.getElementById("ficha-valores").innerHTML =
        tile("Defesa", defesa()) +
        tile("Atenção", atencao()) +
        tile("Iniciativa", iniciativa()) +
        tile("Desloc.", deslocamento(), "m");
}

function desenhar_aptidoes() {
    var e = espec();
    if (e && e.semAptidoes) {
        document.getElementById("ficha-aptidoes").innerHTML =
            '<p class="aviso">Restringido não tem aptidões — recebe Dádivas do Céu e técnicas marciais.</p>';
        return;
    }
    document.getElementById("ficha-aptidoes").innerHTML =
        APTIDOES_NIVEL.map(function (a) {
            var r = nivelAptidao(a.id);
            return '<label class="apt" title="' + esc(formula(r)) + '">' +
                '<span class="apt-nome">' + esc(a.nome) + "</span>" +
                '<input type="number" min="0" max="5" data-aptidao="' + a.id + '" value="' +
                (Number(F.aptidoes[a.id]) || 0) + '">' +
                '<span class="apt-total">' + r.total + "</span></label>";
        }).join("");
}

/* ------------------------------------------------ coluna 2 e abas -------- */

/* selo hexagonal no inicio da linha, no lugar do d20 do C.R.I.S. */
function marcaLinha() {
    return '<svg class="linha-marca" viewBox="0 0 24 24" aria-hidden="true">' +
        '<polygon points="12,2 21,7 21,17 12,22 3,17 3,7"/></svg>';
}

function linhaTeste(nome, curto, controles, res, treinado, mestre, verId) {
    /* quando ha texto no livro, o nome vira botao que abre o detalhe */
    var rotulo = verId
        ? '<button type="button" class="linha-nome linha-nome-btn" data-pericia-ver="' +
          esc(verId) + '" title="Ver para que serve">' + esc(nome) + "</button>"
        : '<span class="linha-nome">' + esc(nome) + "</span>";
    return '<div class="linha' + (treinado ? " treinada" : "") + (mestre ? " mestre" : "") + '">' +
        marcaLinha() +
        rotulo +
        '<span class="linha-attr">' + esc(curto) + "</span>" +
        controles +
        '<span class="linha-total" title="' + esc(formula(res)) + '">' + fmt(res.total) + "</span>" +
        conta(res) + "</div>";
}

/* cabecalho da tabela, como o PERICIA / DADOS / BONUS deles */
function cabecalhoLinhas(rotuloNome) {
    return '<div class="linha-cab">' +
        '<span class="linha-marca-vazia"></span>' +
        '<span class="linha-nome">' + esc(rotuloNome) + "</span>" +
        '<span class="linha-attr">Atr</span>' +
        '<span class="cab-tm">T</span><span class="cab-tm">M</span>' +
        '<span class="cab-outros">Outros</span>' +
        '<span class="linha-total">Bônus</span>' +
        '<span class="cab-conta">Conta</span></div>';
}

function ctrlTM(tipo, id, reg) {
    return '<label class="tm" title="Treinado"><input type="checkbox" data-treino="' + tipo +
        '" data-id="' + id + '" data-campo="t"' + (reg.t ? " checked" : "") + ">T</label>" +
        '<label class="tm" title="Mestre"><input type="checkbox" data-treino="' + tipo +
        '" data-id="' + id + '" data-campo="m"' + (reg.m ? " checked" : "") + ">M</label>" +
        '<input type="number" class="micro" title="Outros bônus" data-treino="' + tipo +
        '" data-id="' + id + '" data-campo="outros" value="' + (Number(reg.outros) || 0) + '">';
}

/* o que a pericia faz vem da mesma fonte da aba Combate */
function textoDaPericia(nome) {
    if (typeof data_pericia === "undefined") { return null; }
    for (var i = 0; i < data_pericia.length; i++) {
        if (data_pericia[i].title === nome) { return data_pericia[i]; }
    }
    return null;
}

/* --------------------------------------------------- pop-up ------------- */

var focoAntesDoModal = null;

function abrir_modal(titulo, sub, corpo) {
    var fundo = document.getElementById("modal-ficha");
    if (!fundo) { return; }
    focoAntesDoModal = document.activeElement;
    document.getElementById("modal-titulo").textContent = titulo;
    document.getElementById("modal-sub").textContent = sub || "";
    document.getElementById("modal-corpo").innerHTML = corpo;
    fundo.classList.remove("hidden");
    document.getElementById("modal-fechar").focus();
}

function fechar_modal() {
    var fundo = document.getElementById("modal-ficha");
    if (!fundo || fundo.classList.contains("hidden")) { return; }
    fundo.classList.add("hidden");
    if (focoAntesDoModal && focoAntesDoModal.isConnected) { focoAntesDoModal.focus(); }
    focoAntesDoModal = null;
}

function abrir_pericia(id) {
    var p = PERICIAS.filter(function (x) { return x.id === id; })[0];
    if (!p) { return; }
    var d = textoDaPericia(p.nome);
    if (!d) { return; }
    abrir_modal(p.nome, d.subtitle,
        "<p><i>" + esc(d.description) + "</i></p>" +
        (d.bullets || []).map(function (b) { return "<p>" + realcarRotulo(b) + "</p>"; }).join("") +
        (d.reference ? '<p class="ref-livro">' + esc(d.reference) + "</p>" : ""));
}

/* "Exemplos:" e afins vao no acento, como os termos destacados do C.R.I.S.
   O livro do F&M nao nomeia cada uso da pericia, entao so ha rotulo onde
   o proprio texto abre com um. */
function realcarRotulo(html) {
    return html.replace(/^([A-ZÀ-Ü][^:<]{1,40}):/, '<span class="rot-uso">$1:</span>');
}

function desenhar_pericias() {
    document.getElementById("ficha-pericias").innerHTML =
        cabecalhoLinhas("Perícia") +
        PERICIAS.map(function (p) {
            var reg = F.pericias[p.id];
            var temTexto = !!textoDaPericia(p.nome);
            return linhaTeste(p.nome + (p.exigeTreino ? " *" : ""), p.attr.toUpperCase(),
                ctrlTM("pericias", p.id, reg), pericia(p.id), reg.t || reg.m, reg.m,
                temTexto ? p.id : null);
        }).join("");
}

function desenhar_testes() {
    document.getElementById("ficha-resistencias").innerHTML =
        cabecalhoLinhas("Resistência") +
        RESISTENCIAS.map(function (r) {
            var reg = F.resistencias[r.id];
            return linhaTeste(r.nome, r.attr.toUpperCase(),
                ctrlTM("resistencias", r.id, reg), resistencia(r.id), reg.t || reg.m, reg.m);
        }).join("");

    document.getElementById("ficha-ataques").innerHTML =
        ATAQUES.map(function (a) {
            var reg = F.ataques[a.id];
            var ctrl = '<select class="micro" data-ataque="' + a.id + '" data-campo="attr">' +
                opcoes(ATRIBUTOS.filter(function (x) { return a.alternativas.indexOf(x.id) >= 0; }),
                    reg.attr, "id", "curto") + "</select>" +
                '<label class="tm" title="Treinado"><input type="checkbox" data-ataque="' + a.id +
                '" data-campo="t"' + (reg.t ? " checked" : "") + ">T</label>" +
                '<input type="number" class="micro" title="Outros bônus" data-ataque="' + a.id +
                '" data-campo="outros" value="' + (Number(reg.outros) || 0) + '">';
            return linhaTeste(a.nome, "", ctrl, ataque(a.id), reg.t);
        }).join("");
}

/* ------------------------------------------------------------- itens ---- */

function rotuloAlvo(id) {
    var a = ALVOS.filter(function (x) { return x.id === id; })[0];
    return a ? a.rotulo : id;
}

function desenhar_itens() {
    var lista = F.itens.length ? F.itens.map(function (item, i) {
        var chips = (item.mods || []).map(function (m, j) {
            return '<span class="chip">' + esc(rotuloAlvo(m.alvo)) + " " + fmt(m.valor) +
                '<button type="button" class="chip-x" data-remover-mod="' + i + ":" + j +
                '" title="Remover">' + icone("fechar") + "</button></span>";
        }).join("");
        return '<div class="item-ficha">' +
            '<div class="item-ficha-topo">' +
            '<button type="button" class="item-abrir" data-ver="' + i + '" title="Ver o texto">' +
            esc(item.nome) + "</button>" +
            '<span class="item-ficha-cat">' + esc(item.categoria) + "</span>" +
            '<button type="button" class="btn-mini" data-add-mod="' + i + '">' + icone("add") +
            "mod</button>" +
            '<button type="button" class="btn-mini perigo" data-remover-item="' + i +
            '" title="Remover">' + icone("fechar") + "</button>" +
            "</div>" +
            (chips ? '<div class="chips">' + chips + "</div>" : "") +
            '<div class="item-ficha-texto hidden" data-texto="' + i + '">' +
            "<p><i>" + (item.descricao || "") + "</i></p>" +
            (item.bullets || []).map(function (b) { return "<p>" + b + "</p>"; }).join("") +
            (item.referencia ? '<p class="ref-livro">' + esc(item.referencia) + "</p>" : "") +
            "</div>" +
            '<div class="form-mod hidden" data-form-mod="' + i + '">' + formularioMod(i) + "</div>" +
            "</div>";
    }).join("") : '<p class="aviso">Nenhuma habilidade ainda — use <b>Adicionar do livro</b>.</p>';

    document.getElementById("ficha-itens").innerHTML =
        '<div class="acoes-itens">' +
        '<button type="button" class="btn" id="btn-abrir-catalogo">' + icone("add") +
        "Adicionar do livro</button>" +
        '<button type="button" class="btn secundario" id="btn-abrir-homebrew">' + icone("frasco") +
        "Homebrew</button>" +
        '<span class="contagem-itens">' + F.itens.length + "</span>" +
        "</div>" +
        '<div id="painel-catalogo" class="painel hidden"></div>' +
        '<div id="painel-homebrew" class="painel hidden"></div>' +
        lista;
}

function formularioMod(i) {
    var grupos = {};
    ALVOS.forEach(function (a) { (grupos[a.grupo] = grupos[a.grupo] || []).push(a); });
    var options = Object.keys(grupos).map(function (g) {
        return '<optgroup label="' + esc(g) + '">' + grupos[g].map(function (a) {
            return '<option value="' + esc(a.id) + '">' + esc(a.rotulo) + "</option>";
        }).join("") + "</optgroup>";
    }).join("");
    return '<select class="sel-alvo">' + options + "</select>" +
        '<input type="number" class="micro val-mod" value="1" step="0.5">' +
        '<button type="button" class="btn-mini" data-confirmar-mod="' + i + '">aplicar</button>';
}

var CATALOGO_FILTRO = "";

function desenhar_catalogo() {
    var painel = document.getElementById("painel-catalogo");
    var q = normalize(CATALOGO_FILTRO.trim());
    var achados = q ? CATALOGO.filter(function (c) { return c.busca.indexOf(q) !== -1; }) : [];
    var linhas = achados.slice(0, 50).map(function (c) {
        var efeitos = ler_efeitos(c);
        return '<div class="linha-catalogo">' +
            "<div><b>" + esc(c.nome) + '</b> <span class="item-ficha-cat">' + esc(c.categoria) + "</span>" +
            '<div class="cat-sub">' + esc(c.subtitulo) + "</div>" +
            (efeitos.length ? '<div class="cat-efeitos">' + efeitos.map(function (ef) {
                return esc(rotuloAlvo(ef.alvo)) + " " + fmt(ef.valor);
            }).join(" · ") + "</div>" : "") + "</div>" +
            '<button type="button" class="btn-mini" data-add-catalogo="' +
            CATALOGO.indexOf(c) + '">' + icone("add") + "</button></div>";
    }).join("");

    painel.innerHTML =
        '<input type="search" id="busca-catalogo" placeholder="Buscar entre ' + CATALOGO.length +
        ' itens…" value="' + esc(CATALOGO_FILTRO) + '">' +
        (q ? '<p class="dica">' + achados.length + " resultado(s)</p>" : "") +
        '<div class="lista-catalogo">' + linhas + "</div>";

    var busca = document.getElementById("busca-catalogo");
    busca.oninput = function () {
        CATALOGO_FILTRO = this.value;
        desenhar_catalogo();
        var b = document.getElementById("busca-catalogo");
        b.focus();
        b.setSelectionRange(b.value.length, b.value.length);
    };
}

function desenhar_homebrew() {
    document.getElementById("painel-homebrew").innerHTML =
        '<div class="campos">' +
        '<label class="campo"><span>Nome</span><input type="text" id="hb-nome" placeholder="Punho de Brasa"></label>' +
        '<label class="campo"><span>Categoria</span><input type="text" id="hb-cat" value="Homebrew"></label>' +
        '<label class="campo largo"><span>Descrição</span><input type="text" id="hb-desc"></label>' +
        "</div>" +
        '<button type="button" class="btn" id="btn-criar-homebrew">Criar item</button>' +
        '<p class="dica">Depois use <b>+ mod</b> no item para dizer o que ele altera.</p>';
}

/* ------------------------------------------------------- foco/render ---- */

function seletorDe(el) {
    if (!el || !el.dataset) { return null; }
    var partes = [];
    ["campo", "atributo", "aptidao", "treino", "id", "ataque",
     "trilha", "etapa", "caminho", "lista", "i", "chave",
     "rd", "marca", "escolha", "instrutor", "atual", "dadoVida",
     "feitico"].forEach(function (k) {
        if (el.dataset[k] !== undefined) { partes.push("[data-" + k + '="' + el.dataset[k] + '"]'); }
    });
    return partes.length ? partes.join("") : null;
}

function comFoco(fn) {
    var ativo = document.activeElement;
    var seletor = seletorDe(ativo);
    var pos = null;
    try { pos = [ativo.selectionStart, ativo.selectionEnd]; } catch (e) { /* number input */ }
    fn();
    if (!seletor) { return; }
    var novo = document.querySelector(seletor);
    if (!novo) { return; }
    novo.focus();
    if (pos && pos[0] !== null && novo.setSelectionRange) {
        try { novo.setSelectionRange(pos[0], pos[1]); } catch (e) { /* ignora */ }
    }
}

function desenhar() {
    /* a ficha pode chegar pelo localStorage, pela mesa ou pelo Importar;
       normalizar aqui pega os tres caminhos */
    if (typeof migrarFeiticos === "function") { migrarFeiticos(F); }
    var anot = document.querySelector('[data-campo="anotacoes"]');
    if (anot && anot.value !== F.anotacoes) { anot.value = F.anotacoes || ""; }
    desenhar_identidade();
    desenhar_atributos();
    desenhar_recursos();
    desenhar_valores();
    desenhar_aptidoes();
    desenhar_pericias();
    desenhar_testes();
    desenhar_itens();
    if (typeof desenhar_marcas === "function") { desenhar_marcas(); }
    if (typeof desenhar_itens_aba === "function") { desenhar_itens_aba(); }
    if (typeof desenhar_perfil === "function") { desenhar_perfil(); }
    if (typeof desenhar_treinos === "function") { desenhar_treinos(); }
    if (typeof desenhar_registro === "function") { desenhar_registro(); }
    if (typeof desenhar_assistente === "function") { desenhar_assistente(); }
    salvar();
    /* o redesenho recria os campos, entao a trava precisa voltar */
    if (typeof aplicar_leitura === "function") { aplicar_leitura(); }
}

function recalcular() {
    comFoco(function () {
        desenhar_identidade();
        desenhar_atributos();
        desenhar_recursos();
        desenhar_valores();
        desenhar_aptidoes();
        desenhar_pericias();
        desenhar_testes();
        /* os paineis novos tambem dependem dos numeros: a trilha mostra o
           selo do que ela concede, e o perfil mostra a CD de feitico */
        if (typeof desenhar_marcas === "function") { desenhar_marcas(); }
        if (typeof desenhar_itens_aba === "function") { desenhar_itens_aba(); }
        if (typeof desenhar_perfil === "function") { desenhar_perfil(); }
        if (typeof desenhar_treinos === "function") { desenhar_treinos(); }
        if (typeof desenhar_registro === "function") { desenhar_registro(); }
        if (typeof desenhar_assistente === "function") { desenhar_assistente(); }
        salvar();
    });
}

/* ------------------------------------------------------------- eventos -- */

function trocar_aba(nome) {
    document.querySelectorAll(".aba-btn").forEach(function (b) {
        b.classList.toggle("ativa", b.dataset.aba === nome);
    });
    document.querySelectorAll(".aba-painel").forEach(function (p) {
        p.classList.toggle("hidden", p.dataset.painel !== nome);
    });
}

/* grava em "a.b" sem precisar de um tratador por campo */
function gravarCaminho(caminho, valor) {
    var partes = caminho.split(".");
    var alvo = F;
    for (var i = 0; i < partes.length - 1; i++) {
        if (!alvo[partes[i]] || typeof alvo[partes[i]] !== "object") { alvo[partes[i]] = {}; }
        alvo = alvo[partes[i]];
    }
    alvo[partes[partes.length - 1]] = valor;
}

function ligar_eventos() {
    /* A identidade fica numa faixa fora de #ficha, entao a delegacao precisa
       cobrir as duas raizes - sem isso os campos do cabecalho nao gravam. */
    var raizes = [document.getElementById("ficha"), document.getElementById("ficha-identidade")]
        .filter(Boolean);

    var raiz = {
        addEventListener: function (tipo, fn) {
            raizes.forEach(function (r) { r.addEventListener(tipo, fn); });
        }
    };

    raiz.addEventListener("input", function (e) {
        var el = e.target;
        if (el.dataset.campo === "anotacoes") { F.anotacoes = el.value; salvar(); return; }
        if (el.dataset.campo && !el.dataset.treino && !el.dataset.ataque) {
            F[el.dataset.campo] = el.type === "number" ? Number(el.value) : el.value;
            recalcular();
            return;
        }
        /* campo ligado a um caminho aninhado: "aparencia.idade" */
        if (el.dataset.caminho) {
            gravarCaminho(el.dataset.caminho, el.type === "number" ? Number(el.value) : el.value);
            salvar();
            if (/^limiteEspacos$/.test(el.dataset.caminho)) { desenhar_registro(); }
            return;
        }
        /* item de uma lista: inventario, votos, aptidoes */
        if (el.dataset.lista) {
            var arr = F[el.dataset.lista] || (F[el.dataset.lista] = []);
            var reg = arr[Number(el.dataset.i)];
            if (reg) {
                reg[el.dataset.chave] = el.type === "number" ? Number(el.value) : el.value;
                salvar();
                if (el.dataset.lista === "inventario") { desenhar_registro(); }
            }
            return;
        }
        if (el.id === "filtro-item") {
            FILTRO_ITEM = el.value;
            comFoco(desenhar_itens_aba);
            return;
        }
        if (el.id === "filtro-feitico") {
            FILTRO_FEITICO = el.value;
            comFoco(desenhar_perfil);
            return;
        }
        if (el.dataset.escolha) {
            if (!F.treinosEscolha) { F.treinosEscolha = {}; }
            F.treinosEscolha[el.dataset.escolha] = el.value;
            recalcular();
            return;
        }
        if (el.dataset.instrutor) {
            if (!F.treinosInstrutor) { F.treinosInstrutor = {}; }
            F.treinosInstrutor[el.dataset.instrutor] = el.value;
            salvar();
            return;
        }
        if (el.dataset.trilha) {
            if (!F.treinos[el.dataset.trilha]) { F.treinos[el.dataset.trilha] = [false, false, false, false]; }
            F.treinos[el.dataset.trilha][Number(el.dataset.etapa)] = el.checked;
            salvar();
            /* a trilha pode conceder deslocamento, PV ou nível de aptidão:
               recalcular para o ganho entrar (e sair) na hora */
            recalcular();
            return;
        }
        if (el.dataset.marca) {
            F.marcas[el.dataset.marca] = el.checked;
            salvar();
            return;
        }
        if (el.dataset.rd) {
            F.rds[el.dataset.rd] = Number(el.value) || 0;
            salvar();
            return;
        }
        if (el.dataset.morte) {
            F.testesMorte[el.dataset.morte] = Number(el.value) || 0;
            salvar();
            return;
        }
        if (el.dataset.dadoVida) {
            F.dadosVidaGastos[el.dataset.dadoVida] = Number(el.value) || 0;
            salvar();
            return;
        }
        if (el.dataset.atual) {
            var teto = Number(el.dataset.max) || 0;
            var novo = Math.max(0, Math.min(teto, Number(el.value) || 0));
            F[el.dataset.atual] = teto - novo;
            recalcular();
            return;
        }
        if (el.dataset.atributo) {
            F.atributosBase[el.dataset.atributo] = Number(el.value);
            recalcular();
            return;
        }
        if (el.dataset.aptidao) {
            F.aptidoes[el.dataset.aptidao] = Number(el.value);
            recalcular();
            return;
        }
        if (el.dataset.treino) {
            var reg = (el.dataset.treino === "pericias" ? F.pericias : F.resistencias)[el.dataset.id];
            reg[el.dataset.campo] = el.type === "checkbox" ? el.checked : Number(el.value);
            if (el.dataset.campo === "m" && el.checked) { reg.t = true; }
            recalcular();
            return;
        }
        if (el.dataset.ataque) {
            var a = F.ataques[el.dataset.ataque];
            a[el.dataset.campo] = el.type === "checkbox" ? el.checked : el.value;
            if (el.dataset.campo === "outros") { a.outros = Number(el.value); }
            recalcular();
        }
    });

    var fundoModal = document.getElementById("modal-ficha");
    if (fundoModal) {
        document.getElementById("modal-fechar").addEventListener("click", fechar_modal);
        fundoModal.addEventListener("mousedown", function (e) {
            if (e.target === fundoModal) { fechar_modal(); }
        });
        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape") { fechar_modal(); }
        });
    }

    raiz.addEventListener("change", function (e) {
        if (e.target.dataset.escolha) {
            if (!F.treinosEscolha) { F.treinosEscolha = {}; }
            F.treinosEscolha[e.target.dataset.escolha] = e.target.value;
            recalcular();
            return;
        }
        if (e.target.dataset.lista === "feiticos" && e.target.dataset.chave === "nivel") {
            F.feiticos[Number(e.target.dataset.i)].nivel = Number(e.target.value);
            salvar();
            desenhar_perfil();
            return;
        }
        if (e.target.id === "retrato-arquivo") {
            guardar_retrato(e.target.files && e.target.files[0]);
            return;
        }
        var el = e.target;
        if (el.tagName === "SELECT" && el.dataset.campo) { F[el.dataset.campo] = el.value; desenhar(); }
    });

    raiz.addEventListener("click", function (e) {
        var el = e.target.closest("button");
        if (!el) { return; }
        var d = el.dataset;

        if (d.aba) { trocar_aba(d.aba); return; }

        if (d.periciaVer) { abrir_pericia(d.periciaVer); return; }

        if (d.addLista) {
            if (!F[d.addLista]) { F[d.addLista] = []; }
            F[d.addLista].push(
                d.addLista === "armas" ? {
                    arma: "", bonus: "", dano: "", critico: "",
                    tipo: "", alcance: "", propriedades: ""
                } :
                d.addLista === "protecoes" ? {
                    nome: "", tipo: "", efeito: "", penalidade: "", custo: ""
                } :
                d.addLista === "inventario" ? { nome: "", quant: 1, peso: 0, preco: "" } :
                d.addLista === "votos" ? { nome: "", descricao: "" } :
                d.addLista === "feiticos" ? {
                    nome: "", nivel: 0, execucao: "", alcance: "",
                    alvo: "", duracao: "", custo: "", descricao: ""
                } :
                { nome: "", atual: "", max: "", custo: "" });
            if (d.addLista === "feiticos") { FEITICO_ABERTO = F.feiticos.length - 1; }
            desenhar();
            return;
        }
        if (d.removerLista) {
            F[d.removerLista].splice(Number(d.i), 1);
            desenhar();
            return;
        }
        if (d.tirarRetrato) { F.retrato = ""; desenhar(); return; }

        if (d.addItemLivro !== undefined) { pegar_item_livro(Number(d.addItemLivro)); return; }

        if (d.catItem !== undefined) {
            CAT_ITEM = d.catItem;
            desenhar_itens_aba();
            return;
        }

        if (d.filtroTrilha !== undefined) {
            FILTRO_TRILHA = d.filtroTrilha;
            desenhar_treinos();
            return;
        }

        if (d.abrirFeitico !== undefined) {
            var n = Number(d.abrirFeitico);
            FEITICO_ABERTO = (FEITICO_ABERTO === n) ? -1 : n;
            desenhar_perfil();
            return;
        }

        if (d.morteSet) {
            F.testesMorte[d.morteSet] = Number(d.valor);
            salvar();
            desenhar_marcas();
            return;
        }

        if (d.rec) {
            var lim = Number(d.max) || 0;
            F[d.rec] = Math.max(0, Math.min(lim, (Number(F[d.rec]) || 0) + Number(d.delta)));
            desenhar_recursos();
            salvar();
            return;
        }
        if (el.id === "btn-abrir-catalogo") {
            var p = document.getElementById("painel-catalogo");
            p.classList.toggle("hidden");
            document.getElementById("painel-homebrew").classList.add("hidden");
            if (!p.classList.contains("hidden")) {
                desenhar_catalogo();
                document.getElementById("busca-catalogo").focus();
            }
            return;
        }
        if (el.id === "btn-abrir-homebrew") {
            var h = document.getElementById("painel-homebrew");
            h.classList.toggle("hidden");
            document.getElementById("painel-catalogo").classList.add("hidden");
            if (!h.classList.contains("hidden")) { desenhar_homebrew(); }
            return;
        }
        if (el.id === "btn-criar-homebrew") {
            var nome = (document.getElementById("hb-nome").value || "").trim();
            if (!nome) { document.getElementById("hb-nome").focus(); return; }
            F.itens.push({
                nome: nome,
                categoria: (document.getElementById("hb-cat").value || "Homebrew").trim(),
                descricao: (document.getElementById("hb-desc").value || "").trim(),
                bullets: [], referencia: "", mods: []
            });
            desenhar();
            return;
        }
        if (d.addCatalogo !== undefined) {
            var c = CATALOGO[Number(d.addCatalogo)];
            F.itens.push({
                nome: c.nome, categoria: c.categoria, descricao: c.descricao,
                bullets: c.bullets, referencia: c.referencia,
                mods: ler_efeitos(c).map(function (ef) { return { alvo: ef.alvo, valor: ef.valor }; })
            });
            desenhar();
            document.getElementById("painel-catalogo").classList.remove("hidden");
            desenhar_catalogo();
            return;
        }
        if (d.removerItem !== undefined) { F.itens.splice(Number(d.removerItem), 1); desenhar(); return; }
        if (d.removerMod !== undefined) {
            var par = d.removerMod.split(":");
            F.itens[Number(par[0])].mods.splice(Number(par[1]), 1);
            desenhar();
            return;
        }
        if (d.ver !== undefined) {
            document.querySelector('[data-texto="' + d.ver + '"]').classList.toggle("hidden");
            return;
        }
        if (d.addMod !== undefined) {
            document.querySelector('[data-form-mod="' + d.addMod + '"]').classList.toggle("hidden");
            return;
        }
        if (d.confirmarMod !== undefined) {
            var caixa = el.parentElement;
            var valor = Number(caixa.querySelector(".val-mod").value);
            if (valor) {
                F.itens[Number(d.confirmarMod)].mods.push({
                    alvo: caixa.querySelector(".sel-alvo").value, valor: valor
                });
                desenhar();
            }
        }
    });

    document.getElementById("btn-contas").onclick = function () {
        var ligado = document.body.classList.toggle("mostrar-contas");
        this.classList.toggle("ligado", ligado);
        this.textContent = ligado ? "Contas detalhadas" : "Contas resumidas";
    };
    document.getElementById("btn-exportar").onclick = function () {
        var area = document.getElementById("area-json");
        area.value = JSON.stringify(F, null, 2);
        area.parentElement.classList.remove("hidden");
        area.select();
    };
    document.getElementById("btn-importar").onclick = function () {
        var area = document.getElementById("area-json");
        area.parentElement.classList.remove("hidden");
        if (!area.value.trim()) { area.focus(); return; }
        try {
            var novo = JSON.parse(area.value);
            var base = ficha_nova();
            Object.keys(base).forEach(function (k) {
                if (novo[k] !== undefined && novo[k] !== null) { base[k] = novo[k]; }
            });
            F = base;
            desenhar();
            area.parentElement.classList.add("hidden");
        } catch (err) { alert("Não consegui ler esse JSON: " + err.message); }
    };
    document.getElementById("btn-nova").onclick = function () {
        if (!confirm("Isso apaga a ficha atual deste navegador. Continuar?")) { return; }
        F = ficha_nova();
        desenhar();
    };
}

window.addEventListener("DOMContentLoaded", async function () {
    init_tema();
    montar_catalogo();
    carregar();
    desenhar();
    ligar_eventos();
    ligar_assistente();

    /* a mesa e opcional: se mesa.js nao estiver carregado, a ficha
       funciona sozinha como sempre funcionou */
    if (typeof mesa_carregar === "function") {
        await mesa_carregar();
        ligar_mesa();
        document.getElementById("mesa-fechar").onclick = function () {
            if (ENVELOPE) { mesa_esconder(); }
        };
        /* arrastar a imagem para cima do retrato */
        var app = document.getElementById("ficha");
        ["dragenter", "dragover"].forEach(function (ev) {
            app.addEventListener(ev, function (e) {
                var alvo = e.target.closest && e.target.closest(".retrato-vazio");
                if (!alvo) { return; }
                e.preventDefault();
                alvo.classList.add("sobre");
            });
        });
        app.addEventListener("dragleave", function (e) {
            var alvo = e.target.closest && e.target.closest(".retrato-vazio");
            if (alvo) { alvo.classList.remove("sobre"); }
        });
        app.addEventListener("drop", function (e) {
            var alvo = e.target.closest && e.target.closest(".retrato-vazio");
            if (!alvo) { return; }
            e.preventDefault();
            alvo.classList.remove("sobre");
            var arq = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
            if (arq && /^image\//.test(arq.type)) { guardar_retrato(arq); }
        });

        document.getElementById("btn-liberar-edicao").onclick = function () {
            LEITURA = false;
            aplicar_leitura();
        };
        /* primeira visita: cria os lugares da mesa */
        if (!MESA.fichas.length) { await mesa_semear(); }
        /* sem ficha aberta, comeca pela mesa */
        if (!ENVELOPE) { mesa_mostrar(); }
    }
});
