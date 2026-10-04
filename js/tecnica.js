/* ------------------------------------------------------------------------- */
/* Página "Técnica" — criação de técnica, Feitiços, invocações e votos         */
/* Capítulos 9, 10 e 14 do Livro de Regras v2.5.2                              */
/* ------------------------------------------------------------------------- */

var SECTIONS = [
    ["section-tecnica", "Funcionamento Básico"],
    ["section-feitico", "Criando Feitiços"],
    ["section-tabelas", "Tabelas de Criação"],
    ["section-dominio", "Expansão de Domínio"],
    ["section-invocacao", "Invocações"],
    ["section-voto", "Votos de Restrição"],
    ["section-peso", "Pesos de Voto"]
];

/* --------------------------------------------------------------- tabelas -- */

var NIVEIS = ["Nível 0", "Nível 1", "Nível 2", "Nível 3", "Nível 4", "Nível 5", "Técnica Máxima"];

var DANO_ALVO = [
    ["1d10", "5", "1d10", "5"],
    ["3d8", "14", "4d8", "18"],
    ["7d8", "31", "8d8", "36"],
    ["12d8", "54", "14d8", "63"],
    ["14d10", "77", "16d10", "88"],
    ["18d12", "116", "20d12", "129"],
    ["26d12", "169", "28d12", "182"]
];

var ALCANCE = ["9 m", "12 m", "18 m", "24 m", "30 m", "48 m", "60 m"];

/* área e dano múltiplo não existem no nível 0 */
var DANO_AREA = [null, ["2d8", "9"], ["4d8", "18"], ["5d12", "32"],
    ["10d10", "55"], ["12d12", "78"], ["22d10", "120"]];

var AREA = [null, "4,5 m", "6 m", "9 m", "12 m", "18 m", "24 m"];

function tabelaDano() {
    var linhas = NIVEIS.map(function (n, i) {
        var d = DANO_ALVO[i];
        return "<tr><td>" + n + "</td><td>" + d[0] + "</td><td>" + d[1] +
            "</td><td>" + d[2] + "</td><td>" + d[3] + "</td><td>" + ALCANCE[i] + "</td></tr>";
    }).join("");
    return '<table class="tabela"><thead><tr>' +
        "<th>Nível do Feitiço</th><th>Dano com TR</th><th>média</th>" +
        "<th>Dano com ataque</th><th>média</th><th>Alcance</th>" +
        "</tr></thead><tbody>" + linhas + "</tbody></table>";
}

function tabelaArea() {
    var linhas = NIVEIS.map(function (n, i) {
        if (!DANO_AREA[i]) { return ""; }
        return "<tr><td>" + n + "</td><td>" + DANO_AREA[i][0] + "</td><td>" +
            DANO_AREA[i][1] + "</td><td>" + AREA[i] + "</td></tr>";
    }).join("");
    return '<table class="tabela"><thead><tr>' +
        "<th>Nível do Feitiço</th><th>Dano em área</th><th>média</th><th>Área afetada</th>" +
        "</tr></thead><tbody>" + linhas + "</tbody></table>";
}

function preencher() {
    fill_section(data_tecnica_base, "tecnica-lista", "Regra");
    fill_section(data_tecnica_feitico, "feitico-lista", "Tipo de Feitiço");

    document.getElementById("tabela-dano").innerHTML = tabelaDano();
    document.getElementById("tabela-area").innerHTML = tabelaArea();

    fill_section(data_tecnica_dominio, "dominio-lista", "Expansão");
    fill_section(data_invocacao, "invocacao-lista", "Invocação");
    fill_section(data_voto_tipo, "voto-lista", "Tipo de voto");
    fill_section(data_voto_peso, "peso-lista", "Peso");
}

/* A ordem é a do livro — criar a técnica, depois os Feitiços, depois o
   domínio — e não a de tamanho. */
window.addEventListener("DOMContentLoaded", function () {
    init_engine(SECTIONS, preencher, { titulo: "Técnica", ordenarPorTamanho: false });
});
