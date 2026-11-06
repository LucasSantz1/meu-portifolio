import { perfil } from "@/conteudo/perfil";
import { SeletorTema } from "./SeletorTema";

const menu = [
  { href: "#projetos", rotulo: "Projetos" },
  { href: "#sobre", rotulo: "Sobre" },
  { href: "#trajetoria", rotulo: "Trajetória" },
  { href: "#contato", rotulo: "Contato" },
];

export function Cabecalho() {
  return (
    <header className="sticky top-0 z-30 border-b border-hairline bg-canvas/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-4 px-6 md:px-12">
        <a href="#inicio" className="flex items-center gap-2.5 text-ink">
          <span aria-hidden className="grid size-7 place-items-center rounded-md bg-ink font-mono text-[11px] font-medium text-canvas">
            LS
          </span>
          <span className="text-[15px] font-medium tracking-tight">{perfil.nome}</span>
        </a>
        <nav aria-label="Seções" className="hidden md:block">
          <ul className="flex items-center gap-7 text-sm">
            {menu.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-muted transition-colors hover:text-ink">
                  {item.rotulo}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <SeletorTema />
      </div>
      {/* No celular o menu vira uma segunda linha que dá pra deslizar. */}
      <nav aria-label="Seções" className="border-t border-hairline md:hidden">
        <ul className="flex gap-6 overflow-x-auto px-6 py-2.5 text-sm whitespace-nowrap">
          {menu.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="text-muted transition-colors hover:text-ink">
                {item.rotulo}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
