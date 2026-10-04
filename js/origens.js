/* ------------------------------------------------------------------------- */
/* Página "Origens" — Capítulo 3                                               */
/* ------------------------------------------------------------------------- */

var SECTIONS = [
    ["section-origem", "As Sete Origens"],
    ["section-cla", "Heranças de Clã"],
    ["section-anatomia", "Características de Anatomia"]
];

function preencher() {
    fill_section(data_origem_lista, "origem-lista", "Origem");
    fill_section(data_origem_cla, "cla-lista", "Clã");
    fill_section(data_origem_anatomia, "anatomia-lista", "Anatomia");
}

/* A ordem aqui é a do livro, não a de tamanho: origem, depois clã, depois
   anatomia, que é a sequência em que as escolhas acontecem. */
window.addEventListener("DOMContentLoaded", function () {
    init_engine(SECTIONS, preencher, { titulo: "Origens", ordenarPorTamanho: false });
});
