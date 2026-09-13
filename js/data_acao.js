/* Movimento e as seis categorias de ação — Livro de Regras, pgs. 291-304 */

data_movimento_acoes = [
    {
        title: "Andar",
        icon: "walking-boot",
        subtitle: "Move até o seu deslocamento",
        description: "Você pode se mover uma distância igual ao seu valor de movimento",
        reference: "Livro de Regras, pgs. 291 e 303.",
        bullets: [
            "O deslocamento padrão é de <b>9 metros</b>.",
            "A partir do momento em que a ação de Andar é utilizada, o deslocamento pode ser <b>dividido entre as suas outras ações</b>.",
            "Exemplo: um personagem com 12 m de deslocamento usa a ação de movimento para Andar, move-se 6 m, ataca um inimigo e depois se move os 6 m restantes para se posicionar melhor."
        ]
    },
    {
        title: "Esgueirar",
        icon: "footprint",
        subtitle: "Move metade do deslocamento",
        description: "Você se move metade do seu valor de movimento, de forma furtiva",
        reference: "Livro de Regras, pgs. 296 e 303.",
        bullets: [
            "Permite uma movimentação furtiva, movendo apenas metade do seu valor de movimento.",
            "É a <b>única forma de movimento que não impõe −5</b> no teste de Furtividade para se esconder no mesmo turno."
        ]
    },
    {
        title: "Levantar",
        icon: "sunrise",
        subtitle: "Perde a condição Caído",
        description: "Você se levanta, perdendo a condição Caído",
        reference: "Livro de Regras, pg. 303.",
        bullets: [
            "Um personagem de pé pode, em vez disso, usar sua ação de movimento para <b>levantar um aliado adjacente</b> que esteja caído.",
            "A condição <b>Imóvel</b> impede o uso desta ação."
        ]
    },
    {
        title: "Pular",
        icon: "wingfoot",
        subtitle: "Distância pelo modificador de Força",
        description: "Você realiza um pulo ou salto, em linha reta ou em altura",
        reference: "Livro de Regras, pg. 303.",
        bullets: [
            "Distância pelo mod. de Força: <b>−5 a −4</b> → 1,5 m · <b>−1 a +0</b> → 3 m · <b>+1 a +2</b> → 4,5 m · <b>+3 a +4</b> → 6 m · <b>+5</b> → 7,5 m · <b>+6 e +7</b> → 10,5 m · <b>+8 e +9</b> → 12 m.",
            "Um salto em altura cobre a mesma distância, mas para cima.",
            "Você pode fazer um teste de <b>Atletismo CD 15</b> para considerar o pulo como uma categoria superior à sua. Falhando, percorre a distância comum e <b>aterrissa caído</b>."
        ]
    },
    {
        title: "Sacar",
        icon: "swap-bag",
        subtitle: "Saca dois itens",
        description: "Você saca dois itens ou equipamentos",
        reference: "Livro de Regras, pg. 303.",
        bullets: [
            "Você pode optar por sacar <b>apenas um item</b> reduzindo o movimento da sua próxima ação de Andar pela metade, sem consumir a ação de movimento.",
            "É uma das poucas ações de movimento permitidas pela condição <b>Imóvel</b>."
        ]
    }
];

data_movimento_regras = [
    {
        title: "Terreno Difícil",
        icon: "high-grass",
        subtitle: "Custo de deslocamento dobrado",
        description: "O ambiente não é propício para a movimentação",
        reference: "Livro de Regras, pg. 292.",
        bullets: [
            "Para cada 1,5 m que você se mover, são gastos <b>1,5 m adicionais</b> de deslocamento.",
            "Superfícies terrestres: chão instável, lama, pântanos ou um lugar coberto por lixo.",
            "Superfícies aéreas, afetando o deslocamento de voo: chuva forte, tempestade ou ventania potente.",
            "Movimentar-se pelo <b>espaço de uma criatura</b> também conta como terreno difícil, e não é possível fazer uma <b>Investida</b> em terreno difícil."
        ]
    },
    {
        title: "Deslocamento de Escalada",
        icon: "hole-ladder",
        subtitle: "Caminhar por superfícies verticais",
        description: "Tipo de deslocamento contabilizado separadamente do de caminhada",
        reference: "Livro de Regras, pg. 292.",
        bullets: [
            "A menos que dito o contrário, um novo tipo de deslocamento tem valor <b>igual ao seu deslocamento de caminhada</b>.",
            "Segue as demais regras de movimento e é afetado pelas características da superfície — uma parede acidentada pode ser terreno difícil.",
            "Uma criatura escalando que perca seu deslocamento de escalada ou a capacidade de realizar ações físicas (por ficar inconsciente ou paralisada) <b>cai</b>.",
            "Você pode alternar livremente entre tipos de deslocamento, mas deve usar <b>uma ação de movimento para cada tipo</b>."
        ]
    },
    {
        title: "Deslocamento de Voo",
        icon: "feathered-wing",
        subtitle: "Vertical: sobe pelo dobro, desce pela metade",
        description: "Você pode voar e encerrar seu deslocamento em pleno ar",
        reference: "Livro de Regras, pg. 292.",
        bullets: [
            "Uma criatura com deslocamento de voo pode se mover e atacar como uma criatura terrestre.",
            "Movimentar-se na vertical custa o <b>dobro ao subir</b> e <b>metade na descida</b>: voar 1,5 m para cima conta como 3 m, e 3 m para baixo conta como 1,5 m.",
            "Uma criatura voando que sofra uma manobra <b>Derrubar</b> bem-sucedida cai <b>1d10 × 1,5 m</b> antes de recuperar o voo.",
            "Um personagem <b>Caído</b> que esteja voando perde imediatamente seu deslocamento de voo até ficar de pé."
        ]
    },
    {
        title: "Quedas",
        icon: "falling",
        subtitle: "1d6 de impacto por 3 m · máx. 30d6",
        description: "Dano e regras de queda livre",
        reference: "Livro de Regras, pg. 293.",
        bullets: [
            "Em queda livre você cai <b>30 metros por turno</b>.",
            "Dano: <b>1d6 de impacto para cada 3 metros</b> de queda, até um máximo de <b>30d6</b>.",
            "Quedas de <b>6 m ou menos</b>: role Atletismo para anular o dano, com <b>CD 15 + metros caídos</b>.",
            "Queda em <b>água</b>: os 9 primeiros metros são desconsiderados. Acima de 9 m, um teste de Atletismo com <b>CD 10 + metros caídos</b> reduz o dano à metade.",
            "Uma criatura derrubada sobre uma superfície recebe a condição <b>Caído</b>, precisando de uma ação de movimento para se levantar."
        ]
    },
    {
        title: "Espaços em Combate",
        icon: "cubes",
        subtitle: "Espaço humano: 1,5 m × 1,5 m",
        description: "Toda criatura em combate ocupa espaço, e isso importa",
        reference: "Livro de Regras, pg. 293.",
        bullets: [
            "O espaço padrão de um humano é <b>1,5 m × 1,5 m</b>, podendo ser diferente para maldições ou shikigamis (veja <i>Tamanho</i>).",
            "Movimentar-se pelo espaço de uma criatura conta como <b>terreno difícil</b>.",
            "Ao sair do espaço de uma criatura com a qual você esteja engajado em combate, ela pode realizar um <b>Ataque de Oportunidade</b> usando sua reação.",
            "Em mapas de batalha com grid, cada quadrado equivale a <b>1,5 metros</b>."
        ]
    },
    {
        title: "Flanco",
        icon: "crossed-axes",
        subtitle: "Defesa do alvo reduzida em 2",
        description: "Dois inimigos atacando de direções opostas sobrecarregam a guarda",
        reference: "Livro de Regras, pg. 295.",
        bullets: [
            "Uma criatura que possua <b>dois inimigos atacando corpo a corpo de direções opostas</b> está flanqueada, tendo a sua Defesa reduzida em <b>2</b>.",
            "Permite que um dos lados do combate foque em atacar uma criatura da maneira mais eficiente possível."
        ]
    },
    {
        title: "Surpresa",
        icon: "surprised",
        subtitle: "Perde o primeiro turno",
        description: "Um dos lados foi pego desprevenido no início do combate",
        reference: "Livro de Regras, pg. 291.",
        bullets: [
            "A rolagem de <b>Furtividade</b> de quem deseja surpreender é colocada contra a <b>Atenção</b> de cada membro do lado que seria surpreendido.",
            "Todo personagem surpreendido <b>perde seu primeiro turno</b> e fica <b>Desprevenido</b> e <b>Desorientado</b> até o começo do seu próximo turno.",
            "Uma rodada representa apenas <b>seis segundos</b>, com todos os turnos acontecendo simultaneamente em uma perspectiva narrativa."
        ]
    }
];

data_acao = [
    {
        title: "Atacar",
        icon: "broadsword",
        subtitle: "Jogada de ataque e rolagem de dano",
        description: "Você realiza um golpe com uma arma, fazendo uma rolagem de ataque e depois resolvendo o ataque",
        reference: "Livro de Regras, pgs. 301 e 305.",
        bullets: [
            "Os ataques podem ser <b>corpo a corpo</b>, <b>a distância</b> ou <b>amaldiçoados</b>.",
            "Se o resultado igualar ou superar a <b>Defesa</b> do alvo, você acerta e parte para a rolagem de dano.",
            "Um <b>20 natural</b> é um acerto crítico (sempre acerta, dados de dano dobrados); um <b>1 natural</b> é um desastre (sempre erra e abre brecha para uma reação contra você).",
            "Ao atacar com uma arma leve, você pode gastar sua <b>ação bônus</b> para atacar com a segunda arma leve."
        ]
    },
    {
        title: "Agarrar",
        icon: "grab",
        subtitle: "Atletismo vs. Atletismo ou Acrobacia",
        description: "Você tenta agarrar uma criatura",
        reference: "Livro de Regras, pg. 301.",
        bullets: [
            "Realize um teste de <b>Atletismo</b> contra um teste de Atletismo ou Acrobacia do alvo (o alvo escolhe).",
            "Em um sucesso, a criatura recebe a condição <b>Agarrado</b>, podendo repetir o teste no começo do turno dela para escapar.",
            "Modificadores por tamanho em manobras: Minúsculo −5 · Pequeno −2 · Médio 0 · Grande +2 · Enorme +5 · Colossal +10.",
            "Ser agarrado exige um teste de Concentração com <b>CD 10 + o bônus de Atletismo</b> de quem agarrou."
        ]
    },
    {
        title: "Apoiar",
        icon: "help",
        subtitle: "Concede vantagem a um aliado",
        description: "Você ajuda outra criatura na conclusão de uma tarefa",
        reference: "Livro de Regras, pg. 301.",
        bullets: [
            "A criatura que você ajuda ganha <b>vantagem no próximo teste de perícia</b> que fizer para realizar a tarefa apoiada, desde que o faça antes do início do seu próximo turno.",
            "Alternativamente, você pode ajudar um aliado a atacar uma criatura a até <b>1,5 metro de você</b>: finta, distrai ou de outra forma se une ao ataque.",
            "Nesse caso, se o aliado atacar o alvo antes do seu próximo turno, a <b>primeira jogada de ataque</b> será feita com vantagem."
        ]
    },
    {
        title: "Derrubar",
        icon: "foot-trip",
        subtitle: "Atletismo vs. Atletismo ou Acrobacia",
        description: "Você tenta derrubar uma criatura",
        reference: "Livro de Regras, pg. 301.",
        bullets: [
            "Realize um teste de <b>Atletismo</b> contra o Atletismo ou Acrobacia do alvo.",
            "Em um sucesso, o alvo é derrubado, recebendo a condição <b>Caído</b>.",
            "Uma criatura <b>voando</b> que sofra um Derrubar bem-sucedido cai 1d10 × 1,5 m antes de recuperar o voo."
        ]
    },
    {
        title: "Desarmar",
        icon: "drop",
        subtitle: "Atletismo ou Acrobacia, resistido",
        description: "Você foca em tirar um equipamento ou objeto da posse do alvo",
        reference: "Livro de Regras, pg. 301.",
        bullets: [
            "Você realiza uma rolagem de <b>Atletismo ou Acrobacia</b>, forçando o alvo a realizar também uma rolagem com a <b>mesma perícia</b>.",
            "Se você suceder, escolhe algo que o alvo tenha equipado <b>em mãos</b> para ser desarmado."
        ]
    },
    {
        title: "Desengajar",
        icon: "interdiction",
        subtitle: "Evita ataques de oportunidade",
        description: "Você se prepara para se movimentar, desengajando de combates e levantando a guarda",
        reference: "Livro de Regras, pgs. 293 e 301.",
        bullets: [
            "Você não pode receber <b>ataques de oportunidade</b> até o final do seu turno.",
            "É a forma padrão de contornar o risco de sair do espaço de uma criatura com a qual esteja engajado — habilidades especiais também podem fazê-lo."
        ]
    },
    {
        title: "Empurrar",
        icon: "wave-strike",
        subtitle: "1,5 m, +1,5 m por 5 pontos de margem",
        description: "Você avança e tenta empurrar uma criatura",
        reference: "Livro de Regras, pg. 301.",
        bullets: [
            "Realize um teste de <b>Atletismo</b> contra um teste de Atletismo ou Acrobacia do alvo.",
            "Em um sucesso, você empurra a criatura <b>1,5 metro</b>, aumentando em <b>+1,5 m para cada 5 pontos</b> que seu resultado supere o do alvo.",
            "Ser empurrado exige um teste de Concentração com <b>CD 10 + o bônus de Atletismo</b> de quem empurrou."
        ]
    },
    {
        title: "Esconder",
        icon: "hidden",
        subtitle: "Furtividade vs. Atenção",
        description: "Você tenta se esconder de certas criaturas",
        reference: "Livro de Regras, pg. 296.",
        bullets: [
            "Você só pode tentar se esconder de criaturas que <b>não possam te ver diretamente</b>: saia do campo de visão delas, fique atrás de cobertura ou sob efeito de escuridão.",
            "Faça um teste de <b>Furtividade</b> contra a <b>Atenção</b> de todas as criaturas das quais esteja se escondendo; as que tiverem Atenção menor deixam de te perceber.",
            "Escondido, você <b>não pode ser alvo direto de ataques</b>. Uma criatura pode atacar a área onde acredita que você esteja, com <b>desvantagem</b> se você realmente estiver lá.",
            "Ao atacar uma criatura da qual está escondido, ela fica <b>Desprevenida</b> durante o ataque — e depois disso você deixa de estar escondido, acerte ou erre.",
            "Penalidades: <b>−5</b> se você se moveu (exceto por Esgueirar) e <b>−10</b> se atacou ou fez algo mais chamativo. A condição <b>Invisível</b> permite Esconder como ação livre."
        ]
    },
    {
        title: "Furtar",
        icon: "robber",
        subtitle: "Prestidigitação vs. Atenção",
        description: "Você tenta pegar um objeto de uma criatura",
        reference: "Livro de Regras, pg. 302.",
        bullets: [
            "É necessário pelo menos <b>uma mão livre</b>.",
            "Escolha um objeto que <b>não esteja sendo vestido ou empunhado</b> e realize um teste de <b>Prestidigitação</b> contra a <b>Atenção</b> do alvo.",
            "Se passar, você pega o que queria; se falhar, não consegue o item <b>e a criatura percebe</b> o que você tentava furtar."
        ]
    },
    {
        title: "Preparar",
        icon: "mantrap",
        subtitle: "Define um gatilho e gasta sua reação",
        description: "Você prepara uma ação em resposta a outra, para agir posteriormente",
        reference: "Livro de Regras, pg. 302.",
        bullets: [
            "Você decide <b>qual será o gatilho</b> e <b>qual será a ação</b>, mantendo o limite de uma ação comum.",
            "A ação preparada é executada usando a sua <b>reação</b>."
        ]
    },
    {
        title: "Conjurar",
        icon: "magic-swirl",
        subtitle: "Utilizar um Feitiço",
        description: "Utilizar um Feitiço é uma ação de Conjurar",
        reference: "Livro de Regras, pg. 304.",
        bullets: [
            "Feitiços podem ser conjurados com ações de <b>diferentes categorias</b> — comum, bônus e até reações — por isso não estão listados em nenhuma lista de ações.",
            "Sempre que habilidades, talentos e mecânicas mencionarem a ação <b>Conjurar</b>, considere que é o uso de qualquer Feitiço.",
            "O tempo de conjuração pode ser aumentado de propósito para ganhar melhorias (veja <i>Conjuração em Ritual</i>)."
        ]
    }
];

data_bonus = [
    {
        title: "Fintar",
        icon: "domino-mask",
        subtitle: "Enganação vs. Reflexos · alcance 9 m",
        description: "Você realiza uma rápida finta contra um inimigo",
        reference: "Livro de Regras, pg. 302.",
        bullets: [
            "Faça um teste de <b>Enganação</b> contra um teste de <b>Reflexos</b> de uma criatura dentro de <b>9 metros</b>.",
            "Se passar, a criatura fica <b>Desprevenida</b> contra os seus ataques, mas apenas até o fim do seu turno."
        ]
    },
    {
        title: "Invocar",
        icon: "spawn-node",
        subtitle: "Duas invocações por ação",
        description: "Você invoca ou ativa suas invocações",
        reference: "Livro de Regras, pg. 302.",
        bullets: [
            "Por padrão, você pode invocar <b>duas invocações por ação</b>."
        ]
    },
    {
        title: "Ler Intenções",
        icon: "overmind",
        subtitle: "Intuição ou Percepção · alcance 7,5 m",
        description: "Você foca em uma criatura e tenta ler seu próximo movimento",
        reference: "Livro de Regras, pg. 302.",
        bullets: [
            "O alvo deve estar dentro de <b>7,5 metros</b> e você deve ser capaz de vê-lo.",
            "Faça um teste de <b>Intuição ou Percepção</b> contra a <b>Enganação ou Intuição</b> do alvo.",
            "Se você suceder, até o começo do seu próximo turno: testes de resistência contra a criatura recebem <b>+1d4</b> de bônus e os ataques dela contra você recebem <b>1d4 de prejuízo</b>."
        ]
    },
    {
        title: "Mirar",
        icon: "on-target",
        subtitle: "Vantagem no próximo ataque a distância",
        description: "Você usa sua ação bônus para focar em um alvo e mirar",
        reference: "Livro de Regras, pg. 302.",
        bullets: [
            "Seu próximo <b>ataque a distância</b> contra aquele alvo recebe <b>vantagem</b>."
        ]
    },
    {
        title: "Provocar",
        icon: "shouting",
        subtitle: "Intimidação vs. Intimidação ou Intuição",
        description: "Você provoca uma criatura, fazendo com que ela passe a te focar",
        reference: "Livro de Regras, pg. 302.",
        bullets: [
            "O alvo deve estar dentro de <b>9 metros</b> de você.",
            "Faça um teste de <b>Intimidação</b> contra a <b>Intimidação ou Intuição</b> do alvo.",
            "Em um sucesso, até o começo do seu próximo turno a criatura tem <b>vantagem para te atacar</b>, mas <b>desvantagem para atacar qualquer outro alvo</b>.",
            "Ser provocado exige um teste de Concentração com <b>CD 10 + o bônus da perícia</b> usada por quem provocou."
        ]
    },
    {
        title: "Recarregar",
        icon: "bullets",
        subtitle: "Armas com a propriedade Recarga",
        description: "Recarregar uma arma a distância, normalmente com uma ação bônus",
        reference: "Livro de Regras, pg. 305.",
        bullets: [
            "Todas as armas a distância possuem a propriedade <b>Recarga</b>, com a única exceção dos <b>arcos</b>.",
            "A arma deve ser recarregada após realizar a quantidade de ataques especificada na tabela, ao lado da propriedade.",
            "Recarregar normalmente custa uma <b>Ação Bônus</b>, mas habilidades ou armas especiais podem influenciar nisso.",
            "Considere que o personagem sempre possui munição convencional suficiente — apenas munições especiais são limitadas."
        ]
    },
    {
        title: "Ataque com a segunda arma",
        icon: "dervish-swords",
        subtitle: "Duas armas leves · sem mod. no dano",
        description: "Ao atacar com uma arma leve, gaste sua ação bônus para atacar com a outra",
        reference: "Livro de Regras, pg. 305.",
        bullets: [
            "O combate com duas armas, por padrão, só pode ser feito se <b>ambas as armas empunhadas forem leves</b>.",
            "O <b>modificador de atributo não é somado</b> ao dano do segundo ataque."
        ]
    }
];

data_reacao = [
    {
        title: "Ataque de Oportunidade",
        icon: "backstab",
        subtitle: "Gatilho: sair do espaço de quem te engaja",
        description: "O movimento de uma criatura abre uma brecha para um golpe",
        reference: "Livro de Regras, pg. 293.",
        bullets: [
            "Quando uma criatura <b>sai do espaço</b> de outra com a qual esteja engajada em combate, é possível atacá-la como uma <b>Reação</b>.",
            "É um golpe, mas <b>não conta como a ação de Atacar</b> — sendo impossível usar Ataque Extra ou habilidades semelhantes.",
            "O alcance é influenciado pelo <b>tamanho</b> da criatura.",
            "É possível contornar o risco usando a ação <b>Desengajar</b> ou habilidades especiais. A condição <b>Desorientado</b> impede o uso."
        ]
    },
    {
        title: "Ação Preparada",
        icon: "stopwatch",
        subtitle: "Gatilho: o que você definiu ao Preparar",
        description: "Executa a ação que você preparou anteriormente com a ação comum",
        reference: "Livro de Regras, pg. 302.",
        bullets: [
            "Você define o gatilho e a ação ao usar a ação comum <b>Preparar</b>, e a executa usando a reação quando o gatilho ocorrer.",
            "A ação preparada mantém o limite de <b>uma ação comum</b>."
        ]
    },
    {
        title: "Punir um Desastre",
        icon: "broken-shield",
        subtitle: "Gatilho: inimigo rola 1 no ataque",
        description: "Um desastre causa uma brecha na guarda do atacante",
        reference: "Livro de Regras, pg. 307.",
        bullets: [
            "Um <b>desastre</b> ocorre quando se tira <b>1 no d20</b> de uma jogada de ataque, representando uma falha catastrófica.",
            "Um desastre <b>sempre erra</b>, independentemente da Defesa do alvo.",
            "Quando uma criatura tem um desastre em seu ataque, pode-se <b>realizar um ataque contra ela como uma reação</b>."
        ]
    },
    {
        title: "Confronto de Domínios",
        icon: "vortex",
        subtitle: "Gatilho: uma Expansão de Domínio inimiga",
        description: "Expandir o seu próprio domínio para confrontar o do oponente",
        reference: "Livro de Regras, pg. 185.",
        bullets: [
            "Diante de uma Expansão de Domínio sendo ativada, você pode usar sua <b>Reação</b> para tentar expandir o seu próprio domínio. Após usá-la, você <b>perde sua Ação Comum no próximo turno</b>.",
            "<b>Aptidões iguais:</b> ambos rolam <b>1d10 + metade do nível + nível de aptidão em domínio + outros bônus</b>. Quem superar o oponente por <b>5 ou mais</b> vence, cancelando a expansão dele. Não há sucessos ou falhas críticas neste teste.",
            "<b>Aptidões diferentes:</b> quem tiver o Nível de Aptidão em Domínio superior vence imediatamente — salvo se o desafiante tiver bônus superior por 5 ou mais e a diferença de aptidão for de apenas 1, caso em que o teste acontece normalmente.",
            "Se ninguém vencer, torna-se um <b>Confronto Estendido</b>: ambos os domínios são expandidos, mas com Acerto Garantido e Efeitos de Expansão cancelados até que um derrube o domínio do outro.",
            "Todo dano causado ao usuário (desconsiderando Redução de Dano e Resistência) também é direcionado ao domínio; deixar o oponente <b>inconsciente</b> derruba o domínio dele imediatamente."
        ]
    },
    {
        title: "Limites da Reação",
        icon: "cancel",
        subtitle: "Uma por rodada, mesmo tendo várias",
        description: "Regras gerais sobre o uso de reações",
        reference: "Livro de Regras, pg. 300.",
        bullets: [
            "Uma reação é usada em <b>resposta a um gatilho</b>, que pode ocorrer no seu turno ou no de outro.",
            "Ao realizar uma reação, você <b>não pode usar outra até o início do seu próximo turno</b>.",
            "Mesmo que possua mais de uma Reação, você só pode utilizar <b>uma mesma Reação uma única vez por rodada</b>.",
            "Condições que impedem reações: <b>Atordoado</b>, <b>Inconsciente</b>, <b>Paralisado</b>, <b>Desorientado</b> (contra a próxima ação ofensiva) e <b>Surpreso</b> (contra quem o surpreendeu)."
        ]
    }
];

data_completa = [
    {
        title: "Investida",
        icon: "bull",
        subtitle: "Dobro do movimento + ataque · +2 atq, −2 DEF",
        description: "Você avança até o dobro do seu movimento em linha reta e ataca no fim",
        reference: "Livro de Regras, pg. 304.",
        bullets: [
            "No fim do movimento você faz um <b>ataque corpo a corpo</b>.",
            "Você recebe <b>+2 no teste de ataque</b>, mas sofre <b>−2 na Defesa</b> até o seu próximo turno, ao deixar a guarda aberta.",
            "Você <b>não pode fazer uma investida em terreno difícil</b>."
        ]
    },
    {
        title: "Conjuração em Ritual",
        icon: "tied-scroll",
        subtitle: "Aumenta o tempo em troca de melhorias",
        description: "Adicionar encantações, sinais de mão e gestos ao Feitiço para potencializá-lo",
        reference: "Livro de Regras, pgs. 321-323.",
        bullets: [
            "<b>Uma vez por turno</b>, ao conjurar um Feitiço, você pode aumentar o custo de conjuração em tempo: de <b>ação bônus para comum</b> concede <b>1 melhoria</b>; de <b>comum para completa</b> concede <b>2 melhorias</b>.",
            "Não é possível colocar componentes em um Feitiço que use sua <b>reação</b>, nem aumentar o tempo de conjuração duas vezes na mesma conjuração.",
            "Adiciona-se uma rolagem de <b>Prestidigitação</b> com <b>CD = 10 + dobro do nível do Feitiço + 2 por melhoria</b> (um Feitiço de nível 0 adiciona apenas +1 na CD).",
            "Falhando no teste, escolha: <b>cancelar</b> a conjuração (perdendo a ação, mas retomando o turno) ou <b>finalizar mais lentamente</b>, usando o Feitiço no começo do seu próximo turno.",
            "Melhorias padrão: Ajuste de Alvos · Aumento de Alcance · Aumento de Dano (até 2×) · Aumento de Precisão (até 2×) · Conversão de Sustento · Expansão de Área (até 2×) · Potencialização de Dificuldade (até 2×) · Potencialização de Efeito."
        ]
    },
    {
        title: "Ritual Estendido",
        icon: "magic-gate",
        subtitle: "Dois turnos · até 5 melhorias",
        description: "O máximo de componentes possíveis, além de uma ação completa",
        reference: "Livro de Regras, pgs. 322-323.",
        bullets: [
            "<b>1º turno:</b> use uma ação completa <b>e</b> a sua ação de movimento para começar a preparar o Feitiço.",
            "<b>Entre os turnos:</b> mantenha a <b>Concentração</b> no ritual. Enquanto o realiza, você também recebe a condição <b>Desprevenido</b>.",
            "<b>2º turno:</b> use uma ação completa para finalizar o ritual, conjurando o Feitiço.",
            "Permite um total de <b>cinco melhorias</b> e <b>não exige o teste de Prestidigitação</b> — basta cumprir o processo sem perder a concentração."
        ]
    }
];

data_livre = [
    {
        title: "Hierarquia de Ações",
        icon: "cycle",
        subtitle: "Comum → Bônus → Movimento",
        description: "Você pode converter uma ação de valor maior em uma de valor menor",
        reference: "Livro de Regras, pgs. 300-301.",
        bullets: [
            "A ação de movimento é a de menor valor, seguida pela bônus e, depois, pela comum.",
            "Você pode usar sua <b>Ação Bônus</b> como uma de <b>Movimento</b>.",
            "Você pode usar sua <b>Ação Comum</b> como uma de <b>Movimento</b> ou <b>Bônus</b>.",
            "Assim é possível, por exemplo, mover-se <b>três vezes</b> em um mesmo turno.",
            "A condição <b>Enjoado</b> impede a conversão de ações dentro da hierarquia."
        ]
    },
    {
        title: "Atrasar",
        icon: "hourglass",
        subtitle: "Reduz sua Iniciativa em até 10",
        description: "Você escolhe atrasar a sua ação, agindo posteriormente na ordem de iniciativa",
        reference: "Livro de Regras, pg. 304.",
        bullets: [
            "É o mesmo que <b>reduzir sua Iniciativa voluntariamente</b> pelo resto do combate; quando a nova iniciativa chegar, você age normalmente.",
            "Você deve especificar o novo valor, que pode ser reduzido em <b>até 10</b> a partir do valor rolado.",
            "Exemplo: se você tirou 20, pode atrasar até 10."
        ]
    },
    {
        title: "O que é uma Ação Livre",
        icon: "juggler",
        subtitle: "Quantas quiser, cada uma 1×/turno",
        description: "Algo simples o suficiente para não consumir nenhuma das outras ações",
        reference: "Livro de Regras, pg. 300.",
        bullets: [
            "Exemplos: abrir uma porta destrancada, colocar uma máscara ou conversar.",
            "Você pode realizar <b>quantas ações livres desejar</b> por turno, mas só pode usar <b>uma mesma ação livre uma vez</b>.",
            "Existem seis tipos de ação no total: <b>comum</b>, <b>bônus</b>, <b>reação</b>, <b>movimento</b>, <b>livre</b> e <b>completa</b> — esta última sendo a junção da comum com a bônus.",
            "Todo personagem possui uma de cada por turno, recuperando-as no começo do seu próximo turno."
        ]
    }
];
