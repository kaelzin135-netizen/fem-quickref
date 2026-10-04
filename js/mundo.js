/* ------------------------------------------------------------------------- */
/* Página "Mundo" — Capítulos 1 e 13                                           */
/* ------------------------------------------------------------------------- */

var SECTIONS = [
    ["section-conceito", "O Mundo do Jujutsu"],
    ["section-descanso2", "Descanso e Interlúdio"]
];

function preencher() {
    fill_section(data_mundo_conceito, "conceito-lista", "Conceito");
    fill_section(data_mundo_descanso, "descanso2-lista", "Descanso");
}

window.addEventListener("DOMContentLoaded", function () {
    init_engine(SECTIONS, preencher, { titulo: "Mundo", ordenarPorTamanho: false });
});
