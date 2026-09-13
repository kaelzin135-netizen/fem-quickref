/* ------------------------------------------------------------------------- */
/* Motor compartilhado — Referência Rápida Feiticeiros & Maldições 2.5.2       */
/* Usado por quickref.js (Combate), habilidades.js e evolucao.js               */
/* ------------------------------------------------------------------------- */

var ALL_ITEMS = [];

/* Minúsculas sem acentos e sem HTML, para que "acao" encontre "Ação" */
function normalize(s) {
    var nfd = String(s).replace(/<[^>]*>/g, ' ').toLowerCase().normalize("NFD");
    var out = "";
    for (var i = 0; i < nfd.length; i++) {
        var c = nfd.charCodeAt(i);
        if (c < 0x0300 || c > 0x036f) { out += nfd.charAt(i); }
    }
    return out;
}

function escape_html(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/* ------------------------------------------------------------------------- */
/* Itens                                                                       */
/* ------------------------------------------------------------------------- */

function add_item(parent, data, type) {
    var icon = data.icon || "dice-six-faces-one";
    var subtitle = data.subtitle || "";
    var title = data.title || "[sem título]";

    var item = document.createElement("div");
    item.className = "item itemsize";
    item.innerHTML =
        '<div class="item-icon iconsize icon-' + icon + '"></div>' +
        '<div class="item-text-container text">' +
        '<div class="item-title">' + title + '</div>' +
        '<div class="item-desc">' + subtitle + '</div>' +
        '</div>';

    var section = parent.closest(".section-container");

    item.onclick = function () { abrir_detalhe(item, data, section, type); };

    item.dataset.search = normalize([
        title, subtitle, data.description || "", (data.bullets || []).join(" ")
    ].join(" "));

    parent.appendChild(item);
    ALL_ITEMS.push(item);
}

function fill_section(data, parentname, type) {
    var parent = typeof parentname === "string"
        ? document.getElementById(parentname) : parentname;
    if (!parent || !data) { return; }
    data.forEach(function (item) { add_item(parent, item, type); });
}

/* Cria "subtítulo + linha de itens" dentro de um .section-content */
function add_group(contentEl, subtitleHtml, data, type) {
    if (!data || !data.length) { return; }
    var sub = document.createElement("div");
    sub.className = "section-row section-subtitle text fontsize";
    sub.innerHTML = subtitleHtml;
    contentEl.appendChild(sub);

    var row = document.createElement("div");
    row.className = "section-row";
    contentEl.appendChild(row);

    fill_section(data, row, type);
}

/* ------------------------------------------------------------------------- */
/* Detalhe embutido — abre logo abaixo da linha do item, sem pop-up            */
/* ------------------------------------------------------------------------- */

var DETALHE = null;   /* { painel, item } */

function fechar_detalhe() {
    if (!DETALHE) { return; }
    DETALHE.painel.parentNode.removeChild(DETALHE.painel);
    DETALHE.item.classList.remove("aberto");
    DETALHE = null;
}

/* Último item visível da mesma linha visual do item clicado, para o painel
   nascer abaixo da linha inteira e não no meio dela. */
function fim_da_linha(item) {
    var irmaos = item.parentElement.querySelectorAll(".item:not(.hidden)");
    var topo = item.offsetTop;
    var ultimo = item;
    Array.prototype.forEach.call(irmaos, function (outro) {
        if (Math.abs(outro.offsetTop - topo) < 4) { ultimo = outro; }
    });
    return ultimo;
}

function abrir_detalhe(item, data, section, type) {
    var eraEste = DETALHE && DETALHE.item === item;
    fechar_detalhe();
    if (eraEste) { return; }          /* clicar de novo fecha */

    var titulo = data.title || "[sem título]";
    var desc = data.description || data.subtitle || "";
    var bullets = data.bullets || [];
    var ref = data.reference || "";

    var painel = document.createElement("div");
    painel.className = "detalhe";
    painel.innerHTML =
        '<div class="detalhe-topo">' +
        '<span class="detalhe-titulo">' + escape_html(titulo) + '</span>' +
        '<span class="detalhe-tipo">' + escape_html(type || "") + '</span>' +
        '<button type="button" class="detalhe-fechar" title="Fechar" aria-label="Fechar">&times;</button>' +
        '</div>' +
        '<div class="detalhe-desc">' + desc + '</div>' +
        '<div class="detalhe-corpo">' +
        bullets.map(function (b) { return "<p>" + b + "</p>"; }).join("\n<hr>\n") +
        '</div>' +
        (ref ? '<div class="detalhe-ref">' + escape_html(ref) + '</div>' : '');

    if (section) {
        painel.style.setProperty("--accent",
            window.getComputedStyle(section).backgroundColor);
    }

    var ancora = fim_da_linha(item);
    ancora.parentNode.insertBefore(painel, ancora.nextSibling);
    item.classList.add("aberto");
    DETALHE = { painel: painel, item: item };

    painel.querySelector(".detalhe-fechar").onclick = function (e) {
        e.stopPropagation();
        fechar_detalhe();
    };

    /* traz o painel para a tela sem dar um salto brusco */
    var caixa = painel.getBoundingClientRect();
    if (caixa.bottom > window.innerHeight) {
        painel.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
}

/* ------------------------------------------------------------------------- */
/* Tema Dia / Noite                                                            */
/* ------------------------------------------------------------------------- */

var TEMA_CHAVE = "fem-tema";

function ler_tema() {
    try {
        var salvo = localStorage.getItem(TEMA_CHAVE);
        if (salvo === "dia" || salvo === "noite") { return salvo; }
    } catch (e) { /* navegador sem storage — segue no padrão */ }
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "noite" : "dia";
}

function aplicar_tema(tema) {
    document.documentElement.setAttribute("data-tema", tema);
    var botao = document.getElementById("btn-tema");
    if (botao) {
        var noite = tema === "noite";
        botao.innerHTML = (noite ? "☀" : "☾") + ' <span>' + (noite ? "Dia" : "Noite") + "</span>";
        botao.setAttribute("aria-pressed", noite ? "true" : "false");
        botao.title = noite ? "Mudar para o modo dia" : "Mudar para o modo noite";
    }
}

function init_tema() {
    aplicar_tema(ler_tema());
    var botao = document.getElementById("btn-tema");
    if (!botao) { return; }
    botao.addEventListener("click", function () {
        var novo = document.documentElement.getAttribute("data-tema") === "noite"
            ? "dia" : "noite";
        aplicar_tema(novo);
        try { localStorage.setItem(TEMA_CHAVE, novo); } catch (e) { /* sem storage */ }
    });
}

/* ------------------------------------------------------------------------- */
/* Barra lateral de categorias                                                 */
/* ------------------------------------------------------------------------- */

function contar_itens(id) {
    var s = document.getElementById(id);
    return s ? s.querySelectorAll(".item").length : 0;
}

/* Ordena as seções da página (e a lateral) da maior para a menor */
function ordenar_secoes(sections) {
    var pagina = document.querySelector(".page");
    var marco = document.getElementById("no-results");
    sections.forEach(function (s) {
        var el = document.getElementById(s[0]);
        if (el && pagina && marco) { pagina.insertBefore(el, marco); }
    });
}

function build_sidebar(sections, titulo, ordenar) {
    var lista = sections.filter(function (s) { return document.getElementById(s[0]); });

    if (ordenar) {
        lista.sort(function (a, b) { return contar_itens(b[0]) - contar_itens(a[0]); });
        ordenar_secoes(lista);
    }

    var alvo = document.getElementById("nav-links");
    if (!alvo) { return lista; }
    alvo.innerHTML = "";

    var cabecalho = document.createElement("div");
    cabecalho.className = "side-title";
    cabecalho.textContent = titulo || "Seções";
    alvo.appendChild(cabecalho);

    lista.forEach(function (s) {
        var secao = document.getElementById(s[0]);
        var a = document.createElement("a");
        a.className = "side-link";
        a.href = "#" + s[0];
        a.dataset.secao = s[0];
        a.style.setProperty("--accent", window.getComputedStyle(secao).backgroundColor);
        a.innerHTML = '<span class="side-nome"></span><span class="side-count"></span>';
        a.querySelector(".side-nome").textContent = s[1];
        var n = contar_itens(s[0]);
        a.querySelector(".side-count").textContent = n ? n : "";
        alvo.appendChild(a);
    });

    var nota = document.createElement("div");
    nota.className = "side-note";
    nota.textContent = ordenar
        ? "Ordenado por quantidade de itens."
        : "Na ordem do livro.";
    alvo.appendChild(nota);

    return lista;
}

/* Marca na lateral a seção que está sendo lida */
function init_scrollspy() {
    var links = {};
    document.querySelectorAll(".side-link").forEach(function (a) {
        links[a.dataset.secao] = a;
    });
    var secoes = Object.keys(links)
        .map(function (id) { return document.getElementById(id); })
        .filter(Boolean);
    if (!secoes.length) { return; }

    function marcar() {
        var atual = secoes[0];
        secoes.forEach(function (s) {
            if (s.getBoundingClientRect().top <= 120) { atual = s; }
        });
        Object.keys(links).forEach(function (id) {
            links[id].classList.toggle("ativo", id === atual.id);
        });
    }

    var agendado = false;
    window.addEventListener("scroll", function () {
        if (agendado) { return; }
        agendado = true;
        window.requestAnimationFrame(function () { marcar(); agendado = false; });
    }, { passive: true });
    marcar();
}

/* ------------------------------------------------------------------------- */
/* Busca                                                                       */
/* ------------------------------------------------------------------------- */

function apply_search(raw) {
    var q = normalize(raw.trim());
    var any = false;

    fechar_detalhe();   /* as linhas mudam de composição ao filtrar */

    ALL_ITEMS.forEach(function (item) {
        var match = !q || item.dataset.search.indexOf(q) !== -1;
        item.classList.toggle("hidden", !match);
        if (match) { any = true; }
    });

    /* Busca vazia: tudo volta a aparecer, inclusive seções que só têm tabelas */
    if (!q) {
        document.querySelectorAll(".section-container, .section-row").forEach(function (el) {
            el.classList.remove("hidden");
        });
        document.querySelectorAll(".side-link").forEach(function (a) {
            a.classList.remove("hidden");
            var total = contar_itens(a.dataset.secao);
            a.querySelector(".side-count").textContent = total ? total : "";
        });
        document.getElementById("no-results").style.display = "none";
        return;
    }

    document.querySelectorAll(".section-container").forEach(function (section) {
        var visibleInSection = 0;

        section.querySelectorAll(".section-row").forEach(function (row) {
            if (row.classList.contains("section-subtitle")) { return; }
            if (row.classList.contains("static")) { return; }   /* tabelas fixas */
            var visible = row.querySelectorAll(".item:not(.hidden)").length;
            visibleInSection += visible;
            row.classList.toggle("hidden", visible === 0);

            var prev = row.previousElementSibling;
            if (prev && prev.classList.contains("section-subtitle")) {
                prev.classList.toggle("hidden", visible === 0);
            }
        });

        section.classList.toggle("hidden", visibleInSection === 0);

        /* a lateral acompanha o filtro */
        var link = document.querySelector('.side-link[data-secao="' + section.id + '"]');
        if (link) {
            link.classList.toggle("hidden", visibleInSection === 0);
            link.querySelector(".side-count").textContent = visibleInSection || "";
        }
    });

    document.getElementById("no-results").style.display = any ? "none" : "block";
}

/* ------------------------------------------------------------------------- */
/* Inicialização                                                               */
/* ------------------------------------------------------------------------- */

function init_engine(sections, preencher, opcoes) {
    opcoes = opcoes || {};
    init_tema();
    preencher();
    build_sidebar(sections, opcoes.titulo, opcoes.ordenarPorTamanho !== false);
    init_scrollspy();

    /* a composição das linhas muda com a largura — o painel aberto perderia o lugar */
    window.addEventListener("resize", fechar_detalhe);

    var search = document.getElementById("search");

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
            fechar_detalhe();
            if (document.activeElement === search && search.value) {
                search.value = "";
                apply_search("");
            }
        }
        if (e.key === "/" && document.activeElement !== search) {
            e.preventDefault();
            search.focus();
        }
    });

    search.addEventListener("input", function () { apply_search(this.value); });

    var contador = document.getElementById("item-count");
    if (contador) { contador.textContent = ALL_ITEMS.length; }
    console.log("Referência Rápida F&M — " + ALL_ITEMS.length + " itens carregados.");
}
