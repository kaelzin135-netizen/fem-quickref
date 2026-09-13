/* ------------------------------------------------------------------------- */
/* Ficha automática — Feiticeiros & Maldições 2.5.2                            */
/* Todo valor derivado guarda o rastro das parcelas que o formaram.            */
/* ------------------------------------------------------------------------- */

var CHAVE_FICHA = "fem-ficha";

function ficha_nova() {
    var f = {
        nome: "", jogador: "", campanha: "", tecnica: "",
        nivel: 1, origem: "", especializacao: "",
        atributosBase: {}, atribCD: "for", atribJujutsu: "int",
        pericias: {}, resistencias: {}, ataques: {}, aptidoes: {},
        itens: [], anotacoes: "",
        pvPerdidos: 0, pePerdidos: 0, integridadePerdida: 0
    };
    ATRIBUTOS.forEach(function (a) { f.atributosBase[a.id] = 10; });
    PERICIAS.forEach(function (p) { f.pericias[p.id] = { t: false, m: false, outros: 0 }; });
    RESISTENCIAS.forEach(function (r) { f.resistencias[r.id] = { t: false, m: false, outros: 0 }; });
    ATAQUES.forEach(function (a) { f.ataques[a.id] = { attr: a.attrPadrao, t: true, outros: 0 }; });
    APTIDOES_NIVEL.forEach(function (a) { f.aptidoes[a.id] = 0; });
    return f;
}

var F = ficha_nova();

function salvar() {
    try { localStorage.setItem(CHAVE_FICHA, JSON.stringify(F)); } catch (e) { /* sem storage */ }
}

function carregar() {
    try {
        var bruto = localStorage.getItem(CHAVE_FICHA);
        if (!bruto) { return; }
        var salvo = JSON.parse(bruto);
        var base = ficha_nova();
        Object.keys(base).forEach(function (k) {
            if (salvo[k] !== undefined && salvo[k] !== null) { base[k] = salvo[k]; }
        });
        F = base;
    } catch (e) { /* ficha corrompida — segue com uma nova */ }
}

/* ------------------------------------------------------------------------- */
/* Cálculos — cada um devolve { total, partes: [{rotulo, valor}] }             */
/* ------------------------------------------------------------------------- */

function espec() {
    return ESPECIALIZACOES.filter(function (e) { return e.id === F.especializacao; })[0] || null;
}

function fmt(n) {
    var v = Math.round(n * 10) / 10;
    return (v >= 0 ? "+" : "") + v;
}

/* Todos os modificadores de um alvo, com a fonte que os deu */
function mods(alvo) {
    var saida = [];
    F.itens.forEach(function (item) {
        (item.mods || []).forEach(function (m) {
            if (m.alvo === alvo && m.valor) {
                saida.push({ rotulo: item.nome, valor: Number(m.valor) });
            }
        });
    });
    return saida;
}

function soma(partes) {
    return partes.reduce(function (t, p) { return t + p.valor; }, 0);
}

function resultado(partes) {
    partes = partes.filter(function (p) { return p.valor !== 0 || p.sempre; });
    return { total: soma(partes), partes: partes };
}

function metadeNivel() { return Math.floor((F.nivel || 1) / 2); }

function bt() {
    var partes = [{ rotulo: "nível " + F.nivel, valor: 1 + Math.ceil((F.nivel || 1) / 4), sempre: true }];
    return resultado(partes.concat(mods("bt")));
}

function valorAtributo(id) {
    var partes = [{ rotulo: "base", valor: Number(F.atributosBase[id]) || 0, sempre: true }];
    return resultado(partes.concat(mods("atributo." + id)));
}

function modAtributo(id) {
    var v = valorAtributo(id).total;
    return v >= 10 ? Math.floor((v - 10) / 2) : Math.ceil((v - 10) / 2);
}

function nomeAtributo(id) {
    var a = ATRIBUTOS.filter(function (x) { return x.id === id; })[0];
    return a ? a.nome : id;
}

function pvMax() {
    var e = espec();
    var mCon = modAtributo("con");
    var partes = [];
    if (e) {
        partes.push({ rotulo: e.nome + " (1º nível)", valor: e.pv1, sempre: true });
        partes.push({ rotulo: "Constituição", valor: mCon, sempre: true });
        if (F.nivel > 1) {
            partes.push({
                rotulo: (F.nivel - 1) + "× (" + e.pvPasso + " + " + mCon + " Con)",
                valor: (e.pvPasso + mCon) * (F.nivel - 1), sempre: true
            });
        }
    }
    return resultado(partes.concat(mods("pv")));
}

function peMax() {
    var e = espec();
    var partes = [];
    if (e) {
        partes.push({ rotulo: e.peNivel + "/nível × " + F.nivel, valor: e.peNivel * F.nivel, sempre: true });
        if (e.peSomaMod) {
            partes.push({
                rotulo: nomeAtributo(F.atribJujutsu) + " (uma vez)",
                valor: modAtributo(F.atribJujutsu), sempre: true
            });
        }
    }
    return resultado(partes.concat(mods("pe")));
}

function integridadeMax() {
    var partes = [{ rotulo: "igual ao PV máximo", valor: pvMax().total, sempre: true }];
    return resultado(partes.concat(mods("integridade")));
}

function defesa() {
    var partes = [
        { rotulo: "base", valor: 10, sempre: true },
        { rotulo: "Destreza", valor: modAtributo("des"), sempre: true },
        { rotulo: "½ nível", valor: metadeNivel(), sempre: true }
    ];
    return resultado(partes.concat(mods("defesa")));
}

function bonusTreino(reg) {
    var b = bt().total;
    if (reg.m) { return { valor: Math.floor(b * 1.5), rotulo: "mestre (1,5× " + b + ")" }; }
    if (reg.t) { return { valor: b, rotulo: "treinado (" + fmt(b) + ")" }; }
    return { valor: 0, rotulo: "sem treino" };
}

function pericia(id) {
    var p = PERICIAS.filter(function (x) { return x.id === id; })[0];
    var reg = F.pericias[id] || { t: false, m: false, outros: 0 };
    var treino = bonusTreino(reg);
    var partes = [
        { rotulo: nomeAtributo(p.attr), valor: modAtributo(p.attr), sempre: true },
        { rotulo: "½ nível", valor: metadeNivel(), sempre: true },
        { rotulo: treino.rotulo, valor: treino.valor, sempre: true }
    ];
    if (Number(reg.outros)) { partes.push({ rotulo: "outros", valor: Number(reg.outros) }); }
    return resultado(partes.concat(mods("pericia." + id)).concat(mods("pericia.todas")));
}

function resistencia(id) {
    var r = RESISTENCIAS.filter(function (x) { return x.id === id; })[0];
    var reg = F.resistencias[id] || { t: false, m: false, outros: 0 };
    var treino = bonusTreino(reg);
    var partes = [
        { rotulo: nomeAtributo(r.attr), valor: modAtributo(r.attr), sempre: true },
        { rotulo: "½ nível", valor: metadeNivel(), sempre: true },
        { rotulo: treino.rotulo, valor: treino.valor, sempre: true }
    ];
    if (Number(reg.outros)) { partes.push({ rotulo: "outros", valor: Number(reg.outros) }); }
    return resultado(partes.concat(mods("tr." + id)));
}

function ataque(id) {
    var reg = F.ataques[id] || { attr: "for", t: true, outros: 0 };
    var b = bt().total;
    var partes = [
        { rotulo: nomeAtributo(reg.attr), valor: modAtributo(reg.attr), sempre: true },
        { rotulo: "½ nível", valor: metadeNivel(), sempre: true },
        { rotulo: reg.t ? "treinado" : "sem treino", valor: reg.t ? b : 0, sempre: true }
    ];
    if (Number(reg.outros)) { partes.push({ rotulo: "outros", valor: Number(reg.outros) }); }
    return resultado(partes.concat(mods("ataque." + id)));
}

function atencao() {
    var partes = [
        { rotulo: "base", valor: 10, sempre: true },
        { rotulo: "Percepção", valor: pericia("percepcao").total, sempre: true }
    ];
    return resultado(partes.concat(mods("atencao")));
}

function iniciativa() {
    var partes = [{ rotulo: "Destreza", valor: modAtributo("des"), sempre: true }];
    return resultado(partes.concat(mods("iniciativa")));
}

function deslocamento() {
    var partes = [{ rotulo: "padrão", valor: 9, sempre: true }];
    return resultado(partes.concat(mods("deslocamento")));
}

function cdEspec() {
    var partes = [
        { rotulo: "base", valor: 10, sempre: true },
        { rotulo: "½ nível", valor: metadeNivel(), sempre: true },
        { rotulo: nomeAtributo(F.atribCD), valor: modAtributo(F.atribCD), sempre: true },
        { rotulo: "treinamento", valor: bt().total, sempre: true }
    ];
    return resultado(partes.concat(mods("cdEspec")));
}

function nivelAptidao(id) {
    var partes = [{ rotulo: "anotado", valor: Number(F.aptidoes[id]) || 0, sempre: true }];
    return resultado(partes.concat(mods("aptidao." + id)));
}

function grau() {
    var n = F.nivel;
    if (n <= 4) { return "4º grau"; }
    if (n <= 7) { return "3º grau"; }
    if (n <= 13) { return "2º grau"; }
    if (n <= 18) { return "1º grau"; }
    return "—";
}

/* ------------------------------------------------------------------------- */
/* Catálogo do livro — tudo que dá para adicionar com um clique                */
/* ------------------------------------------------------------------------- */

var CATALOGO = [];

function montar_catalogo() {
    function juntar(lista, categoria) {
        if (!lista) { return; }
        lista.forEach(function (item) {
            CATALOGO.push({
                nome: item.title, categoria: categoria, subtitulo: item.subtitle || "",
                descricao: item.description || "", bullets: item.bullets || [],
                referencia: item.reference || "", nivel: item.nivel || null
            });
        });
    }
    var pares = [
        [typeof data_base_lutador !== "undefined" && data_base_lutador, "Lutador · base"],
        [typeof data_opcoes_lutador !== "undefined" && data_opcoes_lutador, "Lutador · escolha"],
        [typeof data_hab_lutador !== "undefined" && data_hab_lutador, "Lutador"],
        [typeof data_base_combate !== "undefined" && data_base_combate, "Esp. em Combate · base"],
        [typeof data_opcoes_combate !== "undefined" && data_opcoes_combate, "Esp. em Combate · escolha"],
        [typeof data_hab_combate !== "undefined" && data_hab_combate, "Esp. em Combate"],
        [typeof data_base_tecnica !== "undefined" && data_base_tecnica, "Esp. em Técnica · base"],
        [typeof data_opcoes_tecnica !== "undefined" && data_opcoes_tecnica, "Esp. em Técnica · escolha"],
        [typeof data_hab_tecnica !== "undefined" && data_hab_tecnica, "Esp. em Técnica"],
        [typeof data_base_controlador !== "undefined" && data_base_controlador, "Controlador · base"],
        [typeof data_opcoes_controlador !== "undefined" && data_opcoes_controlador, "Controlador · escolha"],
        [typeof data_hab_controlador !== "undefined" && data_hab_controlador, "Controlador"],
        [typeof data_base_suporte !== "undefined" && data_base_suporte, "Suporte · base"],
        [typeof data_opcoes_suporte !== "undefined" && data_opcoes_suporte, "Suporte · escolha"],
        [typeof data_hab_suporte !== "undefined" && data_hab_suporte, "Suporte"],
        [typeof data_base_restringido !== "undefined" && data_base_restringido, "Restringido · base"],
        [typeof data_opcoes_restringido !== "undefined" && data_opcoes_restringido, "Restringido · escolha"],
        [typeof data_hab_restringido !== "undefined" && data_hab_restringido, "Restringido"],
        [typeof data_talento_geral !== "undefined" && data_talento_geral, "Talento geral"],
        [typeof data_talento_origem !== "undefined" && data_talento_origem, "Talento de origem"],
        [typeof data_apt_aura !== "undefined" && data_apt_aura, "Aptidão de Aura"],
        [typeof data_apt_controle !== "undefined" && data_apt_controle, "Aptidão de Controle e Leitura"],
        [typeof data_apt_dominio !== "undefined" && data_apt_dominio, "Aptidão de Domínio"],
        [typeof data_apt_barreira !== "undefined" && data_apt_barreira, "Aptidão de Barreira"],
        [typeof data_apt_reversa !== "undefined" && data_apt_reversa, "Aptidão de Energia Reversa"],
        [typeof data_apt_especial !== "undefined" && data_apt_especial, "Aptidão Especial"],
        [typeof data_interludio !== "undefined" && data_interludio, "Treino de interlúdio"]
    ];
    pares.forEach(function (par) { juntar(par[0], par[1]); });

    CATALOGO.forEach(function (c) {
        c.busca = normalize([c.nome, c.categoria, c.subtitulo, c.descricao,
            c.bullets.join(" ")].join(" "));
    });
}
