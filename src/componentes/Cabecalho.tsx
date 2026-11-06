import { perfil } from "@/conteudo/perfil";
import { SeletorTema } from "./SeletorTema";

const menu = [
  { href: "#projetos", rotulo: "Projetos" },
  { href: "#trajetoria", rotulo: "Trajetória" },
  { href: "#sobre", rotulo: "Sobre" },
  { href: "#contato", rotulo: "Contato" },
];

const estiloLink =
  "font-medium text-muted underline decoration-2 decoration-transparent underline-offset-[6px] transition-colors hover:text-ink hover:decoration-vermelho";

export function Cabecalho() {
  return (
    <header className="sticky top-0 z-30 border-b-[3px] border-borda bg-canvas">
      <div className="mx-auto flex h-16 max-w-[1240px] items-center justify-between gap-4 px-5 md:px-10">
        <a href="#inicio" className="titulo-hq-leve text-xl text-ink">
          {perfil.nome}
        </a>
        <nav aria-label="Seções" className="hidden md:block">
          <ul className="flex items-center gap-7 text-[15px]">
            {menu.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={estiloLink}>
                  {item.rotulo}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <SeletorTema />
      </div>
      {/* No celular o menu vira uma segunda linha que dá pra deslizar. */}
      <nav aria-label="Seções (celular)" className="border-t border-line md:hidden">
        <ul className="flex gap-1 overflow-x-auto px-3 text-[15px] whitespace-nowrap">
          {menu.map((item) => (
            <li key={item.href}>
              <a href={item.href} className={`${estiloLink} inline-block px-2 py-2.5`}>
                {item.rotulo}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
