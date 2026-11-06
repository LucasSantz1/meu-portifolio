import { ArrowDown, ArrowUpRight, Check, FileText } from "lucide-react";
import { pagina } from "@/conteudo/pagina";
import { agora, perfil } from "@/conteudo/perfil";
import { Relogio } from "./Relogio";

const linkSecundario =
  "inline-flex items-center gap-1.5 font-medium text-ink underline decoration-2 decoration-line underline-offset-[6px] transition-colors hover:decoration-vermelho";

// Topo como uma página de gibi: dois quadros lado a lado, separados pela calha.
export function Hero() {
  const itensAgora = agora.filter((item) => item.valor);

  return (
    <section id="inicio" aria-labelledby="inicio-titulo" className="grid gap-4 px-5 pt-8 md:grid-cols-12 md:gap-5 md:px-10 md:pt-8">
      <div className="quadro relative px-6 pt-12 pb-16 md:col-span-8 md:px-12 md:pt-12 md:pb-14">
        <h1 id="inicio-titulo" className="titulo-hq entra-registro text-[3.5rem] sm:text-[4.5rem] lg:text-[6rem]">
          {perfil.nome}
        </h1>
        <p className="mt-5 text-xl font-medium tracking-tight text-ink md:text-2xl">{perfil.cargo}</p>
        <p className="mt-4 max-w-[46ch] text-lg leading-relaxed">{perfil.chamada}</p>

        <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
          <a
            href="#projetos"
            className="inline-flex h-12 items-center gap-2 rounded-md border-[3px] border-borda bg-vermelho-fundo px-5 font-medium text-sobre-vermelho transition-colors hover:bg-[color-mix(in_srgb,var(--vermelho-fundo)_82%,black)]"
          >
            {pagina.hero.acaoPrincipal}
            <ArrowDown aria-hidden size={18} strokeWidth={2.25} />
          </a>
          <a href={perfil.links.github} target="_blank" rel="noreferrer" className={linkSecundario}>
            GitHub
            <ArrowUpRight aria-hidden size={16} strokeWidth={2} />
          </a>
          <a href={perfil.links.linkedin} target="_blank" rel="noreferrer" className={linkSecundario}>
            LinkedIn
            <ArrowUpRight aria-hidden size={16} strokeWidth={2} />
          </a>
          <a href={perfil.links.curriculo} target="_blank" rel="noreferrer" className={linkSecundario}>
            <FileText aria-hidden size={16} strokeWidth={2} />
            Currículo
          </a>
        </div>

        {/* Legenda do narrador no canto de baixo do quadro. */}
        <p className="legenda absolute bottom-0 left-0 border-b-0 border-l-0">
          {pagina.hero.legenda} {perfil.cidade}…
        </p>
      </div>

      {/* Segundo quadro: o que está rolando agora. A retícula preenche o que sobra embaixo. */}
      <aside aria-labelledby="agora-titulo" className="quadro flex flex-col overflow-hidden md:col-span-4">
        {perfil.foto && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={perfil.foto} alt={`Foto de ${perfil.nome}`} className="aspect-[4/3] w-full border-b-[3px] border-borda object-cover" />
        )}
        <div className="px-6 pt-6">
          <h2 id="agora-titulo" className="titulo-hq-leve text-2xl">
            {pagina.hero.tituloAgora}
          </h2>
          <dl className="mt-3 divide-y divide-line border-b border-line text-[15px]">
            {itensAgora.map((item) => (
              <div key={item.rotulo} className="flex items-baseline justify-between gap-4 py-2.5">
                <dt className="rotulo text-muted">{item.rotulo}</dt>
                <dd className="text-right font-medium text-ink">{item.valor}</dd>
              </div>
            ))}
            <div className="flex items-baseline justify-between gap-4 py-2.5">
              <dt className="rotulo text-muted">Status</dt>
              <dd className="flex items-center gap-1.5 font-medium text-ink">
                <Check aria-hidden size={16} strokeWidth={2.75} className="self-center text-vermelho" />
                {perfil.disponivel ? pagina.hero.disponivel : pagina.hero.ocupado}
              </dd>
            </div>
            <div className="flex items-baseline justify-between gap-4 py-2.5">
              <dt className="rotulo text-muted">Hora local</dt>
              <dd className="font-medium text-ink">
                <Relogio fuso={perfil.fusoHorario} />
              </dd>
            </div>
          </dl>
        </div>
        <div aria-hidden className="reticula mt-6 hidden min-h-24 flex-1 md:block" />
      </aside>
    </section>
  );
}
