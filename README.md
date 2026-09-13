# Referência Rápida — Feiticeiros & Maldições 2.5.2

Referência rápida de combate para o RPG de mesa **Feiticeiros & Maldições** (Livro de Regras v2.5.2),
no mesmo formato da [Referência Rápida de D&D 5e](https://diogoan.github.io/dnd5e-quickref/):
seções coloridas, cards com ícone e modal com os detalhes ao clicar.

## Como abrir

Abra o `index.html` no navegador — não precisa de servidor, todos os caminhos são relativos.

Se quiser servir por HTTP:

```bash
python -m http.server 8767 --directory C:/Users/kaelz/fem-quickref
```

## Como compartilhar

### Link pronto (Artifact do Claude)

https://claude.ai/code/artifact/0e208d7b-f5b4-4216-9ae7-5504c8c376c0

O artifact nasce **privado**: para os amigos abrirem, é preciso liberar o acesso pelo
**menu de compartilhamento da própria página** uma vez. Depois disso o link funciona para
quem você mandar.

Para atualizar esse mesmo link depois de mexer no site, é só pedir — o endereço não muda.

### Link público (GitHub Pages)

Faça o login uma única vez (abre o navegador):

```bash
gh auth login
```

Depois rode:

```bash
bash publicar-github.sh
```

O script cria o repositório público, envia os arquivos, liga o GitHub Pages e mostra o
endereço final — algo como `https://SEU-USUARIO.github.io/fem-quickref/`. Rodando de novo
depois de qualquer mudança, ele só envia o que mudou. Esse link é público de verdade:
qualquer pessoa abre, sem login e sem conta.

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

## Ficha

`ficha.html` é uma ficha automática no formato da **Ficha de Personagem v2.5** (a planilha
que serviu de base): atributos, PV / PE / Integridade, Defesa, Atenção, Iniciativa,
Deslocamento, CD de Especialização, as 3 jogadas de ataque, os 5 testes de resistência,
as 20 perícias com T/M e os níveis de aptidão.

O layout segue a estrutura do [C.R.I.S.](https://crisordemparanormal.com/) (a ficha digital
de Ordem Paranormal): **três colunas que ocupam uma tela só**, cada uma rolando por dentro,
com a terceira em abas.

| | C.R.I.S. | aqui |
| --- | --- | --- |
| Coluna 1 | 424 px — atributos, vida, defesa | 424 px — identidade, atributos, barras, valores, aptidões |
| Coluna 2 | 356 px — perícias | 356 px — perícias |
| Coluna 3 | 500 px — abas | resto da tela — abas |
| Linha de perícia | ~30 px | 28 px |
| Fundo / réguas | `#121212` / `rgba(255,255,255,.1)` | iguais no modo noite |
| Fonte | Roboto | Roboto |
| Título de seção | 14 px / 700 | 14 px / 700 |
| Rótulo | 10 px / 700 | 10 px / 700 |
| Altura da página | uma tela | uma tela |

As abas da terceira coluna são **Habilidades · Ataques e TRs · Assistente · Anotações**.
PV, PE e Integridade são barras com botões −5 −1 +1 +5, e as perícias treinadas ficam
destacadas na cor da seção. Abaixo de 1100 px o layout volta ao empilhamento normal.

No lugar do pentágono de atributos do C.R.I.S. há um **selo hexagonal de barreira**,
desenhado em SVG: seis vértices, um por atributo, com o véu externo tracejado girando
devagar e a CD de Especialização no núcleo. Hexágono porque são seis atributos e porque
barreira e domínio são a geometria da casa em *Jujutsu Kaisen*.

O acabamento também segue o C.R.I.S., e segue **plano**: nada de cartão, canto arredondado
ou sombra. As seções são separadas por réguas de 1 px, os campos são sublinhados em vez de
caixas, e as abas levam um sublinhado de 2 px na cor de acento. O modo dia usa um espelho
claro dos mesmos tokens. **Só a aba Ficha usa essa linguagem** — Combate, Habilidades e
Evolução seguem no formato da referência de D&D, com as molduras coloridas.

**Toda conta fica à vista, sem tomar a tela.** Embaixo de cada número vem a conta resumida
(`10+3+2+2`); passando o mouse aparece a versão nomeada, e o botão **Contas resumidas /
detalhadas** no topo abre todas de uma vez:

```
Defesa 17   10+3+2+2   → 10 base + 3 Destreza + 2 ½ nível + 2 Estilo Defensivo
Acrobacia +8   2+2+3    → 2 Destreza + 2 ½ nível + 3 treinado (+3)
CD 20   10+2+3+3+2      → 10 base + 2 ½ nível + 3 Força + 3 treinamento + 2 Implemento Marcial
```

**Um clique adiciona o conteúdo do livro.** O catálogo tem os 564 itens das outras abas
(habilidades base, escolhas de especialização, talentos, aptidões e treinos). Ao adicionar,
os efeitos numéricos escritos no texto são detectados e aplicados — pegou algo que dá
+2 de Destreza e o +2 entra em Destreza, Defesa, Iniciativa, Acrobacia, Furtividade,
Prestidigitação e no TR de Reflexos, cada um nomeando a origem. Os modificadores ficam
como etiquetas editáveis: dá para remover ou acrescentar outros à mão.

**Assistente.** Escolhida a especialização, um botão anota de uma vez todas as
**habilidades base** que o livro entrega sozinho até o seu nível, e o botão de **subir de
nível** faz isso de novo a cada nível. Abaixo, uma lista diz o que ainda falta escolher:
habilidades/talentos, aptidões amaldiçoadas, níveis de aptidão, Feitiços, pontos de atributo
e a maestria do 10º nível.

**Homebrew.** Crie um item com nome e descrição e pendure nele quantos modificadores
quiser, mirando qualquer alvo da ficha — ele passa a entrar nas contas como qualquer
habilidade do livro.

A ficha fica salva no navegador; **Exportar/Importar JSON** leva o personagem para outro
aparelho ou guarda uma cópia.

## Como abrir um item

Clicar em um card **abre o texto ali mesmo**, num painel que nasce logo abaixo da linha
daquele card e ocupa a largura toda — sem pop-up e sem tirar você do lugar. Clicar de novo
no mesmo card fecha; clicar em outro move o painel. Também fecham o `×`, a tecla `Esc` e
qualquer busca. Só um painel fica aberto por vez.

## Navegação e temas

A barra do topo fica só com as três abas, a busca e o botão de tema. As **categorias da
página ficam na lateral esquerda**, cada uma com a quantidade de itens e a cor da seção,
e a seção que está na tela aparece destacada conforme você rola. Em Combate e Habilidades
a lateral (e a própria ordem das seções) vai **da maior para a menor**; em Evolução a ordem
é a da progressão, porque aquela página é um passo a passo.

Ao filtrar, a lateral acompanha: some quem não tem resultado e as contagens passam a
mostrar quantos itens sobraram em cada seção.

O botão no canto alterna **Dia** (cards claros) e **Noite** (cards escuros). A escolha fica
salva no navegador; na primeira visita ele segue a preferência do sistema. No modo noite as
cores de cada seção são clareadas para continuarem legíveis sobre o fundo escuro.

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
