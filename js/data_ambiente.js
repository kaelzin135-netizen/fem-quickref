/* Ambiente, percepção, alcance e áreas — Livro de Regras, pgs. 294-299 */

data_ambiente_cobertura = [
    {
        title: "Meia Cobertura",
        icon: "checked-shield",
        subtitle: "+2 de Defesa e em Reflexos",
        description: "Concedida por um objeto que cubra pelo menos metade do corpo",
        reference: "Livro de Regras, pg. 294.",
        bullets: [
            "Exemplos: um muro baixo, um móvel grande ou <b>outra criatura</b>.",
            "Você recebe <b>+2 de Defesa</b> e <b>+2 em testes de resistência de Reflexos</b>.",
            "Não é necessária uma ação específica: basta se movimentar até o lugar e declarar que está em cobertura.",
            "Os benefícios só valem se o ataque ou efeito vier do <b>lado oposto</b> da cobertura — é possível contorná-la."
        ]
    },
    {
        title: "Cobertura 3/4",
        icon: "crenulated-shield",
        subtitle: "+4 de Defesa e em Reflexos",
        description: "Concedida por um objeto que cubra pelo menos três quartos do corpo",
        reference: "Livro de Regras, pg. 294.",
        bullets: [
            "Exemplos: uma parede robusta ou um portão de grade pesado.",
            "Você recebe <b>+4 de Defesa</b> e <b>+4 em testes de resistência de Reflexos</b>.",
            "Efeitos de cobertura <b>não são cumulativos</b>: sob Meia Cobertura e Cobertura 3/4 ao mesmo tempo, valem apenas os efeitos de 3/4."
        ]
    },
    {
        title: "Cobertura Total",
        icon: "locked-fortress",
        subtitle: "Não pode ser alvo direto",
        description: "Você recebe cobertura total quando seus inimigos não podem alcançá-lo",
        reference: "Livro de Regras, pg. 294.",
        bullets: [
            "Impede que você seja atacado: <b>não pode ser alvo direto de ataques ou efeitos</b>.",
            "Estando totalmente coberto e sendo alvo de um <b>efeito em área</b>, primeiro se retiram os pontos de vida da <b>estrutura</b> — só se ela for destruída você é afetado pela habilidade.",
            "Um exemplo é estar atrás de uma parede."
        ]
    },
    {
        title: "Camuflagem Leve",
        icon: "fluffy-cloud",
        subtitle: "20% de chance de falha (1-2 em 1d10)",
        description: "Um efeito dificulta a visão dos inimigos",
        reference: "Livro de Regras, pg. 294.",
        bullets: [
            "Ao fazer um ataque contra você, o atacante rola <b>1d10 junto com o d20</b>: se o d10 resultar <b>1 ou 2</b>, o ataque erra, independentemente do resultado do teste de ataque.",
            "Pode vir de escuridão leve, neblina, folhagens ou outro efeito similar — no seu local ou no espaço entre você e o oponente.",
            "Concedida automaticamente pela <b>Escuridão Leve</b>."
        ]
    },
    {
        title: "Camuflagem Total",
        icon: "night-sky",
        subtitle: "50% de chance de falha (1-5 em 1d10)",
        description: "Um efeito impede a visão dos inimigos",
        reference: "Livro de Regras, pg. 294.",
        bullets: [
            "Como camuflagem leve, mas a chance de falha é de <b>50%</b> (1 a 5 no d10).",
            "Concedida automaticamente pela <b>Escuridão Total</b>, e por atacar enquanto o alvo está <b>Cego</b>.",
            "Algumas habilidades concedem camuflagem em proporção menor, como <i>Aura Embaçada</i>: uma criatura com ela ativada sob Escuridão Total recebe apenas 50% de falha.",
            "Efeitos que concedam camuflagem <b>nunca podem exceder os 50%</b>."
        ]
    }
];

data_ambiente_visao = [
    {
        title: "Escuridão Leve",
        icon: "moon",
        subtitle: "Concede Camuflagem Leve",
        description: "Uma situação de penumbra, onde a escuridão não é completa",
        reference: "Livro de Regras, pg. 295.",
        bullets: [
            "Uma criatura em escuridão leve recebe <b>Camuflagem Leve</b>.",
            "Exemplos: noites iluminadas apenas pela lua e salas com pouca iluminação.",
            "Em um ambiente plenamente iluminado não há nenhuma característica especial."
        ]
    },
    {
        title: "Escuridão Total",
        icon: "eclipse",
        subtitle: "Concede Camuflagem Total · cega",
        description: "Uma situação de breu completo, onde não há nenhuma fonte de luz",
        reference: "Livro de Regras, pgs. 295 e 319.",
        bullets: [
            "Uma criatura em escuridão total recebe <b>Camuflagem Total</b>.",
            "Você é considerado <b>Cego</b> enquanto estiver em uma área de Escuridão Total, a menos que algo lhe permita ver no escuro.",
            "Exemplos: salas completamente fechadas e sem nenhuma fonte de luz, ou um corredor subterrâneo."
        ]
    },
    {
        title: "Percepção às Cegas",
        icon: "third-eye",
        subtitle: "Percebe sem depender da visão",
        description: "Uma espécie de sexto sentido que dispensa os olhos",
        reference: "Livro de Regras, pg. 296.",
        bullets: [
            "Dentro do alcance da sua percepção às cegas você é capaz de <b>perceber tudo normalmente mesmo se Cego</b>."
        ]
    },
    {
        title: "Sentido Sísmico",
        icon: "quake-stomp",
        subtitle: "Sente vibrações em superfícies sólidas",
        description: "Você consegue sentir as vibrações através de superfícies sólidas",
        reference: "Livro de Regras, pg. 296.",
        bullets: [
            "Dentro do alcance do seu sentido sísmico, você é capaz de perceber <b>criaturas se movendo na mesma superfície</b> que você."
        ]
    },
    {
        title: "Visão no Escuro",
        icon: "eyeball",
        subtitle: "Reduz a Escuridão em um nível",
        description: "Você é capaz de ver o mundo mesmo na escuridão",
        reference: "Livro de Regras, pg. 296.",
        bullets: [
            "Dentro do alcance, os efeitos de Escuridão são reduzidos em <b>um nível</b>: <b>Total</b> se torna <b>Leve</b> e <b>Leve</b> é ignorada.",
            "Você apenas visualiza as coisas em <b>preto e branco</b> pela sua visão no escuro."
        ]
    },
    {
        title: "Campo de Visão",
        icon: "semi-closed-eye",
        subtitle: "Narrativo, não medido com exatidão",
        description: "Estar fora do campo de visão é uma das formas de poder se esconder",
        reference: "Livro de Regras, pg. 297.",
        bullets: [
            "O campo de visão possui uma natureza <b>mais narrativa</b>, não sendo medido de maneira exata.",
            "Se um companheiro acabou de atacar uma criatura antes do seu turno, é possível que ela esteja olhando para esse aliado — então você estaria fora do campo de visão dela.",
            "Nessa situação você pode fazer o teste de <b>Furtividade</b> normalmente contra a <b>Atenção</b> da criatura.",
            "Ao desferir o ataque você deixa de estar escondido: considera-se que ela se virou e te percebeu."
        ]
    },
    {
        title: "Tamanho",
        icon: "cubes",
        subtitle: "Espaço, alcance e modificadores",
        description: "O tamanho influencia no espaço ocupado, no alcance e em certas capacidades",
        reference: "Livro de Regras, pg. 297.",
        bullets: [
            "<b>Minúsculo</b> — 1,5 m · Furtividade/Manobra <b>+5/−5</b>",
            "<b>Pequeno</b> — 1,5 m · <b>+2/−2</b> &nbsp;·&nbsp; <b>Médio</b> — 1,5 m · <b>0</b> (todo personagem de jogador é médio)",
            "<b>Grande</b> — 3 m · <b>−2/+2</b> &nbsp;·&nbsp; <b>Enorme</b> — 4,5 m · <b>−5/+5</b> &nbsp;·&nbsp; <b>Colossal</b> — 9 m · <b>−10/+10</b>",
            "O espaço ocupado se refere a quantos metros a criatura ocupa ao se posicionar, influenciando nos quadrados do grid; o <b>alcance</b> influencia ataques corpo a corpo e ataques de oportunidade.",
            "Os modificadores se aplicam em rolagens de <b>Furtividade</b> e em <b>manobras</b> de combate, como agarrar ou empurrar."
        ]
    }
];

data_ambiente_alcance = [
    {
        title: "Linha de Visão",
        icon: "target-laser",
        subtitle: "Alcance em metros, precisa ver o alvo",
        description: "A habilidade alcança criaturas que você consiga ver dentro daquela distância",
        reference: "Livro de Regras, pg. 298.",
        bullets: [
            "Você não encontrará “linha de visão” escrito como alcance, mas sim <b>uma distância em metros</b>.",
            "Exemplo: o Feitiço <i>Desmantelar</i>, no nível 0, tem alcance de <b>9 metros</b> — você pode escolher qualquer criatura que consiga ver a até 9 metros.",
            "Para mirar em algo você precisa de um caminho livre até o alvo: quem está sob <b>Cobertura Total</b> não pode ser alvo direto."
        ]
    },
    {
        title: "Pessoal",
        icon: "magic-palm",
        subtitle: "Só o próprio usuário",
        description: "A habilidade só pode alcançar e ter como alvo o próprio usuário",
        reference: "Livro de Regras, pg. 298.",
        bullets: [
            "Um exemplo é o Feitiço <i>Fluxo das Escamas Vermelhas</i>, da Manipulação Sanguínea, que afeta apenas o usuário."
        ]
    },
    {
        title: "Toque",
        icon: "glowing-hands",
        subtitle: "Precisa tocar a criatura",
        description: "A habilidade requer que você esteja tocando uma criatura para poder afetá-la",
        reference: "Livro de Regras, pg. 298.",
        bullets: [
            "Para saber se você é capaz de tocar uma criatura, considere o seu <b>alcance para ataques corpo a corpo desarmados</b>.",
            "Um exemplo é a habilidade <i>Clivar</i>, que só pode ter como alvo criaturas que você esteja tocando."
        ]
    },
    {
        title: "Tipos de Alvo",
        icon: "archery-target",
        subtitle: "Aliado · Criatura · Estrutura · Objeto · Pessoal",
        description: "Os limites de quem ou o que uma habilidade pode atingir",
        reference: "Livro de Regras, pg. 298.",
        bullets: [
            "<b>Aliado.</b> Criatura que o considere de maneira neutra ou amigável, mesmo sem estar alinhada com você. <b>Você não é considerado seu próprio aliado</b> para efeitos que tenham Aliado como alvo.",
            "<b>Criatura.</b> Qualquer ser com capacidade de agir — incluindo um corpo amaldiçoado, que embora não vivo é capaz de agir. Pode ser especificado, como “Uma Maldição”.",
            "<b>Estrutura.</b> Construções ou grandes elementos presos no cenário, como prédios, carros e grandes rochas.",
            "<b>Objeto.</b> Qualquer coisa que não seja uma criatura e possa ser pega ou movida, como uma pedra, pregos ou orbes condensados de sangue.",
            "<b>Pessoal.</b> A habilidade só pode ter o próprio usuário como alvo."
        ]
    },
    {
        title: "Área: Esfera",
        icon: "stone-sphere",
        subtitle: "Raio a partir de um quadrado escolhido",
        description: "Escolha um quadrado de 1,5 m como ponto de origem",
        reference: "Livro de Regras, pg. 299.",
        bullets: [
            "A partir da borda do quadrado escolhido, a esfera se estende em <b>todas as direções</b> conforme o raio indicado.",
            "Toda área é escrita em <b>raio</b>, com o número de metros em conjunto."
        ]
    },
    {
        title: "Área: Cone",
        icon: "fire-breath",
        subtitle: "Origem na sua borda · não precisa de alcance",
        description: "Parte da borda do seu espaço e se afasta na direção escolhida",
        reference: "Livro de Regras, pg. 299.",
        bullets: [
            "Fica <b>mais largo com a distância</b> entre o ponto de origem e o final do cone.",
            "Um cone <b>não precisa de alcance</b>."
        ]
    },
    {
        title: "Área: Linha",
        icon: "laser-blast",
        subtitle: "Você é a origem · 1,5 m de largura",
        description: "Parte de você e se afasta em linha reta até o fim da sua área",
        reference: "Livro de Regras, pg. 299.",
        bullets: [
            "A menos que dito o contrário, toda linha possui <b>1,5 metro de largura</b>.",
            "A melhoria de ritual <i>Expansão de Área</i> aumenta uma linha em <b>4,5 metros</b> (em vez de 1,5 m) por aplicação."
        ]
    },
    {
        title: "Área: Cilindro",
        icon: "orbital",
        subtitle: "Base circular com altura indicada",
        description: "Ocupa uma base circular que sobe por uma altura indicada",
        reference: "Livro de Regras, pg. 299.",
        bullets: [
            "Um cilindro pode ser <b>em pé ou deitado</b>.",
            "Todo cilindro <b>inclinado</b> deve ser invocado <b>adjacente a você</b>."
        ]
    }
];
