import { ArrowUpRight } from "lucide-react";
import { perfil } from "@/conteudo/perfil";

// Faixa invertida (fundo escuro no tema claro): o único bloco "pesado" da página, pra fechar com o contato.
export function Contato() {
  const links = [
    { rotulo: "LinkedIn", href: perfil.links.linkedin, externo: true },
    { rotulo: "GitHub", href: perfil.links.github, externo: true },
    { rotulo: "Currículo (PDF)", href: perfil.links.curriculo, externo: false },
  ];

  return (
    <section id="contato" aria-labelledby="contato-titulo" className="relative scroll-mt-28 md:scroll-mt-16 bg-contrast text-on-contrast">
      <div className="grid gap-12 px-6 py-24 md:grid-cols-12 md:gap-8 md:px-12 md:py-28">
        <p className="rotulo text-on-contrast-muted md:col-span-3">
          <span className="text-on-contrast">06</span>
          <span className="mx-2">/</span>
          Contato
        </p>
        <div className="md:col-span-9">
          <h2 id="contato-titulo" className="titulo-secao text-[2.25rem] text-on-contrast md:text-[3.5rem]">
            Vamos construir algo juntos.
          </h2>
          <p className="mt-5 max-w-[48ch] text-lg text-on-contrast-muted">
            Estou aberto a vagas de desenvolvedor full-stack ou back-end. A forma mais rápida de falar comigo é por e-mail.
          </p>
          <a
            href={`mailto:${perfil.email}`}
            className="mt-10 inline-block font-mono text-lg break-all text-on-contrast underline decoration-on-contrast-line underline-offset-8 transition-colors hover:decoration-on-contrast md:text-2xl"
          >
            {perfil.email}
          </a>
          <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-on-contrast-line pt-6 text-[15px]">
            {links.map((l) => (
              <li key={l.rotulo}>
                <a
                  href={l.href}
                  {...(l.externo ? { target: "_blank", rel: "noreferrer" } : { download: true })}
                  className="inline-flex items-center gap-1 text-on-contrast-muted transition-colors hover:text-on-contrast"
                >
                  {l.rotulo}
                  <ArrowUpRight aria-hidden size={15} strokeWidth={1.75} />
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
    <footer className="rotulo flex flex-wrap justify-between gap-3 border-t border-hairline px-6 py-6 text-muted md:px-12">
      <span>
        © {new Date().getFullYear()} {perfil.nome}
      </span>
      <span>Next.js · TypeScript · Tailwind CSS</span>
    </footer>
  );
}
