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
var lutador = ESPECIALIZACOES.filter(function (e) { return e.id === "lutador"; })[0];

confere("Lutador existe no catálogo", !!lutador, true, 49);
confere("PV base do Lutador", lutador.pv1, 12, 49);
confere("PV por nível do Lutador (fixo)", lutador.pvPasso, 6, 49);
confere("PE por nível do Lutador", lutador.peNivel, 4, 49);

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

/* --------------------------------------------------------------- saída ---- */
console.log("");
console.log(passou + " conferências passaram" + (falhas ? ", " + falhas + " FALHARAM" : ""));
process.exit(falhas ? 1 : 0);
