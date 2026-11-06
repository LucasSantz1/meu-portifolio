// Dados pessoais e links. É aqui que eu troco e-mail, links e o texto de apresentação.

export const perfil = {
  nome: "Lucas Sant'Anna",
  cargo: "Desenvolvedor Full-Stack",
  cidade: "Presidente Prudente, SP",
  fusoHorario: "America/Sao_Paulo",
  disponivel: true,
  chamada:
    "Construo aplicações web de ponta a ponta, da modelagem do banco à interface, com foco em back-end, código organizado e testes.",
  email: "lucas.santannaa12@gmail.com",
  links: {
    github: "https://github.com/LucasSantz1",
    linkedin: "https://www.linkedin.com/in/lucas-santanna23",
    curriculo: "/curriculo-lucas-santanna.pdf",
  },
  // Quando tiver a foto, coloque o arquivo em public/ (ex.: public/lucas.jpg) e escreva o caminho aqui.
  foto: null as string | null,
  idiomas: [
    { idioma: "Português", nivel: "Nativo" },
    { idioma: "Inglês", nivel: "Profissional" },
    { idioma: "Espanhol", nivel: "Profissional" },
  ],
};

export const sobre = {
  paragrafos: [
    "Sou o Lucas, tenho 23 anos e moro em Presidente Prudente, no interior de São Paulo. Me formei em Análise e Desenvolvimento de Sistemas pela Fatec e trabalho com tecnologia desde 2021.",
    "Hoje atuo com suporte técnico em infraestrutura e sistemas, e é daí que vem boa parte dos meus projetos: eu vejo um problema que se repete no dia a dia e transformo em software. Gosto de entender bem o problema antes da primeira linha de código e de construir coisas que as pessoas usam sem precisar de manual.",
  ],
  foraDoCodigo: [
    { titulo: "Futebol", texto: "Jogar bola é o meu jeito de desligar a cabeça." },
    { titulo: "Família", texto: "O tempo com a minha família e com a minha namorada vem em primeiro lugar." },
    { titulo: "Fé", texto: "Sou católico e participo da vida da minha igreja." },
    { titulo: "Leitura", texto: "Sempre tem um livro em andamento. Alguns que já li estão logo abaixo." },
  ],
};
