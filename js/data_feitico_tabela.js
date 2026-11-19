/* ------------------------------------------------------------------------- */
/* Orçamento do livro para criar um Feitiço, por nível.                        */
/*                                                                            */
/* O F&M não traz uma lista de feitiços prontos — traz um sistema para        */
/* construí-los, com tabelas de dano, alcance e área. Então o equivalente     */
/* honesto do "Adicionar" do C.R.I.S. (que puxa rituais de um catálogo) é     */
/* deixar estas tabelas à mão na hora de montar o feitiço, em vez de obrigar  */
/* a pessoa a sair da ficha e abrir o PDF.                                    */
/*                                                                            */
/* Transcritas à mão das pgs. 205 e 206. A média vem do próprio livro.        */
/* ------------------------------------------------------------------------- */

/* Tabela de Dano em Alvo Único — pg. 205.
   "Em Feitiços de Alvo Único, você pode escolher que eles utilizem um TR ou
   um Teste de Ataque." O de TR causa menos, porque o alvo tem como reduzir
   pela metade (ou anular, no nível 0). */
var FEITICO_DANO_UNICO = {
    0: { tr: "1d10", trMedia: 5,   ataque: "1d10", ataqueMedia: 5 },
    1: { tr: "3d8",  trMedia: 14,  ataque: "4d8",  ataqueMedia: 18 },
    2: { tr: "7d8",  trMedia: 31,  ataque: "8d8",  ataqueMedia: 36 },
    3: { tr: "12d8", trMedia: 54,  ataque: "14d8", ataqueMedia: 63 },
    4: { tr: "14d10", trMedia: 77, ataque: "16d10", ataqueMedia: 88 },
    5: { tr: "18d12", trMedia: 116, ataque: "20d12", ataqueMedia: 129 }
};

/* Tabela de Dano em Alvos Múltiplos/Áreas — pg. 206. Começa no nível 1: o
   livro não dá valor de área para o nível 0, que é feitiço de narrativa. */
var FEITICO_DANO_AREA = {
    1: { dado: "2d8",  media: 9 },
    2: { dado: "4d8",  media: 18 },
    3: { dado: "5d12", media: 32 },
    4: { dado: "10d10", media: 55 },
    5: { dado: "12d12", media: 78 }
};

/* Tabela de Alcance — Feitiços com Alvo, pg. 205. */
var FEITICO_ALCANCE = { 0: 9, 1: 12, 2: 18, 3: 24, 4: 30, 5: 48 };

/* Tabela de Área Afetada — Feitiços em Área, pg. 206. */
var FEITICO_AREA = { 1: 4.5, 2: 6, 3: 9, 4: 12, 5: 18 };

/* A Técnica Máxima fica fora dos mapas por nível porque não é um nível de
   feitiço: é a linha final de cada tabela, com valor próprio. */
var FEITICO_TECNICA_MAXIMA = {
    danoTr: "26d12", danoTrMedia: 169,
    danoAtaque: "28d12", danoAtaqueMedia: 182,
    danoArea: "22d10", danoAreaMedia: 120,
    alcance: 60, area: 24
};
