# 03 — Animações e interações

Todas as animações respeitam `prefers-reduced-motion: reduce` (desligam, e a abertura nem aparece). Os valores abaixo são os do design final.

## 1. Abertura — "o fio, a teia e o puxão"

Uma tela preta (`position: fixed`, `z-index: 100`) cobre o site. Linha do tempo (segundos a partir do carregamento):

| Tempo | O que acontece | Detalhe técnico |
|---|---|---|
| 0,05 → 0,40 | Disco "LS" aparece no centro | `pop` (scale .5 → 1), `cubic-bezier(.2,.9,.3,1.35)` |
| 0,15 → 0,40 | Texto "Tecendo o site…" aparece | fade in |
| 0,30 → 0,80 | Fio branco (3px) desce do topo até o disco | `scaleY(0 → 1)`, origem no topo, `cubic-bezier(.5,0,.2,1)` |
| 0,82 → 1,17 | Raios da teia saem do "LS" (10 raios) | `stroke-dashoffset` com `pathLength="100"` |
| 1,00 / 1,08 / 1,16 | Os 3 anéis se fecham, de dentro para fora | idem, 0,35 s cada |
| 1,35 | Texto some | fade out 0,25 s |
| 1,35 → 1,85 | "LS" balança como pêndulo, pivô no topo | `tug`: rotate 0 → −9° → 7° → 0 |
| 0 → 2,70 | Tela preta: parada até 58%, afunda 26px em 65%, sobe para −118% | 2,7 s, `cubic-bezier(.7,0,.25,1)`; borda de baixo serrilhada (`clip-path` em zigue-zague) |
| ~2,35 | O nome no hero "cai" (slam) e o balão aparece | atraso do hero `--d: 2.35s` |

- O fio, a teia e o "LS" ficam **dentro** da tela preta, então sobem com ela: é a teia puxando tudo.
- Ao terminar (`animationend` com nome `curtain`), a camada é removida do DOM.
- **Pular abertura** remove na hora.
- No site real: mostrar só na **primeira visita da sessão** (`sessionStorage`).

## 2. Hero

- **Nome:** `slam` — escala 1.4 com −6° → 0.97 com 1° → normal, 0,7 s.
- **Legenda e balão:** `pop` com atraso de +0,15 s e +0,5 s.
- **Teia 3D** (`perspective: 1000px`), 6 camadas SVG empilhadas com `transform-style: preserve-3d`:

| Camada | Profundidade | Conteúdo |
|---|---|---|
| Sombra | `translate(16px,16px) translateZ(-110px)` | raios e anéis em `--web-shadow` |
| Anéis externos | `translateZ(-50px)` | 2 anéis com 55% de opacidade |
| Raios | `translateZ(0)` | 10 raios + 1 anel + **faíscas** |
| Anéis internos | `translateZ(45px)` | 2 anéis em `--web-in` |
| Nós e etiquetas | `translateZ(80px)` | 12 nós com as tecnologias |
| Centro | `translateZ(130px)` | disco "LS" |

- **Movimento:** balanço contínuo de 14 s (`rotateX` 9° ↔ −5°, `rotateY` −11° ↔ 9°). Com o mouse sobre o hero, inclina seguindo o cursor: `rotateY = x × 24°`, `rotateX = −y × 24° × 0,8` (x e y de −0,5 a 0,5), transição 0,18 s. Intensidade ajustável (0–40°).
- **Retícula** do fundo se desloca até 28px contra o mouse (paralaxe).
- **Faíscas:** traço de 9% do raio correndo do centro para fora em 4 raios, 3,2 s, defasadas.
- **Etiquetas:** no hover crescem 15% e ficam na cor de destaque.

## 3. Rolagem

- **Rolagem suave** nos links do menu (`scroll-behavior: smooth`, `scroll-margin-top: 24px`); ao chegar, o título do capítulo dá um pulo (`targetPop`: escala 1.08 com −2°).
- **Fio de progresso** no topo: `scaleX` ligado à rolagem da página (`animation-timeline: scroll(root)`).
- **Painéis entram e saem nos dois sentidos** (CSS scroll-driven, `animation-timeline: view()`, faixa `entry 0% → exit 100%`):
  - Entrada até `entry 65%`: de `translateY(70px) scale(.95)` e opacidade 0 até o normal (variações vindo da esquerda/direita com `translateX(±90px)` e ±2°).
  - Saída a partir de `exit 45%`: some subindo 50px. Assim, ao voltar a página, eles reaparecem do mesmo jeito.
- **Fio da teia lateral:** um fio de 3px a 20px da borda do conteúdo, com fiapos a cada 48px, que **se desenha conforme a rolagem** (`scaleY 0 → 1`) com um nó na ponta. Usa uma linha do tempo nomeada `view-timeline-name: --fio` no próprio fio e a faixa `entry calc(0% + 35vh) → entry calc(100% + 35vh)`, o que mantém a ponta por volta de 65% da altura da tela. Cada título de capítulo tem uma teia redonda de 60px presa ao fio.
- **"Fora do código" voa para dentro:** título vem da esquerda, texto e estante da direita, polaroids alternando lados, com rotação de ±18° e `translateX(±110vw)`, curva `cubic-bezier(.2,.8,.3,1)`, escalonados por faixas (`entry 0%→cover 35%`, `entry 10%→cover 40%`, `entry 20%→cover 45%`, `entry 30%→cover 50%`).
- Navegadores sem `animation-timeline`: tudo aparece parado e completo (envolver em `@supports`).

## 4. Botões e hovers

- **Botões de HQ:** no hover sobem 2px e a sombra cresce para 7px; no clique afundam 4px e a sombra some (0,12 s).
- **Polaroids:** no hover endireitam e sobem 6px.
- **Strings do `developer.ts`:** no hover invertem as cores.

## 5. Projetos (editor)

- Abas e árvore de arquivos trocam o projeto visível (estado `proj`). Aba ativa: fundo do editor, borda superior na cor de ação, `aria-selected`.
- O caminho na barra superior e a stack na barra de status mudam junto.

## 6. Voltar ao topo — "a teia puxa"

- Aparece depois de 700px de rolagem (desliza 24px para cima com fade).
- Ao clicar:
  1. Um fio desce do topo da tela até o botão (`scaleY 0 → 1`, 0,3 s) e o botão dá um tranco (`tug`).
  2. Depois de 330 ms, o fio recolhe e puxa o botão para cima (`translateY(-100vh + 84px)`, 0,75 s, `cubic-bezier(.7,0,.25,1)`), enquanto a página rola até o topo com a mesma duração (easeInOutCubic via `requestAnimationFrame`).
- Com movimento reduzido: só `scrollTo(0)`.

## 7. Balão de música

- Fixo no canto inferior esquerdo, formato de balão de fala com rabinho.
- Play/pause, nome da música, artista, equalizador de 4 barras que pula quando toca, barra de posição (input range) e botão de minimizar.
- Minimizado vira um disco na cor de ação com nota musical que **gira** enquanto toca.
- Sem áudio configurado, mostra "Envie o arquivo de áudio para o balão tocar." e o play fica desativado.
- **Não toca sozinho**: navegadores bloqueiam autoplay com som; só começa no clique.

## 8. Temas

- Estado `theme` (`padrao` | `claro` | `escuro`), aplicado como `data-theme` na raiz. Padrão: `padrao` (opção `auto` segue o sistema: escuro → escuro, claro → padrão).
- No site real: salvar a escolha em `localStorage` e aplicar antes da primeira pintura (script inline no `<head>`) para não piscar.
