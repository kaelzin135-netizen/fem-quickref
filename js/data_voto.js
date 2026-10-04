/* Votos de Restrição — Capítulo 14, Livro de Regras v2.5.2, pgs. 351-364 */

data_voto_tipo = [
    {
        "title": "Voto Próprio",
        "icon": "handcuffs",
        "subtitle": "ação bônus · só afeta você",
        "description": "Uma troca equivalente: você perde algo para ganhar poder",
        "reference": "Livro de Regras, pg. 351.",
        "bullets": [
            "Criado pelo próprio feiticeiro e <b>afeta apenas a si mesmo</b>. Só pode ser feito como <b>ação bônus</b>.",
            "A troca pode envolver <b>apenas</b> Aptidões Amaldiçoadas, Feitiços e os seus Pontos de Energia. <b>Não</b> pode envolver atributos, Defesa, RD e afins — para isso existe a Restrição Congênita.",
            "<b>Exceção:</b> conhecimento (treinamento num grupo de armas) e coisas simples (deixar todos os golpes te acertarem) podem virar <b>malefício</b>, nunca benefício.",
            "Benefício e malefício não precisam fazer sentido um com o outro, mas devem estar no <b>mesmo escopo</b>: um voto sobre um Feitiço precisa que os dois lados envolvam esse Feitiço."
        ]
    },
    {
        "title": "Voto Próprio Temporário",
        "icon": "empty-hourglass",
        "subtitle": "pode ser desfeito, com custo",
        "description": "Mais fraco por não ser permanente",
        "reference": "Livro de Regras, pg. 351.",
        "bullets": [
            "Pode ser desfeito a qualquer momento, e pode ter duração definida (\"até o fim da cena\").",
            "<b>Quebrar</b> remove os malefícios, mas você <b>não recebe benefício nenhum</b> durante aquele combate — e depois dele carrega o malefício <b>até o próximo interlúdio</b>.",
            "Num voto com duração, você recebe os malefícios até o próximo interlúdio independentemente da duração escrita.",
            "Exemplo da obra: o voto de Kento Nanami, que limita parte da energia para usar só em hora extra."
        ]
    },
    {
        "title": "Voto Próprio Permanente",
        "icon": "locked-fortress",
        "subtitle": "não pode ser desfeito",
        "description": "Mais forte justamente por ser definitivo",
        "reference": "Livro de Regras, pg. 351.",
        "bullets": [
            "Não pode ser desfeito. Por isso alcança capacidades que o temporário não alcança.",
            "Exemplo da obra: o voto de Kasumi Miwa, de nunca mais usar a espada."
        ]
    },
    {
        "title": "Voto Emergencial",
        "icon": "lightning-arc",
        "subtitle": "reação · malefício um peso acima",
        "description": "Um Voto Próprio feito no calor do combate",
        "reference": "Livro de Regras, pg. 356.",
        "bullets": [
            "É um Voto Próprio feito como <b>reação</b>, com gatilho geral: serve como resposta a qualquer tipo de ação.",
            "O <b>malefício é sempre um peso acima do benefício</b> — um benefício de Peso Médio exige malefício Pesado.",
            "Como parte do efeito, pode <b>ativar uma aptidão</b> que ele esteja melhorando, como Cobrir-se."
        ]
    },
    {
        "title": "Voto Contratual",
        "icon": "scroll-unfurled",
        "subtitle": "ação comum · entre duas ou mais pessoas",
        "description": "Um contrato, sem pesos, acordado por todos os envolvidos",
        "reference": "Livro de Regras, pg. 356.",
        "bullets": [
            "Feito entre <b>duas ou mais pessoas</b>, como <b>ação comum</b> em combate.",
            "<b>Não tem pesos:</b> as condições são determinadas pelos participantes. Pode ser permanente ou temporário.",
            "Tudo precisa ser <b>dito em voz alta ou escrito em detalhe</b> e <b>aceito por todos</b>. Se um discordar, o voto não acontece — os demais precisam entrar em acordo sobre a ausência dele.",
            "Todas as partes precisam <b>ser capazes de cumprir</b> o que foi estabelecido."
        ]
    },
    {
        "title": "Quebrar um Voto Contratual",
        "icon": "broken-skull",
        "subtitle": "\"pior que a morte\"",
        "description": "O efeito é indeterminado — quem define é o Narrador",
        "reference": "Livro de Regras, pg. 356.",
        "bullets": [
            "A obra não define o efeito; diz apenas que é <b>pior que a morte</b>. Cabe ao Narrador, com ou sem ligação direta com o tema do voto.",
            "<b>Exemplo dado pelo livro:</b> o corpo de quem quebrou é destruído e recebe uma aflição terrível, mas sobrevive — perde <b>metade do PE máximo</b>, <b>metade da vida máxima</b>, <b>−10 em todos os atributos</b> e fica permanentemente condenado."
        ]
    },
    {
        "title": "Restrição Congênita",
        "icon": "chained-heart",
        "subtitle": "só na criação de personagem",
        "description": "Mexe nos valores reais da ficha, não só na técnica",
        "reference": "Livro de Regras, pg. 357.",
        "bullets": [
            "<b>Não pode ser feita no meio da campanha</b> — é definida na criação do personagem, junto com o Narrador.",
            "<b>Não tem pesos</b> e é extremamente abrangente: exige análise real do que é justo.",
            "Pode afetar: <b>valores de atributo, Defesa, Redução de Dano, resistências e vulnerabilidades, perícias e treinamentos, quantidade de Feitiços, de Níveis de Aptidão e de Aptidões recebidas, Movimento, Atenção, Iniciativa e Pontos de Vida</b>.",
            "É o único tipo de voto que alcança esses valores — o Voto Próprio não pode tocá-los."
        ]
    }
];

data_voto_peso = [
    {
        "title": "Peso Leve",
        "icon": "feathered-wing",
        "subtitle": "escopo de um ataque, turno ou ação",
        "description": "Trocas simples, quase sempre em votos temporários",
        "reference": "Livro de Regras, pg. 352.",
        "bullets": [
            "<b>Benefícios.</b> Normalmente modificar a técnica no meio do combate, respeitando a Criação de Técnica — reduzir Alcance, Dano, CD e afins.",
            "<b>Malefícios.</b> De escopo curtíssimo: \"durante este ataque\", \"durante este turno\", \"durante esta ação\".",
            "<b>Não envolvem aptidões amaldiçoadas</b>, por serem mais fracos que o normal.",
            "<b>Exemplo do livro.</b> <i>Voto Próprio Temporário: Alcance por Dano</i> — reduzo 12 m de alcance do meu feitiço para ganhar +2d no dano dele."
        ]
    },
    {
        "title": "Peso Médio",
        "icon": "scales",
        "subtitle": "aptidões, energia e Feitiços",
        "description": "Trocas significativas, com o Narrador decidindo o limite",
        "reference": "Livro de Regras, pg. 352.",
        "bullets": [
            "<b>Benefícios.</b> +2 no PE que uma aptidão pode gastar; usar aptidões até 4 níveis antes e sem gastar habilidade de aptidão (Aura, Controle e Leitura, Barreira e a especial Domínio Simples); +4,5 m no alcance de aptidões; fortalecer um Feitiço permanentemente; aumentar o PE máximo em certos horários do dia.",
            "<b>Malefícios.</b> Não poder repetir uma aptidão por 2 rodadas (domínios não contam); usar uma aptidão enfraquecida; receber uma condição forte durante o uso ou por até 2 rodadas; enfraquecer um Feitiço permanentemente; diminuir o PE máximo em certos horários.",
            "<b>Um voto que permita usar uma aptidão mais cedo é sempre permanente</b>, nunca temporário — seria uma aptidão gratuita em qualquer nível.",
            "<b>Exemplo do livro.</b> <i>Domínio Simples Antecipado</i> — ficar obrigatoriamente parado durante o Domínio Simples, que desativa se você for movido, em troca de recebê-lo no nível 1."
        ]
    },
    {
        "title": "Peso Pesado",
        "icon": "anvil",
        "subtitle": "quase sempre permanente",
        "description": "Muda o jeito como você usa técnica, aptidão ou energia",
        "reference": "Livro de Regras, pg. 353.",
        "bullets": [
            "<b>Benefícios.</b> Recuperar PE; +4 no PE que uma aptidão pode gastar; melhorar os dados de uma aptidão em um nível (d2 → d4 → d6…); modificar permanentemente a ativação da sua técnica.",
            "<b>Malefícios.</b> Receber um Ferimento Complexo; receber uma condição extrema por 1 rodada após terminar uma ação; receber várias condições de uma vez (3 médias ou 2 fortes) por 2 rodadas; nunca mais poder usar um grupo de armas.",
            "Afetam profundamente o uso de uma técnica e <b>geralmente são permanentes</b>."
        ]
    },
    {
        "title": "Peso Extremo",
        "icon": "eclipse",
        "subtitle": "sempre permanente",
        "description": "Enfraquece você de forma estrondosa, para sempre",
        "reference": "Livro de Regras, pg. 354.",
        "bullets": [
            "<b>Benefícios.</b> Recuperar metade do PE máximo; anular completamente um ataque; modificar o uso de uma aptidão ou Feitiço de forma benéfica permanente; aumentar em até 8 o PE máximo gasto por uma aptidão.",
            "<b>Malefícios.</b> Ferimento Complexo permanente e irremovível; duas condições Fortes permanentes e irremovíveis; Defesa reduzida a <b>0 para sempre</b>; tornar-se vulnerável a um dano elemental.",
            "Podem ser mecânicas únicas, desde que o malefício tenha o mesmo peso.",
            "<b>O Narrador precisa prestar atenção ao aceitar:</b> votos de Peso Extremo saem do controle com facilidade."
        ]
    }
];
