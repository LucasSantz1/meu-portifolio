// Legendas, títulos e textos fixos de cada parte da página.

export const pagina = {
  abertura: { texto: "Tecendo o site…", pular: "Pular abertura" },
  menu: [
    { href: "#projetos", rotulo: "Projetos" },
    { href: "#stack", rotulo: "Stack" },
    { href: "#trajetoria", rotulo: "Trajetória" },
    { href: "#sobre", rotulo: "Sobre mim" },
    { href: "#contato", rotulo: "Contato" },
  ],
  hero: {
    legenda: "Enquanto isso, em Presidente Prudente…",
    curriculo: "Baixar currículo (PDF)",
    descricaoTeia: "Teia em 3D com as tecnologias que uso",
  },
  projetos: {
    legenda: "Enquanto isso, no editor…",
    titulo: "Projetos",
    agora: "Agora",
    explorador: "Explorador",
    verNoAr: "Ver demo",
    repositorio: "Repositório",
    privado: "repositório privado",
    previa: "preview.png (ilustração)",
  },
  stack: {
    legenda: "Por trás da tela…",
    titulo: "Stack de ponta a ponta",
    comentario: "// quem escreve este site",
    // Exemplo do artigo que os testes do Sistema de Eficiência Energética conferem.
    terminalComando: "pnpm --filter core test",
    terminalSaida: "✓ exemplo do artigo: geladeira 75 W × 24 h = 1,8 kWh/dia (54 kWh/mês)",
    nota: "A conta que o meu sistema de energia faz",
  },
  trajetoria: { legenda: "Como cheguei até aqui…", titulo: "Trajetória" },
  sobre: {
    legenda: "Fora do expediente…",
    titulo: "Fora do código",
    estante: "Na estante",
  },
  contato: {
    legenda: "E agora…",
    titulo: "Bora construir algo?",
    texto: "Estou aberto a vagas de desenvolvedor full-stack ou back-end. Pode me chamar direto também:",
    botao: "Abrir no meu e-mail",
    ajuda: "Abre o seu app de e-mail com a mensagem pronta.",
    assunto: "Contato pelo portfólio",
    campos: { nome: "seu nome", email: "voce@empresa.com", mensagem: "Conta o que você está construindo." },
  },
  rodape: "feito com teia e código",
  // Balão de música no canto inferior esquerdo. Só aparece quando o arquivo existir em public/.
  musica: {
    arquivo: "/musica/sunflower.mp3",
    nome: "Sunflower",
    artista: "Post Malone e Swae Lee",
    tocandoAgora: "Tocando agora",
  },
  naoEncontrado: {
    legenda: "Ops…",
    frase: "Essa página escapou da teia.",
    voltar: "Voltar ao início",
    projetos: "Ver projetos",
  },
};

// Textos das ilustrações do preview.png de cada projeto (até chegar o print real).
export const ilustracoes = {
  "inspetor-de-emails": {
    titulo: "Caixa de entrada",
    contagem: "4 mensagens",
    alerta: "Possível golpe",
    mensagens: [
      { de: "Marina Alves", hora: "09:12", assunto: "Visita ao apartamento da Rua das Flores" },
      { de: "suporte@banco-atualiza.net", hora: "08:47", assunto: "Atualize seus dados bancários em até 24 horas", golpe: true },
      { de: "Portal de anúncios", hora: "Ontem", assunto: "Seu imóvel recebeu novos contatos" },
      { de: "Financeiro", hora: "Ontem", assunto: "Boletos de novembro" },
    ],
  },
  "eficiencia-energetica": {
    conta: ["Geladeira", "75 W × 24 h", "=", "1,8 kWh/dia"],
    barras: [100, 45, 62, 25, 38],
    rodape: "54 kWh no mês só na geladeira.",
  },
  "monitor-atendimentos": {
    titulo: "Painel de suporte",
    aviso: "Novo atendimento na fila",
    detalhe: "Som suave + notificação do sistema",
  },
};
