/* Ataques, dano e tipos de dano — Livro de Regras, pgs. 305-316 e 325-326 */

data_ataque = [
    {
        title: "Ataques Desarmados",
        icon: "fist",
        subtitle: "1d4 · Força · grupo Pugilato",
        description: "Golpes corpo a corpo realizados com qualquer parte do corpo",
        reference: "Livro de Regras, pg. 305.",
        bullets: [
            "Todo personagem é <b>treinado</b> em Ataques Desarmados, que usam <b>Força</b> tanto para a jogada de ataque quanto para a rolagem de dano.",
            "O dano inicia em <b>1d4</b> e aumenta para <b>1d6, 1d8, 1d10 e 1d12</b> nos níveis <b>5, 9, 13 e 17</b>. Por padrão pertencem ao grupo <b>Pugilato</b>.",
            "Ataques desarmados <b>não são armas</b>: efeitos ou habilidades que funcionam com armas não se aplicam a eles, a menos que especificado.",
            "Você pode realizá-los mesmo com as duas mãos ocupadas, aplicando chutes ou joelhadas.",
            "Um <b>Restringido</b> segue o mesmo aumento de dano de um Lutador, mas é incapaz de exorcizar maldições com as mãos nuas — precisa de Ferramentas Amaldiçoadas."
        ]
    },
    {
        title: "Lutando com Duas Armas",
        icon: "crossed-swords",
        subtitle: "Ambas leves · sem mod. no 2º dano",
        description: "Uma arma em cada mão, com regras específicas",
        reference: "Livro de Regras, pg. 305.",
        bullets: [
            "Por padrão, só pode ser feito se <b>ambas as armas empunhadas forem leves</b>.",
            "Ao realizar um ataque com uma arma leve, você pode gastar sua <b>ação bônus</b> para realizar outro ataque com a segunda arma.",
            "O <b>modificador de atributo não é somado</b> no dano do segundo ataque."
        ]
    },
    {
        title: "Armas a Distância",
        icon: "pistol-gun",
        subtitle: "Destreza · propriedade Recarga",
        description: "Pistolas, rifles e arcos, com alcance normal e alcance máximo",
        reference: "Livro de Regras, pgs. 305-306.",
        bullets: [
            "Usam <b>Destreza</b> em jogadas de ataque e rolagens de dano.",
            "Todas possuem a propriedade <b>Recarga</b>, com a única exceção dos <b>arcos</b> — considera-se que o portador puxa flechas de uma aljava no momento do ataque.",
            "O alcance é escrito em dois valores, como <b>“12/24 m”</b>: além do <b>alcance normal</b> você ataca com <b>desvantagem</b>; além do <b>alcance máximo</b> é impossível atacar.",
            "Você também recebe <b>desvantagem</b> em ataques contra alvos em alcance corpo a corpo enquanto usa armas a distância ou de arremesso."
        ]
    },
    {
        title: "Armas de Arremesso",
        icon: "flying-dagger",
        subtitle: "Força ou Destreza · quantidade limitada",
        description: "Armas jogadas nos inimigos, descartáveis ou recuperáveis",
        reference: "Livro de Regras, pg. 306.",
        bullets: [
            "Podem usar <b>Força ou Destreza</b> em jogadas de ataque e dano.",
            "<b>Descartáveis</b> (kunais, shurikens, dardos): você carrega uma quantidade igual ao <b>bônus de treinamento × 10</b>, e recupera <b>metade</b> das arremessadas no fim de um combate.",
            "<b>Maiores</b> (chakram, rede): você carrega uma quantidade igual ao <b>bônus de treinamento</b>. O chakram pode ser recuperado no fim do combate e por sua propriedade especial; a rede, caso não tenha sido destruída.",
            "Só é possível realizar <b>ataques extras</b> caso possua quantidade suficiente em sua posse."
        ]
    },
    {
        title: "Rolagem de Dano",
        icon: "dice-six-faces-four",
        subtitle: "Dados da arma + modificador de atributo",
        description: "Caso o ataque acerte, role o dano para saber o quão destrutivo ele foi",
        reference: "Livro de Regras, pg. 306.",
        bullets: [
            "Toda arma tem um dano padrão em dados — por exemplo, a espada curta causa <b>1d6</b>.",
            "Soma-se normalmente o <b>modificador do atributo</b> usado para manejar a arma e outros bônus aplicáveis de especialização, talentos e aptidões amaldiçoadas."
        ]
    },
    {
        title: "Acerto Crítico",
        icon: "crowned-explosion",
        subtitle: "20 natural · dados de dano dobrados",
        description: "Sempre acerta e multiplica os dados de dano do ataque",
        reference: "Livro de Regras, pg. 307.",
        bullets: [
            "Um crítico <b>sempre acerta</b>, independentemente da Defesa do alvo.",
            "Você joga <b>todos os dados de dano do ataque duas vezes</b>, somando-os e adicionando os modificadores <b>depois</b>. Com uma espada curta, role 2d6 em vez de 1d6.",
            "Dados extras concedidos por habilidades, como o <i>Ataque Furtivo</i> do Restringido, <b>também</b> são jogados duas vezes.",
            "Certas habilidades reduzem o valor necessário para um crítico abaixo de 20 — mas o <b>acerto garantido</b> acontece apenas no 20.",
            "Contra alvos <b>Inconscientes</b> todo ataque acerta e é crítico; contra <b>Paralisados</b>, todo ataque corpo a corpo que acerte é crítico."
        ]
    },
    {
        title: "Desastre",
        icon: "cracked-shield",
        subtitle: "1 natural · sempre erra",
        description: "Uma falha catastrófica que causa uma brecha na guarda do atacante",
        reference: "Livro de Regras, pg. 307.",
        bullets: [
            "Um desastre <b>sempre erra</b>, independentemente da Defesa do alvo.",
            "Quando uma criatura tem um desastre em seu ataque, pode-se <b>realizar um ataque contra ela como uma reação</b>."
        ]
    },
    {
        title: "Efeitos de Crítico",
        icon: "battle-axe",
        subtitle: "Um efeito próprio por grupo de arma",
        description: "Característica adicional do crítico, liberada por habilidades ou treinamentos",
        reference: "Livro de Regras, pg. 308.",
        bullets: [
            "<b>Arco.</b> Se o alvo estiver adjacente a uma superfície, é preso nela pela flecha, ficando <b>Imóvel</b> até arrancar o projétil como ação bônus ou de movimento.",
            "<b>Bastão.</b> Empurra o alvo até 3 metros. · <b>Haste.</b> Move o alvo 3 metros em qualquer direção à sua escolha.",
            "<b>Besta</b> e <b>Espada.</b> O alvo recebe <b>Sangramento</b> com sua CD de Especialização e <b>Xd8</b> de dano. · <b>Dardo</b> e <b>Faca.</b> Sangramento com <b>Xd6</b>. (X = metade do bônus de treinamento, mínimo 1.)",
            "<b>Chicote.</b> TR de Reflexos contra sua CD de Especialização, derrubando em uma falha. · <b>Martelo.</b> Igual, mas com TR de Fortitude.",
            "<b>Machado.</b> Escolha uma criatura adjacente ao alvo: se a Defesa dela for menor que o resultado do crítico, recebe metade do valor rolado no alvo.",
            "<b>Pugilato.</b> TR de Fortitude, ficando <b>Desorientado</b> por uma rodada em uma falha. · <b>Tiro.</b> TR de Fortitude, ficando <b>Lento</b> por uma rodada em uma falha."
        ]
    },
    {
        title: "Sequência de Ataques",
        icon: "triple-claws",
        subtitle: "−1 de Defesa a cada 2 ataques · máx. −5",
        description: "Ataques seguidos em turnos subsequentes abalam a guarda do alvo",
        reference: "Livro de Regras, pg. 310.",
        bullets: [
            "Enquanto um mesmo alvo receber ataques em turnos subsequentes, uma sequência se inicia: <b>a cada 2 ataques</b> da sequência, a Defesa dele é reduzida em <b>1</b>.",
            "A redução máxima é de <b>−5</b>, totalizando <b>10 ataques</b> na sequência.",
            "A sequência se encerra quando <b>chega o turno do alvo</b>, representando a retomada do controle sobre a guarda.",
            "Exemplo: Itadori desfere três golpes em Mahito; no turno seguinte Nanami ataca com a Defesa de Mahito já em −1, e o quarto golpe a leva a −2. Quando o turno de Mahito chega, a sequência termina."
        ]
    },
    {
        title: "Armas Improvisadas",
        icon: "stone-block",
        subtitle: "Dano pelo tamanho do objeto",
        description: "Na falta de uma arma própria, improvise com objetos ao seu redor",
        reference: "Livro de Regras, pg. 325.",
        bullets: [
            "Você usa seu bônus para jogadas de ataque corpo a corpo e soma o <b>modificador de Força</b> ao dano. O tipo de dano varia com o objeto (madeira → impacto, vidro → cortante, caneta → perfurante).",
            "<b>Minúscula</b> 1d4 · Força 4 (um lápis) — <b>Pequena</b> 1d6 · Força 8 (cadeira) — <b>Média</b> 1d10 · Força 14 (armário) — <b>Grande</b> 3d8 · Força 20 (carro) — <b>Enorme</b> 4d12 · Força 26 (ônibus).",
            "Por padrão você consegue pegar e manusear um objeto de tamanho <b>Pequeno ou menor</b>.",
            "Sempre que atacar com uma arma improvisada, ela recebe dano igual ao que você causou com ela.",
            "Você pode quebrá-la com sua ação comum, colidindo-a contra uma área conforme o tamanho e causando dano pela tabela de Fontes Externas a todos na área."
        ]
    },
    {
        title: "Dano de Fontes Externas",
        icon: "weight-crush",
        subtitle: "1d10 a 20d10, conforme o objeto",
        description: "Dano causado pelo ambiente, como uma pedra ou um carro que desaba",
        reference: "Livro de Regras, pg. 326.",
        bullets: [
            "<b>1d10</b> — objeto de peso considerável (prateleira ou armário de madeira).",
            "<b>2d10</b> — objeto pesado (armário de metal).",
            "<b>4d10</b> — objeto extremamente pesado (um carro).",
            "<b>10d10</b> — objeto enorme e pesado (uma grande pedra, um deslizamento) ou ser amassado por duas paredes.",
            "<b>20d10</b> — objeto de tamanho colossal (um prédio colapsando) ou ser submerso em lava.",
            "O Narrador também escolhe o <b>tipo</b> do dano conforme o contexto, e pode definir valores intermediários considerando o nível e os PV dos personagens."
        ]
    }
];

data_ataque_dano = [
    {
        title: "Dano Durante Ataque",
        icon: "energy-sword",
        subtitle: "Pode ser multiplicado por um crítico",
        description: "Dano que se torna parte do próprio dano do ataque",
        reference: "Livro de Regras, pg. 307.",
        bullets: [
            "Por padrão, considere que <b>todo dano adicional é Durante Ataque</b>, a menos que especificado o contrário — como em <i>Concentrar Aura</i> e em Feitiços específicos.",
            "Este tipo de dano <b>pode ser multiplicado por um crítico</b>."
        ]
    },
    {
        title: "Dano Após Ataque",
        icon: "spiral-arrow",
        subtitle: "Nunca multiplicado por um crítico",
        description: "Instância separada de dano, somada ao total após a rolagem",
        reference: "Livro de Regras, pg. 307.",
        bullets: [
            "O dano após ataque <b>nunca</b> pode ser multiplicado por um crítico.",
            "Ambos os tipos são somados ao total da rolagem de dano, então <b>reduções e resistências se aplicam apenas uma vez</b>."
        ]
    },
    {
        title: "Imunidade",
        icon: "shield-reflect",
        subtitle: "Todo o dano é anulado",
        description: "O alvo é imune àquele tipo de dano",
        reference: "Livro de Regras, pg. 309.",
        bullets: [
            "Caso o alvo possua imunidade contra o tipo de dano causado, <b>todo o dano é anulado</b>.",
            "Imunidades <b>não são anuladas</b> pela condição Fragilizado.",
            "Criaturas sem nenhuma presença física, como um fantasma tradicional, são imunes a <b>danos físicos</b>. Criaturas que podem ser curadas por energia reversa são imunes a <b>dano de energia reversa</b>."
        ]
    },
    {
        title: "Redução de Dano",
        icon: "bordered-shield",
        subtitle: "Subtrai um valor fixo",
        description: "O dano é diminuído em um valor igual à redução de dano",
        reference: "Livro de Regras, pg. 309.",
        bullets: [
            "Aplica-se sobre o valor total que o alvo recebe.",
            "A condição <b>Fragilizado</b> reduz seus valores de Redução de Dano a zero e impede que sejam aumentados.",
            "<b>Perda de vida</b> e <b>Dano na Alma</b> não são afetados por redução de dano."
        ]
    },
    {
        title: "Resistência",
        icon: "magic-shield",
        subtitle: "Dano reduzido pela metade",
        description: "O alvo é resistente àquele tipo de dano",
        reference: "Livro de Regras, pg. 309.",
        bullets: [
            "Caso o alvo possua resistência contra o tipo de dano causado, o dano é <b>reduzido pela metade</b>.",
            "A condição <b>Fragilizado</b> anula suas resistências e impede que você se torne resistente a qualquer coisa."
        ]
    },
    {
        title: "Vulnerabilidade",
        icon: "open-wound",
        subtitle: "1,5× de dano",
        description: "O dano é aumentado em metade do dano total",
        reference: "Livro de Regras, pg. 309.",
        bullets: [
            "O dano é aumentado em um valor igual à <b>metade do dano total</b>, tornando-se efetivamente <b>1,5×</b>.",
            "Exemplo: ao causar 30 de dano em uma criatura vulnerável, ela recebe <b>45</b> de dano no total.",
            "A <b>Redução de Dano</b> ainda é aplicada sobre o valor total recebido.",
            "Maldições são <b>vulneráveis a dano de energia reversa</b>."
        ]
    },
    {
        title: "Perda de Vida",
        icon: "health-decrease",
        subtitle: "Ignora redução e resistências",
        description: "Alguns efeitos especiais não causam dano, mas perda de vida",
        reference: "Livro de Regras, pg. 316.",
        bullets: [
            "Perda de vida reduz os <b>PV atuais</b> do alvo.",
            "Ao contrário do dano, <b>não é afetada por redução de dano ou resistências</b>.",
            "É o que a condição <b>Sangramento</b> aplica no início do seu turno, e é como o <b>Dano na Alma</b> é considerado."
        ]
    }
];

data_ataque_tipos = [
    {
        title: "Cortante",
        icon: "bowie-knife",
        subtitle: "Físico",
        description: "Cortes, lacerações e arranhões",
        reference: "Livro de Regras, pg. 315.",
        bullets: [
            "Provém de facas, garras e espadas.",
            "Danos físicos são aplicados pelo formato daquilo que golpeia em conjunto com a força aplicada. Criaturas sem nenhuma presença física são <b>imunes a danos físicos</b>."
        ]
    },
    {
        title: "Perfurante",
        icon: "arrowhead",
        subtitle: "Físico",
        description: "Perfurações",
        reference: "Livro de Regras, pg. 315.",
        bullets: [
            "Comum entre lanças e projéteis.",
            "Criaturas sem nenhuma presença física, como um fantasma tradicional, são <b>imunes a danos físicos</b>."
        ]
    },
    {
        title: "Impacto",
        icon: "anvil-impact",
        subtitle: "Físico",
        description: "Concussões e ossos quebrados",
        reference: "Livro de Regras, pg. 315.",
        bullets: [
            "Provém de martelos e grandes pesos.",
            "É o tipo de dano padrão de <b>quedas</b> (1d6 por 3 metros).",
            "Criaturas sem nenhuma presença física são <b>imunes a danos físicos</b>."
        ]
    },
    {
        title: "Ácido",
        icon: "acid",
        subtitle: "Elemental",
        description: "Corrosão e queimaduras que derretem e destroem ao contato",
        reference: "Livro de Regras, pg. 315.",
        bullets: [
            "Danos elementais são produzidos por elementos da natureza e <b>respeitam as leis da física</b> como qualquer outro material."
        ]
    },
    {
        title: "Congelante",
        icon: "snowflake-1",
        subtitle: "Elemental",
        description: "Gelo e temperaturas extremamente baixas",
        reference: "Livro de Regras, pg. 315.",
        bullets: [
            "Danos elementais são produzidos por elementos do nosso universo e respeitam as suas leis da física."
        ]
    },
    {
        title: "Chocante",
        icon: "arcing-bolt",
        subtitle: "Elemental",
        description: "Raios, choques e eletricidade",
        reference: "Livro de Regras, pg. 315.",
        bullets: [
            "Danos elementais são produzidos por elementos do nosso universo e respeitam as suas leis da física."
        ]
    },
    {
        title: "Queimante",
        icon: "flame",
        subtitle: "Elemental",
        description: "Chamas, fogo e calor",
        reference: "Livro de Regras, pg. 315.",
        bullets: [
            "É o tipo de dano de ser <b>submerso em lava</b> (20d10, pela tabela de Fontes Externas)."
        ]
    },
    {
        title: "Sônico",
        icon: "sonic-boom",
        subtitle: "Elemental",
        description: "Vibrações, ondas de rádio e sons",
        reference: "Livro de Regras, pg. 315.",
        bullets: [
            "Danos elementais são produzidos por elementos do nosso universo e respeitam as suas leis da física."
        ]
    },
    {
        title: "Dano na Alma",
        icon: "ghost",
        subtitle: "Etéreo · atravessa tudo",
        description: "Infligido diretamente na alma do indivíduo",
        reference: "Livro de Regras, pgs. 311 e 316.",
        bullets: [
            "<b>Atravessa todas as defesas e resistências</b> e é considerado <b>perda de vida</b>, ignorando também pontos de vida temporários.",
            "Não pode ser curado normalmente: <b>reduz a vida máxima</b> junto da atual. Você recupera metade da vida máxima perdida com um descanso longo.",
            "Para curá-lo é necessário compreender o traçado da alma e ter <b>Nível de Aptidão 4 em Energia Reversa</b> — e a cura é reduzida à metade.",
            "Ao sofrê-lo, faça um <b>TR de Integridade</b>: sucesso reduz à metade, sucesso crítico anula.",
            "Danos etéreos não existem na natureza e só podem ser produzidos pela <b>energia amaldiçoada</b>."
        ]
    },
    {
        title: "Energia Reversa",
        icon: "health-increase",
        subtitle: "Etéreo · nocivo a maldições",
        description: "Energia amaldiçoada transformada em positiva",
        reference: "Livro de Regras, pg. 316.",
        bullets: [
            "É <b>nociva para maldições</b>, enquanto <b>cura</b> outros seres.",
            "Maldições são <b>vulneráveis</b> a dano de energia reversa; criaturas que podem ser curadas por ela são <b>imunes</b>."
        ]
    },
    {
        title: "Energético",
        icon: "energy-arrow",
        subtitle: "Etéreo",
        description: "A emissão de pura energia amaldiçoada no formato de uma explosão",
        reference: "Livro de Regras, pg. 316.",
        bullets: [
            "Danos etéreos não respeitam qualquer regra do nosso mundo, sendo puramente sobrenaturais."
        ]
    },
    {
        title: "Psíquico",
        icon: "psychic-waves",
        subtitle: "Etéreo",
        description: "Ataques que afetam diretamente a integridade da mente, causando dores internas",
        reference: "Livro de Regras, pg. 316.",
        bullets: [
            "Danos etéreos só podem ser produzidos pela energia amaldiçoada e suas diferentes aplicações."
        ]
    },
    {
        title: "Radiante",
        icon: "sunbeams",
        subtitle: "Etéreo",
        description: "Dano que se origina a partir da luz, com um aspecto divino ou celestial",
        reference: "Livro de Regras, pg. 316.",
        bullets: [
            "Danos etéreos só podem ser produzidos pela energia amaldiçoada e suas diferentes aplicações."
        ]
    },
    {
        title: "Necrótico",
        icon: "carrion",
        subtitle: "Biológico",
        description: "Putrefação, decomposição e decadência",
        reference: "Livro de Regras, pg. 316.",
        bullets: [
            "Resume-se ao decair direto do orgânico ou inorgânico.",
            "Danos biológicos normalmente só afetam <b>corpos biológicos</b>, sem efeito em materiais inorgânicos como armas ou prédios."
        ]
    },
    {
        title: "Venenoso",
        icon: "poison",
        subtitle: "Biológico",
        description: "Insetos e substâncias causam dano de veneno",
        reference: "Livro de Regras, pg. 316.",
        bullets: [
            "Danos biológicos ferem a carne diretamente e normalmente só afetam corpos biológicos.",
            "Relacionado à condição <b>Envenenado</b> (−2 em jogadas de ataque, testes de resistência e testes de perícia)."
        ]
    }
];
