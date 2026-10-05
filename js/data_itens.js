/* Gerado de Livro de Regras v2.5.2 — tabelas de equipamento.
   Lido por coordenada: o pdftotext embaralha estas tabelas, separando
   os nomes das estatísticas. Páginas 132-134 (armas), 140 (uniformes)
   e 141 (escudos) do Livro de Regras v2.5.2. */

var ITENS_LIVRO = [
    {
        "nome": "Adaga",
        "categoria": "Arma simples",
        "dano": "1d6 Pf",
        "critico": "18",
        "propriedades": "Apunhaladora, arremessável [6/18m], fineza, leve, marcial, modular Ct",
        "espacos": 1,
        "custo": 1,
        "grupo": "Faca"
    },
    {
        "nome": "Bastão",
        "categoria": "Arma simples",
        "dano": "1d6/1d8 Im",
        "critico": "19",
        "propriedades": "Amplo, dupla, marcial, versátil",
        "espacos": 2,
        "custo": 1,
        "grupo": "Bastão"
    },
    {
        "nome": "Clava",
        "categoria": "Arma simples",
        "dano": "1d8/1d10 Im",
        "critico": "20",
        "propriedades": "Versátil",
        "espacos": 1,
        "custo": 1,
        "grupo": "Bastão"
    },
    {
        "nome": "Espada Curta",
        "categoria": "Arma simples",
        "dano": "1d6 Ct",
        "critico": "19",
        "propriedades": "Fineza, leve, marcial, modular Pf",
        "espacos": 1,
        "custo": 1,
        "grupo": "Espada"
    },
    {
        "nome": "Faixas",
        "categoria": "Arma simples",
        "dano": "desarmado",
        "critico": "-",
        "propriedades": "Especial",
        "espacos": 1,
        "custo": 1,
        "grupo": "Pugilato"
    },
    {
        "nome": "Foice",
        "categoria": "Arma simples",
        "dano": "1d6 Ct",
        "critico": "19",
        "propriedades": "Fineza, leve, marcial",
        "espacos": 1,
        "custo": 1,
        "grupo": "Haste"
    },
    {
        "nome": "Lança",
        "categoria": "Arma simples",
        "dano": "1d6/1d8 Pf",
        "critico": "19",
        "propriedades": "Arremessável [6/18m], estendida, versátil",
        "espacos": 1,
        "custo": 1,
        "grupo": "Haste"
    },
    {
        "nome": "Leque",
        "categoria": "Arma simples",
        "dano": "1d6 Im",
        "critico": "18",
        "propriedades": "Fineza, enérgica, leve, especial",
        "espacos": 1,
        "custo": 1,
        "grupo": "-"
    },
    {
        "nome": "Machado",
        "categoria": "Arma simples",
        "dano": "1d8/1d10 Ct",
        "critico": "20",
        "propriedades": "Versátil",
        "espacos": 1,
        "custo": 1,
        "grupo": "Machado"
    },
    {
        "nome": "Mangual",
        "categoria": "Arma simples",
        "dano": "1d8 Im",
        "critico": "20",
        "propriedades": "Ampla, enérgica",
        "espacos": 1,
        "custo": 1,
        "grupo": "Chicote"
    },
    {
        "nome": "Manoplas",
        "categoria": "Arma simples",
        "dano": "desarmado",
        "critico": "-",
        "propriedades": "Aparar, duas mãos, dupla, especial, pesado [16]",
        "espacos": 1,
        "custo": 2,
        "grupo": "Pugilato"
    },
    {
        "nome": "Martelo",
        "categoria": "Arma simples",
        "dano": "1d8/1d10 Im",
        "critico": "20",
        "propriedades": "Versátil",
        "espacos": 1,
        "custo": 1,
        "grupo": "Martelo"
    },
    {
        "nome": "Soco Inglês",
        "categoria": "Arma simples",
        "dano": "desarmado",
        "critico": "-",
        "propriedades": "Enérgica, especial, fineza, marcial",
        "espacos": 1,
        "custo": 2,
        "grupo": "Pugilato"
    },
    {
        "nome": "Tridente",
        "categoria": "Arma simples",
        "dano": "1d6/1d8 Pf",
        "critico": "19",
        "propriedades": "Arremessável [6/18m], estendida, versátil",
        "espacos": 1,
        "custo": 1,
        "grupo": "Haste"
    },
    {
        "nome": "Arco Curto",
        "categoria": "Arma a distância",
        "dano": "1d6 Pf",
        "critico": "19",
        "propriedades": "Duas mãos, mortal d10, alcance [24/48m]",
        "espacos": 2,
        "custo": 1,
        "grupo": "Arco"
    },
    {
        "nome": "Besta Leve",
        "categoria": "Arma a distância",
        "dano": "1d8 Pf",
        "critico": "19",
        "propriedades": "Mortal d10, leve, alcance [24/48m], recarga [1]",
        "espacos": 1,
        "custo": 1,
        "grupo": "Arco"
    },
    {
        "nome": "Pistola",
        "categoria": "Arma a distância",
        "dano": "1d10 Pf",
        "critico": "20",
        "propriedades": "Alcance [36/72m], emperrar, leve, recarga [12]",
        "espacos": 1,
        "custo": 2,
        "grupo": "Tiro"
    },
    {
        "nome": "Azagaia",
        "categoria": "Arma de arremesso",
        "dano": "1d6 Pf",
        "critico": "20",
        "propriedades": "Leve, alcance [12/24m]",
        "espacos": 1,
        "custo": 1,
        "grupo": "Dardo"
    },
    {
        "nome": "Dardo",
        "categoria": "Arma de arremesso",
        "dano": "1d4 Pf",
        "critico": "18",
        "propriedades": "Leve, alcance [12/24m], especial",
        "espacos": 1,
        "custo": 1,
        "grupo": "Dardo"
    },
    {
        "nome": "Faca de Arremesso",
        "categoria": "Arma de arremesso",
        "dano": "1d6 Pf",
        "critico": "20",
        "propriedades": "Leve, alcance [12/24m], modular Ct",
        "espacos": 1,
        "custo": 1,
        "grupo": "Faca"
    },
    {
        "nome": "Adagas Duplas",
        "categoria": "Arma complexa",
        "dano": "2d4 Pf",
        "critico": "18",
        "propriedades": "Apunhaladora, duas mãos, fineza, leve, marcial, modular Ct, especial",
        "espacos": 2,
        "custo": 2,
        "grupo": "Faca"
    },
    {
        "nome": "Adaga de Aparar",
        "categoria": "Arma complexa",
        "dano": "1d4 Pf",
        "critico": "18",
        "propriedades": "Aparar, apunhaladora, fineza, leve, marcial, modular Ct",
        "espacos": 1,
        "custo": 1,
        "grupo": "Faca"
    },
    {
        "nome": "Alabarda",
        "categoria": "Arma complexa",
        "dano": "1d10 Ct",
        "critico": "20",
        "propriedades": "Duas mãos, estendida, modular Pf, pesada [14], especial",
        "espacos": 2,
        "custo": 2,
        "grupo": "Haste"
    },
    {
        "nome": "Chicote",
        "categoria": "Arma complexa",
        "dano": "1d4 Ct",
        "critico": "19",
        "propriedades": "Estendida, fineza, leve, especial",
        "espacos": 1,
        "custo": 1,
        "grupo": "Chicote"
    },
    {
        "nome": "Chicote de Corrente",
        "categoria": "Arma complexa",
        "dano": "1d6/1d8 Im",
        "critico": "19",
        "propriedades": "Estendida, pesada [14], versátil, especial",
        "espacos": 2,
        "custo": 2,
        "grupo": "Chicote"
    },
    {
        "nome": "Chicote Espinhento",
        "categoria": "Arma complexa",
        "dano": "1d6/1d6",
        "critico": "19",
        "propriedades": "Estendida, fineza, leve, especial",
        "espacos": 1,
        "custo": 3,
        "grupo": "Chicote"
    },
    {
        "nome": "Clava Pesada",
        "categoria": "Arma complexa",
        "dano": "2d6 Im",
        "critico": "20",
        "propriedades": "Duas mãos, pesada [16], oscilante",
        "espacos": 2,
        "custo": 2,
        "grupo": "Bastão"
    },
    {
        "nome": "Corrente de Aço",
        "categoria": "Arma complexa",
        "dano": "2d4/2d6 Im",
        "critico": "20",
        "propriedades": "Estendida, enérgica, pesada [14], versátil",
        "espacos": 2,
        "custo": 1,
        "grupo": "Chicote"
    },
    {
        "nome": "Espada de Gancho",
        "categoria": "Arma complexa",
        "dano": "1d8 Ct",
        "critico": "20",
        "propriedades": "Fineza, leve, marcial, especial",
        "espacos": 1,
        "custo": 2,
        "grupo": "Espada"
    },
    {
        "nome": "Espada Longa",
        "categoria": "Arma complexa",
        "dano": "1d8/1d10 Ct",
        "critico": "20",
        "propriedades": "Modular Pf, versátil",
        "espacos": 1,
        "custo": 1,
        "grupo": "Espada"
    },
    {
        "nome": "Katana",
        "categoria": "Arma complexa",
        "dano": "1d6/1d8 Ct",
        "critico": "19",
        "propriedades": "Versátil, fatal d10, fineza",
        "espacos": 1,
        "custo": 1,
        "grupo": "Espada"
    },
    {
        "nome": "Espada Grande",
        "categoria": "Arma complexa",
        "dano": "1d12 Ct",
        "critico": "20",
        "propriedades": "Ampla, duas mãos, modular Pf, pesada [14]",
        "espacos": 2,
        "custo": 2,
        "grupo": "Espada"
    },
    {
        "nome": "Espada Colossal",
        "categoria": "Arma complexa",
        "dano": "2d8 Ct",
        "critico": "20",
        "propriedades": "Ampla, duas mãos, modular Im, pesada [20], especial",
        "espacos": 4,
        "custo": 3,
        "grupo": "Espada"
    },
    {
        "nome": "Foice Grande",
        "categoria": "Arma complexa",
        "dano": "1d8/1d10 Ct",
        "critico": "20",
        "propriedades": "Ampla, versátil",
        "espacos": 2,
        "custo": 2,
        "grupo": "Haste"
    },
    {
        "nome": "Kusarigama",
        "categoria": "Arma complexa",
        "dano": "1d6/1d6",
        "critico": "19",
        "propriedades": "Duas mãos, dupla, especial, estendida, enérgica",
        "espacos": 1,
        "custo": 2,
        "grupo": "Haste"
    },
    {
        "nome": "Lança Grande",
        "categoria": "Arma complexa",
        "dano": "1d12 Pf",
        "critico": "20",
        "propriedades": "Duas mãos, enérgica, estendida, pesada [14]",
        "espacos": 2,
        "custo": 1,
        "grupo": "Haste"
    },
    {
        "nome": "Machado Grande",
        "categoria": "Arma complexa",
        "dano": "1d10 Ct",
        "critico": "20",
        "propriedades": "Ampla, duas mãos, pesada [16]",
        "espacos": 2,
        "custo": 1,
        "grupo": "Machado"
    },
    {
        "nome": "Martelo Grande",
        "categoria": "Arma complexa",
        "dano": "1d12 Im",
        "critico": "20",
        "propriedades": "Duas mãos, pesada [16]",
        "espacos": 2,
        "custo": 1,
        "grupo": "Martelo"
    },
    {
        "nome": "Nunchaku",
        "categoria": "Arma complexa",
        "dano": "1d8 Im",
        "critico": "19",
        "propriedades": "Dupla, enérgica, fineza, marcial",
        "espacos": 1,
        "custo": 1,
        "grupo": "Bastão"
    },
    {
        "nome": "Nunchaku Pesado",
        "categoria": "Arma complexa",
        "dano": "2d6 Im",
        "critico": "20",
        "propriedades": "Duas mãos, dupla, estendida, marcial, pesada [14], enérgica",
        "espacos": 2,
        "custo": 2,
        "grupo": "Bastão"
    },
    {
        "nome": "Rapieira",
        "categoria": "Arma complexa",
        "dano": "1d8 Pf",
        "critico": "19",
        "propriedades": "Fineza, mortal d10",
        "espacos": 1,
        "custo": 1,
        "grupo": "Espada"
    },
    {
        "nome": "Arco Longo",
        "categoria": "Arma a distância",
        "dano": "1d10 Pf",
        "critico": "19",
        "propriedades": "Duas mãos, mortal d12, alcance [30/60m]",
        "espacos": 2,
        "custo": 1,
        "grupo": "Arco"
    },
    {
        "nome": "Bazuca",
        "categoria": "Arma a distância",
        "dano": "3d12 Im",
        "critico": "19",
        "propriedades": "Alcance [9/18], Duas Mãos, Emperrar, Recarga [1], Especial, Pesada [16]",
        "espacos": 4,
        "custo": 4,
        "grupo": "Tiro"
    },
    {
        "nome": "Besta Pesada",
        "categoria": "Arma a distância",
        "dano": "1d12 Pf",
        "critico": "20",
        "propriedades": "Pesada [14], alcance [45/90m], recarga [1], mortal d12",
        "espacos": 2,
        "custo": 1,
        "grupo": "Besta"
    },
    {
        "nome": "Escopeta",
        "categoria": "Arma a distância",
        "dano": "2d6 Pf",
        "critico": "20",
        "propriedades": "Alcance [9/18m], duas mãos, emperrar, especial, recarga [2]",
        "espacos": 2,
        "custo": 2,
        "grupo": "Tiro"
    },
    {
        "nome": "Metralhadora",
        "categoria": "Arma a distância",
        "dano": "1d12 Pf",
        "critico": "19",
        "propriedades": "Alcance [30/60m], duas mãos, emperrar, especial, recarga [30]",
        "espacos": 4,
        "custo": 3,
        "grupo": "Tiro"
    },
    {
        "nome": "Rifle",
        "categoria": "Arma a distância",
        "dano": "2d8 Pf",
        "critico": "20",
        "propriedades": "Alcance [60/120m], duas mãos, emperrar, recarga [20]",
        "espacos": 2,
        "custo": 2,
        "grupo": "Tiro"
    },
    {
        "nome": "Rifle de Precisão",
        "categoria": "Arma a distância",
        "dano": "2d10 Pf",
        "critico": "19",
        "propriedades": "Alcance [120/240m], duas mãos, emperrar, recarga [5]",
        "espacos": 4,
        "custo": 3,
        "grupo": "Tiro"
    },
    {
        "nome": "Chakram",
        "categoria": "Arma de arremesso",
        "dano": "2d4 Ct",
        "critico": "20",
        "propriedades": "Arremessável [12/24m], especial, leve",
        "espacos": 1,
        "custo": 1,
        "grupo": "Faca"
    },
    {
        "nome": "Kunai",
        "categoria": "Arma de arremesso",
        "dano": "1d6 Pf",
        "critico": "19",
        "propriedades": "Apunhaladora, arremessável [9/18m], fineza, leve",
        "espacos": 1,
        "custo": 1,
        "grupo": "Dardo"
    },
    {
        "nome": "Rede",
        "categoria": "Arma de arremesso",
        "dano": "—",
        "critico": "-",
        "propriedades": "Alcance [9/27m], especial",
        "espacos": 1,
        "custo": 2,
        "grupo": "-"
    },
    {
        "nome": "Shuriken",
        "categoria": "Arma de arremesso",
        "dano": "1d4 Ct",
        "critico": "18",
        "propriedades": "Arremessável [12/24m], mortal d8, leve",
        "espacos": 1,
        "custo": 1,
        "grupo": "Dardo"
    },
    {
        "nome": "Revestimento Leve",
        "categoria": "Uniforme",
        "custo": 1,
        "defesa": "+2",
        "penalidade": "-"
    },
    {
        "nome": "Revestimento Médio",
        "categoria": "Uniforme",
        "custo": 2,
        "defesa": "+4",
        "penalidade": "-2"
    },
    {
        "nome": "Revestimento Robusto",
        "categoria": "Uniforme",
        "custo": 3,
        "defesa": "+6",
        "penalidade": "-4"
    },
    {
        "nome": "Sob Medida",
        "categoria": "Uniforme",
        "custo": 2,
        "defesa": "+1",
        "penalidade": "-"
    },
    {
        "nome": "Escudo Pequeno (1d3)",
        "categoria": "Escudo",
        "custo": 2,
        "rd": "2",
        "penalidade": "0"
    },
    {
        "nome": "Escudo Leve (1d4)",
        "categoria": "Escudo",
        "custo": 1,
        "rd": "2",
        "penalidade": "-1"
    },
    {
        "nome": "Escudo Médio (1d6)",
        "categoria": "Escudo",
        "custo": 2,
        "rd": "4",
        "penalidade": "-2"
    },
    {
        "nome": "Escudo Pesado (1d8)",
        "categoria": "Escudo",
        "custo": 3,
        "rd": "6",
        "penalidade": "-4"
    }
];
