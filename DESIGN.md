---
name: Lucas Sant'Anna · Portfólio
description: Portfólio de uma página de um dev full-stack, contado como uma HQ de rua.
colors:
  vermelho: "#c8141b"
  vermelho-escuro: "#ff5a4f"
  vermelho-fundo-escuro: "#b5121a"
  sobre-vermelho: "#ffffff"
  amarelo: "#ffd60a"
  sobre-amarelo: "#141414"
  ciano: "#00a6dd"
  ciano-escuro: "#00b9f2"
  magenta: "#e4007c"
  magenta-escuro: "#ff2e98"
  canvas: "#eeeff0"
  surface: "#ffffff"
  ink: "#141414"
  body: "#36373b"
  muted: "#595b61"
  line: "#d2d4d8"
  canvas-escuro: "#0e0e12"
  surface-escuro: "#17171d"
  ink-escuro: "#f3efe6"
  body-escuro: "#cdc7bc"
  muted-escuro: "#a19b90"
  line-escuro: "#2e2e36"
typography:
  display:
    fontFamily: "Anton, Arial Narrow, sans-serif"
    fontSize: "6rem"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "0.005em"
  headline:
    fontFamily: "Anton, Arial Narrow, sans-serif"
    fontSize: "4rem"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "0.005em"
  title:
    fontFamily: "Anton, Arial Narrow, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.01em"
  body:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  body-lead:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Geist Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.06em"
  legenda:
    fontFamily: "Permanent Marker, cursive"
    fontSize: "0.95rem"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "0.02em"
rounded:
  quadro: "2px"
  sm: "3px"
  md: "4px"
  full: "9999px"
spacing:
  calha-celular: "16px"
  calha: "20px"
  margem-celular: "20px"
  margem: "40px"
  secao-celular: "64px"
  secao: "80px"
components:
  botao-principal:
    backgroundColor: "{colors.vermelho}"
    textColor: "{colors.sobre-vermelho}"
    rounded: "{rounded.md}"
    padding: "0 20px"
    height: "48px"
  quadro:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.quadro}"
    padding: "48px"
  legenda:
    backgroundColor: "{colors.amarelo}"
    textColor: "{colors.sobre-amarelo}"
    typography: "{typography.legenda}"
    padding: "0.3rem 0.7rem 0.25rem"
  tag-stack:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "4px 10px"
  seletor-tema-ativo:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas}"
    rounded: "{rounded.full}"
    size: "32px"
---

# Design System: Lucas Sant'Anna · Portfólio

## Overview

**Creative North Star: "A HQ de rua"**

A página é lida como um gibi impresso num papel cinza-claro: quadros brancos com contorno de tinta grosso, títulos de capa em caixa alta condensada com as chapas de ciano e magenta levemente fora de registro, caixas de legenda amarelas de narrador e retícula de pontos (Ben-Day) preenchendo o espaço vazio. A intensidade é "equilibrada": o clima de HQ é forte no topo, nos títulos, nas legendas, na retícula e no quadro vermelho de fechamento; o texto corrido fica limpo, em Geist, sobre fundo liso, para o recrutador ler sem esforço.

A densidade é editorial, com respiro generoso entre seções e linhas de tinta de 3px separando itens de lista (Stack, Trajetória, Outros projetos) em vez de cards. Só existem quadros onde a HQ pede um quadro: os dois quadros irmãos do topo, o carro-chefe e o fechamento.

A linguagem é genérica de quadrinhos. Nada de personagem, símbolo de aranha, logo ou imagem da Marvel ou da Sony.

**Key Characteristics:**
- Papel cinza-claro, quadros brancos, contorno de tinta de 3px, sem sombras.
- Vermelho como a única cor de ação; amarelo só nas legendas; ciano e magenta só no desalinhamento dos títulos.
- Anton em caixa alta nos títulos, Permanent Marker só nas legendas, Geist no texto, Geist Mono nos dados.
- Retícula Ben-Day como textura de preenchimento, nunca atrás de texto corrido.
- Um único momento de movimento: o nome do topo "entra em registro".
- Claro e escuro com a mesma gramática; no escuro o contorno vira tinta clara.

## Colors

Quatro tintas de impressão sobre papel neutro: preto de traço, vermelho de ação, amarelo de legenda e o par ciano/magenta que só existe como erro de registro.

### Primary
- **Vermelho de ação** (`vermelho`; `vermelho-escuro` no tema escuro): links, botão principal, ✓ das decisões, ícone "+" do estudo de caso, setas do fluxo, tag tracejada da próxima versão, contorno de foco. No escuro, o fundo do botão e do quadro de contato usa o `vermelho-fundo-escuro`, mais fechado, para o branco continuar AA; no claro o fundo é o próprio vermelho.
- **Branco sobre vermelho** (`sobre-vermelho`): texto e links sobre o botão principal e o quadro de contato.

### Secondary
- **Amarelo de legenda** (`amarelo`, com `sobre-amarelo` por cima): fundo das caixas de legenda e dos números das etapas do fluxo. Também é a cor da seleção de texto.

### Tertiary
- **Ciano e magenta de chapa** (`ciano`, `magenta` e as variantes `-escuro`): existem só como deslocamento de registro atrás dos títulos de capa. Nunca como fundo, texto ou fio.

### Neutral
- **Papel cinza-claro** (`canvas` / `canvas-escuro`): fundo da página e do cabeçalho fixo.
- **Quadro branco** (`surface` / `surface-escuro`): interior dos quadros e das tags.
- **Tinta** (`ink` / `ink-escuro`): títulos, texto de destaque e o contorno grosso dos quadros (no escuro o contorno usa a tinta clara).
- **Texto** (`body` / `body-escuro`): texto corrido.
- **Apagado** (`muted` / `muted-escuro`): metadados, descrições curtas, rodapé, links do menu em repouso.
- **Fio fino** (`line` / `line-escuro`): divisórias de 1px dentro de listas de definição e sublinhado de links secundários em repouso.

### Named Rules
**The Uma Tinta de Ação Rule.** Tudo que se clica ou que confirma algo é vermelho. Nenhuma outra cor sinaliza interação.

**The Chapa Fora de Registro Rule.** Ciano e magenta só aparecem como o deslocamento do `titulo-hq`. Se a cor está num pixel que não é sombra de título, está errada.

**The Amarelo é Narrador Rule.** O amarelo fala como narrador: caixas de legenda e números das etapas. Fora disso, só pinta a seleção de texto; não vira destaque de botão nem fundo de seção.

## Typography

**Display Font:** Anton (com Arial Narrow)
**Body Font:** Geist Sans (com ui-sans-serif, system-ui)
**Label/Mono Font:** Geist Mono (com ui-monospace)
**Legenda:** Permanent Marker (com cursive)

**Character:** A capa grita em caixa alta condensada; o miolo fala baixo e claro em Geist. O letreiro à mão aparece só na voz do narrador.

### Hierarchy
- **Display** (Anton 400, 3.5rem no celular, 4.5rem a partir de 640px, 6rem a partir de 1024px; altura de linha 0.95; caixa alta): só o nome no topo, com o desalinhamento de chapas.
- **Headline** (Anton 400, 2.75rem no celular e 4rem a partir de 768px; 0.95; caixa alta, com desalinhamento): títulos de seção. O nome do carro-chefe usa a mesma voz em 2.25rem/3.25rem.
- **Title** (Anton 400, 1.5rem; 1; caixa alta, sem desalinhamento): subtítulos ("Agora", "Como o dado anda", "Outros projetos", grupos da Formação, camadas da Stack). Nomes de projeto em linha e cargos da Trajetória sobem para 1.625rem/1.875rem. O título do Contato usa esta voz sem desalinhamento, em 3rem/5rem, porque o vermelho de fundo já é a tinta.
- **Body** (Geist 400, 1rem, 1.6): texto corrido; 15px em listas e estudos de caso; 1.125rem como texto de abertura (chamada, resumo, descrição de seção). Medida de 46 a 62ch.
- **Label** (Geist Mono 400, 0.75rem, 0.06em, caixa alta): metadados, termos de listas de definição, datas, rodapé. Versões e tags de stack usam Geist Mono sem caixa alta (12 a 16px).
- **Legenda** (Permanent Marker 400, 0.95rem, 0.02em, caixa alta): só dentro da caixa de legenda.

### Named Rules
**The Capa e Miolo Rule.** Anton só em títulos, nunca em parágrafo; Geist nunca em título de capa.

**The Registro Só Grande Rule.** O desalinhamento ciano/magenta vale para o nome do topo, títulos de seção e o nome do carro-chefe. Títulos menores usam Anton limpo, sem chapas.

## Layout

Página de uma coluna com largura máxima de 1240px, centralizada. Margens laterais de 20px no celular e 40px a partir de 768px. Seções começam com 64px de respiro no celular e 80px no desktop. Grade de 12 colunas a partir de 768px (1024px para os estudos de caso): o topo divide 8 + 4 em dois quadros irmãos separados por uma calha de 16px (20px no desktop); listas de Stack e Trajetória usam termo à esquerda (4 ou 3 colunas) e conteúdo à direita.

O cabeçalho é fixo, com 64px de altura e uma linha de tinta de 3px embaixo; no celular o menu vira uma segunda linha que desliza na horizontal.

O fluxo do carro-chefe fica em 5 colunas a partir de 1024px e empilha na vertical abaixo disso, com setas vermelhas entre as etapas.

**The Calha de Gibi Rule.** Quadros irmãos ficam lado a lado separados por calha de papel, nunca colados nem sobrepostos.

## Elevation & Depth

Sem sombras. A profundidade vem do contorno de tinta (3px nos quadros, 2px em tags e capturas), do contraste entre papel cinza e quadro branco e da retícula Ben-Day como preenchimento. O `text-shadow` dos títulos não é elevação: é o deslocamento das chapas de impressão (ciano para a esquerda, magenta para a direita e um pouco para baixo, em 0.04em).

**The Papel Chapado Rule.** Nada flutua. Se precisa separar, use contorno de tinta, fio ou calha.

**The Retícula Muda Rule.** A retícula preenche área vazia (o rodapé do quadro "Agora", o canto do quadro de contato) e nunca fica atrás de texto corrido.

## Shapes

Cantos quase retos: 2px nos quadros e capturas, 3px nas tags, 4px no botão principal. O único elemento redondo é o seletor de tema, uma pílula com botões circulares. Linhas de tinta de 3px dividem itens de lista; fios de 1px dividem pares dentro de uma lista de definição. A tag da próxima versão usa contorno tracejado vermelho, a única linha tracejada do sistema.

**The Sem Quadro no Quadro Rule.** Quadro não vai dentro de quadro. A única exceção é a tira "Como o dado anda" dentro do carro-chefe, que é a assinatura da página. Capturas dentro de quadros usam contorno simples de 2px.

## Components

### Buttons
Tinta chapada, peso de carimbo.
- **Shape:** cantos quase retos (4px), contorno de tinta de 3px.
- **Primary:** fundo vermelho, texto branco Geist 500, 48px de altura, 20px de respiro lateral, seta para baixo.
- **Hover / Focus:** o fundo escurece misturando 18% de preto; foco com contorno vermelho de 3px e 3px de afastamento.
- **Secundário:** link de texto em tinta com sublinhado de 2px na cor do fio, afastado 6px; no hover o sublinhado fica vermelho. Ícone de seta diagonal para links externos.

### Chips
- **Style (tag de stack):** Geist Mono 12 a 13px, contorno de tinta de 2px, cantos de 3px; na Stack o fundo é o quadro branco.
- **Tag de versão futura:** Geist Mono vermelho com contorno tracejado vermelho de 2px.

### Cards / Containers
- **Quadro:** contorno de tinta de 3px, fundo branco, cantos de 2px, sem sombra. Respiro interno de 24px no celular e 40 a 48px no desktop.
- **Quadro de fechamento (Contato):** fundo vermelho chapado, texto branco, retícula escura no canto inferior direito e legenda "Continua…" no canto superior esquerdo. É o único quadro colorido.

### Navigation
- **Cabeçalho:** nome em Anton à esquerda, menu em Geist 500 15px em cor apagada; no hover vira tinta com sublinhado vermelho de 2px. Seletor de tema à direita (automático, claro, escuro), pílula com contorno de 2px e a opção ativa em tinta chapada.

### Caixa de legenda
Assinatura da HQ. Caixa amarela com contorno de 2px, letreiro Permanent Marker em caixa alta. Fica presa ao canto do quadro, com as bordas que encostam no contorno removidas, e fala como narrador ("Enquanto isso, em…", "Continua…") ou numera as etapas do fluxo. Não nomeia seção.

### Fluxo "Como o dado anda"
Componente-assinatura do carro-chefe. Cada etapa é um pequeno quadro com o número numa legenda amarela no canto, título em Geist 600 e detalhe em 15px, ligado à próxima por uma seta vermelha grossa (horizontal no desktop, vertical no celular).

### Linha de projeto
Projetos secundários em linhas separadas por tinta de 3px: nome em Anton, metadados em rótulo mono, resumo à direita e um `<details>` "Ler estudo de caso" com "+" vermelho que gira 45° ao abrir.

### Changelog
Cada emprego é uma versão: número em Geist Mono à esquerda, período em rótulo, cargo em Anton à direita. A próxima versão leva a tag tracejada vermelha.

### Movimento
Transições só de cor. O único momento autoral é o nome do topo "entrando em registro": o deslocamento das chapas vai de 0.14em a 0.04em em 4 passos, 480ms. Nada aparece ao rolar; com `prefers-reduced-motion` a animação não roda e a rolagem suave é desligada.

## Do's and Don'ts

### Do:
- **Do** usar o vermelho em tudo que é clicável ou confirma algo, e o contorno de foco vermelho de 3px.
- **Do** separar itens de lista com linha de tinta de 3px e pares de definição com fio de 1px.
- **Do** prender a caixa de legenda no canto do quadro, como narrador.
- **Do** manter o texto corrido em Geist sobre fundo liso, com contraste AA nos dois temas.
- **Do** esconder o que ainda não existe (foto, capturas, estante, links no ar) em vez de mostrar "em breve".

### Don't:
- **Don't** usar nada da Marvel ou da Sony: nome de personagem, símbolo de aranha, logo ou imagem dos filmes.
- **Don't** usar sombra de elevação; o único `text-shadow` é o desalinhamento das chapas.
- **Don't** usar ciano ou magenta fora do desalinhamento dos títulos, nem amarelo fora das legendas (e da seleção de texto).
- **Don't** colocar retícula atrás de texto corrido.
- **Don't** colocar quadro dentro de quadro, fora a tira do fluxo do carro-chefe.
- **Don't** usar roxo/índigo, emoji como ícone, fundo bege ou gradiente decorativo.
- **Don't** colocar rótulo acima do título nem numerar seções (01/02).
- **Don't** animar elementos ao rolar.
