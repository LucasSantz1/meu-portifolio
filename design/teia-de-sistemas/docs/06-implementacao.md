# 06 — Implementação

Guia para transformar o design em site. A stack abaixo é uma **sugestão** que usa o que o Lucas já domina; dá para trocar.

## Stack sugerida

- **Next.js (App Router) + TypeScript** — páginas estáticas, rotas para estudos de caso, `not-found` pronto.
- **CSS global com os tokens** (`tokens.css`) + CSS Modules ou Tailwind lendo as variáveis. O design depende muito de CSS próprio (sombras duras, retícula, scroll-driven), então CSS puro com variáveis é o caminho mais direto; Tailwind serve para layout.
- **Fontes** via `next/font/google`: Bangers, Archivo (400/500/700/800), JetBrains Mono (400/700). Substituem a Geist da primeira versão.
- **Testes:** Vitest (lógica: montagem do `mailto`, dados dos projetos) e Playwright (troca de tema, abas de projeto, abertura pulável, movimento reduzido).
- **Deploy:** Vercel, com GitHub Actions rodando lint e testes a cada PR.
- **Fluxo:** uma branch e um pull request por entrega, como o Lucas prefere.

## Estrutura de pastas

Mantenha a organização que o repositório já tem (`src/app`, `src/conteudo`, `src/componentes`, nomes em português, texto sempre em `src/conteudo/`) e acrescente o que a nova direção pede:

```
src/
├─ app/
│  ├─ layout.tsx            # fontes, tema aplicado antes da pintura, metadados
│  ├─ page.tsx              # página inicial
│  ├─ projetos/[slug]/page.tsx   # estudos de caso (com generateStaticParams, por causa do output: "export")
│  ├─ not-found.tsx         # página 404
│  └─ globals.css           # tokens.css + estilos base + keyframes
├─ conteudo/                # já existe: perfil.ts, projetos.ts, carreira.ts (fonte da verdade dos textos)
├─ componentes/
│  ├─ Abertura.tsx          # cortina com a teia (client)
│  ├─ Cabecalho.tsx  SeletorTema.tsx   # já existem; seletor passa a ter padrão / claro / escuro
│  ├─ Hero.tsx  Teia3D.tsx  # teia 3D (client, mouse)
│  ├─ FioDaTeia.tsx  CabecalhoCapitulo.tsx
│  ├─ EditorProjetos.tsx    # janela de editor com abas (client)
│  ├─ CodigoStack.tsx  Terminal.tsx
│  ├─ Trajetoria.tsx  Album.tsx  Estante.tsx
│  ├─ ContatoExe.tsx        # formulário mailto (client)
│  ├─ BalaoMusica.tsx  VoltarAoTopo.tsx  ProgressoRolagem.tsx
│  └─ hq/BotaoHQ.tsx Legenda.tsx BalaoFala.tsx Polaroid.tsx …
public/
├─ curriculo-lucas-santanna.pdf   # já existe
├─ musica.mp3               # quando chegar
└─ fotos/  projetos/
```

Com `output: "export"` (site estático), tudo isso funciona sem servidor: as animações são CSS, o contato é `mailto:` e os estudos de caso são gerados no build.

## Convertendo os arquivos `.dc.html`

| No `.dc.html` | No React/Next |
|---|---|
| `<helmet><style>…</style></helmet>` | `globals.css` (ou CSS Module do componente) |
| `{{ variavel }}` | props ou estado |
| `<sc-if value="{{ x }}">…</sc-if>` | `{x && …}` |
| `onClick="{{ handler }}"` | `onClick={handler}` |
| `class Component extends DCLogic` + `this.state` | componente com `useState` / `useEffect` |
| `style="… {{ webTransform }}"` | `style={{ transform }}` |
| Links `href="Projeto.dc.html"` | `href="/projetos/inspetor-emails"` |
| Links `href="Main.dc.html"` | `href="/"` |

## Como portar cada efeito

- **Abertura:** componente client que renderiza a cortina só se `sessionStorage` não tiver `intro-vista`; grava a chave no `animationend` (nome `curtain`) ou no "Pular abertura". Passa `--d: 2.35s` (ou `0s`) para o hero.
- **Teia 3D:** SVGs em camadas com `translateZ`; `onPointerMove` no hero calculando `rotateX/rotateY` (atualizar via `requestAnimationFrame`); só reagir a mouse (`pointerType === 'mouse'`). Balanço contínuo em CSS.
- **Scroll-driven (painéis, fio, voo, progresso):** CSS puro dentro de `@supports (animation-timeline: view())`. Sem suporte, fica tudo estático e visível. Se quiser animação em todos os navegadores, adicionar um fallback com `IntersectionObserver` que liga uma classe.
- **Fio lateral:** precisa de `view-timeline-name: --fio` no elemento do fio e `animation-range: entry calc(0% + 35vh) entry calc(100% + 35vh)`.
- **Tema:** script inline no `<head>` lê `localStorage.tema` (padrão `padrao`) e aplica `data-theme` no `<html>` antes da pintura; o seletor atualiza os dois.
- **Voltar ao topo:** listener de `scroll` passivo com `requestAnimationFrame`; animação em 2 fases com `setTimeout(330ms)` e rolagem manual de 750 ms (easeInOutCubic). Limpar timers ao desmontar.
- **Player:** `<audio>` controlado por ref; nunca dar autoplay; `preload="metadata"`.
- **Contato:** `mailto:` com `encodeURIComponent` no assunto e no corpo. Se um dia quiser envio direto, criar uma rota de API com validação e limite de envios.
- **Projetos:** dados em `content/projetos.ts`; a home mostra as abas e cada projeto tem sua rota de estudo de caso.

## Qualidade antes de publicar

- [ ] Contraste 4.5:1 nos três temas (principalmente legendas e barras de status)
- [ ] Navegação completa por teclado, foco visível, abas com `role="tab"` e `aria-selected`
- [ ] `prefers-reduced-motion` desliga abertura e animações
- [ ] Celular: uma coluna, teia do hero abaixo do texto, fio lateral oculto, player sem cobrir conteúdo
- [ ] Lighthouse: desempenho, acessibilidade e SEO acima de 90
- [ ] Metadados: título, descrição, imagem de compartilhamento (pode ser o hero)
- [ ] Todos os `[PENDÊNCIA]` de `07-pendencias.md` resolvidos
- [ ] Nenhum nome ou símbolo de personagem no site

## Ideia futura

- Transformar em PWA (instalável), como em uma das referências.
- Estudos de caso para os outros dois projetos.
