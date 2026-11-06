# 02 — Estrutura e conteúdo da página inicial

Ordem de cima para baixo. Textos entre colchetes `[ASSIM]` são pendências (veja `07-pendencias.md`).

> **Atenção:** para os textos dos projetos (problema, solução, arquitetura, decisões, stack e links), use `src/conteudo/projetos.ts` do repositório, que está mais atualizado. Os textos abaixo mostram **onde** cada informação entra no design. O Sistema de Eficiência Energética, por exemplo, hoje é TypeScript + Next.js com dados da ANEEL, não PHP + MySQL.

## 0. Abertura (tela de carregamento)

Tela preta com retícula, "LS" num disco no centro e o texto **"Tecendo o site…"**. Um fio desce do topo, a teia se tece no "LS" e puxa a tela para cima. Botão **"Pular abertura"** no canto inferior direito. Detalhes em `03-animacoes-e-interacoes.md`.

## 1. Cabeçalho

- Esquerda: disco "LS" + **Lucas Sant'Anna** (link para o topo).
- Menu: **Projetos · Stack · Trajetória · Sobre mim · Contato** (âncoras com rolagem suave).
- Seletor de tema com 3 botões de amostra de cor: **Padrão**, **Claro**, **Escuro**.

## 2. Hero

- Legenda: **"Enquanto isso, em Presidente Prudente…"**
- Nome (letreiro): **Lucas Sant'Anna**
- Balão de fala: **"Desenvolvedor full-stack com foco em back-end. Construo APIs, regras de negócio e bancos de dados que aguentam o uso real, e interfaces que não atrapalham quem usa."**
- Botões: **Baixar currículo (PDF)** → `[LINK DO CURRÍCULO PDF]` · **GitHub** → github.com/LucasSantz1 · **LinkedIn** → linkedin.com/in/lucas-santanna23
- Teia 3D à direita com 12 tecnologias nos nós: PHP, Laravel, Python, Ruby, Node.js, MySQL, React, Next.js, JavaScript, TypeScript, Tailwind, GitHub Actions; "LS" no centro.

## 3. Fio da teia (a partir de Projetos)

Um fio vertical na lateral esquerda que se desenha conforme a rolagem, com uma pequena teia redonda em cada título de capítulo. Cada capítulo abre com uma **legenda de narração** + **título grande**.

## 4. Capítulo "Projetos"

Legenda: **"Enquanto isso, no editor…"** · Título: **Projetos**

Uma janela de editor de código:
- Barra superior: `~/lucas/projetos/<projeto>/README.md` · "3 projetos"
- Abas: `inspetor-emails` · `eficiencia-energetica` · `monitor-tickets`
- Lateral "Explorador" com a árvore de pastas (clicar troca o projeto) e o painel **"Agora"**: *"Analista de Help Desk 3 na ImobiBrasil, construindo o Inspetor de E-mails nas horas livres."*
- Conteúdo como README (`#` título, `## Problema`, `## Arquitetura`, `## Decisões`), tópicos, botões e um `preview.png` ilustrado ao lado.
- Barra de status: `⎇ main` · `README.md` · stack do projeto.

### Inspetor de E-mails
- Resumo: *Cliente de e-mail web que aponta golpes e phishing antes de alguém clicar. Código aberto, para rodar no servidor da própria empresa.*
- Problema: *Golpes chegam pela caixa de entrada de imobiliárias todo dia e se parecem com e-mails legítimos de clientes e portais.*
- Arquitetura: *Webmail auto-hospedado que analisa cada mensagem recebida. Stack: [STACK DO PROJETO].*
- Decisões: *Login próprio cadastrado pelo admin, com 2FA opcional. Configurações num menu só. Segurança pensada para LGPD e normas ISO.*
- Tópicos: código-aberto, auto-hospedado, 2fa, lgpd
- Botões: **Ver demo** `[LINK DA DEMO]` · **Repositório** github.com/LucasSantz1/inspetor-emails · link **"Ler estudo de caso"** (página extra)
- Preview: caixa de entrada ilustrada com 4 mensagens; a de `suporte@banco-atualiza.net` ("Atualize seus dados bancários em até 24 horas") marcada **"Possível golpe"**. *É ilustração — trocar pelo print real.*

### Sistema de Eficiência Energética
- Resumo: *Calculadora gratuita de consumo de energia para famílias de baixa renda: mostra quanto cada aparelho pesa na conta e como gastar menos.*
- Problema: *Muita família não sabe quais aparelhos pesam na conta de luz, e por isso não sabe por onde começar a economizar.*
- Arquitetura: *PHP e MySQL no back-end (usuários, cômodos, aparelhos e consumo). Front em HTML, CSS e JavaScript, gráficos com Chart.js.*
- Decisões: *Energia = potência × tempo por aparelho, somada por casa; custo = energia × tarifa. O aparelho que mais gasta aparece destacado no gráfico.*
- Tópicos: gratuito, php, mysql, chart.js · Stack na barra: PHP, MySQL, Chart.js
- Botões: **Ver demo** `[LINK DA DEMO]` · **Repositório** github.com/LucasSantz1/eficiencia-energetica
- Preview: "Geladeira 75 W × 24 h = 1,8 kWh/dia", gráfico de barras com a maior destacada e "54 kWh no mês, cerca de R$ 35,10 só na geladeira" (números do artigo, tarifa R$ 0,65/kWh).
- **Não mencionar a Fatec** nesta parte do projeto (pedido do Lucas). A Fatec aparece só na trajetória e na formação.

### Monitor de Atendimentos
- Resumo: *Extensão para Chrome e Edge que avisa quando entra um atendimento novo na fila de suporte, sem ninguém precisar ficar atualizando a página.*
- Problema: *Atendimento novo ficava esperando até alguém atualizar o painel. Quem espera no suporte sente cada minuto.*
- Arquitetura: *Extensão de navegador que acompanha a fila de atendimentos pendentes enquanto o painel está aberto.*
- Decisões: *Aviso com som suave e notificação do sistema: chama a atenção sem assustar quem está no meio de outra tarefa.*
- Tópicos: extensão, chrome, edge · Botão: **Repositório** github.com/LucasSantz1/monitor-tickets
- Preview: painel de suporte esquemático com o aviso amarelo "Novo atendimento na fila — Som suave + notificação do sistema".

## 5. Capítulo "Stack de ponta a ponta"

Legenda: **"Por trás da tela…"** · Título: **Stack de ponta a ponta**

Janela `developer.ts` com o objeto (cores de sintaxe por tema; passar o mouse numa string realça):

```ts
// quem escreve este site
const lucas = {
  cargo: "Desenvolvedor Full-Stack",
  foco: "back-end",
  backend: ["Python", "PHP", "Laravel", "Node.js", "Ruby"],
  frontend: ["TypeScript", "JavaScript", "React", "Next.js", "Tailwind CSS", "HTML", "CSS"],
  banco: ["MySQL"],
  testes: ["Vitest", "Playwright"],
  entrega: ["Git", "GitHub Actions", "pnpm"],
  idiomas: ["português", "inglês", "espanhol"],
};

export default lucas;
```

Por cima, inclinado e deslocado, um terminal `bash ~/lucas`:

```
$ whoami
lucas-santanna: desenvolvedor full-stack, foco em back-end

$ curl -X POST /api/aparelhos -d "nome=geladeira&watts=75&horas=24"
{ "kwh_dia": 1.8, "kwh_mes": 54, "custo_mes": "R$ 35,10" }

$ cat formacao.txt
ADS, Fatec Presidente Prudente (2022–2025)

$ ls certificados/
laravel-construindo-apis      verificar   → [LINK DE VERIFICAÇÃO]
habitos-na-lideranca          verificar   → [LINK DE VERIFICAÇÃO]

$ ▌ (cursor piscando)
```

Nota manuscrita com seta: **"A conta que o meu sistema de energia faz"**.

## 6. Capítulo "Trajetória"

Legenda: **"Como cheguei até aqui…"** · Título: **Trajetória** — 5 quadros numerados (o Lucas gostou dessa parte; manter):

1. **2021–2022 · Jovem Aprendiz** — Grupo Energisa. ERP, relatórios e dashboards em Excel e Power BI.
2. **2022–2025 · Graduação em ADS** — Fatec Presidente Prudente. Primeira versão do Sistema de Eficiência Energética.
3. **2023–2024 · Estagiário** — Sanna Distribuidora. ERP, pedidos e rotas logísticas.
4. **2024–2025 · Help Desk 1 e 2** — ImobiBrasil. Domínios, DNS, e-mail, cPanel e integrações com portais.
5. **2025–hoje · Analista de Help Desk 3** — ImobiBrasil. Incidentes complexos, infraestrutura e serviços críticos. *(quadro em destaque)*

## 7. Capítulo "Fora do código"

Legenda: **"Fora do expediente…"** · Título: **Fora do código** (tudo entra voando de fora da tela)

- Texto: *"Tenho 23 anos, moro em Presidente Prudente e falo inglês e espanhol. Quando desligo o computador, é aqui que eu estou:"*
- Álbum com 4 polaroids presas com fita, cada uma com ícone até chegar a foto real `[FOTO]`:
  - **Jogando bola com os amigos**
  - **Com a família e a namorada**
  - **Na igreja**
  - **Lendo um livro**
- **Na estante:** 4 lombadas `[LIVRO 1–4]` sobre uma prateleira. *"Cada lombada abre o título, o autor e uma frase sobre o que ficou do livro."*

## 8. Capítulo "Contato"

Legenda: **"E agora…"** · Título (letreiro): **Bora construir algo?**

- Janela `contato.exe` estilo terminal com campos **> nome**, **> e-mail**, **> mensagem** e o botão **"Abrir no meu e-mail"**, que abre o app de e-mail do visitante com assunto *"Contato pelo portfólio - <nome>"* e a mensagem pronta (via `mailto:`). Status no topo: "aguardando" / "pronto".
- Ao lado: *"Estou aberto a vagas de desenvolvedor full-stack ou back-end. Pode me chamar direto também:"* + **lucas.santannaa12@gmail.com**, **GitHub**, **LinkedIn**.

## 9. Rodapé

**Lucas Sant'Anna, 2026** · `feito com teia e código`

## Elementos fixos na tela

- **Fio de progresso** no topo (4px, cor de ação) que cresce com a rolagem.
- **Balão de música** no canto inferior esquerdo: "Tocando agora", `[Nome da música]`, `[Artista]`.
- **Botão voltar ao topo** no canto inferior direito (aparece depois do hero).
