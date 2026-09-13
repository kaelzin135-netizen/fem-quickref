/* ------------------------------------------------------------------------- */
/* Página "Habilidades" — especializações, talentos e aptidões                 */
/* ------------------------------------------------------------------------- */

var SECTIONS = [
    ["section-lutador", "Lutador"],
    ["section-combate", "Esp. em Combate"],
    ["section-tecnica", "Esp. em Técnica"],
    ["section-controlador", "Controlador"],
    ["section-suporte", "Suporte"],
    ["section-restringido", "Restringido"],
    ["section-talento", "Talentos"],
    ["section-aptidao", "Aptidões"]
];

/* [id da seção, rótulo do modal, base, opções, rótulo das opções, habilidades] */
var ESPECIALIZACOES = [
    ["lutador", "Lutador", data_base_lutador, data_opcoes_lutador,
        "Manobras de empolgação e manobras finalizadoras, liberadas pelas habilidades acima.",
        data_hab_lutador],
    ["combate", "Esp. em Combate", data_base_combate, data_opcoes_combate,
        "Estilos de combate, artes do combate e posturas — as listas de escolha da especialização.",
        data_hab_combate],
    ["tecnica", "Esp. em Técnica", data_base_tecnica, data_opcoes_tecnica,
        "As Mudanças de Fundamento, escolhidas por Domínio dos Fundamentos.",
        data_hab_tecnica],
    ["controlador", "Controlador", data_base_controlador, data_opcoes_controlador,
        "Melhorias de invocação e as habilidades detalhadas ao final da especialização.",
        data_hab_controlador],
    ["suporte", "Suporte", data_base_suporte, data_opcoes_suporte,
        "Os apoios avançados, escolhidos pela habilidade Apoio Avançado.",
        data_hab_suporte],
    ["restringido", "Restringido", data_base_restringido, data_opcoes_restringido,
        "As Dádivas do Céu, recebidas no 4º nível e a cada 4 níveis.",
        data_hab_restringido]
];

function niveis_de(lista) {
    var vistos = {};
    lista.forEach(function (a) { if (a.nivel) { vistos[a.nivel] = true; } });
    return Object.keys(vistos).map(Number).sort(function (a, b) { return a - b; });
}

function preencher() {
    ESPECIALIZACOES.forEach(function (e) {
        var chave = e[0], rotulo = e[1], base = e[2], opcoes = e[3], txtOpcoes = e[4], habs = e[5];
        var content = document.getElementById("content-" + chave);
        if (!content) { return; }

        add_group(content,
            "Características da especialização e habilidades base, recebidas automaticamente ao subir de nível.",
            base, rotulo + " · base");

        if (opcoes && opcoes.length) {
            add_group(content, txtOpcoes, opcoes, rotulo + " · escolha");
        }

        niveis_de(habs).forEach(function (n) {
            var doNivel = habs.filter(function (a) { return a.nivel === n; });
            add_group(content,
                "<b>Habilidades de " + n + "º nível</b> — escolha uma habilidade (ou um talento) a cada nível, atendendo aos pré-requisitos.",
                doNivel, rotulo + " · " + n + "º nível");
        });
    });

    var talentos = document.getElementById("content-talento");
    add_group(talentos,
        "Talentos gerais podem ser escolhidos no lugar de uma habilidade de especialização ao subir de nível.",
        data_talento_geral, "Talento geral");
    add_group(talentos,
        "Talentos de origem são exclusivos de determinadas origens de personagem.",
        data_talento_origem, "Talento de origem");

    var aptidoes = document.getElementById("content-aptidao");
    add_group(aptidoes,
        "<b>Aura (AU)</b> — o conhecimento e a compreensão sobre a própria energia amaldiçoada.",
        data_apt_aura, "Aptidão de aura");
    add_group(aptidoes,
        "<b>Controle e Leitura (CL)</b> — liberar e controlar a energia, e ler fluxos e auras.",
        data_apt_controle, "Aptidão de controle");
    add_group(aptidoes,
        "<b>Domínio (DOM)</b> — dos usos simples à inigualável expansão de domínio.",
        data_apt_dominio, "Aptidão de domínio");
    add_group(aptidoes,
        "<b>Barreira (BAR)</b> — paredes, cortinas e o controle do campo de batalha.",
        data_apt_barreira, "Aptidão de barreira");
    add_group(aptidoes,
        "<b>Energia Reversa (ER)</b> — a energia amaldiçoada transformada em positiva.",
        data_apt_reversa, "Energia reversa");
    add_group(aptidoes,
        "<b>Especiais</b> — as aptidões mais raras e poderosas do jujutsu.",
        data_apt_especial, "Aptidão especial");
}

window.addEventListener("DOMContentLoaded", function () {
    init_engine(SECTIONS, preencher);
});
