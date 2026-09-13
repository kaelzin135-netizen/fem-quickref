/* Lista de perícias — Livro de Regras, pgs. 283-288 */

data_pericia = [
    {
        title: "Acrobacia",
        icon: "acrobatic",
        subtitle: "Destreza",
        description: "Tarefas que exigem agilidade e equilíbrio",
        reference: "Livro de Regras, pgs. 284-285.",
        bullets: [
            "Representa manobras acrobáticas, escapar de agarrões e manter-se em equilíbrio ao andar por superfícies precárias.",
            "Exemplos: espremer-se por espaços pequenos, soltar-se de cordas de maneira ágil e cair de maneira adequada durante uma queda livre.",
            "Em combate, resiste às ações <b>Agarrar</b>, <b>Derrubar</b> e <b>Empurrar</b>, e pode ser usada em <b>Desarmar</b>."
        ]
    },
    {
        title: "Atletismo",
        icon: "muscle-up",
        subtitle: "Força",
        description: "Capacidades físicas que exigem força e resistência",
        reference: "Livro de Regras, pgs. 284-285.",
        bullets: [
            "Engloba proezas físicas como escalar, pular, empurrar, agarrar e outras aplicações de potência.",
            "Exemplos: escalar superfícies inclinadas ou verticais, nadar por correntes de água, quebrar amarras e forçar uma porta com o corpo.",
            "É a perícia das ações <b>Agarrar</b>, <b>Derrubar</b> e <b>Empurrar</b>, e pode anular ou reduzir dano de quedas."
        ]
    },
    {
        title: "Direção",
        icon: "cartwheel",
        subtitle: "Sabedoria · complementar",
        description: "Conduzir veículos de maneira apropriada",
        reference: "Livro de Regras, pgs. 284-285.",
        bullets: [
            "Permite dirigir ou pilotar sem riscos, realizar manobras e manter altas velocidades de maneira segura.",
            "Exemplos: perseguir um veículo, saltar por uma rampa com uma moto e recuperar o controle de um carro desgovernado.",
            "É uma <b>perícia complementar</b>: não entra por padrão, sendo implementada conforme a necessidade da campanha."
        ]
    },
    {
        title: "Enganação",
        icon: "drama-masks",
        subtitle: "Presença",
        description: "Passar mentiras de maneira convincente",
        reference: "Livro de Regras, pgs. 284 e 287.",
        bullets: [
            "Indica a capacidade de alterar fatos mantendo as mudanças acreditáveis, omitir fatos específicos e manipular a verdade.",
            "Exemplos: fingir não ser culpado por algo que fez, mudar os fatos ao contar uma situação e fazer uma multidão acreditar que outra pessoa foi responsável.",
            "É a perícia da ação bônus <b>Fintar</b> e uma das opções para resistir a <b>Ler Intenções</b>."
        ]
    },
    {
        title: "Feitiçaria",
        icon: "aura",
        subtitle: "Inteligência · requer treino",
        description: "Conhecimento sobre as técnicas de Jujutsu em si",
        reference: "Livro de Regras, pgs. 284 e 286.",
        bullets: [
            "Engloba o quanto se sabe sobre técnicas, energia amaldiçoada e figuras respeitadas nesse âmbito, além de certas aplicações básicas da energia.",
            "Exemplos: analisar e entender as habilidades de um feiticeiro, aplicar sua técnica de maneira improvisada, detectar presenças amaldiçoadas e sua intensidade, e reconhecer feiticeiros de um clã.",
            "De maneira geral, só pode ser utilizada caso seja <b>Treinado</b>."
        ]
    },
    {
        title: "Furtividade",
        icon: "hidden",
        subtitle: "Destreza",
        description: "Esconder-se, mover-se de maneira discreta e não deixar rastros",
        reference: "Livro de Regras, pgs. 284-285 e 296.",
        bullets: [
            "Exemplos: esconder-se em um armário ou caixa, caminhar sem deixar rastros claros e rastejar por um armazém lotado de inimigos.",
            "É rolada contra a <b>Atenção</b> das criaturas das quais você se esconde — e contra a Atenção do lado oposto para definir <b>surpresa</b> no início do combate.",
            "Penalidades: <b>−5</b> se você se moveu no turno (exceto pela ação Esgueirar) e <b>−10</b> se atacou ou realizou outra ação chamativa.",
            "Modificadores por tamanho: Minúsculo +5 · Pequeno +2 · Médio 0 · Grande −2 · Enorme −5 · Colossal −10. A condição <b>Invisível</b> concede +10."
        ]
    },
    {
        title: "História",
        icon: "black-book",
        subtitle: "Inteligência",
        description: "Recordar-se do passado e da história do mundo",
        reference: "Livro de Regras, pgs. 284 e 287.",
        bullets: [
            "Lembrar-se de eventos históricos, figuras históricas, guerras e tudo mais que poderia ter se perdido no tempo, vivendo apenas em registros e memórias.",
            "Exemplos: lembrar-se de quem foi uma pessoa específica em tempos antigos, recordar um evento específico ou reconhecer e compreender um idioma."
        ]
    },
    {
        title: "Intimidação",
        icon: "screaming",
        subtitle: "Presença",
        description: "Impor sua presença de maneira hostil, conseguindo o que deseja pelo medo",
        reference: "Livro de Regras, pgs. 284 e 288.",
        bullets: [
            "Ameaçar, ser hostil ou violento para obter o que quer.",
            "Exemplos: assustar alguém com um grito, tentar abalar a determinação de alguém e coagir uma pessoa com ameaças.",
            "É a perícia da ação bônus <b>Provocar</b>, resistida por Intimidação ou Intuição do alvo."
        ]
    },
    {
        title: "Intuição",
        icon: "crystal-ball",
        subtitle: "Sabedoria",
        description: "Pressentir e compreender os arredores de maneira intuitiva",
        reference: "Livro de Regras, pgs. 284-285.",
        bullets: [
            "Percebe intenções e desbanca mentiras.",
            "Exemplos: perceber mentiras contadas a você, ter pressentimentos sobre a índole de uma pessoa, saber se há algo anormal em uma situação e tentar prever movimentos de alguém.",
            "É uma das opções para a ação bônus <b>Ler Intenções</b> e para resistir a <b>Provocar</b>."
        ]
    },
    {
        title: "Investigação",
        icon: "sherlock-holmes",
        subtitle: "Inteligência",
        description: "Procurar por pistas e deduzir o significado delas",
        reference: "Livro de Regras, pgs. 284 e 286.",
        bullets: [
            "Assimila fatos e estabelece conexões para achar um objeto oculto ou conhecimento de alguma fonte antiga.",
            "Exemplos: interrogar alguém para retirar informações, examinar um lugar em busca de algo e chegar a respostas em um lugar movimentado onde elas estão entre a multidão."
        ]
    },
    {
        title: "Medicina",
        icon: "medical-pack",
        subtitle: "Sabedoria · requer treino",
        description: "Realizar cuidados médicos, tratar feridas e cuidar de quem estiver machucado",
        reference: "Livro de Regras, pgs. 284 e 286.",
        bullets: [
            "Exemplos: tratar uma pessoa para ela se recuperar melhor, tratar uma doença ou veneno, realizar uma autópsia e evitar que uma ferida infeccione.",
            "Só pode ser utilizada caso seja <b>Treinado</b>, exceto para primeiros socorros.",
            "Usada para <b>estabilizar</b> um personagem nas Portas da Morte com uma ação comum a até 1,5 m: CD 15 + 1 para cada 5 pontos de vida negativos.",
            "Uma criatura <b>mestre</b> em Medicina pode tratar uma <i>ferida interna</i> com uma ação comum, reduzindo sua CD de 20 para 10."
        ]
    },
    {
        title: "Ocultismo",
        icon: "candle-skull",
        subtitle: "Sabedoria",
        description: "Reconhecer, identificar e recordar sobre o oculto",
        reference: "Livro de Regras, pgs. 284 e 286.",
        bullets: [
            "Engloba eventos, criaturas e lendas sombrias — uma área específica e complexa do conhecimento.",
            "Exemplos: reconhecer uma maldição originária de uma história, saber sobre uma lenda urbana e decifrar escrituras sobre um tabu ou tema obscuro."
        ]
    },
    {
        title: "Ofício",
        icon: "anvil",
        subtitle: "Inteligência · requer treino",
        description: "Maestria na utilização de ferramentas específicas",
        reference: "Livro de Regras, pgs. 284 e 287.",
        bullets: [
            "Criar itens, realizar manutenções e reconhecer as técnicas utilizadas para criar algo envolvendo o ofício.",
            "Possui diversas categorias, como Ofício (Ferreiro) ou Ofício (Farmacêutico) — ao se tornar treinado, escolha uma subcategoria.",
            "Exemplos: fabricar itens do ofício específico, identificar itens raros ou exóticos e reparar objetos danificados.",
            "Só pode ser utilizada caso seja <b>Treinado</b>. Em interlúdios, você realiza 1 + bônus de treinamento testes de Ofício para criar itens."
        ]
    },
    {
        title: "Percepção",
        icon: "magnifying-glass",
        subtitle: "Sabedoria",
        description: "Perceber, ouvir ou detectar a presença de algo ou alguém",
        reference: "Livro de Regras, pgs. 284 e 286.",
        bullets: [
            "Observar os arredores com atenção e sentidos afiados.",
            "Exemplos: observar em busca de coisas discretas ou escondidas, escutar sons ou barulhos sutis e tentar encontrar uma presença oculta.",
            "Define a sua <b>Atenção</b> (10 + bônus de Percepção). Uma criatura que o procure ativamente faz um teste de Percepção com CD igual ao seu resultado de Furtividade.",
            "A condição <b>Cego</b> causa −5 em Percepção; perder um olho concede desvantagem nela."
        ]
    },
    {
        title: "Performance",
        icon: "lyre",
        subtitle: "Presença",
        description: "Cativar pessoas através de arte ou entretenimento",
        reference: "Livro de Regras, pgs. 284 e 288.",
        bullets: [
            "Engloba dança, atuação, música e tudo mais que se encaixe.",
            "Exemplos: agradar uma plateia com sua música, conseguir o interesse de pessoas com dança e atuar um papel em uma apresentação."
        ]
    },
    {
        title: "Persuasão",
        icon: "lips",
        subtitle: "Presença",
        description: "Influenciar ou negociar com indivíduos ou multidões",
        reference: "Livro de Regras, pgs. 284 e 287.",
        bullets: [
            "Agradar e cativar as pessoas com sua lábia, lidar com discussões e portar-se de maneira apropriada em situações diplomáticas.",
            "Exemplos: conseguir permissão formal para adentrar um lugar, convencer alguém a realizar um favor e negociar um preço menor."
        ]
    },
    {
        title: "Prestidigitação",
        icon: "hand",
        subtitle: "Destreza · requer treino",
        description: "Agilidade manual: usar as mãos com precisão e leveza",
        reference: "Livro de Regras, pgs. 284-285.",
        bullets: [
            "Exemplos: abrir uma fechadura com gazuas, pegar ou implantar um objeto em outra pessoa discretamente, ocultar um objeto em si mesmo e sabotar algo.",
            "Só pode ser utilizada caso seja <b>Treinado</b>.",
            "É a perícia da ação <b>Furtar</b> (contra a Atenção do alvo) e do teste exigido pela <b>Conjuração em Ritual</b>.",
            "A condição <b>Sofrendo</b> causa −5 em testes de Prestidigitação para realizar rituais."
        ]
    },
    {
        title: "Sobrevivência",
        icon: "pine-tree",
        subtitle: "Sabedoria · complementar",
        description: "Conhecimentos e capacidades em ambientes selvagens",
        reference: "Livro de Regras, pgs. 284 e 286.",
        bullets: [
            "Identificar animais, orientar-se, rastrear ou encontrar abrigo e recursos necessários.",
            "Exemplos: seguir os rastros naturais de alguma pessoa, guiar-se através de uma floresta e encontrar alimentos ou água estando perdido no meio de um ambiente selvagem.",
            "É uma <b>perícia complementar</b>: não entra por padrão, sendo implementada conforme a necessidade da campanha."
        ]
    },
    {
        title: "Tecnologia",
        icon: "circuitry",
        subtitle: "Inteligência",
        description: "Entender e utilizar as mais diferentes tecnologias",
        reference: "Livro de Regras, pgs. 284 e 287.",
        bullets: [
            "Manipular dispositivos analógicos ou digitais, e invadir ou reconfigurar sistemas.",
            "Exemplos: hackear um computador, influenciar nos dispositivos de uma fábrica e realizar engenharia reversa em alguma máquina.",
            "É a perícia mais comumente removida em campanhas ambientadas em tempos passados."
        ]
    },
    {
        title: "Teologia",
        icon: "prayer",
        subtitle: "Inteligência · complementar",
        description: "Recordar figuras de religiões, crenças, filosofias, ritos e práticas",
        reference: "Livro de Regras, pgs. 284 e 287.",
        bullets: [
            "Exemplos: entender e decifrar escritas religiosas, saber o que significa uma imagem ou símbolo e identificar um rito sendo feito ou os vestígios dele.",
            "É uma <b>perícia complementar</b>: não entra por padrão, sendo implementada conforme a necessidade da campanha."
        ]
    }
];
