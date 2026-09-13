/* ------------------------------------------------------------------------- */
/* Motor compartilhado — Referência Rápida Feiticeiros & Maldições 2.5.2       */
/* Usado por quickref.js (Combate) e habilidades.js (Habilidades)              */
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
    var color = window.getComputedStyle(section).backgroundColor;

    item.onclick = function () { show_modal(data, color, type); };

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
/* Modal                                                                       */
/* ------------------------------------------------------------------------- */

function show_modal(data, color, type) {
    var title = data.title || "[sem título]";
    var subtitle = data.description || data.subtitle || "";
    var bullets = data.bullets || [];
    var reference = data.reference || "";
    type = type || "";
    color = color || "black";

    document.body.classList.add("modal-open");
    document.getElementById("modal").classList.add("modal-visible");

    var container = document.getElementById("modal-container");
    container.style.backgroundColor = color;
    container.style.borderColor = color;

    document.getElementById("modal-title").innerHTML =
        escape_html(title) + '<span class="float-right">' + escape_html(type) + '</span>';
    document.getElementById("modal-subtitle").innerHTML = subtitle;
    document.getElementById("modal-reference").textContent = reference;
    document.getElementById("modal-bullets").innerHTML =
        bullets.map(function (b) { return "<p>" + b + "</p>"; }).join("\n<hr>\n");

    document.getElementById("modal").scrollTop = 0;
}

function hide_modal() {
    document.body.classList.remove("modal-open");
    document.getElementById("modal").classList.remove("modal-visible");
}

/* ------------------------------------------------------------------------- */
/* Navegação                                                                   */
/* ------------------------------------------------------------------------- */

function build_nav(sections) {
    var nav = document.getElementById("nav-links");
    sections.forEach(function (s) {
        var section = document.getElementById(s[0]);
        if (!section) { return; }
        var a = document.createElement("a");
        a.href = "#" + s[0];
        a.textContent = s[1];
        a.style.borderLeftColor = window.getComputedStyle(section).backgroundColor;
        nav.appendChild(a);
    });
}

/* ------------------------------------------------------------------------- */
/* Busca                                                                       */
/* ------------------------------------------------------------------------- */

function apply_search(raw) {
    var q = normalize(raw.trim());
    var any = false;

    ALL_ITEMS.forEach(function (item) {
        var match = !q || item.dataset.search.indexOf(q) !== -1;
        item.classList.toggle("hidden", !match);
        if (match) { any = true; }
    });

    /* Busca vazia: tudo volta a aparecer, inclusive seções que só têm tabelas */
    if (!q) {
        document.querySelectorAll(".section-container, .section-row").forEach(function (el) {
            if (el.id === "modal-container") { return; }
            el.classList.remove("hidden");
        });
        document.getElementById("no-results").style.display = "none";
        return;
    }

    document.querySelectorAll(".section-container").forEach(function (section) {
        if (section.id === "modal-container") { return; }
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
    });

    document.getElementById("no-results").style.display = any ? "none" : "block";
}

/* ------------------------------------------------------------------------- */
/* Inicialização                                                               */
/* ------------------------------------------------------------------------- */

function init_engine(sections, preencher) {
    preencher();
    build_nav(sections);

    document.getElementById("modal").onclick = hide_modal;

    var search = document.getElementById("search");

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
            hide_modal();
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
