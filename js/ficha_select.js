/* ------------------------------------------------------------------------- */
/* Dropdown próprio para os <select> da ficha                                  */
/*                                                                             */
/* O popup nativo é desenhado pelo sistema operacional: não aceita cor no      */
/* item sob o mouse, que é justamente o realce do C.R.I.S. Aqui o <select>     */
/* continua no DOM e continua sendo a fonte da verdade — quem escuta "change"  */
/* não muda nada. Só o popup é nosso.                                          */
/* ------------------------------------------------------------------------- */

(function () {
    var pop = null, alvo = null, idx = -1;

    function dentroDaFicha(el) {
        return !!el.closest(".ficha-app, .ficha-cabecalho");
    }

    function fechar() {
        if (!pop) { return; }
        pop.remove();
        if (alvo) { alvo.setAttribute("aria-expanded", "false"); }
        pop = null; alvo = null; idx = -1;
        document.removeEventListener("mousedown", cliqueFora, true);
        window.removeEventListener("resize", fechar);
        window.removeEventListener("scroll", fechar, true);
    }

    function cliqueFora(e) {
        if (pop && !pop.contains(e.target) && e.target !== alvo) { fechar(); }
    }

    function itens() {
        return pop ? pop.querySelectorAll(".sel-op") : [];
    }

    /* anda pela lista pulando o que está desabilitado */
    function marcar(n, passo) {
        var lista = itens();
        if (!lista.length) { return; }
        var i = (n + lista.length) % lista.length;
        var voltas = 0;
        while (lista[i].getAttribute("aria-disabled") === "true" && voltas < lista.length) {
            i = (i + (passo || 1) + lista.length) % lista.length;
            voltas++;
        }
        idx = i;
        for (var k = 0; k < lista.length; k++) {
            lista[k].classList.toggle("sob-cursor", k === idx);
        }
        lista[idx].scrollIntoView({ block: "nearest" });
    }

    function escolher(i) {
        var op = alvo && alvo.options[i];
        if (!op || op.disabled) { return; }
        alvo.selectedIndex = i;
        var s = alvo;
        fechar();
        s.dispatchEvent(new Event("change", { bubbles: true }));
    }

    function abrir(sel) {
        fechar();
        alvo = sel;

        pop = document.createElement("div");
        pop.className = "sel-pop";
        pop.setAttribute("role", "listbox");
        /* o acento é da seção onde o select está */
        var acento = getComputedStyle(sel).getPropertyValue("--accent");
        if (acento) { pop.style.setProperty("--accent", acento.trim()); }

        Array.prototype.forEach.call(sel.options, function (o, i) {
            var li = document.createElement("div");
            li.className = "sel-op" + (i === sel.selectedIndex ? " escolhida" : "");
            li.setAttribute("role", "option");
            li.setAttribute("aria-selected", i === sel.selectedIndex ? "true" : "false");
            if (o.disabled) { li.setAttribute("aria-disabled", "true"); }
            li.textContent = o.textContent;
            li.dataset.i = i;
            pop.appendChild(li);
        });

        document.body.appendChild(pop);

        var r = sel.getBoundingClientRect();
        pop.style.minWidth = Math.max(r.width, 150) + "px";
        pop.style.left = Math.min(r.left, window.innerWidth - pop.offsetWidth - 8) + "px";

        /* abre para cima se não couber para baixo */
        var alt = pop.offsetHeight;
        if (r.bottom + alt + 6 > window.innerHeight && r.top - alt - 6 > 0) {
            pop.style.top = (r.top - alt - 3) + "px";
        } else {
            pop.style.top = (r.bottom + 3) + "px";
        }

        sel.setAttribute("aria-expanded", "true");
        marcar(sel.selectedIndex < 0 ? 0 : sel.selectedIndex, 1);

        document.addEventListener("mousedown", cliqueFora, true);
        window.addEventListener("resize", fechar);
        window.addEventListener("scroll", fechar, true);
    }

    /* o mousedown no select abre o nosso no lugar do nativo */
    document.addEventListener("mousedown", function (e) {
        var sel = e.target.closest && e.target.closest("select");
        if (!sel || !dentroDaFicha(sel) || sel.disabled) { return; }
        e.preventDefault();
        if (alvo === sel) { fechar(); return; }
        sel.focus();
        abrir(sel);
    }, true);

    document.addEventListener("click", function (e) {
        if (!pop) { return; }
        var op = e.target.closest(".sel-op");
        if (op && pop.contains(op)) { escolher(Number(op.dataset.i)); }
    });

    document.addEventListener("mousemove", function (e) {
        if (!pop) { return; }
        var op = e.target.closest(".sel-op");
        if (op && pop.contains(op)) { marcar(Number(op.dataset.i), 1); }
    });

    document.addEventListener("keydown", function (e) {
        var sel = e.target.closest && e.target.closest("select");

        if (!pop) {
            if (!sel || !dentroDaFicha(sel)) { return; }
            if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown" || e.key === "ArrowUp") {
                e.preventDefault();
                abrir(sel);
            }
            return;
        }

        if (e.key === "Escape") { e.preventDefault(); fechar(); }
        else if (e.key === "ArrowDown") { e.preventDefault(); marcar(idx + 1, 1); }
        else if (e.key === "ArrowUp") { e.preventDefault(); marcar(idx - 1, -1); }
        else if (e.key === "Home") { e.preventDefault(); marcar(0, 1); }
        else if (e.key === "End") { e.preventDefault(); marcar(itens().length - 1, -1); }
        else if (e.key === "Enter" || e.key === " ") { e.preventDefault(); escolher(idx); }
        else if (e.key === "Tab") { fechar(); }
    }, true);
}());
