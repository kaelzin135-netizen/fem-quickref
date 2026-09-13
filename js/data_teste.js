/* Testes, testes de resistência e modificadores de rolagem */

data_teste_tipos = [
    {
        title: "Teste de Perícia",
        icon: "scroll-unfurled",
        subtitle: "d20 + mod. + ½ nível + treinamento",
        description: "Usado quando uma atividade depende de uma habilidade específica e o sucesso não é certo",
        reference: "Livro de Regras, pg. 278.",
        bullets: [
            "<b>Bônus de Perícia = mod. do atributo-chave + metade do nível do personagem + bônus de treinamento (se treinado) + outros bônus</b>",
            "Ser <b>treinado</b> indica que o personagem praticou e refinou aquela habilidade; ser <b>mestre</b> aumenta o bônus em metade do bônus de treinamento (1,5× no total).",
            "A CD normalmente é definida pelo Narrador, mas certos testes possuem CD pré-definida por fórmula, como criar itens ou usar ferramentas.",
            "Tarefas simples o suficiente podem nem exigir teste."
        ]
    },
    {
        title: "Jogada de Ataque",
        icon: "crossed-swords",
        subtitle: "d20 + mod. + ½ nível + treinamento vs. Defesa",
        description: "Exigida pela ação de Atacar e por outras instâncias de ataque",
        reference: "Livro de Regras, pg. 279.",
        bullets: [
            "<b>Corpo a corpo</b> = d20 + mod. de <b>Força</b> (ou Destreza, com o traço <i>Fineza</i>) + ½ nível + bônus de treinamento + outros bônus − penalidades.",
            "<b>A distância</b> = d20 + mod. de <b>Destreza</b> + ½ nível + bônus de treinamento + outros bônus − penalidades.",
            "<b>Amaldiçoado</b> = d20 + mod. do seu <b>atributo principal de jujutsu</b> + ½ nível + bônus de treinamento (você é sempre treinado) + outros bônus − penalidades.",
            "Para aplicar o bônus de treinamento é necessário ser treinado com a arma manejada.",
            "Se o resultado igualar ou superar a <b>Defesa</b> do alvo, o ataque acerta e você parte para a Rolagem de Dano."
        ]
    },
    {
        title: "Classe de Dificuldade",
        icon: "target-arrows",
        subtitle: "Fácil 10 · Média 15 · Difícil 20",
        description: "O valor que o resultado do teste precisa igualar ou superar",
        reference: "Livro de Regras, pg. 278.",
        bullets: [
            "<b>Fácil</b> CD 10 · <b>Média</b> CD 15 · <b>Difícil</b> CD 20 · <b>Muito Difícil</b> CD 30 · <b>Lendário</b> CD 40 · <b>Quase Impossível</b> CD 50.",
            "Estrutura comum a todos os testes: role 1d20, aplique bônus e modificadores, compare com a CD e defina o grau de sucesso.",
            "<b>CD de habilidade do personagem</b> = 10 + metade do nível + modificador de um atributo + bônus de treinamento + outros valores aplicáveis.",
            "Para habilidades de especialização, o atributo é especificado na característica; para aptidões amaldiçoadas e Feitiços, usa-se o atributo principal de jujutsu."
        ]
    },
    {
        title: "Quando usar um teste",
        icon: "help",
        subtitle: "Só quando há complexidade, risco ou oposição",
        description: "O Narrador decide se a ação exige mesmo um teste",
        reference: "Livro de Regras, pg. 276.",
        bullets: [
            "É algo complexo de ser feito?",
            "Um sucesso ou falha trará consequências sérias?",
            "As habilidades do personagem estão sendo testadas ao limite ou sob grande pressão?",
            "Há algo ou alguém se opondo ou resistindo à ação do personagem?",
            "Se nenhuma delas for respondida com “sim”, não é necessário teste: apenas dê sequência à história."
        ]
    }
];

data_teste_resistencias = [
    {
        title: "Astúcia",
        icon: "brainstorm",
        subtitle: "Inteligência",
        description: "Resistir à sobrecarga de informações e raciocinar rapidamente para defender a mente",
        reference: "Livro de Regras, pg. 280.",
        bullets: [
            "<b>TR de Astúcia = d20 + mod. de Inteligência + metade do nível + bônus de treinamento (se treinado) + outros bônus</b>"
        ]
    },
    {
        title: "Fortitude",
        icon: "strong",
        subtitle: "Constituição",
        description: "Resistir a efeitos que busquem afetar e debilitar o corpo",
        reference: "Livro de Regras, pg. 280.",
        bullets: [
            "<b>TR de Fortitude = d20 + mod. de Constituição + metade do nível + bônus de treinamento (se treinado) + outros bônus</b>",
            "É o teste usado para manter a <b>Concentração</b> e para encerrar a condição <b>Sangramento</b> no fim do seu turno."
        ]
    },
    {
        title: "Integridade",
        icon: "ghost",
        subtitle: "Constituição",
        description: "Mede a resistência da sua alma contra efeitos que a danifiquem ou modifiquem",
        reference: "Livro de Regras, pgs. 280 e 311.",
        bullets: [
            "<b>TR de Integridade = d20 + mod. de Constituição + metade do nível + bônus de treinamento (se treinado) + outros bônus</b>",
            "Sempre que sofrer <b>Dano na Alma</b>, faça este teste: em um sucesso o dano é reduzido à metade; em um sucesso crítico é anulado.",
            "O teste e a redução devem ser aplicados <b>antes</b> do dano, sobre o total já resistido, valendo para perda de vida, redução do máximo e dano na Integridade.",
            "Um personagem só pode enxergar o traçado da alma se for <b>treinado em Integridade</b> — embora ser treinado seja apenas o requisito.",
            "Havendo mais de uma alma em um único corpo, quem realiza o teste é a de maior bônus em Integridade."
        ]
    },
    {
        title: "Reflexos",
        icon: "dodging",
        subtitle: "Destreza",
        description: "Mede a velocidade e agilidade para reagir e desviar de efeitos, evitando-os",
        reference: "Livro de Regras, pg. 280.",
        bullets: [
            "<b>TR de Reflexos = d20 + mod. de Destreza + metade do nível + bônus de treinamento (se treinado) + outros bônus</b>",
            "Cobertura concede bônus também neste teste: <b>+2</b> com Meia Cobertura e <b>+4</b> com Cobertura 3/4.",
            "Personagens <b>Inconscientes</b> e <b>Paralisados</b> falham automaticamente; <b>Desprevenido</b> causa −3."
        ]
    },
    {
        title: "Vontade",
        icon: "third-eye",
        subtitle: "Sabedoria",
        description: "Resistir a ataques, influências e perturbações contra a mente e o espírito",
        reference: "Livro de Regras, pg. 280.",
        bullets: [
            "<b>TR de Vontade = d20 + mod. de Sabedoria + metade do nível + bônus de treinamento (se treinado) + outros bônus</b>"
        ]
    },
    {
        title: "Concentração",
        icon: "concentration-orb",
        subtitle: "TR de Fortitude para manter o foco",
        description: "Algumas habilidades e técnicas exigem que o usuário se mantenha concentrado",
        reference: "Livro de Regras, pg. 320.",
        bullets: [
            "<b>Ao receber dano:</b> CD igual a <b>10 ou metade do dano recebido</b>, o que for maior.",
            "<b>Ao ser movido contra a sua vontade:</b> CD igual a <b>5 + a distância</b> que foi movido.",
            "<b>Ao ser empurrado ou agarrado:</b> CD igual a <b>10 + o bônus de Atletismo</b> de quem empurrou ou agarrou.",
            "<b>Ao ser provocado:</b> CD igual a <b>10 + o bônus da perícia</b> usada por quem provocou.",
            "Certas condições também podem impedir a concentração, e por padrão só se pode <b>concentrar em uma habilidade por vez</b>.",
            "A condição <b>Sofrendo</b> causa −5 em testes de concentração."
        ]
    },
    {
        title: "Padrão de resultados",
        icon: "scales",
        subtitle: "Sucesso reduz o dano à metade",
        description: "Como interpretar o resultado de um teste de resistência",
        reference: "Livro de Regras, pg. 281.",
        bullets: [
            "<b>Contra efeitos que infligem dano:</b> em um sucesso o dano é reduzido à metade; em uma falha, sofre o dano completo.",
            "<b>Contra dano e condições:</b> em um sucesso o dano é reduzido à metade e as condições são ignoradas; em uma falha, sofre tudo.",
            "<b>Contra condições apenas:</b> seguem as regras de <i>Aplicando Condições</i> do Guia de Criação de Técnicas.",
            "O tipo de teste exigido por um efeito é determinado pelo Narrador — no caso de Feitiços de jogadores, decidido em conjunto respeitando a coerência da habilidade."
        ]
    }
];

data_teste_mods = [
    {
        title: "Vantagem",
        icon: "dice-six-faces-six",
        subtitle: "Role um dado a mais e use o maior",
        description: "Seu desempenho na execução do teste é grandemente favorecido",
        reference: "Livro de Regras, pg. 282.",
        bullets: [
            "Você adiciona um dado a mais na rolagem e usa o <b>maior</b> valor entre os dados rolados.",
            "Exemplo: com vantagem, role dois dados e consiga 18 e 12 — mantenha o <b>18</b>.",
            "Vantagem e desvantagem <b>não acumulam</b>: se receber uma de cada fonte, elas se anulam e a rolagem se torna comum."
        ]
    },
    {
        title: "Desvantagem",
        icon: "dice-six-faces-one",
        subtitle: "Role um dado a mais e use o menor",
        description: "Seu desempenho na execução do teste é grandemente prejudicado",
        reference: "Livro de Regras, pg. 282.",
        bullets: [
            "Você adiciona um dado a mais na rolagem e usa o <b>menor</b> valor entre os dados rolados.",
            "Exemplo: com desvantagem, role dois dados e consiga 18 e 12 — mantenha o <b>12</b>.",
            "Vantagem e desvantagem <b>não acumulam</b>: se receber uma de cada fonte, elas se anulam."
        ]
    },
    {
        title: "Treinado e Mestre",
        icon: "laurels",
        subtitle: "Mestre soma 1,5× o bônus de treinamento",
        description: "Os dois patamares de proficiência do sistema",
        reference: "Livro de Regras, pgs. 278 e 283.",
        bullets: [
            "<b>Treinado</b>: você soma o bônus de treinamento integral naquele teste.",
            "<b>Mestre</b>: o bônus recebido aumenta em metade do bônus de treinamento, somando efetivamente 1,5× dele. Com +2 de treinamento, um mestre recebe +3.",
            "Se um efeito o tornar treinado em uma perícia na qual você já é treinado, você se torna <b>mestre</b> nela.",
            "Ao receber novos treinamentos por atributo, você pode escolher tornar-se mestre em uma perícia já treinada em vez de treinar uma nova."
        ]
    },
    {
        title: "Sucesso Crítico em TR",
        icon: "trophy",
        subtitle: "Mestre + superar a CD em 10 ou mais",
        description: "Ignora completamente o dano e as condições do efeito",
        reference: "Livro de Regras, pg. 281.",
        bullets: [
            "Se você for <b>mestre</b> naquele teste de resistência e o resultado ultrapassar a CD em <b>10 ou mais</b>, você obtém um sucesso crítico.",
            "Em um sucesso crítico você ignora completamente o dano e as condições do efeito — um desvio ou resistência completa.",
            "Ao obter um <b>20 natural</b>, o nível de sucesso é elevado em um: falha vira sucesso comum; sucesso comum vira sucesso crítico.",
            "Mesmo com um 20, ainda é necessário ser <b>mestre</b> no respectivo teste para obter um sucesso crítico."
        ]
    }
];
