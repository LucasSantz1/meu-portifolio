# Contexto do projeto: meu-portifolio

Portfólio pessoal do Lucas Sant'Anna, desenvolvedor full-stack com foco em back-end. É um site de uma página feito com Next.js, TypeScript e Tailwind CSS, exportado como site estático (`output: "export"`) para publicar na Vercel.

Converse comigo sempre em português.

## Objetivo

Mostrar que eu domino front-end e back-end (regras de negócio, banco de dados e implantação) através dos **meus projetos** e de uma **descrição sobre mim**.

- O portfólio mostra os meus projetos pessoais. Não mostra chamados nem atendimentos da empresa onde trabalho.
- Cada projeto precisa de contexto, não só print: o problema que resolve, a solução, a arquitetura, as decisões de engenharia e a stack.
- Cada projeto deve ter link funcional: o app no ar (Vercel, Render, Railway...) e o repositório.

## Seções (nesta ordem)

1. **Topo (Hero):** nome, cargo, uma frase de apresentação e botões para GitHub, LinkedIn e Currículo (PDF). Embaixo, uma faixa com disponibilidade, cidade, hora local e idiomas.
2. **01 Stack:** quatro colunas de ponta a ponta: Interface → Back-end e APIs → Dados → Qualidade e entrega.
3. **02 Projetos:** metadados fixos à esquerda (tipo, status, período, links) e, à direita, a captura e o estudo de caso (Problema, Solução, Arquitetura, Decisões, Stack).
4. **03 Sobre mim:** texto descontraído, os hobbies ("Fora do código": futebol, família e namorada, fé, leitura) e a "Estante" com os livros que já li.
5. **04 Trajetória:** em formato de CHANGELOG, com cada emprego como uma versão. A v4.0.0 é a "próxima versão" (Desenvolvedor Full-Stack).
6. **05 Formação:** formação, cursos e certificações, idiomas.
7. **06 Contato:** faixa invertida com o e-mail em destaque e os links.

## Organização do código

```
src/
  app/
    layout.tsx        fontes Geist, metadados e o script que aplica o tema salvo antes de pintar
    page.tsx          monta as seções na ordem
    globals.css       tokens de cor (claro e escuro), utilitários (rotulo, titulo-display, moldura, cruz, grade-fundo)
  conteudo/           TODO o texto do site, separado do layout
    perfil.ts         nome, cargo, chamada, e-mail, links, foto, idiomas, texto "Sobre mim" e hobbies
    projetos.ts       lista de projetos (tipo Projeto)
    carreira.ts       stack de ponta a ponta, trajetória, formação, certificações e livros
  componentes/        uma seção por arquivo (Hero, Stack, Projetos, Sobre, Trajetoria, Contato...)
    Secao.tsx         moldura padrão das seções: linha de cima, cruzinhas e cabeçalho "NN / rótulo"
    SeletorTema.tsx   automático / claro / escuro (client component, salva no localStorage)
    Relogio.tsx       hora de Presidente Prudente (client component)
public/
  curriculo-lucas-santanna.pdf
```

- **Regra:** texto novo vai em `src/conteudo/`, nunca escrito direto nos componentes.
- Nomes de variáveis, componentes e textos em **português**.
- Só `SeletorTema` e `Relogio` são client components. O resto é renderizado no build.

## Design (manter)

A base é o sistema de design da Vercel (Geist), com detalhes próprios. Não "suavizar" para um visual genérico.

- **Fundo claro de papel** (`#fafafa`), tinta quase preta (`#171717`), texto `#4d4d4d`, linhas finas (`#ebebeb` / `#dedede`). O modo escuro segue o sistema ou o seletor.
- **Uma única cor de destaque:** o verde-energia do meu projeto de Eficiência Energética (`#0a7356` no claro, `#3dbb8c` no escuro). Ele aparece **só** em links, no ponto de status, nos ✓ das decisões e na tag da próxima versão. Nunca como fundo de seção ou decoração.
- **Tipografia:** Geist Sans para tudo, com títulos em peso 500 e espaçamento apertado. Geist Mono **só** em rótulos e metadados (utilitário `rotulo`: 12px, maiúsculas, espaçado), versões e tags de stack.
- **Forma:** raio de 6px (4px nas tags), sem sombras. A separação é feita com linhas finas e espaço.
- **Moldura de planta técnica:** linhas verticais nas laterais do conteúdo e cruzinhas (+) onde cada seção começa. A grade de fundo aparece só no topo, bem sutil.
- **Faixa invertida** só no Contato, como fechamento.
- **Evitar:** roxo/índigo, emoji como ícone, cards em tudo, faixa colorida na lateral de card, gradientes, animações de pulsar ou de aparecer ao rolar, palavra destacada em outra fonte ou cor dentro do título.
- **Acessibilidade:** contraste AA nos dois temas, foco visível em verde, link "Pular para os projetos", respeitar `prefers-reduced-motion`.

Referências usadas: Vercel/Geist (base), Linear (capturas em moldura fina), Raycast e os portfólios anoopsonkriya.dev e abhishek-kumar-t.vercel.app (carreira como changelog). As referências servem de inspiração. O site precisa continuar único e com a minha cara.

## Pendências

- **Foto:** colocar em `public/` e preencher `foto` em `perfil.ts`. Hoje aparece um espaço com "LS".
- **Livros da estante:** preencher `livros` em `carreira.ts`. Hoje aparece um aviso no lugar.
- **Capturas dos projetos:** colocar em `public/projetos/` e preencher `imagem` em cada projeto. Hoje aparece "Captura em breve".
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
