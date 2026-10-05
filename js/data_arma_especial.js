/* Propriedades especiais das armas — Livro de Regras v2.5.2, pgs. 137-138.
   Cada arma com a propriedade Especial tem a sua regra própria aqui. Esta
   seção faltava no site: a tabela de armas remetia a ela e não havia para onde
   ir — era por isso que Faixas, Manoplas, Soco Inglês e Rede apareciam sem
   dano nenhum. */

data_arma_especial = [
    {
        "title": "Adagas Duplas",
        "icon": "bowie-knife",
        "subtitle": "não pode ser desarmado",
        "description": "Propriedade Especial",
        "reference": "Livro de Regras, pg. 137.",
        "bullets": [
            "Sendo duas adagas ligadas uma à outra e presas ao portador, você não pode ser desarmado. Além disso, contam como uma única arma de duas mãos."
        ]
    },
    {
        "title": "Alabarda",
        "icon": "spiral-arrow",
        "subtitle": "+2 em Derrubar",
        "description": "Propriedade Especial",
        "reference": "Livro de Regras, pg. 137.",
        "bullets": [
            "De lâmina curva e amplo alcance, concede +2 em testes da manobra Derrubar."
        ]
    },
    {
        "title": "Bazuca",
        "icon": "pistol-gun",
        "subtitle": "explosão em 7,5 m",
        "description": "Propriedade Especial",
        "reference": "Livro de Regras, pg. 137.",
        "bullets": [
            "Ao atacar um inimigo, compare seu teste contra a Defesa de todos os alvos a <b>7,5 m</b> do alvo original, causando o dano do ataque a todos cujo seu teste superar a Defesa.",
            "Recarregar uma bazuca custa uma <b>Ação Completa</b>. As munições da bazuca tem Custo e Espaço 1."
        ]
    },
    {
        "title": "Chakram",
        "icon": "bowie-knife",
        "subtitle": "volta para a mão",
        "description": "Propriedade Especial",
        "reference": "Livro de Regras, pg. 137.",
        "bullets": [
            "Feito para facilmente retornar ao portador. Sempre que realiza um ataque de arremesso com o Chakram a arma retorna para sua mão após o ataque."
        ]
    },
    {
        "title": "Chicote",
        "icon": "chained-heart",
        "subtitle": "agarrar à distância",
        "description": "Propriedade Especial",
        "reference": "Livro de Regras, pg. 137.",
        "bullets": [
            "Você pode usar a manobra Agarrar mesmo com a mão ocupada pelo chicote, desde que o alvo esteja dentro do seu alcance com a arma.",
            "Você recebe +2 em testes de Agarrar usando o chicote."
        ]
    },
    {
        "title": "Chicote de Corrente",
        "icon": "chained-heart",
        "subtitle": "acopla em outra arma",
        "description": "Propriedade Especial",
        "reference": "Livro de Regras, pg. 137.",
        "bullets": [
            "Pesado e robusto, possui o traço especial de chicote. Além disso, como uma <b>ação bônus</b> você pode enrolar a corrente em volta do cabo de uma arma corpo a corpo que esteja empunhando.",
            "Enquanto uma arma está acoplada a uma corrente você passa a poder utilizar o alcance do chicote e efeito de crítico dele para os ataques dela e você ocupa duas mãos para se beneficiar deste efeito.",
            "Tirar uma corrente de uma arma gasta outra <b>ação bônus</b>."
        ]
    },
    {
        "title": "Chicote Espinhento",
        "icon": "chained-heart",
        "subtitle": "1d6 cortante + 1d6 perfurante",
        "description": "Propriedade Especial",
        "reference": "Livro de Regras, pg. 137.",
        "bullets": [
            "Devido a sua estrutura, o chicote espinhento causa <b>1d6</b> de dano cortante e <b>1d6</b> de dano perfurante.",
            "Ao subir o nível de dano de um chicote espinhento, sobe-se o nível de cada dado individualmente.",
            "Apenas o menor RD/ Resistência é contado para efeitos de diminuição de dano. Ele possui o traço especial de chicote."
        ]
    },
    {
        "title": "Dardo",
        "icon": "flying-dagger",
        "subtitle": "+2 na CD do veneno",
        "description": "Propriedade Especial",
        "reference": "Livro de Regras, pg. 137.",
        "bullets": [
            "O dardo é especialmente efetivo para aplicar venenos. Se o dardo atingir uma criatura, enquanto coberto por veneno, a CD do veneno aumenta em +2."
        ]
    },
    {
        "title": "Escopeta",
        "icon": "pistol-gun",
        "subtitle": "cone de 3 m",
        "description": "Propriedade Especial",
        "reference": "Livro de Regras, pg. 137.",
        "bullets": [
            "Ao realizar um ataque com uma escopeta, além do alvo original, criaturas em um cone de <b>3 m</b> a sua frente também são afetadas.",
            "Compare o resultado de sua jogada de ataque com a Defesa de cada uma das criaturas na área.",
            "Você causa dano igual aos dados de dano da arma em todas aquelas em que acertar. Recarregar uma escopeta custa uma <b>ação comum</b>."
        ]
    },
    {
        "title": "Espada de Gancho",
        "icon": "broadsword",
        "subtitle": "puxa o alvo 1,5 m",
        "description": "Propriedade Especial",
        "reference": "Livro de Regras, pg. 137.",
        "bullets": [
            "Um modelo específico e peculiar de espadas, cuja ponta tem forma de gancho. Ao acertar um ataque você pode puxar o alvo <b>1,5 m</b> na sua direção, não podendo entrar no quadrado.",
            "Caso você esteja equipando duas, as duas espadas de gancho passam a receber o traço <b>Estendida</b>."
        ]
    },
    {
        "title": "Espada Colossal",
        "icon": "broadsword",
        "subtitle": "Amplo para três alvos",
        "description": "Propriedade Especial",
        "reference": "Livro de Regras, pg. 137.",
        "bullets": [
            "Uma espada de tamanho excessivo, naturalmente mais forte. Como o efeito de <b>Amplo</b>, mas escolha uma terceira criatura adjacente ao alvo do primeiro ataque para também sofrer os efeitos."
        ]
    },
    {
        "title": "Faixas",
        "icon": "fist",
        "subtitle": "equipamento — ataque desarmado",
        "description": "Propriedade Especial",
        "reference": "Livro de Regras, pg. 137.",
        "bullets": [
            "Simples faixas enroladas na mão do portador. As faixas <b>não são consideradas armas</b>, mas sim equipamentos, e ataques realizados com elas são considerados como <b>ataques desarmados</b>, possuindo o mesmo dano deles e se beneficiando de habilidades que afetam esse tipo de ataque.",
            "Você pode utilizar uma ou duas faixas, embora o item seja um conjunto. Embora não sejam consideradas armas, você pode transformar Faixas em Ferramentas Amaldiçoadas, recebendo os benefícios comuns da tabela para armas."
        ]
    },
    {
        "title": "Kusarigama",
        "icon": "spiral-arrow",
        "subtitle": "corte e impacto · +2 em manobras",
        "description": "Propriedade Especial",
        "reference": "Livro de Regras, pg. 137.",
        "bullets": [
            "A kusarigama permite o uso tanto da foice, que causa dano cortante quanto do peso, que causa dano de impacto.",
            "Uma kusarigama concede +2 em testes de manobra. Ao subir o nível de dano de uma kusarigama, sobe-se o nível de cada dado individualmente."
        ]
    },
    {
        "title": "Leque",
        "icon": "broadsword",
        "subtitle": "fechado impacta, aberto corta",
        "description": "Propriedade Especial",
        "reference": "Livro de Regras, pg. 138.",
        "bullets": [
            "Você pode alternar entre usar o leque fechado, que causa dano de impacto, ou o leque aberto, que causa dano cortante.",
            "Alternar dentro de combate é uma <b>ação livre</b>. Enquanto fechado, conta como parte do grupo bastão; enquanto aberto, conta como parte do grupo faca.",
            "O leque também concede +2 em testes de Enganação para Fintar."
        ]
    },
    {
        "title": "Manoplas",
        "icon": "fist",
        "subtitle": "duas mãos · dano desarmado",
        "description": "Propriedade Especial",
        "reference": "Livro de Regras, pg. 138.",
        "bullets": [
            "Manoplas que ocupam completamente as duas mãos. <b>Contam como arma para todos os efeitos</b>, mas usam do seu dano desarmado base para ser aplicado.",
            "É possível carregar itens e agarrar e levantar pessoas enquanto usa as manoplas, mas não é possível manejar outras armas.",
            "Seu dano desarmado aumenta em 1 nível para cada 2 no seu modificador de força."
        ]
    },
    {
        "title": "Metralhadora",
        "icon": "pistol-gun",
        "subtitle": "ataque extra com ação bônus",
        "description": "Propriedade Especial",
        "reference": "Livro de Regras, pg. 138.",
        "bullets": [
            "Uma metralhadora possui uma cadência superior de disparo. Quando realizar um ataque com a metralhadora, você pode também utilizar a sua <b>ação bônus</b> para realizar um ataque adicional, consumindo mais uma munição. Utiliza uma <b>ação comum</b> para recarregar."
        ]
    },
    {
        "title": "Rede",
        "icon": "flying-dagger",
        "subtitle": "aplica Enredado",
        "description": "Propriedade Especial",
        "reference": "Livro de Regras, pg. 138.",
        "bullets": [
            "Caso acerte um ataque com uma rede, o alvo recebe a condição <b>Enredado</b>. Uma criatura enredada dessa maneira pode tentar escapar como uma <b>Ação Completa</b>, realizando um teste de Atletismo ou Acrobacia com <b>CD 20</b>.",
            "Uma rede pode também ser atacada, possuindo 5 Pontos de Vida e, caso destruída, a criatura presa é solta."
        ]
    },
    {
        "title": "Soco Inglês",
        "icon": "fist",
        "subtitle": "uma mão · dano desarmado",
        "description": "Propriedade Especial",
        "reference": "Livro de Regras, pg. 138.",
        "bullets": [
            "Um soco inglês destrutivo, colocado em uma mão. <b>Conta como arma para todos os efeitos</b>, mas usa do seu dano desarmado para ser aplicado.",
            "É possível agarrar e levantar pessoas enquanto usa o soco inglês, mas não é possível manejar outras armas ou itens.",
            "Enquanto usando soco inglês, seus ataques com ele também aplicam os efeitos críticos do grupo Faca e testes de resistência para resistir a efeitos de crítico têm a CD aumentada em 1 para cada 2 no modificador de força ou destreza."
        ]
    }
];
