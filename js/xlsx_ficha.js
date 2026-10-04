/* ------------------------------------------------------------------------- */
/* Interpretador: planilha do F&M -> ficha do site                             */
/*                                                                             */
/* A leitura é guiada por RÓTULO, não por coordenada fixa: procura "FORÇA",    */
/* "PERÍCIAS", "NOME DA TÉCNICA" e lê o que está perto. Assim uma planilha com */
/* uma linha a mais ou a menos continua sendo entendida.                       */
/*                                                                             */
/* O homebrew vive nas NOTAS DE CÉLULA. Toda habilidade que não existe no      */
/* catálogo do livro entra como item próprio com o texto da nota — é assim que */
/* uma técnica ou habilidade de clã inventada pela mesa chega inteira.         */
/* ------------------------------------------------------------------------- */

function _norm(s) {
    return String(s == null ? "" : s)
        .toLowerCase()
        .normalize("NFD").replace(/[̀-ͯ]/g, "")
        .replace(/\s+/g, " ").trim();
}

/* "Empolgação. - NVL0" -> "Empolgação" */
function _nomeLimpo(s) {
    return String(s || "")
        .replace(/\s*[-–—]\s*(nvl|nível|nivel)\s*\.?\s*\d*\s*$/i, "")
        .replace(/\s*[-–—]\s*herdado\s*$/i, "")
        .replace(/\s*\.\s*$/, "")
        .trim();
}

function _ehVerdade(v) {
    return v === true || _norm(v) === "true" || _norm(v) === "verdadeiro" || v === 1;
}

/* ------------------------------------------------------------ localizar -- */

function _abaPrincipal(dados) {
    var melhor = null, pontos = -1;
    dados.abas.forEach(function (a) {
        var p = 0;
        ["pericias", "perícias", "jogadas de ataque", "testes de resistencia",
         "forca", "força", "atencao", "atenção"].forEach(function (r) {
            if (acharRotulo(a, r).length) { p++; }
        });
        if (p > pontos) { pontos = p; melhor = a; }
    });
    return pontos >= 3 ? melhor : null;
}

function _abaPor(dados, pedaco) {
    var alvo = _norm(pedaco);
    return dados.abas.filter(function (a) { return _norm(a.nome).indexOf(alvo) >= 0; })[0] || null;
}

/* Valor logo abaixo de um rótulo, pulando linhas de cabeçalho vazias. */
function _valorAbaixo(aba, ref, saltos) {
    var m = /^([A-Z]+)(\d+)$/.exec(ref);
    if (!m) { return null; }
    for (var d = 1; d <= (saltos || 4); d++) {
        var v = aba.celulas[m[1] + (Number(m[2]) + d)];
        if (v !== undefined && v !== "") { return v; }
    }
    return null;
}

function _buscaValor(aba, rotulo, exato) {
    var refs = acharRotulo(aba, rotulo, exato);
    for (var i = 0; i < refs.length; i++) {
        var v = valorAoLado(aba, refs[i]);
        if (v !== null && v !== undefined && v !== "") { return v; }
    }
    return null;
}

/* ------------------------------------------------------------- atributos -- */

var _ATRIB_ROTULO = {
    "forca": "for", "destreza": "des", "constituicao": "con",
    "inteligencia": "int", "sabedoria": "sab", "presenca": "pre"
};

/* Índice de coluna: "A"=0, "Z"=25, "AA"=26. */
function _iCol(col) {
    var n = 0;
    for (var i = 0; i < col.length; i++) { n = n * 26 + (col.charCodeAt(i) - 64); }
    return n - 1;
}

/* Números numa janela de linhas e colunas a partir de uma célula. */
function _numerosPerto(aba, ref, linhas, colunas) {
    var m = /^([A-Z]+)(\d+)$/.exec(ref);
    if (!m) { return []; }
    var c0 = _iCol(m[1]), l0 = Number(m[2]);
    var achados = [];
    Object.keys(aba.celulas).forEach(function (r) {
        var q = /^([A-Z]+)(\d+)$/.exec(r);
        if (!q) { return; }
        var dl = Number(q[2]) - l0, dc = _iCol(q[1]) - c0;
        if (dl < 1 || dl > linhas || dc < 0 || dc > colunas) { return; }
        var v = aba.celulas[r];
        if (typeof v === "number") { achados.push({ dl: dl, dc: dc, v: v, ref: r }); }
    });
    achados.sort(function (a, b) { return a.dl - b.dl || a.dc - b.dc; });
    return achados;
}

/* O rótulo do atributo fica numa célula mesclada, que nem sempre é a
   coluna do valor — por isso a busca varre uma janela, não só a coluna. */
function _lerAtributos(aba, rel) {
    var saida = {};
    Object.keys(_ATRIB_ROTULO).forEach(function (rot) {
        var id = _ATRIB_ROTULO[rot];
        var refs = acharRotulo(aba, rot, true);
        if (!refs.length) { return; }

        var perto = _numerosPerto(aba, refs[0], 3, 4);
        /* o primeiro número é o Valor; o seguinte, na mesma linha, é o Mod. */
        var valor = perto.filter(function (x) { return x.v >= 1 && x.v <= 40; })[0];
        if (valor) { saida[id] = valor.v; return; }

        /* valor em branco: deduz pelo modificador, que é pequeno e pode ser negativo */
        var mod = perto[0];
        if (mod && mod.v >= -5 && mod.v <= 10) {
            saida[id] = 10 + mod.v * 2;
            rel.deduzidos.push("O valor de " + rot + " estava vazio na planilha; deduzi " +
                saida[id] + " a partir do modificador " + (mod.v >= 0 ? "+" : "") + mod.v + ".");
        }
    });
    return saida;
}

/* --------------------------------------------------------------- perícias -- */

function _lerPericias(aba, rel) {
    var saida = {};
    PERICIAS.forEach(function (p) {
        var refs = acharRotulo(aba, _norm(p.nome), false).filter(function (ref) {
            var v = aba.celulas[ref];
            /* "Ofício (Ferreiro)" casa com "Ofício"; "Ofício (__)" não conta */
            return typeof v === "string" && _norm(_nomeLimpo(v)).indexOf(_norm(p.nome)) === 0
                && v.indexOf("__") < 0;
        });
        if (!refs.length) { return; }
        var m = /^([A-Z]+)(\d+)$/.exec(refs[0]);
        var lin = Number(m[2]), cNome = _iCol(m[1]);

        /* A planilha tem DUAS colunas de perícia lado a lado. Os booleanos
           desta perícia são os que ficam entre o nome dela e o nome da
           próxima perícia na mesma linha. */
        var limite = Infinity;
        Object.keys(aba.celulas).forEach(function (ref) {
            var q = /^([A-Z]+)(\d+)$/.exec(ref);
            if (!q || Number(q[2]) !== lin) { return; }
            var c = _iCol(q[1]);
            if (c <= cNome) { return; }
            var v = aba.celulas[ref];
            if (typeof v !== "string") { return; }
            var outra = PERICIAS.filter(function (o) {
                return o.id !== p.id && _norm(_nomeLimpo(v)).indexOf(_norm(o.nome)) === 0;
            })[0];
            if (outra && c < limite) { limite = c; }
        });

        var booleanos = [];
        Object.keys(aba.celulas).forEach(function (ref) {
            var q = /^([A-Z]+)(\d+)$/.exec(ref);
            if (!q || Number(q[2]) !== lin) { return; }
            var c = _iCol(q[1]);
            if (c <= cNome || c >= limite) { return; }
            var v = aba.celulas[ref];
            if (typeof v === "boolean" || _norm(v) === "true" || _norm(v) === "false") {
                booleanos.push({ c: c, v: _ehVerdade(v) });
            }
        });
        booleanos.sort(function (a, b) { return a.c - b.c; });

        var reg = { t: false, m: false, outros: 0 };
        if (booleanos.length >= 2) {
            reg.t = booleanos[0].v;
            reg.m = booleanos[1].v;
            if (reg.m) { reg.t = true; }
        } else if (booleanos.length === 1) {
            reg.t = booleanos[0].v;
        }
        saida[p.id] = reg;
    });

    var achadas = Object.keys(saida).length;
    if (achadas < PERICIAS.length) {
        rel.avisos.push("Encontrei " + achadas + " das " + PERICIAS.length +
            " perícias; as demais ficaram no padrão.");
    }
    return saida;
}

/* ------------------------------------------------------------ habilidades -- */

/* Casa com o catálogo do livro; o que não casar vira homebrew com a nota. */
/* Acha a coluna da lista de habilidades: o cabeçalho "Nome" que tem
   "Atual", "Máx." e "Custo" à direita. Sem isso, pegar toda célula com
   nota traria os rótulos de RD e as caixas da planilha junto. */
function _colunaDasHabilidades(aba) {
    var achada = null;
    acharRotulo(aba, "nome", true).forEach(function (ref) {
        if (achada) { return; }
        var m = /^([A-Z]+)(\d+)$/.exec(ref);
        if (!m) { return; }
        var lin = Number(m[2]), c0 = _iCol(m[1]);
        var vizinhos = [];
        Object.keys(aba.celulas).forEach(function (r) {
            var q = /^([A-Z]+)(\d+)$/.exec(r);
            if (!q || Number(q[2]) !== lin) { return; }
            var c = _iCol(q[1]);
            if (c > c0 && c <= c0 + 14 && typeof aba.celulas[r] === "string") {
                vizinhos.push(_norm(aba.celulas[r]));
            }
        });
        var tem = function (x) { return vizinhos.some(function (v) { return v.indexOf(x) === 0; }); };
        if (tem("atual") && (tem("max") || tem("máx")) && tem("custo")) {
            achada = { col: c0, linha: lin };
        }
    });
    return achada;
}

function _lerHabilidades(aba, rel) {
    var itens = [];
    var vistos = {};
    var bloco = _colunaDasHabilidades(aba);

    Object.keys(aba.notas).forEach(function (ref) {
        if (bloco) {
            var q = /^([A-Z]+)(\d+)$/.exec(ref);
            /* só o que está na coluna da lista, abaixo do cabeçalho */
            if (!q || _iCol(q[1]) !== bloco.col || Number(q[2]) <= bloco.linha) { return; }
        }
        var rotulo = aba.celulas[ref];
        if (typeof rotulo !== "string" || rotulo.length < 3) { return; }
        var nome = _nomeLimpo(rotulo);
        if (!nome || nome.length > 60) { return; }
        if (vistos[_norm(nome)]) { return; }
        /* rótulos de estrutura da planilha não são habilidade */
        if (/^(nome|atual|m[áa]x|custo|n[íi]vel|total|pericia|per[íi]cia|perdidos|outros)$/i.test(nome)) { return; }
        /* siglas em caixa alta são rótulos de tabela (COR, IMP, KAMO…) */
        if (nome.length <= 10 && nome === nome.toUpperCase() && !/\d/.test(nome)) { return; }
        vistos[_norm(nome)] = true;

        var nota = aba.notas[ref];
        var doLivro = _acharNoCatalogo(nome);

        if (doLivro) {
            var item = {
                nome: doLivro.nome, categoria: doLivro.categoria,
                descricao: doLivro.descricao, bullets: (doLivro.bullets || []).slice(),
                referencia: doLivro.referencia,
                mods: (typeof ler_efeitos === "function" ? ler_efeitos(doLivro) : []).map(function (e) {
                    return { alvo: e.alvo, valor: e.valor };
                })
            };
            if (nota) { item.bullets.push("<b>Nota da planilha.</b> " + nota); }
            itens.push(item);
            rel.doLivro.push(doLivro.nome);
        } else {
            itens.push({
                nome: nome,
                categoria: "Homebrew",
                descricao: nota ? nota.slice(0, 90).replace(/\s+\S*$/, "") : "Anotado na planilha original.",
                bullets: nota ? _quebrarNota(nota) : ["Sem texto na planilha."],
                referencia: "Nota da planilha original.",
                mods: []
            });
            rel.homebrew.push(nome);
        }
    });

    return itens;
}

/* A planilha escreve o nome curto; o catálogo às vezes usa um prefixo
   ("Manobra: Ajuste") ou o nome vem com um sufixo de tipo ("Aura elemental
   Choc"). Tenta nessa ordem, da correspondência mais segura para a mais
   frouxa, e nunca abaixo de 6 letras para não casar por acaso. */
function _acharNoCatalogo(nome) {
    if (typeof CATALOGO === "undefined") { return null; }
    var alvo = _norm(nome);

    var exato = CATALOGO.filter(function (c) { return _norm(c.nome) === alvo; })[0];
    if (exato) { return exato; }

    var semPrefixo = CATALOGO.filter(function (c) {
        var partes = String(c.nome).split(":");
        return partes.length > 1 && _norm(partes.slice(1).join(":")) === alvo;
    })[0];
    if (semPrefixo) { return semPrefixo; }

    if (alvo.length >= 6) {
        var porInicio = CATALOGO.filter(function (c) {
            var n = _norm(c.nome);
            return n.length >= 6 && alvo.indexOf(n) === 0;
        }).sort(function (a, b) { return b.nome.length - a.nome.length; })[0];
        if (porInicio) { return porInicio; }
    }
    return null;
}

/* A nota costuma vir em parágrafos; cada um vira um marcador. */
function _quebrarNota(texto) {
    var partes = String(texto).split(/\n{2,}|\n(?=[•\-•])/)
        .map(function (p) { return p.replace(/^\s*[•\-•]\s*/, "").trim(); })
        .filter(function (p) { return p.length > 1; });
    return partes.length ? partes : [String(texto).trim()];
}

/* ------------------------------------------------------------------ geral -- */

function interpretarPlanilha(dados) {
    var rel = { doLivro: [], homebrew: [], deduzidos: [], avisos: [], abas: [] };
    dados.abas.forEach(function (a) {
        rel.abas.push(a.nome + (a.oculta ? " (oculta)" : ""));
    });

    var principal = _abaPrincipal(dados);
    if (!principal) {
        throw new Error("Não achei a aba da ficha nesta planilha. " +
            "Ela precisa ter as perícias e os atributos, como o modelo do F&M.");
    }

    var f = ficha_nova();

    /* --- identidade --- */
    var mapa = [
        ["nome", "nome"], ["jogador", "jogador"], ["campanha", "campanha"],
        ["tecnica", "técnica"]
    ];
    mapa.forEach(function (par) {
        var v = _buscaValor(principal, par[1], true);
        if (v) { f[par[0]] = String(v); }
    });

    var espec = _buscaValor(principal, "especialização", true);
    if (espec) {
        var e = ESPECIALIZACOES.filter(function (x) { return _norm(x.nome) === _norm(espec); })[0];
        if (e) { f.especializacao = e.id; }
        else { rel.avisos.push("Especialização \"" + espec + "\" não bateu com nenhuma do livro."); }
    }

    var orig = _buscaValor(principal, "origem", true);
    if (orig) {
        var o = ORIGENS.filter(function (x) {
            return _norm(x.nome) === _norm(orig) || _norm(x.nome).indexOf(_norm(orig)) === 0;
        })[0];
        if (o) { f.origem = o.id; }
        else { rel.avisos.push("Origem \"" + orig + "\" não bateu com nenhuma do livro."); }
    }

    var xp = _buscaValor(principal, "experiência", true);
    if (typeof xp === "number") { f.experiencia = xp; }

    /* --- atributos --- */
    var at = _lerAtributos(principal, rel);
    Object.keys(at).forEach(function (k) { f.atributosBase[k] = at[k]; });

    /* --- nível: muitas planilhas deixam a célula vazia, então deduzo do PV --- */
    var nivel = _buscaValor(principal, "nível", true);
    if (typeof nivel === "number" && nivel >= 1 && nivel <= 20) {
        f.nivel = nivel;
    } else {
        f.nivel = _deduzirNivel(principal, f, rel);
    }

    /* --- perícias --- */
    var per = _lerPericias(principal, rel);
    Object.keys(per).forEach(function (k) { f.pericias[k] = per[k]; });

    /* --- habilidades e homebrew --- */
    var itens = _lerHabilidades(principal, rel);

    /* a aba do perfil costuma trazer técnica, votos e aptidões, tudo em nota */
    var perfil = _abaPor(dados, "perfil");
    if (perfil) {
        itens = itens.concat(_lerHabilidades(perfil, rel));
        var nt = _buscaValor(perfil, "nome da técnica", true);
        if (nt && !f.tecnica) { f.tecnica = String(nt); }

        /* o atributo-chave decide a CD de Especialização e a Amaldiçoada */
        var princ = _buscaValor(perfil, "atributo principal", true);
        if (princ) {
            var a = ATRIBUTOS.filter(function (x) {
                return _norm(x.nome) === _norm(princ) || _norm(x.curto) === _norm(princ);
            })[0];
            if (a) {
                f.atribCD = a.id;
                f.atribJujutsu = a.id;
            } else {
                rel.avisos.push("Atributo principal \"" + princ + "\" não reconhecido; " +
                    "a CD ficou no padrão.");
            }
        }
    }
    f.itens = itens;

    /* --- aptidões: a linha de cinco números sob "níveis de aptidão" --- */
    if (perfil) {
        var refs = acharRotulo(perfil, "níveis de aptidão");
        if (refs.length) {
            var m = /^([A-Z]+)(\d+)$/.exec(refs[0]);
            for (var d = 1; d <= 3; d++) {
                var nums = [];
                Object.keys(perfil.celulas).forEach(function (ref) {
                    var q = /^([A-Z]+)(\d+)$/.exec(ref);
                    if (q && Number(q[2]) === Number(m[2]) + d &&
                        typeof perfil.celulas[ref] === "number") {
                        nums.push({ col: q[1], v: perfil.celulas[ref] });
                    }
                });
                if (nums.length === 5) {
                    nums.sort(function (a, b) {
                        return a.col.length - b.col.length || (a.col < b.col ? -1 : 1);
                    });
                    APTIDOES_NIVEL.forEach(function (a, i) { f.aptidoes[a.id] = nums[i].v; });
                    break;
                }
            }
        }
    }

    /* --- registro: aparência, história e inventário --- */
    var reg = _abaPor(dados, "registro");
    if (reg) {
        CAMPOS_APARENCIA.forEach(function (c) {
            var v = _buscaValor(reg, c.nome, true);
            if (v) { f.aparencia[c.id] = String(v); }
        });
        [["personalidade", "traços de personalidade"], ["ideais", "ideais"],
         ["complicacoes", "complicações"], ["ligacoes", "ligações"],
         ["dominioInato", "domínio inato"]].forEach(function (par) {
            var refs = acharRotulo(reg, par[1], true);
            if (!refs.length) { return; }
            var v = _valorAbaixo(reg, refs[0], 3);
            if (typeof v === "string" && v.length > 10) { f.historia[par[0]] = v; }
        });
    }

    /* --- treinos --- */
    var tre = _abaPor(dados, "treinamento");
    if (tre) {
        TREINAMENTOS.forEach(function (t) {
            var refs = acharRotulo(tre, _norm(t.nome), false);
            if (!refs.length) { return; }
            var m = /^([A-Z]+)(\d+)$/.exec(refs[0]);
            var marcadas = [];
            for (var d = 1; d <= 5 && marcadas.length < 4; d++) {
                Object.keys(tre.celulas).forEach(function (ref) {
                    var q = /^([A-Z]+)(\d+)$/.exec(ref);
                    if (!q || Number(q[2]) !== Number(m[2]) + d) { return; }
                    var v = tre.celulas[ref];
                    if (typeof v === "boolean" || _norm(v) === "true" || _norm(v) === "false") {
                        marcadas.push(_ehVerdade(v));
                    }
                });
            }
            if (marcadas.length >= 4) { f.treinos[t.id] = marcadas.slice(0, 4); }
        });
    }

    return { ficha: f, relatorio: rel };
}

/* O nível quase nunca está preenchido. O PV máximo o entrega: o livro dá
   PV = pv1 + modCon + (nível-1) × (passo + modCon). */
function _deduzirNivel(aba, f, rel) {
    var e = ESPECIALIZACOES.filter(function (x) { return x.id === f.especializacao; })[0];
    /* há três blocos "MÁXIMOS" (vida, energia e integridade); o de vida é
       o que fica mais à esquerda na primeira linha em que eles aparecem */
    var pvRefs = acharRotulo(aba, "máximos", true);
    var pvMaximo = null;
    if (pvRefs.length) {
        var linTopo = Math.min.apply(null, pvRefs.map(function (r) {
            return Number(/^([A-Z]+)(\d+)$/.exec(r)[2]);
        }));
        var naLinha = pvRefs.filter(function (r) {
            return Number(/^([A-Z]+)(\d+)$/.exec(r)[2]) === linTopo;
        }).sort(function (a, b) {
            return _iCol(/^([A-Z]+)/.exec(a)[1]) - _iCol(/^([A-Z]+)/.exec(b)[1]);
        });
        for (var i = 0; i < naLinha.length && pvMaximo === null; i++) {
            var perto = _numerosPerto(aba, naLinha[i], 3, 3);
            if (perto.length) { pvMaximo = perto[0].v; }
        }
    }
    var mCon = Math.floor(((Number(f.atributosBase.con) || 10) - 10) / 2);

    if (e && pvMaximo !== null) {
        for (var n = 1; n <= 20; n++) {
            if (e.pv1 + mCon + (n - 1) * (e.pvPasso + mCon) === pvMaximo) {
                rel.deduzidos.push("Nível " + n + " deduzido do PV máximo " + pvMaximo + ".");
                return n;
            }
        }
    }

    /* A ficha costuma trazer "Nível/2" no detalhamento da Defesa, o que
       estreita para dois níveis — melhor do que desistir e deixar em 1. */
    var meio = _buscaValor(aba, "nível/2", true);
    if (typeof meio === "number" && meio >= 0 && meio <= 10) {
        var provavel = meio * 2;
        if (provavel < 1) { provavel = 1; }
        rel.avisos.push("O nível não estava preenchido e o PV máximo" +
            (pvMaximo === null ? "" : " (" + pvMaximo + ")") +
            " não bate com a fórmula — provavelmente há um bônus de \"Outros\" nele. " +
            "Usei o \"Nível/2\" da Defesa, que dá nível " + provavel + " ou " + (provavel + 1) +
            "; deixei " + provavel + ". Confira no topo da ficha.");
        return provavel;
    }

    rel.avisos.push("Não consegui determinar o nível; deixei em 1. Confira no topo da ficha.");
    return 1;
}
