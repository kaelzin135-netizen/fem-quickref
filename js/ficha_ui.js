/* ------------------------------------------------------------------------- */
/* Ficha automática — desenho da tela e eventos                                */
/* ------------------------------------------------------------------------- */

function esc(s) {
    return String(s == null ? "" : s)
        .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

/* "10 base + 3 Destreza + 2 ½ nível" — a conta inteira, à vista */
function formula(res) {
    if (!res.partes.length) { return "sem parcelas"; }
    return res.partes.map(function (p, i) {
        var v = Math.round(p.valor * 10) / 10;
        var sinal = i === 0 ? (v < 0 ? "−" : "") : (v < 0 ? " − " : " + ");
        return sinal + Math.abs(v) + " " + p.rotulo;
    }).join("");
}

function bloco(rotulo, res, sufixo) {
    return '<div class="stat">' +
        '<div class="stat-rotulo">' + esc(rotulo) + "</div>" +
        '<div class="stat-valor">' + (Math.round(res.total * 10) / 10) +
        (sufixo ? '<span class="stat-sufixo">' + esc(sufixo) + "</span>" : "") + "</div>" +
        '<div class="stat-conta">' + esc(formula(res)) + "</div>" +
        "</div>";
}

function opcoes(lista, valor, campoId, campoNome) {
    return lista.map(function (o) {
        var id = o[campoId || "id"], nome = o[campoNome || "nome"];
        return '<option value="' + esc(id) + '"' + (id === valor ? " selected" : "") + ">" +
            esc(nome) + "</option>";
    }).join("");
}

/* ------------------------------------------------------------------------- */

function desenhar_identidade() {
    var e = espec();
    var el = document.getElementById("ficha-identidade");
    el.innerHTML =
        '<div class="campos">' +
        campoTexto("nome", "Nome do personagem") +
        campoTexto("jogador", "Jogador") +
        campoTexto("campanha", "Campanha") +
        campoTexto("tecnica", "Técnica amaldiçoada") +
        '<label class="campo"><span>Origem</span><select data-campo="origem">' +
        '<option value="">—</option>' + opcoes(ORIGENS, F.origem) + "</select></label>" +
        '<label class="campo"><span>Especialização</span><select data-campo="especializacao">' +
        '<option value="">—</option>' + opcoes(ESPECIALIZACOES, F.especializacao) + "</select></label>" +
        '<label class="campo curto"><span>Nível</span>' +
        '<input type="number" min="1" max="20" data-campo="nivel" value="' + F.nivel + '"></label>' +
        '<label class="campo"><span>Atributo da CD</span><select data-campo="atribCD">' +
        opcoes(e ? ATRIBUTOS.filter(function (a) { return e.chave.indexOf(a.id) >= 0; }) : ATRIBUTOS,
            F.atribCD) + "</select></label>" +
        '<label class="campo"><span>Atributo de jujutsu</span><select data-campo="atribJujutsu">' +
        opcoes(ATRIBUTOS, F.atribJujutsu) + "</select></label>" +
        "</div>" +
        '<div class="linha-resumo">' +
        '<span><b>' + esc(grau()) + "</b> · nível " + F.nivel + "</span>" +
        "<span>Bônus de Treinamento <b>" + fmt(bt().total) + "</b> " +
        '<i class="conta-inline">(' + esc(formula(bt())) + ")</i></span>" +
        (e ? "<span>Dado de vida <b>" + esc(e.pvDado) + "</b> · " + F.nivel + " dados</span>" +
            "<span>Recurso: <b>" + esc(e.recurso) + "</b></span>" : "") +
        (origemAtual() ? '<span class="nota-origem">' + esc(origemAtual().notas) + "</span>" : "") +
        "</div>";
}

function origemAtual() {
    return ORIGENS.filter(function (o) { return o.id === F.origem; })[0] || null;
}

function campoTexto(campo, rotulo) {
    return '<label class="campo"><span>' + esc(rotulo) + "</span>" +
        '<input type="text" data-campo="' + campo + '" value="' + esc(F[campo]) + '"></label>';
}

function desenhar_atributos() {
    document.getElementById("ficha-atributos").innerHTML =
        '<div class="grade-atributos">' + ATRIBUTOS.map(function (a) {
            var v = valorAtributo(a.id);
            var m = modAtributo(a.id);
            var extras = v.partes.filter(function (p) { return p.rotulo !== "base"; });
            return '<div class="atributo">' +
                '<div class="atributo-nome">' + esc(a.nome) + "</div>" +
                '<input type="number" min="1" max="30" data-atributo="' + a.id + '" value="' +
                (Number(F.atributosBase[a.id]) || 0) + '">' +
                '<div class="atributo-mod">' + fmt(m) + "</div>" +
                '<div class="atributo-conta">valor ' + v.total +
                (extras.length ? " (" + esc(formula(v)) + ")" : "") + "</div>" +
                "</div>";
        }).join("") + "</div>";
}

function desenhar_valores() {
    var pv = pvMax(), pe = peMax(), ig = integridadeMax();
    var e = espec();
    document.getElementById("ficha-valores").innerHTML =
        '<div class="grade-stats">' +
        bloco("Pontos de Vida", pv) +
        bloco("Pontos de " + (e ? e.recurso : "Energia"), pe) +
        bloco("Integridade da Alma", ig) +
        bloco("Defesa", defesa()) +
        bloco("Atenção", atencao()) +
        bloco("Iniciativa", iniciativa()) +
        bloco("Deslocamento", deslocamento(), " m") +
        bloco("CD de Especialização", cdEspec()) +
        "</div>" +
        '<div class="atuais">' +
        atual("PV", "pvPerdidos", pv.total) +
        atual((e ? e.recurso : "PE"), "pePerdidos", pe.total) +
        atual("Integridade", "integridadePerdida", ig.total) +
        "</div>";
}

function atual(rotulo, campo, max) {
    var perdidos = Number(F[campo]) || 0;
    return '<label class="campo curto"><span>' + esc(rotulo) + " perdidos</span>" +
        '<input type="number" min="0" data-campo="' + campo + '" value="' + perdidos + '">' +
        '<i class="conta-inline">atual ' + (max - perdidos) + " de " + max + "</i></label>";
}

function tabelaTreino(titulo, lista, tipo, calc) {
    var linhas = lista.map(function (x) {
        var reg = (tipo === "pericias" ? F.pericias : F.resistencias)[x.id];
        var r = calc(x.id);
        return "<tr>" +
            "<td>" + esc(x.nome) + (x.exigeTreino ? ' <i title="Exige treinamento">*</i>' : "") + "</td>" +
            '<td class="cel-attr">' + esc(nomeAtributo(x.attr).slice(0, 3).toUpperCase()) + "</td>" +
            '<td><input type="checkbox" data-treino="' + tipo + '" data-id="' + x.id +
            '" data-campo="t"' + (reg.t ? " checked" : "") + "></td>" +
            '<td><input type="checkbox" data-treino="' + tipo + '" data-id="' + x.id +
            '" data-campo="m"' + (reg.m ? " checked" : "") + "></td>" +
            '<td><input type="number" class="mini" data-treino="' + tipo + '" data-id="' + x.id +
            '" data-campo="outros" value="' + (Number(reg.outros) || 0) + '"></td>' +
            '<td class="cel-total">' + fmt(r.total) + "</td>" +
            '<td class="cel-conta">' + esc(formula(r)) + "</td>" +
            "</tr>";
    }).join("");
    return '<div class="table-wrap"><table class="ref tabela-ficha"><thead><tr>' +
        "<th>" + esc(titulo) + "</th><th>Atrib.</th><th>T</th><th>M</th><th>Outros</th>" +
        "<th>Total</th><th>Como chegou nesse número</th></tr></thead><tbody>" +
        linhas + "</tbody></table></div>";
}

function desenhar_testes() {
    var linhasAtq = ATAQUES.map(function (a) {
        var reg = F.ataques[a.id];
        var r = ataque(a.id);
        return "<tr><td>" + esc(a.nome) + "</td>" +
            '<td><select class="mini" data-ataque="' + a.id + '" data-campo="attr">' +
            opcoes(ATRIBUTOS.filter(function (x) { return a.alternativas.indexOf(x.id) >= 0; }),
                reg.attr) + "</select></td>" +
            '<td><input type="checkbox" data-ataque="' + a.id + '" data-campo="t"' +
            (reg.t ? " checked" : "") + "></td><td>—</td>" +
            '<td><input type="number" class="mini" data-ataque="' + a.id +
            '" data-campo="outros" value="' + (Number(reg.outros) || 0) + '"></td>' +
            '<td class="cel-total">' + fmt(r.total) + "</td>" +
            '<td class="cel-conta">' + esc(formula(r)) + "</td></tr>";
    }).join("");

    document.getElementById("ficha-testes").innerHTML =
        '<div class="table-wrap"><table class="ref tabela-ficha"><thead><tr>' +
        "<th>Jogada de ataque</th><th>Atrib.</th><th>T</th><th>M</th><th>Outros</th>" +
        "<th>Total</th><th>Como chegou nesse número</th></tr></thead><tbody>" +
        linhasAtq + "</tbody></table></div>" +
        tabelaTreino("Teste de Resistência", RESISTENCIAS, "resistencias", resistencia);
}

function desenhar_pericias() {
    document.getElementById("ficha-pericias").innerHTML =
        tabelaTreino("Perícia", PERICIAS, "pericias", pericia) +
        '<p class="table-note">* Perícias que, em regra, só podem ser usadas se você for treinado. ' +
        "<b>T</b> = treinado, <b>M</b> = mestre (soma 1,5× o bônus de treinamento).</p>";
}

function desenhar_aptidoes() {
    var e = espec();
    if (e && e.semAptidoes) {
        document.getElementById("ficha-aptidoes").innerHTML =
            '<p class="aviso">Restringidos não possuem energia amaldiçoada — em vez de aptidões ' +
            "recebem <b>Dádivas do Céu</b> e <b>técnicas marciais</b>, que você adiciona na seção de itens.</p>";
        return;
    }
    document.getElementById("ficha-aptidoes").innerHTML =
        '<div class="grade-aptidoes">' + APTIDOES_NIVEL.map(function (a) {
            var r = nivelAptidao(a.id);
            return '<label class="aptidao"><span>' + esc(a.nome) + " (" + a.sigla + ")</span>" +
                '<input type="number" min="0" max="5" data-aptidao="' + a.id + '" value="' +
                (Number(F.aptidoes[a.id]) || 0) + '">' +
                '<i class="conta-inline">' + r.total + " · " + esc(formula(r)) + "</i></label>";
        }).join("") + "</div>";
}

/* ------------------------------------------------------------------------- */
/* Itens: habilidades do livro e homebrew                                      */
/* ------------------------------------------------------------------------- */

function rotuloAlvo(id) {
    var a = ALVOS.filter(function (x) { return x.id === id; })[0];
    return a ? a.rotulo : id;
}

function desenhar_itens() {
    var lista = F.itens.length ? F.itens.map(function (item, i) {
        var chips = (item.mods || []).map(function (m, j) {
            return '<span class="chip">' + esc(rotuloAlvo(m.alvo)) + " " + fmt(m.valor) +
                '<button type="button" class="chip-x" data-remover-mod="' + i + ":" + j +
                '" title="Remover">&times;</button></span>';
        }).join("");
        return '<div class="item-ficha">' +
            '<div class="item-ficha-topo">' +
            '<span class="item-ficha-nome">' + esc(item.nome) + "</span>" +
            '<span class="item-ficha-cat">' + esc(item.categoria) + "</span>" +
            '<button type="button" class="btn-mini" data-ver="' + i + '">texto</button>' +
            '<button type="button" class="btn-mini" data-add-mod="' + i + '">+ modificador</button>' +
            '<button type="button" class="btn-mini perigo" data-remover-item="' + i + '">remover</button>' +
            "</div>" +
            '<div class="chips">' + (chips || '<i class="sem-mod">sem efeito numérico</i>') + "</div>" +
            '<div class="item-ficha-texto hidden" data-texto="' + i + '">' +
            "<p><i>" + (item.descricao || "") + "</i></p>" +
            (item.bullets || []).map(function (b) { return "<p>" + b + "</p>"; }).join("") +
            (item.referencia ? '<p class="ref-livro">' + esc(item.referencia) + "</p>" : "") +
            "</div>" +
            '<div class="form-mod hidden" data-form-mod="' + i + '">' + formularioMod(i) + "</div>" +
            "</div>";
    }).join("") : '<p class="aviso">Nenhuma habilidade ainda. Use <b>Adicionar do livro</b> abaixo.</p>';

    document.getElementById("ficha-itens").innerHTML = lista +
        '<div class="acoes-itens">' +
        '<button type="button" class="btn" id="btn-abrir-catalogo">+ Adicionar do livro</button>' +
        '<button type="button" class="btn" id="btn-abrir-homebrew">+ Homebrew</button>' +
        "</div>" +
        '<div id="painel-catalogo" class="painel hidden"></div>' +
        '<div id="painel-homebrew" class="painel hidden"></div>';
}

function formularioMod(i) {
    var grupos = {};
    ALVOS.forEach(function (a) { (grupos[a.grupo] = grupos[a.grupo] || []).push(a); });
    var options = Object.keys(grupos).map(function (g) {
        return '<optgroup label="' + esc(g) + '">' + grupos[g].map(function (a) {
            return '<option value="' + esc(a.id) + '">' + esc(a.rotulo) + "</option>";
        }).join("") + "</optgroup>";
    }).join("");
    return '<select class="sel-alvo">' + options + "</select>" +
        '<input type="number" class="mini val-mod" value="1" step="0.5">' +
        '<button type="button" class="btn-mini" data-confirmar-mod="' + i + '">aplicar</button>';
}

var CATALOGO_FILTRO = "";

function desenhar_catalogo() {
    var painel = document.getElementById("painel-catalogo");
    var q = normalize(CATALOGO_FILTRO.trim());
    var achados = q
        ? CATALOGO.filter(function (c) { return c.busca.indexOf(q) !== -1; })
        : CATALOGO.slice(0, 0);
    var limite = achados.slice(0, 60);
    painel.innerHTML =
        '<input type="search" id="busca-catalogo" placeholder="Buscar habilidade, talento, aptidão ou treino…" value="' +
        esc(CATALOGO_FILTRO) + '">' +
        '<p class="table-note">' + CATALOGO.length + " itens do livro disponíveis. " +
        (q ? achados.length + " resultado(s)." : "Digite para buscar.") + "</p>" +
        '<div class="lista-catalogo">' + limite.map(function (c, i) {
            var efeitos = ler_efeitos(c);
            var idx = CATALOGO.indexOf(c);
            return '<div class="linha-catalogo">' +
                "<div><b>" + esc(c.nome) + '</b> <span class="item-ficha-cat">' +
                esc(c.categoria) + "</span>" +
                '<div class="cat-sub">' + esc(c.subtitulo) + "</div>" +
                (efeitos.length ? '<div class="cat-efeitos">detectado: ' + efeitos.map(function (ef) {
                    return esc(rotuloAlvo(ef.alvo)) + " " + fmt(ef.valor);
                }).join(" · ") + "</div>" : "") +
                "</div>" +
                '<button type="button" class="btn-mini" data-add-catalogo="' + idx + '">adicionar</button>' +
                "</div>";
        }).join("") + "</div>";

    var busca = document.getElementById("busca-catalogo");
    busca.oninput = function () {
        CATALOGO_FILTRO = this.value;
        desenhar_catalogo();
        var b = document.getElementById("busca-catalogo");
        b.focus();
        b.setSelectionRange(b.value.length, b.value.length);
    };
}

function desenhar_homebrew() {
    document.getElementById("painel-homebrew").innerHTML =
        '<div class="campos">' +
        '<label class="campo"><span>Nome</span><input type="text" id="hb-nome" placeholder="Ex.: Punho de Brasa"></label>' +
        '<label class="campo"><span>Categoria</span><input type="text" id="hb-cat" value="Homebrew"></label>' +
        '<label class="campo largo"><span>Descrição</span><input type="text" id="hb-desc" placeholder="O que a habilidade faz"></label>' +
        "</div>" +
        '<button type="button" class="btn" id="btn-criar-homebrew">Criar item</button>' +
        '<p class="table-note">Depois de criar, use <b>+ modificador</b> no item para dizer o que ele altera ' +
        "— ele passa a entrar nas contas como qualquer habilidade do livro.</p>";
}

/* ------------------------------------------------------------------------- */

/* Redesenhar troca os elementos, então o campo em uso perderia o foco a cada
   tecla. Guardamos quem estava focado e devolvemos o foco depois. */
function seletorDe(el) {
    if (!el || !el.dataset) { return null; }
    var partes = [];
    ["campo", "atributo", "aptidao", "treino", "id", "ataque"].forEach(function (k) {
        if (el.dataset[k] !== undefined) {
            partes.push("[data-" + k + '="' + el.dataset[k] + '"]');
        }
    });
    return partes.length ? partes.join("") : null;
}

function comFoco(fn) {
    var ativo = document.activeElement;
    var seletor = seletorDe(ativo);
    var pos = null;
    try { pos = [ativo.selectionStart, ativo.selectionEnd]; } catch (e) { /* number input */ }
    fn();
    if (!seletor) { return; }
    var novo = document.querySelector(seletor);
    if (!novo) { return; }
    novo.focus();
    if (pos && pos[0] !== null && novo.setSelectionRange) {
        try { novo.setSelectionRange(pos[0], pos[1]); } catch (e) { /* ignora */ }
    }
}

function desenhar() {
    var anot = document.querySelector('[data-campo="anotacoes"]');
    if (anot && anot.value !== F.anotacoes) { anot.value = F.anotacoes || ""; }
    desenhar_identidade();
    desenhar_atributos();
    desenhar_valores();
    desenhar_testes();
    desenhar_pericias();
    desenhar_aptidoes();
    desenhar_itens();
    if (typeof desenhar_assistente === "function") { desenhar_assistente(); }
    salvar();
}

/* ------------------------------------------------------------------------- */
/* Eventos — um só ouvinte na página inteira                                   */
/* ------------------------------------------------------------------------- */

function ligar_eventos() {
    var raiz = document.getElementById("ficha");

    raiz.addEventListener("input", function (e) {
        var el = e.target;
        if (el.dataset.campo === "anotacoes") {
            F.anotacoes = el.value;
            salvar();
            return;
        }
        if (el.dataset.campo && !el.dataset.treino && !el.dataset.ataque) {
            var v = el.type === "number" ? Number(el.value) : el.value;
            F[el.dataset.campo] = v;
            comFoco(function () {
                if (el.dataset.campo === "nivel") { desenhar(); }
                else { desenhar_valores(); desenhar_testes(); desenhar_pericias(); salvar(); }
            });
            return;
        }
        if (el.dataset.atributo) {
            F.atributosBase[el.dataset.atributo] = Number(el.value);
            comFoco(function () {
                desenhar_atributos(); desenhar_valores(); desenhar_testes();
                desenhar_pericias(); salvar();
            });
            return;
        }
        if (el.dataset.aptidao) {
            F.aptidoes[el.dataset.aptidao] = Number(el.value);
            comFoco(function () { desenhar_aptidoes(); salvar(); });
            return;
        }
        if (el.dataset.treino) {
            var reg = (el.dataset.treino === "pericias" ? F.pericias : F.resistencias)[el.dataset.id];
            reg[el.dataset.campo] = el.type === "checkbox" ? el.checked : Number(el.value);
            if (el.dataset.campo === "m" && el.checked) { reg.t = true; }
            comFoco(function () {
                desenhar_pericias(); desenhar_testes(); desenhar_valores(); salvar();
            });
            return;
        }
        if (el.dataset.ataque) {
            var a = F.ataques[el.dataset.ataque];
            a[el.dataset.campo] = el.type === "checkbox" ? el.checked : el.value;
            if (el.dataset.campo === "outros") { a.outros = Number(el.value); }
            comFoco(function () { desenhar_testes(); salvar(); });
        }
    });

    raiz.addEventListener("change", function (e) {
        var el = e.target;
        if (el.tagName === "SELECT" && el.dataset.campo) {
            F[el.dataset.campo] = el.value;
            desenhar();
        }
    });

    raiz.addEventListener("click", function (e) {
        var el = e.target.closest("button");
        if (!el) { return; }
        var d = el.dataset;

        if (el.id === "btn-abrir-catalogo") {
            var p = document.getElementById("painel-catalogo");
            p.classList.toggle("hidden");
            document.getElementById("painel-homebrew").classList.add("hidden");
            if (!p.classList.contains("hidden")) {
                desenhar_catalogo();
                document.getElementById("busca-catalogo").focus();
            }
            return;
        }
        if (el.id === "btn-abrir-homebrew") {
            var h = document.getElementById("painel-homebrew");
            h.classList.toggle("hidden");
            document.getElementById("painel-catalogo").classList.add("hidden");
            if (!h.classList.contains("hidden")) { desenhar_homebrew(); }
            return;
        }
        if (el.id === "btn-criar-homebrew") {
            var nome = (document.getElementById("hb-nome").value || "").trim();
            if (!nome) { document.getElementById("hb-nome").focus(); return; }
            F.itens.push({
                nome: nome,
                categoria: (document.getElementById("hb-cat").value || "Homebrew").trim(),
                descricao: (document.getElementById("hb-desc").value || "").trim(),
                bullets: [], referencia: "", mods: []
            });
            desenhar();
            return;
        }
        if (d.addCatalogo !== undefined) {
            var c = CATALOGO[Number(d.addCatalogo)];
            F.itens.push({
                nome: c.nome, categoria: c.categoria, descricao: c.descricao,
                bullets: c.bullets, referencia: c.referencia,
                mods: ler_efeitos(c).map(function (ef) {
                    return { alvo: ef.alvo, valor: ef.valor };
                })
            });
            desenhar();
            var pc = document.getElementById("painel-catalogo");
            pc.classList.remove("hidden");
            desenhar_catalogo();
            return;
        }
        if (d.removerItem !== undefined) {
            F.itens.splice(Number(d.removerItem), 1);
            desenhar();
            return;
        }
        if (d.removerMod !== undefined) {
            var par = d.removerMod.split(":");
            F.itens[Number(par[0])].mods.splice(Number(par[1]), 1);
            desenhar();
            return;
        }
        if (d.ver !== undefined) {
            document.querySelector('[data-texto="' + d.ver + '"]').classList.toggle("hidden");
            return;
        }
        if (d.addMod !== undefined) {
            document.querySelector('[data-form-mod="' + d.addMod + '"]').classList.toggle("hidden");
            return;
        }
        if (d.confirmarMod !== undefined) {
            var caixa = el.parentElement;
            var alvo = caixa.querySelector(".sel-alvo").value;
            var valor = Number(caixa.querySelector(".val-mod").value);
            if (valor) {
                F.itens[Number(d.confirmarMod)].mods.push({ alvo: alvo, valor: valor });
                desenhar();
            }
            return;
        }
    });

    document.getElementById("btn-exportar").onclick = function () {
        var texto = JSON.stringify(F, null, 2);
        var area = document.getElementById("area-json");
        area.value = texto;
        area.parentElement.classList.remove("hidden");
        area.select();
    };
    document.getElementById("btn-importar").onclick = function () {
        var area = document.getElementById("area-json");
        area.parentElement.classList.remove("hidden");
        if (!area.value.trim()) { area.placeholder = "Cole aqui o JSON da ficha e clique em Importar de novo."; area.focus(); return; }
        try {
            var novo = JSON.parse(area.value);
            var base = ficha_nova();
            Object.keys(base).forEach(function (k) {
                if (novo[k] !== undefined && novo[k] !== null) { base[k] = novo[k]; }
            });
            F = base;
            desenhar();
            area.parentElement.classList.add("hidden");
        } catch (err) {
            alert("Não consegui ler esse JSON: " + err.message);
        }
    };
    document.getElementById("btn-nova").onclick = function () {
        if (!confirm("Isso apaga a ficha atual deste navegador. Continuar?")) { return; }
        F = ficha_nova();
        desenhar();
    };
}

/* ------------------------------------------------------------------------- */

window.addEventListener("DOMContentLoaded", function () {
    init_tema();
    montar_catalogo();
    carregar();
    desenhar();
    ligar_eventos();
    ligar_assistente();

    build_sidebar([
        ["sec-identidade", "Identidade"],
        ["sec-assistente", "Assistente"],
        ["sec-atributos", "Atributos"],
        ["sec-valores", "Valores"],
        ["sec-testes", "Ataques e TRs"],
        ["sec-pericias", "Perícias"],
        ["sec-aptidoes", "Aptidões"],
        ["sec-itens", "Habilidades"],
        ["sec-anotacoes", "Anotações"]
    ], "Ficha", false);
    init_scrollspy();
});
