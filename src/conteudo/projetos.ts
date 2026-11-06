// Projetos do portfólio. Pra adicionar um projeto novo, é só copiar um bloco e preencher.
// Campos opcionais: producao (link do site no ar), repositorio, imagem (arquivo em public/).

export type Projeto = {
  slug: string;
  nome: string;
  tipo: string;
  ano: string;
  status: "no ar" | "em desenvolvimento" | "uso interno";
  resumo: string;
  problema: string;
  solucao: string;
  arquitetura: string[];
  decisoes: string[];
  stack: string[];
  producao?: string;
  repositorio?: string;
  imagem?: string;
  legendaImagem: string;
  // Projeto carro-chefe: aparece grande, com o fluxo da arquitetura em quadrinhos.
  destaque?: boolean;
  fluxo?: { titulo: string; detalhe: string }[];
};

export const projetos: Projeto[] = [
  {
    slug: "eficiencia-energetica",
    nome: "Sistema de Eficiência Energética",
    tipo: "Aplicação web · PWA",
    ano: "2024 — hoje",
    status: "em desenvolvimento",
    resumo: "Mostra quanto cada aparelho da casa custa na conta de luz e quanto dá pra economizar.",
    problema:
      "Famílias que mais precisam economizar não sabem quais aparelhos pesam na conta, e as calculadoras que existem usam uma tarifa genérica que não bate com a conta real.",
    solucao:
      "Site gratuito e sem cadastro: a pessoa monta a casa cômodo por cômodo, o sistema calcula o consumo com a tarifa da distribuidora dela e a bandeira do mês, e cada dica de economia mostra o valor economizado em reais.",
    arquitetura: [
      "Monorepo com pnpm: regras de negócio em TypeScript puro (packages/core), separadas do site para serem reaproveitadas no futuro app de celular.",
      "Rotina que baixa os dados abertos da ANEEL (tarifas, bandeiras, distribuidoras por cidade) e gera arquivos estáticos, rodando todo dia numa GitHub Action.",
      "Site em Next.js e React, organizado em camadas (rotas, telas, componentes, casos de uso e dados) com um script que confere essa organização no CI.",
    ],
    decisoes: [
      "Dados gerados no CI em vez de uma API em tempo real: custo zero de servidor e páginas rápidas mesmo em internet lenta.",
      "Acessibilidade desde o início: fonte feita para baixa visão e testes automáticos com axe e Playwright.",
      "Cálculos cobertos por testes com Vitest, incluindo o exemplo do artigo original.",
    ],
    stack: ["TypeScript", "Next.js", "React", "Tailwind CSS", "Zustand", "Vitest", "Playwright", "GitHub Actions", "pnpm"],
    repositorio: "https://github.com/LucasSantz1/eficiencia-energetica",
    legendaImagem: "Captura da tela de resultado no celular",
    destaque: true,
    fluxo: [
      { titulo: "Dados abertos da ANEEL", detalhe: "Tarifas, bandeiras e distribuidoras por cidade." },
      { titulo: "GitHub Action diária", detalhe: "Baixa os dados todo dia e gera arquivos estáticos." },
      { titulo: "Regras em TypeScript", detalhe: "packages/core: cálculos puros, testados com Vitest." },
      { titulo: "Site Next.js (PWA)", detalhe: "Camadas conferidas no CI, rápido mesmo em internet lenta." },
      { titulo: "A conta da família", detalhe: "Consumo por aparelho com a tarifa real e a economia em reais." },
    ],
  },
  {
    slug: "monitor-atendimentos",
    nome: "Monitor de Atendimentos",
    tipo: "Extensão Chrome / Edge",
    ano: "2026",
    status: "uso interno",
    resumo: "Avisa com um som suave quando chega atendimento novo no painel de suporte.",
    problema:
      "Para não deixar ninguém esperando, era preciso ficar recarregando o painel de atendimentos o tempo todo, o que tira o foco e ainda atrasa a primeira resposta.",
    solucao:
      "Extensão que confere o painel em segundo plano a cada 60 segundos (configurável) e avisa com som e notificação quando algum número sobe, com o total no ícone nas cores de normal, atenção e crítico.",
    arquitetura: [
      "Manifest V3 com service worker e chrome.alarms, em camadas: domínio (regras puras, testáveis no Node), dados, serviço e interface.",
      "Leitura por fetch com a sessão do navegador e um plano B que lê a aba aberta pelo chrome.scripting quando a página é montada por JavaScript.",
      "Som tocado num documento offscreen com Web Audio, e o arquivo de som do usuário guardado no IndexedDB.",
    ],
    decisoes: [
      "Sem build e sem dependências: JavaScript puro, simples de manter e de auditar.",
      "Guarda os cards desligados em vez dos ligados, assim um card novo já entra monitorado.",
      "Upload de som seguro: limite de 10 MB, checagem real do tipo de áudio e conferência de novo antes de tocar.",
    ],
    stack: ["JavaScript", "Chrome Extensions (MV3)", "Web Audio API", "IndexedDB", "HTML", "CSS"],
    legendaImagem: "Captura do popup com os cards monitorados",
  },
  {
    slug: "inspetor-de-emails",
    nome: "Inspetor de E-mails",
    tipo: "Aplicação web · open source",
    ano: "2026",
    status: "em desenvolvimento",
    resumo: "Cliente de e-mail web que identifica phishing e golpes antes de alguém clicar.",
    problema:
      "Golpes por e-mail chegam todo dia em empresas que lidam com clientes, e a equipe nem sempre consegue diferenciar uma mensagem legítima de uma fraude.",
    solucao:
      "Webmail que conecta as contas da equipe, lê e responde as mensagens e analisa cada uma em busca de sinais de phishing e spam, mostrando o motivo do alerta de forma clara.",
    arquitetura: [
      "Conexão com várias contas por IMAP e SMTP: receber, analisar, responder e agir no servidor.",
      "Acesso simples como um webmail: o administrador cadastra cada pessoa, com verificação em duas etapas opcional.",
    ],
    decisoes: [
      "Sempre open source e pensado para rodar no próprio servidor da empresa.",
      "Segurança e privacidade alinhadas às boas práticas ISO e à LGPD.",
    ],
    stack: [],
    legendaImagem: "Captura da caixa de entrada com um alerta de phishing",
  },
];
