# 01 — Identidade visual

## Conceito

**"Teia de Sistemas"**: o portfólio é uma HQ urbana em que a teia é a metáfora do trabalho full-stack — fios ligando front-end, back-end, banco e entrega. A estética lembra o Homem-Aranha (a referência que o Lucas quer, porque tem a ver com ele), mas é **original**: usa a linguagem de quadrinho, a paleta e a teia, sem o personagem.

Três ideias sustentam tudo:

1. **Quadrinho:** contornos pretos grossos, sombras duras deslocadas (sem desfoque), retícula de pontos (Ben-Day), legendas de narração amarelas ("Enquanto isso…"), balões de fala, letreiro com contorno e sombra colorida.
2. **Teia:** aparece na abertura, no hero (em 3D, com a stack nos nós), no fio que desce pela lateral e pendura cada capítulo, no botão de voltar ao topo e na página 404.
3. **Código:** abaixo do hero, o site mistura HQ com editor de código e terminal (inspirado nos portfólios em formato de IDE e de terminal que o Lucas usou como referência).

## Limites (direitos autorais)

- **Nunca** usar o personagem, o símbolo da aranha, o padrão do uniforme, a máscara/olhos ou os nomes "Homem-Aranha", "Spider-Man", "Venom", "Gwen" ou similares no site.
- Os temas claro e escuro foram inspirados em climas de cor; não carregam elementos de personagens.
- Teias, retícula, onomatopeias e linguagem de HQ são genéricas e podem ser usadas à vontade.

## Temas

Três temas, escolhidos por um seletor no cabeçalho (padrão, claro, escuro). O site abre no **padrão**. Valores completos em `tokens.css`.

| Papel | Padrão | Claro | Escuro |
|---|---|---|---|
| Fundo da página | `#FFFFFF` | `#FFFFFF` | `#000000` |
| Tinta (contornos, sombras, fios) | `#000000` | `#000000` | `#FFFFFF` |
| Fundo do hero | `#12307A` azul-noite | `#FFFFFF` | `#000000` |
| Ação (botão principal, LS, barras) | `#D7141E` vermelho | `#E0177A` rosa | `#FFFFFF` (texto preto) |
| Legendas e destaques | `#FFE24A` amarelo | `#FFC2DD` rosa-claro | `#FFFFFF` |
| Superfície de destaque | `#12307A` | `#2FD0E0` ciano | `#262626` |
| Fios da teia do hero | `#8FB8FF` azul-céu | `#000000` (anéis internos rosa) | `#FFFFFF` (anéis cinza) |
| Sombra da teia 3D | preto 55% | ciano (efeito de impressão desalinhada) | `#3A3A3A` |
| Editor de código | fundo `#0E1F4F` | fundo branco | fundo preto |

Regras de uso:
- A cor de ação só aparece em coisas clicáveis importantes e em marcadores da teia (alfinetes, ponta do fio).
- O amarelo/rosa-claro é para **legendas de narração** e realces pequenos, nunca para blocos grandes de texto corrido.
- No tema escuro, o vermelho some: tudo é preto e branco, e o que era vermelho vira branco com texto preto.

## Tipografia

| Uso | Fonte | Detalhes |
|---|---|---|
| Títulos, letreiros, botões | **Bangers** (Google Fonts) | Letreiro de HQ; `letter-spacing: .02em–.04em`; já é toda em caixa alta |
| Texto corrido e interface | **Archivo** 400/500/700/800 | Corpo 16–20px, `line-height` 1.45–1.6 |
| Código, caminhos, terminal | **JetBrains Mono** 400/700 | Só onde é código de verdade (editor, terminal, caminhos de arquivo) |

Escala usada: nome no hero 132px · títulos de capítulo 104px · título do contato 132px · títulos de projeto 58px · subtítulos 40–48px · corpo 16–22px · legendas 16–17px.

Letreiro do nome (e do "Bora construir algo?"): preenchimento `--name-fill`, contorno de 3px `--name-stroke` (`-webkit-text-stroke`) e sombra dura `7px 7px 0 --name-shadow`.

## Regras de estilo

- **Contorno:** 3–4px sólido na cor de tinta em painéis, botões, janelas e fotos.
- **Sombra:** sempre dura, sem desfoque: `box-shadow: 8px 8px 0 var(--ink)` (painéis), `5px 5px 0` (botões), `12px 12px 0` (janelas grandes).
- **Retícula:** `radial-gradient(cor 1.6px, transparent 1.8px)` com `background-size: 12px 12px`, quase sempre com máscara radial para sumir num canto.
- **Inclinações:** elementos "colados" (legendas, polaroids, terminal, preview) ficam levemente tortos, entre −3° e 3°.
- **Cantos:** retos em painéis e janelas; arredondados só em balões de fala (28px), etiquetas de tópico (pílula) e no player.
- **Ícones:** SVG de traço feitos à mão; nada de emoji.
- **Nada de** degradês decorativos, cards genéricos idênticos, faixas coloridas na lateral de cards ou fundo creme.

## Acessibilidade (já embutida no design)

- Contraste mínimo 4.5:1 em texto; foco de teclado visível (anel de 3px na cor `--focus`).
- Áreas de toque de pelo menos 44px.
- Todos os efeitos respeitam `prefers-reduced-motion`: a abertura some, nada anima, e o botão de topo só leva direto.
- Teia e ilustrações têm `role="img"` com descrição ou `aria-hidden` quando são só decoração.
- No celular, colunas viram uma só, a teia do hero vai para baixo do texto, o fio lateral e as teias dos capítulos somem.
