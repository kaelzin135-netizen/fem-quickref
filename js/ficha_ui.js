/* ------------------------------------------------------------------------- */
/* Ficha — três colunas em uma tela, coluna 3 em abas                          */
/* Estrutura inspirada na do C.R.I.S. (424 / 356 / 500, rolagem por coluna).   */
/* ------------------------------------------------------------------------- */

function esc(s) {
    return String(s == null ? "" : s)
        .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

function formula(res) {
    if (!res.partes.length) { return "sem parcelas"; }
    return res.partes.map(function (p, i) {
        var v = Math.round(p.valor * 10) / 10;
        var sinal = i === 0 ? (v < 0 ? "−" : "") : (v < 0 ? " − " : " + ");
        return sinal + Math.abs(v) + " " + p.rotulo;
    }).join("");
}

function formulaCurta(res) {
    if (!res.partes.length) { return ""; }
    return res.partes.map(function (p, i) {
        var v = Math.round(p.valor * 10) / 10;
        return (i === 0 ? (v < 0 ? "−" : "") : (v < 0 ? "−" : "+")) + Math.abs(v);
    }).join("");
}

function conta(res) {
    return '<span class="conta" title="' + esc(formula(res)) + '">' +
        '<span class="conta-curta">' + esc(formulaCurta(res)) + "</span>" +
        '<span class="conta-longa">' + esc(formula(res)) + "</span></span>";
}

function opcoes(lista, valor, campoId, campoNome) {
    return lista.map(function (o) {
        var id = o[campoId || "id"], nome = o[campoNome || "nome"];
        return '<option value="' + esc(id) + '"' + (id === valor ? " selected" : "") + ">" +
            esc(nome) + "</option>";
    }).join("");
}

function origemAtual() {
    return ORIGENS.filter(function (o) { return o.id === F.origem; })[0] || null;
}

/* --------------------------------------------------- coluna 1: topo ------ */

function desenhar_identidade() {
    var e = espec();
    document.getElementById("ficha-identidade").innerHTML =
        '<input type="text" class="campo-nome" data-campo="nome" placeholder="Nome do personagem" value="' +
        esc(F.nome) + '">' +
        '<div class="cabeca-linha">' +
        '<select data-campo="especializacao"><option value="">Especialização</option>' +
        opcoes(ESPECIALIZACOES, F.especializacao) + "</select>" +
        '<select data-campo="origem"><option value="">Origem</option>' +
        opcoes(ORIGENS, F.origem) + "</select>" +
        "</div>" +
        '<div class="cabeca-linha">' +
        '<label class="mini-campo"><span>Nível</span>' +
        '<input type="number" min="1" max="20" data-campo="nivel" value="' + F.nivel + '"></label>' +
        '<span class="pilula">' + esc(grau()) + "</span>" +
        '<span class="pilula" title="' + esc(formula(bt())) + '">Treino ' + fmt(bt().total) + "</span>" +
        (e ? '<span class="pilula">' + esc(e.pvDado) + "×" + F.nivel + "</span>" : "") +
        "</div>" +
        '<details class="mais-campos"><summary>Jogador, campanha, técnica, atributos-chave</summary>' +
        '<div class="campos">' +
        campoTexto("jogador", "Jogador") + campoTexto("campanha", "Campanha") +
        campoTexto("tecnica", "Técnica") +
        '<label class="campo"><span>Atrib. da CD</span><select data-campo="atribCD">' +
        opcoes(e ? ATRIBUTOS.filter(function (a) { return e.chave.indexOf(a.id) >= 0; }) : ATRIBUTOS,
            F.atribCD) + "</select></label>" +
        '<label class="campo"><span>Atrib. de jujutsu</span><select data-campo="atribJujutsu">' +
        opcoes(ATRIBUTOS, F.atribJujutsu) + "</select></label>" +
        "</div>" +
        (origemAtual() ? '<p class="nota-origem">' + esc(origemAtual().notas) + "</p>" : "") +
        "</details>";
}

function campoTexto(campo, rotulo) {
    return '<label class="campo"><span>' + esc(rotulo) + "</span>" +
        '<input type="text" data-campo="' + campo + '" value="' + esc(F[campo]) + '"></label>';
}

/* Seis atributos nos vértices do selo. As posições em % espelham o hexágono
   do SVG (raio 105 num viewBox de 300). */
var POS_SELO = {
    for: [50, 15], des: [80.3, 32.5], con: [80.3, 67.5],
    int: [50, 85], sab: [19.7, 67.5], pre: [19.7, 32.5]
};

function desenhar_atributos() {
    document.getElementById("ficha-atributos").innerHTML =
        ATRIBUTOS.map(function (a) {
            var v = valorAtributo(a.id);
            var extras = v.partes.length > 1;
            var pos = POS_SELO[a.id];
            return '<div class="no' + (extras ? " tem-bonus" : "") + '" style="left:' + pos[0] +
                "%;top:" + pos[1] + '%" title="' + esc(a.nome + " — " + formula(v)) + '">' +
                '<span class="no-mod">' + fmt(modAtributo(a.id)) + "</span>" +
                '<input type="number" min="1" max="30" data-atributo="' + a.id + '" value="' +
                (Number(F.atributosBase[a.id]) || 0) + '">' +
                '<span class="no-nome">' + esc(a.curto) + "</span>" +
                "</div>";
        }).join("");

    var e = espec();
    var cd = cdEspec();
    document.getElementById("ficha-selo-centro").innerHTML =
        '<span class="centro-rot">CD</span>' +
        '<span class="centro-val" title="' + esc(formula(cd)) + '">' + cd.total + "</span>" +
        '<span class="centro-sub">' + esc(e ? nomeAtributo(F.atribCD).slice(0, 3) : "—") + "</span>";
}

/* barras de recurso com −/+, como as de vida e determinação do C.R.I.S. */
function barra(rotulo, res, campo) {
    var perdidos = Number(F[campo]) || 0;
    var atual = res.total - perdidos;
    var pct = res.total > 0 ? Math.max(0, Math.min(100, (atual / res.total) * 100)) : 0;
    var baixo = pct <= 25 ? " baixo" : pct <= 50 ? " meio" : "";
    return '<div class="rec">' +
        '<div class="rec-topo"><span class="rec-rot">' + esc(rotulo) + "</span>" +
        '<span class="rec-num">' + atual + '<i>/' + res.total + "</i></span></div>" +
        '<div class="rec-barra"><div class="rec-fill' + baixo + '" style="width:' + pct + '%"></div></div>' +
        '<div class="rec-ctrl">' +
        '<button type="button" class="passo" data-rec="' + campo + '" data-delta="-5">−5</button>' +
        '<button type="button" class="passo" data-rec="' + campo + '" data-delta="-1">−1</button>' +
        '<input type="number" min="0" data-campo="' + campo + '" value="' + perdidos + '" title="Perdidos">' +
        '<button type="button" class="passo" data-rec="' + campo + '" data-delta="1">+1</button>' +
        '<button type="button" class="passo" data-rec="' + campo + '" data-delta="5">+5</button>' +
        conta(res) + "</div></div>";
}

function desenhar_recursos() {
    var e = espec();
    document.getElementById("ficha-recursos").innerHTML =
        barra("Pontos de Vida", pvMax(), "pvPerdidos") +
        barra("Pontos de " + (e ? e.recurso : "Energia"), peMax(), "pePerdidos") +
        barra("Integridade da Alma", integridadeMax(), "integridadePerdida");
}

function tile(rotulo, res, sufixo) {
    return '<div class="tile">' +
        '<span class="tile-rot">' + esc(rotulo) + "</span>" +
        '<span class="tile-val">' + (Math.round(res.total * 10) / 10) +
        (sufixo ? "<i>" + esc(sufixo) + "</i>" : "") + "</span>" +
        conta(res) + "</div>";
}

function desenhar_valores() {
    document.getElementById("ficha-valores").innerHTML =
        tile("Defesa", defesa()) +
        tile("Atenção", atencao()) +
        tile("Iniciativa", iniciativa()) +
        tile("Desloc.", deslocamento(), "m");
}

function desenhar_aptidoes() {
    var e = espec();
    if (e && e.semAptidoes) {
        document.getElementById("ficha-aptidoes").innerHTML =
            '<p class="aviso">Restringido não tem aptidões — recebe Dádivas do Céu e técnicas marciais.</p>';
        return;
    }
    document.getElementById("ficha-aptidoes").innerHTML =
        APTIDOES_NIVEL.map(function (a) {
            var r = nivelAptidao(a.id);
            return '<label class="apt" title="' + esc(a.nome + " — " + formula(r)) + '">' +
                '<span class="apt-sigla">' + a.sigla + "</span>" +
                '<input type="number" min="0" max="5" data-aptidao="' + a.id + '" value="' +
                (Number(F.aptidoes[a.id]) || 0) + '">' +
                '<span class="apt-total">' + r.total + "</span></label>";
        }).join("");
}

/* ------------------------------------------------ coluna 2 e abas -------- */

function linhaTeste(nome, curto, controles, res, treinado) {
    return '<div class="linha' + (treinado ? " treinada" : "") + '">' +
        '<span class="linha-nome">' + esc(nome) + "</span>" +
        '<span class="linha-attr">' + esc(curto) + "</span>" +
        controles +
        '<span class="linha-total" title="' + esc(formula(res)) + '">' + fmt(res.total) + "</span>" +
        conta(res) + "</div>";
}

function ctrlTM(tipo, id, reg) {
    return '<label class="tm" title="Treinado"><input type="checkbox" data-treino="' + tipo +
        '" data-id="' + id + '" data-campo="t"' + (reg.t ? " checked" : "") + ">T</label>" +
        '<label class="tm" title="Mestre"><input type="checkbox" data-treino="' + tipo +
        '" data-id="' + id + '" data-campo="m"' + (reg.m ? " checked" : "") + ">M</label>" +
        '<input type="number" class="micro" title="Outros bônus" data-treino="' + tipo +
        '" data-id="' + id + '" data-campo="outros" value="' + (Number(reg.outros) || 0) + '">';
}

function desenhar_pericias() {
    document.getElementById("ficha-pericias").innerHTML =
        PERICIAS.map(function (p) {
            var reg = F.pericias[p.id];
            return linhaTeste(p.nome + (p.exigeTreino ? " *" : ""), p.attr.toUpperCase(),
                ctrlTM("pericias", p.id, reg), pericia(p.id), reg.t || reg.m);
        }).join("");
}

function desenhar_testes() {
    document.getElementById("ficha-resistencias").innerHTML =
        RESISTENCIAS.map(function (r) {
            var reg = F.resistencias[r.id];
            return linhaTeste(r.nome, r.attr.toUpperCase(),
                ctrlTM("resistencias", r.id, reg), resistencia(r.id), reg.t || reg.m);
        }).join("");

    document.getElementById("ficha-ataques").innerHTML =
        ATAQUES.map(function (a) {
            var reg = F.ataques[a.id];
            var ctrl = '<select class="micro" data-ataque="' + a.id + '" data-campo="attr">' +
                opcoes(ATRIBUTOS.filter(function (x) { return a.alternativas.indexOf(x.id) >= 0; }),
                    reg.attr, "id", "curto") + "</select>" +
                '<label class="tm" title="Treinado"><input type="checkbox" data-ataque="' + a.id +
                '" data-campo="t"' + (reg.t ? " checked" : "") + ">T</label>" +
                '<input type="number" class="micro" title="Outros bônus" data-ataque="' + a.id +
                '" data-campo="outros" value="' + (Number(reg.outros) || 0) + '">';
            return linhaTeste(a.nome, "", ctrl, ataque(a.id), reg.t);
        }).join("");
}

/* ------------------------------------------------------------- itens ---- */

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
            '<button type="button" class="item-abrir" data-ver="' + i + '" title="Ver o texto">' +
            esc(item.nome) + "</button>" +
            '<span class="item-ficha-cat">' + esc(item.categoria) + "</span>" +
            '<button type="button" class="btn-mini" data-add-mod="' + i + '">+ mod</button>' +
            '<button type="button" class="btn-mini perigo" data-remover-item="' + i +
            '" title="Remover">&times;</button>' +
            "</div>" +
            (chips ? '<div class="chips">' + chips + "</div>" : "") +
            '<div class="item-ficha-texto hidden" data-texto="' + i + '">' +
            "<p><i>" + (item.descricao || "") + "</i></p>" +
            (item.bullets || []).map(function (b) { return "<p>" + b + "</p>"; }).join("") +
            (item.referencia ? '<p class="ref-livro">' + esc(item.referencia) + "</p>" : "") +
            "</div>" +
            '<div class="form-mod hidden" data-form-mod="' + i + '">' + formularioMod(i) + "</div>" +
            "</div>";
    }).join("") : '<p class="aviso">Nenhuma habilidade ainda — use <b>Adicionar do livro</b>.</p>';

    document.getElementById("ficha-itens").innerHTML =
        '<div class="acoes-itens">' +
        '<button type="button" class="btn" id="btn-abrir-catalogo">+ Adicionar do livro</button>' +
        '<button type="button" class="btn" id="btn-abrir-homebrew">+ Homebrew</button>' +
        '<span class="contagem-itens">' + F.itens.length + "</span>" +
        "</div>" +
        '<div id="painel-catalogo" class="painel hidden"></div>' +
        '<div id="painel-homebrew" class="painel hidden"></div>' +
        lista;
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
        '<input type="number" class="micro val-mod" value="1" step="0.5">' +
        '<button type="button" class="btn-mini" data-confirmar-mod="' + i + '">aplicar</button>';
}

var CATALOGO_FILTRO = "";

function desenhar_catalogo() {
    var painel = document.getElementById("painel-catalogo");
    var q = normalize(CATALOGO_FILTRO.trim());
    var achados = q ? CATALOGO.filter(function (c) { return c.busca.indexOf(q) !== -1; }) : [];
    var linhas = achados.slice(0, 50).map(function (c) {
        var efeitos = ler_efeitos(c);
        return '<div class="linha-catalogo">' +
            "<div><b>" + esc(c.nome) + '</b> <span class="item-ficha-cat">' + esc(c.categoria) + "</span>" +
            '<div class="cat-sub">' + esc(c.subtitulo) + "</div>" +
            (efeitos.length ? '<div class="cat-efeitos">' + efeitos.map(function (ef) {
                return esc(rotuloAlvo(ef.alvo)) + " " + fmt(ef.valor);
            }).join(" · ") + "</div>" : "") + "</div>" +
            '<button type="button" class="btn-mini" data-add-catalogo="' +
            CATALOGO.indexOf(c) + '">+</button></div>';
    }).join("");

    painel.innerHTML =
        '<input type="search" id="busca-catalogo" placeholder="Buscar entre ' + CATALOGO.length +
        ' itens…" value="' + esc(CATALOGO_FILTRO) + '">' +
        (q ? '<p class="dica">' + achados.length + " resultado(s)</p>" : "") +
        '<div class="lista-catalogo">' + linhas + "</div>";

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
        '<label class="campo"><span>Nome</span><input type="text" id="hb-nome" placeholder="Punho de Brasa"></label>' +
        '<label class="campo"><span>Categoria</span><input type="text" id="hb-cat" value="Homebrew"></label>' +
        '<label class="campo largo"><span>Descrição</span><input type="text" id="hb-desc"></label>' +
        "</div>" +
        '<button type="button" class="btn" id="btn-criar-homebrew">Criar item</button>' +
        '<p class="dica">Depois use <b>+ mod</b> no item para dizer o que ele altera.</p>';
}

/* ------------------------------------------------------- foco/render ---- */

function seletorDe(el) {
    if (!el || !el.dataset) { return null; }
    var partes = [];
    ["campo", "atributo", "aptidao", "treino", "id", "ataque"].forEach(function (k) {
        if (el.dataset[k] !== undefined) { partes.push("[data-" + k + '="' + el.dataset[k] + '"]'); }
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
    desenhar_recursos();
    desenhar_valores();
    desenhar_aptidoes();
    desenhar_pericias();
    desenhar_testes();
    desenhar_itens();
    if (typeof desenhar_assistente === "function") { desenhar_assistente(); }
    salvar();
}

function recalcular() {
    comFoco(function () {
        desenhar_identidade();
        desenhar_atributos();
        desenhar_recursos();
        desenhar_valores();
        desenhar_aptidoes();
        desenhar_pericias();
        desenhar_testes();
        if (typeof desenhar_assistente === "function") { desenhar_assistente(); }
        salvar();
    });
}

/* ------------------------------------------------------------- eventos -- */

function trocar_aba(nome) {
    document.querySelectorAll(".aba-btn").forEach(function (b) {
        b.classList.toggle("ativa", b.dataset.aba === nome);
    });
    document.querySelectorAll(".aba-painel").forEach(function (p) {
        p.classList.toggle("hidden", p.dataset.painel !== nome);
    });
}

function ligar_eventos() {
    var raiz = document.getElementById("ficha");

    raiz.addEventListener("input", function (e) {
        var el = e.target;
        if (el.dataset.campo === "anotacoes") { F.anotacoes = el.value; salvar(); return; }
        if (el.dataset.campo && !el.dataset.treino && !el.dataset.ataque) {
            F[el.dataset.campo] = el.type === "number" ? Number(el.value) : el.value;
            recalcular();
            return;
        }
        if (el.dataset.atributo) {
            F.atributosBase[el.dataset.atributo] = Number(el.value);
            recalcular();
            return;
        }
        if (el.dataset.aptidao) {
            F.aptidoes[el.dataset.aptidao] = Number(el.value);
            recalcular();
            return;
        }
        if (el.dataset.treino) {
            var reg = (el.dataset.treino === "pericias" ? F.pericias : F.resistencias)[el.dataset.id];
            reg[el.dataset.campo] = el.type === "checkbox" ? el.checked : Number(el.value);
            if (el.dataset.campo === "m" && el.checked) { reg.t = true; }
            recalcular();
            return;
        }
        if (el.dataset.ataque) {
            var a = F.ataques[el.dataset.ataque];
            a[el.dataset.campo] = el.type === "checkbox" ? el.checked : el.value;
            if (el.dataset.campo === "outros") { a.outros = Number(el.value); }
            recalcular();
        }
    });

    raiz.addEventListener("change", function (e) {
        var el = e.target;
        if (el.tagName === "SELECT" && el.dataset.campo) { F[el.dataset.campo] = el.value; desenhar(); }
    });

    raiz.addEventListener("click", function (e) {
        var el = e.target.closest("button");
        if (!el) { return; }
        var d = el.dataset;

        if (d.aba) { trocar_aba(d.aba); return; }

        if (d.rec) {
            F[d.rec] = Math.max(0, (Number(F[d.rec]) || 0) + Number(d.delta));
            desenhar_recursos();
            salvar();
            return;
        }
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
                mods: ler_efeitos(c).map(function (ef) { return { alvo: ef.alvo, valor: ef.valor }; })
            });
            desenhar();
            document.getElementById("painel-catalogo").classList.remove("hidden");
            desenhar_catalogo();
            return;
        }
        if (d.removerItem !== undefined) { F.itens.splice(Number(d.removerItem), 1); desenhar(); return; }
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
            var valor = Number(caixa.querySelector(".val-mod").value);
            if (valor) {
                F.itens[Number(d.confirmarMod)].mods.push({
                    alvo: caixa.querySelector(".sel-alvo").value, valor: valor
                });
                desenhar();
            }
        }
    });

    document.getElementById("btn-contas").onclick = function () {
        var ligado = document.body.classList.toggle("mostrar-contas");
        this.classList.toggle("ligado", ligado);
        this.textContent = ligado ? "Contas detalhadas" : "Contas resumidas";
    };
    document.getElementById("btn-exportar").onclick = function () {
        var area = document.getElementById("area-json");
        area.value = JSON.stringify(F, null, 2);
        area.parentElement.classList.remove("hidden");
        area.select();
    };
    document.getElementById("btn-importar").onclick = function () {
        var area = document.getElementById("area-json");
        area.parentElement.classList.remove("hidden");
        if (!area.value.trim()) { area.focus(); return; }
        try {
            var novo = JSON.parse(area.value);
            var base = ficha_nova();
            Object.keys(base).forEach(function (k) {
                if (novo[k] !== undefined && novo[k] !== null) { base[k] = novo[k]; }
            });
            F = base;
            desenhar();
            area.parentElement.classList.add("hidden");
        } catch (err) { alert("Não consegui ler esse JSON: " + err.message); }
    };
    document.getElementById("btn-nova").onclick = function () {
        if (!confirm("Isso apaga a ficha atual deste navegador. Continuar?")) { return; }
        F = ficha_nova();
        desenhar();
    };
}

window.addEventListener("DOMContentLoaded", function () {
    init_tema();
    montar_catalogo();
    carregar();
    desenhar();
    ligar_eventos();
    ligar_assistente();
});
