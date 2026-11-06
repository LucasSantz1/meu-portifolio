import { pagina } from "@/conteudo/pagina";
import { perfil } from "@/conteudo/perfil";

// Rodapé: nome, ano e o e-mail (o único lugar da página com o e-mail).
export function Rodape() {
  return (
    <footer className="rodape">
      <span className="flex flex-wrap gap-x-4 gap-y-1">
        <span>
          {perfil.nome}, {new Date().getFullYear()}
        </span>
        <a href={`mailto:${perfil.email}`}>{perfil.email}</a>
      </span>
      <span className="mono">{pagina.rodape}</span>
    </footer>
  );
}
