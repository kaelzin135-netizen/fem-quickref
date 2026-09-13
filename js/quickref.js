/* ------------------------------------------------------------------------- */
/* Página "Combate" — configuração das seções                                  */
/* ------------------------------------------------------------------------- */

var SECTIONS = [
    ["section-atributo", "Atributos"],
    ["section-valor", "Valores"],
    ["section-teste", "Testes"],
    ["section-pericia", "Perícias"],
    ["section-movimento", "Movimento"],
    ["section-acao", "Ação Comum"],
    ["section-bonus", "Ação Bônus"],
    ["section-reacao", "Reação"],
    ["section-completa", "Completa/Livre"],
    ["section-ataque", "Ataques e Dano"],
    ["section-condicao", "Condições"],
    ["section-ambiente", "Ambiente"],
    ["section-alma", "Alma e Morte"],
    ["section-energia", "Energia"],
    ["section-descanso", "Descanso"]
];

/* Cada entrada: [array de dados, id do container, rótulo mostrado no modal] */
var FILL = [
    [data_atributo, "atributo-lista", "Atributo"],
    [data_atributo_metodos, "atributo-metodos", "Criação"],
    [data_valor, "valor-lista", "Valor derivado"],
    [data_teste_tipos, "teste-tipos", "Teste"],
    [data_teste_resistencias, "teste-resistencias", "Resistência"],
    [data_teste_mods, "teste-mods", "Rolagem"],
    [data_pericia, "pericia-lista", "Perícia"],
    [data_movimento_acoes, "movimento-acoes", "Ação de movimento"],
    [data_movimento_regras, "movimento-regras", "Movimento"],
    [data_acao, "acao-lista", "Ação comum"],
    [data_bonus, "bonus-lista", "Ação bônus"],
    [data_reacao, "reacao-lista", "Reação"],
    [data_completa, "completa-lista", "Ação completa"],
    [data_livre, "livre-lista", "Ação livre"],
    [data_ataque, "ataque-lista", "Ataque"],
    [data_ataque_dano, "ataque-dano", "Dano"],
    [data_ataque_tipos, "ataque-tipos", "Tipo de dano"],
    [data_condicao_fisica, "condicao-fisica", "Condição física"],
    [data_condicao_incapacitacao, "condicao-incapacitacao", "Incapacitação"],
    [data_condicao_mental, "condicao-mental", "Condição mental"],
    [data_condicao_movimento, "condicao-movimento", "Cond. de movimento"],
    [data_condicao_sensorial, "condicao-sensorial", "Cond. sensorial"],
    [data_condicao_vulnerabilidade, "condicao-vulnerabilidade", "Vulnerabilidade"],
    [data_ambiente_cobertura, "ambiente-cobertura", "Cobertura"],
    [data_ambiente_visao, "ambiente-visao", "Percepção"],
    [data_ambiente_alcance, "ambiente-alcance", "Alcance"],
    [data_alma, "alma-lista", "A Alma"],
    [data_alma_estados, "alma-estados", "Estado da alma"],
    [data_alma_morte, "alma-morte", "Morte"],
    [data_alma_exaustao, "alma-exaustao", "Exaustão"],
    [data_energia_aptidoes, "energia-aptidoes", "Aptidão"],
    [data_energia_regras, "energia-regras", "Jujutsu"],
    [data_descanso, "descanso-lista", "Descanso"]
];

window.addEventListener("DOMContentLoaded", function () {
    init_engine(SECTIONS, function () {
        FILL.forEach(function (f) { fill_section(f[0], f[1], f[2]); });
    }, { titulo: "Combate", ordenarPorTamanho: true });
});
