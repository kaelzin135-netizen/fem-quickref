/* A Alma, as Portas da Morte, Exaustão, Energia Amaldiçoada e Descansos */

data_alma = [
    {
        title: "Dano na Alma",
        icon: "bleeding-heart",
        subtitle: "Atravessa defesas · reduz a vida máxima",
        description: "Um tipo especial de dano que flagela a própria essência do ser",
        reference: "Livro de Regras, pg. 311.",
        bullets: [
            "<b>Atravessa todas as defesas e resistências.</b> É considerado <b>perda de vida</b>, ignorando também pontos de vida temporários.",
            "Não pode ser curado normalmente: <b>reduz sua vida máxima</b> junto da atual. Você recupera <b>metade</b> da vida máxima perdida com um descanso longo.",
            "Para curar danos na Alma é necessário compreender o traçado da alma e ter <b>Nível de Aptidão 4 em Energia Reversa</b> — e a cura é reduzida à metade.",
            "É raro, sendo causado apenas por armas ou habilidades específicas.",
            "Um <b>Ferimento Complexo permanente</b> só pode ser curado através da alma: ao ter a alma curada com vida e integridade no máximo, você se recupera de um deles."
        ]
    },
    {
        title: "Integridade da Alma",
        icon: "chained-heart",
        subtitle: "Igual ao seu máximo de PV",
        description: "Medida especial que representa a estabilidade e saúde da sua alma",
        reference: "Livro de Regras, pgs. 20 e 311.",
        bullets: [
            "O valor é <b>igual ao seu máximo de Pontos de Vida</b> — sempre que o PV máximo aumentar, atualize a Integridade.",
            "Conforme é reduzida, o estado da sua alma deteriora, podendo desequilibrar seu uso de energia amaldiçoada, força e controle.",
            "Sempre que sofrer Dano na Alma, faça um <b>TR de Integridade</b>: <b>sucesso</b> reduz o dano à metade, <b>sucesso crítico</b> anula.",
            "O teste e a redução devem vir <b>antes</b> da aplicação, considerando o total após qualquer resistência ou redução — valendo para a perda de vida, a redução do máximo e o dano na Integridade.",
            "Com mais de uma alma em um único corpo, quem realiza o teste é a de <b>maior bônus em Integridade</b>."
        ]
    },
    {
        title: "Traçado da Alma",
        icon: "spiral-bloom",
        subtitle: "Requer ser treinado em Integridade",
        description: "Enxergar o traçado é o requisito para interagir diretamente com a alma",
        reference: "Livro de Regras, pg. 311.",
        bullets: [
            "Um personagem <b>só pode enxergar o traçado da alma se for treinado em Integridade</b>.",
            "Entretanto, ser treinado <b>não significa</b> que ele seja capaz de enxergar o traçado — é apenas o requisito.",
            "Em Feiticeiros & Maldições, <b>a alma é o corpo e o corpo é a alma</b>, tornando-se um só."
        ]
    }
];

data_alma_estados = [
    {
        title: "Estável",
        icon: "heart-inside",
        subtitle: "Acima de 75% · nenhum prejuízo",
        description: "O estado padrão da alma, sem nenhum prejuízo",
        reference: "Livro de Regras, pg. 312.",
        bullets: [
            "Enquanto sua alma estiver <b>acima de 75% (3/4)</b> do valor total, ela está Estável.",
            "Não há nenhum prejuízo neste estado."
        ]
    },
    {
        title: "Danificado",
        icon: "half-heart",
        subtitle: "Abaixo de 75% · −3 e +2 de custo",
        description: "A alma começa a ser perturbada",
        reference: "Livro de Regras, pg. 312.",
        bullets: [
            "Você recebe <b>−3 em todos os seus testes e rolagens</b>.",
            "O custo em energia/estamina de todas as suas habilidades é <b>aumentado em 2</b>."
        ]
    },
    {
        title: "Instável",
        icon: "broken-heart",
        subtitle: "Abaixo de 50% · −6, +3 de custo, Exposto",
        description: "A alma instável deixa você mais fraco e exposto",
        reference: "Livro de Regras, pg. 312.",
        bullets: [
            "Você recebe <b>−6 em todos os seus testes e rolagens</b>.",
            "O custo em energia/estamina de todas as suas habilidades é <b>aumentado em 3</b>.",
            "Você está <b>Exposto</b> enquanto não sair do estado."
        ]
    },
    {
        title: "Crítico",
        icon: "cold-heart",
        subtitle: "Abaixo de 25% · −8, desvantagem, +5 de custo",
        description: "Próximo da perdição completa da própria forma e consciência",
        reference: "Livro de Regras, pg. 312.",
        bullets: [
            "Você recebe <b>−8 e desvantagem em todos os seus testes e rolagens</b>.",
            "O custo em energia/estamina de todas as suas habilidades é <b>aumentado em 5</b>.",
            "Você está <b>Exposto</b> e <b>Fragilizado</b> enquanto não sair do estado.",
            "Ao chegar a <b>0 de Integridade</b>, a alma perde o formato por completo: o corpo se desmancha e distorce, a consciência se esvai — o personagem está <b>morto</b>."
        ]
    }
];

data_alma_morte = [
    {
        title: "Portas da Morte",
        icon: "tombstone",
        subtitle: "3 sucessos estabilizam · 3 falhas matam",
        description: "Ao chegar a 0 PV você registra sucessos e falhas no embate pela vida",
        reference: "Livro de Regras, pg. 313.",
        bullets: [
            "No começo de todo turno, role <b>1d20</b>: <b>1</b> → duas falhas · <b>2 a 9</b> → uma falha · <b>10 a 19</b> → um sucesso · <b>20</b> → dois sucessos.",
            "Com <b>três sucessos</b> você está estabilizado; com <b>três falhas</b> você morre.",
            "Fracassos perduram até que seja realizado um <b>descanso longo</b> ou sejam removidos por outras fontes, como habilidades de Suporte.",
            "Caso receba <b>dano</b> enquanto nas Portas da Morte, você recebe uma <b>falha</b>.",
            "Com <b>Exaustão 4</b>, ao entrar no estado de morrendo você é tratado como se já tivesse <b>duas falhas</b>."
        ]
    },
    {
        title: "Estabilizar",
        icon: "syringe",
        subtitle: "Medicina, CD 15 + 1 por 5 PV negativos",
        description: "Outras pessoas podem ajudar a estabilizar quem está morrendo",
        reference: "Livro de Regras, pg. 313.",
        bullets: [
            "Uma criatura a até <b>1,5 metro</b> pode realizar um teste de <b>Medicina</b> como uma <b>ação comum</b>. Em um sucesso, o personagem é estabilizado.",
            "A CD é baseada no dano recebido: <b>base 15</b>, aumentando em <b>1 para cada 5 pontos de vida negativos</b>.",
            "Para estabilizar com <b>cura</b>, é necessário curar todo o valor negativo de vida até retornar ao 0.",
            "Um personagem estabilizado fica com <b>1 ponto de vida</b>, sai das portas da morte e pode agir normalmente, levantando-se e retornando à consciência."
        ]
    },
    {
        title: "Morte Instantânea",
        icon: "broken-skull",
        subtitle: "Dano que passa do seu máximo negativo",
        description: "Dano extremamente massivo mata sem chance de resistir",
        reference: "Livro de Regras, pg. 313.",
        bullets: [
            "Caso um personagem receba dano que o deixe com 0 de vida e <b>ainda passe do seu máximo de vida em pontos negativos</b>, ele morre <b>sem passar pelas portas da morte</b>.",
            "Um personagem com <b>0 de Integridade da Alma</b> também está morto.",
            "Uma criatura <b>Indefesa</b> ao alcance de toque pode ser morta com uma <b>ação completa</b>."
        ]
    },
    {
        title: "Ferimento Complexo",
        icon: "ragged-wound",
        subtitle: "Metade do PV máximo em um ataque (mín. 50)",
        description: "Um ferimento grave e específico causado por um golpe massivo",
        reference: "Livro de Regras, pgs. 313-314.",
        bullets: [
            "Ocorre ao receber, em um <b>único ataque</b>, <b>metade da sua vida máxima ou mais</b> de dano, com valor mínimo de <b>50</b>. Pode ser definido aleatoriamente (d10) ou escolhido pelo Narrador.",
            "<b>1-2</b> perde um olho (desvantagem em Percepção e ataques a distância) · <b>3</b> perde ambos os olhos (<b>Cego</b> permanentemente até regenerar).",
            "<b>4-5</b> perde uma perna (metade do movimento e desvantagem em Acrobacia) · <b>6</b> perde ambas as pernas (só pode rastejar).",
            "<b>7</b> ferida interna: ao tentar realizar uma ação em combate, faça um <b>TR de Fortitude CD 20 + nível</b>; em uma falha perde a ação e não pode usar reações até o próximo turno. Uma criatura <b>mestre em Medicina</b> pode tratá-la com uma ação comum, reduzindo a CD para 10.",
            "<b>8-9</b> perde um braço (não segura nada com duas mãos, só um objeto por vez, desvantagem em Atletismo) · <b>10</b> perde ambos os braços (incapaz de segurar objetos, <b>Destreza diminui em 4</b>).",
            "Normalmente pode ser recuperado por <b>energia reversa</b> ou meios raros. Após <b>1 dia</b> ou ao cicatrizar, torna-se <b>permanente</b> — e então só pode ser curado através da alma."
        ]
    }
];

data_alma_exaustao = [
    {
        title: "Ganhando Exaustão",
        icon: "sundial",
        subtitle: "Recupera 1 nível por descanso longo",
        description: "Situações que levam o corpo de um feiticeiro ao limite",
        reference: "Livro de Regras, pg. 324.",
        bullets: [
            "Ficar <b>8 horas sem um descanso longo</b>.",
            "Utilizar <b>habilidades</b> que aumentam seus níveis de exaustão.",
            "Ficar <b>um dia sem se alimentar</b>.",
            "Participar de um número de <b>cenas de combate maior que seu bônus de treinamento</b> durante um mesmo dia.",
            "Cada nível reduz o <b>deslocamento em 1,5 metros</b>, e os efeitos são <b>cumulativos</b>. Um descanso longo recupera apenas <b>um</b> nível — e habilidades que recuperam exaustão normalmente também recuperam apenas um."
        ]
    },
    {
        title: "Exaustão 1",
        icon: "empty-hourglass",
        subtitle: "−1 em rolagens, Defesa e CD",
        description: "O personagem recebe −1 em todas as suas rolagens, Defesa e Classe de Dificuldade",
        reference: "Livro de Regras, pg. 324.",
        bullets: [
            "Esse negativo <b>aumenta em −1 para cada nível de exaustão</b> adicional.",
            "Além disso, o deslocamento é reduzido em 1,5 metros por nível."
        ]
    },
    {
        title: "Exaustão 2",
        icon: "empty-hourglass",
        subtitle: "Condição Desprevenido",
        description: "O personagem recebe a condição Desprevenido",
        reference: "Livro de Regras, pg. 324.",
        bullets: [
            "<b>Desprevenido:</b> −3 na Defesa e em Testes de Resistência de Reflexos.",
            "Os efeitos do nível 1 continuam aplicados, agora com −2."
        ]
    },
    {
        title: "Exaustão 3",
        icon: "empty-hourglass",
        subtitle: "Perde 20 PV máximos (ou 1/4) · Exposto",
        description: "O personagem perde 20 pontos de vida máximos, ou 1/4 da vida máxima, o que for maior",
        reference: "Livro de Regras, pg. 324.",
        bullets: [
            "Se essa redução for suficiente para reduzir a vida a 0, em vez disso o personagem <b>desmaia</b> por uma quantidade de descansos longos igual à quantidade de níveis de exaustão.",
            "O personagem também recebe a condição <b>Exposto</b>."
        ]
    },
    {
        title: "Exaustão 4",
        icon: "empty-hourglass",
        subtitle: "Condenado e Desorientado · 2 falhas de morte",
        description: "O personagem recebe as condições Condenado e Desorientado",
        reference: "Livro de Regras, pg. 324.",
        bullets: [
            "<b>Condenado:</b> +1 no custo em PE de todas as suas habilidades. <b>Desorientado:</b> sem reações contra a próxima ação ofensiva.",
            "Caso entre no estado de morrendo, é tratado como se <b>já tivesse duas falhas</b>."
        ]
    },
    {
        title: "Exaustão 5",
        icon: "empty-hourglass",
        subtitle: "Perde 50 PV máximos (ou metade) · Enjoado",
        description: "Como no nível 3, mas perdendo 50 pontos de vida máximos ou metade da vida máxima",
        reference: "Livro de Regras, pg. 324.",
        bullets: [
            "Perde <b>50 pontos de vida máximos, ou metade da vida máxima</b>, o que for maior.",
            "Se a redução for suficiente para reduzir a vida a 0, em vez disso o personagem <b>desmaia</b> por uma quantidade de descansos longos igual aos seus níveis de exaustão.",
            "O personagem também recebe a condição <b>Enjoado</b> (não pode converter ações na Hierarquia de Ações)."
        ]
    },
    {
        title: "Exaustão 6",
        icon: "broken-skull",
        subtitle: "O personagem morre",
        description: "O sexto nível de exaustão é fatal",
        reference: "Livro de Regras, pg. 324.",
        bullets: [
            "A exaustão representa um desgaste absurdo do corpo — no sexto nível, <b>o personagem morre</b>."
        ]
    }
];

data_energia_aptidoes = [
    {
        title: "Aptidão em Aura (AU)",
        icon: "aura",
        subtitle: "Essência da própria energia",
        description: "Representa o conhecimento e a compreensão sobre a própria energia amaldiçoada",
        reference: "Livro de Regras, pgs. 173-174.",
        bullets: [
            "Conforme mais se compreende a energia, mais sua <b>aura se torna refinada</b>.",
            "Certas Aptidões Amaldiçoadas têm seus efeitos alterados pelo seu nível, citado pela sigla — por exemplo, “com AU 3”."
        ]
    },
    {
        title: "Aptidão em Controle e Leitura (CL)",
        icon: "energise",
        subtitle: "Liberar, controlar e ler fluxos",
        description: "Medida da capacidade de liberar a energia e controlá-la, assim como ler fluxos e auras diferentes",
        reference: "Livro de Regras, pgs. 173 e 178.",
        bullets: [
            "Inclui aptidões como <i>Estímulo Muscular</i>, <i>Leitura Rápida de Energia</i> e <i>Projeção Máxima</i>."
        ]
    },
    {
        title: "Aptidão em Barreira (BAR)",
        icon: "energy-shield",
        subtitle: "Técnicas de barreira e cortinas",
        description: "Para o uso das técnicas de barreira com excelência, versatilidade e resistência",
        reference: "Livro de Regras, pgs. 173 e 188.",
        bullets: [
            "Permite aplicar as técnicas de barreira com a devida excelência e criar barreiras resistentes."
        ]
    },
    {
        title: "Aptidão em Domínio (DOM)",
        icon: "magic-portal",
        subtitle: "Domínio simples e Expansão de Domínio",
        description: "Envolve a aptidão em técnicas de domínio, dos usos simples à expansão",
        reference: "Livro de Regras, pgs. 173 e 182.",
        bullets: [
            "É uma das aptidões <b>mais complexas e difíceis de desenvolver</b>, junto da Energia Reversa.",
            "Define quem vence um <b>Confronto de Domínios</b>: um nível de aptidão superior vence imediatamente, salvo exceções."
        ]
    },
    {
        title: "Aptidão em Energia Reversa (ER)",
        icon: "heart-bottle",
        subtitle: "Reverter a energia para curar",
        description: "Define a proficiência no uso da energia reversa, capaz de restaurar o corpo humano",
        reference: "Livro de Regras, pgs. 173 e 190.",
        bullets: [
            "A energia reversa é a energia amaldiçoada <b>transformada em positiva</b>: nociva para maldições, curativa para outros seres.",
            "Curar <b>Dano na Alma</b> exige <b>ER 4</b> e a compreensão do traçado da alma — e a cura é reduzida à metade.",
            "É uma das aptidões mais complexas e difíceis de desenvolver."
        ]
    },
    {
        title: "Níveis de Aptidão",
        icon: "level-four",
        subtitle: "Nível 0 a 5 · sobe em todo nível par",
        description: "Mede a proficiência, habilidade e refino do feiticeiro em um certo campo",
        reference: "Livro de Regras, pg. 173.",
        bullets: [
            "Todas as aptidões variam do <b>nível 0 ao nível 5</b>. O nível 0 representa falta de treinamento; o 5 é o ápice alcançável.",
            "Por padrão, um personagem <b>inicia com todas as aptidões em 0</b>.",
            "Em <b>todo nível par</b> (2, 4, 6, 8, 10, 12, 14, 16, 18 e 20) você sobe o nível de uma das suas aptidões em 1.",
            "Nos níveis <b>10 e 20</b> você aumenta <b>um nível de aptidão adicional</b>.",
            "Também é possível aumentá-las através de treinamentos, habilidades, talentos ou outras formas."
        ]
    }
];

data_energia_regras = [
    {
        title: "Regras sobre Domínios",
        icon: "vortex",
        subtitle: "Dano ao usuário também atinge o domínio",
        description: "Expansões de Domínio podem mudar por completo o rumo de uma batalha",
        reference: "Livro de Regras, pg. 185.",
        bullets: [
            "A medida mais efetiva contra uma expansão é <b>expandir o seu próprio domínio</b>, engajando em um <b>Confronto de Domínios</b> com sua Reação.",
            "Enquanto em combate, <b>todo dano que você causar ao usuário</b> (desconsiderando Redução de Dano e Resistência) <b>também é direcionado ao domínio</b>, considerado como causado pelo interior — podendo destruí-lo.",
            "Se você deixar o usuário oponente <b>inconsciente</b>, o domínio dele é <b>derrubado imediatamente</b>.",
            "Assim que um dos lados vencer através do combate físico, o <b>acerto garantido</b> dele se torna efetivo imediatamente."
        ]
    },
    {
        title: "Regras sobre Barreiras",
        icon: "brick-pile",
        subtitle: "4 paredes cercam · 5 fecham um cubo",
        description: "As barreiras afetam diretamente o campo de batalha, o movimento e o posicionamento",
        reference: "Livro de Regras, pg. 189.",
        bullets: [
            "Criar barreiras “ao seu redor” significa criar paredes em lugares <b>desocupados dentro de 3 metros</b> de você.",
            "Cada parede ocupa apenas <b>uma linha do seu espaço</b>: são necessárias <b>4 paredes</b> para se cercar por completo, e uma <b>quinta</b> para fechar um cubo ao seu redor.",
            "<b>Não é possível empilhar várias barreiras</b> em seguida acumulando proteção, visto que não podem ocupar o mesmo espaço."
        ]
    },
    {
        title: "Cortinas",
        icon: "globe",
        subtitle: "Oculta o exorcismo de não feiticeiros",
        description: "Tipo específico de barreira, voltada a ocultar exorcismos de maldições",
        reference: "Livro de Regras, pg. 189.",
        bullets: [
            "Uma pessoa que <b>não seja feiticeira</b> verá o ambiente como ele estava antes da cortina ser conjurada; um <b>feiticeiro</b> verá o grande domo negro.",
            "É possível colocar <b>condições</b> que customizam a cortina — prender não feiticeiros, bloquear a entrada de feiticeiros ou excluir um indivíduo específico.",
            "As condições afetam o <b>equilíbrio</b> da cortina, como nos votos de restrição: uma barreira que bloqueie completamente um indivíduo específico permite a entrada e saída de qualquer outro.",
            "Uma cortina pode ser quebrada normalmente e possui pontos de vida iguais à <b>soma de três paredes</b> da aptidão Técnicas de Barreira."
        ]
    }
];

data_descanso = [
    {
        title: "Descanso Curto",
        icon: "campfire",
        subtitle: "2 a 4 horas · metade do PE",
        description: "Uma breve pausa para reunir forças novamente",
        reference: "Livro de Regras, pg. 335.",
        bullets: [
            "Pode <b>gastar dados de vida</b> para se curar, somando o modificador de Constituição em cada dado gasto.",
            "Recupera <b>metade do seu máximo de energia amaldiçoada</b>.",
            "Recupera todas as habilidades que necessitem de um <b>descanso curto</b> ou de um <b>descanso qualquer</b>.",
            "Certas habilidades específicas e kits de ferramenta podem ser usados durante descansos curtos. Normalmente ocorrem durante missões."
        ]
    },
    {
        title: "Descanso Longo",
        icon: "meditation",
        subtitle: "8 horas · recupera tudo",
        description: "O momento em que os personagens realmente recuperam tudo de si",
        reference: "Livro de Regras, pg. 335.",
        bullets: [
            "Recupera <b>todos os pontos de vida</b>, <b>todos os dados de vida gastos</b> e <b>todos os pontos de energia amaldiçoada</b>.",
            "Recupera todas as habilidades que necessitem de um <b>descanso longo</b> ou de um <b>descanso qualquer</b>.",
            "Remove <b>um</b> nível de exaustão, limpa as <b>falhas nas Portas da Morte</b> e devolve metade da vida máxima perdida por <b>Dano na Alma</b>.",
            "Você pode optar por <b>reduzir a recuperação de PV, dados de vida e PE à metade</b> para tentar criar um item com um kit de ferramentas — desde que o local faça sentido (um remédio com ingredientes de uma floresta, uma arma com sucata de um lixão próximo).",
            "Ficar <b>8 horas sem um descanso longo</b> concede um nível de exaustão."
        ]
    },
    {
        title: "Interlúdio",
        icon: "hourglass",
        subtitle: "~1 semana · dois focos de tempo",
        description: "As pausas entre uma missão e outra, para respirar, preparar e evoluir",
        reference: "Livro de Regras, pg. 336.",
        bullets: [
            "Durante um interlúdio, um personagem escolhe <b>dois focos</b> para o seu tempo. Interlúdios mais longos podem permitir mais focos, a escolha do Mestre.",
            "<b>Adaptação.</b> Troque uma quantidade de habilidades de especialização igual a <b>metade do seu nível</b> por outras — sempre da <b>mesma especialização</b>.",
            "<b>Criação de Itens.</b> Realize <b>1 + seu bônus de treinamento</b> testes de perícia, escolhendo uma perícia de <b>Ofício</b> para cada um, e crie itens conforme o resultado.",
            "CDs de criação por custo: <b>Custo 1</b> CD 15 · <b>Custo 2</b> CD 20 · <b>Custo 3</b> CD 25 (CD 30 para Alfaiate) · <b>Custo 4</b> CD 30 a 40, conforme o ofício.",
            "Você pode abrir mão de criar um item com um teste para receber <b>vantagem na próxima rolagem do mesmo Ofício</b>."
        ]
    }
];
