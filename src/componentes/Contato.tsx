import { ArrowUpRight, FileText } from "lucide-react";
import { pagina } from "@/conteudo/pagina";
import { perfil } from "@/conteudo/perfil";

// Último quadro da página: vermelho com retícula, pra fechar a história com o contato.
export function Contato() {
  const links = [
    { rotulo: "LinkedIn", href: perfil.links.linkedin, Icone: ArrowUpRight },
    { rotulo: "GitHub", href: perfil.links.github, Icone: ArrowUpRight },
    { rotulo: "Currículo (PDF)", href: perfil.links.curriculo, Icone: FileText },
  ];

  return (
    <section id="contato" aria-labelledby="contato-titulo" className="scroll-mt-28 px-5 pt-16 pb-16 md:scroll-mt-20 md:px-10 md:pt-24">
      <div className="relative overflow-hidden rounded-[2px] border-[3px] border-borda bg-vermelho-fundo px-6 pt-20 pb-14 text-sobre-vermelho md:px-12 md:pt-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 hidden md:block [background-image:radial-gradient(rgb(0_0_0/0.22)_1.6px,transparent_1.8px)] [background-size:10px_10px] [mask-image:linear-gradient(to_top_left,black,transparent_70%)]" />
        <p className="legenda absolute top-0 left-0 border-t-0 border-l-0">{pagina.contato.legenda}</p>

        <div className="relative max-w-[56rem]">
          <h2 id="contato-titulo" className="titulo-hq-leve text-[3rem] text-sobre-vermelho md:text-[5rem]">
            {pagina.contato.titulo}
          </h2>
          <p className="mt-5 max-w-[48ch] text-lg">{pagina.contato.texto}</p>
          <a
            href={`mailto:${perfil.email}`}
            className="mt-10 inline-block font-mono text-lg font-medium break-all underline decoration-2 underline-offset-8 md:text-2xl"
          >
            {perfil.email}
          </a>
          <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t-2 border-sobre-vermelho/40 pt-6 text-[15px]">
            {links.map(({ rotulo, href, Icone }) => (
              <li key={rotulo}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium underline decoration-transparent decoration-2 underline-offset-[5px] transition-colors hover:decoration-sobre-vermelho"
                >
                  {rotulo}
                  <Icone aria-hidden size={15} strokeWidth={2} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Rodape() {
  return (
    <footer className="rotulo flex flex-wrap justify-between gap-3 px-5 pb-8 text-muted md:px-10">
      <span>{perfil.nome}</span>
      <span>Next.js · TypeScript · Tailwind CSS</span>
    </footer>
  );
}
