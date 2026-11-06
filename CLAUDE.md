# Contexto do projeto: meu-portifolio

Portfólio pessoal do Lucas Sant'Anna, desenvolvedor full-stack com foco em back-end. É um site de uma página feito com Next.js, TypeScript e Tailwind CSS, exportado como site estático (`output: "export"`) para publicar na Vercel.

Converse comigo sempre em português.

## Objetivo

Mostrar que eu domino front-end e back-end (regras de negócio, banco de dados e implantação) através dos **meus projetos** e de uma **descrição sobre mim**.

- O portfólio mostra os meus projetos pessoais. Não mostra chamados nem atendimentos da empresa onde trabalho.
- Cada projeto precisa de contexto, não só print: o problema que resolve, a solução, a arquitetura, as decisões de engenharia e a stack.
- Cada projeto deve ter link funcional: o app no ar (Vercel, Render, Railway...) e o repositório.

## Seções (nesta ordem)

O design é o pacote **"Teia de Sistemas"** em `design/teia-de-sistemas/`. Ele é a especificação completa: textos, medidas, animações e prévias.

0. **Abertura:** cortina preta em que o fio desce e a teia se tece no "LS". Aparece só na primeira visita da sessão.
1. **Topo (Hero):** legenda, nome em letreiro, balão de fala, botões (Currículo, GitHub, LinkedIn) e a teia 3D com a stack nos nós.
2. **Projetos:** janela de editor com uma aba por projeto, mostrando o README (Problema, Arquitetura, Decisões), os tópicos e o preview ilustrado.
3. **Stack:** `developer.ts` com a stack e um terminal com formação e certificados.
4. **Trajetória:** 5 quadros numerados. O atual fica em destaque.
5. **Fora do código:** o texto, as 4 polaroids e a estante, que só aparece quando `livros` tem itens.
6. **Contato:** `contato.exe`, que monta um `mailto:`, mais o e-mail e os links.

Por toda a página: o fio de progresso no topo, o fio da teia na lateral, que se desenha com a rolagem, e o botão de voltar ao topo. Há também a página 404 (`src/app/not-found.tsx`).

## Organização do código

```
src/
  app/
    layout.tsx        fontes (Bangers, Archivo, JetBrains Mono), metadados e o script que aplica tema/abertura antes de pintar
    page.tsx          monta as seções na ordem
    not-found.tsx     página 404
    globals.css       os 3 temas (tokens) e todo o CSS do design: HQ, teia 3D, abertura, rolagem
  conteudo/           TODO o texto do site, separado do layout
    perfil.ts         nome, chamada, e-mail, links, painel "Agora", idiomas, tecnologias da teia, "Fora do código"
    pagina.ts         legendas, títulos e textos fixos de cada parte, e os textos das ilustrações
    projetos.ts       lista de projetos (tipo Projeto), fonte da verdade dos textos dos projetos
    carreira.ts       stack (developer.ts), trajetória, formação, certificados e livros
  componentes/        uma seção por arquivo (Hero, Projetos, Stack, Trajetoria, Sobre, Contato...)
    Capitulo.tsx      cabeçalho de capítulo: teia presa ao fio, legenda e título
    teia.ts           geometria da teia (usada na abertura, no topo e na 404)
    mailto.ts         monta o link do contato (com teste em mailto.test.ts)
public/
  curriculo-lucas-santanna.pdf
```

- **Regra:** texto novo vai em `src/conteudo/`, nunca escrito direto nos componentes.
- Nomes de variáveis, componentes e textos em **português**.
- **Client components:** `Abertura`, `SeletorTema`, `HeroInterativo` (teia segue o mouse), `EditorProjetos` (abas), `ContatoExe`, `VoltarAoTopo` e `TransicaoTeia` (a teia que cobre a tela e a seção que desenrola ao navegar pelo menu). O resto é renderizado no build.
- **Testes:** `npm test`.

## Design (manter)

Siga o pacote `design/teia-de-sistemas/`, principalmente `docs/01-identidade-visual.md` e `tokens.css`. O conceito é uma HQ urbana em que uma teia liga tudo: front-end, back-end, banco e entrega.

- **Três temas** (`data-theme` no `<html>`):
  - **padrão:** vermelho, azul-noite e amarelo;
  - **claro:** rosa e ciano;
  - **escuro:** preto e branco.
  - Cores só pelos tokens.
- **Quadrinho:** contorno de tinta de 3 a 4px, sombras duras sem desfoque, retícula de pontos, legendas amarelas de narração, balões e letreiro com contorno.
- **Fontes:**
  - Bangers nos títulos e botões;
  - Archivo no texto;
  - JetBrains Mono só onde é código de verdade.
- **Movimento:** abertura, teia 3D, painéis que entram com a rolagem e o fio lateral. Tudo respeita `prefers-reduced-motion`.
- **Nada de personagem:** nada de nome, símbolo, uniforme ou máscara de herói. Teia, retícula e linguagem de HQ são genéricas e podem ser usadas.
- **Nada de dado inventado:** botão sem link (demo, repositório) não aparece, e itens pendentes (livros, fotos, música) ficam escondidos até existirem.
- **Acessibilidade:**
  - contraste 4.5:1;
  - foco visível;
  - alvos de 44px;
  - abas com `role="tab"`;
  - link "Pular para os projetos".

## Pendências

A lista completa está em `design/teia-de-sistemas/docs/07-pendencias.md`. As principais:

- **Fotos das polaroids:** colocar em `public/fotos/` e preencher `foto` em `sobre.polaroids` (`perfil.ts`). Hoje aparece um ícone no lugar.
- **Livros da estante:** preencher `livros` em `carreira.ts`. Enquanto estiver vazio, a estante não aparece.
- **Capturas dos projetos:** colocar em `public/projetos/` e preencher `imagem` em cada projeto. Hoje aparece a ilustração do preview.
- **Links de verificação dos certificados:** preencher `link` em `certificados` (`carreira.ts`).
- **Balão de música:** já está pronto e aparece sozinho quando existir `public/musica/sunflower.mp3` (nome e artista em `pagina.ts`). Antes de publicar, confira se você pode usar a música num site público.
- **Estudo de caso do Inspetor:** a página não foi construída, porque faltam a stack e o repositório.
- **Projetos:** os três atuais (Eficiência Energética, Monitor de Atendimentos, Inspetor de E-mails) são um ponto de partida. Vou criar projetos novos para o portfólio. O Monitor está sem link de repositório (repositório privado) e o Inspetor ainda está sem a stack.
- **Links no ar:** nenhum projeto tem link de produção ainda.
- **Currículo:** o PDF atual é o export do LinkedIn com o resumo antigo. Trocar pela versão atualizada.
- **Textos do "Sobre mim":** revisar no meu jeito de falar.

## Como trabalhar neste repositório

- Cada entrega (correção ou melhoria) vai numa **branch própria com pull request**, para eu revisar e fazer o merge. Nada de push direto na `main`.
- Antes de entregar: `npm run build` sem erros e conferir o visual no claro e no escuro, no computador e no celular.

## Como rodar

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # gera o site estático em out/
```
