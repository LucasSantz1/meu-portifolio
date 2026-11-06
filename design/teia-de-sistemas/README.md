# Portfólio "Teia de Sistemas" — pacote de referência

Tudo o que foi decidido no design do portfólio do Lucas Sant'Anna, para consultar depois e construir o site de verdade (repositório `LucasSantz1/meu-portifolio`).

O design final está no canvas "Portfólio — Teia de Sistemas", no Claude. Este pacote é a versão em arquivos dele.

## Como ler este pacote

| Arquivo | O que tem |
|---|---|
| `docs/01-identidade-visual.md` | Conceito, os três temas, tipografia, regras de estilo e limites de direitos autorais |
| `docs/02-estrutura-e-conteudo.md` | Cada seção da página inicial, na ordem, com todos os textos |
| `docs/03-animacoes-e-interacoes.md` | Abertura, teia 3D, rolagem, fio da teia, voltar ao topo, player e temas, com tempos e curvas |
| `docs/04-componentes.md` | Peças reutilizáveis (botões, legendas, janela de editor, terminal, polaroid…) com as medidas |
| `docs/05-paginas-extras.md` | Estudo de caso do Inspetor de E-mails e página 404 |
| `docs/06-implementacao.md` | Sugestão de stack, estrutura de pastas, como portar cada efeito e checklist de qualidade |
| `docs/07-pendencias.md` | O que ainda falta enviar ou preencher (links, fotos, livros, música…) |
| `tokens.css` | As cores dos três temas como variáveis CSS, prontas para copiar |
| `INSTRUCOES-PARA-AGENTE.md` | Instruções curtas para um agente de código (Claude Code) construir o site a partir deste pacote |
| `design-fonte/` | O código-fonte das telas do canvas (`.dc.html`) |
| `previas/` | Imagens e animações de como cada parte ficou |

## Resumo em uma frase

Uma página de HQ urbana em que uma teia conecta tudo: a abertura puxa uma tela preta com o "LS" preso na teia, o hero mostra a stack numa teia 3D, e o resto da página desce pendurado num fio que se desenha com a rolagem, misturando quadrinho com editor de código e terminal.

## Relação com o código atual do repositório

O repositório `meu-portifolio` já tem uma primeira versão do site (Next.js, design minimalista no estilo Geist, com destaque verde). Este pacote descreve a **nova direção visual** ("Teia de Sistemas") que substitui aquele visual.

- **O conteúdo dos projetos em `src/conteudo/projetos.ts` é a fonte da verdade.** Ele está mais atualizado que os textos deste pacote. Em especial, o Sistema de Eficiência Energética foi refeito em TypeScript, Next.js e monorepo com dados da ANEEL, e não usa mais PHP e MySQL como na versão do TCC descrita no design.
- O mesmo vale para `perfil.ts` e `carreira.ts`: reaproveite os textos e a regra de manter o conteúdo separado do layout.
- O `CLAUDE.md` da raiz ainda descreve o design antigo (Geist, sem sombras, sem animações ao rolar). Ao adotar este pacote, atualize a seção "Design" dele.
- As instruções para um agente de código construir a nova versão estão em `INSTRUCOES-PARA-AGENTE.md`.

## Sobre os arquivos `.dc.html`

São o formato do editor de design do Claude, não HTML puro: usam marcações como `{{ variavel }}`, `<sc-if>`, `<helmet>` e um bloco `class Component extends DCLogic`. Servem como referência exata de markup, CSS e lógica, mas precisam ser convertidos para componentes (veja `docs/06-implementacao.md`).
