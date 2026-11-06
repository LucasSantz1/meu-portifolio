import { ArrowUpRight, FileText } from "lucide-react";
import { perfil } from "@/conteudo/perfil";
import { Relogio } from "./Relogio";

export function Hero() {
  return (
    <section id="inicio" aria-labelledby="inicio-titulo" className="relative overflow-hidden">
      <div aria-hidden className="grade-fundo pointer-events-none absolute inset-0" />
      <div className="relative grid gap-12 px-6 pt-16 pb-16 md:grid-cols-12 md:gap-8 md:px-12 md:pt-28 md:pb-24">
        <div className="md:col-span-8">
          <p className="rotulo text-muted">{perfil.cargo}</p>
          <h1 id="inicio-titulo" className="titulo-display mt-6 text-[3rem] sm:text-[4rem] lg:text-[5rem]">
            {perfil.nome}
          </h1>
          <p className="mt-8 max-w-[34ch] text-xl leading-snug text-body md:text-2xl">{perfil.chamada}</p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={perfil.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 items-center gap-1.5 rounded-md bg-ink px-4 text-sm font-medium text-canvas transition-opacity hover:opacity-85"
            >
              GitHub
              <ArrowUpRight aria-hidden size={16} strokeWidth={1.75} />
            </a>
            <a
              href={perfil.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 items-center gap-1.5 rounded-md border border-line bg-surface px-4 text-sm font-medium text-ink transition-colors hover:border-faint"
            >
              LinkedIn
              <ArrowUpRight aria-hidden size={16} strokeWidth={1.75} />
            </a>
            <a
              href={perfil.links.curriculo}
              download
              className="inline-flex h-10 items-center gap-1.5 rounded-md border border-line bg-surface px-4 text-sm font-medium text-ink transition-colors hover:border-faint"
            >
              <FileText aria-hidden size={16} strokeWidth={1.75} />
              Currículo (PDF)
            </a>
          </div>
        </div>

        <figure className="max-w-[15rem] md:col-span-4 md:max-w-none md:pt-10">
          <div className="relative aspect-[4/5] overflow-hidden rounded-md border border-line bg-surface">
            {perfil.foto ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={perfil.foto} alt={`Foto de ${perfil.nome}`} className="size-full object-cover grayscale-[15%]" />
            ) : (
              <div className="grid size-full place-items-center">
                <span aria-hidden className="titulo-display text-7xl text-hairline select-none">
                  LS
                </span>
              </div>
            )}
          </div>
          <figcaption className="rotulo mt-3 flex justify-between text-muted">
            <span>{perfil.foto ? "Retrato" : "Foto em breve"}</span>
            <span>4:5</span>
          </figcaption>
        </figure>
      </div>

      {/* Faixa de status: disponibilidade, cidade, hora local e idiomas. */}
      <div className="relative border-t border-hairline">
        <ul className="rotulo grid grid-cols-2 text-muted md:grid-cols-4">
          <li className="flex items-center gap-2 border-r border-b border-hairline px-6 py-4 md:border-b-0 md:px-12">
            <span aria-hidden className="size-2 rounded-full bg-accent" />
            <span className="text-ink">{perfil.disponivel ? "Aberto a oportunidades" : "Ocupado no momento"}</span>
          </li>
          <li className="border-b border-hairline px-6 py-4 md:border-r md:border-b-0">{perfil.cidade}</li>
          <li className="border-r border-hairline px-6 py-4">
            <Relogio fuso={perfil.fusoHorario} />
          </li>
          <li className="px-6 py-4">PT · EN · ES</li>
        </ul>
      </div>
    </section>
  );
}
