// Dados pessoais e links. É aqui que eu troco e-mail, links e o texto de apresentação.

export const perfil = {
  nome: "Lucas Sant'Anna",
  iniciais: "LS",
  cargo: "Desenvolvedor Full-Stack",
  foco: "back-end",
  cidade: "Presidente Prudente",
  chamada:
    "Desenvolvedor full-stack com foco em back-end. Construo APIs, regras de negócio e bancos de dados que aguentam o uso real, e interfaces que não atrapalham quem usa.",
  email: "lucas.santannaa12@gmail.com",
  links: {
    github: "https://github.com/LucasSantz1",
    linkedin: "https://www.linkedin.com/in/lucas-santanna23",
    curriculo: "/curriculo-lucas-santanna.pdf",
  },
  // Painel "Agora" na lateral do editor de projetos.
  agora: "Analista de Help Desk 3 na ImobiBrasil, construindo o Inspetor de E-mails nas horas livres.",
  idiomas: ["português", "inglês", "espanhol"],
  // As 12 tecnologias presas nos nós da teia 3D do topo (a ordem segue a posição dos nós).
  teia: ["PHP", "Laravel", "Python", "Node.js", "MySQL", "React", "Next.js", "TypeScript", "Tailwind", "GitHub Actions", "Ruby", "JavaScript"],
};

// "Fora do código": o texto e as polaroids. Quando tiver a foto, coloque em public/fotos/ e preencha `foto`.
// `verso`: a frase escrita atrás da polaroid, que aparece quando ela vira.
export const sobre = {
  texto: "Tenho 23 anos, moro em Presidente Prudente e falo inglês e espanhol. Quando desligo o computador, é aqui que eu estou:",
  polaroids: [
    { legenda: "Jogando bola com os amigos", verso: "Jogar bola é o meu jeito de desligar a cabeça.", icone: "bola", foto: null as string | null },
    { legenda: "Com a família e a namorada", verso: "O tempo com a família e com a namorada vem em primeiro lugar.", icone: "coracao", foto: null as string | null },
    { legenda: "Na igreja", verso: "Sou católico e participo da vida da minha igreja.", icone: "igreja", foto: null as string | null },
    { legenda: "Lendo um livro", verso: "Sempre tem um livro em andamento.", icone: "livro", foto: null as string | null },
  ] as const,
};
