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
    ["section-propriedade", "Propriedades de Arma"]
];

/* As propriedades que aparecem nas tabelas, explicadas uma vez só. */
var data_propriedade = [
    {
        title: "Alcance [curto/longo]", icon: "archery-target", subtitle: "armas a distância",
        description: "A distância que a arma cobre sem e com penalidade",
        reference: "Livro de Regras, pgs. 132-134.",
        bullets: ["O primeiro valor é o alcance normal; até o segundo, o ataque é feito com <b>desvantagem</b>."]
    },
    {
        title: "Ampla", icon: "crossed-axes", subtitle: "propriedade",
        description: "A arma cobre uma área maior ao golpear",
        reference: "Livro de Regras, pgs. 132-134.",
        bullets: ["Permite atingir mais de um alvo adjacente com o mesmo golpe, conforme a regra da arma."]
    },
    {
        title: "Aparar", icon: "shield-reflect", subtitle: "propriedade",
        description: "Serve para desviar golpes",
        reference: "Livro de Regras, pgs. 132-134.",
        bullets: ["Pode ser usada para aparar ataques recebidos."]
    },
    {
        title: "Apunhaladora", icon: "backstab", subtitle: "propriedade",
        description: "Boa para golpes precisos e escondidos",
        reference: "Livro de Regras, pgs. 132-134.",
        bullets: ["Favorece ataques furtivos e golpes em pontos vitais."]
    },
    {
        title: "Arremessável [curto/longo]", icon: "flying-dagger", subtitle: "propriedade",
        description: "A arma pode ser lançada",
        reference: "Livro de Regras, pgs. 132-134.",
        bullets: ["Pode ser arremessada no alcance indicado, mantendo o dano."]
    },
    {
        title: "Duas mãos", icon: "fist", subtitle: "propriedade",
        description: "Exige as duas mãos para ser manejada",
        reference: "Livro de Regras, pgs. 132-134.",
        bullets: ["Ocupa as duas mãos: não dá para usar escudo ou uma segunda arma junto."]
    },
    {
        title: "Dupla", icon: "dervish-swords", subtitle: "propriedade",
        description: "Tem duas pontas de ataque",
        reference: "Livro de Regras, pgs. 132-134.",
        bullets: ["Conta como duas armas para efeito de luta com duas armas."]
    },
    {
        title: "Emperrar", icon: "cancel", subtitle: "armas de fogo",
        description: "A arma pode travar",
        reference: "Livro de Regras, pgs. 132-134.",
        bullets: ["Em certos resultados a arma emperra e precisa ser destravada antes do próximo disparo."]
    },
    {
        title: "Enérgica", icon: "energy-sword", subtitle: "propriedade",
        description: "Conduz bem a energia amaldiçoada",
        reference: "Livro de Regras, pgs. 132-134.",
        bullets: ["Interage melhor com efeitos que canalizam energia amaldiçoada pela arma."]
    },
    {
        title: "Especial", icon: "help", subtitle: "propriedade",
        description: "A arma tem uma regra própria",
        reference: "Livro de Regras, pgs. 132-134.",
        bullets: ["Veja o texto da arma no livro: ela tem um funcionamento que não cabe nas outras propriedades."]
    },
    {
        title: "Estendida", icon: "spiral-arrow", subtitle: "propriedade",
        description: "Alcança mais longe no corpo a corpo",
        reference: "Livro de Regras, pgs. 132-134.",
        bullets: ["Atinge alvos a uma distância maior que o alcance normal de corpo a corpo."]
    },
    {
        title: "Fatal [dado] · Mortal [dado]", icon: "broken-skull", subtitle: "propriedade",
        description: "O dado de dano aumenta no acerto crítico",
        reference: "Livro de Regras, pgs. 132-134.",
        bullets: ["No crítico, o dado de dano da arma passa a ser o indicado pela propriedade."]
    },
    {
        title: "Fineza", icon: "acrobatic", subtitle: "propriedade",
        description: "Depende mais de precisão que de força",
        reference: "Livro de Regras, pgs. 132-134.",
        bullets: ["Permite usar <b>Destreza</b> no lugar de Força nas jogadas de ataque e dano."]
    },
    {
        title: "Leve", icon: "feathered-wing", subtitle: "propriedade",
        description: "Fácil de manejar com uma mão",
        reference: "Livro de Regras, pgs. 132-134.",
        bullets: ["Favorece a luta com duas armas."]
    },
    {
        title: "Marcial", icon: "crossed-swords", subtitle: "propriedade",
        description: "Exige treinamento em armas marciais",
        reference: "Livro de Regras, pgs. 132-134.",
        bullets: ["Sem o treinamento adequado você <b>não soma o bônus de treinamento</b> nas jogadas de ataque."]
    },
    {
        title: "Modular [tipo]", icon: "cubes", subtitle: "propriedade",
        description: "O tipo de dano pode ser trocado",
        reference: "Livro de Regras, pgs. 132-134.",
        bullets: ["Você pode escolher causar o tipo de dano indicado no lugar do tipo padrão da arma."]
    },
    {
        title: "Oscilante", icon: "quake-stomp", subtitle: "propriedade",
        description: "O peso leva o golpe adiante",
        reference: "Livro de Regras, pgs. 132-134.",
        bullets: ["O impulso da arma continua após o golpe, conforme a regra dela."]
    },
    {
        title: "Pesada [valor]", icon: "anvil", subtitle: "propriedade",
        description: "Precisa de um mínimo de Força",
        reference: "Livro de Regras, pgs. 132-134.",
        bullets: ["Exige o valor de <b>Força</b> indicado; abaixo dele o manejo é prejudicado."]
    },
    {
        title: "Recarga [n]", icon: "bullets", subtitle: "armas de fogo",
        description: "Quantos disparos antes de recarregar",
        reference: "Livro de Regras, pgs. 132-134.",
        bullets: ["A arma dispara o número indicado de vezes antes de precisar ser recarregada."]
    },
    {
        title: "Versátil", icon: "cycle", subtitle: "propriedade",
        description: "Muda de dado conforme as mãos usadas",
        reference: "Livro de Regras, pgs. 132-134.",
        bullets: ["O primeiro dado é com uma mão; o segundo, com as duas."]
    }
];

function preencher() {
    fill_section(data_item_simples, "simples-lista", "Arma simples");
    fill_section(data_item_complexa, "complexa-lista", "Arma complexa");
    fill_section(data_item_distancia, "distancia-lista", "Arma a distância");
    fill_section(data_item_arremesso, "arremesso-lista", "Arma de arremesso");
    fill_section(data_item_uniforme, "uniforme-lista", "Uniforme");
    fill_section(data_item_escudo, "escudo-lista", "Escudo");
    fill_section(data_propriedade, "propriedade-lista", "Propriedade");
}

window.addEventListener("DOMContentLoaded", function () {
    init_engine(SECTIONS, preencher, { titulo: "Itens" });
});
