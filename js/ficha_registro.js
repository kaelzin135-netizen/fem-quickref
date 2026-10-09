/* ------------------------------------------------------------------------- */
/* Abas Perfil, Treinos e Registro                                             */
/* Tudo o que a planilha guarda além dos números.                              */
/* ------------------------------------------------------------------------- */

/* Campo de texto ligado a um caminho aninhado, tipo "aparencia.idade".
   O tratador genérico de eventos entende data-caminho. */
function campoCaminho(caminho, rotulo, valor, tipo, amplo) {
    return '<label class="cab-campo' + (amplo ? " amplo" : "") + '"><span>' + esc(rotulo) + "</span>" +
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
        (apt
            ? '<div class="cab-lista"><span>Nome</span><span>Atual</span><span>Máx.</span>' +
              '<span>Custo</span><span class="acao"></span></div>'
            : "") +
        '<div class="lista-apt">' +
        (apt || '<p class="aviso">Nenhuma aptidão anotada. Você recebe uma por nível, do 2º ao 20º.</p>') +
        "</div>" +
        '<button type="button" class="btn secundario" data-add-lista="aptidoesAmaldicoadas">' +
        icone("add") + "Aptidão</button>" +

        desenhoFeiticos() +

        "<h2>Expansão de domínio</h2>" +
        '<div class="campos-duplos">' +
        campoCaminho("expansao.nome", "Nome", F.expansao && F.expansao.nome) +
        campoCaminho("expansao.tipo", "Tipo", F.expansao && F.expansao.tipo) +
        "</div>" +
        areaCaminho("expansao.descricao", "Descrição", F.expansao && F.expansao.descricao) +

        "<h2>Técnica máxima</h2>" +
        '<div class="campos-duplos">' +
        campoCaminho("tecnicaMaxima.nome", "Nome", F.tecnicaMaxima && F.tecnicaMaxima.nome, null, true) +
        "</div>" +
        areaCaminho("tecnicaMaxima.descricao", "Descrição", F.tecnicaMaxima && F.tecnicaMaxima.descricao) +

        "<h2>Votos restritivos</h2>" +
        '<div class="lista-votos">' +
        (votos || '<p class="aviso">Nenhum voto. Um voto troca liberdade por poder — e a quebra cobra caro.</p>') +
        "</div>" +
        '<button type="button" class="btn secundario" data-add-lista="votos">' +
        icone("add") + "Voto</button>";
}


/* ---------------------------------------------------------- feiticos ---- */

var FILTRO_FEITICO = "";
var FEITICO_ABERTO = -1;

var CAMPOS_FEITICO = [
    { id: "execucao", nome: "Execução" },
    { id: "alcance", nome: "Alcance" },
    { id: "alvo", nome: "Alvo" },
    { id: "duracao", nome: "Duração" },
    { id: "custo", nome: "Custo" }
];

/* Um cartao por feiticio, agrupado por nivel, com o chevron abrindo os
   detalhes — o desenho da aba Rituais do C.R.I.S. */
/* O custo e campo livre ("2 PE", "2", "1 por nivel"); so da para gastar
   sozinho quando comeca com um numero. Nos outros casos nao ha botao. */
function custoFeitico(f) {
    var m = /^\s*(\d+)/.exec(String(f.custo == null ? "" : f.custo));
    return m ? Number(m[1]) : 0;
}

function cartaoFeitico(f, i) {
    var aberto = FEITICO_ABERTO === i;
    return '<div class="feitico' + (aberto ? " aberto" : "") + '">' +
        '<div class="feitico-topo">' +
        '<button type="button" class="feitico-seta" data-abrir-feitico="' + i +
        '" aria-expanded="' + (aberto ? "true" : "false") + '">' +
        '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 10l5 5 5-5z"/></svg></button>' +
        '<input type="text" class="feitico-nome" data-lista="feiticos" data-i="' + i +
        '" data-chave="nome" value="' + esc(f.nome || "") + '" placeholder="nome do feitiço">' +
        (custoFeitico(f)
            ? '<button type="button" class="btn-mini feitico-usar" data-usar-feitico="' + i +
              '" title="Gastar ' + custoFeitico(f) + ' de energia">' +
              custoFeitico(f) + "</button>"
            : "") +
        '<button type="button" class="btn-mini perigo" data-remover-lista="feiticos" data-i="' + i +
        '">' + icone("fechar") + "</button>" +
        "</div>" +
        (aberto
            ? '<div class="feitico-corpo">' +
              '<span class="feitico-nivel">Nível ' + (Number(f.nivel) || 0) + "</span>" +
              '<label class="feitico-sel"><span>Nível</span>' +
              '<select data-lista="feiticos" data-i="' + i + '" data-chave="nivel">' +
              NIVEIS_FEITICO.map(function (n) {
                  return '<option value="' + n + '"' +
                      (Number(f.nivel) === n ? " selected" : "") + ">" + n + "</option>";
              }).join("") + "</select></label>" +
              CAMPOS_FEITICO.map(function (c) {
                  return '<div class="feitico-campo"><span>' + esc(c.nome) + ":</span>" +
                      '<input type="text" data-lista="feiticos" data-i="' + i +
                      '" data-chave="' + c.id + '" value="' + esc(f[c.id] || "") + '"></div>';
              }).join("") +
              '<textarea data-lista="feiticos" data-i="' + i + '" data-chave="descricao" rows="4" ' +
              'placeholder="o que o feitiço faz">' + esc(f.descricao || "") + "</textarea>" +
              "</div>"
            : "") +
        "</div>";
}

function desenhoFeiticos() {
    var lista = F.feiticos || [];
    var busca = FILTRO_FEITICO.toLowerCase();
    var cartoes = "";

    NIVEIS_FEITICO.forEach(function (n) {
        var doNivel = lista
            .map(function (f, i) { return { f: f, i: i }; })
            .filter(function (x) {
                return (Number(x.f.nivel) || 0) === n &&
                    (!busca || (x.f.nome || "").toLowerCase().indexOf(busca) >= 0);
            });
        if (!doNivel.length) { return; }
        cartoes += '<h4 class="feitico-grupo">Nível ' + n +
            ' <span>' + doNivel.length + "</span></h4>" +
            doNivel.map(function (x) { return cartaoFeitico(x.f, x.i); }).join("");
    });

    if (!cartoes) {
        cartoes = '<p class="aviso">' +
            (busca ? "Nenhum feitiço com esse nome." : "Nenhum feitiço anotado ainda.") + "</p>";
    }

    return '<h2>Feitiços <span class="h2-nota">' + lista.length + " no total</span></h2>" +
        '<div class="feitico-barra">' +
        '<input type="search" id="filtro-feitico" placeholder="Filtrar feitiços" value="' +
        esc(FILTRO_FEITICO) + '">' +
        '<div class="feitico-cd"><span>CD de feitiço</span><b>' + cdEspec().total + "</b></div>" +
        "</div>" +
        '<div class="lista-feiticos">' + cartoes + "</div>" +
        '<button type="button" class="btn secundario" data-add-lista="feiticos">' +
        icone("add") + "Feitiço</button>";
}

/* ------------------------------------------------------------ treinos ---- */

/* "todas" | "andando" | "feitas" */
var FILTRO_TRILHA = "todas";

function _etapasDe(id) {
    return (F.treinos && F.treinos[id]) || [false, false, false, false];
}

function desenhar_treinos() {
    var alvo = document.getElementById("ficha-treinos");
    if (!alvo) { return; }

    var feitos = TREINAMENTOS.filter(function (t) { return treinoCompleto(t.id); }).length;
    var andando = TREINAMENTOS.filter(function (t) {
        return !treinoCompleto(t.id) && _etapasDe(t.id).some(Boolean);
    }).length;

    var lista = TREINAMENTOS.filter(function (t) {
        if (FILTRO_TRILHA === "feitas") { return treinoCompleto(t.id); }
        if (FILTRO_TRILHA === "andando") {
            return !treinoCompleto(t.id) && _etapasDe(t.id).some(Boolean);
        }
        return true;
    });

    var chip = function (id, rotulo, n) {
        return '<button type="button" class="cat-chip' + (FILTRO_TRILHA === id ? " ativa" : "") +
            '" data-filtro-trilha="' + id + '">' + esc(rotulo) +
            (n === null ? "" : ' <span class="chip-n">' + n + "</span>") + "</button>";
    };

    alvo.innerHTML =
        '<div class="trilha-placar">' +
        '<div class="trilha-barra" style="--feito:' +
        Math.round(feitos / TREINAMENTOS.length * 100) + '%"></div>' +
        "<span><b>" + focosGastos() + "</b> focos · <b>" + feitos + "</b> de " +
        TREINAMENTOS.length + " linhas completas</span>" +
        "</div>" +
        '<p class="rodape-col">Cada etapa marcada já vale o benefício dela. ' +
        "As três primeiras custam 1 foco, a quarta custa 2; fechar as quatro " +
        "ainda dá o <b>Bônus de Treinamento Completo</b> por cima.</p>" +
        '<div class="item-cats">' +
        chip("todas", "todas", TREINAMENTOS.length) +
        chip("andando", "em andamento", andando) +
        chip("feitas", "completas", feitos) +
        "</div>" +
        (lista.length ? "" : '<p class="aviso">Nenhuma trilha nesse estado.</p>') +
        lista.map(cartaoTrilha).join("");
}

/* Focos gastos somando todas as linhas: 1 por etapa, 2 na quarta. */
function focosGastos() {
    var n = 0;
    TREINAMENTOS.forEach(function (t) {
        var marcadas = _etapasDe(t.id);
        (t.etapas || []).forEach(function (e, i) {
            if (marcadas[i]) { n += Number(e.focos) || 1; }
        });
    });
    return n;
}

function cartaoTrilha(t) {
    var marcadas = _etapasDe(t.id);
    var quantas = marcadas.filter(Boolean).length;
    var completo = treinoCompleto(t.id);

    var selo = t.repetivel ? '<span class="trilha-selo">repetível</span>'
        : t.soRestringido ? '<span class="trilha-selo">só Restringido</span>' : "";

    return '<div class="trilha' + (completo ? " completa" : "") +
        (!completo && quantas ? " andando" : "") + '">' +

        '<div class="trilha-topo">' +
        '<span class="trilha-nome">' + esc(t.nome) + "</span>" + selo +
        '<span class="trilha-conta">' + quantas + "/4</span>" +
        '<input type="text" class="trilha-instrutor" data-instrutor="' + t.id +
        '" value="' + esc((F.treinosInstrutor && F.treinosInstrutor[t.id]) || "") +
        '" placeholder="instrutor">' +
        "</div>" +

        '<ol class="trilha-etapas-lista">' +
        (t.etapas || []).map(function (e, i) {
            return linhaEtapa(t, e, i, !!marcadas[i]);
        }).join("") + "</ol>" +

        blocoCompleto(t, completo);
}

/* Uma etapa: a caixa, o que ela exige, o que ela dá e o que a ficha já somou. */
function linhaEtapa(t, e, i, marcada) {
    return '<li class="etapa-linha' + (marcada ? " feita" : "") + '">' +
        '<label class="etapa-caixa" title="' + (i + 1) + 'ª etapa">' +
        '<input type="checkbox" data-trilha="' + t.id + '" data-etapa="' + i + '"' +
        (marcada ? " checked" : "") + "><span>" + (i + 1) + "ª</span></label>" +
        '<div class="etapa-corpo">' +
        '<p class="etapa-texto">' +
        (e.exige ? '<span class="etapa-exige">' + esc(e.exige) + "</span>" : "") +
        (Number(e.focos) > 1 ? '<span class="etapa-focos">' + e.focos + " focos</span>" : "") +
        esc(e.texto) + "</p>" +
        selosEfeito(e, marcada) +
        "</div></li>";
}

/* O Bônus de Treinamento Completo, que só entra com as quatro marcadas. */
function blocoCompleto(t, completo) {
    var c = t.completo || {};
    var escolha = (F.treinosEscolha || {})[t.id] || "";

    return '<div class="trilha-completo' + (completo ? " ativo" : "") + '">' +
        '<span class="trilha-completo-rot">Completo</span>' +
        '<p class="etapa-texto">' + esc(c.texto || "") + "</p>" +
        selosEfeito(c, completo) +
        (c.escolhaAptidao
            ? '<div class="trilha-escolha-linha">' +
              '<span class="trilha-efeito' + (completo && escolha ? " ativo" : "") +
              '">+1 nível de aptidão em</span>' +
              '<select class="trilha-escolha" data-escolha="' + t.id + '">' +
              '<option value="">escolher…</option>' +
              APTIDOES_NIVEL.map(function (a) {
                  return '<option value="' + a.id + '"' + (escolha === a.id ? " selected" : "") +
                      ">" + esc(a.nome) + "</option>";
              }).join("") + "</select></div>"
            : "") +
        "</div>";
}

/* O que a ficha soma sozinha, e o que continua na mão da mesa. */
function selosEfeito(e, ativo) {
    var selos = (e.efeitos || []).map(function (x) {
        var a = ALVOS.filter(function (y) { return y.id === x.alvo; })[0];
        return '<span class="trilha-efeito' + (ativo ? " ativo" : "") + '">' +
            (x.valor > 0 ? "+" : "") + x.valor + " " + esc(a ? a.rotulo : x.alvo) + "</span>";
    }).join("");

    var manual = e.manual
        ? '<span class="trilha-manual">na mão: ' + esc(e.manual) + "</span>"
        : "";

    if (!selos && !manual) { return ""; }
    return '<div class="etapa-selos">' + selos + manual + "</div>";
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
        '<div class="retrato' + (F.retrato ? "" : " vazia") + '">' +
        (F.retrato
            ? '<img src="' + esc(F.retrato) + '" alt="Retrato do personagem">'
            : '<label class="retrato-vazio" id="retrato-alvo">' +
              '<span class="retrato-ico">' + icone("add") + "</span>" +
              "<span><b>Solte uma imagem aqui</b> ou clique para escolher</span>" +
              '<input type="file" id="retrato-arquivo" accept="image/*" hidden></label>') +
        '<div class="retrato-acoes">' +
        (F.retrato
            ? '<label class="btn secundario">' + icone("add") + "Trocar imagem" +
              '<input type="file" id="retrato-arquivo" accept="image/*" hidden></label>' +
              '<button type="button" class="btn-mini perigo" data-tirar-retrato="1">remover</button>'
            : "") +
        "</div></div>" +
        '<p class="mesa-nota">Reduzida para 420px e guardada dentro da ficha, então viaja no Exportar.</p>' +

        "<h2>Aparência</h2>" +
        '<div class="campos-duplos">' +
        CAMPOS_APARENCIA.filter(function (c) { return !c.longo; }).map(function (c) {
            return campoCaminho("aparencia." + c.id, c.nome,
                F.aparencia && F.aparencia[c.id], "text", c.amplo);
        }).join("") + "</div>" +
        CAMPOS_APARENCIA.filter(function (c) { return c.longo; }).map(function (c) {
            return areaCaminho("aparencia." + c.id, c.nome, F.aparencia && F.aparencia[c.id]);
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
/* Reduz a imagem ja carregada para um quadrado de lado "lado", cortando pelo
   centro — o cartao da mesa mostra em 16/10 e corta de todo jeito. */
function _miniatura(img, lado) {
    var c = document.createElement("canvas");
    c.width = lado;
    c.height = Math.round(lado * 0.625);        /* 16/10, igual ao cartao */
    var ctx = c.getContext("2d");
    var escala = Math.max(c.width / img.width, c.height / img.height);
    var w = img.width * escala, h = img.height * escala;
    ctx.drawImage(img, (c.width - w) / 2, (c.height - h) / 2, w, h);
    return c.toDataURL("image/jpeg", 0.7);
}

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
            /* miniatura para o cartao da mesa: o retrato de 420px vira um
               base64 de ~1 MB, e mandar seis desses a cada abertura do quadro
               seria absurdo. 160px resolve o cartao e cabe na listagem. */
            F.capa = _miniatura(img, 160);
            desenhar();
        };
        img.src = leitor.result;
    };
    leitor.readAsDataURL(arquivo);
}
