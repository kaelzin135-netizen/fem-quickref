/* Características, habilidades base e listas de escolha de cada Especialização
   Livro de Regras de Feiticeiros & Maldições v2.5.2, pgs. 44-127 */

/* ------------------------------------------------------------------ LUTADOR */

data_base_lutador = [
    {
        title: "Características de Lutador",
        icon: "muscle-up",
        subtitle: "12 PV · 1d10 · 4 PE · Força ou Destreza",
        description: "Especialista no combate físico: rápido, destruidor e resistente",
        reference: "Livro de Regras, pg. 49.",
        bullets: [
            "<b>PV.</b> 12 + mod. de Constituição no 1º nível; <b>1d10</b> (ou 6 fixo) + mod. de Constituição nos seguintes.",
            "<b>Treinamentos.</b> Armas Simples, Armas Marciais e Escudo Leve. Um TR entre Fortitude ou Reflexos. Uma perícia de Ofício, Atletismo ou Acrobacia e outras três quaisquer.",
            "<b>PE.</b> 4 pontos de energia por nível.",
            "<b>Atributo-chave.</b> Força ou Destreza. <b>Multiclasse:</b> Força ou Destreza 16.",
            "Bons exemplos de Lutadores são Yuuji Itadori, Kinji Hakari e Hajime Kashimo."
        ]
    },
    {
        title: "Corpo Treinado",
        icon: "fist",
        subtitle: "Base · 1º nível",
        description: "Você treinou o seu corpo para que ele seja sua própria arma",
        reference: "Livro de Regras, pg. 49.",
        bullets: [
            "Ao realizar um ataque desarmado ou com uma arma marcial, você pode realizar um <b>ataque desarmado como uma ação bônus</b>.",
            "O dano dos seus ataques desarmados se torna <b>1d8</b> e, nos níveis 5, 9, 13 e 17, aumenta para <b>1d10, 1d12, 2d8 e 2d12</b>, respectivamente.",
            "Você pode escolher usar tanto <b>Força quanto Destreza</b> nos seus ataques desarmados e com armas marciais."
        ]
    },
    {
        title: "Empolgação",
        icon: "crowned-explosion",
        subtitle: "Base · 1º nível · até 5 níveis",
        description: "Uma boa luta é empolgante e te motiva a se arriscar mais e mais",
        reference: "Livro de Regras, pg. 50.",
        bullets: [
            "Você começa um combate com <b>Nível de Empolgação 1</b>. Se acertar pelo menos um ataque ou manobra (agarrar, empurrar etc.) durante seu turno, sobe um nível no começo do próximo turno, até o máximo de <b>5</b>.",
            "<b>Dado de Empolgação:</b> Nível 2 → 1d4 · Nível 3 → 1d6 · Nível 4 → 2d4 · Nível 5 → 2d6.",
            "Cada manobra pode ser realizada <b>apenas uma vez por rodada</b>. Passando uma rodada sem acertar um ataque, você desce um nível.",
            "Você aprende <b>duas manobras</b> no 1º nível e outras nos níveis <b>6, 12 e 18</b>."
        ]
    },
    {
        title: "Empolgação Máxima",
        icon: "energy-sword",
        subtitle: "Base · 11º nível",
        description: "O seu potencial e intensidade assumem um patamar superior",
        reference: "Livro de Regras, pg. 51.",
        bullets: [
            "Os seus dados de empolgação se tornam <b>2d4, 2d6, 2d8 e 3d6</b>, respectivamente."
        ]
    },
    {
        title: "Reflexo Evasivo",
        icon: "dodging",
        subtitle: "Base · 2º nível",
        description: "Você desenvolve um reflexo para evitar danos",
        reference: "Livro de Regras, pg. 50.",
        bullets: [
            "Você recebe <b>redução de dano a todo tipo, exceto alma</b>, igual a metade do seu nível de Lutador."
        ]
    },
    {
        title: "Implemento Marcial",
        icon: "target-arrows",
        subtitle: "Base · 4º nível · +2 na CD",
        description: "Você recebe +2 na CD de suas Habilidades de Especialização, Feitiços e Aptidões Amaldiçoadas",
        reference: "Livro de Regras, pg. 51.",
        bullets: [
            "Esse bônus aumenta em <b>+1 nos níveis 8 e 16</b> de Lutador."
        ]
    },
    {
        title: "Gosto pela Luta",
        icon: "muscle-up",
        subtitle: "Base · 5º nível",
        description: "O gosto pelas lutas cultiva força, precisão e resistência superiores",
        reference: "Livro de Regras, pg. 51.",
        bullets: [
            "Você adiciona <b>+2 em jogadas de ataque desarmadas ou com armas marciais</b> e <b>+1 em rolagens de Fortitude e de dano</b>.",
            "Nos níveis <b>8, 12, 16 e 20</b> o bônus em jogadas de ataque aumenta em +1.",
            "Nos níveis <b>9, 13 e 17</b> o bônus em Fortitude e dano aumenta em +1."
        ]
    },
    {
        title: "Teste de Resistência Mestre",
        icon: "strong",
        subtitle: "Base · 9º nível",
        description: "Você se torna treinado em um segundo teste de resistência e mestre no da sua especialização",
        reference: "Livro de Regras, pg. 51.",
        bullets: [
            "Ser <b>mestre</b> em um TR permite obter <b>sucesso crítico</b> ao superar a CD em 10 ou mais, ignorando completamente o dano e as condições."
        ]
    },
    {
        title: "Lutador Superior",
        icon: "trophy",
        subtitle: "Base · 20º nível",
        description: "Tendo alcançado o ápice do corpo e das técnicas de combate, você está em um nível superior",
        reference: "Livro de Regras, pg. 51.",
        bullets: [
            "Seus ataques desarmados causam <b>1 dado de dano adicional</b>.",
            "Uma vez por rodada você pode realizar um <b>ataque desarmado como ação livre</b> gastando 2 PE.",
            "Você inicia todo combate com um <b>Nível de Empolgação a mais</b>."
        ]
    }
];

data_opcoes_lutador = [
    {
        title: "Manobra: Ajuste",
        icon: "on-target",
        subtitle: "Manobra de empolgação · 1×/rodada",
        description: "Às vezes um bom golpe só precisa de um ajuste",
        reference: "Livro de Regras, pg. 50.",
        bullets: [
            "Uma vez por rodada, ao realizar um ataque, você pode adicionar seu <b>dado de empolgação na rolagem de acerto e no dano</b>.",
            "Você pode escolher adicionar o bônus <b>antes ou depois</b> de saber o resultado da rolagem de acerto."
        ]
    },
    {
        title: "Manobra: Comando",
        icon: "help",
        subtitle: "Manobra de empolgação · 1 PE",
        description: "Sua empolgação pode acabar contagiando seus aliados",
        reference: "Livro de Regras, pg. 50.",
        bullets: [
            "Ao realizar um ataque, você comanda um aliado dentro de <b>1,5 metro</b> a realizar um ataque corpo a corpo no mesmo alvo, <b>como uma reação dele</b>.",
            "Você ou o aliado deve pagar <b>1 ponto de energia amaldiçoada</b> para realizar o ataque.",
            "Caso use essa habilidade, você <b>não pode utilizar ataque extra</b>."
        ]
    },
    {
        title: "Manobra: Desarme",
        icon: "drop",
        subtitle: "Manobra de empolgação",
        description: "Uma boa luta não deve ser contida pelo porte de uma arma",
        reference: "Livro de Regras, pg. 50.",
        bullets: [
            "Ao acertar uma criatura, você adiciona seu <b>dado de empolgação ao dano</b> e o alvo deve fazer uma jogada de ataque corpo a corpo contra o resultado do seu ataque.",
            "Em uma falha, ele <b>larga um item à sua escolha</b> que esteja manejando."
        ]
    },
    {
        title: "Manobra: Esquiva",
        icon: "dodging",
        subtitle: "Manobra de empolgação · Reação",
        description: "Com o sangue fervendo, é mais fácil se esquivar de ataques",
        reference: "Livro de Regras, pg. 50.",
        bullets: [
            "Ao ser acertado por um ataque corpo a corpo, você pode usar sua <b>reação</b> para diminuir o dano em um valor igual a uma rolagem do seu <b>dado de empolgação + modificador de Destreza</b>."
        ]
    },
    {
        title: "Manobra: Trabalho de Pés",
        icon: "walking-boot",
        subtitle: "Manobra de empolgação · Ação bônus",
        description: "Você usa da sua empolgação para trabalhar o seu movimento",
        reference: "Livro de Regras, pg. 50.",
        bullets: [
            "Como uma <b>ação bônus</b>, aumente sua Defesa em um valor igual ao seu <b>dado de empolgação</b>, até o começo do seu próximo turno."
        ]
    },
    {
        title: "Finalizadora: Ataque Circular",
        icon: "whirlwind",
        subtitle: "Finalizadora · exige empolgação 5",
        description: "Um golpe circular capaz de atingir vários alvos",
        reference: "Livro de Regras, pg. 62.",
        bullets: [
            "Seu alcance corpo a corpo aumenta em <b>3 metros</b> e você realiza um ataque contra <b>todos os inimigos</b> dentro do seu alcance corpo a corpo.",
            "Para cada inimigo que seja um alvo, a manobra causa <b>5 de dano adicional</b>.",
            "Após usar uma finalizadora, a energia acumulada é liberada e você <b>retorna ao nível de empolgação 1</b>."
        ]
    },
    {
        title: "Finalizadora: Golpe Certeiro",
        icon: "on-target",
        subtitle: "Finalizadora · exige empolgação 5",
        description: "Declarado antes da jogada, o golpe simplesmente encontra o alvo",
        reference: "Livro de Regras, pg. 62.",
        bullets: [
            "Você deve declarar que está usando esta manobra <b>antes da jogada de ataque</b>.",
            "Sua próxima jogada de ataque tem o resultado tratado como <b>10 acima do original</b> (um 10 no dado vira 20, por exemplo).",
            "Após usar uma finalizadora, você retorna ao nível de empolgação 1."
        ]
    },
    {
        title: "Finalizadora: Quebra Crânio",
        icon: "crowned-explosion",
        subtitle: "Finalizadora · exige empolgação 5",
        description: "Você ataca com toda a potência possível, canalizando a empolgação em um golpe avassalador",
        reference: "Livro de Regras, pg. 62.",
        bullets: [
            "Seu próximo ataque causa <b>2d10 de dano adicional</b>.",
            "O alvo deve realizar um <b>TR de Fortitude com CD aumentada em 5</b>, ficando <b>Atordoado</b> até o começo do seu próximo turno em uma falha.",
            "Após usar uma finalizadora, você retorna ao nível de empolgação 1."
        ]
    }
];

/* -------------------------------------------- ESPECIALISTA EM COMBATE */

data_base_combate = [
    {
        title: "Características de Especialista em Combate",
        icon: "crossed-swords",
        subtitle: "12 PV · 1d10 · 4 PE · For/Des/Sab",
        description: "Trata o combate como uma arte a se desenvolver e dominar",
        reference: "Livro de Regras, pg. 63.",
        bullets: [
            "<b>PV.</b> 12 + mod. de Constituição no 1º nível; <b>1d10</b> (ou 6 fixo) + mod. de Constituição nos seguintes.",
            "<b>Treinamentos.</b> Todas as armas e escudos. Um TR entre Fortitude ou Reflexos. Duas perícias de Ofício, Atletismo ou Acrobacia e três outras quaisquer.",
            "<b>PE.</b> 4 pontos de energia por nível.",
            "<b>Atributo-chave.</b> Força, Destreza ou Sabedoria. <b>Multiclasse:</b> Força ou Destreza 16.",
            "Bons exemplos são Kento Nanami, Yuta Okkotsu e Atsuya Kusakabe."
        ]
    },
    {
        title: "Repertório do Especialista",
        icon: "scroll-unfurled",
        subtitle: "Base · 1º nível · escolhe um estilo",
        description: "Você escolhe um estilo principal para seguir em sua especialização",
        reference: "Livro de Regras, pg. 63.",
        bullets: [
            "No 1º nível você recebe <b>um dos estilos de combate</b>.",
            "Você recebe um <b>novo estilo no nível 6</b> e outro no <b>12</b>, complementando suas capacidades dentro de combate."
        ]
    },
    {
        title: "Artes do Combate",
        icon: "meditation",
        subtitle: "Base · 1º nível · Pontos de Preparo",
        description: "Você sabe como se preparar e usar desse preparo para realizar ações especiais em combate",
        reference: "Livro de Regras, pg. 64.",
        bullets: [
            "Você recebe <b>Pontos de Preparo</b> iguais ao seu <b>nível de Especialista em Combate + modificador de Sabedoria</b>.",
            "Sempre que <b>eliminar um inimigo</b>, você recupera <b>1 Ponto de Preparo</b>.",
            "Você pode usar sua <b>ação comum para analisar o campo de batalha</b>, recuperando <b>2 Pontos de Preparo</b>.",
            "Em um <b>descanso curto</b> você recupera metade do máximo; em um <b>descanso longo</b>, todos."
        ]
    },
    {
        title: "Golpe Especial",
        icon: "energy-sword",
        subtitle: "Base · 4º nível · mín. 1 PE",
        description: "Monte um ataque especial escolhendo propriedades que somam e subtraem custo",
        reference: "Livro de Regras, pg. 65.",
        bullets: [
            "<b>Amplo.</b> O ataque atinge uma criatura a mais. +2 PE",
            "<b>Atroz.</b> Em um acerto, causa 1 dado de dano adicional. +1 PE",
            "<b>Impactante.</b> Empurra o alvo 1,5 m para cada 15 pontos de dano causados; Fortitude reduz à metade. +1 PE",
            "<b>Letal.</b> Diminui em 1 a margem de crítico do ataque. +2 PE",
            "<b>Longo.</b> Aumenta o alcance da arma em 1,5 m (corpo a corpo) ou 9 m (a distância). +1 PE",
            "<b>Penetrante.</b> Ignora redução a dano igual a metade do seu nível de personagem. +2 PE",
            "<b>Preciso.</b> Recebe vantagem no ataque; após o primeiro uso na rodada o custo sobe. +1 PE / +2 PE",
            "<b>Sanguinário.</b> O alvo sofre sangramento leve (CD de Especialização); pode ser pego uma segunda vez para sangramento médio. +2 PE",
            "<b>Lento.</b> O ataque deve ser usado como ação completa. −2 PE",
            "<b>Sacrifício.</b> Você recebe 15 de dano ao efetuar o ataque. −1 PE",
            "<b>Desfocado.</b> O ataque recebe −4 no acerto (cumulativo até três vezes). −1 PE",
            "Ao terminar de montar, você paga o custo total; um ataque especial deve custar <b>no mínimo 1 PE</b>."
        ]
    },
    {
        title: "Implemento Marcial",
        icon: "target-arrows",
        subtitle: "Base · 4º nível · +2 na CD",
        description: "Você recebe +2 na CD de suas Habilidades de Especialização, Feitiços e Aptidões Amaldiçoadas",
        reference: "Livro de Regras, pg. 65.",
        bullets: [
            "Esse bônus aumenta em <b>+1 nos níveis 8 e 16</b> de Especialista em Combate."
        ]
    },
    {
        title: "Renovação pelo Sangue",
        icon: "droplets",
        subtitle: "Base · 6º nível",
        description: "Você passa a renovar seu próprio estoque de energia a partir do sangue",
        reference: "Livro de Regras, pg. 65.",
        bullets: [
            "Ao acertar um <b>ataque crítico</b> ou <b>reduzir os pontos de vida de um inimigo a 0</b>, você recupera <b>1 ponto de energia amaldiçoada</b>."
        ]
    },
    {
        title: "Teste de Resistência Mestre",
        icon: "strong",
        subtitle: "Base · 9º nível",
        description: "Você se torna treinado em um segundo teste de resistência e mestre no da sua especialização",
        reference: "Livro de Regras, pg. 65.",
        bullets: [
            "Ser mestre em um TR permite obter <b>sucesso crítico</b> ao superar a CD em 10 ou mais."
        ]
    },
    {
        title: "Autossuficiente",
        icon: "trophy",
        subtitle: "Base · 20º nível",
        description: "Você se torna autossuficiente na energia para usar seu golpe especial",
        reference: "Livro de Regras, pg. 65.",
        bullets: [
            "Sempre que realizar um <b>Golpe Especial</b>, você recebe <b>3 PE temporários</b> para usar no ataque.",
            "<b>Uma vez por cena</b>, você pode transformar esse valor em <b>6</b>.",
            "Todos os seus ataques causam <b>um dado de dano adicional</b>, do mesmo tipo da arma manuseada."
        ]
    }
];

data_opcoes_combate = [
    {
        title: "Estilo Defensivo",
        icon: "bordered-shield",
        subtitle: "Estilo de combate · +2 Defesa",
        description: "Você foca em aprimorar a sua defesa",
        reference: "Livro de Regras, pg. 63.",
        bullets: ["Sua <b>Defesa aumenta em 2</b> e, nos níveis 4, 8, 12 e 16, aumenta em <b>+1</b>."]
    },
    {
        title: "Estilo do Arremessador",
        icon: "flying-dagger",
        subtitle: "Estilo de combate · +2 dano",
        description: "Você se versa em armas de arremesso",
        reference: "Livro de Regras, pg. 63.",
        bullets: [
            "Você pode <b>sacar uma arma de arremesso como parte do ataque</b>.",
            "Recebe <b>+2 em rolagens de dano</b> com elas, aumentando em +1 nos níveis 4, 8, 12 e 16."
        ]
    },
    {
        title: "Estilo do Duelista",
        icon: "broadsword",
        subtitle: "Estilo de combate · uma arma e mão livre",
        description: "Você foca em duelar com uma única arma em mãos",
        reference: "Livro de Regras, pg. 63.",
        bullets: [
            "Usando uma arma em uma mão e a outra livre, você recebe <b>+1 em acerto e +2 em dano</b>.",
            "Nos níveis 4, 8, 12 e 16 o bônus em dano aumenta em +1; nos níveis 8 e 16 o bônus em acerto aumenta em +1."
        ]
    },
    {
        title: "Estilo do Interceptador",
        icon: "shield-reflect",
        subtitle: "Estilo de combate · Reação",
        description: "Você usa suas armas para interceptar ataques em seus aliados",
        reference: "Livro de Regras, pg. 63.",
        bullets: [
            "Quando um aliado dentro do seu alcance receber um ataque, use sua <b>reação</b> para reduzir o dano em <b>1d10 + seu modificador de Força, Destreza ou Sabedoria</b>.",
            "Aumenta em <b>um dado</b> nos níveis 4, 8, 12 e 16."
        ]
    },
    {
        title: "Estilo do Protetor",
        icon: "help",
        subtitle: "Estilo de combate · Reação",
        description: "Você se dedica a proteger seus aliados, buscando evitar um acerto",
        reference: "Livro de Regras, pg. 64.",
        bullets: [
            "Quando uma criatura atacar um alvo além de você que esteja dentro de <b>1,5 metro</b>, use sua <b>reação</b> para impor <b>desvantagem</b>.",
            "Você também pode conceder <b>vantagem no Teste de Resistência</b> de um aliado dentro de 1,5 metro."
        ]
    },
    {
        title: "Estilo Distante",
        icon: "pistol-gun",
        subtitle: "Estilo de combate · armas a distância",
        description: "Você sabe como usar armas que focam em atingir de maneira distante",
        reference: "Livro de Regras, pg. 64.",
        bullets: [
            "Você recebe <b>+1 em acerto e +2 em dano</b> com armas a distância.",
            "Nos níveis 4, 8, 12 e 16 o bônus em dano aumenta em +1; nos níveis 8 e 16 o bônus em acerto aumenta em +1."
        ]
    },
    {
        title: "Estilo Duplo",
        icon: "dervish-swords",
        subtitle: "Estilo de combate · duas armas",
        description: "Você sabe a maneira perfeita de manejar duas armas",
        reference: "Livro de Regras, pg. 64.",
        bullets: [
            "Lutando com duas armas, você pode <b>adicionar o seu bônus de atributo no dano do ataque com a segunda arma</b>.",
            "Recebe ainda <b>+1 em rolagens de dano</b>, aumentando em +1 nos níveis 4, 8, 12 e 16."
        ]
    },
    {
        title: "Estilo Massivo",
        icon: "battle-axe",
        subtitle: "Estilo de combate · armas pesadas",
        description: "Você domina armas pesadas e massivas",
        reference: "Livro de Regras, pg. 64.",
        bullets: [
            "Ao rolar <b>1 ou 2</b> em um dado de dano com arma usada em duas mãos ou com a propriedade <i>pesada</i>, você pode <b>rolar novamente</b> e ficar com o novo resultado.",
            "Recebe <b>+1 em rolagens de dano</b> com a arma, aumentando em +1 nos níveis 4, 8, 12 e 16."
        ]
    },
    {
        title: "Arte: Arremesso Ágil",
        icon: "flying-dagger",
        subtitle: "Arte do combate · 1 Preparo",
        description: "Ao realizar um ataque corpo a corpo, você emenda um arremesso",
        reference: "Livro de Regras, pg. 64.",
        bullets: [
            "Gaste <b>1 ponto de preparo</b> para, como uma <b>ação livre</b>, realizar outro ataque com uma <b>arma de arremesso</b> contra um segundo alvo."
        ]
    },
    {
        title: "Arte: Distração Letal",
        icon: "domino-mask",
        subtitle: "Arte do combate · 1 Preparo",
        description: "Você foca o ataque em distrair o alvo",
        reference: "Livro de Regras, pg. 64.",
        bullets: [
            "Caso o ataque acerte, a criatura tem a <b>Defesa reduzida em metade do seu modificador de Sabedoria</b> por uma rodada."
        ]
    },
    {
        title: "Arte: Execução Silenciosa",
        icon: "hidden",
        subtitle: "Arte do combate · 1 Preparo",
        description: "Aumenta a letalidade de um ataque contra criatura desprevenida",
        reference: "Livro de Regras, pg. 64.",
        bullets: [
            "Adiciona <b>1d6 de dano</b> ao atacar uma criatura <b>desprevenida</b>.",
            "A cada <b>+2 no modificador de Sabedoria</b>, o dano aumenta em <b>+1d6</b>."
        ]
    },
    {
        title: "Arte: Golpe Descendente",
        icon: "fist",
        subtitle: "Arte do combate · 1 Preparo",
        description: "Você faz o ataque corpo a corpo vir por cima",
        reference: "Livro de Regras, pg. 64.",
        bullets: [
            "Ao acertar, sua <b>Defesa aumenta em metade do seu modificador de Sabedoria</b> até o começo do seu próximo turno."
        ]
    },
    {
        title: "Arte: Investida Imediata",
        icon: "bull",
        subtitle: "Arte do combate · 2 Preparo",
        description: "Transforma a ação de ataque em uma investida imediata",
        reference: "Livro de Regras, pg. 64.",
        bullets: [
            "Você se aproxima <b>mod. de Sabedoria × 1,5 m</b> de um alvo e realiza o ataque logo após.",
            "Esse movimento <b>não causa ataques de oportunidade</b>."
        ]
    },
    {
        title: "Arte: Avanço Bumerangue",
        icon: "spiral-arrow",
        subtitle: "Técnicas de Avanço · 3 Preparo",
        description: "Você salta na direção de um inimigo e retorna ao ponto de partida",
        reference: "Livro de Regras, pg. 77.",
        bullets: [
            "Ao usar a ação Atacar, gaste <b>3 Pontos de Preparo</b> para saltar até um inimigo dentro de <b>6 metros</b> e, após encerrar a ação, retornar ao ponto de partida.",
            "Nem o avanço nem o retorno causam <b>ataques de oportunidade</b>.",
            "Durante o retorno, gaste <b>1 Ponto de Preparo</b> para atacar o mesmo alvo com uma arma de arremesso ou a distância."
        ]
    },
    {
        title: "Arte: Sombra Descendente",
        icon: "hidden",
        subtitle: "Técnicas de Avanço · Ação comum · 3 Preparo",
        description: "Você avança, ataca, se ergue no ar e cai sobre outro inimigo",
        reference: "Livro de Regras, pg. 77.",
        bullets: [
            "Gaste <b>3 Pontos de Preparo</b> para avançar contra um inimigo dentro de <b>6 metros</b> e atacá-lo.",
            "Após o ataque, você o usa como apoio e se ergue no ar, podendo cair sobre outro inimigo dentro de 6 metros e atacá-lo, terminando em um lugar desocupado dentro de 3 metros do alvo."
        ]
    },
    {
        title: "Arte: Nuvens Espirais",
        icon: "whirlwind",
        subtitle: "Técnicas da Força · Ação completa · 2 Preparo/ataque",
        description: "Uma sequência de até três ataques que empurra o alvo",
        reference: "Livro de Regras, pg. 77.",
        bullets: [
            "Você pode realizar até <b>três ataques</b>, gastando <b>2 Pontos de Preparo</b> para cada um.",
            "A cada ataque o alvo é <b>empurrado 3 metros</b> para qualquer direção, com você o acompanhando.",
            "Cada ataque causa <b>2d6 de dano Energético adicional</b>."
        ]
    },
    {
        title: "Arte: Onda do Dragão",
        icon: "wave-strike",
        subtitle: "Técnicas da Força · 5 Preparo",
        description: "Um golpe que empurra o alvo e rasga sua defesa",
        reference: "Livro de Regras, pg. 77.",
        bullets: [
            "Ao usar a ação Atacar, gaste <b>5 Pontos de Preparo</b> para receber <b>vantagem</b> neste ataque.",
            "Acertando, o alvo é <b>empurrado 6 metros</b>, recebe <b>3d12 de dano Energético adicional</b> e tem <b>metade da sua Redução de Dano ignorada</b>."
        ]
    },
    {
        title: "Arte: Saque Devastador",
        icon: "shield-reflect",
        subtitle: "Técnicas de Saque · Reação · 2+4 Preparo",
        description: "Você prepara um saque no fim do turno e o libera ao ser atacado",
        reference: "Livro de Regras, pg. 77.",
        bullets: [
            "No final do seu turno, gaste <b>2 Pontos de Preparo</b> para preparar um saque que dura até o começo do próximo turno.",
            "Sendo atacado, gaste <b>4 Pontos de Preparo</b> e sua <b>Reação</b> para atacar a criatura atacante.",
            "Se o resultado da sua Jogada de Ataque for <b>maior</b>, você anula o ataque dela e acerta o seu, causando <b>4d10 de dano adicional</b> do mesmo tipo da arma e <b>ignorando Redução de Dano</b>.",
            "Se for menor, você apenas causa o dano comum de um ataque."
        ]
    },
    {
        title: "Arte: Saque Trovão",
        icon: "sprint",
        subtitle: "Técnicas de Saque · Ação completa · 6 Preparo",
        description: "Você corre pelo campo cortando todos que ficarem no caminho",
        reference: "Livro de Regras, pg. 77.",
        bullets: [
            "Gaste <b>6 Pontos de Preparo</b> para se mover uma distância igual ao seu Deslocamento.",
            "Enquanto se move assim você <b>não recebe ataques de oportunidade</b> e pode <b>atacar todo inimigo que fique dentro de 3 metros</b> durante a locomoção."
        ]
    },
    {
        title: "Postura do Sol",
        icon: "sunbeams",
        subtitle: "Postura · +2 acerto, −4 Defesa",
        description: "Uma postura que foca na ofensiva, sacrificando sua defesa",
        reference: "Livro de Regras, pg. 76.",
        bullets: [
            "Todos os seus ataques recebem <b>+2 para acertar</b> e causam <b>um dado de dano a mais</b>.",
            "Entretanto, sua <b>Defesa diminui em 4</b>.",
            "Entrar em uma postura é uma <b>ação bônus</b>; dura 1 minuto ou até você ser derrubado, ficar incapacitado ou trocar de postura. Usos por cena iguais ao bônus de treinamento."
        ]
    },
    {
        title: "Postura da Lua",
        icon: "moon",
        subtitle: "Postura · +3 Defesa, −4 acerto",
        description: "Uma postura que foca na defesa, sacrificando sua ofensiva",
        reference: "Livro de Regras, pg. 76.",
        bullets: [
            "Você recebe <b>+3 de Defesa</b>, pode usar <b>Andar ou Desengajar como ação livre</b> e pode, como <b>reação</b>, reduzir um dano recebido em um valor igual ao seu <b>nível de personagem</b>.",
            "Entretanto, todos os seus ataques recebem <b>−4 para acertar</b> e <b>não recebem seu bônus de atributo no dano</b>."
        ]
    },
    {
        title: "Postura da Terra",
        icon: "stone-block",
        subtitle: "Postura · resistência e durabilidade",
        description: "Uma postura que foca na resistência e durabilidade",
        reference: "Livro de Regras, pg. 76.",
        bullets: [
            "Você <b>não pode ser movido à força</b>.",
            "Soma seu <b>bônus de treinamento em rolagens de Fortitude</b>.",
            "No começo do seu turno, recebe <b>pontos de vida temporários iguais ao seu nível de personagem</b>."
        ]
    },
    {
        title: "Postura do Dragão",
        icon: "fire-breath",
        subtitle: "Postura · dano em área",
        description: "Seus ataques respingam nos inimigos ao redor do alvo",
        reference: "Livro de Regras, pg. 76.",
        bullets: [
            "Sempre que realizar um ataque, todo inimigo dentro de <b>1,5 metro do alvo</b> deve realizar um <b>TR de Fortitude</b> ou recebe <b>metade do dano</b> que o alvo recebeu."
        ]
    },
    {
        title: "Postura da Fortuna",
        icon: "dice-six-faces-six",
        subtitle: "Postura · rerrolar resultados baixos",
        description: "A sorte passa a acompanhar seus dados",
        reference: "Livro de Regras, pg. 76.",
        bullets: [
            "Ao rolar um d20 e conseguir um resultado <b>igual ou menor ao seu bônus de treinamento</b>, você pode rolar novamente e ficar com o maior resultado.",
            "Usos por rodada iguais a <b>metade do seu bônus de treinamento</b>, e apenas uma vez no mesmo dado."
        ]
    },
    {
        title: "Postura da Devastação",
        icon: "triple-claws",
        subtitle: "Postura · acumula contra o mesmo alvo · nível 6",
        description: "Cada golpe no mesmo alvo abre mais a guarda dele",
        reference: "Livro de Regras, pg. 76.",
        bullets: [
            "Para cada golpe acertado contra o <b>mesmo alvo</b>, você recebe <b>+1 em acerto</b> e <b>ignora 2 de redução de dano</b>.",
            "Máximo igual ao seu <b>bônus de treinamento</b> para o acerto e o <b>dobro dele</b> para a redução de dano.",
            "Se trocar de alvo uma vez, <b>retorna ao zero</b>.",
            "<b>Pré-requisito:</b> Nível 6."
        ]
    },
    {
        title: "Postura da Tempestade",
        icon: "tornado",
        subtitle: "Postura · derruba e imobiliza · nível 10",
        description: "Cada acerto ameaça derrubar e prender o alvo no chão",
        reference: "Livro de Regras, pg. 76.",
        bullets: [
            "Sempre que acertar um ataque, o alvo realiza um <b>TR de Fortitude</b>, sendo <b>derrubado</b> em uma falha.",
            "Ao acertar um alvo já caído, ele repete o teste e, falhando, fica <b>Imóvel</b> até o começo do seu turno.",
            "<b>Pré-requisito:</b> Nível 10."
        ]
    },
    {
        title: "Postura do Céu",
        icon: "feathered-wing",
        subtitle: "Postura · balanceada · nível 12",
        description: "Uma postura balanceada, que apenas acentua suas capacidades essenciais",
        reference: "Livro de Regras, pg. 76.",
        bullets: [
            "O <b>alcance dos seus ataques é dobrado</b>.",
            "Você recebe <b>2 pontos de preparo temporários</b> no começo de todo turno.",
            "Recebe <b>+2 em todas as suas rolagens de perícia</b>.",
            "<b>Pré-requisito:</b> Nível 12."
        ]
    }
];

/* -------------------------------------------- ESPECIALISTA EM TÉCNICA */

data_base_tecnica = [
    {
        title: "Características de Especialista em Técnica",
        icon: "magic-swirl",
        subtitle: "10 PV · 1d8 · 6 PE · Int ou Sab",
        description: "Dedica-se a maximizar o potencial da sua energia amaldiçoada e da sua técnica",
        reference: "Livro de Regras, pg. 78.",
        bullets: [
            "<b>PV.</b> 10 + mod. de Constituição no 1º nível; <b>1d8</b> (ou 5 fixo) + mod. de Constituição nos seguintes.",
            "<b>Treinamentos.</b> Armas Simples e Armas a Distância. Um TR entre Astúcia ou Vontade. Duas perícias de Ofício, Feitiçaria, Ocultismo e duas outras quaisquer.",
            "<b>PE.</b> 6 por nível, <b>somando o modificador do atributo de técnica</b> uma vez ao máximo.",
            "<b>Atributo-chave.</b> Inteligência ou Sabedoria. <b>Multiclasse:</b> Inteligência ou Sabedoria 16.",
            "Bons exemplos são Satoru Gojo e Ryomen Sukuna."
        ]
    },
    {
        title: "Domínio dos Fundamentos",
        icon: "magic-swirl",
        subtitle: "Base · 1º nível · 2 mudanças",
        description: "Você tem maior dominância sobre os fundamentos da energia amaldiçoada",
        reference: "Livro de Regras, pg. 78.",
        bullets: [
            "Você aprende <b>duas Mudanças de Fundamento</b> no 1º nível e <b>uma adicional no nível 12</b>."
        ]
    },
    {
        title: "Conjuração Aprimorada",
        icon: "energy-arrow",
        subtitle: "Base · 1º nível · bônus de dano por nível do Feitiço",
        description: "Você extrai um maior potencial de todos os Feitiços que causam dano",
        reference: "Livro de Regras, pg. 79.",
        bullets: [
            "Bônus somado ao dano conforme o <b>nível do Feitiço</b>: <b>Nível 1</b> mod. de atributo · <b>Nível 2</b> mod. de atributo · <b>Nível 3</b> dobro do mod. · <b>Nível 4</b> 2× mod. + nível de personagem · <b>Nível 5</b> 2× mod. + 2× nível de personagem · <b>Técnica Máxima</b> 3× mod. + 3× nível de personagem.",
            "Além disso, você passa a receber <b>novos Feitiços em todo nível</b>, ao invés de apenas nos níveis pares."
        ]
    },
    {
        title: "Adiantar a Evolução",
        icon: "sprint",
        subtitle: "Base · 4º nível",
        description: "Você adianta a evolução das suas habilidades para Feitiços de nível superior",
        reference: "Livro de Regras, pg. 79.",
        bullets: [
            "No <b>nível 4</b>, acesso a Feitiços nível 2.",
            "No <b>nível 7</b>, acesso a Feitiços nível 3.",
            "No <b>nível 11</b>, acesso a Feitiços nível 4.",
            "No <b>nível 15</b>, acesso a Feitiços nível 5."
        ]
    },
    {
        title: "Teste de Resistência Mestre",
        icon: "strong",
        subtitle: "Base · 9º nível",
        description: "Você se torna treinado em um segundo teste de resistência e mestre no da sua especialização",
        reference: "Livro de Regras, pg. 79.",
        bullets: [
            "Ser mestre em um TR permite obter <b>sucesso crítico</b> ao superar a CD em 10 ou mais."
        ]
    },
    {
        title: "Foco Amaldiçoado",
        icon: "target-arrows",
        subtitle: "Base · 10º nível · escolhe um foco",
        description: "Você se foca em certos aspectos do funcionamento da energia amaldiçoada",
        reference: "Livro de Regras, pg. 80.",
        bullets: [
            "<b>Destruição.</b> Todo Feitiço causa <b>+1 de dano por dado rolado</b>; e sempre que causar dano com Feitiço ou aptidão amaldiçoada você <b>soma o bônus de treinamento</b> ao total.",
            "<b>Economia.</b> O custo de todos os seus Feitiços é <b>reduzido em 2</b> (podendo zerar o custo dos de nível 1) e você <b>soma o bônus de treinamento ao máximo de PE</b>.",
            "<b>Refino.</b> Você recebe uma <b>Aptidão Amaldiçoada ou Feitiço adicional</b> e passa a somar <b>metade do bônus de treinamento</b> em todas as suas CDs e em jogadas de ataque amaldiçoado."
        ]
    },
    {
        title: "O Honrado",
        icon: "trophy",
        subtitle: "Base · 20º nível",
        description: "Entre os céus e a terra, você sozinho é o honrado",
        reference: "Livro de Regras, pg. 80.",
        bullets: [
            "Feitiços de <b>nível 1, 2 e 3</b> têm o custo <b>reduzido pela metade</b>.",
            "A <b>CD</b> de todos os seus Feitiços e Aptidões Amaldiçoadas <b>aumenta em 5</b>.",
            "Você recebe <b>+5 em rolagens de ataque</b> para Feitiços e Aptidões Amaldiçoadas."
        ]
    }
];

data_opcoes_tecnica = [
    {
        title: "Feitiço Cruel",
        icon: "target-arrows",
        subtitle: "Mudança de Fundamento · 1-2 PE",
        description: "Aumenta a CD do Teste de Resistência forçado pelo Feitiço",
        reference: "Livro de Regras, pg. 78.",
        bullets: ["Gaste <b>1 PE para aumentar a CD em 2</b> ou <b>2 PE para aumentar em 4</b>."]
    },
    {
        title: "Feitiço Distante",
        icon: "target-laser",
        subtitle: "Mudança de Fundamento · 2 PE",
        description: "Dobra o alcance de um Feitiço a distância",
        reference: "Livro de Regras, pg. 78.",
        bullets: [
            "Gaste <b>2 PE para dobrar o alcance</b> de um Feitiço a distância.",
            "Sendo um Feitiço corpo a corpo, gaste <b>2 PE para dar a ele alcance de 9 metros</b>."
        ]
    },
    {
        title: "Feitiço Duplicado",
        icon: "dervish-swords",
        subtitle: "Mudança de Fundamento · 1×/rodada",
        description: "Dá um segundo alvo a um Feitiço de dano de alvo único",
        reference: "Livro de Regras, pg. 78.",
        bullets: ["O custo é igual ao <b>dobro do nível do Feitiço</b> (considere 1 para Feitiços nível 0)."]
    },
    {
        title: "Feitiço Expansivo",
        icon: "crowned-explosion",
        subtitle: "Mudança de Fundamento · 3 PE",
        description: "Aumenta a área de um Feitiço em metade da área padrão",
        reference: "Livro de Regras, pg. 78.",
        bullets: ["Gaste <b>3 PE</b> para aumentar a área em metade do valor padrão (<b>1,5× do total</b>)."]
    },
    {
        title: "Feitiço Potente",
        icon: "energy-sword",
        subtitle: "Mudança de Fundamento · 2 PE",
        description: "Rerrola dados de dano, ficando com os melhores resultados",
        reference: "Livro de Regras, pg. 79.",
        bullets: [
            "Gaste <b>2 PE</b> e role novamente uma quantidade de dados de dano igual ao seu <b>modificador de Inteligência ou Sabedoria</b>, usando os melhores resultados."
        ]
    },
    {
        title: "Feitiço Preciso",
        icon: "on-target",
        subtitle: "Mudança de Fundamento · 1-2 PE",
        description: "Melhora o acerto de um Feitiço que use teste de ataque",
        reference: "Livro de Regras, pg. 79.",
        bullets: ["Gaste <b>1 PE para +2 de acerto</b> ou <b>2 PE para +4 de acerto</b>."]
    },
    {
        title: "Feitiço Rápido",
        icon: "sprint",
        subtitle: "Mudança de Fundamento · 1×/rodada · nível 6",
        description: "Reduz em um passo o custo em ação de um Feitiço",
        reference: "Livro de Regras, pg. 79.",
        bullets: [
            "Reduz o custo em ação em um (<b>Completa → Comum</b> ou <b>Comum → Bônus</b>).",
            "O custo é igual ao <b>dobro do nível do Feitiço</b> (considere 1 para Feitiços nível 0).",
            "<b>Pré-requisito:</b> Nível 6."
        ]
    }
];

/* ------------------------------------------------------------ CONTROLADOR */

data_base_controlador = [
    {
        title: "Características de Controlador",
        icon: "spawn-node",
        subtitle: "10 PV · 1d8 · 5 PE · Pre ou Sab",
        description: "Controla invocações, extraindo todo o potencial de shikigamis ou corpos amaldiçoados",
        reference: "Livro de Regras, pg. 90.",
        bullets: [
            "<b>PV.</b> 10 + mod. de Constituição no 1º nível; <b>1d8</b> (ou 5 fixo) + mod. de Constituição nos seguintes.",
            "<b>Treinamentos.</b> Armas Simples e Armas a Distância. Um TR entre Astúcia ou Vontade. Uma perícia de Ofício, Percepção, Persuasão e outras duas quaisquer.",
            "<b>PE.</b> 5 por nível, <b>somando o modificador do atributo de técnica</b> uma vez ao máximo.",
            "<b>Atributo-chave.</b> Presença ou Sabedoria. <b>Multiclasse:</b> Presença ou Sabedoria 16.",
            "Bons exemplos são Megumi Fushiguro, Kokichi Muta e Suguru Geto."
        ]
    },
    {
        title: "Treinamento em Controle",
        icon: "spawn-node",
        subtitle: "Base · 1º nível · 2 invocações",
        description: "Você é treinado para controlar Invocações com maior eficiência",
        reference: "Livro de Regras, pg. 90.",
        bullets: [
            "Recebe <b>duas Invocações iniciais</b> (shikigamis ou corpos amaldiçoados). Nos níveis <b>3, 6, 9, 10, 12, 15 e 18</b> recebe uma Invocação adicional.",
            "A quantidade de Invocações que você pode manter <b>ativas em campo aumenta em 1</b>.",
            "Nos níveis <b>6, 12 e 18</b> a quantidade de comandos que você realiza com uma Ação Comum e Bônus aumenta em um."
        ]
    },
    {
        title: "Controle Aprimorado",
        icon: "help",
        subtitle: "Base · 4º nível · +2 nos testes da invocação",
        description: "Você é naturalmente mais capaz em comandar invocações",
        reference: "Livro de Regras, pg. 91.",
        bullets: [
            "Suas invocações recebem <b>+2 em testes</b>, aumentando em +1 para cada grau acima do quarto (+3 para terceiro, +4 para segundo etc.).",
            "Você pode usar <b>Aptidões Amaldiçoadas de Controle e Leitura a partir das suas Invocações</b>, fazendo com que elas recebam os efeitos — como o aumento de dano de <i>Canalizar em Golpe</i>.",
            "Não é possível usar <i>Punho Divergente</i> e <i>Emoção da Pétala Decadente</i> a partir de Invocações."
        ]
    },
    {
        title: "Apogeu",
        icon: "trophy",
        subtitle: "Base · 6º nível · escolhe um estilo",
        description: "Você encontra o caminho que deseja seguir como controlador",
        reference: "Livro de Regras, pg. 91.",
        bullets: [
            "<b>Controle Concentrado.</b> Em vez de invocar duas invocações como ação bônus, você pode invocar <b>apenas uma como ação livre</b>.",
            "<b>Controle Disperso.</b> +1 invocação ativa em campo e +1 na quantidade que pode invocar/ativar com uma ação; acesso à ação <b>Criar Horda</b>. A partir do nível 12, ambos aumentam em +1 novamente e você pode criar <b>duas hordas</b> em uma mesma ação.",
            "<b>Controle Sintonizado.</b> Uma vez por rodada, quando uma invocação atacar um alvo dentro do seu alcance, pague <b>2 PE</b> para atacar o mesmo alvo como <b>ação livre</b>. Além disso, <b>+1 em acerto e dano por invocação em campo</b>."
        ]
    },
    {
        title: "Teste de Resistência Mestre",
        icon: "strong",
        subtitle: "Base · 9º nível",
        description: "Você se torna treinado em um segundo teste de resistência e mestre no da sua especialização",
        reference: "Livro de Regras, pg. 91.",
        bullets: [
            "Ser mestre em um TR permite obter <b>sucesso crítico</b> ao superar a CD em 10 ou mais."
        ]
    },
    {
        title: "Reserva para Invocação",
        icon: "lightning-arc",
        subtitle: "Base · 10º nível · 1×/descanso curto",
        description: "Uma reserva dedicada para invocar ou ativar as suas invocações",
        reference: "Livro de Regras, pg. 91.",
        bullets: [
            "Uma vez por descanso curto, use a ação <b>Invocar</b> para trazer <b>duas invocações com custo reduzido pela metade</b> ou <b>uma invocação sem custo</b>.",
            "Usando para <b>Criar Horda</b>, o custo total dela é reduzido pela metade."
        ]
    },
    {
        title: "Ápice do Controle",
        icon: "trophy",
        subtitle: "Base · 20º nível",
        description: "Você levou além do limite a arte de ter invocações e as controlar",
        reference: "Livro de Regras, pg. 91.",
        bullets: [
            "Suas invocações recebem <b>duas ações/características adicionais</b>, que não influenciam no custo delas.",
            "Você passa a <b>invocar ou ativar suas invocações como ação livre</b> (se já era ação livre, o custo é reduzido em 2 PE).",
            "Invocações de outras criaturas possuem <b>desvantagem para realizar ações ofensivas contra você</b>."
        ]
    }
];

data_opcoes_controlador = [
    {
        title: "Melhoria: Agressividade",
        icon: "energy-sword",
        subtitle: "Melhoria de Controlador",
        description: "Os ataques da Invocação causam 1d6 de dano adicional",
        reference: "Livro de Regras, pg. 100.",
        bullets: [
            "<b>Nível 4:</b> +3 em rolagens de dano. <b>Nível 8:</b> o dado adicional vira 1d8. <b>Nível 12:</b> o bônus em dano vira +6. <b>Nível 16:</b> o dado vira 1d10. <b>Nível 18:</b> vira 1d12.",
            "A melhoria escolhida é aplicada em uma quantidade de Invocações igual ao seu <b>Bônus de Treinamento</b>. A escolha só pode ser alterada se uma Invocação com melhoria morrer."
        ]
    },
    {
        title: "Melhoria: Resistência",
        icon: "bordered-shield",
        subtitle: "Melhoria de Controlador",
        description: "A Defesa da sua Invocação aumenta em 2",
        reference: "Livro de Regras, pg. 100.",
        bullets: [
            "<b>Nível 4:</b> 2 de RD contra todos os tipos. <b>Nível 8:</b> +1 de Defesa. <b>Nível 12:</b> mais 3 de RD. <b>Nível 16:</b> +1 de Defesa. <b>Nível 18:</b> +2 de Defesa."
        ]
    },
    {
        title: "Melhoria: Mobilidade",
        icon: "walking-boot",
        subtitle: "Melhoria de Controlador",
        description: "O Deslocamento da sua Invocação aumenta em 1,5 metros",
        reference: "Livro de Regras, pg. 100.",
        bullets: ["Nos níveis <b>4, 8, 12, 16 e 18</b> aumenta em +1,5 m."]
    },
    {
        title: "Melhoria: Precisão",
        icon: "on-target",
        subtitle: "Melhoria de Controlador",
        description: "A Invocação recebe +2 em Jogadas de Ataque ou +2 na CD das suas Ações",
        reference: "Livro de Regras, pg. 100.",
        bullets: [
            "<b>Nível 4:</b> +2 em Jogadas de Ataque ou CD. <b>Nível 8:</b> +1 e, uma vez por cena, rola novamente um ataque ou força um inimigo a repetir um TR. <b>Nível 12:</b> a rerrolagem vira uma vez por rodada. <b>Níveis 16 e 18:</b> +2 em Jogadas de Ataque ou CD."
        ]
    },
    {
        title: "Invocação Ás",
        icon: "spawn-node",
        subtitle: "Ação livre · 1×/descanso cada",
        description: "Seu companheiro amaldiçoado recebe capacidades especiais",
        reference: "Livro de Regras, pg. 100.",
        bullets: [
            "<b>Curar</b> você em 2d10 + mod. de Sabedoria ou Presença; nos níveis 5, 9, 13 e 17 a cura aumenta em +1d10.",
            "<b>Infligir</b> 2d8 + mod. de Sabedoria ou Presença de dano em um inimigo dentro de 6 m; no nível 5 vira 4d8, no 9 vira 5d10, no 13 vira 8d8 e no 17 vira 8d10 (tipo à sua escolha).",
            "<b>Cegar</b>: todos os inimigos dentro de 9 m fazem um TR de Fortitude ou ficam cegados por 2 turnos; nos níveis 5, 9, 13 e 17 a área aumenta em +3 m.",
            "Cada efeito pode ser usado <b>uma vez por descanso curto ou longo</b>."
        ]
    },
    {
        title: "Concentrar Poder",
        icon: "vortex",
        subtitle: "Uma única invocação marcada em campo",
        description: "Concentrar tudo em uma invocação marcada a torna muito superior",
        reference: "Livro de Regras, pg. 101.",
        bullets: [
            "<b>Inicial.</b> Toda rolagem de dano ou cura da invocação aumenta em 1 nível; +5 PV e +1 de Defesa.",
            "<b>Nível 6.</b> Aumenta em 2 níveis e soma +3 ao total; +10 PV e +2 em Defesa e TRs.",
            "<b>Nível 12.</b> Aumenta em 3 níveis e soma +5 ao total; +20 PV e +3 em Defesa e TRs.",
            "<b>Nível 18.</b> Aumenta em 5 níveis e soma +10 ao total; +30 PV e +5 em Defesa e TRs.",
            "Afeta apenas <b>invocações marcadas</b>: durante um descanso você marca uma quantidade igual a metade do seu bônus de treinamento, só podendo mudar após outro descanso."
        ]
    }
];

/* ----------------------------------------------------------------- SUPORTE */

data_base_suporte = [
    {
        title: "Características de Suporte",
        icon: "health-increase",
        subtitle: "10 PV · 1d8 · 5 PE · Pre ou Sab",
        description: "Focado em auxiliar aliados, curando e ampliando as capacidades deles",
        reference: "Livro de Regras, pg. 102.",
        bullets: [
            "<b>PV.</b> 10 + mod. de Constituição no 1º nível; <b>1d8</b> (ou 5 fixo) + mod. de Constituição nos seguintes.",
            "<b>Treinamentos.</b> Armas Simples e Escudos. Um TR entre Astúcia ou Vontade. Duas perícias de Ofício, Medicina, Prestidigitação e outras três quaisquer.",
            "<b>PE.</b> 5 por nível, <b>somando o modificador do atributo de técnica</b> uma vez ao máximo.",
            "<b>Atributo-chave.</b> Presença ou Sabedoria. <b>Multiclasse:</b> Presença ou Sabedoria 16.",
            "Bons exemplos são Shoko Ieiri, Hana Kurusu e Kirara Hoshi."
        ]
    },
    {
        title: "Suporte em Combate",
        icon: "health-increase",
        subtitle: "Base · 1º nível · cura 2d6+mod",
        description: "Um leque de capacidades que o permite auxiliar dentro do combate",
        reference: "Livro de Regras, pg. 102.",
        bullets: [
            "Você pode usar <b>Apoiar como uma ação bônus</b>.",
            "Como <b>ação bônus</b>, cure uma criatura em alcance de toque em <b>2d6 + mod. de Presença ou Sabedoria</b>, uma quantidade de vezes igual a esse modificador por descanso curto ou longo.",
            "A cura vira <b>2d12 no nível 4</b>, <b>3d12 no 8</b>, <b>6d8 no 12</b> e <b>6d10 no 16</b>."
        ]
    },
    {
        title: "Presença Inspiradora",
        icon: "charm",
        subtitle: "Base · 3º nível · 2 PE",
        description: "Sua presença inspira aqueles ao seu redor a tentarem seu máximo",
        reference: "Livro de Regras, pg. 102.",
        bullets: [
            "Pague <b>2 PE</b> para que, durante uma cena, todo aliado dentro de <b>9 metros</b> fique <b>inspirado</b>: <b>+1 em toda rolagem de perícia</b>.",
            "Gaste PE adicional até metade do seu modificador de Presença para aumentar o bônus em <b>+1 por PE</b>."
        ]
    },
    {
        title: "Versatilidade",
        icon: "scroll-unfurled",
        subtitle: "Base · 5º nível · 1 PE",
        description: "Você pode se considerar treinado em perícias nas quais não é",
        reference: "Livro de Regras, pg. 103.",
        bullets: [
            "Pague <b>1 PE</b> ao rolar uma perícia na qual não seja treinado para considerar como se fosse.",
            "Usos iguais ao seu <b>modificador de Sabedoria</b>, por descanso curto ou longo."
        ]
    },
    {
        title: "Aptidões de Energia Reversa",
        icon: "heart-bottle",
        subtitle: "Base · 6º e 8º níveis",
        description: "O Suporte recebe as aptidões de energia reversa automaticamente",
        reference: "Livro de Regras, pg. 103.",
        bullets: [
            "No <b>nível 6</b>, você recebe a aptidão amaldiçoada <b>Energia Reversa</b>.",
            "No <b>nível 8</b>, você recebe a aptidão amaldiçoada <b>Liberação de Energia Reversa</b>."
        ]
    },
    {
        title: "Teste de Resistência Mestre",
        icon: "strong",
        subtitle: "Base · 9º nível",
        description: "Você se torna treinado em um segundo teste de resistência e mestre no da sua especialização",
        reference: "Livro de Regras, pg. 103.",
        bullets: [
            "Ser mestre em um TR permite obter <b>sucesso crítico</b> ao superar a CD em 10 ou mais."
        ]
    },
    {
        title: "Medicina Infalível",
        icon: "medical-pack",
        subtitle: "Base · 10º nível",
        description: "Você eleva seus conhecimentos médicos para um patamar superior",
        reference: "Livro de Regras, pg. 103.",
        bullets: [
            "Uma quantidade de vezes igual a <b>metade do seu nível de Suporte + bônus de treinamento</b>, você pode <b>maximizar o valor de um dado</b> ao rolar uma cura — gastando vários usos para maximizar mais dados da mesma cura.",
            "Os usos voltam após um descanso curto ou longo.",
            "Você <b>soma o bônus de treinamento no total de toda cura</b> que realizar."
        ]
    },
    {
        title: "Suporte Absoluto",
        icon: "trophy",
        subtitle: "Base · 20º nível",
        description: "Você é o suporte absoluto que se pode ter em campo",
        reference: "Livro de Regras, pg. 103.",
        bullets: [
            "Uma vez por rodada você pode usar <b>Apoiar como Ação Livre</b>.",
            "Sua quantidade de usos de <b>Suporte em Combate é dobrada</b>.",
            "Você soma o <b>modificador do atributo escolhido para a CD de especialização em toda cura</b> que realizar."
        ]
    }
];

data_opcoes_suporte = [
    {
        title: "Apoio Curativo",
        icon: "health-increase",
        subtitle: "Apoio avançado",
        description: "Curar o aliado como parte da ação Apoiar",
        reference: "Livro de Regras, pg. 113.",
        bullets: [
            "Ao apoiar um aliado, gaste uma carga de <b>Suporte em Combate</b> para curá-lo como parte da ação.",
            "Você recebe acesso a um novo apoio avançado nos níveis <b>6 e 12</b>."
        ]
    },
    {
        title: "Apoio Defensivo",
        icon: "bordered-shield",
        subtitle: "Apoio avançado",
        description: "Aumentar a Defesa do aliado apoiado",
        reference: "Livro de Regras, pg. 113.",
        bullets: [
            "Aumente a Defesa dele em <b>metade do seu bônus de treinamento</b> até o começo do próximo turno."
        ]
    },
    {
        title: "Apoio Focado",
        icon: "on-target",
        subtitle: "Apoio avançado",
        description: "Conceder um bônus numérico além da vantagem",
        reference: "Livro de Regras, pg. 113.",
        bullets: [
            "Além da vantagem, conceda um bônus no teste igual a <b>metade do seu modificador de Presença ou Sabedoria</b>."
        ]
    },
    {
        title: "Apoio Ofensivo",
        icon: "crossed-swords",
        subtitle: "Apoio avançado · 2 PE",
        description: "Atacar como parte da ação Apoiar",
        reference: "Livro de Regras, pg. 113.",
        bullets: ["Gaste <b>2 PE</b> para realizar um ataque como parte da ação de apoio."]
    },
    {
        title: "Apoio Estratégico",
        icon: "scroll-unfurled",
        subtitle: "Apoio avançado · nível 6",
        description: "Aumentar a CD do próximo teste do aliado que force TR",
        reference: "Livro de Regras, pg. 113.",
        bullets: [
            "Aumente a CD em <b>metade do seu Bônus de Treinamento</b>.",
            "<b>Pré-requisito:</b> Nível 6."
        ]
    }
];

/* ------------------------------------------------------------- RESTRINGIDO */

data_base_restringido = [
    {
        title: "Características de Restringido",
        icon: "fist",
        subtitle: "16 PV · 1d12 · Estamina · qualquer atributo",
        description: "O feiticeiro sem energia amaldiçoada, com um físico anormal concedido pelos céus",
        reference: "Livro de Regras, pg. 114.",
        bullets: [
            "<b>PV.</b> 16 + mod. de Constituição no 1º nível; <b>1d12</b> (ou 7 fixo) + mod. de Constituição nos seguintes.",
            "<b>Treinamentos.</b> Todas as armas e escudos. Testes de Resistência de <b>Fortitude e Reflexos</b>. Uma perícia de Ofício e outras quatro quaisquer, <b>exceto Feitiçaria</b>.",
            "<b>Energia.</b> Não possui PE — usa <b>Pontos de Estamina</b>.",
            "<b>Atributo-chave.</b> Qualquer um. <b>Multiclasse:</b> impossível, nos dois sentidos.",
            "A Especialização Restringido está <b>limitada à origem</b>. Os melhores exemplos são Toji Fushiguro e Maki Zenin."
        ]
    },
    {
        title: "Restrito pelos Céus",
        icon: "sunbeams",
        subtitle: "Base · 1º nível · 4 Estamina/nível",
        description: "Vários benefícios atrelados ao físico maior e à aptidão ao combate",
        reference: "Livro de Regras, pg. 114.",
        bullets: [
            "Você pode adicionar também seu <b>modificador de Força ou de Constituição na sua Defesa</b>, limitado pelo seu nível.",
            "Começa com uma <b>ferramenta amaldiçoada de quarto grau</b> e um meio de ver maldições (óculos ou lente). A partir do 2º nível, recebe acesso ao <b>Arsenal Amaldiçoado</b>.",
            "No <b>4º nível</b>, e a cada 4 níveis, recebe uma <b>Dádiva do Céu</b>.",
            "Você possui <b>Pontos de Estamina</b>: inicia com 4 e recebe mais 4 a cada nível. Recupera todos em um descanso longo, ou metade em um curto.",
            "Você possui um <b>Estilo Marcial</b> próprio."
        ]
    },
    {
        title: "Ataque Furtivo",
        icon: "hidden",
        subtitle: "Base · 2º nível · 1×/turno",
        description: "Dano adicional contra alvos surpresos, desprevenidos ou flanqueados",
        reference: "Livro de Regras, pg. 115.",
        bullets: [
            "Uma vez por turno, ao atacar de surpresa ou contra um inimigo <b>desprevenido</b>, adicione <b>1d8</b> ao dano.",
            "Se estiver <b>flanqueando</b>, não é necessário que o ataque seja surpresa nem que o alvo esteja desprevenido.",
            "O dano vira <b>2d8 no nível 3</b>, <b>3d8 no 6</b>, <b>4d8 no 9</b>, <b>5d8 no 12</b> e <b>6d8 no 15</b>."
        ]
    },
    {
        title: "Versatilidade",
        icon: "scroll-unfurled",
        subtitle: "Base · 2º nível · +1 em perícias",
        description: "Você pretende se tornar um pouco mais versátil em tudo",
        reference: "Livro de Regras, pg. 115.",
        bullets: ["Você recebe <b>+1 em todas as perícias</b>. No <b>10º nível</b> esse bônus se torna <b>+2</b>."]
    },
    {
        title: "Esquiva Sobre-humana",
        icon: "dodging",
        subtitle: "Base · 3º nível · +1 Defesa e Reflexos",
        description: "Reflexos além do humano melhoram sua guarda e esquiva",
        reference: "Livro de Regras, pg. 115.",
        bullets: [
            "Você recebe <b>+1 na Defesa e em rolagens de Reflexos</b>, aumentando em +1 nos níveis <b>9 e 16</b>.",
            "A partir do <b>10º nível</b>, o valor necessário para um <b>sucesso crítico</b> em Reflexos reduz em metade do seu bônus de treinamento."
        ]
    },
    {
        title: "Implemento Celeste",
        icon: "target-arrows",
        subtitle: "Base · 4º nível · +2 na CD",
        description: "Você recebe +2 na CD de suas habilidades de restringido e técnicas marciais",
        reference: "Livro de Regras, pg. 115.",
        bullets: ["Esse bônus aumenta em <b>+1 nos níveis 8 e 16</b> de Restringido."]
    },
    {
        title: "Teste de Resistência Mestre",
        icon: "strong",
        subtitle: "Base · 9º nível",
        description: "Você se torna mestre nos dois Testes de Resistência conferidos pela sua Especialização",
        reference: "Livro de Regras, pg. 115.",
        bullets: [
            "No caso do Restringido, isso significa ser mestre em <b>Fortitude e Reflexos</b>."
        ]
    },
    {
        title: "Restrição Definitiva",
        icon: "sunbeams",
        subtitle: "Base · 10º nível",
        description: "Seu nível de energia amaldiçoada alcançou o zero absoluto",
        reference: "Livro de Regras, pg. 115.",
        bullets: [
            "<b>Vantagem em Furtividade</b> contra qualquer usuário de energia amaldiçoada, e eles têm <b>desvantagem</b> para percebê-lo.",
            "Você passa a <b>ver o traçado da alma</b> e não precisa mais de ferramenta amaldiçoada para enxergar maldições.",
            "Toda arma que manejar conta como <b>um nível de dano acima</b> e seu deslocamento aumenta em <b>3 metros</b>.",
            "Sendo mestre em perícia ou TR que use Força, Destreza ou Constituição, você soma o <b>bônus de treinamento inteiro</b> em vez de metade.",
            "Você se torna <b>imune a expansões de domínio</b>."
        ]
    },
    {
        title: "Libertação do Destino",
        icon: "trophy",
        subtitle: "Base · 20º nível",
        description: "Subvertendo a restrição celeste, você se libertou completamente do destino",
        reference: "Livro de Regras, pg. 115.",
        bullets: [
            "Você recebe <b>resistência a todo tipo de dano físico</b> (cortante, perfurante e de impacto), além de mais um tipo à sua escolha, exceto alma.",
            "Recebe <b>+5 em rolagens de ataque</b> e soma <b>metade do seu nível de personagem no total de dano</b>."
        ]
    },
    {
        title: "Estilo Marcial",
        icon: "meditation",
        subtitle: "Sistema próprio · técnicas de nível 1 a 4",
        description: "O equivalente da criação de técnicas amaldiçoadas para o Restringido",
        reference: "Livro de Regras, pg. 124.",
        bullets: [
            "Um Estilo Marcial se divide entre o <b>Fundamento do Estilo</b> (equivalente ao Funcionamento Básico) e as <b>Técnicas Marciais</b>, que aplicam o fundamento.",
            "Pode ser baseado em artes marciais reais (karatê, muay thai) ou em maneiras de abordar confrontos — como Toji Fushiguro, que analisava o alvo, o cansava e depois atacava.",
            "As técnicas variam do <b>nível 1 ao 4</b>. Todo restringido começa com acesso ao nível 1 e recebe o 2º, 3º e 4º nos níveis <b>5, 9 e 15</b>.",
            "<b>Custo:</b> Nível 1 → 2 Estamina · Nível 2 → 5 · Nível 3 → 8 · Nível 4 → 12.",
            "Você começa com <b>2 técnicas marciais</b> e recebe mais uma nos níveis <b>3, 5, 7, 9, 11, 13, 15, 17 e 19</b>. Ao subir de nível pode alterá-las livremente."
        ]
    },
    {
        title: "Arsenal Amaldiçoado",
        icon: "broadsword",
        subtitle: "Sistema próprio · 2º nível",
        description: "Acesso a ferramentas amaldiçoadas de grau superior, atualizadas conforme você evolui",
        reference: "Livro de Regras, pg. 125.",
        bullets: [
            "<b>Treinamento +2:</b> uma ferramenta de terceiro grau e duas de quarto grau.",
            "<b>+3:</b> uma de segundo grau e três de terceiro. · <b>+4:</b> duas de primeiro grau e duas de segundo.",
            "<b>+5:</b> uma de grau especial e três de primeiro. · <b>+6:</b> duas de grau especial e duas de primeiro.",
            "As ferramentas são <b>atualizadas</b>, não acumuladas — você só recebe mais uma no bônus de treinamento +3. A ferramenta da habilidade base conta para o arsenal.",
            "Podem ser de <b>custo 1 ou 2</b> inicialmente, com acesso aos custos superiores a partir do <b>nível 5</b>; podem ser armas, escudos e uniformes.",
            "Você pode <b>alternar livremente entre as armas do seu arsenal durante o turno</b>, inclusive durante a ação de ataque."
        ]
    }
];

data_opcoes_restringido = [
    {
        title: "Dádiva: Agilidade Exímia",
        icon: "acrobatic",
        subtitle: "Dádiva do Céu · 1 a cada 4 níveis",
        description: "Uma leveza anormal e agilidade extrema são traços do seu corpo",
        reference: "Livro de Regras, pg. 126.",
        bullets: [
            "<b>+2</b> em testes de perícia ou resistência usando <b>Destreza</b>.",
            "<b>+3 metros</b> de movimento e você <b>sempre ignora terreno difícil</b>."
        ]
    },
    {
        title: "Dádiva: Físico Robusto",
        icon: "bordered-shield",
        subtitle: "Dádiva do Céu",
        description: "Seu corpo é naturalmente mais robusto e resistente a todo dano",
        reference: "Livro de Regras, pg. 126.",
        bullets: [
            "<b>Redução de dano contra todo tipo</b> igual a metade do seu nível de personagem.",
            "<b>+2</b> em testes de perícia ou resistência usando <b>Constituição</b>."
        ]
    },
    {
        title: "Dádiva: Força Devastadora",
        icon: "muscle-up",
        subtitle: "Dádiva do Céu",
        description: "Uma força extrema que torna seus golpes ainda mais potentes",
        reference: "Livro de Regras, pg. 126.",
        bullets: [
            "Todo pulo ou salto aumenta em <b>3 metros</b>.",
            "A distância padrão da ação <b>Empurrar aumenta em 4,5 metros</b>.",
            "<b>+2</b> em testes de perícia usando <b>Força</b>."
        ]
    },
    {
        title: "Dádiva: Indulgente a Feitiçaria",
        icon: "shield-reflect",
        subtitle: "Dádiva do Céu",
        description: "Seu corpo recusa a energia amaldiçoada e, consequentemente, as técnicas",
        reference: "Livro de Regras, pg. 126.",
        bullets: [
            "<b>Redução de Dano</b> contra danos de técnicas ou aptidões amaldiçoadas igual a metade do seu nível de personagem.",
            "<b>+1 em TRs de Vontade</b> contra esses efeitos; no nível 10 o bônus aumenta em +1 e no nível 15 passa a valer também para <b>Fortitude e Reflexos</b>."
        ]
    },
    {
        title: "Dádiva: Mente Afiada",
        icon: "brain",
        subtitle: "Dádiva do Céu",
        description: "Uma mente afiada que o permite desenvolver habilidades facilmente",
        reference: "Livro de Regras, pg. 126.",
        bullets: [
            "Você se torna <b>treinado em duas perícias adicionais</b> e <b>mestre em uma perícia</b>.",
            "<b>+2</b> em testes de perícia ou resistência usando <b>Inteligência</b>."
        ]
    },
    {
        title: "Dádiva: Percepção Aguçada",
        icon: "semi-closed-eye",
        subtitle: "Dádiva do Céu",
        description: "Sua percepção e seus instintos são aguçados ao máximo",
        reference: "Livro de Regras, pg. 126.",
        bullets: [
            "Sua <b>Atenção aumenta em metade do seu nível de personagem</b>.",
            "<b>+3</b> em rolagens de Percepção e <b>+2</b> em testes de perícia ou resistência usando <b>Sabedoria</b>."
        ]
    },
    {
        title: "Dádiva: Reposição Sanguinária",
        icon: "droplets",
        subtitle: "Dádiva do Céu",
        description: "Você consegue repor o seu vigor a partir do sangue derramado",
        reference: "Livro de Regras, pg. 126.",
        bullets: [
            "Sempre que um inimigo no qual você causou dano for morto, você recupera <b>3 pontos de estamina</b>.",
            "Você não pode exceder a quantidade de pontos que possuía no <b>início do combate</b>."
        ]
    },
    {
        title: "Dádiva: Semblante Cativante",
        icon: "charm",
        subtitle: "Dádiva do Céu",
        description: "Um semblante mais cativante e chamativo, apurando carisma e presença",
        reference: "Livro de Regras, pg. 126.",
        bullets: [
            "Em testes de perícia usando <b>Presença</b>, se tirar um resultado inferior a metade do seu valor de Presença, pode tratar o resultado como <b>metade do valor de Presença</b>.",
            "Torna-se <b>mestre em uma perícia de Presença</b> à sua escolha e recebe <b>+2</b> em testes de perícia usando Presença."
        ]
    },
    {
        title: "Dádiva: Vigor Infindável",
        icon: "health-normal",
        subtitle: "Dádiva do Céu",
        description: "Um vigor amplo e infindável, reposto ao triunfar",
        reference: "Livro de Regras, pg. 126.",
        bullets: [
            "Seus <b>pontos de vida máximos aumentam</b> em um valor igual ao seu nível de personagem.",
            "A cada <b>2 níveis</b>, você recebe <b>1 ponto de estamina máximo adicional</b>."
        ]
    }
];
