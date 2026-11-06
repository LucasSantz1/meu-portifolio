# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primário: recrutador ou RH de tecnologia, muitas vezes não técnico, filtrando candidatos a vagas de desenvolvedor full-stack ou back-end. Decide em cerca de 30 segundos se o Lucas segue no processo. Precisa entender na hora: quem é, o que faz, uma prova concreta e como entrar em contato.

Secundário (inferido, não confirmado como foco): o tech lead que lê depois, abre o repositório e avalia arquitetura e decisões.

## Product Purpose

Portfólio pessoal de uma página do Lucas Sant'Anna (23 anos, Presidente Prudente, SP), formado em ADS pela Fatec. O objetivo é conseguir uma vaga de Desenvolvedor Full-Stack com foco em back-end. Sucesso é o recrutador sair com a impressão "é dev, constrói coisas reais" e clicar em contato, LinkedIn ou currículo.

## Positioning

Vem de três anos em suporte técnico e infraestrutura (Help Desk 1 → 3 na ImobiBrasil), e é isso que o diferencia: vê de perto um problema que se repete e o transforma em software. A trajetória de suporte é assumida como diferencial, a origem dos projetos, e não algo a esconder.

## Operating Context

- Lido no computador e no celular, em geral a partir de um link no LinkedIn ou no currículo.
- Site estático (Next.js `output: "export"`) publicado na Vercel.
- Cada entrega vai numa branch com PR para revisão do Lucas.

## Capabilities and Constraints

- Todo o texto fica em `src/conteudo/` (perfil, projetos, carreira); os componentes não têm texto escrito direto.
- Código, nomes e textos em português.
- Só `SeletorTema` e `Relogio` são client components.
- Mostra projetos pessoais, nunca chamados ou atendimentos da empresa.
- Cada projeto precisa de contexto: problema, solução, arquitetura, decisões e stack, com link do app no ar e do repositório quando houver.

## Brand Commitments

- Nome: Lucas Sant'Anna. Cargo: Desenvolvedor Full-Stack.
- Trajetória contada como CHANGELOG, com cada emprego como uma versão e a v4.0.0 como "próxima versão". O Lucas gosta dessa ideia.
- Seção pessoal "Fora do código": futebol, família e namorada, fé (católico), leitura.
- Tom descontraído e direto, sem frases de efeito genéricas.

## Evidence on Hand

- **Carro-chefe:** Sistema de Eficiência Energética. Repositório público, pipeline diário de dados abertos da ANEEL numa GitHub Action, monorepo pnpm com regras em `packages/core`, testes com Vitest, Playwright e axe.
- **Monitor de Atendimentos:** extensão MV3, uso interno, repositório privado.
- **Inspetor de E-mails:** em desenvolvimento, ainda sem stack e sem repositório.
- Currículo em `public/curriculo-lucas-santanna.pdf`. É o export antigo do LinkedIn e vai ser trocado.
- **Ausentes, que não podem ser inventados:**
  - foto
  - capturas de tela dos projetos
  - links de produção
  - livros da estante
  - depoimentos
  - números de uso

## Product Principles

1. Prova antes de discurso: o recrutador vê trabalho real antes de ler uma lista de tecnologias.
2. Uma coisa em destaque: o carro-chefe recebe mais espaço que os outros projetos.
3. Do suporte ao software: a origem nos problemas do dia a dia é a história, contada com orgulho.
4. Nada de "em breve" na cara do visitante: o que não existe ainda não aparece.
5. Entendível por quem não é técnico; recompensador para quem é.

## Accessibility & Inclusion

Contraste AA nos dois temas (claro e escuro), foco visível, link "Pular para os projetos", respeito a `prefers-reduced-motion`, idioma pt-BR.
