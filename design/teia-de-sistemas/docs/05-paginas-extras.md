# 05 — Páginas extras

## Estudo de caso — Inspetor de E-mails

Aberto pelo link **"Ler estudo de caso"** na aba do Inspetor. Fonte: `design-fonte/estudo-de-caso.dc.html`. Prévia: `previas/estudo-de-caso.png`. Hoje usa só o tema padrão; ao implementar, reaproveitar os tokens para os três temas.

Estrutura:

1. **Navegação:** "← Voltar ao portfólio" e o caminho `~/lucas/projetos/inspetor-emails/`.
2. **Topo (azul-noite com retícula):** legenda "Estudo de caso", letreiro **Inspetor de E-mails**, resumo, botões Ver demo e Repositório. Ao lado, uma ficha em terminal:
   - papel: autor, do zero
   - status: em desenvolvimento, sempre aberto
   - licença: código aberto
   - stack: [STACK DO PROJETO]
   - para: imobiliárias e outros negócios que usam CRM
3. **"O problema…" — Golpe com cara de cliente:** imobiliárias recebem e-mails de clientes, portais e bancos o dia todo; no meio chegam golpes que imitam essas mensagens. A ideia é o alerta aparecer na própria caixa de entrada, antes do clique. Ao lado, a caixa de entrada ilustrada.
4. **"Como funciona…" — Do servidor ao alerta:** 3 quadros numerados: *A mensagem chega* (roda no servidor da empresa, como um webmail) → *É analisada* (verificação de golpe e phishing antes de mostrar) → *Vem com aviso* (o que parece golpe aparece marcado).
5. **"Decisões de engenharia…" — O histórico das escolhas:** cada decisão como um commit num fio vertical com nós vermelhos:
   - `feat(auth):` login próprio, com usuário e senha — o admin cadastra cada pessoa, sem link de convite.
   - `feat(auth):` 2FA opcional.
   - `refactor(config):` tudo num menu só (menu lateral com seções).
   - `docs(seguranca):` LGPD e normas ISO.
   - `chore:` código aberto, para sempre — nunca tratado como pronto.
   - `chore(git):` uma branch e um pull request por entrega.
6. **"Continua…"** (faixa amarela, `git checkout -b proximos-passos`): rodar no servidor próprio (Vercel só como opção) e abrir para outros segmentos que usam CRM.
7. **Rodapé:** voltar ao portfólio + "Ver o código no GitHub".

Animação: blocos sobem com fade conforme a rolagem (`view()`, `entry 0% → 70%`).

**Sugestão:** criar uma página igual para o Sistema de Eficiência Energética e para o Monitor de Atendimentos, seguindo a mesma estrutura.

## Página 404

Fonte: `design-fonte/404.dc.html`. Prévia: `previas/404.png`.

- Fundo azul-noite com retícula, tela inteira.
- Legenda "Ops…", **404** gigante em letreiro (260px, sombra vermelha, entra com `slam`), "Essa página escapou da teia."
- Terminal: `$ curl /essa-pagina` → `404 Não encontrado`.
- Botões: **Voltar ao início** e **Ver projetos**.
- À direita, a teia do hero **rasgada** (fios e anéis faltando) com um fio solto e um nó vermelho **balançando** (3,4 s, ±6°).
