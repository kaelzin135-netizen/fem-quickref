# Referência Rápida — Feiticeiros & Maldições 2.5.2

Referência rápida de combate para o RPG de mesa **Feiticeiros & Maldições** (Livro de Regras v2.5.2),
no mesmo formato da [Referência Rápida de D&D 5e](https://diogoan.github.io/dnd5e-quickref/):
seções coloridas, cards com ícone e modal com os detalhes ao clicar.

## Como abrir

Abra o `index.html` no navegador — não precisa de servidor, todos os caminhos são relativos.

Se quiser servir por HTTP (útil para publicar depois):

```bash
python -m http.server 8767 --directory C:/Users/kaelz/fem-quickref
```

São três páginas, ligadas pelas abas no topo:

| Página | Conteúdo | Itens |
| --- | --- | --- |
| `index.html` — **Combate** | atributos, testes, perícias, ações, condições, dano, alma e morte | 206 |
| `habilidades.html` — **Habilidades** | as 6 especializações, talentos e aptidões amaldiçoadas | 551 |
| `evolucao.html` — **Evolução** | criação, progressão nível a nível, treinos e valores máximos | 57 + 2 tabelas |

## Combate

**206 itens** em 15 seções, todos com as páginas do livro citadas:

| Seção | Conteúdo |
| --- | --- |
| Atributos | Os 6 atributos, métodos de criação, tabela de modificadores |
| Valores Derivados | Atenção, Defesa, Deslocamento, Iniciativa, PV, PE, Integridade, Bônus de Treinamento, Dados de Vida |
| Testes | Perícia, Jogada de Ataque, CD, os 5 Testes de Resistência, Concentração, vantagem/desvantagem |
| Perícias | As 20 perícias com atributo-chave e exigência de treino |
| Movimento | Andar, Esgueirar, Levantar, Pular, Sacar, terreno difícil, escalada, voo, quedas, flanco, surpresa |
| Ação Comum | Atacar, Agarrar, Apoiar, Derrubar, Desarmar, Desengajar, Empurrar, Esconder, Furtar, Preparar, Conjurar |
| Ação Bônus | Fintar, Invocar, Ler Intenções, Mirar, Provocar, Recarregar, segunda arma |
| Reação | Ataque de Oportunidade, Ação Preparada, punir Desastre, Confronto de Domínios |
| Completa / Livre | Investida, Conjuração em Ritual, Ritual Estendido, Hierarquia de Ações, Atrasar |
| Ataques e Dano | Desarmado, duas armas, a distância, arremesso, crítico, desastre, efeitos de crítico por grupo, sequência de ataques, armas improvisadas, fontes externas, os 15 tipos de dano |
| Condições | As 28 condições, nos 6 grupos do livro |
| Ambiente | Cobertura, camuflagem, iluminação, percepções especiais, tamanho, alcance, alvos e áreas |
| Alma e Morte | Dano na Alma, Integridade, Estados da Alma, Portas da Morte, Ferimentos Complexos, os 6 níveis de Exaustão |
| Energia Amaldiçoada | As 5 aptidões (AU, CL, BAR, DOM, ER), níveis de aptidão, domínios, barreiras, cortinas |
| Descanso | Descanso curto, descanso longo, interlúdio |

## Habilidades

**551 itens** em 8 seções — as 6 especializações, os talentos e as aptidões amaldiçoadas.
Dentro de cada especialização os itens seguem a ordem do livro:

1. **Características e habilidades base** — o que você recebe automaticamente (PV, treinamentos,
   PE, atributo-chave, multiclasse e a progressão fixa da classe).
2. **Listas de escolha** daquela especialização — manobras de empolgação e finalizadoras (Lutador),
   estilos, artes do combate e as 8 posturas (Esp. em Combate), Mudanças de Fundamento
   (Esp. em Técnica), melhorias de invocação e Concentrar Poder (Controlador), apoios avançados
   (Suporte), Dádivas do Céu, Estilo Marcial e Arsenal Amaldiçoado (Restringido).
3. **Habilidades por nível de aquisição** — 2º, 4º, 6º, 8º, 10º, 12º, 14º e 16º.

O subtítulo de cada card resume o **tipo de ação** (passiva, ação comum, bônus, reação, completa),
o **custo em PE** quando existe e se a habilidade tem **pré-requisito**.

As aptidões estão separadas por ramo: Aura (AU), Controle e Leitura (CL), Domínio (DOM),
Barreira (BAR), Energia Reversa (ER) e Especiais.

## Evolução

O passo a passo da progressão, do 1º ao 20º nível:

- **Criação de personagem** — os seis passos do guia do livro.
- **Subindo de nível** — o que entra na ficha a cada nível: habilidade ou talento, PV, PE,
  aptidão amaldiçoada, nível de aptidão, Feitiço, pontos de atributo, bônus de treinamento,
  maestria em perícia, dado de vida e as habilidades base fixas de cada especialização.
- **Tabela de níveis** — XP, bônus de treinamento, grau do feiticeiro e os totais acumulados
  de aptidões, níveis de aptidão, Feitiços, acesso a níveis de Feitiço, pontos de atributo e
  habilidades, com os marcos de cada nível.
- **Feitiços e aptidões** — quantos você tem, até que nível pode criá-los, custo por nível,
  variações de liberação, e a diferença entre *aptidão amaldiçoada* (uma habilidade, uma por
  nível) e *nível de aptidão* (a proficiência de 0 a 5, uma a cada nível par).
- **Valores máximos por nível** — até onde Defesa, perícias, ataque, TR, CD e Atenção chegam
  usando só as regras básicas, mais PV e PE por especialização.
- **Multiclasse** — requisitos, o que você ganha, o que não ganha e o cálculo de nível efetivo.
- **Interlúdio e treinos** — as 11 Linhas de Treinamento, com as 4 etapas e o bônus completo.
- **Cálculos e acúmulos** — arredondamento, ordem das operações, fontes de efeitos,
  "limitado pelo nível" e níveis de aptidão excedentes.

As duas tabelas são **calculadas em JavaScript** a partir das regras (`js/evolucao.js`), não
digitadas à mão — a de valores máximos assume o melhor atributo possível (15 na criação + 2 da
origem, subindo com os pontos de atributo até o teto natural de 20) e nenhuma habilidade.

## Atalhos

`/` foca a busca, `Esc` fecha o modal ou limpa a busca. A busca ignora acentos
(`acao` encontra `Ação`) e procura também dentro do texto completo de cada item.

## Estrutura

```
index.html            página Combate
habilidades.html      página Habilidades
evolucao.html         página Evolução
css/quickref.css      layout, cores por seção, responsivo e impressão
css/icons.css         gerado — só os 181 ícones usados
js/engine.js          motor: cards, modal, navegação e busca (compartilhado)
js/quickref.js        configuração das seções da página Combate
js/habilidades.js     configuração das seções da página Habilidades
js/evolucao.js        seções da página Evolução + geração das duas tabelas
js/data_*.js          o conteúdo de Combate, um arquivo por grupo de seções
js/data_hab_base.js   características e listas de escolha das especializações
js/data_hab_*.js      habilidades, talentos e aptidões extraídos do PDF
js/data_evolucao.js   criação, progressão, treinos e regras de cálculo
img/                  ícones PNG
```

As habilidades de especialização, talentos e aptidões (439 itens) foram **extraídas
programaticamente do PDF** — texto verbatim, com a página de origem em cada card. As
características, habilidades base e listas de escolha (112 itens) foram escritas à mão,
porque no livro elas aparecem como parágrafos corridos e não como entradas tituladas.

Para adicionar um item, basta acrescentar um objeto no array correspondente em `js/data_*.js`:

```js
{
    title: "Nome",
    icon: "nome-do-icone",      // arquivo em img/, registrado em css/icons.css
    subtitle: "Resumo curto",   // linha itálica do card
    description: "Frase que aparece no topo do modal",
    reference: "Livro de Regras, pg. 000.",
    bullets: ["Aceita <b>HTML</b>.", "Cada bullet vira um parágrafo separado por linha."]
}
```

## Créditos

- Estrutura e layout inspirados na [Referência Rápida de D&D 5e](https://diogoan.github.io/dnd5e-quickref/)
  de [diogoan](https://github.com/diogoan), baseada no trabalho original de [crobi](https://github.com/crobi).
- Ícones de [game-icons.net](https://game-icons.net/) (CC BY 3.0).
- **Feiticeiros & Maldições** é um projeto de fãs, sem fins lucrativos, criado por Setsugiri, Parker, Jou e Kame.
  Todos os créditos da obra original (universo, história, sistema de poder e arte) são de Gege Akutami.

Esta é uma referência não-oficial e resumida: em caso de dúvida, vale o que está no livro.
