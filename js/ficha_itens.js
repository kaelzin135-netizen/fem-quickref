/* ------------------------------------------------------------------------- */
/* Aba Itens — armas, proteções e o catálogo do livro                          */
/*                                                                             */
/* O inventário solto (nome, quantidade, peso, preço) continua no Registro;    */
/* aqui ficam as peças com regra: o que ataca e o que defende.                 */
/* ------------------------------------------------------------------------- */

var FILTRO_ITEM = "";
var CAT_ITEM = "";

var COLUNAS_ARMA = [
    { id: "arma", nome: "Arma", largo: true },
    { id: "bonus", nome: "Bônus" },
    { id: "dano", nome: "Dano" },
    { id: "critico", nome: "Crít." },
    { id: "tipo", nome: "Tipo" },
    { id: "alcance", nome: "Alcance" },
    { id: "propriedades", nome: "Propriedades", largo: true }
];

function linhaArma(a, i) {
    return '<div class="linha-arma">' +
        COLUNAS_ARMA.map(function (c) {
            return '<input type="text" class="campo-arma' + (c.largo ? " largo" : "") +
                '" data-lista="armas" data-i="' + i + '" data-chave="' + c.id +
                '" value="' + esc(a[c.id] || "") + '" title="' + esc(c.nome) +
                '" placeholder="' + esc(c.nome.toLowerCase()) + '">';
        }).join("") +
        '<button type="button" class="btn-mini perigo" data-remover-lista="armas" data-i="' + i +
        '">' + icone("fechar") + "</button></div>";
}

/* O que o personagem carrega de proteção, com o efeito à vista. */
function linhaDefesa(d, i) {
    return '<div class="linha-defesa">' +
        '<input type="text" class="campo-arma largo" data-lista="protecoes" data-i="' + i +
        '" data-chave="nome" value="' + esc(d.nome || "") + '" placeholder="nome">' +
        '<label class="def-campo"><span>' + (d.tipo === "Escudo" ? "RD" : "Defesa") + "</span>" +
        '<input type="text" class="micro" data-lista="protecoes" data-i="' + i +
        '" data-chave="efeito" value="' + esc(d.efeito || "") + '"></label>' +
        '<label class="def-campo"><span>Penal.</span>' +
        '<input type="text" class="micro" data-lista="protecoes" data-i="' + i +
        '" data-chave="penalidade" value="' + esc(d.penalidade || "") + '"></label>' +
        '<label class="def-campo"><span>Custo</span>' +
        '<input type="text" class="micro" data-lista="protecoes" data-i="' + i +
        '" data-chave="custo" value="' + esc(d.custo == null ? "" : d.custo) + '"></label>' +
        '<button type="button" class="btn-mini perigo" data-remover-lista="protecoes" data-i="' + i +
        '">' + icone("fechar") + "</button></div>";
}

/* ------------------------------------------------------- catálogo ------- */

function cartaoItemLivro(it, i) {
    var detalhes = it.dano
        ? [["Dano", it.dano], ["Crítico", it.critico], ["Espaços", it.espacos],
           ["Custo", it.custo], ["Grupo", it.grupo]]
        : [[it.rd !== undefined ? "Redução de dano" : "Bônus na Defesa", it.rd || it.defesa],
           ["Penalidade", it.penalidade], ["Custo", it.custo]];

    return '<div class="item-livro">' +
        '<div class="item-livro-topo">' +
        '<b>' + esc(it.nome) + "</b>" +
        '<span class="item-livro-cat">' + esc(it.categoria) + "</span>" +
        '<button type="button" class="btn-mini" data-add-item-livro="' + i + '">' +
        icone("add") + "</button>" +
        "</div>" +
        '<div class="item-livro-num">' +
        detalhes.filter(function (d) { return d[1] !== undefined && d[1] !== ""; })
            .map(function (d) { return "<span>" + esc(d[0]) + " <b>" + esc(d[1]) + "</b></span>"; })
            .join("") + "</div>" +
        (it.propriedades ? '<div class="item-livro-prop">' + esc(it.propriedades) + "</div>" : "") +
        "</div>";
}

function desenhar_itens_aba() {
    var alvo = document.getElementById("ficha-itens-aba");
    if (!alvo) { return; }

    var armas = (F.armas || []).map(linhaArma).join("");
    var prot = (F.protecoes || []).map(linhaDefesa).join("");

    var catalogo = typeof ITENS_LIVRO === "undefined" ? [] : ITENS_LIVRO;
    var cats = [];
    catalogo.forEach(function (i) { if (cats.indexOf(i.categoria) < 0) { cats.push(i.categoria); } });

    var busca = FILTRO_ITEM.toLowerCase();
    var filtrados = catalogo
        .map(function (it, i) { return { it: it, i: i }; })
        .filter(function (x) {
            if (CAT_ITEM && x.it.categoria !== CAT_ITEM) { return false; }
            if (!busca) { return true; }
            return (x.it.nome + " " + (x.it.propriedades || "") + " " + (x.it.grupo || ""))
                .toLowerCase().indexOf(busca) >= 0;
        });

    alvo.innerHTML =
        '<h2>Jogadas de ataque <span class="h2-nota">as armas que você usa</span></h2>' +
        '<div class="cab-arma">' +
        COLUNAS_ARMA.map(function (c) {
            return '<span' + (c.largo ? ' class="largo"' : "") + ">" + esc(c.nome) + "</span>";
        }).join("") + "<span></span></div>" +
        '<div class="lista-armas">' +
        (armas || '<p class="aviso">Nenhuma arma anotada. Pegue uma do catálogo abaixo ou crie à mão.</p>') +
        "</div>" +
        '<button type="button" class="btn secundario" data-add-lista="armas">' +
        icone("add") + "Arma</button>" +

        '<h2>Proteções <span class="h2-nota">uniforme e escudo</span></h2>' +
        '<div class="lista-protecoes">' +
        (prot || '<p class="aviso">Nenhuma proteção anotada.</p>') + "</div>" +
        '<button type="button" class="btn secundario" data-add-lista="protecoes">' +
        icone("add") + "Proteção</button>" +

        '<h2>Catálogo do livro <span class="h2-nota">' + catalogo.length + " itens</span></h2>" +
        '<div class="item-barra">' +
        '<input type="search" id="filtro-item" placeholder="Filtrar por nome, propriedade ou grupo" value="' +
        esc(FILTRO_ITEM) + '">' +
        "</div>" +
        '<div class="item-cats">' +
        '<button type="button" class="cat-chip' + (CAT_ITEM ? "" : " ativa") +
        '" data-cat-item="">todas</button>' +
        cats.map(function (c) {
            return '<button type="button" class="cat-chip' + (CAT_ITEM === c ? " ativa" : "") +
                '" data-cat-item="' + esc(c) + '">' + esc(c) + "</button>";
        }).join("") + "</div>" +
        '<div class="grade-itens-livro">' +
        (filtrados.length
            ? filtrados.map(function (x) { return cartaoItemLivro(x.it, x.i); }).join("")
            : '<p class="aviso">Nada com esse filtro.</p>') +
        "</div>";
}

/* Pegar do catálogo: arma vai para as jogadas de ataque, proteção para as
   proteções, e os dois também entram no inventário ocupando espaço. */
function pegar_item_livro(i) {
    var it = ITENS_LIVRO[i];
    if (!it) { return; }

    if (it.dano !== undefined) {
        if (!F.armas) { F.armas = []; }
        F.armas.push({
            arma: it.nome, bonus: "", dano: it.dano, critico: it.critico,
            tipo: "", alcance: "", propriedades: it.propriedades || ""
        });
    } else {
        if (!F.protecoes) { F.protecoes = []; }
        F.protecoes.push({
            nome: it.nome, tipo: it.categoria,
            efeito: it.rd !== undefined ? it.rd : (it.defesa || ""),
            penalidade: it.penalidade || "", custo: it.custo
        });
    }

    if (!F.inventario) { F.inventario = []; }
    F.inventario.push({
        nome: it.nome, quant: 1,
        peso: it.espacos !== undefined ? it.espacos : 1,
        preco: it.custo == null ? "" : String(it.custo)
    });

    desenhar();
}
