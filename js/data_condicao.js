/* Condições — Livro de Regras, pgs. 317-319 */

data_condicao_fisica = [
    {
        title: "Condenado",
        icon: "crown-of-thorns",
        subtitle: "Média · +1 no custo em PE",
        description: "Um personagem condenado tem o custo em PE de todas as suas habilidades aumentado em 1",
        reference: "Livro de Regras, pg. 318.",
        bullets: [
            "Aplica-se a <b>todas</b> as habilidades do personagem.",
            "É uma das condições recebidas com <b>Exaustão 4</b>."
        ]
    },
    {
        title: "Engasgando",
        icon: "web-spit",
        subtitle: "Média · mudo e segurando o ar",
        description: "O alvo fica mudo e precisa segurar o ar",
        reference: "Livro de Regras, pg. 318.",
        bullets: [
            "O tempo que um personagem consegue segurar o ar é definido pela <b>Constituição</b>."
        ]
    },
    {
        title: "Enjoado",
        icon: "mouth-watering",
        subtitle: "Média · sem conversão de ações",
        description: "Um personagem enjoado não pode converter suas ações dentro da Hierarquia de Ações",
        reference: "Livro de Regras, pg. 318.",
        bullets: [
            "Você perde a capacidade de usar a Ação Comum como Bônus ou Movimento, e a Ação Bônus como Movimento.",
            "É a condição recebida com <b>Exaustão 5</b>."
        ]
    },
    {
        title: "Envenenado",
        icon: "poison-bottle",
        subtitle: "Média · −2 em ataques, TR e perícias",
        description: "Recebe −2 em jogadas de ataque, testes de resistência e testes de perícia enquanto o veneno durar",
        reference: "Livro de Regras, pg. 318.",
        bullets: [
            "A duração depende da fonte do veneno.",
            "Relacionado ao tipo de <b>dano venenoso</b>, causado por insetos e substâncias."
        ]
    },
    {
        title: "Sangramento",
        icon: "droplets",
        subtitle: "Variável · perda de vida por turno",
        description: "Perda de vida no início do seu turno, com um TR de Fortitude no fim dele",
        reference: "Livro de Regras, pg. 318.",
        bullets: [
            "No <b>início</b> do seu turno você sofre <b>perda de vida</b>; no <b>fim</b> dele, faça um <b>TR de Fortitude</b>.",
            "Em uma <b>falha</b> a condição persiste; em um <b>sucesso</b> ela se encerra.",
            "A CD e a perda de vida dependem do causador da condição.",
            "É aplicado pelos efeitos de crítico de <b>Besta</b> e <b>Espada</b> (Xd8) e de <b>Dardo</b> e <b>Faca</b> (Xd6), onde X é metade do seu bônus de treinamento, mínimo 1."
        ]
    },
    {
        title: "Sofrendo",
        icon: "tear-tracks",
        subtitle: "Leve · −5 em concentração e rituais",
        description: "Você está sofrendo de uma dor horrível",
        reference: "Livro de Regras, pg. 318.",
        bullets: [
            "Você recebe <b>−5 em testes de concentração</b> e em <b>testes de Prestidigitação para realizar rituais</b>.",
            "Você perde <b>3 metros</b> de movimento."
        ]
    }
];

data_condicao_incapacitacao = [
    {
        title: "Atordoado",
        icon: "thunder-struck",
        subtitle: "Extrema · sem ações nem reações",
        description: "O personagem fica desprevenido e não pode realizar ações ou reações",
        reference: "Livro de Regras, pg. 318.",
        bullets: [
            "Também recebe os efeitos de <b>Desprevenido</b> (−3 na Defesa e em TR de Reflexos).",
            "Ser imune a uma condição não o torna imune às outras citadas dentro dela: você ignora apenas os efeitos próprios da condição."
        ]
    },
    {
        title: "Inconsciente",
        icon: "sleepy",
        subtitle: "Extrema · todo ataque acerta e é crítico",
        description: "Não pode realizar ações ou reações, fica caído e larga tudo que estiver segurando",
        reference: "Livro de Regras, pg. 318.",
        bullets: [
            "Fica <b>Caído</b>, larga tudo que estiver segurando e <b>não pode falar</b>.",
            "<b>Falha automaticamente</b> em testes de resistência de Reflexos.",
            "<b>Todo ataque realizado contra ela acerta e é considerado um acerto crítico.</b>",
            "Uma criatura inconsciente que <b>não</b> esteja nas portas da morte é desperta se tomar dano ou se uma criatura gastar uma <b>ação comum</b> para chacoalhá-la."
        ]
    },
    {
        title: "Paralisado",
        icon: "frozen-block",
        subtitle: "Extrema · −10 de Defesa",
        description: "Não pode realizar ações ou reações, exceto ações completamente mentais",
        reference: "Livro de Regras, pg. 318.",
        bullets: [
            "O personagem recebe <b>−10 de Defesa</b>.",
            "<b>Falha automaticamente</b> em testes de resistência de Reflexos.",
            "<b>Todo ataque corpo a corpo</b> que acerte o personagem é considerado um <b>acerto crítico</b>.",
            "Uma criatura escalando que fique paralisada <b>cai</b>."
        ]
    },
    {
        title: "Indefeso",
        icon: "target-dummy",
        subtitle: "Especial · pode ser executado",
        description: "A criatura fica Imóvel e atordoada, e pode ser morta com uma ação completa",
        reference: "Livro de Regras, pg. 318.",
        bullets: [
            "A criatura recebe as condições <b>Imóvel</b> e <b>Atordoado</b>.",
            "Com uma criatura indefesa ao seu <b>alcance de toque</b>, você pode gastar uma <b>ação completa</b> para <b>matá-la</b> ou causar um <b>Ferimento Complexo</b> nela."
        ]
    }
];

data_condicao_mental = [
    {
        title: "Abalado",
        icon: "cracked-mask",
        subtitle: "Fraca · −1 em ataques e perícias",
        description: "O personagem sofre −1 em jogadas de ataque e testes de perícia",
        reference: "Livro de Regras, pg. 318.",
        bullets: [
            "Os prejuízos <b>não se acumulam</b> com os de Amedrontado, sendo Amedrontado uma evolução direta desta condição."
        ]
    },
    {
        title: "Amedrontado",
        icon: "terror",
        subtitle: "Média · −3 em ataques e perícias",
        description: "O personagem sofre −3 em jogadas de ataque e testes de perícia",
        reference: "Livro de Regras, pg. 318.",
        bullets: [
            "Os prejuízos desta condição <b>não se acumulam</b> com os de <b>Abalado</b>, sendo uma evolução direta dela."
        ]
    },
    {
        title: "Aterrorizado",
        icon: "surprised-skull",
        subtitle: "Forte · não pode se aproximar",
        description: "Não pode se aproximar voluntariamente da criatura que infligiu a condição",
        reference: "Livro de Regras, pg. 318.",
        bullets: [
            "A restrição vale apenas para a aproximação <b>voluntária</b> em relação a quem infligiu a condição."
        ]
    },
    {
        title: "Confuso",
        icon: "whirlwind",
        subtitle: "Média · movimento aleatório",
        description: "Um personagem confuso se comporta de maneira aleatória",
        reference: "Livro de Regras, pg. 318.",
        bullets: [
            "Você sofre <b>−4</b> em testes de Fortitude e Atletismo para se manter de pé.",
            "Após se movimentar 1,5 metro, role <b>1d4</b> (1: frente, 2: trás, 3: direita, 4: esquerda) e mova-se <b>3 metros</b> nessa direção.",
            "Repita o processo a cada intervalo de 1,5 metro de movimento voluntário.",
            "Se sua movimentação permitir, role <b>1d6</b> em vez de 1d4 (5 para baixo, 6 para cima)."
        ]
    },
    {
        title: "Enfeitiçado",
        icon: "charm",
        subtitle: "Média · −2 contra quem enfeitiçou",
        description: "A criatura recebe −2 em todos os testes que realizar contra quem a enfeitiçou",
        reference: "Livro de Regras, pg. 318.",
        bullets: [
            "O prejuízo se aplica a <b>todos</b> os testes realizados contra quem infligiu a condição."
        ]
    }
];

data_condicao_movimento = [
    {
        title: "Agarrado",
        icon: "grab",
        subtitle: "Média · desprevenido e imóvel",
        description: "Enquanto agarrado, o personagem fica desprevenido e imóvel",
        reference: "Livro de Regras, pg. 319.",
        bullets: [
            "Um personagem fazendo um <b>ataque à distância</b> contra uma criatura envolvida em uma ação de agarrar tem <b>50% de chance de acertar o alvo errado</b> (1 a 5 em 1d10).",
            "Se um personagem que está agarrando se mover, <b>a criatura agarrada o acompanha</b>.",
            "O alvo pode repetir o teste de Atletismo/Acrobacia no <b>começo do turno dele</b> para escapar.",
            "Ser agarrado exige um teste de Concentração com <b>CD 10 + o bônus de Atletismo</b> de quem agarrou."
        ]
    },
    {
        title: "Caído",
        icon: "fall-down",
        subtitle: "Fraca · −3 corpo a corpo, +3 vs. distância",
        description: "Só pode se mover 4,5 metros rastejando, ou usar uma ação de movimento para se levantar",
        reference: "Livro de Regras, pg. 319.",
        bullets: [
            "O personagem sofre <b>−3 em ataques corpo a corpo</b>.",
            "Caído no chão, você tem <b>−3 de Defesa contra ataques corpo a corpo</b>, mas <b>+3 de Defesa contra ataques a distância</b>.",
            "Um personagem caído que esteja <b>voando</b> perde imediatamente seu deslocamento de voo até ficar de pé.",
            "Um personagem de pé pode usar sua ação de movimento para <b>levantar um aliado adjacente</b> que esteja caído."
        ]
    },
    {
        title: "Enredado",
        icon: "fishing-net",
        subtitle: "Média · −2 de Defesa e ataque",
        description: "Deslocamento reduzido à metade, com −2 na Defesa e em rolagens de ataque",
        reference: "Livro de Regras, pg. 319.",
        bullets: [
            "Condições com os mesmos efeitos não se acumulam: um personagem <b>enredado e caído</b> sofre −3 na Defesa, não −5."
        ]
    },
    {
        title: "Imóvel",
        icon: "handcuffs",
        subtitle: "Forte · sem Andar, Esgueirar, Levantar ou Pular",
        description: "A criatura se torna incapaz de utilizar as ações de movimento que a deslocam",
        reference: "Livro de Regras, pg. 319.",
        bullets: [
            "Você <b>pode</b> usar <b>Sacar</b> e ações que gastem seu movimento sem te deslocar para outro ponto, como a aptidão <i>Canalizar em Golpe</i>.",
            "Você <b>não pode receber Deslocamento de qualquer fonte</b>.",
            "É aplicada pelo efeito de crítico de <b>Arco</b> (preso à superfície pela flecha) e faz parte da condição <b>Indefeso</b>."
        ]
    },
    {
        title: "Lento",
        icon: "snail",
        subtitle: "Média · todo movimento pela metade",
        description: "Toda forma de movimento do personagem é reduzida pela metade",
        reference: "Livro de Regras, pg. 319.",
        bullets: [
            "Inclui o seu valor de <b>Deslocamento</b> e qualquer outro tipo de movimento.",
            "É aplicada pelo efeito de crítico de <b>Tiro</b> (por uma rodada, em falha no TR de Fortitude) e faz parte da condição <b>Cego</b>."
        ]
    }
];

data_condicao_sensorial = [
    {
        title: "Cego",
        icon: "sunken-eye",
        subtitle: "Forte · alvos com Camuflagem Total",
        description: "Fica Surpreso e Lento, falha em testes de visão e sofre −5 em Percepção",
        reference: "Livro de Regras, pg. 319.",
        bullets: [
            "Recebe as condições <b>Surpreso</b> e <b>Lento</b>, e <b>falha em qualquer teste envolvendo a visão</b>.",
            "Todos os alvos de seus ataques recebem <b>Camuflagem Total</b> — 50% de chance de desviar automaticamente.",
            "Você é considerado cego enquanto estiver em uma área de <b>Escuridão Total</b>, a menos que algo lhe permita ver no escuro.",
            "Dentro do alcance de <b>Percepção às Cegas</b>, você percebe tudo normalmente mesmo estando Cego."
        ]
    },
    {
        title: "Desorientado",
        icon: "fluffy-swirl",
        subtitle: "Fraca · sem reação contra a próxima ação",
        description: "Incapaz de usar reações contra a próxima ação ofensiva realizada contra você",
        reference: "Livro de Regras, pg. 319.",
        bullets: [
            "Também impede <b>ataques de oportunidade</b>.",
            "A condição <b>se encerra</b> após seu efeito ser realizado.",
            "É aplicada pelo efeito de crítico de <b>Pugilato</b>, pela <b>surpresa</b> no início do combate e pela <b>Exaustão 4</b>."
        ]
    },
    {
        title: "Desprevenido",
        icon: "broken-shield",
        subtitle: "Fraca · −3 na Defesa e em Reflexos",
        description: "O personagem sofre −3 na Defesa e em Testes de Resistência de Reflexos",
        reference: "Livro de Regras, pg. 319.",
        bullets: [
            "Você fica desprevenido contra <b>inimigos que não possa ver</b>, mas saiba que estão perto.",
            "É aplicada por <b>Fintar</b>, por atacar de um esconderijo, pela <b>Exaustão 2</b>, durante um <b>Ritual Estendido</b> e pelas condições Atordoado, Agarrado e Surpreso."
        ]
    },
    {
        title: "Invisível",
        icon: "invisible",
        subtitle: "Especial · +10 em Furtividade",
        description: "O personagem não pode ser visto",
        reference: "Livro de Regras, pg. 319.",
        bullets: [
            "Recebe <b>+10 em testes de Furtividade</b> e, ao receber a condição, pode usar <b>Esconder como uma Ação Livre</b>.",
            "Se estiver Invisível durante a rolagem de <b>Iniciativa</b>, você possui <b>vantagem</b> nela.",
            "Um inimigo ainda pode atacar a área onde acredita que você esteja, com <b>desvantagem</b> caso esteja certo."
        ]
    },
    {
        title: "Surdo",
        icon: "silence",
        subtitle: "Média · −5 na Iniciativa",
        description: "Falha em qualquer teste envolvendo a audição e sofre −5 em rolagens de Iniciativa",
        reference: "Livro de Regras, pg. 319.",
        bullets: [
            "Caso já esteja em combate, seu <b>valor atual de Iniciativa também é reduzido em −5</b>, alterando a ordem dos turnos."
        ]
    },
    {
        title: "Surpreso",
        icon: "surprised",
        subtitle: "Especial · desprevenido, sem reações",
        description: "Fica Desprevenido e não pode realizar reações contra a criatura que o surpreendeu",
        reference: "Livro de Regras, pg. 319.",
        bullets: [
            "Uma criatura <b>surpreendida</b> ou que <b>não saiba da existência do perigo</b> fica surpresa contra ele.",
            "Todo personagem surpreendido no início do combate <b>perde seu primeiro turno</b>.",
            "Faz parte da condição <b>Cego</b>."
        ]
    }
];

data_condicao_vulnerabilidade = [
    {
        title: "Exposto",
        icon: "targeted",
        subtitle: "Forte · +4 nos ataques contra você",
        description: "Jogadas de ataque contra a criatura recebem +4 e causam dano adicional",
        reference: "Livro de Regras, pg. 319.",
        bullets: [
            "Ao acertarem, os ataques causam <b>dano adicional igual ao nível do atacante</b>, em cada rolagem de dano.",
            "É aplicada pelo estado de alma <b>Instável</b> e <b>Crítico</b>, e pela <b>Exaustão 3</b>."
        ]
    },
    {
        title: "Fragilizado",
        icon: "glass-heart",
        subtitle: "Forte · perde RD e resistências",
        description: "Seus valores de Redução de Dano são reduzidos a zero e suas resistências são anuladas",
        reference: "Livro de Regras, pg. 319.",
        bullets: [
            "<b>Imunidades não são anuladas.</b>",
            "Enquanto possuir esta condição, você <b>não pode ter sua Redução de Dano aumentada</b> nem se tornar resistente a nada.",
            "É aplicada pelo estado de alma <b>Crítico</b>."
        ]
    }
];
