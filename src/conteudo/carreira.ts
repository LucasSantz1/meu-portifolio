// Stack, trajetória, formação, certificações e livros.

export const stackPontaAPonta = [
  {
    etapa: "Interface",
    descricao: "O que a pessoa vê e usa",
    itens: ["TypeScript", "JavaScript", "React", "Next.js", "Tailwind CSS", "HTML e CSS"],
  },
  {
    etapa: "Back-end e APIs",
    descricao: "Regras de negócio e integrações",
    itens: ["Python", "PHP", "Laravel", "Node.js", "Ruby", "APIs REST"],
  },
  {
    etapa: "Dados",
    descricao: "Onde a informação fica",
    itens: ["MySQL", "SQL", "Modelagem de dados", "Dados abertos (CSV)"],
  },
  {
    etapa: "Qualidade e entrega",
    descricao: "Testar, versionar e publicar",
    itens: ["Vitest", "Playwright", "Git e GitHub", "GitHub Actions", "pnpm", "Vercel"],
  },
];

// A trajetória fica no formato de CHANGELOG: cada etapa é uma versão.
export type Versao = {
  versao: string;
  periodo: string;
  cargo: string;
  empresa: string;
  resumo: string;
  proxima?: boolean;
};

export const trajetoria: Versao[] = [
  {
    versao: "v4.0.0",
    periodo: "próxima versão",
    cargo: "Desenvolvedor Full-Stack",
    empresa: "Procurando o time certo",
    resumo: "Pronto para levar o que construo nos meus projetos para um produto de verdade, em equipe.",
    proxima: true,
  },
  {
    versao: "v3.0.0",
    periodo: "out 2025 — hoje",
    cargo: "Analista de Help Desk 3",
    empresa: "ImobiBrasil",
    resumo: "Suporte avançado em infraestrutura e sistemas, incidentes de maior complexidade e manutenção de serviços críticos.",
  },
  {
    versao: "v2.0.0",
    periodo: "out 2024 — out 2025",
    cargo: "Analista de Help Desk 2",
    empresa: "ImobiBrasil",
    resumo: "Registro e configuração de domínios e DNS, contas de e-mail, desbloqueio em blacklists e ajustes via cPanel.",
  },
  {
    versao: "v1.0.0",
    periodo: "abr 2024 — out 2024",
    cargo: "Analista de Help Desk 1",
    empresa: "ImobiBrasil",
    resumo: "Atendimento direto a clientes, configuração de DNS, integração com portais de anúncio e arquivos XML.",
  },
  {
    versao: "v0.2.0",
    periodo: "nov 2023 — abr 2024",
    cargo: "Estagiário",
    empresa: "Sanna Distribuidora de Alimentos",
    resumo: "Rotinas em ERP, planilhas de controle interno e planejamento de rotas logísticas.",
  },
  {
    versao: "v0.1.0",
    periodo: "out 2021 — set 2022",
    cargo: "Jovem Aprendiz",
    empresa: "Grupo Energisa",
    resumo: "Sistemas ERP administrativos, relatórios para a gestão e dashboards em Excel e Power BI.",
  },
];

export const formacao = [
  {
    titulo: "Tecnologia em Análise e Desenvolvimento de Sistemas",
    instituicao: "Fatec Presidente Prudente",
    periodo: "2022 — 2025",
  },
];

// Pra adicionar: { titulo, emissor, ano, link } (emissor, ano e link são opcionais).
export const certificacoes: { titulo: string; emissor?: string; ano?: string; link?: string }[] = [
  { titulo: "Laravel: Construindo APIs" },
  { titulo: "Hábitos na liderança: boas práticas" },
];

// Estante: os livros que já li. Enquanto estiver vazia, o site mostra um aviso no lugar.
export const livros: { titulo: string; autor: string }[] = [];
