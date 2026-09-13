/* Dados estruturados para a ficha automática
   Baseado no Livro de Regras v2.5.2 e na Ficha de Personagem v2.5 (planilha) */

var ATRIBUTOS = [
    { id: "for", nome: "Força", curto: "FOR" },
    { id: "des", nome: "Destreza", curto: "DES" },
    { id: "con", nome: "Constituição", curto: "CON" },
    { id: "int", nome: "Inteligência", curto: "INT" },
    { id: "sab", nome: "Sabedoria", curto: "SAB" },
    { id: "pre", nome: "Presença", curto: "PRE" }
];

/* pv1 = PV do 1º nível · pvPasso = valor fixo dos níveis seguintes
   peNivel = PE por nível · peSomaMod = soma o mod. do atributo de técnica uma vez */
var ESPECIALIZACOES = [
    {
        id: "lutador", nome: "Lutador",
        pv1: 12, pvPasso: 6, pvDado: "1d10",
        peNivel: 4, peSomaMod: false, recurso: "PE",
        chave: ["for", "des"],
        trOpcoes: ["fortitude", "reflexos"],
        pagina: 49
    },
    {
        id: "combate", nome: "Especialista em Combate",
        pv1: 12, pvPasso: 6, pvDado: "1d10",
        peNivel: 4, peSomaMod: false, recurso: "PE",
        chave: ["for", "des", "sab"],
        trOpcoes: ["fortitude", "reflexos"],
        pagina: 63
    },
    {
        id: "tecnica", nome: "Especialista em Técnica",
        pv1: 10, pvPasso: 5, pvDado: "1d8",
        peNivel: 6, peSomaMod: true, recurso: "PE",
        chave: ["int", "sab"],
        trOpcoes: ["astucia", "vontade"],
        pagina: 78
    },
    {
        id: "controlador", nome: "Controlador",
        pv1: 10, pvPasso: 5, pvDado: "1d8",
        peNivel: 5, peSomaMod: true, recurso: "PE",
        chave: ["pre", "sab"],
        trOpcoes: ["astucia", "vontade"],
        pagina: 90
    },
    {
        id: "suporte", nome: "Suporte",
        pv1: 10, pvPasso: 5, pvDado: "1d8",
        peNivel: 5, peSomaMod: true, recurso: "PE",
        chave: ["pre", "sab"],
        trOpcoes: ["astucia", "vontade"],
        pagina: 102
    },
    {
        id: "restringido", nome: "Restringido",
        pv1: 16, pvPasso: 7, pvDado: "1d12",
        peNivel: 4, peSomaMod: false, recurso: "Estamina",
        chave: ["for", "des", "con", "int", "sab", "pre"],
        trOpcoes: ["fortitude", "reflexos"],
        semAptidoes: true,
        pagina: 114
    }
];

/* escolhas = quantos pontos o jogador distribui e com que limite por atributo */
var ORIGENS = [
    {
        id: "inato", nome: "Inato", pagina: 27,
        bonus: [2, 1], limite: null,
        notas: "Talento Natural (um talento no 1º nível) e Marca Registrada (um Feitiço com custo reduzido em 1)."
    },
    {
        id: "herdado", nome: "Herdado (clã)", pagina: 28,
        bonus: [2, 1], limite: null,
        notas: "O clã define quais atributos podem receber o +2 e o +1, e concede treinamentos próprios. Gojo: Inteligência ou Sabedoria. Kamo: Inteligência ou Presença. Zenin: livre."
    },
    {
        id: "derivado", nome: "Derivado", pagina: 32,
        bonus: [2, 1], limite: null,
        notas: "Energia Antinatural: você recebe uma Aptidão Amaldiçoada adicional."
    },
    {
        id: "restringido", nome: "Restringido", pagina: 33,
        fixos: { for: 1, des: 1, con: 1 }, pontos: 2, limite: null,
        somenteFisicos: true,
        notas: "+1 em Força, Destreza e Constituição, mais 2 pontos entre os atributos físicos. Obriga a especialização Restringido."
    },
    {
        id: "feto", nome: "Feto Amaldiçoado Híbrido", pagina: 34,
        bonus: [2, 1], limite: null,
        notas: "Herança Maldita: toda cura de energia reversa que você receber é reduzida."
    },
    {
        id: "semtecnica", nome: "Sem Técnica", pagina: 37,
        pontos: 4, limite: 3,
        notas: "4 pontos para distribuir, com no máximo 3 no mesmo atributo. Estudos Dedicados: treinado em 2 perícias."
    },
    {
        id: "mutante", nome: "Corpo Amaldiçoado Mutante", pagina: 39,
        pontos: 2, limite: null,
        notas: "Forma de Vida Sintética: imune a dano venenoso e à condição Envenenado, entre outros efeitos."
    }
];

var PERICIAS = [
    { id: "acrobacia", nome: "Acrobacia", attr: "des" },
    { id: "atletismo", nome: "Atletismo", attr: "for" },
    { id: "direcao", nome: "Direção", attr: "sab", complementar: true },
    { id: "enganacao", nome: "Enganação", attr: "pre" },
    { id: "feiticaria", nome: "Feitiçaria", attr: "int", exigeTreino: true },
    { id: "furtividade", nome: "Furtividade", attr: "des" },
    { id: "historia", nome: "História", attr: "int" },
    { id: "intimidacao", nome: "Intimidação", attr: "pre" },
    { id: "intuicao", nome: "Intuição", attr: "sab" },
    { id: "investigacao", nome: "Investigação", attr: "int" },
    { id: "medicina", nome: "Medicina", attr: "sab", exigeTreino: true },
    { id: "ocultismo", nome: "Ocultismo", attr: "sab" },
    { id: "oficio", nome: "Ofício", attr: "int", exigeTreino: true },
    { id: "percepcao", nome: "Percepção", attr: "sab" },
    { id: "performance", nome: "Performance", attr: "pre" },
    { id: "persuasao", nome: "Persuasão", attr: "pre" },
    { id: "prestidigitacao", nome: "Prestidigitação", attr: "des", exigeTreino: true },
    { id: "sobrevivencia", nome: "Sobrevivência", attr: "sab", complementar: true },
    { id: "tecnologia", nome: "Tecnologia", attr: "int" },
    { id: "teologia", nome: "Teologia", attr: "int", complementar: true }
];

var RESISTENCIAS = [
    { id: "astucia", nome: "Astúcia", attr: "int" },
    { id: "fortitude", nome: "Fortitude", attr: "con" },
    { id: "integridade", nome: "Integridade", attr: "con" },
    { id: "reflexos", nome: "Reflexos", attr: "des" },
    { id: "vontade", nome: "Vontade", attr: "sab" }
];

var ATAQUES = [
    { id: "corpo", nome: "Corpo a Corpo", attrPadrao: "for", alternativas: ["for", "des"] },
    { id: "distancia", nome: "A Distância", attrPadrao: "des", alternativas: ["des"] },
    { id: "amaldicoado", nome: "Amaldiçoado", attrPadrao: "int", alternativas: ["for", "des", "con", "int", "sab", "pre"] }
];

var APTIDOES_NIVEL = [
    { id: "au", nome: "Aura", sigla: "AU" },
    { id: "cl", nome: "Controle e Leitura", sigla: "CL" },
    { id: "bar", nome: "Barreira", sigla: "BAR" },
    { id: "dom", nome: "Domínio", sigla: "DOM" },
    { id: "er", nome: "Energia Reversa", sigla: "ER" }
];

var TIPOS_DANO_RD = [
    { id: "cor", nome: "Cortante" }, { id: "per", nome: "Perfurante" },
    { id: "imp", nome: "Impacto" }, { id: "aci", nome: "Ácido" },
    { id: "con", nome: "Congelante" }, { id: "cho", nome: "Chocante" },
    { id: "que", nome: "Queimante" }, { id: "son", nome: "Sônico" },
    { id: "ene", nome: "Energético" }, { id: "psi", nome: "Psíquico" },
    { id: "rad", nome: "Radiante" }, { id: "nec", nome: "Necrótico" },
    { id: "ven", nome: "Venenoso" }, { id: "rev", nome: "Energia Reversa" }
];

/* Alvos que um modificador pode alterar. O rótulo aparece no detalhamento. */
var ALVOS = [
    { id: "atributo.for", rotulo: "Força (valor)", grupo: "Atributos" },
    { id: "atributo.des", rotulo: "Destreza (valor)", grupo: "Atributos" },
    { id: "atributo.con", rotulo: "Constituição (valor)", grupo: "Atributos" },
    { id: "atributo.int", rotulo: "Inteligência (valor)", grupo: "Atributos" },
    { id: "atributo.sab", rotulo: "Sabedoria (valor)", grupo: "Atributos" },
    { id: "atributo.pre", rotulo: "Presença (valor)", grupo: "Atributos" },

    { id: "pv", rotulo: "Pontos de Vida máximos", grupo: "Valores" },
    { id: "pe", rotulo: "Pontos de Energia máximos", grupo: "Valores" },
    { id: "integridade", rotulo: "Integridade da Alma", grupo: "Valores" },
    { id: "defesa", rotulo: "Defesa", grupo: "Valores" },
    { id: "atencao", rotulo: "Atenção", grupo: "Valores" },
    { id: "iniciativa", rotulo: "Iniciativa", grupo: "Valores" },
    { id: "deslocamento", rotulo: "Deslocamento (metros)", grupo: "Valores" },
    { id: "cdEspec", rotulo: "CD de Especialização", grupo: "Valores" },
    { id: "bt", rotulo: "Bônus de Treinamento", grupo: "Valores" },

    { id: "ataque.corpo", rotulo: "Ataque corpo a corpo", grupo: "Ataques" },
    { id: "ataque.distancia", rotulo: "Ataque a distância", grupo: "Ataques" },
    { id: "ataque.amaldicoado", rotulo: "Ataque amaldiçoado", grupo: "Ataques" },
    { id: "dano", rotulo: "Rolagens de dano", grupo: "Ataques" },

    { id: "tr.astucia", rotulo: "TR de Astúcia", grupo: "Resistências" },
    { id: "tr.fortitude", rotulo: "TR de Fortitude", grupo: "Resistências" },
    { id: "tr.integridade", rotulo: "TR de Integridade", grupo: "Resistências" },
    { id: "tr.reflexos", rotulo: "TR de Reflexos", grupo: "Resistências" },
    { id: "tr.vontade", rotulo: "TR de Vontade", grupo: "Resistências" },

    { id: "pericia.todas", rotulo: "Todas as perícias", grupo: "Perícias" }
].concat(PERICIAS.map(function (p) {
    return { id: "pericia." + p.id, rotulo: p.nome, grupo: "Perícias" };
})).concat(APTIDOES_NIVEL.map(function (a) {
    return { id: "aptidao." + a.id, rotulo: "Nível de Aptidão em " + a.nome, grupo: "Aptidões" };
})).concat(TIPOS_DANO_RD.map(function (d) {
    return { id: "rd." + d.id, rotulo: "RD contra " + d.nome, grupo: "Redução de dano" };
}));

/* ------------------------------------------------------------------------- */
/* Leitura de efeitos: sugere modificadores a partir do texto da habilidade    */
/* ------------------------------------------------------------------------- */

var PADROES_EFEITO = [
    { re: /\+\s*(\d+)\s+em\s+todas\s+as\s+per[íi]cias/i, alvo: "pericia.todas" },
    { re: /\+\s*(\d+)\s+(?:de|na|em)\s+(?:sua\s+)?Defesa/i, alvo: "defesa" },
    { re: /Defesa\s+aumenta\s+em\s+(\d+)/i, alvo: "defesa" },
    { re: /\+\s*(\d+)\s+na\s+CD\b/i, alvo: "cdEspec" },
    { re: /CD\s+(?:de\s+todos\s+)?.{0,30}aumenta\s+em\s+(\d+)/i, alvo: "cdEspec" },
    { re: /Deslocamento\s+aumenta\s+em\s+([\d,.]+)\s*metros?/i, alvo: "deslocamento", decimal: true },
    { re: /m[áa]ximo\s+de\s+energia\s+amaldi[çc]oada\s+aumenta\s+em\s+(\d+)/i, alvo: "pe" },
    { re: /pontos\s+de\s+vida\s+m[áa]ximos\s+aumentam\s+em\s+(\d+)/i, alvo: "pv" },
    { re: /m[áa]ximo\s+de\s+pontos\s+de\s+estamina\s+aumenta\s+em\s+(\d+)/i, alvo: "pe" },
    { re: /\+\s*(\d+)\s+em\s+(?:sua\s+)?Aten[çc][ãa]o/i, alvo: "atencao" },
    { re: /\+\s*(\d+)\s+em\s+rolagens\s+de\s+Iniciativa/i, alvo: "iniciativa" },
    { re: /\+\s*(\d+)\s+em\s+rolagens\s+de\s+Fortitude/i, alvo: "tr.fortitude" },
    { re: /\+\s*(\d+)\s+em\s+rolagens\s+de\s+Reflexos/i, alvo: "tr.reflexos" },
    { re: /\+\s*(\d+)\s+em\s+rolagens\s+de\s+Vontade/i, alvo: "tr.vontade" },
    { re: /\+\s*(\d+)\s+em\s+rolagens\s+de\s+Acrobacia/i, alvo: "pericia.acrobacia" },
    { re: /\+\s*(\d+)\s+em\s+rolagens\s+de\s+Atletismo/i, alvo: "pericia.atletismo" },
    { re: /\+\s*(\d+)\s+em\s+rolagens\s+de\s+Percep[çc][ãa]o/i, alvo: "pericia.percepcao" },
    { re: /N[íi]vel\s+de\s+Aptid[ãa]o\s+em\s+Aura\s+aumenta\s+em\s+(\d+)/i, alvo: "aptidao.au" },
    { re: /N[íi]vel\s+de\s+Aptid[ãa]o\s+em\s+Controle\s+e\s+Leitura\s+aumenta\s+em\s+(\d+)/i, alvo: "aptidao.cl" },
    { re: /N[íi]vel\s+de\s+Aptid[ãa]o\s+em\s+Barreiras?\s+aumenta\s+em\s+(\d+)/i, alvo: "aptidao.bar" },
    { re: /N[íi]vel\s+de\s+Aptid[ãa]o\s+em\s+Dom[íi]nio\s+aumenta\s+em\s+(\d+)/i, alvo: "aptidao.dom" },
    { re: /N[íi]vel\s+de\s+Aptid[ãa]o\s+em\s+Energia\s+Reversa\s+aumenta\s+em\s+(\d+)/i, alvo: "aptidao.er" }
];

/* Devolve [{alvo, valor, trecho}] — sugestões, sempre confirmadas pelo jogador */
function ler_efeitos(item) {
    var texto = [item.description || "", (item.bullets || []).join(" ")]
        .join(" ").replace(/<[^>]*>/g, " ");
    var achados = [];
    PADROES_EFEITO.forEach(function (p) {
        var m = texto.match(p.re);
        if (!m) { return; }
        var bruto = m[1].replace(",", ".");
        var valor = p.decimal ? parseFloat(bruto) : parseInt(bruto, 10);
        if (!valor && valor !== 0) { return; }
        if (achados.some(function (a) { return a.alvo === p.alvo; })) { return; }
        achados.push({ alvo: p.alvo, valor: valor, trecho: m[0].trim() });
    });
    return achados;
}
