/* Criação de Técnica e Feitiços — Capítulo 9, pgs. 196-255
   Invocações — Capítulo 10, pgs. 256-275 */

data_tecnica_base = [
    {
        "title": "Funcionamento Básico",
        "icon": "scroll-unfurled",
        "subtitle": "o primeiro passo",
        "description": "Onde a técnica é descrita, e o limite do que os Feitiços podem fazer",
        "reference": "Livro de Regras, pg. 197.",
        "bullets": [
            "É o texto que descreve as capacidades da sua técnica. <b>Os Feitiços não podem escapar do que está nele</b> — por isso ele vem primeiro.",
            "Escreva primeiro a <b>parte narrativa</b>: o conceito e a dinâmica, o que a técnica permite fazer.",
            "Depois, se precisar, a <b>parte mecânica</b>: detalhes indispensáveis para usá-la. Equipamentos essenciais à técnica são <b>recebidos de graça</b> como parte do Funcionamento Básico.",
            "Na ficha ele também aparece como <b>Descrição da Técnica</b>."
        ]
    },
    {
        "title": "Quantos Feitiços você tem",
        "icon": "black-book",
        "subtitle": "2 na criação · um por nível par",
        "description": "Quando chegam Feitiços novos e quando dá para mexer nos antigos",
        "reference": "Livro de Regras, pg. 200.",
        "bullets": [
            "Todo personagem com técnica <b>começa com 2 Feitiços</b>.",
            "Em <b>todo nível par</b> (2, 4, 6, 8, 10, 12, 14, 16, 18 e 20) você recebe um novo Feitiço, mais um <b>adicional nos níveis 10 e 20</b>.",
            "<b>Ao subir de nível</b> você pode alterar até uma quantidade de Feitiços igual ao seu <b>Bônus de Treinamento</b> — mudando o funcionamento ou o nível deles."
        ]
    },
    {
        "title": "Custo em energia",
        "icon": "energise",
        "subtitle": "0 · 2 · 5 · 8 · 12 · 20 PE",
        "description": "O nível do Feitiço define o custo",
        "reference": "Livro de Regras, pg. 200.",
        "bullets": [
            "<b>Nível 0</b> custa 0 · <b>1</b> custa 2 · <b>2</b> custa 5 · <b>3</b> custa 8 · <b>4</b> custa 12 · <b>5</b> custa 20.",
            "O custo pode ser reduzido por habilidades de especialização — principalmente do <b>Especialista em Técnicas</b> — ou por características de origem.",
            "<b>Piso:</b> todo Feitiço custa no mínimo <b>1 PE</b>, a menos que seja de nível 0.",
            "<b>Sustentar:</b> Feitiços de nível 0 a 2 custam <b>1 PE por rodada</b> para manter; de nível 3 a 5, <b>2 PE</b>."
        ]
    },
    {
        "title": "Que níveis você pode criar",
        "icon": "level-three",
        "subtitle": "acompanha o Bônus de Treinamento",
        "description": "Os níveis superiores abrem conforme você sobe",
        "reference": "Livro de Regras, pg. 200.",
        "bullets": [
            "No começo você só cria Feitiços de <b>nível 0 e 1</b>.",
            "De maneira geral, <b>libera o próximo nível de Feitiço sempre que o seu Bônus de Treinamento aumenta</b> — ou seja, nos níveis 5, 9, 13 e 17."
        ]
    },
    {
        "title": "Alvo único: TR ou ataque",
        "icon": "on-target",
        "subtitle": "a escolha muda o dano",
        "description": "Feitiço com teste de resistência ou com jogada de ataque",
        "reference": "Livro de Regras, pg. 205.",
        "bullets": [
            "<b>Com teste de resistência.</b> O alvo faz um TR. Se for <b>nível 0</b>, passar <b>anula</b> o dano; de <b>nível 1 ou superior</b>, passar <b>reduz o dano pela metade</b>.",
            "<b>Com teste de ataque.</b> Você faz uma jogada de ataque: acertou, dano cheio; errou, dano nenhum.",
            "O Feitiço com teste de ataque causa <b>mais dano</b> na tabela, justamente porque o erro não causa nada."
        ]
    }
];

data_tecnica_feitico = [
    {
        "title": "Feitiços de Dano",
        "icon": "fire-breath",
        "subtitle": "alvo único ou área",
        "description": "O tipo mais direto: causar dano",
        "reference": "Livro de Regras, pg. 205.",
        "bullets": [
            "Escolha entre <b>alvo único</b> (com TR ou com jogada de ataque) e <b>alvos múltiplos / área</b>.",
            "O dano e o alcance saem das tabelas por nível — veja <b>Tabelas de Criação</b> abaixo.",
            "Feitiços em área <b>não existem no nível 0</b>."
        ]
    },
    {
        "title": "Feitiços Auxiliares",
        "icon": "magic-palm",
        "subtitle": "buffs, debuffs e utilidade",
        "description": "Não causam dano: alteram a situação",
        "reference": "Livro de Regras, pg. 216.",
        "bullets": [
            "Cobrem aumento de Defesa, redução de dano, bônus em testes, deslocamento, condições e afins.",
            "Cada efeito tem a sua própria tabela de valor por nível de Feitiço no capítulo."
        ]
    },
    {
        "title": "Feitiços Curativos",
        "icon": "health-increase",
        "subtitle": "energia reversa",
        "description": "Restaurar vida e remover efeitos",
        "reference": "Livro de Regras, pg. 228.",
        "bullets": [
            "Seguem a mesma lógica de nível e custo dos demais, com tabela própria de cura."
        ]
    },
    {
        "title": "Feitiços Especiais",
        "icon": "magic-swirl",
        "subtitle": "fora do padrão",
        "description": "Efeitos que não cabem nas outras categorias",
        "reference": "Livro de Regras, pg. 229.",
        "bullets": [
            "Para efeitos únicos, que exigem avaliação do Narrador caso a caso."
        ]
    },
    {
        "title": "Feitiços Passivos",
        "icon": "aura",
        "subtitle": "sempre ativos",
        "description": "Não são conjurados: valem o tempo todo",
        "reference": "Livro de Regras, pg. 235.",
        "bullets": [
            "Funcionam continuamente, sem gasto por uso."
        ]
    },
    {
        "title": "Feitiços de Nível 0",
        "icon": "droplets",
        "subtitle": "custo 0 · sempre disponíveis",
        "description": "O básico da técnica, sem gastar energia",
        "reference": "Livro de Regras, pg. 204.",
        "bullets": [
            "Custam <b>0 PE</b> e são o único nível isento do piso de 1 PE.",
            "Num Feitiço de nível 0 com TR, passar no teste <b>anula</b> o dano por completo — diferente dos níveis superiores, onde só reduz pela metade."
        ]
    }
];

data_tecnica_dominio = [
    {
        "title": "Expansão de Domínio",
        "icon": "magic-gate",
        "subtitle": "guia de criação · pg. 239",
        "description": "A manifestação máxima de uma técnica",
        "reference": "Livro de Regras, pg. 239.",
        "bullets": [
            "Tem guia de criação próprio, com nome, tipo e descrição da expansão — os três campos que aparecem na ficha.",
            "Depende da <b>Aptidão em Domínio</b>: o nível de aptidão é o que destrava e fortalece o seu uso.",
            "O treino de <b>Domínios</b> concede a aptidão <b>Modificação Completa</b> ao ser concluído."
        ]
    },
    {
        "title": "Técnica Máxima",
        "icon": "crowned-explosion",
        "subtitle": "o teto da tabela",
        "description": "Acima do nível 5, com dano e alcance próprios",
        "reference": "Livro de Regras, pgs. 205-215.",
        "bullets": [
            "Aparece como uma linha própria em todas as tabelas de criação, acima do nível 5.",
            "Em alvo único chega a <b>26d12</b> com TR e <b>28d12</b> com teste de ataque; em área, <b>22d10</b>.",
            "Tem nome e descrição próprios na ficha, separados da Expansão de Domínio."
        ]
    },
    {
        "title": "Estilos Marciais",
        "icon": "fist",
        "subtitle": "guia de criação · pg. 247",
        "description": "Para quem luta sem técnica, ou além dela",
        "reference": "Livro de Regras, pg. 247.",
        "bullets": [
            "Guia próprio de criação de estilos marciais.",
            "O <b>Novo Estilo da Sombra</b> (pg. 252) é o estilo que a origem <b>Sem Técnica</b> recebe no 4º nível, junto da aptidão <b>Domínio Simples</b>.",
            "Um usuário do estilo imbui o Domínio Simples com uma <b>Técnica de Estilo</b>, trocável no começo de cada turno seu."
        ]
    }
];

data_invocacao = [
    {
        "title": "Controlando Invocações",
        "icon": "orbital",
        "subtitle": "capítulo 10 · pg. 256",
        "description": "Como a invocação age em relação a você",
        "reference": "Livro de Regras, pg. 256.",
        "bullets": [
            "Define quem decide as ações da invocação e como ela se encaixa no seu turno."
        ]
    },
    {
        "title": "Montando Invocações",
        "icon": "cubes",
        "subtitle": "grau, PV, Defesa, deslocamento",
        "description": "A ficha reduzida que cada invocação tem",
        "reference": "Livro de Regras, pg. 259.",
        "bullets": [
            "Cada invocação tem <b>grau</b>, pontos de vida, Defesa, deslocamento, os seis atributos, perícias treinadas e as próprias ações e características.",
            "A aba <i>Invocações</i> da planilha de personagem traz oito espaços com exatamente esses campos."
        ]
    },
    {
        "title": "Guia de Criação de Invocação",
        "icon": "anvil-impact",
        "subtitle": "pg. 263",
        "description": "O passo a passo para construir uma do zero",
        "reference": "Livro de Regras, pg. 263.",
        "bullets": [
            "Guia próprio, com os valores por grau de invocação."
        ]
    }
];
