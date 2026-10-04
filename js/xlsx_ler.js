/* ------------------------------------------------------------------------- */
/* Leitor de .xlsx no navegador                                                */
/*                                                                             */
/* Um .xlsx é um ZIP de XMLs. Dá para ler tudo aqui, sem biblioteca e sem       */
/* servidor, usando DecompressionStream para inflar as entradas.               */
/*                                                                             */
/* As NOTAS DE CÉLULA importam tanto quanto os valores: é nelas que a mesa      */
/* escreve a regra do homebrew — a técnica, os votos, a habilidade de clã.      */
/* ------------------------------------------------------------------------- */

/* ------------------------------------------------------------------ zip -- */

async function _zipEntradas(buffer) {
    var dv = new DataView(buffer), u8 = new Uint8Array(buffer), dec = new TextDecoder();

    var eocd = -1;
    for (var i = u8.length - 22; i >= 0 && i > u8.length - 70000; i--) {
        if (dv.getUint32(i, true) === 0x06054b50) { eocd = i; break; }
    }
    if (eocd < 0) { throw new Error("Não parece um .xlsx (fim do ZIP não encontrado)."); }

    var total = dv.getUint16(eocd + 10, true);
    var p = dv.getUint32(eocd + 16, true);
    var ent = {};
    for (var k = 0; k < total; k++) {
        if (dv.getUint32(p, true) !== 0x02014b50) { break; }
        var nL = dv.getUint16(p + 28, true),
            eL = dv.getUint16(p + 30, true),
            cL = dv.getUint16(p + 32, true);
        var nome = dec.decode(u8.subarray(p + 46, p + 46 + nL));
        ent[nome] = {
            metodo: dv.getUint16(p + 10, true),
            comp: dv.getUint32(p + 20, true),
            off: dv.getUint32(p + 42, true)
        };
        p += 46 + nL + eL + cL;
    }
    return { ent: ent, dv: dv, u8: u8, dec: dec };
}

async function _zipLer(z, nome) {
    var e = z.ent[nome];
    if (!e) { return null; }
    var lnL = z.dv.getUint16(e.off + 26, true), leL = z.dv.getUint16(e.off + 28, true);
    var ini = e.off + 30 + lnL + leL;
    var dados = z.u8.subarray(ini, ini + e.comp);
    if (e.metodo === 0) { return z.dec.decode(dados); }
    var fluxo = new Blob([dados]).stream().pipeThrough(new DecompressionStream("deflate-raw"));
    return await new Response(fluxo).text();
}

/* ------------------------------------------------------------------ xml -- */

function _xml(texto) {
    return new DOMParser().parseFromString(texto, "application/xml");
}

/* "BH13" -> {col:"BH", lin:13} */
function _partes(ref) {
    var m = /^([A-Z]+)(\d+)$/.exec(ref);
    return m ? { col: m[1], lin: Number(m[2]) } : null;
}

/* --------------------------------------------------------------- leitura -- */

/* Devolve {abas:[{nome, celulas:{A1:valor}, notas:{A1:texto}}], ordem:[nomes]} */
async function lerXlsx(arquivo) {
    var z = await _zipEntradas(await arquivo.arrayBuffer());

    /* textos compartilhados */
    var compart = [];
    var ssTexto = await _zipLer(z, "xl/sharedStrings.xml");
    if (ssTexto) {
        var ss = _xml(ssTexto);
        Array.prototype.forEach.call(ss.getElementsByTagName("si"), function (si) {
            var t = Array.prototype.map.call(si.getElementsByTagName("t"), function (n) {
                return n.textContent;
            }).join("");
            compart.push(t);
        });
    }

    /* nome e ordem das abas, e o arquivo de cada uma */
    var wb = _xml(await _zipLer(z, "xl/workbook.xml"));
    var rels = _xml(await _zipLer(z, "xl/_rels/workbook.xml.rels"));
    var alvoPorId = {};
    Array.prototype.forEach.call(rels.getElementsByTagName("Relationship"), function (r) {
        alvoPorId[r.getAttribute("Id")] = r.getAttribute("Target").replace(/^\/?xl\//, "");
    });

    var abas = [];
    var nós = wb.getElementsByTagName("sheet");
    for (var i = 0; i < nós.length; i++) {
        var s = nós[i];
        var rid = s.getAttribute("r:id") || s.getAttributeNS(
            "http://schemas.openxmlformats.org/officeDocument/2006/relationships", "id");
        var caminho = alvoPorId[rid];
        if (!caminho) { continue; }
        if (caminho.indexOf("worksheets/") !== 0) { caminho = "worksheets/" + caminho.split("/").pop(); }

        var folha = _xml(await _zipLer(z, "xl/" + caminho));
        var celulas = {};
        Array.prototype.forEach.call(folha.getElementsByTagName("c"), function (c) {
            var ref = c.getAttribute("r");
            var tipo = c.getAttribute("t");
            var v = c.getElementsByTagName("v")[0];
            var valor = null;
            if (tipo === "s" && v) { valor = compart[Number(v.textContent)]; }
            else if (tipo === "inlineStr") {
                var is = c.getElementsByTagName("t");
                valor = is.length ? is[0].textContent : null;
            } else if (tipo === "b" && v) { valor = v.textContent === "1"; }
            else if (v) {
                var n = Number(v.textContent);
                valor = isNaN(n) ? v.textContent : n;
            }
            if (valor !== null && valor !== "") { celulas[ref] = valor; }
        });

        /* notas da aba: o rels da folha aponta para o comments*.xml dela */
        var notas = {};
        var relFolha = await _zipLer(z, "xl/worksheets/_rels/" + caminho.split("/").pop() + ".rels");
        if (relFolha) {
            var rf = _xml(relFolha);
            var alvos = Array.prototype.map.call(rf.getElementsByTagName("Relationship"), function (r) {
                return r.getAttribute("Target");
            }).filter(function (t) { return /comments\d*\.xml$/.test(t); });
            for (var a = 0; a < alvos.length; a++) {
                var cTexto = await _zipLer(z, "xl/" + alvos[a].replace(/^\.\.\//, ""));
                if (!cTexto) { continue; }
                var cx = _xml(cTexto);
                Array.prototype.forEach.call(cx.getElementsByTagName("comment"), function (cm) {
                    var ref = cm.getAttribute("ref");
                    var txt = Array.prototype.map.call(cm.getElementsByTagName("t"), function (n) {
                        return n.textContent;
                    }).join("");
                    txt = txt.replace(/[ \t]+/g, " ").trim();
                    if (txt) { notas[ref] = txt; }
                });
            }
        }

        abas.push({
            nome: s.getAttribute("name"),
            oculta: s.getAttribute("state") === "hidden",
            celulas: celulas,
            notas: notas
        });
    }

    return { abas: abas };
}

/* ------------------------------------------------------------- auxiliares -- */

/* Compara sem acento: a planilha escreve "FORÇA" e "Direção", e comparar
   com toLowerCase() simples nunca casaria com "forca" e "direcao". */
function _semAcento(s) {
    return String(s == null ? "" : s)
        .toLowerCase()
        .normalize("NFD").replace(/[̀-ͯ]/g, "")
        .replace(/\s+/g, " ").trim();
}

/* Procura um rótulo na aba e devolve a referência da célula dele. */
function acharRotulo(aba, texto, exato) {
    var alvo = _semAcento(texto);
    var achados = [];
    Object.keys(aba.celulas).forEach(function (ref) {
        var v = aba.celulas[ref];
        if (typeof v !== "string") { return; }
        var n = _semAcento(v);
        if (exato ? n === alvo : n.indexOf(alvo) >= 0) { achados.push(ref); }
    });
    achados.sort(function (a, b) {
        var pa = _partes(a), pb = _partes(b);
        return pa.lin - pb.lin || pa.col.length - pb.col.length || (pa.col < pb.col ? -1 : 1);
    });
    return achados;
}

/* Lê para a direita a partir de uma célula, pulando vazias, até achar valor. */
function valorAoLado(aba, ref, limite) {
    var p = _partes(ref);
    if (!p) { return null; }
    var cols = _colsDaLinha(aba, p.lin);
    var i = cols.indexOf(p.col);
    if (i < 0) { return null; }
    for (var k = i + 1; k < cols.length && k <= i + (limite || 12); k++) {
        var v = aba.celulas[cols[k] + p.lin];
        if (v !== undefined && v !== "") { return v; }
    }
    return null;
}

function _colsDaLinha(aba, lin) {
    var cols = [];
    Object.keys(aba.celulas).forEach(function (ref) {
        var p = _partes(ref);
        if (p && p.lin === lin) { cols.push(p.col); }
    });
    return cols.sort(function (a, b) {
        return a.length - b.length || (a < b ? -1 : 1);
    });
}

/* Todas as células de uma coluna, em ordem de linha. */
function colunaToda(aba, col) {
    var saida = [];
    Object.keys(aba.celulas).forEach(function (ref) {
        var p = _partes(ref);
        if (p && p.col === col) { saida.push({ lin: p.lin, ref: ref, valor: aba.celulas[ref] }); }
    });
    return saida.sort(function (a, b) { return a.lin - b.lin; });
}
