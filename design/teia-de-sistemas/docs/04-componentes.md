# 04 — Componentes

Peças reutilizáveis do design, com as medidas usadas. Cores sempre pelos tokens de `tokens.css`.

## Botão de HQ (`ComicButton`)

- Altura mínima 48–52px, `padding: 0 18–22px`.
- Contorno 3px `--ink`, sombra dura `4–5px 4–5px 0 --ink`, sem arredondamento.
- Texto em Bangers 21–24px, `letter-spacing: .04em`.
- Variantes: **principal** (`--accent` / `--on-accent`), **secundária** (`--paper` / `--text`), **sobre fundo escuro** (branco com texto preto).
- Hover: sobe 2px, sombra 7px. Clique: afunda 4px, sombra 0.

## Legenda de narração (`Caption`)

- Fundo `--accent2`, texto `--on-accent2`, contorno 3px preto, sombra `4px 4px 0` preta.
- Archivo 700, 16–17px, `padding: 8px 14px`, inclinada −1,2°.
- Texto sempre como narração de HQ terminando em reticências ("Enquanto isso, no editor…").

## Título de capítulo (`ChapterTitle`)

- Bangers 104px (60px no celular), `line-height: .9`.
- Acima, a legenda de narração. À esquerda, a teia redonda de 60px presa ao fio lateral.

## Balão de fala (`SpeechBubble`)

- Fundo `--paper`, contorno 3px `--ink`, raio 28px, `padding: 22px 26px`.
- Rabinho: SVG triangular com o mesmo preenchimento e contorno, sobrepondo a borda.

## Letreiro (`Marquee` de nome)

- Bangers, preenchimento `--name-fill`, `-webkit-text-stroke: 3px var(--name-stroke)`, `text-shadow: 7px 7px 0 var(--name-shadow)`.
- Usado no nome do hero e no "Bora construir algo?".

## Painel de HQ (`Panel`)

- Contorno 4px `--ink`, sombra `6–8px` dura, fundo `--paper`.
- Usado na trajetória. Destaque: fundo `--alt`, sombra na cor de ação.
- Número em círculo de 40px (Bangers) quando o conteúdo é uma sequência.

## Retícula (`Halftone`)

- `background-image: radial-gradient(cor 1.6px, transparent 1.8px); background-size: 12px 12px;`
- Máscara radial para sumir num canto: `mask-image: radial-gradient(circle at 0% 100%, #000 0%, transparent 55%)`.

## Janela de editor (`EditorWindow`)

- Contorno 4px `--ink`, sombra `12px 12px 0 --ink`, fundo `--ed-bg`, texto `--ed-fg`.
- Barra superior: fundo `--accent`, ícone de teia + caminho em JetBrains Mono, contorno inferior 4px.
- Abas (`role="tablist"`): altura 46px, fundo `--ed-side`; ativa com fundo `--ed-bg`, borda superior 4px `--accent`.
- Corpo: grade `230px | 1fr` (lateral "Explorador" + conteúdo). Conteúdo em duas colunas: README e preview.
- README: `#` e `##` na cor `--syn-kw`; subtítulos em JetBrains Mono na cor `--syn-key`.
- Barra de status: fundo `--accent`, JetBrains Mono 13px, `⎇ main`, arquivo e stack.

## Bloco de código (`CodeBlock`)

- Linhas numeradas (coluna de 52px), JetBrains Mono 15px, `line-height: 1.9`.
- Sintaxe: chaves `--syn-key`, strings `--syn-str`, palavras-chave `--syn-kw` (negrito), comentários `--syn-com` (itálico).

## Terminal (`Terminal`)

- Fundo preto, texto branco em todos os temas; contorno 4px `--ink`, sombra `10px 10px 0 --accent`.
- Barra com nome (`bash`, `contato.exe`) e pasta, separador branco de 3px.
- Prompt `$` cinza `#9C9C9C`; saídas de destaque em `#FFE24A`; cursor de bloco piscando (1 s, `steps(1)`).
- Inclinado ~1° e sobreposto ao bloco vizinho.

## Formulário de terminal (`TerminalForm`)

- Campos em linha com rótulo amarelo (`> nome:`), fundo transparente, linha tracejada embaixo.
- O botão monta um link `mailto:lucas.santannaa12@gmail.com?subject=…&body=…` com `encodeURIComponent`.

## Polaroid (`Polaroid`)

- Fundo branco, contorno 3px preto, sombra `6px 6px 0` preta, `padding: 12px 12px 14px`.
- Foto 4:3 com retícula `--photo` / `--photo-ink` (até chegar a foto real), legenda em Bangers 24px.
- Fita: retângulo 84×24px em `--accent2`, 90% de opacidade, contorno 2px, levemente torto.
- Grade 2×2 com rotações diferentes (−3°, 2,5°, 1,5°, −2°) e deslocamentos verticais.

## Estante (`Bookshelf`)

- Lombadas verticais (`writing-mode: vertical-rl`) de alturas diferentes (74–100%), cores `--bk1…4`, contorno 3px preto, algumas inclinadas.
- Prateleira: borda inferior de 10px `--ink`.

## Teia de capítulo (`ChapterWeb`)

- SVG 60×60: 8 raios, 2 anéis octogonais, centro de 6px na cor de ação. Traço na cor de tinta.

## Fio da teia lateral (`StoryThread`)

- Linha de 3px `--ink` + fiapos (gradiente repetido de 2px a cada 48px, 35% de opacidade) + nó de 18px na ponta.

## Seletor de tema (`ThemeSwitcher`)

- Grupo com contorno 3px e sombra 3px; 3 botões de 44×44 com amostra circular dividida na diagonal (vermelho/azul, rosa/ciano, preto/branco); ativo com fundo `--accent2`; `aria-pressed`.

## Player de música (`MusicBalloon`)

- Largura 340px, raio 22px, contorno 3px, sombra 5px, rabinho apontando para o canto.
- Botão play 52px na cor de ação; equalizador de 4 barras (4px); range com `accent-color: var(--accent)`.
- Minimizado: disco de 64px com nota musical.

## Botão voltar ao topo (`BackToTop`)

- Disco de 60px na cor de ação, ícone de seta com mini-teia; o fio é um elemento fixo separado a 52,5px da borda direita.
