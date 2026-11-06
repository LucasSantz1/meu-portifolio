# Contexto do projeto: meu-portifolio

Portfólio pessoal do Lucas Sant'Anna, desenvolvedor full-stack com foco em back-end. É um site de uma página feito com Next.js, TypeScript e Tailwind CSS, exportado como site estático (`output: "export"`) para publicar na Vercel.

Converse comigo sempre em português.

## Objetivo

Mostrar que eu domino front-end e back-end (regras de negócio, banco de dados e implantação) através dos **meus projetos** e de uma **descrição sobre mim**.

- O portfólio mostra os meus projetos pessoais. Não mostra chamados nem atendimentos da empresa onde trabalho.
- Cada projeto precisa de contexto, não só print: o problema que resolve, a solução, a arquitetura, as decisões de engenharia e a stack.
- Cada projeto deve ter link funcional: o app no ar (Vercel, Render, Railway...) e o repositório.

## Seções (nesta ordem)

1. **Topo (Hero):** dois quadros de HQ lado a lado.
   - **Esquerda:** nome, cargo, chamada, o botão "Ver projetos" e os links de GitHub, LinkedIn e Currículo, com a legenda "Enquanto isso, em Presidente Prudente, SP…".
   - **Direita:** a faixa **"Agora"** (construindo / lendo / torcendo / status / hora local), com a foto em cima quando existir.
2. **Projetos:** o carro-chefe (`destaque: true`) aparece grande, com o fluxo "Como o dado anda" em quadrinhos numerados, Problema, Solução, Decisões e Stack. Os outros entram em linhas compactas, com o estudo de caso recolhido em "Ler estudo de caso".
3. **Ferramentas (stack):** uma tabela curta por camada (Interface → Back-end e APIs → Dados → Qualidade e entrega).
4. **Changelog da carreira:** cada emprego é uma versão. A v4.0.0 é a "próxima versão" (Desenvolvedor Full-Stack).
5. **Sobre mim:** o texto, o "Fora do código" (futebol, família e namorada, fé, leitura) e a **Estante**, que só aparece quando `livros` tem itens.
6. **Formação:** graduação, cursos e certificações, idiomas.
7. **Contato:** o último quadro, vermelho com retícula, com o e-mail em destaque e os links.

## Organização do código

```
src/
  app/
    layout.tsx        fontes (Geist, Anton, Permanent Marker), metadados e o script que aplica o tema salvo antes de pintar
    page.tsx          monta as seções na ordem
    globals.css       tokens de cor (claro e escuro), utilitários (titulo-hq, titulo-hq-leve, legenda, quadro, reticula, rotulo)
  conteudo/           TODO o texto do site, separado do layout
    perfil.ts         nome, cargo, chamada, e-mail, links, foto, idiomas, faixa "Agora", texto "Sobre mim" e hobbies
    pagina.ts         títulos, legendas e chamadas de cada seção
    projetos.ts       lista de projetos (tipo Projeto; `destaque` e `fluxo` no carro-chefe)
    carreira.ts       stack de ponta a ponta, trajetória, formação, certificações e livros
  componentes/        uma seção por arquivo (Hero, Stack, Projetos, Sobre, Trajetoria, Contato...)
    Secao.tsx         moldura padrão das seções: título de capa de gibi e descrição
    SeletorTema.tsx   automático / claro / escuro (client component, salva no localStorage)
    Relogio.tsx       hora de Presidente Prudente (client component)
public/
  curriculo-lucas-santanna.pdf
```

- **Regra:** texto novo vai em `src/conteudo/`, nunca escrito direto nos componentes.
- Nomes de variáveis, componentes e textos em **português**.
- Só `SeletorTema` e `Relogio` são client components. O resto é renderizado no build.

## Design (manter)

HQ de rua no clima do *Aranhaverso*, na intensidade "equilibrado": base limpa e legível para o recrutador, com o clima de HQ forte no topo, nos títulos, nas legendas, na retícula e no fechamento. A estrutura é "projeto em destaque". O detalhe completo está em `DESIGN.md`, e o contrato da página em `.impeccable/surfaces/`.

- **Nada da Marvel ou da Sony:** nada de nome de personagem, símbolo de aranha, logo ou imagem dos filmes. Só a linguagem visual genérica de quadrinhos.
- **Cores:**
  - Fundo: papel cinza-claro `#eeeff0`, com quadros brancos e contorno de tinta `#141414` de 3px. No escuro: `#0e0e12`, com o contorno claro.
  - **Vermelho `#c8141b`** (`#ff5a4f` no escuro) é a cor de ação: links, botão principal, ✓, setas do fluxo e tag da próxima versão.
  - **Amarelo `#ffd60a`** só nas caixas de legenda.
  - **Ciano e magenta** só no desalinhamento de impressão dos títulos (`titulo-hq`).
- **Retícula (Ben-Day):** só como textura, nunca atrás de texto corrido.
- **Tipografia:**
  - Anton (caixa alta condensada) nos títulos.
  - Permanent Marker só nas legendas.
  - Geist Sans no texto.
  - Geist Mono só em dados (datas, versões, tags de stack, rótulos).
- **Forma:** quadros com contorno grosso, raio de 2 a 4px, sem sombras, e nada de quadro dentro de quadro. A única exceção é a tira do fluxo "Como o dado anda" dentro do carro-chefe, que é a assinatura da página.
- **Movimento:** transições só de cor. Há um único momento, o nome do topo que "entra em registro" (`steps(4)`). Nada aparece ao rolar, e `prefers-reduced-motion` é respeitado.
- **Evitar:**
  - roxo/índigo, emoji como ícone, fundo bege, gradientes decorativos;
  - rótulo acima do título, numeração de seção (01/02);
  - "em breve" à mostra: o que não existe não aparece.
- **Acessibilidade:** contraste AA nos dois temas, foco visível em vermelho, link "Pular para os projetos".

## Pendências

- **Foto:** colocar em `public/` e preencher `foto` em `perfil.ts`. Ela aparece no quadro "Agora".
- **Faixa "Agora":** preencher "Lendo" e "Torcendo" em `agora` (`perfil.ts`). Campo vazio não aparece.
- **Livros da estante:** preencher `livros` em `carreira.ts`. Enquanto estiver vazio, a Estante não aparece.
- **Capturas dos projetos:** colocar em `public/projetos/` e preencher `imagem` em cada projeto. Sem imagem, nada aparece.
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
