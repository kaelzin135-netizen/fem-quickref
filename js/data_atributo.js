/* Atributos, métodos de criação e valores derivados */

data_atributo = [
    {
        title: "Força",
        icon: "muscle-up",
        subtitle: "Poder muscular e bruto",
        description: "Mede o poder muscular, físico e bruto do personagem",
        reference: "Livro de Regras, pg. 17.",
        bullets: [
            "Usada para aumentar o dano causado por armas corpo a corpo e em aplicações de força bruta.",
            "Define quanto peso você levanta e quão longe/alto você pula (veja a ação <i>Pular</i>).",
            "É o atributo padrão das jogadas de ataque corpo a corpo e dos ataques desarmados.",
            "Atributo-chave da perícia <b>Atletismo</b>."
        ]
    },
    {
        title: "Destreza",
        icon: "acrobatic",
        subtitle: "Agilidade, reflexos e rapidez",
        description: "Mede a agilidade, os reflexos e a rapidez do personagem",
        reference: "Livro de Regras, pg. 17.",
        bullets: [
            "Usada para manter o equilíbrio, desviar de golpes ou técnicas, manejar armas leves e realizar acrobacias.",
            "Entra no cálculo de <b>Defesa</b> e de <b>Iniciativa</b>.",
            "É o atributo padrão das jogadas de ataque a distância, e pode substituir Força em armas com o traço <i>Fineza</i>.",
            "Atributo-chave das perícias <b>Acrobacia</b>, <b>Furtividade</b> e <b>Prestidigitação</b>, e do Teste de Resistência de <b>Reflexos</b>."
        ]
    },
    {
        title: "Constituição",
        icon: "heart-organ",
        subtitle: "Resistência e vigor",
        description: "Mede a resistência e o vigor do personagem",
        reference: "Livro de Regras, pg. 17.",
        bullets: [
            "Aplicada aos <b>Pontos de Vida</b>: seu modificador é somado ao PV em todos os níveis, de forma retroativa.",
            "Usada em testes que requerem fortitude, como resistir a venenos ou males físicos.",
            "Define por quanto tempo o personagem segura o ar ou se mantém firme diante do cansaço.",
            "Atributo dos Testes de Resistência de <b>Fortitude</b> e de <b>Integridade</b>.",
            "Nenhuma perícia usa Constituição como atributo-chave."
        ]
    },
    {
        title: "Inteligência",
        icon: "brain",
        subtitle: "Raciocínio e intelecto",
        description: "Simboliza o raciocínio e o intelecto do personagem",
        reference: "Livro de Regras, pg. 17.",
        bullets: [
            "Permite o aprendizado e uso de certas perícias, a assimilação de informações e mede o quão rápida é a mente.",
            "Na criação, você pode escolher <b>Inteligência ou Sabedoria</b> para receber perícias treinadas adicionais, em quantidade igual ao modificador. A escolha é definitiva.",
            "Atributo-chave das perícias <b>Feitiçaria</b>, <b>História</b>, <b>Investigação</b>, <b>Ofício</b>, <b>Tecnologia</b> e <b>Teologia</b>.",
            "Atributo do Teste de Resistência de <b>Astúcia</b>."
        ]
    },
    {
        title: "Sabedoria",
        icon: "wisdom",
        subtitle: "Experiência e tato com o mundo",
        description: "É o conhecimento pela experiência e a ligação com o mundo ao seu redor",
        reference: "Livro de Regras, pg. 17.",
        bullets: [
            "Mede o quão atento aos arredores você é, sendo usada em perícias que envolvam o tato para com o mundo.",
            "Na criação, pode ser escolhida no lugar de Inteligência para conceder perícias treinadas adicionais iguais ao seu modificador.",
            "Atributo-chave das perícias <b>Direção</b>, <b>Intuição</b>, <b>Medicina</b>, <b>Ocultismo</b>, <b>Percepção</b> e <b>Sobrevivência</b>.",
            "Atributo do Teste de Resistência de <b>Vontade</b>."
        ]
    },
    {
        title: "Presença",
        icon: "charm",
        subtitle: "Força da personalidade",
        description: "Mede a força da personalidade e presença do personagem",
        reference: "Livro de Regras, pg. 17.",
        bullets: [
            "Mede a capacidade de influenciar os outros com palavras, gestos, simpatia ou beleza, fazendo-se notar em meio ao mundo.",
            "Atributo-chave das perícias <b>Enganação</b>, <b>Intimidação</b>, <b>Performance</b> e <b>Persuasão</b>.",
            "Nenhum Teste de Resistência usa Presença."
        ]
    }
];

data_atributo_metodos = [
    {
        title: "Valores Fixos",
        icon: "scales",
        subtitle: "15, 14, 13, 12, 10 e 8",
        description: "Distribua seis números fixos entre os seis atributos",
        reference: "Livro de Regras, pg. 18.",
        bullets: [
            "Você recebe os valores <b>15, 14, 13, 12, 10 e 8</b> para distribuir livremente entre os atributos.",
            "Mantém o equilíbrio entre os atributos e evita grandes disparidades entre jogadores, que partem da mesma base."
        ]
    },
    {
        title: "Rolagem",
        icon: "perspective-dice-six-faces-random",
        subtitle: "4d6, descarte o menor",
        description: "A sorte decide os valores dos seus atributos",
        reference: "Livro de Regras, pg. 18.",
        bullets: [
            "Para cada atributo, jogue <b>4d6</b>, descarte o menor dado e some os três restantes.",
            "Exemplo: com “6, 4, 3 e 2”, elimine o 2 e some 6+4+3 = <b>13</b>.",
            "É um método completamente aleatório, com valores menos certos, mas mais impactantes: pode-se conseguir tanto 3 quanto 18."
        ]
    },
    {
        title: "Compra por Pontos",
        icon: "cubes",
        subtitle: "17 pontos · limite de 15",
        description: "Todos os atributos iniciam em 10 e você recebe 17 pontos para comprar valores maiores",
        reference: "Livro de Regras, pg. 18.",
        bullets: [
            "Todos os atributos iniciam em <b>10</b> e você recebe <b>17 pontos</b>, com o limite de 15 em um mesmo atributo.",
            "Custos: <b>8</b> devolve +2 pontos · <b>9</b> devolve +1 · <b>10</b> custa 0 · <b>11</b> custa 2 · <b>12</b> custa 3 · <b>13</b> custa 4 · <b>14</b> custa 5 · <b>15</b> custa 7.",
            "É possível diminuir atributos abaixo de 10 para ganhar pontos extras a distribuir.",
            "Exemplo: gastar 7 dos 17 pontos para levar Força de 10 a 15, restando 10 pontos."
        ]
    },
    {
        title: "Modificador de Atributo",
        icon: "level-three",
        subtitle: "+1 a cada 2 pontos acima de 10",
        description: "O modificador é o valor efetivamente usado na maior parte das rolagens",
        reference: "Livro de Regras, pgs. 19 e 277.",
        bullets: [
            "<b>1</b> → −5 · <b>2-3</b> → −4 · <b>4-5</b> → −3 · <b>6-7</b> → −2 · <b>8-9</b> → −1 · <b>10-11</b> → 0 · <b>12-13</b> → +1 · <b>14-15</b> → +2",
            "<b>16-17</b> → +3 · <b>18-19</b> → +4 · <b>20-21</b> → +5 · <b>22-23</b> → +6 · <b>24-25</b> → +7 · <b>26-27</b> → +8 · <b>28-29</b> → +9 · <b>30</b> → +10",
            "O valor <b>10</b> é a média. O máximo natural é <b>20</b>, superável por habilidades, talentos ou características de origem — mas nunca acima de <b>30</b>, o ápice do atributo."
        ]
    }
];

data_valor = [
    {
        title: "Atenção",
        icon: "semi-closed-eye",
        subtitle: "10 + bônus de Percepção",
        description: "Percepção passiva: o quanto você nota sem estar procurando",
        reference: "Livro de Regras, pg. 19.",
        bullets: [
            "<b>Atenção = 10 + bônus na perícia Percepção + outros bônus</b>",
            "É o valor contra o qual se rolam testes de <b>Furtividade</b> (para se esconder e para definir surpresa no início do combate).",
            "Também é o valor contra o qual se rola a ação <b>Furtar</b>."
        ]
    },
    {
        title: "Defesa (DEF)",
        icon: "shield",
        subtitle: "10 + mod. Destreza + ½ nível",
        description: "A guarda do personagem: o quão difícil é acertá-lo",
        reference: "Livro de Regras, pgs. 19 e 282.",
        bullets: [
            "<b>Defesa = 10 + Modificador de Destreza + Metade do seu Nível + Outros Bônus</b>",
            "Uma jogada de ataque precisa igualar ou superar a Defesa para acertar.",
            "Certas habilidades e aptidões concedem bônus, e algumas permitem trocar o atributo somado.",
            "Modificadores comuns: Meia Cobertura <b>+2</b> · Cobertura 3/4 <b>+4</b> · flanqueado <b>−2</b> · Desprevenido <b>−3</b> · Enredado <b>−2</b> · Paralisado <b>−10</b> · Investida <b>−2</b> até o próximo turno.",
            "Narrativamente, pode ser descrita como o personagem esquivando dos golpes ou os inimigos falhando em encontrar brechas."
        ]
    },
    {
        title: "Deslocamento",
        icon: "boot-prints",
        subtitle: "9 metros por padrão",
        description: "Distância percorrida com uma única ação de movimento",
        reference: "Livro de Regras, pgs. 19 e 291.",
        bullets: [
            "Todo personagem inicia com <b>9 metros</b> de Deslocamento de Caminhada.",
            "Pode ser aumentado ou complementado por outros tipos (escalada, voo) durante a criação e a progressão.",
            "A partir do momento em que a ação <b>Andar</b> é usada, o deslocamento pode ser dividido entre as suas outras ações no turno.",
            "Cada nível de <b>exaustão</b> reduz o deslocamento em 1,5 metros."
        ]
    },
    {
        title: "Iniciativa",
        icon: "sprint",
        subtitle: "mod. de Destreza + outros bônus",
        description: "Define a ordem dos turnos no combate",
        reference: "Livro de Regras, pgs. 20 e 291.",
        bullets: [
            "<b>Iniciativa = Modificador de Destreza + Outros Bônus</b>",
            "A rolagem é feita no início do combate e o valor é mantido durante toda a cena; quem tiver o valor maior age primeiro.",
            "Em caso de empate, age primeiro quem tiver o maior modificador de Destreza; se o empate persistir, os empatados rolam de novo entre si.",
            "Habilidades cujo efeito ocorre antes ou durante a rolagem devem ser resolvidas antes do primeiro turno.",
            "Quem entra em um combate já em andamento rola iniciativa e só age na rodada seguinte, independentemente do valor.",
            "A condição <b>Surdo</b> causa −5 na Iniciativa; <b>Invisível</b> concede vantagem nela."
        ]
    },
    {
        title: "Pontos de Vida (PV)",
        icon: "health-normal",
        subtitle: "Definido pela Especialização + mod. CON",
        description: "Medem a saúde, energia vital e disposição do personagem",
        reference: "Livro de Regras, pg. 20.",
        bullets: [
            "PV iniciais por Especialização: <b>Lutador</b> 12 · <b>Especialista em Combate</b> 12 · <b>Especialista em Técnica</b> 10 · <b>Controlador</b> 10 · <b>Suporte</b> 10 · <b>Restringido</b> 16 — sempre <b>+ modificador de Constituição</b>.",
            "Em níveis seguintes o valor aumenta conforme a Especialização em que o nível foi colocado, somando novamente o modificador de Constituição.",
            "Se o seu modificador de Constituição aumentar, atualize o total desde o 1º nível: é um benefício <b>retroativo</b>.",
            "Ao chegar a 0 PV você vai para as <b>Portas da Morte</b>."
        ]
    },
    {
        title: "Pontos de Energia (PE)",
        icon: "lightning-arc",
        subtitle: "Estoque de energia amaldiçoada",
        description: "Gastos para Feitiços, aptidões amaldiçoadas e outros esforços",
        reference: "Livro de Regras, pg. 21.",
        bullets: [
            "PE iniciais por Especialização: <b>Lutador</b> 4 · <b>Especialista em Combate</b> 4 · <b>Especialista em Técnica</b> 6 + mod. de atributo · <b>Controlador</b> 5 + mod. de atributo · <b>Suporte</b> 5 + mod. de atributo.",
            "Os <b>Restringidos</b> não possuem Pontos de Energia: recebem <b>Pontos de Estamina</b> no lugar, que abastecem suas habilidades e técnicas marciais.",
            "Se você soma um modificador de atributo ao total e ele aumenta, atualize o total — é retroativo.",
            "A condição <b>Condenado</b> aumenta em 1 o custo em PE de todas as suas habilidades."
        ]
    },
    {
        title: "Integridade da Alma",
        icon: "ghost",
        subtitle: "Igual ao seu máximo de PV",
        description: "Representa a estabilidade e a saúde da sua alma",
        reference: "Livro de Regras, pgs. 20 e 311.",
        bullets: [
            "O valor de Integridade da Alma é <b>igual ao seu máximo de Pontos de Vida</b>. Sempre que o PV máximo aumentar, atualize a Integridade.",
            "Conforme é reduzida, sua alma passa pelos <b>Estados da Alma</b> (Estável, Danificado, Instável, Crítico).",
            "Com <b>0 de Integridade</b> o personagem está morto: o corpo se desmancha e a consciência se esvai.",
            "Ao sofrer Dano na Alma, faça um Teste de Resistência de Integridade: sucesso reduz o dano à metade, sucesso crítico anula."
        ]
    },
    {
        title: "Bônus de Treinamento",
        icon: "laurels",
        subtitle: "+2, sobe nos níveis 5, 9, 13 e 17",
        description: "O potencial cultivado que você aplica sobre o que treinou",
        reference: "Livro de Regras, pg. 282.",
        bullets: [
            "Inicia em <b>+2</b> e aumenta em +1 nos níveis <b>5, 9, 13 e 17</b> (chegando a +5).",
            "Aplicado em testes de perícia, jogadas de ataque e testes de resistência nos quais você seja treinado.",
            "Ser <b>mestre</b> aumenta o bônus recebido em metade do bônus de treinamento — somando efetivamente 1,5× dele (com +2, um mestre recebe +3).",
            "Também define limites de quantidade: armas de arremesso descartáveis carregadas (bônus × 10), cenas de combate por dia antes da exaustão, e testes de Ofício em interlúdios (1 + bônus)."
        ]
    },
    {
        title: "Dados de Vida",
        icon: "dice-six-faces-one",
        subtitle: "1 por nível, tamanho pela Especialização",
        description: "Recurso ligado aos PV, gasto em descansos curtos para se curar",
        reference: "Livro de Regras, pgs. 20 e 335.",
        bullets: [
            "Um personagem recebe <b>um Dado de Vida por nível</b>, cujo tamanho depende da Especialização em que o nível foi colocado.",
            "Exemplo: um Especialista em Combate nível 1 tem 1d10 de dado de vida, passando a 2d10 no nível 2 da mesma Especialização.",
            "Em um <b>descanso curto</b> você pode gastar dados de vida para se curar, somando o modificador de Constituição em cada dado gasto.",
            "Um <b>descanso longo</b> devolve todos os dados de vida gastos."
        ]
    }
];
