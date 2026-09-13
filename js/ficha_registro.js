/* ------------------------------------------------------------------------- */
/* Abas Perfil, Treinos e Registro                                             */
/* Tudo o que a planilha guarda além dos números.                              */
/* ------------------------------------------------------------------------- */

/* Campo de texto ligado a um caminho aninhado, tipo "aparencia.idade".
   O tratador genérico de eventos entende data-caminho. */
function campoCaminho(caminho, rotulo, valor, tipo) {
    return '<label class="cab-campo"><span>' + esc(rotulo) + "</span>" +
        '<input type="' + (tipo || "text") + '" data-caminho="' + caminho +
        '" value="' + esc(valor == null ? "" : valor) + '"></label>';
}

function areaCaminho(caminho, rotulo, valor) {
    return '<div class="bloco-texto"><h4>' + esc(rotulo) + "</h4>" +
        '<textarea data-caminho="' + caminho + '" rows="3">' + esc(valor || "") + "</textarea></div>";
}

/* ------------------------------------------------------------- marcas ---- */

function desenhar_marcas() {
    var alvo = document.getElementById("ficha-marcas");
    if (!alvo) { return; }

    var marcas = MARCAS_PV.map(function (m) {
        return '<label class="marca"><input type="checkbox" data-marca="' + m.id + '"' +
            (F.marcas && F.marcas[m.id] ? " checked" : "") + "><span>" + esc(m.nome) + "</span></label>";
    }).join("");

    var rds = TIPOS_DANO_RD.map(function (t) {
        return '<label class="rd" title="' + esc(t.nome) + '">' +
            "<span>" + esc(t.id.toUpperCase()) + "</span>" +
            '<input type="number" data-rd="' + t.id + '" value="' +
            ((F.rds && Number(F.rds[t.id])) || 0) + '"></label>';
    }).join("");

    var pip = function (campo, n) {
        var v = (F.testesMorte && Number(F.testesMorte[campo])) || 0;
        var caixas = "";
        for (var i = 1; i <= 3; i++) {
            caixas += '<button type="button" class="pip' + (i <= v ? " cheio" : "") +
                '" data-morte-set="' + campo + '" data-valor="' + (i === v ? i - 1 : i) +
                '" aria-label="' + i + '"></button>';
        }
        return caixas;
    };

    var dados = DADOS_VIDA.map(function (d) {
        return '<label class="dado-vida"><span>' + d + "</span>" +
            '<input type="number" min="0" data-dado-vida="' + d + '" value="' +
            ((F.dadosVidaGastos && Number(F.dadosVidaGastos[d])) || 0) + '" title="gastos"></label>';
    }).join("");

    alvo.innerHTML =
        '<div class="grupo-marcas">' + marcas + "</div>" +
        '<div class="linha-estado">' +
        '<label class="cab-campo"><span>Estado</span>' +
        '<input type="text" data-caminho="estadoAtual" value="' + esc(F.estadoAtual || "") + '"></label>' +
        '<label class="cab-campo curto"><span>RD geral</span>' +
        '<input type="number" data-caminho="rdGeral" value="' + (Number(F.rdGeral) || 0) + '"></label>' +
        '<label class="cab-campo curto"><span>XP</span>' +
        '<input type="number" data-caminho="experiencia" value="' + (Number(F.experiencia) || 0) + '"></label>' +
        "</div>" +
        '<h2>RD por tipo</h2><div class="grade-rd">' + rds + "</div>" +
        '<h2>Testes de morte</h2>' +
        '<div class="morte"><span>Sucessos</span><div class="pips">' + pip("sucessos") + "</div></div>" +
        '<div class="morte"><span>Falhas</span><div class="pips">' + pip("falhas") + "</div></div>" +
        '<h2>Dados de vida <span class="h2-nota">gastos</span></h2>' +
        '<div class="grade-dados">' + dados + "</div>";
}

/* ------------------------------------------------------------- perfil ---- */

function desenhar_perfil() {
    var alvo = document.getElementById("ficha-perfil");
    if (!alvo) { return; }

    var apt = (F.aptidoesAmaldicoadas || []).map(function (a, i) {
        return '<div class="linha-apt">' +
            '<input type="text" class="apt-nome-campo" data-lista="aptidoesAmaldicoadas" data-i="' + i +
            '" data-chave="nome" value="' + esc(a.nome || "") + '" placeholder="nome">' +
            '<input type="text" class="micro" data-lista="aptidoesAmaldicoadas" data-i="' + i +
            '" data-chave="atual" value="' + esc(a.atual || "") + '" title="Atual">' +
            '<input type="text" class="micro" data-lista="aptidoesAmaldicoadas" data-i="' + i +
            '" data-chave="max" value="' + esc(a.max || "") + '" title="Máx.">' +
            '<input type="text" class="micro" data-lista="aptidoesAmaldicoadas" data-i="' + i +
            '" data-chave="custo" value="' + esc(a.custo || "") + '" title="Custo">' +
            '<button type="button" class="btn-mini perigo" data-remover-lista="aptidoesAmaldicoadas" ' +
            'data-i="' + i + '">' + icone("fechar") + "</button></div>";
    }).join("");

    var feiticos = NIVEIS_FEITICO.map(function (n) {
        var lista = (F.feiticos && F.feiticos["n" + n]) || [];
        return '<div class="coluna-feitico"><h4>Nível ' + n + "</h4>" +
            '<textarea data-feitico="' + n + '" rows="4" placeholder="um por linha">' +
            esc(lista.join("\n")) + "</textarea></div>";
    }).join("");

    var votos = (F.votos || []).map(function (v, i) {
        return '<div class="voto">' +
            '<input type="text" class="voto-nome" data-lista="votos" data-i="' + i +
            '" data-chave="nome" value="' + esc(v.nome || "") + '" placeholder="nome do voto">' +
            '<button type="button" class="btn-mini perigo" data-remover-lista="votos" data-i="' + i +
            '">' + icone("fechar") + "</button>" +
            '<textarea data-lista="votos" data-i="' + i + '" data-chave="descricao" rows="3">' +
            esc(v.descricao || "") + "</textarea></div>";
    }).join("");

    alvo.innerHTML =
        "<h2>Aptidões amaldiçoadas</h2>" +
        '<div class="cab-lista"><span>Nome</span><span>Atual</span><span>Máx.</span><span>Custo</span></div>' +
        '<div class="lista-apt">' + apt + "</div>" +
        '<button type="button" class="btn secundario" data-add-lista="aptidoesAmaldicoadas">' +
        icone("add") + "Aptidão</button>" +

        "<h2>Lista de feitiços</h2>" +
        '<div class="grade-feiticos">' + feiticos + "</div>" +

        "<h2>Expansão de domínio</h2>" +
        campoCaminho("expansao.nome", "Nome", F.expansao && F.expansao.nome) +
        campoCaminho("expansao.tipo", "Tipo", F.expansao && F.expansao.tipo) +
        areaCaminho("expansao.descricao", "Descrição", F.expansao && F.expansao.descricao) +

        "<h2>Técnica máxima</h2>" +
        campoCaminho("tecnicaMaxima.nome", "Nome", F.tecnicaMaxima && F.tecnicaMaxima.nome) +
        areaCaminho("tecnicaMaxima.descricao", "Descrição", F.tecnicaMaxima && F.tecnicaMaxima.descricao) +

        "<h2>Votos restritivos</h2>" +
        '<div class="lista-votos">' + votos + "</div>" +
        '<button type="button" class="btn secundario" data-add-lista="votos">' +
        icone("add") + "Voto</button>";
}

/* ------------------------------------------------------------ treinos ---- */

function desenhar_treinos() {
    var alvo = document.getElementById("ficha-treinos");
    if (!alvo) { return; }

    var feitos = TREINAMENTOS.filter(function (t) { return treinoCompleto(t.id); }).length;

    alvo.innerHTML =
        '<p class="rodape-col">' + feitos + " de " + TREINAMENTOS.length +
        " trilhas concluídas. Cada trilha tem quatro etapas; a recompensa vale quando as quatro estão marcadas.</p>" +
        TREINAMENTOS.map(function (t) {
            var etapas = (F.treinos && F.treinos[t.id]) || [false, false, false, false];
            var completo = treinoCompleto(t.id);
            return '<div class="trilha' + (completo ? " completa" : "") + '">' +
                '<div class="trilha-topo">' +
                '<span class="trilha-nome">' + esc(t.nome) + "</span>" +
                '<input type="text" class="trilha-instrutor" data-instrutor="' + t.id +
                '" value="' + esc((F.treinosInstrutor && F.treinosInstrutor[t.id]) || "") +
                '" placeholder="instrutor">' +
                '<span class="trilha-etapas">' +
                etapas.map(function (marcada, i) {
                    return '<label class="etapa" title="' + (i + 1) + 'ª etapa">' +
                        '<input type="checkbox" data-trilha="' + t.id + '" data-etapa="' + i + '"' +
                        (marcada ? " checked" : "") + "><span>" + (i + 1) + "</span></label>";
                }).join("") + "</span>" +
                "</div>" +
                '<p class="trilha-premio">' + esc(t.recompensa) + "</p>" +
                "</div>";
        }).join("");
}

/* Atualiza uma trilha sem redesenhar a lista, para nao roubar o foco. */
function atualizar_trilha(id) {
    var caixa = document.querySelector('[data-trilha="' + id + '"]');
    var bloco = caixa && caixa.closest(".trilha");
    if (bloco) { bloco.classList.toggle("completa", treinoCompleto(id)); }
    var contador = document.querySelector("#ficha-treinos .rodape-col");
    if (contador) {
        var feitos = TREINAMENTOS.filter(function (t) { return treinoCompleto(t.id); }).length;
        contador.textContent = feitos + " de " + TREINAMENTOS.length +
            " trilhas concluídas. Cada trilha tem quatro etapas; a recompensa vale quando as quatro estão marcadas.";
    }
}

/* ----------------------------------------------------------- registro ---- */

function desenhar_registro() {
    var alvo = document.getElementById("ficha-registro");
    if (!alvo) { return; }

    var inv = (F.inventario || []).map(function (it, i) {
        return '<div class="linha-item">' +
            '<input type="text" data-lista="inventario" data-i="' + i + '" data-chave="nome" value="' +
            esc(it.nome || "") + '" placeholder="nome do item">' +
            '<input type="number" class="micro" data-lista="inventario" data-i="' + i +
            '" data-chave="quant" value="' + (Number(it.quant) || 0) + '" title="Quantidade">' +
            '<input type="number" class="micro" data-lista="inventario" data-i="' + i +
            '" data-chave="peso" value="' + (Number(it.peso) || 0) + '" title="Peso">' +
            '<input type="text" class="micro" data-lista="inventario" data-i="' + i +
            '" data-chave="preco" value="' + esc(it.preco || "") + '" title="Preço">' +
            '<button type="button" class="btn-mini perigo" data-remover-lista="inventario" data-i="' + i +
            '">' + icone("fechar") + "</button></div>";
    }).join("");

    var ocupados = espacosOcupados();

    alvo.innerHTML =
        "<h2>Retrato</h2>" +
        '<div class="retrato">' +
        (F.retrato
            ? '<img src="' + esc(F.retrato) + '" alt="Retrato do personagem">'
            : '<div class="retrato-vazio">sem imagem</div>') +
        '<div class="retrato-acoes">' +
        '<label class="btn secundario">' + icone("add") + "Escolher imagem" +
        '<input type="file" id="retrato-arquivo" accept="image/*" hidden></label>' +
        (F.retrato ? '<button type="button" class="btn-mini perigo" data-tirar-retrato="1">remover</button>' : "") +
        '</div></div>' +
        '<p class="mesa-nota">A imagem é reduzida para no máximo 420px e guardada dentro da própria ficha, ' +
        "então ela viaja junto no Exportar.</p>" +

        "<h2>Aparência</h2>" +
        CAMPOS_APARENCIA.map(function (c) {
            return c.longo
                ? areaCaminho("aparencia." + c.id, c.nome, F.aparencia && F.aparencia[c.id])
                : campoCaminho("aparencia." + c.id, c.nome, F.aparencia && F.aparencia[c.id]);
        }).join("") +

        "<h2>História</h2>" +
        CAMPOS_HISTORIA.map(function (c) {
            return areaCaminho("historia." + c.id, c.nome, F.historia && F.historia[c.id]);
        }).join("") +

        '<h2>Inventário <span class="h2-nota">' + ocupados + " de " +
        (Number(F.limiteEspacos) || 0) + " espaços</span></h2>" +
        '<div class="cab-lista inv"><span>Item</span><span>Qt.</span><span>Peso</span><span>Preço</span></div>' +
        '<div class="lista-inv">' + inv + "</div>" +
        '<button type="button" class="btn secundario" data-add-lista="inventario">' +
        icone("add") + "Item</button>" +
        '<label class="cab-campo limite"><span>Limite de espaços</span>' +
        '<input type="number" data-caminho="limiteEspacos" value="' +
        (Number(F.limiteEspacos) || 0) + '"></label>';
}

/* A imagem entra reduzida: uma foto de 1,3 MB estoura o armazenamento do
   navegador, e a ficha inteira precisa caber no Exportar. */
function guardar_retrato(arquivo) {
    if (!arquivo) { return; }
    var leitor = new FileReader();
    leitor.onload = function () {
        var img = new Image();
        img.onload = function () {
            var max = 420;
            var escala = Math.min(1, max / Math.max(img.width, img.height));
            var c = document.createElement("canvas");
            c.width = Math.round(img.width * escala);
            c.height = Math.round(img.height * escala);
            c.getContext("2d").drawImage(img, 0, 0, c.width, c.height);
            F.retrato = c.toDataURL("image/jpeg", 0.82);
            desenhar();
        };
        img.src = leitor.result;
    };
    leitor.readAsDataURL(arquivo);
}
