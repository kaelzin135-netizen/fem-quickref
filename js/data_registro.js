/* ------------------------------------------------------------------------- */
/* Campos de registro, perfil e treinamento                                    */
/* Espelham o que a planilha de personagem tem além dos números.               */
/* ------------------------------------------------------------------------- */

var CAMPOS_APARENCIA = [
    { id: "idade", nome: "Idade" },
    { id: "altura", nome: "Altura" },
    { id: "peso", nome: "Peso" },
    { id: "genero", nome: "Gênero" },
    { id: "cabelos", nome: "Cabelos" },
    { id: "olhos", nome: "Olhos" },
    { id: "pele", nome: "Pele" },
    { id: "roupas", nome: "Roupas" },
    { id: "marca", nome: "Marca", longo: true }
];

var CAMPOS_HISTORIA = [
    { id: "personalidade", nome: "Traços de personalidade" },
    { id: "ideais", nome: "Ideais" },
    { id: "complicacoes", nome: "Complicações" },
    { id: "ligacoes", nome: "Ligações" },
    { id: "dominioInato", nome: "Domínio inato" }
];

/* as caixinhas ao lado dos pontos de vida */
var MARCAS_PV = [
    { id: "kamo", nome: "Kamo" },
    { id: "robustez", nome: "Robustez" },
    { id: "desExa", nome: "Des. Exa." },
    { id: "vigorInf", nome: "Vigor Inf." }
];

var NIVEIS_FEITICO = [0, 1, 2, 3, 4, 5];

/* As dez trilhas de treinamento. O texto é o que a trilha concede ao ser
   concluída; cada uma tem quatro etapas. */
var TREINAMENTOS = [
    {
        id: "agilidade", nome: "Agilidade",
        recompensa: "Sua margem necessária para conseguir um sucesso crítico em um TR de Reflexos reduz em 2. Seu Deslocamento aumenta em 4,5 metros."
    },
    {
        id: "barreiras", nome: "Barreiras",
        recompensa: "Toda parede que você criar com Técnicas de Barreira recebe RD igual ao seu Nível de Aptidão em Barreiras."
    },
    {
        id: "compreensao", nome: "Compreensão",
        recompensa: "Você aumenta um nível de aptidão a sua escolha em 1."
    },
    {
        id: "controle", nome: "Controle de Energia",
        recompensa: "Durante uma cena de combate, no começo de toda rodada, você ganha PE temporário igual a metade do seu bônus de maestria."
    },
    {
        id: "dominios", nome: "Domínios",
        recompensa: "Você recebe a aptidão amaldiçoada Modificação Completa."
    },
    {
        id: "reversa", nome: "Energia Reversa",
        recompensa: "Você pode usar Regeneração Aprimorada para curar sua exaustão de técnica após usar expansão de domínio, reduzindo em um turno para 2 pontos de energia reversa gastos."
    },
    {
        id: "luta", nome: "Luta",
        recompensa: "Você recebe acesso ao efeito de crítico de ataques desarmados (pugilato). Além disso, uma vez por rodada, pode realizar uma rolagem de Luta com vantagem, seja para um ataque ou para uma manobra."
    },
    {
        id: "manejo", nome: "Manejo de Arma",
        recompensa: "Enquanto estiver manejando a arma escolhida, ela recebe uma propriedade de ferramenta amaldiçoada adicional."
    },
    {
        id: "pericia", nome: "Treino de Perícia",
        recompensa: "Caso realize um teste da perícia escolhida e obtenha um resultado menor do que 5 no d20, você pode o rolar novamente e manter o melhor resultado."
    },
    {
        id: "resistencia", nome: "Treino de Resistência",
        recompensa: "Sua margem necessária para conseguir um sucesso crítico em um TR de Fortitude reduz em 2. Uma vez por cena, você ignora a primeira falha em testes de morte. Seus pontos de vida máximos aumentam em mais 10."
    }
];

var DADOS_VIDA = ["d8", "d10", "d12"];
