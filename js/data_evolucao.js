/* Progressão de personagem — Livro de Regras de Feiticeiros & Maldições v2.5.2
   Criação (pgs. 22-25), níveis (pgs. 45-48), Feitiços (pg. 199),
   treinos (pgs. 336-346) e apêndice (pgs. 365-366) */

data_criacao = [
    {
        title: "1º passo — Aspectos Pessoais",
        icon: "scroll-unfurled",
        subtitle: "Narrativo · não tem regra em jogo",
        description: "Defina quem é o personagem antes de definir o que ele sabe fazer",
        reference: "Livro de Regras, pgs. 15 e 22.",
        bullets: [
            "<b>Traços de Personalidade.</b> Os descritivos do personagem — personalidade e comportamentos.",
            "<b>Ideais.</b> Princípios, valores e metas que guiam suas decisões.",
            "<b>Ligações.</b> As conexões e laços que ele mantém, aquilo que é valioso para ele.",
            "<b>Complicações.</b> Fraquezas, obstáculos e fragilidades.",
            "<b>Domínio Inato.</b> O “espaço interior” do personagem, refletindo mente e alma em um ambiente metafísico.",
            "Estes aspectos são relevantes para a narrativa e vêm à tona em jogo apenas com regras opcionais ou em situações específicas."
        ]
    },
    {
        title: "2º passo — Atributos e Origem",
        icon: "cubes",
        subtitle: "Distribua os valores e escolha a origem",
        description: "Defina os seis atributos por um dos três métodos e escolha a origem",
        reference: "Livro de Regras, pgs. 18, 26 e 22.",
        bullets: [
            "<b>Métodos:</b> valores fixos (15, 14, 13, 12, 10 e 8), rolagem (4d6 descartando o menor) ou compra por pontos (todos em 10 e 17 pontos, limite 15).",
            "Combine com o grupo <b>qual método será usado</b> antes de começar — o ideal é que todos usem o mesmo.",
            "<b>Origens:</b> Inato, Herdado (clãs), Derivado, Restringido, Feto Amaldiçoado Híbrido, Sem Técnica e Corpo Amaldiçoado Mutante.",
            "Quase toda origem concede <b>+2 em um atributo e +1 em outro</b> (o Restringido dá +1 em Força, Destreza e Constituição, mais 2 pontos entre atributos físicos; o Sem Técnica dá 4 pontos, máx. 3 no mesmo; o Corpo Mutante dá 2 pontos).",
            "A origem também concede características próprias — o Inato, por exemplo, dá um <b>talento</b> e um Feitiço com custo reduzido."
        ]
    },
    {
        title: "3º passo — Especialização",
        icon: "crossed-swords",
        subtitle: "A “classe” do personagem",
        description: "A especialização define a base de como o personagem será em jogo",
        reference: "Livro de Regras, pgs. 44 e 23.",
        bullets: [
            "Ela fornece <b>Pontos de Vida</b> iniciais (valor fixo + mod. de Constituição), <b>Pontos de Energia</b> por nível, <b>treinamentos</b> em equipamentos, testes de resistência e perícias, e as opções de <b>atributo-chave</b> para a CD.",
            "No 1º nível você recebe apenas a <b>habilidade base</b> da especialização — as demais você escolhe conforme sobe de nível.",
            "<b>Lutador</b> 12 PV · 4 PE · For ou Des &nbsp;·&nbsp; <b>Esp. em Combate</b> 12 PV · 4 PE · For/Des/Sab",
            "<b>Esp. em Técnica</b> 10 PV · 6 PE + mod · Int ou Sab &nbsp;·&nbsp; <b>Controlador</b> e <b>Suporte</b> 10 PV · 5 PE + mod · Pre ou Sab",
            "<b>Restringido</b> 16 PV · sem PE (usa Estamina) · qualquer atributo — e está limitado à origem Restringido."
        ]
    },
    {
        title: "4º passo — Equipamentos",
        icon: "swap-bag",
        subtitle: "Igual para todos os personagens",
        description: "Os equipamentos iniciais seguem um padrão comum a todos",
        reference: "Livro de Regras, pgs. 130 e 23.",
        bullets: [
            "<b>Dois equipamentos de custo 1</b> — arma, escudo ou item especial.",
            "<b>Um uniforme comum</b>, que mantém o cálculo padrão de Defesa.",
            "<b>Um kit de ferramentas</b> à sua escolha."
        ]
    },
    {
        title: "5º passo — Técnica e Feitiços",
        icon: "magic-swirl",
        subtitle: "2 Feitiços · níveis 0 e 1",
        description: "Se o personagem tem uma técnica amaldiçoada, monte o Funcionamento Básico e os Feitiços",
        reference: "Livro de Regras, pgs. 197 e 24.",
        bullets: [
            "Todo personagem que possua uma técnica <b>inicia com dois Feitiços</b>, além do <b>Funcionamento Básico</b> da técnica.",
            "No 1º nível você só pode criar Feitiços de <b>nível 0 e 1</b>.",
            "Você pode usar uma técnica inata da obra (já adaptadas na Enciclopédia Amaldiçoada) ou criar a sua no capítulo Criação de Técnicas.",
            "<b>Restringidos</b> não têm técnica: no lugar dela montam um <b>Estilo Marcial</b>, com 2 técnicas marciais iniciais."
        ]
    },
    {
        title: "6º passo — Detalhes Finais",
        icon: "target-arrows",
        subtitle: "Os valores derivados da ficha",
        description: "Calcule os valores que dependem dos atributos e da especialização",
        reference: "Livro de Regras, pgs. 19 e 24.",
        bullets: [
            "<b>Atenção</b> = 10 + bônus em Percepção.",
            "<b>Defesa</b> = 10 + mod. de Destreza + metade do nível.",
            "<b>Iniciativa</b> = mod. de Destreza.",
            "<b>Deslocamento</b> = 9 metros.",
            "<b>Integridade da Alma</b> = seu máximo de Pontos de Vida.",
            "<b>Dados de Vida</b> = 1, do tamanho da sua especialização (o 1º nível já fornece um, mesmo sem rolagem)."
        ]
    },
    {
        title: "Resumo do nível 1",
        icon: "level-three",
        subtitle: "O que você tem ao começar",
        description: "Tudo o que um personagem de 1º nível possui, antes de qualquer evolução",
        reference: "Livro de Regras, pg. 45.",
        bullets: [
            "<b>Bônus de Treinamento +2.</b>",
            "<b>Pontos de vida iniciais</b> da especialização + mod. de Constituição, e <b>1 dado de vida</b>.",
            "<b>Pontos de energia</b> da especialização (o Esp. em Técnica, Controlador e Suporte somam o modificador de atributo uma vez).",
            "<b>Treinamentos</b> em perícias, testes de resistência e equipamentos, conforme a especialização e a origem.",
            "<b>Habilidade base</b> da especialização — apenas ela; as outras vêm com os níveis.",
            "<b>2 Feitiços</b> (níveis 0 e 1), se tiver técnica, e as características da origem.",
            "<b>Nenhum nível de aptidão</b>: todos começam em 0."
        ]
    }
];

data_nivel = [
    {
        title: "Habilidade ou Talento",
        icon: "laurels",
        subtitle: "Todo nível, do 2º ao 20º",
        description: "Ao subir de nível você escolhe uma habilidade de especialização ou um talento",
        reference: "Livro de Regras, pg. 46.",
        bullets: [
            "É <b>um ou outro</b> — não os dois.",
            "É preciso atender a qualquer <b>pré-requisito</b> da habilidade ou talento escolhido.",
            "As habilidades são liberadas por faixa de nível: <b>2º, 4º, 6º, 8º, 10º, 12º, 14º e 16º</b>. Uma habilidade de 6º nível só pode ser pega a partir do 6º nível <b>daquela especialização</b>.",
            "Ao chegar ao 20º nível você terá feito <b>19 dessas escolhas</b>."
        ]
    },
    {
        title: "Pontos de Vida",
        icon: "health-normal",
        subtitle: "Todo nível · rolar ou valor fixo",
        description: "Seus pontos de vida máximos aumentam a cada nível",
        reference: "Livro de Regras, pg. 46.",
        bullets: [
            "Você pode <b>rolar o dado de vida</b> da especialização ou pegar o <b>valor fixo</b>, sempre somando o modificador de Constituição.",
            "<b>Lutador</b> e <b>Esp. em Combate</b>: 1d10 ou 6. <b>Esp. em Técnica</b>, <b>Controlador</b> e <b>Suporte</b>: 1d8 ou 5. <b>Restringido</b>: 1d12 ou 7.",
            "Se o seu modificador de Constituição <b>aumentar</b>, recalcule os pontos de vida <b>desde o primeiro nível</b> — é retroativo.",
            "Sua <b>Integridade da Alma</b> deve ser atualizada junto, pois é igual ao máximo de PV."
        ]
    },
    {
        title: "Pontos de Energia",
        icon: "lightning-arc",
        subtitle: "Todo nível · valor da especialização",
        description: "Seu máximo de energia amaldiçoada aumenta em um valor fixo por nível",
        reference: "Livro de Regras, pg. 46.",
        bullets: [
            "<b>Lutador</b> e <b>Esp. em Combate</b>: +4 · <b>Esp. em Técnica</b>: +6 · <b>Controlador</b> e <b>Suporte</b>: +5.",
            "O <b>modificador de atributo</b> é somado <b>uma única vez</b> ao máximo (só para Esp. em Técnica, Controlador e Suporte) — e é retroativo se o modificador subir.",
            "<b>Restringidos</b> recebem <b>4 Pontos de Estamina</b> por nível no lugar."
        ]
    },
    {
        title: "Aptidão Amaldiçoada",
        icon: "aura",
        subtitle: "Todo nível · exceto Restringido",
        description: "Sempre que subir de nível você recebe uma aptidão amaldiçoada",
        reference: "Livro de Regras, pgs. 46 e 172.",
        bullets: [
            "É uma <b>habilidade</b> escolhida da lista de Aptidões Amaldiçoadas (Aura, Controle e Leitura, Domínio, Barreira, Energia Reversa e Especiais).",
            "Não confunda com o <b>Nível de Aptidão</b>, que é outro recurso e sobe só em níveis pares.",
            "Muitas aptidões exigem um <b>Nível de Aptidão mínimo</b> — por exemplo “com ER 1” ou “com BAR 3”.",
            "<b>Restringidos não recebem aptidões amaldiçoadas</b>, por não possuírem energia."
        ]
    },
    {
        title: "Nível de Aptidão",
        icon: "level-four",
        subtitle: "Todo nível par · +1 extra no 10º e 20º",
        description: "Em todo nível par você sobe em 1 o nível de uma das suas cinco aptidões",
        reference: "Livro de Regras, pg. 173.",
        bullets: [
            "Níveis pares: <b>2, 4, 6, 8, 10, 12, 14, 16, 18 e 20</b>. Nos níveis <b>10 e 20</b> você sobe <b>um nível adicional</b>.",
            "Total ao chegar ao 20º nível: <b>12 níveis de aptidão</b> distribuídos.",
            "Cada aptidão vai de <b>0 a 5</b>; todas começam em 0.",
            "Também é possível subir por <b>treinamentos, habilidades e talentos</b>.",
            "As aptidões são <b>AU</b> (Aura), <b>CL</b> (Controle e Leitura), <b>BAR</b> (Barreira), <b>DOM</b> (Domínio) e <b>ER</b> (Energia Reversa)."
        ]
    },
    {
        title: "Feitiço novo",
        icon: "magic-swirl",
        subtitle: "Todo nível par · +1 extra no 10º e 20º",
        description: "Conforme sobe de nível você recebe novos Feitiços da sua técnica",
        reference: "Livro de Regras, pg. 199.",
        bullets: [
            "Um Feitiço em <b>todo nível par</b>, mais um <b>adicional no 10º e no 20º</b>.",
            "Começando com 2, você chega ao 20º nível com <b>14 Feitiços</b>.",
            "Sempre que subir de nível você também pode <b>alterar</b> uma quantidade de Feitiços igual ao seu bônus de treinamento — mudando funcionamento ou nível.",
            "No lugar de um Feitiço novo você pode criar uma <b>Variação de Liberação</b>: o mesmo Feitiço em outro nível.",
            "O <b>Especialista em Técnica</b> é exceção: por <i>Conjuração Aprimorada</i>, ele recebe Feitiços em <b>todo</b> nível."
        ]
    },
    {
        title: "Pontos de Atributo",
        icon: "muscle-up",
        subtitle: "2 pontos nos níveis 4, 8, 12, 16 e 20",
        description: "A cada 4 níveis o personagem recebe 2 pontos de atributo",
        reference: "Livro de Regras, pg. 46.",
        bullets: [
            "São <b>10 pontos no total</b> até o 20º nível.",
            "O teto natural de um atributo é <b>20</b>. Habilidades, talentos e características de origem podem ultrapassá-lo, mas <b>nunca acima de 30</b>.",
            "Lembre-se de que aumentar Constituição obriga a <b>recalcular o PV desde o 1º nível</b>."
        ]
    },
    {
        title: "Bônus de Treinamento",
        icon: "trophy",
        subtitle: "+2 no 1º · +1 nos níveis 5, 9, 13 e 17",
        description: "O bônus aplicado em tudo aquilo em que você é treinado",
        reference: "Livro de Regras, pgs. 46 e 282.",
        bullets: [
            "Progressão: <b>+2</b> (níveis 1-4) · <b>+3</b> (5-8) · <b>+4</b> (9-12) · <b>+5</b> (13-16) · <b>+6</b> (17-20).",
            "Aplica-se em testes de perícia, jogadas de ataque e testes de resistência nos quais você é treinado, e no cálculo das suas CDs.",
            "Ser <b>mestre</b> soma metade do bônus por cima: com +2 o mestre recebe 3; com +4, 6; com +6, 9.",
            "Também controla o <b>acesso a níveis de Feitiço</b>, a quantidade de Feitiços que pode alterar por nível e o seu Arsenal Amaldiçoado, se for Restringido."
        ]
    },
    {
        title: "Mestre em uma perícia",
        icon: "scroll-unfurled",
        subtitle: "10º nível",
        description: "No 10º nível todo personagem se torna mestre em uma perícia à sua escolha",
        reference: "Livro de Regras, pg. 46.",
        bullets: [
            "Ser mestre aumenta o bônus recebido naquela perícia em <b>metade do seu bônus de treinamento</b>.",
            "Se um efeito o tornar <b>treinado</b> em uma perícia na qual você já é treinado, você se torna <b>mestre</b> nela.",
            "Você também pode virar mestre trocando treinamentos ganhos por Inteligência/Sabedoria, por talentos ou pelo <b>Treino de Perícia</b> em um interlúdio."
        ]
    },
    {
        title: "Habilidades base adicionais",
        icon: "target-arrows",
        subtitle: "Em níveis específicos de cada especialização",
        description: "Além das escolhas, cada especialização entrega habilidades base fixas",
        reference: "Livro de Regras, pgs. 46, 51, 65, 79, 91, 103 e 115.",
        bullets: [
            "Universal: <b>Teste de Resistência Mestre</b> no <b>9º nível</b> (o Restringido vira mestre nos dois TRs dele).",
            "<b>Lutador:</b> Reflexo Evasivo (2), Implemento Marcial (4), Gosto pela Luta (5), Empolgação Máxima (11), Lutador Superior (20).",
            "<b>Esp. em Combate:</b> Golpe Especial e Implemento Marcial (4), Renovação pelo Sangue (6), Autossuficiente (20).",
            "<b>Esp. em Técnica:</b> Adiantar a Evolução (4), Foco Amaldiçoado (10), O Honrado (20).",
            "<b>Controlador:</b> Controle Aprimorado (4), Apogeu (6), Reserva para Invocação (10), Ápice do Controle (20).",
            "<b>Suporte:</b> Presença Inspiradora (3), Versatilidade (5), Energia Reversa (6), Liberação de Energia Reversa (8), Medicina Infalível (10), Suporte Absoluto (20).",
            "<b>Restringido:</b> Ataque Furtivo e Versatilidade (2), Esquiva Sobre-humana (3), Implemento Celeste e a 1ª Dádiva do Céu (4), Restrição Definitiva (10), Libertação do Destino (20)."
        ]
    },
    {
        title: "Dado de Vida",
        icon: "dice-six-faces-one",
        subtitle: "1 por nível",
        description: "Cada nível adiciona um dado de vida ao seu total",
        reference: "Livro de Regras, pgs. 46 e 335.",
        bullets: [
            "O tamanho depende da especialização em que o nível foi colocado.",
            "São gastos em <b>descansos curtos</b> para se curar, somando o modificador de Constituição em cada dado gasto.",
            "Um <b>descanso longo</b> recupera todos os dados gastos.",
            "O 1º nível fornece um dado de vida mesmo sem rolagem."
        ]
    },
    {
        title: "Graus de Feiticeiro",
        icon: "laurels",
        subtitle: "Referência narrativa, não é regra",
        description: "O nível costuma andar junto do grau do feiticeiro, marcando as fases do jogo",
        reference: "Livro de Regras, pg. 45.",
        bullets: [
            "<b>Níveis 1 a 4</b> — quarto grau.",
            "<b>Níveis 5 a 7</b> — terceiro grau.",
            "<b>Níveis 8 a 13</b> — segundo grau.",
            "<b>Níveis 14 a 18</b> — primeiro grau.",
            "O livro apresenta isso como uma <b>referência básica</b> de nível de poder aproximado, e não como regra — os níveis 19 e 20 não são atribuídos a nenhum grau."
        ]
    }
];

data_maximos = [
    {
        title: "Modificador de Atributo",
        icon: "cubes",
        subtitle: "Teto natural 20 (+5) · absoluto 30 (+10)",
        description: "O quanto o seu melhor atributo pode chegar usando apenas as regras básicas",
        reference: "Livro de Regras, pgs. 18, 19 e 46.",
        bullets: [
            "Partindo do melhor valor possível na criação (<b>15</b> por valores fixos ou compra) somado ao <b>+2 da origem</b>, você começa com <b>17 (+3)</b>.",
            "Com os 2 pontos do 4º nível chega a <b>19 (+4)</b>; com os do 8º, ao teto natural de <b>20 (+5)</b> — e ainda sobra 1 ponto.",
            "Do 8º ao 20º nível o modificador máximo é <b>+5</b> sem nenhuma habilidade. Passar de 20 exige habilidades, talentos ou características de origem, e nunca ultrapassa <b>30 (+10)</b>.",
            "Se você distribuir os pontos, os valores abaixo caem proporcionalmente — a tabela mostra o <b>teto</b>, não o esperado."
        ]
    },
    {
        title: "Defesa",
        icon: "shield",
        subtitle: "10 + mod. DES + ½ nível · máx. 25 no 20º",
        description: "O teto de Defesa sem uniforme especial, habilidade ou aptidão",
        reference: "Livro de Regras, pgs. 19 e 282.",
        bullets: [
            "<b>Defesa = 10 + modificador de Destreza + metade do nível + outros bônus</b>.",
            "Com Destreza no teto: <b>13</b> no 1º nível, <b>19</b> no 8º, <b>25</b> no 20º.",
            "Cobertura soma por cima: <b>+2</b> (meia) ou <b>+4</b> (3/4). Estar flanqueado tira 2; Desprevenido tira 3; Paralisado tira 10.",
            "A <b>Sequência de Ataques</b> pode reduzir sua Defesa em até 5 dentro de uma mesma sequência."
        ]
    },
    {
        title: "Bônus de Perícia",
        icon: "scroll-unfurled",
        subtitle: "mod + ½ nível + treinamento · máx. 24 no 20º",
        description: "O teto de uma perícia treinada e de uma perícia com maestria",
        reference: "Livro de Regras, pg. 278.",
        bullets: [
            "<b>Treinado</b> = mod. do atributo-chave + metade do nível + bônus de treinamento.",
            "<b>Mestre</b> = o mesmo, mais metade do bônus de treinamento (arredondando para baixo).",
            "Teto treinado: <b>5</b> no 1º nível, <b>13</b> no 9º, <b>21</b> no 20º.",
            "Teto mestre: <b>6</b> no 1º nível, <b>15</b> no 9º, <b>24</b> no 20º.",
            "Sem treinamento você fica só com mod. + metade do nível — no 20º nível, <b>15</b>."
        ]
    },
    {
        title: "Atenção",
        icon: "semi-closed-eye",
        subtitle: "10 + bônus de Percepção · máx. 34 no 20º",
        description: "Sua percepção passiva, usada contra Furtividade e Prestidigitação",
        reference: "Livro de Regras, pg. 19.",
        bullets: [
            "<b>Atenção = 10 + bônus na perícia Percepção + outros bônus</b>.",
            "Com Sabedoria no teto e maestria em Percepção: <b>16</b> no 1º nível, <b>26</b> no 10º, <b>34</b> no 20º.",
            "É contra este valor que rolam a ação <b>Esconder</b>, a ação <b>Furtar</b> e a surpresa no início do combate."
        ]
    },
    {
        title: "Jogada de Ataque e Testes de Resistência",
        icon: "crossed-swords",
        subtitle: "mod + ½ nível + treinamento · máx. +21 no 20º",
        description: "Ataques e TRs usam a mesma estrutura de bônus das perícias",
        reference: "Livro de Regras, pgs. 279 e 280.",
        bullets: [
            "<b>= modificador + metade do nível + bônus de treinamento</b> (se treinado) + outros bônus.",
            "Teto: <b>+5</b> no 1º nível, <b>+13</b> no 9º, <b>+21</b> no 20º.",
            "Em <b>ataques amaldiçoados você é sempre treinado</b>; em armas, só se for treinado com aquela arma.",
            "Sendo <b>mestre</b> em um TR, superar a CD por 10 ou mais é sucesso crítico — e um 20 natural sobe um grau de sucesso."
        ]
    },
    {
        title: "CD das suas habilidades",
        icon: "target-arrows",
        subtitle: "10 + ½ nível + mod + treinamento · máx. 31",
        description: "A dificuldade que os inimigos enfrentam para resistir a você",
        reference: "Livro de Regras, pg. 280.",
        bullets: [
            "<b>CD = 10 + metade do nível + modificador de um atributo + bônus de treinamento + outros valores</b>.",
            "Teto: <b>15</b> no 1º nível, <b>23</b> no 9º, <b>31</b> no 20º.",
            "O atributo é o da especialização (para habilidades dela) ou o seu atributo principal de jujutsu (para Feitiços e aptidões).",
            "<b>Implemento Marcial / Celeste</b> soma +2 (subindo para +3 e +4) — é a principal fonte de aumento além do padrão."
        ]
    },
    {
        title: "Pontos de Vida por especialização",
        icon: "health-normal",
        subtitle: "Valor fixo · com Constituição +3",
        description: "Progressão de PV pegando sempre o valor fixo, sem rolar dados",
        reference: "Livro de Regras, pgs. 20 e 46.",
        bullets: [
            "<b>Lutador</b> e <b>Esp. em Combate</b> (12 / +6): <b>15</b> no 1º, <b>51</b> no 5º, <b>96</b> no 10º, <b>141</b> no 15º, <b>186</b> no 20º.",
            "<b>Esp. em Técnica</b>, <b>Controlador</b> e <b>Suporte</b> (10 / +5): <b>13</b> no 1º, <b>45</b> no 5º, <b>85</b> no 10º, <b>125</b> no 15º, <b>165</b> no 20º.",
            "<b>Restringido</b> (16 / +7): <b>19</b> no 1º, <b>59</b> no 5º, <b>109</b> no 10º, <b>159</b> no 15º, <b>209</b> no 20º.",
            "Com Constituição no teto (<b>+5</b>) os valores de 20º nível sobem para <b>226</b>, <b>205</b> e <b>249</b>, respectivamente.",
            "Rolar o dado em vez de pegar o fixo dá, em média, meio ponto a mais por nível — e muito mais variação."
        ]
    },
    {
        title: "Pontos de Energia por especialização",
        icon: "lightning-arc",
        subtitle: "Valor fixo por nível",
        description: "O máximo de energia amaldiçoada sem nenhuma habilidade que o aumente",
        reference: "Livro de Regras, pg. 21.",
        bullets: [
            "<b>Lutador</b> e <b>Esp. em Combate</b> (4/nível): <b>4</b> no 1º, <b>40</b> no 10º, <b>80</b> no 20º.",
            "<b>Esp. em Técnica</b> (6/nível + mod): <b>6+mod</b> no 1º, <b>60+mod</b> no 10º, <b>120+mod</b> no 20º — até <b>125</b> com o modificador no teto.",
            "<b>Controlador</b> e <b>Suporte</b> (5/nível + mod): <b>50+mod</b> no 10º, <b>100+mod</b> no 20º — até <b>105</b>.",
            "<b>Restringido</b>: <b>4 Pontos de Estamina por nível</b>, chegando a <b>80</b> no 20º.",
            "Um Feitiço de nível 5 custa 20 PE — o teto de energia é o que define quantas vezes você consegue usá-lo por cena."
        ]
    },
    {
        title: "Valores que não crescem sozinhos",
        icon: "walking-boot",
        subtitle: "Deslocamento, Iniciativa e Integridade",
        description: "Três valores que não sobem por nível — só por habilidade, treino ou atributo",
        reference: "Livro de Regras, pgs. 19-20.",
        bullets: [
            "<b>Deslocamento.</b> Sempre <b>9 metros</b>. Só muda por habilidades, aptidões, dádivas ou pelo Treino de Agilidade. Cada nível de exaustão tira 1,5 m.",
            "<b>Iniciativa.</b> Apenas o <b>modificador de Destreza</b> — no teto, <b>+5</b>. Não soma metade do nível nem bônus de treinamento.",
            "<b>Integridade da Alma.</b> Igual ao <b>máximo de Pontos de Vida</b>, então cresce junto do PV e mais nada."
        ]
    },
    {
        title: "Pontos temporários",
        icon: "half-heart",
        subtitle: "Teto: metade do seu máximo comum",
        description: "Pontos de vida e de energia temporários têm um limite próprio",
        reference: "Livro de Regras, pg. 366.",
        bullets: [
            "Pontos de vida ou energia temporários <b>não se acumulam</b>, a menos que especificado: recebendo outros, mantenha apenas <b>o maior valor</b>.",
            "Você só pode ter, no máximo, uma quantidade igual a <b>metade do seu máximo comum</b>. Com 60 PV máximos, no máximo 30 PV temporários."
        ]
    }
];

data_feitico = [
    {
        title: "Quantos Feitiços você tem",
        icon: "magic-swirl",
        subtitle: "2 iniciais · 14 no 20º nível",
        description: "Todo personagem com técnica inicia com dois Feitiços e ganha mais com os níveis",
        reference: "Livro de Regras, pg. 199.",
        bullets: [
            "Um Feitiço novo em <b>todo nível par</b> (2, 4, 6, 8, 10, 12, 14, 16, 18 e 20), mais um <b>adicional no 10º e no 20º</b>.",
            "Total: <b>2 no 1º nível</b>, 4 no 4º, 8 no 10º, 11 no 16º e <b>14 no 20º</b>.",
            "O <b>Especialista em Técnica</b> recebe Feitiços em todo nível, e não só nos pares.",
            "A origem <b>Inato</b> concede um Feitiço adicional com custo reduzido em 1 (Marca Registrada)."
        ]
    },
    {
        title: "Acesso a níveis de Feitiço",
        icon: "level-four",
        subtitle: "Libera junto com o bônus de treinamento",
        description: "Você só pode criar Feitiços até o nível que já liberou",
        reference: "Livro de Regras, pg. 199.",
        bullets: [
            "<b>Níveis 1 a 4</b> → Feitiços de nível 0 e 1.",
            "<b>5 a 8</b> → até nível 2 &nbsp;·&nbsp; <b>9 a 12</b> → até nível 3.",
            "<b>13 a 16</b> → até nível 4 &nbsp;·&nbsp; <b>17 a 20</b> → até nível 5.",
            "Em regra, você libera o próximo nível de Feitiço <b>sempre que seu bônus de treinamento aumenta</b>.",
            "O <b>Especialista em Técnica</b> adianta isso com <i>Adiantar a Evolução</i>: nível 2 no 4º, nível 3 no 7º, nível 4 no 11º e nível 5 no 15º."
        ]
    },
    {
        title: "Custo em energia por nível",
        icon: "lightning-arc",
        subtitle: "0 · 2 · 5 · 8 · 12 · 20",
        description: "O custo padrão em PE de cada nível de Feitiço",
        reference: "Livro de Regras, pg. 199.",
        bullets: [
            "<b>Nível 0</b> → 0 PE &nbsp;·&nbsp; <b>1</b> → 2 &nbsp;·&nbsp; <b>2</b> → 5 &nbsp;·&nbsp; <b>3</b> → 8 &nbsp;·&nbsp; <b>4</b> → 12 &nbsp;·&nbsp; <b>5</b> → 20.",
            "O custo pode ser reduzido por habilidades (principalmente do Especialista em Técnica) ou por características de origem.",
            "Todo Feitiço deve custar <b>no mínimo 1 PE</b>, a menos que seja de nível 0."
        ]
    },
    {
        title: "Alterar Feitiços ao subir de nível",
        icon: "cycle",
        subtitle: "Até o bônus de treinamento por nível",
        description: "Feitiços não são definitivos: você pode remodelá-los conforme evolui",
        reference: "Livro de Regras, pg. 199.",
        bullets: [
            "Sempre que subir de nível você pode escolher até uma quantidade de Feitiços <b>igual ao seu bônus de treinamento</b> para alterar.",
            "A alteração pode ser tanto no <b>funcionamento</b> quanto no <b>nível</b> do Feitiço."
        ]
    },
    {
        title: "Variações de Liberação",
        icon: "magic-gate",
        subtitle: "O mesmo Feitiço em outro nível",
        description: "No lugar de um Feitiço novo, crie uma versão mais forte de um que já tem",
        reference: "Livro de Regras, pg. 200.",
        bullets: [
            "Sempre que receber um Feitiço novo, você pode criar uma <b>Variação de Liberação</b> no lugar.",
            "Um mesmo Feitiço pode ter <b>quantas variações desejar</b>, desde que sejam de um nível ao qual você já tenha acesso e <b>não inferior</b> ao nível em que o Feitiço foi criado.",
            "Características que consideram “um Feitiço” valem para todas as variações; as que consideram o <b>nível</b> usam o Feitiço-base.",
            "O exemplo clássico é o Santuário de Ryomen Sukuna, com duas “armas principais” variando do nível 0 ao 5."
        ]
    },
    {
        title: "Aptidão amaldiçoada ≠ Nível de Aptidão",
        icon: "aura",
        subtitle: "A confusão mais comum da progressão",
        description: "São dois recursos diferentes que crescem em ritmos diferentes",
        reference: "Livro de Regras, pgs. 46 e 173.",
        bullets: [
            "<b>Aptidão Amaldiçoada</b> é uma <b>habilidade</b> (Aura do Bastião, Canalizar em Golpe, Domínio Simples...). Você recebe <b>uma por nível</b>, do 2º ao 20º.",
            "<b>Nível de Aptidão</b> é a sua <b>proficiência em um ramo</b> (AU, CL, BAR, DOM, ER), de 0 a 5. Sobe <b>em níveis pares</b>, com um extra no 10º e no 20º — 12 no total.",
            "Muitas aptidões só podem ser pegas com um Nível de Aptidão mínimo, então as duas trilhas andam juntas.",
            "Se você receber um nível em uma aptidão que já está no <b>máximo 5</b>, ele é convertido em uma <b>aptidão amaldiçoada</b> à sua escolha, relacionada àquele ramo."
        ]
    }
];

data_multiclasse = [
    {
        title: "Como funciona",
        icon: "cycle",
        subtitle: "Requer atributo 16 na nova especialização",
        description: "Ao subir de nível você pode colocar o nível em outra especialização",
        reference: "Livro de Regras, pg. 47.",
        bullets: [
            "Você deve atender aos <b>requisitos de multiclasse</b> da especialização desejada — em geral, <b>16</b> em um dos atributos-chave dela.",
            "Passa a existir a divisão entre <b>nível de especialização</b> (separado para cada uma) e <b>nível de personagem</b> (o geral).",
            "Exemplo: um personagem nível 3 com 2 níveis de Lutador e 1 de Especialista em Combate é <b>Nível 3 de Personagem</b>, Nível 2 de Lutador e Nível 1 de Esp. em Combate."
        ]
    },
    {
        title: "O que você ganha e o que não ganha",
        icon: "scales",
        subtitle: "Sem treinamentos novos",
        description: "As regras específicas de pontos e características na multiclasse",
        reference: "Livro de Regras, pg. 47.",
        bullets: [
            "<b>Pontos de Vida.</b> No primeiro nível de uma nova especialização você recebe os PV de um <b>nível subsequente</b>, e não os do primeiro nível.",
            "<b>Pontos de Energia.</b> Aumentam pelo valor da nova especialização.",
            "<b>Treinamentos.</b> Você <b>não recebe</b> novos treinamentos em perícias nem em equipamentos.",
            "No primeiro nível de uma nova especialização você recebe <b>apenas a habilidade base</b> dela."
        ]
    },
    {
        title: "Pré-requisitos e nível efetivo",
        icon: "target-arrows",
        subtitle: "Metade do nível nas outras especializações",
        description: "Como calcular o seu nível para efeitos de habilidades",
        reference: "Livro de Regras, pg. 47.",
        bullets: [
            "Para <b>obter</b> habilidades, vale o seu nível <b>naquela especialização específica</b> — o mesmo para habilidades base e fortalecimentos.",
            "Para <b>efeitos</b> de habilidades, conta-se o <b>nível na multiclasse + metade do nível nas outras especializações</b>.",
            "Exemplo: um personagem nível 9 com 5 de Controlador e 4 de Lutador conta como <b>Controlador nível 7</b> (5 + 2) para efeitos — mas <b>não</b> para pré-requisitos."
        ]
    },
    {
        title: "Restringido não faz multiclasse",
        icon: "cancel",
        subtitle: "Nos dois sentidos",
        description: "A falta de energia amaldiçoada impede qualquer combinação",
        reference: "Livro de Regras, pg. 47.",
        bullets: [
            "Restringidos <b>não podem realizar Multiclasse</b>, pois a energia amaldiçoada é essencial ao funcionamento das outras especializações.",
            "Personagens de outras especializações <b>também não podem obter níveis de Restringido</b>."
        ]
    }
];

data_interludio = [
    {
        title: "Como funciona o Interlúdio",
        icon: "hourglass",
        subtitle: "~1 semana · 2 focos",
        description: "As pausas entre missões, dedicadas ao crescimento do grupo",
        reference: "Livro de Regras, pg. 336.",
        bullets: [
            "Um interlúdio dura cerca de <b>uma semana</b> e o personagem escolhe <b>dois focos</b> para o seu tempo. Interlúdios mais longos podem dar mais focos, a critério do Mestre.",
            "Os focos possíveis são <b>Adaptação</b>, <b>Criação de Itens</b>, <b>Criação de Invocações</b>, <b>Treinamento</b> e <b>Aliados</b>.",
            "<b>Adaptação:</b> troque uma quantidade de habilidades de especialização igual a metade do seu nível por outras da <b>mesma</b> especialização.",
            "<b>Criação de Itens:</b> realize 1 + bônus de treinamento testes de Ofício e crie itens conforme o resultado."
        ]
    },
    {
        title: "Foco em Treinamento",
        icon: "meditation",
        subtitle: "Etapas custam 1 ou 2 focos",
        description: "Escolha uma Linha de Treinamento e avance por etapas ao longo da campanha",
        reference: "Livro de Regras, pg. 338.",
        bullets: [
            "Cada linha tem <b>4 etapas</b>: as três primeiras custam <b>1 foco</b> cada e a quarta custa <b>2 focos</b>.",
            "<b>Não há rolagem</b> — considera-se sempre que o personagem atinge o objetivo do treino; mas vale descrever como ele ocorre.",
            "Ao completar uma etapa você pode, no próximo interlúdio, <b>prosseguir na linha ou iniciar outra</b>, mantendo o progresso.",
            "Ao completar a linha inteira você recebe todos os benefícios dela <b>mais o Bônus de Treinamento Completo</b>.",
            "<b>Não é possível repetir</b> uma linha já completada — exceto Manejo de Arma e Perícia, que podem ser refeitos com outra arma ou perícia."
        ]
    },
    {
        title: "Treino de Agilidade",
        icon: "acrobatic",
        subtitle: "Deslocamento, Acrobacia, Iniciativa, Reflexos",
        description: "Amplia velocidade, movimento e capacidade de resposta",
        reference: "Livro de Regras, pg. 339.",
        bullets: [
            "<b>1ª etapa.</b> Seu Deslocamento aumenta em 1,5 metros.",
            "<b>2ª etapa.</b> +2 em rolagens de Acrobacia.",
            "<b>3ª etapa</b> (Destreza 14). +2 em rolagens de Iniciativa.",
            "<b>4ª etapa</b> (Destreza 16, 2 focos). +2 em rolagens de Reflexos.",
            "<b>Completo.</b> A margem para sucesso crítico em TR de Reflexos reduz em 2 e seu Deslocamento aumenta em 4,5 metros."
        ]
    },
    {
        title: "Treino de Barreiras",
        icon: "energy-shield",
        subtitle: "Requer a aptidão Técnicas de Barreira",
        description: "Desenvolve a resistência e a excelência das aptidões de barreira",
        reference: "Livro de Regras, pg. 339.",
        bullets: [
            "<b>1ª etapa</b> (Técnicas de Barreira). Os PV das paredes aumentam em 10.",
            "<b>2ª etapa.</b> Seu Nível de Aptidão em Barreiras aumenta em 1.",
            "<b>3ª etapa</b> (BAR 2). Os PV das paredes aumentam em mais 10.",
            "<b>4ª etapa</b> (BAR 3, 2 focos). O máximo de paredes que você pode criar aumenta em 2.",
            "<b>Completo.</b> Toda parede criada recebe RD igual ao seu Nível de Aptidão em Barreiras."
        ]
    },
    {
        title: "Treino de Compreensão",
        icon: "brain",
        subtitle: "Energia máxima, Feitiçaria e Ocultismo",
        description: "Aprofunda o feiticeiro na essência da energia amaldiçoada",
        reference: "Livro de Regras, pg. 340.",
        bullets: [
            "<b>1ª etapa.</b> Seu máximo de energia amaldiçoada aumenta em 2.",
            "<b>2ª etapa.</b> +1 em rolagens de Feitiçaria e Ocultismo.",
            "<b>3ª etapa</b> (AU 2). Seu máximo de energia aumenta em 3.",
            "<b>4ª etapa</b> (AU 3, 2 focos). +2 em rolagens de Feitiçaria e Ocultismo.",
            "<b>Completo.</b> Você aumenta <b>um nível de aptidão à sua escolha</b> em 1."
        ]
    },
    {
        title: "Treino de Controle de Energia",
        icon: "energise",
        subtitle: "PE máximo e PE temporário em combate",
        description: "Melhora a administração e a produção de energia amaldiçoada",
        reference: "Livro de Regras, pg. 340.",
        bullets: [
            "<b>1ª etapa.</b> Seu máximo de energia amaldiçoada aumenta em 2.",
            "<b>2ª etapa.</b> Ao iniciar uma cena de combate, você recebe 4 PE temporários.",
            "<b>3ª etapa</b> (CL 2). Seu máximo de energia aumenta em 3.",
            "<b>4ª etapa</b> (CL 3, 2 focos). Seu Nível de Aptidão em Controle e Leitura aumenta em 1.",
            "<b>Completo.</b> Durante uma cena de combate, no começo de toda rodada você ganha PE temporário igual a metade do seu bônus de treinamento."
        ]
    },
    {
        title: "Treino de Domínios",
        icon: "magic-portal",
        subtitle: "Confrontos, área e efeitos da expansão",
        description: "Refina as manifestações do próprio domínio",
        reference: "Livro de Regras, pg. 341.",
        bullets: [
            "<b>1ª etapa</b> (Expansão de Domínio Incompleta). +1 em rolagens para confrontos e contestações de expansões.",
            "<b>2ª etapa.</b> A área da sua Expansão de Domínio aumenta em 3 metros.",
            "<b>3ª etapa</b> (Expansão de Domínio Completa). Mais +1 em rolagens de confronto.",
            "<b>4ª etapa</b> (DOM 5, 2 focos). Você pode colocar um efeito adicional na sua expansão.",
            "<b>Completo.</b> Você recebe a aptidão <b>Modificação Completa</b>: pode inverter a resistência interna/externa do domínio e mudar o tamanho dele (cada 1,5 m a menos dá +20 PV de resistência; cada 1,5 m a mais tira 20; mínimo 3 m, máximo o triplo do comum)."
        ]
    },
    {
        title: "Treino de Energia Reversa",
        icon: "heart-bottle",
        subtitle: "Requer a aptidão Energia Reversa",
        description: "Aprimora o uso da energia positiva, que cura humanos e destrói maldições",
        reference: "Livro de Regras, pg. 342.",
        bullets: [
            "<b>1ª etapa</b> (Energia Reversa). A quantidade de pontos de energia reversa que você pode gastar em Aptidões de Energia Reversa aumenta em 1.",
            "<b>2ª etapa.</b> Seu Nível de Aptidão em Energia Reversa aumenta em 1.",
            "<b>3ª etapa</b> (ER 4). O custo para regenerar um membro ou ferida interna com Regeneração Aprimorada é reduzido em 2.",
            "<b>4ª etapa</b> (ER 5, 2 focos). Você também pode usar Fluxo Constante para regenerar membros, e não apenas para se curar.",
            "<b>Completo.</b> Você pode usar Regeneração Aprimorada para curar a exaustão de técnica após uma expansão de domínio, reduzindo-a em um turno a cada 2 pontos de energia reversa gastos."
        ]
    },
    {
        title: "Treino de Luta",
        icon: "fist",
        subtitle: "Dano desarmado, Defesa e manobras",
        description: "Domina os golpes desarmados, a guarda e os fundamentos da luta",
        reference: "Livro de Regras, pg. 343.",
        bullets: [
            "<b>1ª etapa.</b> O dano dos seus ataques desarmados aumenta em 1 nível.",
            "<b>2ª etapa.</b> +2 na Defesa e em rolagens para Agarrar, Derrubar e Empurrar.",
            "<b>3ª etapa</b> (Força ou Destreza 14). Mais 1 nível de dano desarmado.",
            "<b>4ª etapa</b> (Força ou Destreza 16, 2 focos). Mais 2 níveis de dano desarmado.",
            "<b>Completo.</b> Você recebe acesso ao efeito de crítico de Pugilato e pode, uma vez por rodada, fazer uma rolagem de Acrobacia ou Atletismo com vantagem."
        ]
    },
    {
        title: "Treino de Manejo de Arma",
        icon: "broadsword",
        subtitle: "Repetível com outra arma",
        description: "Torna o feiticeiro mestre em uma arma específica",
        reference: "Livro de Regras, pg. 344.",
        bullets: [
            "<b>1ª etapa.</b> Escolha uma arma: você se torna treinado com ela (ou, se já for, +2 em rolagens de dano com ela).",
            "<b>2ª etapa.</b> +1 em jogadas de ataque com a arma escolhida.",
            "<b>3ª etapa.</b> Manejando a arma escolhida, você recebe acesso ao efeito de crítico dela.",
            "<b>4ª etapa</b> (2 focos). +1 em jogadas de ataque e +2 em rolagens de dano com ela.",
            "<b>Completo.</b> Manejando a arma escolhida, ela recebe um Encantamento de ferramenta amaldiçoada adicional.",
            "Este treinamento pode ser <b>repetido</b>, escolhendo uma arma diferente."
        ]
    },
    {
        title: "Treino de Perícia",
        icon: "scroll-unfurled",
        subtitle: "Repetível com outra perícia",
        description: "Domina uma habilidade específica em níveis superiores",
        reference: "Livro de Regras, pg. 345.",
        bullets: [
            "<b>1ª etapa.</b> Escolha uma perícia: você se torna treinado nela (ou, se já for, +1 em testes usando-a).",
            "<b>2ª etapa.</b> Duas vezes por descanso, você pode fazer um teste da perícia escolhida com vantagem.",
            "<b>3ª etapa.</b> Você se torna mestre nela (ou, se já for, +2 em testes usando-a).",
            "<b>4ª etapa</b> (2 focos). Uma vez por cena, obtenha um sucesso garantido em um teste da perícia, desde que não seja um teste oposto.",
            "<b>Completo.</b> Tirando menos de 5 no d20 em um teste dessa perícia, você pode rolar novamente e manter o melhor resultado.",
            "Este treinamento pode ser <b>repetido</b>, escolhendo uma perícia diferente."
        ]
    },
    {
        title: "Treino de Potencial Físico",
        icon: "muscle-up",
        subtitle: "Exclusivo do Restringido",
        description: "Extrai todo o potencial físico de um corpo afetado pela restrição celestial",
        reference: "Livro de Regras, pg. 346.",
        bullets: [
            "<b>1ª etapa.</b> Seu máximo de pontos de estamina aumenta em 2.",
            "<b>2ª etapa</b> (nível 4 de personagem). Você recebe 2 pontos de atributo para distribuir entre os atributos físicos.",
            "<b>3ª etapa.</b> Seu máximo de pontos de estamina aumenta em 4.",
            "<b>4ª etapa</b> (2 focos). Você recebe uma Dádiva do Céu adicional.",
            "<b>Completo.</b> Durante uma cena de combate, no começo de toda rodada você recebe pontos de estamina temporários iguais a metade do seu bônus de treinamento.",
            "Só pode ser realizado por <b>Restringidos</b>, e permite usar qualquer atributo físico nas rolagens."
        ]
    },
    {
        title: "Treino de Resistência",
        icon: "bordered-shield",
        subtitle: "PV, dados de vida e Fortitude",
        description: "Eleva o físico do feiticeiro, deixando-o mais resistente e vigoroso",
        reference: "Livro de Regras, pg. 346.",
        bullets: [
            "<b>1ª etapa.</b> Seus pontos de vida máximos aumentam em 4.",
            "<b>2ª etapa.</b> Sua quantidade de dados de vida disponíveis por descanso aumenta em 2.",
            "<b>3ª etapa</b> (Constituição 14). +2 em rolagens de Fortitude.",
            "<b>4ª etapa</b> (Constituição 16, 2 focos). Seus pontos de vida máximos aumentam em 6.",
            "<b>Completo.</b> A margem para sucesso crítico em TR de Fortitude reduz em 2, você ignora a primeira falha em testes de morte uma vez por cena e seus PV máximos aumentam em mais 10."
        ]
    }
];

data_regras_calc = [
    {
        title: "Arredondamento",
        icon: "scales",
        subtitle: "Sempre para baixo",
        description: "A menos que indicado o contrário, toda divisão arredonda para baixo",
        reference: "Livro de Regras, pg. 365.",
        bullets: [
            "Exemplo: um ataque causa 11 de dano e um efeito o reduz à metade — o ataque causa <b>5</b>.",
            "Vale para metade do nível, metade do bônus de treinamento e todos os demais cálculos."
        ]
    },
    {
        title: "Ordem das operações",
        icon: "cycle",
        subtitle: "Multiplicação e divisão antes de soma e subtração",
        description: "Quando mais de um efeito altera um valor, segue-se a ordem padrão",
        reference: "Livro de Regras, pg. 365.",
        bullets: [
            "Exemplo: um personagem com RD 4 é atingido por 20 de dano com teste de resistência.",
            "Primeiro faz-se o teste — passando, o dano cai à metade (10). <b>Depois</b> aplica-se a RD, chegando a <b>6</b>; falhando o teste, seriam <b>16</b>."
        ]
    },
    {
        title: "Fontes de efeitos e acúmulos",
        icon: "interdiction",
        subtitle: "A mesma fonte não acumula",
        description: "Bônus e prejuízos da mesma fonte não se somam",
        reference: "Livro de Regras, pg. 365.",
        bullets: [
            "<b>Habilidades de Especialização.</b> Duas habilidades iguais não acumulam — dois Suportes com Presença Inspiradora dão apenas o bônus de uma. Nomes diferentes acumulam.",
            "<b>Itens.</b> Cada item é uma fonte; não é possível se beneficiar de dois iguais, nem de um item e sua versão superior.",
            "<b>Técnica Amaldiçoada.</b> Todas as técnicas — inclusive a sua — contam como <b>uma única fonte</b>: um Feitiço passivo não acumula com um ativo, e sustentados não acumulam entre si.",
            "Havendo dois efeitos iguais da mesma fonte, vale <b>apenas o maior</b>."
        ]
    },
    {
        title: "Limitado pelo nível",
        icon: "level-three",
        subtitle: "O bônus não pode passar do seu nível",
        description: "Certos efeitos têm o bônus limitado pelo nível do personagem",
        reference: "Livro de Regras, pg. 366.",
        bullets: [
            "Exemplo: <i>Músculos Desenvolvidos</i> permite somar o modificador de Força na Defesa, mas é limitado pelo nível.",
            "Um Lutador com Força +4 só recebe os 4 completos a partir do <b>4º nível</b>; no 2º recebe 2, no 3º recebe 3, e assim por diante."
        ]
    },
    {
        title: "Níveis de aptidão excedentes",
        icon: "aura",
        subtitle: "Viram uma aptidão amaldiçoada",
        description: "O que acontece ao receber um nível em uma aptidão já no máximo",
        reference: "Livro de Regras, pg. 366.",
        bullets: [
            "Cada aptidão vai até o <b>nível 5</b>. Recebendo um aumento em uma que já está no máximo, o nível excedente é convertido em uma <b>aptidão amaldiçoada à sua escolha</b>, relacionada àquele ramo.",
            "Exemplo: já com AU 5, acertar o primeiro Raio Negro subiria a Aura em um nível — em vez disso, você escolhe uma Aptidão de Aura."
        ]
    }
];
