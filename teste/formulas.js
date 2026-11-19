/* ------------------------------------------------------------------------- */
/* Confere as contas da ficha contra o Livro de Regras v2.5.2.                 */
/*                                                                            */
/* Rode com:  node teste/formulas.js                                          */
/*                                                                            */
/* Cada caso cita a página de onde a regra saiu. A ideia não é cobrir tudo —  */
/* é travar as contas que, se quebrarem, quebram a mesa inteira sem ninguém   */
/* perceber: PV, PE, Defesa, CD e o bônus de treinamento.                     */
/* ------------------------------------------------------------------------- */

var fs = require("fs");
var path = require("path");
var raiz = path.join(__dirname, "..");

/* Os arquivos de dados declaram globais; avaliá-los aqui é o jeito mais
   simples de usar exatamente o que o site usa, sem duplicar valor nenhum.
   O eval indireto — (0, eval) — avalia no escopo global, senão um "var"
   dentro desta função não sairia dela. */
function carregarArquivo(arquivo) {
    (0, eval)(fs.readFileSync(path.join(raiz, arquivo), "utf8"));
}

carregarArquivo("js/data_pericia.js");
carregarArquivo("js/data_registro.js");
carregarArquivo("js/data_ficha.js");
carregarArquivo("js/data_feitico_tabela.js");
/* ficha.js não toca no document no topo, então dá para chamar as funções
   reais da ficha aqui em vez de copiar as contas para o teste. */
carregarArquivo("js/ficha.js");

var falhas = 0, passou = 0;

function confere(nome, obtido, esperado, pagina) {
    if (obtido === esperado) {
        passou++;
    } else {
        falhas++;
        console.log("  FALHOU  " + nome);
        console.log("          esperado " + esperado + ", obtido " + obtido +
            (pagina ? "   (livro, pg. " + pagina + ")" : ""));
    }
}

/* ------------------------------------------------------- bônus de treino -- */
/* Os helpers daqui levam sufixo (bt4, defesaDaTabela, periciaDaTabela) porque
   ficha.js já define bt(), defesa() e pericia() lendo a ficha carregada. */
/* "Seu bônus de treinamento inicia como +2 e, nos níveis 5, 9, 13 e 17,
   ele aumenta em +1." — pg. 281 */
function bt4(nivel) { return 1 + Math.ceil(nivel / 4); }

[[1, 2], [4, 2], [5, 3], [8, 3], [9, 4], [12, 4],
 [13, 5], [16, 5], [17, 6], [20, 6]].forEach(function (par) {
    confere("bônus de treinamento no nível " + par[0], bt4(par[0]), par[1], 281);
});

/* ------------------------------------------------------------ modificador -- */
function mod(valor) {
    return valor >= 10 ? Math.floor((valor - 10) / 2) : Math.ceil((valor - 10) / 2);
}
confere("modificador de 20", mod(20), 5);
confere("modificador de 16", mod(16), 3);
confere("modificador de 10", mod(10), 0);
confere("modificador de 8", mod(8), -1);

/* ------------------------------------------------------------------- PV --- */
/* Lutador: "No primeiro nível seu máximo de vida é 12 + Modificador de
   Constituição"; nos seguintes "aumenta em 1d10 + Mod. de Constituição. Você
   também pode escolher aumentar em 6 + Modificador de Constituição". — pg. 49 */
/* "pvDaTabela" e nao "pvMax": ficha.js ja tem um pvMax() que le a ficha
   carregada, e um nome repetido aqui o sombrearia. */
function pvDaTabela(espec, nivel, modCon) {
    return espec.pv1 + modCon + (nivel - 1) * (espec.pvPasso + modCon);
}
/* "doEspec" e nao "espec" de proposito: ficha.js ja traz um espec() que le a
   ficha carregada, e um nome repetido aqui o sombrearia. */
function doEspec(id) {
    return ESPECIALIZACOES.filter(function (e) { return e.id === id; })[0];
}
var lutador = doEspec("lutador");

/* As seis especializações, cada uma conferida contra o seu próprio capítulo.
   Esta tabela é transcrita do livro à mão de propósito: se alguém mexer em
   data_ficha.js, é aqui que o erro aparece. */
[
    /* id                   pg   pv1 passo dado     pe somaMod recurso     */
    ["lutador",      49,  12, 6, "1d10", 4, false, "Energia"],
    ["combate",      63,  12, 6, "1d10", 4, false, "Energia"],
    ["tecnica",      78,  10, 5, "1d8",  6, true,  "Energia"],
    ["controlador",  90,  10, 5, "1d8",  5, true,  "Energia"],
    ["suporte",     102,  10, 5, "1d8",  5, true,  "Energia"],
    /* O Restringido é o único capítulo sem a linha "Pontos de Energia
       Amaldiçoada": "Os Restringidos não possuem Pontos de Energia, recebendo
       os Pontos de Estamina no lugar" (pg. 21). São "4 pontos de estamina, e
       mais 4 a cada nível" (pg. 114) — mesmo número, outro recurso, e a ficha
       tem de dizer o nome certo na barra. */
    ["restringido", 114,  16, 7, "1d12", 4, false, "Estamina"]
].forEach(function (linha) {
    var id = linha[0], pg = linha[1], e = doEspec(id);
    confere("'" + id + "' existe no catálogo", !!e, true, pg);
    if (!e) { return; }
    confere(e.nome + ": PV no 1º nível", e.pv1, linha[2], pg);
    confere(e.nome + ": PV fixo por nível", e.pvPasso, linha[3], pg);
    confere(e.nome + ": dado de vida", e.pvDado, linha[4], pg);
    confere(e.nome + ": recurso por nível", e.peNivel, linha[5], pg);
    confere(e.nome + ": soma o mod. de atributo uma vez?", !!e.peSomaMod, linha[6], 21);
    confere(e.nome + ": nome do recurso na barra", e.recurso, linha[7], pg);
});

/* O passo fixo é sempre o dado de vida pela metade, arredondado para cima +1?
   Não — 1d10→6, 1d8→5, 1d12→7: é metade do dado +1. Vale travar, porque
   um dado novo entrando errado passaria sem ninguém notar. */
ESPECIALIZACOES.forEach(function (e) {
    var faces = Number(e.pvDado.split("d")[1]);
    confere(e.nome + ": passo fixo = metade do dado + 1", e.pvPasso, faces / 2 + 1, 49);
});

/* Os três que somam o modificador são exatamente Especialista em Técnica,
   Controlador e Suporte — pg. 20 nomeia os três. */
confere("exatamente três especializações somam o mod. de atributo",
    ESPECIALIZACOES.filter(function (e) { return e.peSomaMod; }).length, 3, 20);
/* A barra escreve "Pontos de " + recurso, então o campo guarda o
   substantivo e não a sigla — com "PE" a ficha dizia "Pontos de PE". */
confere("o recurso é um substantivo, não a sigla",
    /^(Energia|Estamina)$/.test(lutador.recurso), true, 21);
confere("só o Restringido usa Estamina",
    ESPECIALIZACOES.filter(function (e) { return e.recurso !== "Energia"; })
        .map(function (e) { return e.id; }).join(","), "restringido", 21);

/* PE máximo: "4/nível × nível", mais o modificador UMA vez para quem soma. */
function peDaTabela(e, nivel, modAtrib) {
    return e.peNivel * nivel + (e.peSomaMod ? modAtrib : 0);
}
confere("PE de um Esp. em Técnica nível 3, Int 16 (+3)", peDaTabela(doEspec("tecnica"), 3, 3), 21, 21);
confere("o modificador entra uma vez, não por nível", peDaTabela(doEspec("controlador"), 4, 3), 23, 21);
confere("Estamina do Restringido nível 5", peDaTabela(doEspec("restringido"), 5, 3), 20, 114);

/* A Amanaí: Lutador nível 2, Constituição 16 (+3) */
confere("PV da Amanaí (nível 2, Con 16)", pvDaTabela(lutador, 2, 3), 24, 49);
confere("PE da Amanaí (nível 2)", lutador.peNivel * 2, 8, 49);

/* --------------------------------------------------------------- Defesa --- */
/* "Defesa = 10 + Modificador de Destreza + Metade do seu Nível + Outros
   Bônus" — pg. 281 */
function defesaDaTabela(modDes, nivel, outros) {
    return 10 + modDes + Math.floor(nivel / 2) + (outros || 0);
}
confere("Defesa da Amanaí (Des 20, nível 2)", defesaDaTabela(5, 2, 0), 16, 281);
confere("Defesa com equipamento +2 e voto −2", defesaDaTabela(5, 2, 2 - 2), 16, 281);

/* ------------------------------------------------------------------- CD --- */
/* "10 + Metade do Nível de Personagem + Modificador de Atributo + Bônus de
   Treinamento + Outros Valores Aplicáveis" — pg. 172 */
function cd(nivel, modAtrib, outros) {
    return 10 + Math.floor(nivel / 2) + modAtrib + bt4(nivel) + (outros || 0);
}
confere("CD da Amanaí (nível 2, Des 20)", cd(2, 5, 0), 18, 172);

/* São DUAS CDs, cada uma com o seu atributo-base: a de Especialização rege
   o que vem da especialização, e a Amaldiçoada rege aptidões e feitiços.
   O caso que importa é quando os atributos DIVERGEM — com os dois iguais,
   um bug aqui passaria despercebido. */
confere("CD de Especialização (nível 6, Força 18 = +4)", cd(6, 4, 0), 20, 172);
confere("CD Amaldiçoada do mesmo personagem (Inteligência 14 = +2)", cd(6, 2, 0), 18, 172);
confere("as duas diferem quando os atributos diferem", cd(6, 4, 0) !== cd(6, 2, 0), true, 172);

/* -------------------------------------------------------------- perícia --- */
/* "mod. do atributo-chave + metade do nível + bônus de treinamento (se
   treinado)"; mestre soma 1,5× o bônus — pg. 280 */
function periciaDaTabela(modAtrib, nivel, treinado, mestre) {
    var b = 0;
    if (mestre) { b = Math.floor(bt4(nivel) * 1.5); }
    else if (treinado) { b = bt4(nivel); }
    return modAtrib + Math.floor(nivel / 2) + b;
}
confere("Acrobacia da Amanaí (Des +5, nível 2, treinada)", periciaDaTabela(5, 2, true, false), 8, 280);
confere("perícia sem treino (Des +5, nível 2)", periciaDaTabela(5, 2, false, false), 6, 280);
confere("perícia como mestre no nível 2 (BT 2 → 3)", periciaDaTabela(5, 2, true, true), 9, 280);

/* ----------------------------------------------------------- treinamentos -- */
/* "Cada linha tem 4 etapas: as três primeiras custam 1 foco cada e a quarta
   custa 2." — pg. 338 */
confere("onze linhas de treinamento", TREINAMENTOS.length, 11, 338);
TREINAMENTOS.forEach(function (t) {
    confere("'" + t.nome + "' tem 4 etapas", t.etapas.length, 4, 338);
    confere("'" + t.nome + "': 4ª etapa custa 2 focos", t.etapas[3].focos, 2, 338);
    confere("'" + t.nome + "' tem bônus de completo", !!t.completo, true, 338);
});

/* ------------------------------------------------------------- descansos -- */
/* Livro, pg. 335. O curto recupera "metade do seu máximo de energia
   amaldiçoada" — metade do MÁXIMO, não metade do que falta, que é o erro
   fácil de cometer aqui. */
function curto(pePerdidos, peTotal) {
    return pePerdidos - Math.min(pePerdidos, Math.floor(peTotal / 2));
}
confere("descanso curto: perdeu tudo de 20, volta 10", curto(20, 20), 10, 335);
confere("descanso curto: perdeu 4 de 20, volta só os 4", curto(4, 20), 0, 335);
confere("descanso curto não devolve mais do que faltava", curto(4, 20) >= 0, true, 335);
confere("descanso curto com máximo ímpar arredonda para baixo", curto(20, 21), 10, 335);

/* Agora a função de verdade, com uma ficha montada à mão: Lutador nível 3
   (PE máximo 12), machucado nos quatro campos ao mesmo tempo. */
function fichaFerida() {
    F = ficha_nova();
    F.especializacao = "lutador";
    F.nivel = 3;
    F.atributosBase.con = 16;
    F.pvPerdidos = 7;
    F.pePerdidos = 9;
    F.integridadePerdida = 4;
    F.dadosVidaGastos.d10 = 2;
}

fichaFerida();
confere("PE máximo do Lutador nível 3", peMax().total, 12, 49);
descansar("curto");
confere("curto devolve metade do máximo de PE (9 − 6)", F.pePerdidos, 3, 335);
confere("curto não mexe nos PV perdidos", F.pvPerdidos, 7, 335);
confere("curto não devolve dados de vida gastos", F.dadosVidaGastos.d10, 2, 335);
confere("curto não cura a Integridade da Alma", F.integridadePerdida, 4, 335);

fichaFerida();
var relato = descansar("longo");
confere("longo zera os PV perdidos", F.pvPerdidos, 0, 335);
confere("longo zera o PE perdido", F.pePerdidos, 0, 335);
confere("longo devolve os dados de vida", F.dadosVidaGastos.d10, 0, 335);
confere("longo também não cura a Integridade da Alma", F.integridadePerdida, 4, 335);
confere("o longo relata as três recuperações", relato.length, 3, 335);

/* Numa ficha intacta o botão não pode inventar recuperação nem estourar
   para negativo. */
F = ficha_nova();
F.especializacao = "lutador";
F.nivel = 3;
confere("descanso em ficha intacta não relata nada", descansar("longo").length, 0, 335);
confere("nenhum campo fica negativo", F.pePerdidos >= 0 && F.pvPerdidos >= 0, true, 335);

/* O Restringido descansa igual, mas o relato tem de dizer "Estamina". */
F = ficha_nova();
F.especializacao = "restringido";
F.nivel = 2;
F.pePerdidos = 8;
confere("o relato do Restringido fala de Estamina",
    /Estamina/.test(descansar("longo").join(" ")), true, 21);

/* -------------------------------------------------------------- exaustão -- */
/* Livro, pg. 323. O castigo no nível N é −N em "todas as suas rolagens,
   Defesa e Classe de Dificuldade", e −1,5 m de deslocamento por nível. */
function comExaustao(n) {
    F = ficha_nova();
    F.especializacao = "lutador";
    F.nivel = 4;
    F.atributosBase.des = 16;
    F.atributosBase.con = 16;
    F.exaustao = n;
}

comExaustao(0);
var defSa = defesa().total, pvSa = pvMax().total;
var cdESa = cdEspec().total, cdASa = cdAmaldicoada().total;
confere("sem exaustão a Defesa não muda", defSa, 10 + 3 + 2, 281);
confere("sem exaustão o deslocamento é 9 m", deslocamento().total, 9, 323);

comExaustao(1);
confere("exaustão 1: −1 na Defesa", defesa().total, defSa - 1, 323);
confere("exaustão 1: −1 na CD de Especialização", cdEspec().total, cdESa - 1, 323);
confere("exaustão 1: −1 na CD Amaldiçoada", cdAmaldicoada().total, cdASa - 1, 323);
confere("exaustão 1: −1,5 m de deslocamento", deslocamento().total, 7.5, 323);
confere("exaustão 1 ainda não corta o PV máximo", pvMax().total, pvSa, 323);

comExaustao(3);
confere("exaustão 3: −3 na Defesa", defesa().total, defSa - 3, 323);
confere("exaustão 3: −4,5 m de deslocamento", deslocamento().total, 4.5, 323);
/* Lutador nível 4, Con 16 (+3): 12+3 + 3×(6+3) = 42. Um quarto é 10,5, que
   é MENOR que 20, então o corte é de 20 — "o que for maior" vale para o
   tamanho da perda, não para o que sobra. */
confere("PV antes do corte", pvSa, 42, 49);
confere("exaustão 3 corta 20, não 1/4 (que seria menos)", pvMax().total, 42 - 20, 323);

comExaustao(5);
/* 42 de vida e um corte bruto de 50: o corte zeraria o personagem. O livro
   diz que aí ele NÃO é aplicado inteiro — "ao invés disso, desmaie-o por uma
   quantidade de descansos longos igual à quantidade de níveis de exaustão".
   Sem esse limite a ficha mostrava "PV máximo −8", que não existe no sistema. */
confere("o corte não leva o PV máximo a zero ou menos", pvMax().total, 1, 323);
confere("a ficha avisa o desmaio, por 5 descansos longos", desmaiaPorExaustao(), 5, 323);
confere("exaustão 5: −7,5 m de deslocamento", deslocamento().total, 1.5, 323);

/* Num personagem robusto o bastante, o corte de 50 cabe e é aplicado
   inteiro — aí não há desmaio. Lutador nível 12, Con 20 (+5): 12+5 +
   11×(6+5) = 138. Metade é 69, que é maior que 50, então o corte é 69. */
F = ficha_nova();
F.especializacao = "lutador";
F.nivel = 12;
F.atributosBase.con = 20;
F.exaustao = 5;
confere("PV antes do corte, nível 12", pvSemExaustao(), 138, 49);
confere("exaustão 5 corta metade (69), que é maior que 50", pvMax().total, 138 - 69, 323);
confere("com vida sobrando não há desmaio", desmaiaPorExaustao(), 0, 323);

comExaustao(5);

/* Atenção é 10 + a perícia de Percepção, que já levou o −N. Se a exaustão
   entrasse também em "atenção", o castigo seria cobrado duas vezes. */
comExaustao(0);
var atSa = atencao().total, perSa = pericia("percepcao").total;
comExaustao(2);
confere("exaustão 2: −2 na perícia", pericia("percepcao").total, perSa - 2, 323);
confere("a Atenção cai −2, e não −4", atencao().total, atSa - 2, 323);

/* O descanso longo tira UM nível, não todos (pg. 324). */
comExaustao(3);
descansar("longo");
confere("descanso longo tira um nível de exaustão", F.exaustao, 2, 324);
descansar("longo");
confere("e mais um no descanso seguinte", F.exaustao, 1, 324);
comExaustao(0);
confere("descanso longo não empurra a exaustão para negativo",
    (descansar("longo"), F.exaustao), 0, 324);

/* A ficha não deixa passar de 6 nem descer de 0. */
comExaustao(9);
confere("exaustão não passa de 6", nivelExaustao(), 6, 323);
comExaustao(-2);
confere("exaustão não desce de 0", nivelExaustao(), 0, 323);

/* ------------------------------------------- orçamento dos feitiços ---- */
/* Transcrição das pgs. 205 e 206. São números copiados à mão, que é
   exatamente o tipo de coisa que entra errado sem ninguém notar — a média
   de cada linha vem no próprio livro e serve de conferência cruzada. */
function mediaDe(expr) {
    var p = expr.split("d");
    return Number(p[0]) * (Number(p[1]) + 1) / 2;
}

/* A média impressa no livro confere com a média real? Quase sempre — mas
   três linhas estão um inteiro abaixo: 18d12 traz 116 e vale 117, 20d12 traz
   129 e vale 130, 22d10 traz 120 e vale 121. São deslizes do próprio livro,
   não da nossa transcrição, e a ficha mostra o que o livro diz, porque é o
   orçamento DELE que a mesa combina.

   Então esta conferência aceita 1 de folga. Não é frouxidão: um erro de
   digitação de verdade (3d8 virando 8d8, 14d10 virando 14d12) erra por
   muito mais que 1, e continuaria caindo aqui. */
function mediaBate(expr, impressa) {
    return Math.abs(mediaDe(expr) - impressa) <= 1;
}

[[0, "1d10", 5], [1, "3d8", 14], [2, "7d8", 31], [3, "12d8", 54],
 [4, "14d10", 77], [5, "18d12", 116]].forEach(function (L) {
    var u = FEITICO_DANO_UNICO[L[0]];
    confere("alvo único, TR, nível " + L[0], u.tr, L[1], 205);
    confere("média do " + L[1] + " confere com a do livro", u.trMedia, L[2], 205);
    confere("a média impressa de " + L[1] + " é plausível", mediaBate(L[1], L[2]), true, 205);
});

[[0, "1d10", 5], [1, "4d8", 18], [2, "8d8", 36], [3, "14d8", 63],
 [4, "16d10", 88], [5, "20d12", 129]].forEach(function (L) {
    var u = FEITICO_DANO_UNICO[L[0]];
    confere("alvo único, teste de ataque, nível " + L[0], u.ataque, L[1], 205);
    confere("média de " + L[1], u.ataqueMedia, L[2], 205);
    confere("a média impressa de " + L[1] + " é plausível", mediaBate(L[1], L[2]), true, 205);
});

/* O de ataque causa MAIS que o de TR, porque no de TR o alvo reduz pela
   metade. Se esses dois saírem trocados, a tabela vira um convite a montar
   o feitiço errado. */
[1, 2, 3, 4, 5].forEach(function (n) {
    var u = FEITICO_DANO_UNICO[n];
    confere("nível " + n + ": ataque rende mais que TR", u.ataqueMedia > u.trMedia, true, 205);
});

[[1, "2d8", 9], [2, "4d8", 18], [3, "5d12", 32],
 [4, "10d10", 55], [5, "12d12", 78]].forEach(function (L) {
    var a = FEITICO_DANO_AREA[L[0]];
    confere("dano em área, nível " + L[0], a.dado, L[1], 206);
    confere("média de " + L[1] + " em área", a.media, L[2], 206);
    confere("a média impressa de " + L[1] + " é plausível", mediaBate(L[1], L[2]), true, 206);
});

/* O livro não dá dano de área para o nível 0: aquela tabela começa no 1,
   porque feitiço de nível 0 é de narrativa. Inventar uma linha ali seria
   pôr na ficha um número que não existe. */
confere("nível 0 não tem dano em área", FEITICO_DANO_AREA[0], undefined, 206);
confere("nível 0 não tem área", FEITICO_AREA[0], undefined, 206);
confere("mas tem alcance", FEITICO_ALCANCE[0], 9, 205);

[[0, 9], [1, 12], [2, 18], [3, 24], [4, 30], [5, 48]].forEach(function (L) {
    confere("alcance do nível " + L[0], FEITICO_ALCANCE[L[0]], L[1], 205);
});
[[1, 4.5], [2, 6], [3, 9], [4, 12], [5, 18]].forEach(function (L) {
    confere("área do nível " + L[0], FEITICO_AREA[L[0]], L[1], 206);
});

/* A Técnica Máxima é a linha final de cada tabela, e não um nível 6. */
confere("Técnica Máxima: dano por TR", FEITICO_TECNICA_MAXIMA.danoTr, "26d12", 205);
confere("Técnica Máxima: dano por ataque", FEITICO_TECNICA_MAXIMA.danoAtaque, "28d12", 205);
confere("Técnica Máxima: dano em área", FEITICO_TECNICA_MAXIMA.danoArea, "22d10", 206);
confere("Técnica Máxima: alcance", FEITICO_TECNICA_MAXIMA.alcance, 60, 205);
confere("Técnica Máxima: área", FEITICO_TECNICA_MAXIMA.area, 24, 206);
confere("Técnica Máxima não virou um nível 6", FEITICO_DANO_UNICO[6], undefined, 205);
confere("os níveis de feitiço continuam 0 a 5", NIVEIS_FEITICO.join(","), "0,1,2,3,4,5", 205);
confere("Técnica Máxima: média do dano por TR",
    mediaBate(FEITICO_TECNICA_MAXIMA.danoTr, FEITICO_TECNICA_MAXIMA.danoTrMedia), true, 205);
confere("Técnica Máxima: média do dano por ataque",
    mediaBate(FEITICO_TECNICA_MAXIMA.danoAtaque, FEITICO_TECNICA_MAXIMA.danoAtaqueMedia), true, 205);
confere("Técnica Máxima: média do dano em área",
    mediaBate(FEITICO_TECNICA_MAXIMA.danoArea, FEITICO_TECNICA_MAXIMA.danoAreaMedia), true, 206);

/* E a folga é de 1, não aberta: um 3d8 trocado por 8d8 ainda tem de cair. */
confere("a folga não aceita um dado trocado", mediaBate("8d8", 14), false, 205);
confere("nem um dado maior no lugar", mediaBate("14d12", 77), false, 205);

/* --------------------------------------------------------------- saída ---- */
console.log("");
console.log(passou + " conferências passaram" + (falhas ? ", " + falhas + " FALHARAM" : ""));
process.exit(falhas ? 1 : 0);
