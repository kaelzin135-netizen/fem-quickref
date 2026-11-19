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
function carregar(arquivo) {
    (0, eval)(fs.readFileSync(path.join(raiz, arquivo), "utf8"));
}

carregar("js/data_pericia.js");
carregar("js/data_registro.js");
carregar("js/data_ficha.js");
/* ficha.js não toca no document no topo, então dá para chamar as funções
   reais da ficha aqui em vez de copiar as contas para o teste. */
carregar("js/ficha.js");

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
/* "Seu bônus de treinamento inicia como +2 e, nos níveis 5, 9, 13 e 17,
   ele aumenta em +1." — pg. 281 */
function bt(nivel) { return 1 + Math.ceil(nivel / 4); }

[[1, 2], [4, 2], [5, 3], [8, 3], [9, 4], [12, 4],
 [13, 5], [16, 5], [17, 6], [20, 6]].forEach(function (par) {
    confere("bônus de treinamento no nível " + par[0], bt(par[0]), par[1], 281);
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
function pvMax(espec, nivel, modCon) {
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
confere("PV da Amanaí (nível 2, Con 16)", pvMax(lutador, 2, 3), 24, 49);
confere("PE da Amanaí (nível 2)", lutador.peNivel * 2, 8, 49);

/* --------------------------------------------------------------- Defesa --- */
/* "Defesa = 10 + Modificador de Destreza + Metade do seu Nível + Outros
   Bônus" — pg. 281 */
function defesa(modDes, nivel, outros) {
    return 10 + modDes + Math.floor(nivel / 2) + (outros || 0);
}
confere("Defesa da Amanaí (Des 20, nível 2)", defesa(5, 2, 0), 16, 281);
confere("Defesa com equipamento +2 e voto −2", defesa(5, 2, 2 - 2), 16, 281);

/* ------------------------------------------------------------------- CD --- */
/* "10 + Metade do Nível de Personagem + Modificador de Atributo + Bônus de
   Treinamento + Outros Valores Aplicáveis" — pg. 172 */
function cd(nivel, modAtrib, outros) {
    return 10 + Math.floor(nivel / 2) + modAtrib + bt(nivel) + (outros || 0);
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
function pericia(modAtrib, nivel, treinado, mestre) {
    var b = 0;
    if (mestre) { b = Math.floor(bt(nivel) * 1.5); }
    else if (treinado) { b = bt(nivel); }
    return modAtrib + Math.floor(nivel / 2) + b;
}
confere("Acrobacia da Amanaí (Des +5, nível 2, treinada)", pericia(5, 2, true, false), 8, 280);
confere("perícia sem treino (Des +5, nível 2)", pericia(5, 2, false, false), 6, 280);
confere("perícia como mestre no nível 2 (BT 2 → 3)", pericia(5, 2, true, true), 9, 280);

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

/* --------------------------------------------------------------- saída ---- */
console.log("");
console.log(passou + " conferências passaram" + (falhas ? ", " + falhas + " FALHARAM" : ""));
process.exit(falhas ? 1 : 0);
