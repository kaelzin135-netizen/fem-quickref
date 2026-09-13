/* ------------------------------------------------------------------------- */
/* Página "Evolução" — progressão de personagem                                */
/* ------------------------------------------------------------------------- */

var SECTIONS = [
    ["section-criacao", "Criação"],
    ["section-nivel", "Subindo de Nível"],
    ["section-tabela", "Tabela de Níveis"],
    ["section-feitico", "Feitiços e Aptidões"],
    ["section-maximos", "Valores Máximos"],
    ["section-multiclasse", "Multiclasse"],
    ["section-interludio", "Interlúdio e Treinos"],
    ["section-regras", "Cálculos"]
];

/* --------------------------------------------------------------- tabelas -- */

var XP = [0, 1000, 3000, 6000, 10000, 15000, 21000, 28000, 36000, 45000,
    55000, 66000, 78000, 91000, 105000, 120000, 136000, 153000, 171000, 190000];

var MARCOS = {
    1: "Habilidade base da especialização · 2 Feitiços",
    4: "2 pontos de atributo",
    5: "Bônus de treinamento +3",
    8: "2 pontos de atributo",
    9: "Bônus de treinamento +4 · Teste de Resistência Mestre",
    10: "Mestre em uma perícia · nível de aptidão e Feitiço extras",
    12: "2 pontos de atributo",
    13: "Bônus de treinamento +5",
    16: "2 pontos de atributo · última habilidade nova liberada",
    17: "Bônus de treinamento +6",
    20: "2 pontos de atributo · nível de aptidão e Feitiço extras · habilidade de 20º nível"
};

function bonusTreino(n) {
    if (n <= 4) { return 2; }
    if (n <= 8) { return 3; }
    if (n <= 12) { return 4; }
    if (n <= 16) { return 5; }
    return 6;
}

function grau(n) {
    if (n <= 4) { return "4º grau"; }
    if (n <= 7) { return "3º grau"; }
    if (n <= 13) { return "2º grau"; }
    if (n <= 18) { return "1º grau"; }
    return "—";
}

function acessoFeitico(n) {
    if (n <= 4) { return "0-1"; }
    if (n <= 8) { return "0-2"; }
    if (n <= 12) { return "0-3"; }
    if (n <= 16) { return "0-4"; }
    return "0-5";
}

/* acumulados até o nível n */
function niveisAptidao(n) {
    var t = 0;
    for (var i = 2; i <= n; i++) {
        if (i % 2 === 0) { t++; }
        if (i === 10 || i === 20) { t++; }
    }
    return t;
}

function feiticos(n) {
    var t = 2;
    for (var i = 2; i <= n; i++) {
        if (i % 2 === 0) { t++; }
        if (i === 10 || i === 20) { t++; }
    }
    return t;
}

function pontosAtributo(n) {
    return Math.floor(n / 4) * 2;
}

/* modificador máximo alcançável sem habilidades: 17 na criação, +2 pontos a
   cada 4 níveis, teto natural de 20 */
function modMaximo(n) {
    var valor = 17 + pontosAtributo(n);
    if (valor > 20) { valor = 20; }
    return Math.floor((valor - 10) / 2);
}

function bonusMestre(bt) {
    return bt + Math.floor(bt / 2);
}

function tabelaNiveis() {
    var linhas = "";
    for (var n = 1; n <= 20; n++) {
        var bt = bonusTreino(n);
        linhas += "<tr>" +
            "<td><b>" + n + "º</b></td>" +
            "<td>" + XP[n - 1].toLocaleString("pt-BR") + "</td>" +
            "<td>+" + bt + "</td>" +
            "<td>" + grau(n) + "</td>" +
            "<td>" + (n - 1) + "</td>" +
            "<td>" + niveisAptidao(n) + "</td>" +
            "<td>" + feiticos(n) + "</td>" +
            "<td>" + acessoFeitico(n) + "</td>" +
            "<td>" + pontosAtributo(n) + "</td>" +
            "<td>" + (n - 1) + "</td>" +
            "<td class=\"marco\">" + (MARCOS[n] || "—") + "</td>" +
            "</tr>";
    }
    return '<div class="table-wrap"><table class="ref"><thead><tr>' +
        "<th>Nível</th><th>XP</th><th>Treino</th><th>Grau</th>" +
        "<th>Aptidões</th><th>Nív. aptidão</th><th>Feitiços</th><th>Acesso</th>" +
        "<th>Pts. atrib.</th><th>Habilidades</th><th>Marcos do nível</th>" +
        "</tr></thead><tbody>" + linhas + "</tbody></table></div>" +
        '<p class="table-note">Colunas de <i>Aptidões</i>, <i>Feitiços</i>, <i>Pts. de atributo</i> e ' +
        "<i>Habilidades</i> são <b>acumuladas</b> até aquele nível. Restringidos não recebem aptidões " +
        "amaldiçoadas nem Feitiços — recebem Dádivas do Céu (níveis 4, 8, 12, 16 e 20) e técnicas marciais.</p>";
}

function tabelaMaximos() {
    var linhas = "";
    for (var n = 1; n <= 20; n++) {
        var bt = bonusTreino(n);
        var metade = Math.floor(n / 2);
        var mod = modMaximo(n);
        var trein = mod + metade + bt;
        var mestre = mod + metade + bonusMestre(bt);
        linhas += "<tr>" +
            "<td><b>" + n + "º</b></td>" +
            "<td>" + metade + "</td>" +
            "<td>+" + bt + "</td>" +
            "<td>+" + mod + "</td>" +
            "<td>" + (10 + mod + metade) + "</td>" +
            "<td>+" + trein + "</td>" +
            "<td>+" + mestre + "</td>" +
            "<td>+" + trein + "</td>" +
            "<td>" + (10 + metade + mod + bt) + "</td>" +
            "<td>" + (10 + mestre) + "</td>" +
            "</tr>";
    }
    return '<div class="table-wrap"><table class="ref"><thead><tr>' +
        "<th>Nível</th><th>½ nível</th><th>Treino</th><th>Mod. máx.</th>" +
        "<th>Defesa</th><th>Perícia treinada</th><th>Perícia mestre</th>" +
        "<th>Ataque / TR</th><th>CD</th><th>Atenção</th>" +
        "</tr></thead><tbody>" + linhas + "</tbody></table></div>" +
        '<p class="table-note"><b>Como ler:</b> são os <b>tetos</b> usando apenas as regras básicas — ' +
        "sem habilidades, talentos, aptidões, itens ou cobertura. Assume o melhor atributo possível " +
        "(15 na criação + 2 da origem = 17, subindo com os pontos de atributo até o teto natural de 20) " +
        "e todos os pontos concentrados nele. Distribuindo os pontos, os valores caem proporcionalmente.</p>";
}

/* ---------------------------------------------------------------- preenche */

function preencher() {
    fill_section(data_criacao, "criacao-lista", "Criação");
    fill_section(data_nivel, "nivel-lista", "Subindo de nível");

    document.getElementById("tabela-niveis").innerHTML = tabelaNiveis();
    document.getElementById("tabela-maximos").innerHTML = tabelaMaximos();

    fill_section(data_feitico, "feitico-lista", "Feitiços e aptidões");
    fill_section(data_maximos, "maximos-lista", "Valor máximo");
    fill_section(data_multiclasse, "multiclasse-lista", "Multiclasse");

    var inter = document.getElementById("content-interludio");
    add_group(inter,
        "Como o tempo entre missões funciona e o que dá para fazer com ele.",
        data_interludio.slice(0, 2), "Interlúdio");
    add_group(inter,
        "As onze <b>Linhas de Treinamento</b>. Cada uma tem 4 etapas (1 foco cada, a quarta custa 2) mais o Bônus de Treinamento Completo.",
        data_interludio.slice(2), "Linha de treinamento");

    fill_section(data_regras_calc, "regras-lista", "Regra de cálculo");
}

/* Esta página é um passo a passo: a ordem das seções é a da progressão,
   não a de tamanho. */
window.addEventListener("DOMContentLoaded", function () {
    init_engine(SECTIONS, preencher, { titulo: "Evolução", ordenarPorTamanho: false });
});
