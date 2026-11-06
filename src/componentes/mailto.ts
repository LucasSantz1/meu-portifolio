// Monta o link mailto do contato.exe com assunto e corpo prontos (codificados para URL).
export function montarMailto(email: string, assuntoBase: string, nome: string, remetente: string, mensagem: string) {
  const assunto = assuntoBase + (nome ? ` - ${nome}` : "");
  const assinatura = [nome, remetente].filter(Boolean).join("\n");
  const corpo = mensagem + (assinatura ? `\n\n${assinatura}` : "");
  return `mailto:${email}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;
}
