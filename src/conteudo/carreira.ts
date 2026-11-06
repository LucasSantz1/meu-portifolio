// Stack, trajetória, formação, certificados e livros.

// Vira o objeto do `developer.ts` na seção Stack: cada chave é uma linha.
export const stack = [
  { chave: "backend", itens: ["Python", "PHP", "Laravel", "Node.js", "Ruby"] },
  { chave: "frontend", itens: ["TypeScript", "JavaScript", "React", "Next.js", "Tailwind CSS", "HTML", "CSS"] },
  { chave: "banco", itens: ["MySQL"] },
  { chave: "testes", itens: ["Vitest", "Playwright"] },
  { chave: "entrega", itens: ["Git", "GitHub Actions", "pnpm"] },
];

// Os 5 quadros da trajetória. `atual: true` é o quadro em destaque.
export const trajetoria = [
  { periodo: "2021–2022", titulo: "Jovem Aprendiz", texto: "Grupo Energisa. ERP, relatórios e dashboards em Excel e Power BI." },
  { periodo: "2022–2025", titulo: "Graduação em ADS", texto: "Fatec Presidente Prudente. Primeira versão do Sistema de Eficiência Energética." },
  { periodo: "2023–2024", titulo: "Estagiário", texto: "Sanna Distribuidora. ERP, pedidos e rotas logísticas." },
  { periodo: "2024–2025", titulo: "Help Desk 1 e 2", texto: "ImobiBrasil. Domínios, DNS, e-mail, cPanel e integrações com portais." },
  { periodo: "2025–hoje", titulo: "Analista de Help Desk 3", texto: "ImobiBrasil. Incidentes complexos, infraestrutura e serviços críticos.", atual: true },
];

export const formacao = "ADS, Fatec Presidente Prudente (2022–2025)";

// `link` é a página de verificação do certificado. Sem link, aparece só o nome.
export const certificados: { arquivo: string; link?: string }[] = [
  { arquivo: "laravel-construindo-apis" },
  { arquivo: "habitos-na-lideranca" },
];

// Estante: os livros que já li. Enquanto estiver vazia, a estante não aparece.
export const livros: { titulo: string; autor: string; frase?: string }[] = [];
