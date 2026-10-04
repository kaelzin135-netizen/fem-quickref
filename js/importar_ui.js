/* ------------------------------------------------------------------------- */
/* Importar planilha: área de soltar o arquivo e relatório do que foi lido      */
/* ------------------------------------------------------------------------- */

var _IMPORTADO = null;   /* resultado aguardando confirmação */

function painel_importar() {
    return '<div class="imp">' +
        '<p class="imp-ajuda">Abra a sua planilha no Google Sheets e use ' +
        '<b>Arquivo → Fazer download → Microsoft Excel (.xlsx)</b>. ' +
        'Solte o arquivo aqui embaixo.</p>' +
        '<label class="imp-area" id="imp-area">' +
        '<input type="file" id="imp-arquivo" accept=".xlsx" hidden>' +
        '<span class="imp-icone">' + icone("add") + "</span>" +
        "<span><b>Solte o .xlsx aqui</b> ou clique para escolher</span>" +
        "</label>" +
        '<p class="mesa-nota">Colar o <i>link</i> do Google não funciona: o navegador bloqueia ' +
        'a leitura de outro domínio. O .xlsx tem a vantagem de trazer as <b>notas de célula</b> ' +
        'junto — é nelas que costuma estar a regra do homebrew.</p>' +
        '<div id="imp-saida"></div>' +
        "</div>";
}

function _lista(titulo, itens, classe) {
    if (!itens || !itens.length) { return ""; }
    return '<div class="imp-bloco ' + (classe || "") + '"><h4>' + esc(titulo) +
        " <span>" + itens.length + "</span></h4><ul>" +
        itens.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") +
        "</ul></div>";
}

function desenhar_relatorio(r, f) {
    var alvo = document.getElementById("imp-saida");
    if (!alvo) { return; }

    var resumo = [
        ["Personagem", f.nome || "sem nome"],
        ["Nível", f.nivel],
        ["Especialização", (ESPECIALIZACOES.filter(function (e) {
            return e.id === f.especializacao;
        })[0] || {}).nome || "—"],
        ["Origem", (ORIGENS.filter(function (o) { return o.id === f.origem; })[0] || {}).nome || "—"],
        ["PV / PE", pvMaxDe(f) + " / " + peMaxDe(f)],
        ["Perícias treinadas", Object.keys(f.pericias).filter(function (k) {
            return f.pericias[k].t;
        }).length],
        ["Itens", f.itens.length]
    ];

    alvo.innerHTML =
        '<div class="imp-resumo">' +
        resumo.map(function (p) {
            return "<div><span>" + esc(p[0]) + "</span><b>" + esc(p[1]) + "</b></div>";
        }).join("") + "</div>" +

        _lista("Reconhecidas do livro", r.doLivro, "ok") +
        _lista("Homebrew — entraram com o texto da nota", r.homebrew, "hb") +
        _lista("Deduzido", r.deduzidos, "dedu") +
        _lista("Confira", r.avisos, "aviso") +
        _lista("Abas lidas", r.abas, "") +

        '<div class="imp-acoes">' +
        '<button type="button" class="btn" data-confirmar-import="1">Usar esta ficha</button>' +
        '<button type="button" class="btn secundario" data-cancelar-import="1">Descartar</button>' +
        "</div>";
}

/* PV e PE de uma ficha que ainda não é a ativa */
function pvMaxDe(f) {
    var e = ESPECIALIZACOES.filter(function (x) { return x.id === f.especializacao; })[0];
    if (!e) { return "—"; }
    var mCon = Math.floor(((Number(f.atributosBase.con) || 10) - 10) / 2);
    return e.pv1 + mCon + (f.nivel - 1) * (e.pvPasso + mCon);
}

function peMaxDe(f) {
    var e = ESPECIALIZACOES.filter(function (x) { return x.id === f.especializacao; })[0];
    if (!e) { return "—"; }
    var base = e.peNivel * f.nivel;
    if (e.peSomaMod) {
        base += Math.floor(((Number(f.atributosBase[f.atribJujutsu]) || 10) - 10) / 2);
    }
    return base;
}

async function _processar(arquivo) {
    var saida = document.getElementById("imp-saida");
    saida.innerHTML = '<p class="imp-lendo">Lendo a planilha…</p>';
    try {
        var dados = await lerXlsx(arquivo);
        var r = interpretarPlanilha(dados);
        _IMPORTADO = r;
        desenhar_relatorio(r.relatorio, r.ficha);
    } catch (e) {
        _IMPORTADO = null;
        saida.innerHTML = '<p class="imp-erro"><b>Não deu para ler.</b> ' +
            esc(e.message || String(e)) + "</p>";
    }
}

function ligar_importar(raiz) {
    if (!raiz) { return; }

    raiz.addEventListener("change", function (e) {
        if (e.target.id === "imp-arquivo" && e.target.files && e.target.files[0]) {
            _processar(e.target.files[0]);
        }
    });

    ["dragenter", "dragover"].forEach(function (ev) {
        raiz.addEventListener(ev, function (e) {
            var area = e.target.closest && e.target.closest(".imp-area");
            if (!area) { return; }
            e.preventDefault();
            area.classList.add("sobre");
        });
    });
    raiz.addEventListener("dragleave", function (e) {
        var area = e.target.closest && e.target.closest(".imp-area");
        if (area) { area.classList.remove("sobre"); }
    });
    raiz.addEventListener("drop", function (e) {
        var area = e.target.closest && e.target.closest(".imp-area");
        if (!area) { return; }
        e.preventDefault();
        area.classList.remove("sobre");
        var f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) { _processar(f); }
    });
}
