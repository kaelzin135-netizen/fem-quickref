/* Origens — Capítulo 3 do Livro de Regras v2.5.2, pgs. 27-48 */

data_origem_lista = [
    {
        "title": "Inato",
        "icon": "aura",
        "subtitle": "+2 e +1 · talento extra · Feitiço mais barato",
        "description": "Nasceu com a afinidade e uma técnica própria, única no mundo",
        "reference": "Livro de Regras, pg. 27.",
        "bullets": [
            "<b>Bônus em Atributo.</b> Um atributo em +2 e outro em +1.",
            "<b>Talento Natural.</b> Um Talento à sua escolha no 1º nível. Além disso, <b>uma única vez a partir do 4º nível</b>, você pode escolher receber um talento adicional ao subir de nível.",
            "<b>Marca Registrada.</b> Um <b>Feitiço adicional</b>, com o custo reduzido em <b>1 PE</b>.",
            "A técnica inata se manifesta por volta dos cinco ou seis anos. Mais de uma técnica inata sobrecarregaria o cérebro. Exemplos: Nobara Kugisaki e Kento Nanami."
        ]
    },
    {
        "title": "Herdado",
        "icon": "crown-of-thorns",
        "subtitle": "escolha um clã · bônus vêm do clã",
        "description": "A técnica veio da linhagem sanguínea, com manual de uso",
        "reference": "Livro de Regras, pg. 28.",
        "bullets": [
            "<b>Bônus em Atributo.</b> Definido pelo <b>clã escolhido</b>.",
            "<b>Treinamentos de Clã.</b> Cada clã concede treinamento ou especialização em perícias próprias.",
            "<b>Herança de Clã.</b> A capacidade herdada da linhagem, também definida pelo clã.",
            "Ao escolher Herdado você <b>precisa escolher um clã</b>. Dá para pertencer a um clã só na narrativa, sem os benefícios — é o caso de Toji Fushiguro e Maki Zenin, que seriam Restringidos.",
            "Exemplos: Megumi Fushiguro e Toge Inumaki."
        ]
    },
    {
        "title": "Derivado",
        "icon": "eclipse",
        "subtitle": "+2 e +1 · aptidão de Aura · limite de atributo maior",
        "description": "A energia veio de fora, depois, e de maneira não natural",
        "reference": "Livro de Regras, pg. 32.",
        "bullets": [
            "<b>Bônus em Atributo.</b> Um atributo em +2 e outro em +1.",
            "<b>Energia Antinatural.</b> Uma <b>Aptidão Amaldiçoada de Aura</b> cujos requisitos você atenda. Além disso, uma vez por dia, como ação bônus em combate, recupera energia igual ao <b>dobro do bônus de treinamento</b>.",
            "<b>Desenvolvimento Inesperado.</b> A cada quatro níveis, <b>um ponto de atributo adicional</b> e o limite daquele atributo aumenta em 1.",
            "Exemplos: Yuuji Itadori, que consumiu um dedo de Sukuna, e Junpei, que teve a alma alterada por Mahito."
        ]
    },
    {
        "title": "Restringido",
        "icon": "muscle-up",
        "subtitle": "preso à especialização Restringido · limite 30",
        "description": "Energia quase nula, trocada por um físico fora da escala humana",
        "reference": "Livro de Regras, pg. 33.",
        "bullets": [
            "<b>Bônus em Atributo.</b> Força, Destreza e Constituição <b>+1 cada</b>, mais <b>2 pontos</b> para distribuir entre atributos físicos.",
            "<b>Físico Abençoado.</b> Deslocamento <b>+3 m</b>, imunidade a doenças mundanas, vantagem em TR contra venenos, e metade do bônus de treinamento somada aos dados curados num descanso curto. Dá acesso à especialização Restringido.",
            "<b>Ápice Corporal Humano.</b> O limite de Força, Destreza e Constituição passa a ser <b>30</b> em vez de 20. A cada 6 níveis, <b>+2</b> num desses atributos. Testes de Atletismo para erguer peso ou saltar <b>dobram</b> o limite ou a distância.",
            "<b>Resiliência Imediata.</b> Vezes iguais ao bônus de treinamento, ao receber dano você pode reduzi-lo em <b>metade do nível (mínimo 1) × 5</b>. Alternativamente, gasta um uso para evitar um desmembramento. Recupera em descanso longo.",
            "É a <b>única origem presa a uma especialização</b>. Exemplo: Toji Fushiguro."
        ]
    },
    {
        "title": "Feto Amaldiçoado Híbrido",
        "icon": "carrion",
        "subtitle": "anatomias · cura reversa pela metade",
        "description": "Meio humano, meio maldição, com anatomia que se desenvolve",
        "reference": "Livro de Regras, pg. 34.",
        "bullets": [
            "<b>Bônus em Atributo.</b> Um atributo em +2 e outro em +1.",
            "<b>Herança Maldita.</b> Toda cura vinda de <b>energia reversa é reduzida pela metade</b>. Tendo uma habilidade de cura por energia reversa, você pode usá-la tratando a reversa como amaldiçoada e curar o valor cheio, gastando <b>2 pontos de energia amaldiçoada</b> no lugar de 1 de reversa.",
            "<b>Físico Amaldiçoado.</b> Uma <b>Característica de Anatomia</b> no começo, e outra a cada <b>5 níveis</b>.",
            "<b>Vigor Maldito.</b> Uma vez por descanso longo, como ação bônus, recupera <b>5 + mod. de Constituição</b> em PV. Nos níveis 4, 8 e 12 ganha um uso a mais e o valor base sobe em 5. Com mais de um uso, dá para gastar vários de uma vez.",
            "Exemplo: Choso."
        ]
    },
    {
        "title": "Sem Técnica",
        "icon": "brainstorm",
        "subtitle": "4 pontos de atributo · sem Feitiços",
        "description": "Nenhuma técnica, compensada por dedicação implacável",
        "reference": "Livro de Regras, pg. 37.",
        "bullets": [
            "<b>Bônus em Atributo.</b> <b>4 pontos</b> para distribuir, com no máximo 3 no mesmo atributo.",
            "<b>Estudos Dedicados.</b> Treinado em <b>2 perícias</b> à sua escolha.",
            "<b>Empenho Implacável.</b> Nível 1: um talento ou aptidão. Nível 3: +1 em 2 perícias e em um tipo de ataque ou TR. Nível 6: habilidade de especialização extra. Nível 10: talento ou aptidão. Nível 13: +2 em 2 perícias e +1 em ataque ou TR. Nível 15: habilidade extra. Nível 17: +3 em 2 perícias e +2 em ataque ou TR. Nível 19: habilidade de especialização <b>e</b> talento.",
            "No <b>4º nível</b> recebe o <b>Novo Estilo da Sombra</b> e, por ele, a aptidão <b>Domínio Simples</b>.",
            "<b>Não tem técnica nem Feitiços</b>, e não pode ser Especialista em Técnica."
        ]
    },
    {
        "title": "Corpo Amaldiçoado Mutante",
        "icon": "cubes",
        "subtitle": "três núcleos · troca como ação bônus",
        "description": "Corpo artificial com consciência própria e vários núcleos",
        "reference": "Livro de Regras, pg. 39.",
        "bullets": [
            "<b>Bônus em Atributo.</b> <b>2 pontos</b> para distribuir.",
            "<b>Forma de Vida Sintética.</b> Imune a dano venenoso e à condição envenenado, mas <b>não recebe efeito de refeições nem de itens do tipo Medicina</b>.",
            "<b>Mutação Abrupta.</b> Começa com <b>três núcleos</b>, um deles o Primário. Em combate, trocar o núcleo ativo é uma <b>ação bônus</b>.",
            "Exemplo: Panda, criado por Masamichi Yaga, com três núcleos."
        ]
    }
];

data_origem_cla = [
    {
        "title": "Clã Gojo",
        "icon": "eyeball",
        "subtitle": "Inteligência ou Sabedoria · Seis Olhos, Ilimitado",
        "description": "Potencial de energia extremo e facilidade para desenvolver Feitiços",
        "reference": "Livro de Regras, pg. 30.",
        "bullets": [
            "<b>Bônus em Atributo.</b> +2 em Inteligência ou Sabedoria, +1 no outro.",
            "<b>Treinamentos de Clã.</b> Treinado em 2 perícias entre <b>Feitiçaria, Percepção e Intuição</b> — ou especialista em uma delas.",
            "<b>Potencial Lendário.</b> Em <b>todo nível par</b>, 1 ponto de energia amaldiçoada adicional. Além disso, <b>1 Feitiço adicional</b> no 1º nível e mais um nos níveis <b>5, 10, 15 e 20</b>.",
            "Descende de Michizane Sugawara. Membro de maior destaque: Satoru Gojo."
        ]
    },
    {
        "title": "Clã Inumaki",
        "icon": "shouting",
        "subtitle": "Inteligência ou Presença · Fala Amaldiçoada",
        "description": "A marca ao redor da boca já dá poder às palavras",
        "reference": "Livro de Regras, pg. 30.",
        "bullets": [
            "<b>Bônus em Atributo.</b> +2 em Inteligência ou Presença, +1 no outro.",
            "<b>Treinamentos de Clã.</b> Treinado em 2 perícias entre <b>Feitiçaria, Percepção e Intuição</b> — ou especialista em uma delas.",
            "<b>Olhos de Cobra e Presas.</b> Vezes iguais ao bônus de treinamento, você pode <b>dar o comando de uma ação bônus para um aliado</b>, que a realiza como <b>reação</b>. Recupera após descanso longo.",
            "Membro de maior destaque: Toge Inumaki."
        ]
    },
    {
        "title": "Clã Kamo",
        "icon": "bleeding-heart",
        "subtitle": "Constituição ou Sabedoria · Manipulação Sanguínea",
        "description": "O valor do sangue se traduz em vitalidade",
        "reference": "Livro de Regras, pg. 31.",
        "bullets": [
            "<b>Bônus em Atributo.</b> +2 em Constituição ou Sabedoria, +1 no outro.",
            "<b>Treinamentos de Clã.</b> Treinado em 2 perícias entre <b>Atletismo, Medicina e Persuasão</b> — ou especialista em uma delas.",
            "<b>Valor do Sangue.</b> A cada nível, <b>+1 ponto de vida máximo adicional</b>. A partir do <b>nível 10</b>, soma o modificador de Constituição ao total de vida. Ao rolar para subir a vida, se o valor for menor que a média você pode <b>rolar de novo e ficar com o maior</b>.",
            "Membro de maior destaque: Noritoshi Kamo."
        ]
    },
    {
        "title": "Clã Zenin",
        "icon": "crossed-swords",
        "subtitle": "atributos livres · Dez Sombras, Projeção",
        "description": "Poder acima de tudo, com Feitiços Focados",
        "reference": "Livro de Regras, pg. 31.",
        "bullets": [
            "<b>Bônus em Atributo.</b> Um atributo em +2 e outro em +1, <b>livres</b>.",
            "<b>Treinamentos de Clã.</b> Treinado em <b>2 perícias quaisquer</b> — ou especialista em uma.",
            "<b>Foco no Poder.</b> No 1º nível escolha um <b>Feitiço Focado</b>, que pode: causar <b>um dado de dano a mais</b>, curar um dado a mais, ter o <b>dobro do alcance</b>, ou ter a CD para resistir aumentada em um valor igual ao bônus de treinamento. Outro Feitiço Focado nos níveis <b>5, 10, 15 e 20</b>.",
            "Clã de várias técnicas herdadas, com grande variedade."
        ]
    }
];

data_origem_anatomia = [
    {
        "title": "Alma Maldita",
        "icon": "ghost",
        "subtitle": "2×/dia, sobe com o nível",
        "description": "A alma impregnada de energia resiste a ser alterada",
        "reference": "Livro de Regras, pg. 35.",
        "bullets": [
            "Dano na alma é <b>reduzido à metade</b> antes do teste de Integridade; a partir do <b>nível 15 é anulado</b>.",
            "Funciona 2 vezes por dia, 3 no nível 6, 4 no nível 12 e 5 no nível 18."
        ]
    },
    {
        "title": "Anatomia Incompreensível",
        "icon": "cracked-mask",
        "subtitle": "25% · 50% no nível 15",
        "description": "O corpo tem uma forma difícil de compreender",
        "reference": "Livro de Regras, pg. 35.",
        "bullets": [
            "<b>25% de chance</b> (resultado 1 em 1d4) de ignorar o dano adicional de um crítico ou ataque furtivo.",
            "No <b>nível 15</b> passa a 50% (1 ou 2 em 1d4)."
        ]
    },
    {
        "title": "Arma Natural",
        "icon": "backstab",
        "subtitle": "1d8 · fineza, enérgica",
        "description": "Garras, dentes afiados, cauda ou outro apêndice de ataque",
        "reference": "Livro de Regras, pg. 35.",
        "bullets": [
            "Ataque natural de <b>1d8</b> Cortante, Perfurante ou de Impacto, com <b>Fineza</b> e <b>Enérgica</b>.",
            "Conta como <b>ataque desarmado</b> e aproveita efeitos que afetariam desarmados.",
            "Se o seu dano desarmado já for superior, em vez disso <b>aumente o dano desarmado em 1 nível</b>."
        ]
    },
    {
        "title": "Articulações Extensas",
        "icon": "grab",
        "subtitle": "+1,5 m de alcance",
        "description": "Juntas mais longas ou garras estendidas",
        "reference": "Livro de Regras, pg. 35.",
        "bullets": ["O alcance dos seus ataques corpo a corpo aumenta em <b>1,5 metros</b>."]
    },
    {
        "title": "Capacidade de Voo",
        "icon": "feathered-wing",
        "subtitle": "ação livre · 1 PE",
        "description": "Um estímulo de energia desperta o voo",
        "reference": "Livro de Regras, pg. 35.",
        "bullets": [
            "Como <b>ação livre</b>, gaste <b>1 ponto de energia</b> para transformar o Deslocamento de Caminhada em <b>Deslocamento de Voo</b> por uma rodada."
        ]
    },
    {
        "title": "Carapaça Mutante",
        "icon": "crenulated-shield",
        "subtitle": "RD física · resistência no nível 10",
        "description": "Uma carapaça bizarra, mas resistente",
        "reference": "Livro de Regras, pg. 35.",
        "bullets": [
            "<b>Redução de dano contra danos físicos</b> igual ao seu bônus de treinamento.",
            "No <b>nível 10</b>, resistência a um tipo de dano físico à escolha — <b>a escolha é definitiva</b>."
        ]
    },
    {
        "title": "Corpo Especializado",
        "icon": "on-target",
        "subtitle": "+1d4 numa perícia",
        "description": "O corpo se desenvolve com um foco",
        "reference": "Livro de Regras, pg. 35.",
        "bullets": ["Escolha uma perícia: você recebe um bônus de <b>1d4</b> nela."]
    },
    {
        "title": "Desenvolvimento Exagerado",
        "icon": "bull",
        "subtitle": "+1 categoria de tamanho",
        "description": "O corpo ultrapassa o formato e o porte padrão",
        "reference": "Livro de Regras, pg. 35.",
        "bullets": [
            "Aumenta a categoria de tamanho em <b>1</b> e recebe <b>1 ponto de vida adicional por nível</b>."
        ]
    },
    {
        "title": "Devorador de Energia",
        "icon": "energise",
        "subtitle": "ao resistir a um Feitiço",
        "description": "Devora a energia à qual resistiu",
        "reference": "Livro de Regras, pg. 35.",
        "bullets": [
            "Ao <b>passar num teste de resistência</b> contra um Feitiço, recebe <b>1 ponto de energia temporário cumulativo</b>."
        ]
    }
];
