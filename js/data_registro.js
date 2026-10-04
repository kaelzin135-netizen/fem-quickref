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
    { id: "olhos", nome: "Olhos", amplo: true },
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

/* As onze linhas de treinamento do livro (pgs. 338-346).

   Cada linha tem QUATRO etapas, e CADA ETAPA concede o seu próprio benefício
   — não é só a quarta que vale. As três primeiras custam 1 foco cada, a
   quarta custa 2. Quem completa a linha inteira fica com todos os benefícios
   dela MAIS o Bônus de Treinamento Completo (pg. 338).

   "efeitos" são as parcelas que a ficha soma sozinha; "manual" é o que fica
   por conta da mesa, escrito do lado para ninguém esquecer. */
var TREINAMENTOS = [
    {
        id: "agilidade", nome: "Agilidade", pagina: 339,
        resumo: "Deslocamento, Acrobacia, Iniciativa, Reflexos",
        etapas: [
            {
                texto: "Seu Deslocamento aumenta em 1,5 metros.",
                efeitos: [{ alvo: "deslocamento", valor: 1.5 }]
            },
            {
                texto: "+2 em rolagens de Acrobacia.",
                efeitos: [{ alvo: "pericia.acrobacia", valor: 2 }]
            },
            {
                texto: "+2 em rolagens de Iniciativa.", exige: "Destreza 14",
                efeitos: [{ alvo: "iniciativa", valor: 2 }]
            },
            {
                texto: "+2 em rolagens de Reflexos.", exige: "Destreza 16", focos: 2,
                efeitos: [{ alvo: "tr.reflexos", valor: 2 }]
            }
        ],
        completo: {
            texto: "A margem para sucesso crítico em TR de Reflexos reduz em 2 e seu Deslocamento aumenta em 4,5 metros.",
            efeitos: [{ alvo: "deslocamento", valor: 4.5 }],
            manual: "a margem de crítico em TR de Reflexos"
        }
    },
    {
        id: "barreiras", nome: "Barreiras", pagina: 339,
        resumo: "Exige a aptidão Técnicas de Barreira",
        etapas: [
            {
                texto: "Os PV das paredes aumentam em 10.", exige: "Técnicas de Barreira",
                manual: "os PV das paredes"
            },
            {
                texto: "Seu Nível de Aptidão em Barreiras aumenta em 1.",
                efeitos: [{ alvo: "aptidao.bar", valor: 1 }]
            },
            {
                texto: "Os PV das paredes aumentam em mais 10.", exige: "BAR 2",
                manual: "os PV das paredes"
            },
            {
                texto: "O máximo de paredes que você pode criar aumenta em 2.",
                exige: "BAR 3", focos: 2, manual: "o máximo de paredes"
            }
        ],
        completo: {
            texto: "Toda parede criada recebe RD igual ao seu Nível de Aptidão em Barreiras.",
            manual: "a RD das paredes"
        }
    },
    {
        id: "compreensao", nome: "Compreensão", pagina: 340,
        resumo: "Energia máxima, Feitiçaria e Ocultismo",
        etapas: [
            {
                texto: "Seu máximo de energia amaldiçoada aumenta em 2.",
                efeitos: [{ alvo: "pe", valor: 2 }]
            },
            {
                texto: "+1 em rolagens de Feitiçaria e Ocultismo.",
                efeitos: [
                    { alvo: "pericia.feiticaria", valor: 1 },
                    { alvo: "pericia.ocultismo", valor: 1 }
                ]
            },
            {
                texto: "Seu máximo de energia aumenta em 3.", exige: "AU 2",
                efeitos: [{ alvo: "pe", valor: 3 }]
            },
            {
                texto: "+2 em rolagens de Feitiçaria e Ocultismo.", exige: "AU 3", focos: 2,
                efeitos: [
                    { alvo: "pericia.feiticaria", valor: 2 },
                    { alvo: "pericia.ocultismo", valor: 2 }
                ]
            }
        ],
        completo: {
            texto: "Você aumenta um nível de aptidão à sua escolha em 1.",
            escolhaAptidao: true
        }
    },
    {
        id: "controle", nome: "Controle de Energia", pagina: 340,
        resumo: "PE máximo e PE temporário em combate",
        etapas: [
            {
                texto: "Seu máximo de energia amaldiçoada aumenta em 2.",
                efeitos: [{ alvo: "pe", valor: 2 }]
            },
            {
                texto: "Ao iniciar uma cena de combate, você recebe 4 PE temporários.",
                manual: "os 4 PE temporários no início do combate"
            },
            {
                texto: "Seu máximo de energia aumenta em 3.", exige: "CL 2",
                efeitos: [{ alvo: "pe", valor: 3 }]
            },
            {
                texto: "Seu Nível de Aptidão em Controle e Leitura aumenta em 1.",
                exige: "CL 3", focos: 2,
                efeitos: [{ alvo: "aptidao.cl", valor: 1 }]
            }
        ],
        completo: {
            texto: "Durante uma cena de combate, no começo de toda rodada você ganha PE temporário igual a metade do seu bônus de treinamento.",
            manual: "o PE temporário por rodada"
        }
    },
    {
        id: "dominios", nome: "Domínios", pagina: 341,
        resumo: "Confrontos, área e efeitos da expansão",
        etapas: [
            {
                texto: "+1 em rolagens para confrontos e contestações de expansões.",
                exige: "Expansão de Domínio Incompleta",
                manual: "o +1 em confronto de expansão"
            },
            {
                texto: "A área da sua Expansão de Domínio aumenta em 3 metros.",
                manual: "a área da expansão"
            },
            {
                texto: "Mais +1 em rolagens de confronto.", exige: "Expansão de Domínio Completa",
                manual: "o +1 em confronto de expansão"
            },
            {
                texto: "Você pode colocar um efeito adicional na sua expansão.",
                exige: "DOM 5", focos: 2, manual: "o efeito adicional da expansão"
            }
        ],
        completo: {
            texto: "Você recebe a aptidão amaldiçoada Modificação Completa.",
            manual: "a aptidão Modificação Completa — adicione pelo catálogo"
        }
    },
    {
        id: "reversa", nome: "Energia Reversa", pagina: 342,
        resumo: "Exige a aptidão Energia Reversa",
        etapas: [
            {
                texto: "A quantidade de pontos de energia reversa que você pode gastar em Aptidões de Energia Reversa aumenta em 1.",
                exige: "Energia Reversa", manual: "o teto de pontos de energia reversa"
            },
            {
                texto: "Seu Nível de Aptidão em Energia Reversa aumenta em 1.",
                efeitos: [{ alvo: "aptidao.er", valor: 1 }]
            },
            {
                texto: "O custo para regenerar um membro ou ferida interna com Regeneração Aprimorada é reduzido em 2.",
                exige: "ER 4", manual: "a redução de custo"
            },
            {
                texto: "Você também pode usar Fluxo Constante para regenerar membros, e não apenas para se curar.",
                exige: "ER 5", focos: 2, manual: "o Fluxo Constante regenerando membros"
            }
        ],
        completo: {
            texto: "Você pode usar Regeneração Aprimorada para curar a exaustão de técnica após uma expansão de domínio, reduzindo-a em um turno a cada 2 pontos de energia reversa gastos.",
            manual: "a cura de exaustão de técnica"
        }
    },
    {
        id: "luta", nome: "Luta", pagina: 343,
        resumo: "Dano desarmado, Defesa e manobras",
        etapas: [
            {
                texto: "O dano dos seus ataques desarmados aumenta em 1 nível.",
                manual: "o nível de dano desarmado"
            },
            {
                texto: "+2 na Defesa e em rolagens para Agarrar, Derrubar e Empurrar.",
                efeitos: [{ alvo: "defesa", valor: 2 }],
                manual: "o +2 em Agarrar, Derrubar e Empurrar"
            },
            {
                texto: "Mais 1 nível de dano desarmado.", exige: "Força ou Destreza 14",
                manual: "o nível de dano desarmado"
            },
            {
                texto: "Mais 2 níveis de dano desarmado.", exige: "Força ou Destreza 16", focos: 2,
                manual: "os níveis de dano desarmado"
            }
        ],
        completo: {
            texto: "Você recebe acesso ao efeito de crítico de Pugilato e pode, uma vez por rodada, fazer uma rolagem de Acrobacia ou Atletismo com vantagem.",
            manual: "o crítico de Pugilato e a vantagem"
        }
    },
    {
        id: "manejo", nome: "Manejo de Arma", pagina: 344,
        resumo: "Repetível com outra arma", repetivel: true,
        etapas: [
            {
                texto: "Escolha uma arma: você se torna treinado com ela (ou, se já for, +2 em rolagens de dano com ela).",
                manual: "o treino na arma ou o +2 de dano"
            },
            {
                texto: "+1 em jogadas de ataque com a arma escolhida.",
                manual: "o +1 de ataque com a arma"
            },
            {
                texto: "Manejando a arma escolhida, você recebe acesso ao efeito de crítico dela.",
                manual: "o efeito de crítico da arma"
            },
            {
                texto: "+1 em jogadas de ataque e +2 em rolagens de dano com ela.", focos: 2,
                manual: "o +1 de ataque e o +2 de dano"
            }
        ],
        completo: {
            texto: "Manejando a arma escolhida, ela recebe um Encantamento de ferramenta amaldiçoada adicional.",
            manual: "o encantamento extra da arma"
        }
    },
    {
        id: "pericia", nome: "Treino de Perícia", pagina: 345,
        resumo: "Repetível com outra perícia", repetivel: true,
        etapas: [
            {
                texto: "Escolha uma perícia: você se torna treinado nela (ou, se já for, +1 em testes usando-a).",
                manual: "marque o T da perícia escolhida, ou o +1 em Outros"
            },
            {
                texto: "Duas vezes por descanso, você pode fazer um teste da perícia escolhida com vantagem.",
                manual: "as duas vantagens por descanso"
            },
            {
                texto: "Você se torna mestre nela (ou, se já for, +2 em testes usando-a).",
                manual: "marque o M da perícia escolhida, ou o +2 em Outros"
            },
            {
                texto: "Uma vez por cena, obtenha um sucesso garantido em um teste da perícia, desde que não seja um teste oposto.",
                focos: 2, manual: "o sucesso garantido por cena"
            }
        ],
        completo: {
            texto: "Tirando menos de 5 no d20 em um teste dessa perícia, você pode rolar novamente e manter o melhor resultado.",
            manual: "a rerrolagem abaixo de 5"
        }
    },
    {
        id: "potencial", nome: "Potencial Físico", pagina: 346,
        resumo: "Exclusivo do Restringido", soRestringido: true,
        etapas: [
            {
                texto: "Seu máximo de pontos de estamina aumenta em 2.",
                efeitos: [{ alvo: "pe", valor: 2 }]
            },
            {
                texto: "Você recebe 2 pontos de atributo para distribuir entre os atributos físicos.",
                exige: "nível 4 de personagem",
                manual: "some os 2 pontos direto nos valores de atributo"
            },
            {
                texto: "Seu máximo de pontos de estamina aumenta em 4.",
                efeitos: [{ alvo: "pe", valor: 4 }]
            },
            {
                texto: "Você recebe uma Dádiva do Céu adicional.", focos: 2,
                manual: "a Dádiva do Céu extra — adicione pelo catálogo"
            }
        ],
        completo: {
            texto: "Durante uma cena de combate, no começo de toda rodada você recebe pontos de estamina temporários iguais a metade do seu bônus de treinamento.",
            manual: "a estamina temporária por rodada"
        }
    },
    {
        id: "resistencia", nome: "Treino de Resistência", pagina: 346,
        resumo: "PV, dados de vida e Fortitude",
        etapas: [
            {
                texto: "Seus pontos de vida máximos aumentam em 4.",
                efeitos: [{ alvo: "pv", valor: 4 }]
            },
            {
                texto: "Sua quantidade de dados de vida disponíveis por descanso aumenta em 2.",
                manual: "os 2 dados de vida a mais por descanso"
            },
            {
                texto: "+2 em rolagens de Fortitude.", exige: "Constituição 14",
                efeitos: [{ alvo: "tr.fortitude", valor: 2 }]
            },
            {
                texto: "Seus pontos de vida máximos aumentam em 6.", exige: "Constituição 16", focos: 2,
                efeitos: [{ alvo: "pv", valor: 6 }]
            }
        ],
        completo: {
            texto: "A margem para sucesso crítico em TR de Fortitude reduz em 2, você ignora a primeira falha em testes de morte uma vez por cena e seus pontos de vida máximos aumentam em mais 10.",
            efeitos: [{ alvo: "pv", valor: 10 }],
            manual: "a margem de crítico em Fortitude e a falha ignorada"
        }
    }
];

var DADOS_VIDA = ["d8", "d10", "d12"];
