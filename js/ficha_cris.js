/* ------------------------------------------------------------------------- */
/* Assistente — aplica o que o livro entrega sozinho e diz o que falta escolher */
/* ------------------------------------------------------------------------- */

/* ---------------------------------------------- habilidades automáticas --- */

function baseDaEspecializacao() {
    var mapa = {
        lutador: typeof data_base_lutador !== "undefined" && data_base_lutador,
        combate: typeof data_base_combate !== "undefined" && data_base_combate,
        tecnica: typeof data_base_tecnica !== "undefined" && data_base_tecnica,
        controlador: typeof data_base_controlador !== "undefined" && data_base_controlador,
        suporte: typeof data_base_suporte !== "undefined" && data_base_suporte,
        restringido: typeof data_base_restringido !== "undefined" && data_base_restringido
    };
    return mapa[F.especializacao] || [];
}

function nivelDoItemBase(item) {
    var m = (item.subtitle || "").match(/(\d+)[ºo]\s*n[íi]vel/i);
    return m ? parseInt(m[1], 10) : 1;
}

/* Tudo que o livro entrega sozinho até o nível atual, ainda não anotado */
function base_pendente() {
    var jaTem = {};
    F.itens.forEach(function (i) { jaTem[i.nome] = true; });
    return baseDaEspecializacao().filter(function (item) {
        return nivelDoItemBase(item) <= F.nivel && !jaTem[item.title];
    });
}

function aplicar_base() {
    var e = espec();
    if (!e) { return 0; }
    var novos = base_pendente();
    novos.forEach(function (item) {
        F.itens.push({
            nome: item.title,
            categoria: e.nome + " · base",
            descricao: item.description || "",
            bullets: item.bullets || [],
            referencia: item.reference || "",
            mods: ler_efeitos(item).map(function (ef) {
                return { alvo: ef.alvo, valor: ef.valor };
            })
        });
    });
    return novos.length;
}

/* ------------------------------------------------------- o que falta ----- */

function niveisAptidaoEsperados(n) {
    var t = 0;
    for (var i = 2; i <= n; i++) {
        if (i % 2 === 0) { t++; }
        if (i === 10 || i === 20) { t++; }
    }
    return t;
}

function feiticosEsperados(n) {
    var t = 2;
    for (var i = 2; i <= n; i++) {
        if (i % 2 === 0) { t++; }
        if (i === 10 || i === 20) { t++; }
    }
    return t;
}

function contarCategoria(teste) {
    return F.itens.filter(function (i) { return teste(i.categoria || ""); }).length;
}

function pendencias() {
    var e = espec();
    var n = F.nivel;
    var lista = [];
    if (!e) {
        return [{ ok: false, texto: "Escolha uma especialização para o assistente funcionar." }];
    }

    var faltaBase = base_pendente().length;
    lista.push({
        ok: faltaBase === 0,
        texto: faltaBase === 0
            ? "Habilidades base do " + e.nome + " até o " + n + "º nível: todas anotadas."
            : faltaBase + " habilidade(s) base ainda não anotada(s) — o botão acima resolve."
    });

    var escolhidas = contarCategoria(function (c) {
        return c === e.nome || c.indexOf("Talento") === 0 || c.indexOf("· escolha") > 0;
    });
    lista.push({
        ok: escolhidas >= n - 1,
        texto: "Habilidades de especialização ou talentos escolhidos: <b>" + escolhidas +
            "</b> de <b>" + (n - 1) + "</b> (uma por nível, do 2º ao " + n + "º)."
    });

    if (!e.semAptidoes) {
        var apt = contarCategoria(function (c) { return c.indexOf("Aptidão") === 0; });
        lista.push({
            ok: apt >= n - 1,
            texto: "Aptidões amaldiçoadas: <b>" + apt + "</b> de <b>" + (n - 1) + "</b> (uma por nível)."
        });

        var somaApt = APTIDOES_NIVEL.reduce(function (t, a) {
            return t + (Number(F.aptidoes[a.id]) || 0);
        }, 0);
        var espApt = niveisAptidaoEsperados(n);
        lista.push({
            ok: somaApt >= espApt,
            texto: "Níveis de aptidão distribuídos: <b>" + somaApt + "</b> de <b>" + espApt +
                "</b> (um por nível par, com extra no 10º e no 20º)."
        });

        lista.push({
            ok: true,
            texto: "Feitiços esperados neste nível: <b>" + feiticosEsperados(n) +
                "</b>, com acesso até o nível <b>" + (n <= 4 ? 1 : n <= 8 ? 2 : n <= 12 ? 3 : n <= 16 ? 4 : 5) +
                "</b> de Feitiço."
        });
    } else {
        var dadivas = contarCategoria(function (c) { return c.indexOf("Restringido · escolha") === 0; });
        lista.push({
            ok: dadivas >= Math.floor(n / 4),
            texto: "Dádivas do Céu: <b>" + dadivas + "</b> de <b>" + Math.floor(n / 4) +
                "</b> (uma no 4º nível e a cada 4 níveis)."
        });
    }

    lista.push({
        ok: true,
        texto: "Pontos de atributo recebidos até aqui: <b>" + Math.floor(n / 4) * 2 +
            "</b> (2 a cada 4 níveis) — some-os direto nos valores dos atributos."
    });

    if (n >= 10) {
        var temMestre = PERICIAS.some(function (p) { return F.pericias[p.id].m; });
        lista.push({
            ok: temMestre,
            texto: "No 10º nível você se torna <b>mestre em uma perícia</b> — marque o M dela."
        });
    }
    if (n >= 9) {
        lista.push({
            ok: true,
            texto: "No 9º nível: <b>Teste de Resistência Mestre</b> — marque o M no TR da sua especialização (" +
                e.trOpcoes.join(" ou ") + ") e o T em um segundo."
        });
    }
    return lista;
}

function desenhar_assistente() {
    var e = espec();
    var faltaBase = e ? base_pendente().length : 0;
    document.getElementById("ficha-assistente").innerHTML =
        '<div class="acoes-itens">' +
        '<button type="button" class="btn" id="btn-aplicar-base"' + (faltaBase ? "" : " disabled") + ">" +
        (faltaBase ? "Aplicar " + faltaBase + " habilidade(s) base" : "Habilidades base em dia") + "</button>" +
        '<button type="button" class="btn secundario" id="btn-subir-nivel"' +
        (F.nivel >= 20 ? " disabled" : "") + ">Subir para o " + Math.min(F.nivel + 1, 20) + "º nível</button>" +
        "</div>" +
        '<ul class="pendencias">' + pendencias().map(function (p) {
            return '<li class="' + (p.ok ? "ok" : "falta") + '">' + p.texto + "</li>";
        }).join("") + "</ul>";
}

function ligar_assistente() {
    document.getElementById("ficha").addEventListener("click", function (e) {
        var b = e.target.closest("button");
        if (!b) { return; }
        if (b.id === "btn-aplicar-base") {
            var n = aplicar_base();
            desenhar();
            desenhar_assistente();
            if (n) { mostrarAviso(n + " habilidade(s) base anotada(s)."); }
            return;
        }
        if (b.id === "btn-subir-nivel") {
            if (F.nivel >= 20) { return; }
            F.nivel = F.nivel + 1;
            var add = aplicar_base();
            desenhar();
            desenhar_assistente();
            mostrarAviso("Agora no " + F.nivel + "º nível" +
                (add ? " · " + add + " habilidade(s) base anotada(s)" : "") +
                ". Veja o que falta escolher abaixo.");
        }
    });
}

function mostrarAviso(texto) {
    var el = document.getElementById("aviso-ficha");
    el.textContent = texto;
    el.classList.remove("hidden");
    clearTimeout(mostrarAviso.t);
    mostrarAviso.t = setTimeout(function () { el.classList.add("hidden"); }, 6000);
}
