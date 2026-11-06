# Instruções para agente — construindo o portfólio "Teia de Sistemas"

Este pacote descreve o design aprovado do portfólio do Lucas Sant'Anna. Use-o como especificação ao construir o site no repositório `LucasSantz1/meu-portifolio`.

## Leia antes de codar

1. `README.md` — visão geral do pacote
2. `docs/01-identidade-visual.md` — regras de estilo e limites de direitos autorais (obrigatório)
3. `docs/02-estrutura-e-conteudo.md` — seções e textos exatos
4. `docs/03-animacoes-e-interacoes.md` — tempos e curvas das animações
5. `docs/04-componentes.md` — medidas dos componentes
6. `docs/06-implementacao.md` — stack, estrutura de pastas e como portar cada efeito
7. `docs/07-pendencias.md` — o que ainda não existe (não invente esses dados)
8. `src/conteudo/` do repositório — fonte da verdade para os textos dos projetos e do perfil

Referência visual: `previas/`. Referência de markup e CSS exatos: `design-fonte/*.dc.html` (formato do editor de design do Claude; converter conforme a tabela em `06-implementacao.md`).

## Regras

- Fidelidade ao design: cores só pelos tokens de `tokens.css`, contornos e sombras duras como especificado, fontes Bangers / Archivo / JetBrains Mono.
- Nunca usar nomes, símbolos ou elementos visuais de personagens (Homem-Aranha, Venom, Gwen etc.).
- Não inventar conteúdo: o que estiver como `[PENDÊNCIA]` fica como placeholder até o Lucas enviar.
- Toda animação precisa respeitar `prefers-reduced-motion`.
- Acessibilidade: contraste 4.5:1, foco visível, alvos de 44px, ARIA nas abas e no seletor de tema.
- Trabalhar em branches com pull request por entrega; não fazer push direto na `main`.
- Explique o código quando o Lucas pedir, com base nas decisões deste pacote.
