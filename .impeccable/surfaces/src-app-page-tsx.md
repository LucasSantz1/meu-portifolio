---
version: 1
slug: "src-app-page-tsx"
primary_target: "src/app/page.tsx"
related_targets: ["src/componentes"]
---

# Página inicial do portfólio

- **Modo:** Persuade.
- **Escopo:** página única (`src/app/page.tsx` e os componentes).
- **Público:** recrutador de tecnologia, num laptop de escritório durante o dia. Ele decide em cerca de 30 segundos.
- **Ação:** entender quem é o Lucas, ver uma prova real (o carro-chefe) e chegar ao contato, ao LinkedIn ou ao currículo.
- **Prova:** Sistema de Eficiência Energética (repositório público, pipeline ANEEL → GitHub Action → JSON → core TS → site).
- **Restrições:**
  - Todo texto fica em `src/conteudo/`.
  - Só Relogio e SeletorTema são client components.
  - Nada de "em breve": o que não existe não aparece.

## Direction contract

**THESIS:** O trabalho vem antes do discurso. O carro-chefe aparece como um diagrama do caminho do dado, logo abaixo de um topo curto e pessoal. A página recusa o arranjo padrão da categoria: nome gigante, foto vazia, muro de tecnologias e cards iguais.

**OWN-WORLD:**
- **Cores:** papel claro `#fafafa`, tinta `#171717`, texto `#4d4d4d`, fios de 1px.
- **Destaque:** um único verde-energia, só em links, estados e no traço do fluxo.
- **Tipografia:** Geist Sans com títulos em peso 500; Geist Mono só para dados (versões, datas, tags de stack).
- **Forma:** raio de 6px e nenhuma sombra.
- **Diagrama:** o fluxo de etapas numeradas, ligadas por um traço, é o componente-assinatura.

**STORY:** O recrutador entende "dev full-stack, de Presidente Prudente, que transforma problemas do dia a dia em software". Depois ele vê o caminho do dado no Eficiência Energética, passa os olhos pelos outros projetos em linhas, lê o changelog da carreira, conhece a pessoa (faixa "Agora", estante) e chega ao contato.

**FIRST VIEWPORT:**
- **Cabeçalho:** nome, menu (Projetos, Trajetória, Sobre, Contato) e seletor de tema.
- **Esquerda:** nome em h1 (~4.5rem), cargo logo abaixo como subtítulo e a chamada.
- **Ação primária:** "Ver projetos ↓" (botão tinta). GitHub, LinkedIn e Currículo vêm como links secundários.
- **Direita:** a faixa "Agora" (construindo / lendo / torcendo / disponível + hora local), como lista de definição.
- **Borda inferior:** o começo do painel do carro-chefe aparece na dobra.

**FORM:** "Projeto em destaque", grounded n.º 3 da rodada segura, escolhido pelo usuário. Seed: `seed:563ec7e2ed7a9360`.

**SIGNATURE:** O fluxo de arquitetura do carro-chefe. Cada etapa é numerada e ligada à seguinte por um traço verde; fica na horizontal no desktop e na vertical no celular. Os outros projetos abrem o estudo de caso num `<details>` ("Ler estudo de caso").

**MOTION:** Transições só de cor e a abertura do `<details>`. Há um único momento autoral, pedido pelo usuário ao fixar o clima de HQ: o nome do topo "entra em registro" (as chapas ciano/magenta se alinham quadro a quadro, `steps(4)`, 480ms). Nada aparece ao rolar. Respeita `prefers-reduced-motion`.

**VISUAL FIXADO PELO USUÁRIO:** HQ de rua no clima do Aranhaverso, na intensidade "equilibrado" e sem nada da Marvel/Sony.
- **Cores:** papel cinza-claro `#eeeff0`, quadros brancos com contorno de tinta de 3px.
- **Vermelho `#c8141b`:** a cor de ação.
- **Amarelo:** só nas caixas de legenda.
- **Ciano e magenta:** só no desalinhamento dos títulos.
- **Retícula Ben-Day:** nunca atrás de texto corrido.
- **Fontes:** Anton nos títulos e Permanent Marker nas legendas.
- **Topo:** dois quadros irmãos separados por calha.

**FINISH:** unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Decisões em aberto

- O que o Lucas está lendo, o time dele e a lista de livros da estante. Enquanto estiverem vazios, os campos ficam ocultos.
