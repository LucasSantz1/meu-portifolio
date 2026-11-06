import { pagina } from "@/conteudo/pagina";
import { perfil } from "@/conteudo/perfil";
import { SeletorTema } from "./SeletorTema";

export function Cabecalho() {
  return (
    <header className="cabecalho">
      <a href="#topo" className="marca">
        <span aria-hidden className="disco">
          {perfil.iniciais}
        </span>
        <span className="text-lg font-extrabold">{perfil.nome}</span>
      </a>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
        <nav aria-label="Seções" className="menu">
          {pagina.menu.map((item) => (
            <a key={item.href} href={item.href}>
              {item.rotulo}
            </a>
          ))}
        </nav>
        <SeletorTema />
      </div>
    </header>
  );
}
