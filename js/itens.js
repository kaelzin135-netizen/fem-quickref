/* ------------------------------------------------------------------------- */
/* Página "Itens" — armas, uniformes e escudos                                 */
/* ------------------------------------------------------------------------- */

var SECTIONS = [
    ["section-simples", "Armas Simples"],
    ["section-complexa", "Armas Complexas"],
    ["section-distancia", "Armas a Distância"],
    ["section-arremesso", "Armas de Arremesso"],
    ["section-uniforme", "Uniformes"],
    ["section-escudo", "Escudos"],
    ["section-especial", "Itens Especiais"],
    ["section-propriedade", "Propriedades de Arma"]
];

function preencher() {
    fill_section(data_item_simples, "simples-lista", "Arma simples");
    fill_section(data_item_complexa, "complexa-lista", "Arma complexa");
    fill_section(data_item_distancia, "distancia-lista", "Arma a distância");
    fill_section(data_item_arremesso, "arremesso-lista", "Arma de arremesso");
    fill_section(data_item_uniforme, "uniforme-lista", "Uniforme");
    fill_section(data_item_escudo, "escudo-lista", "Escudo");
    fill_section(data_especial_c1, "especial1-lista", "Item especial");
    fill_section(data_especial_c2, "especial2-lista", "Item especial");
    fill_section(data_especial_c3, "especial3-lista", "Item especial");
    fill_section(data_especial_c4, "especial4-lista", "Item especial");
    fill_section(data_propriedade, "propriedade-lista", "Propriedade");
}

window.addEventListener("DOMContentLoaded", function () {
    init_engine(SECTIONS, preencher, { titulo: "Itens" });
});
