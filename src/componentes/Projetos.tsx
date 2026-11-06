import { ArrowDown, ArrowRight, ArrowUpRight, Check, Plus } from "lucide-react";
import { pagina } from "@/conteudo/pagina";
import { projetos, type Projeto } from "@/conteudo/projetos";
import { Secao } from "./Secao";

function LinkExterno({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1 font-medium text-vermelho underline decoration-2 underline-offset-[5px]"
    >
      {children}
      <ArrowUpRight aria-hidden size={16} strokeWidth={2} />
    </a>
  );
}

function Links({ projeto }: { projeto: Projeto }) {
  if (!projeto.producao && !projeto.repositorio) return null;
  return (
    <div className="flex flex-wrap gap-x-6 gap-y-2">
      {projeto.producao && <LinkExterno href={projeto.producao}>Ver no ar</LinkExterno>}
      {projeto.repositorio && <LinkExterno href={projeto.repositorio}>Repositório</LinkExterno>}
    </div>
  );
}

function Meta({ projeto }: { projeto: Projeto }) {
  return (
    <p className="rotulo flex flex-wrap gap-x-3 gap-y-1 text-muted">
      <span>{projeto.tipo}</span>
      <span aria-hidden>·</span>
      <span>{projeto.ano}</span>
      <span aria-hidden>·</span>
      <span className="text-ink">{projeto.status}</span>
    </p>
  );
}

// Captura do projeto com contorno simples (não é um quadro, pra não aninhar). Sem arquivo em `imagem`, nada aparece.
function Captura({ projeto }: { projeto: Projeto }) {
  if (!projeto.imagem) return null;
  return (
    <div className="overflow-hidden rounded-[2px] border-2 border-borda bg-surface">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={projeto.imagem} alt={projeto.legendaImagem} className="block max-h-[36rem] w-full object-contain" />
    </div>
  );
}

function Decisoes({ itens }: { itens: string[] }) {
  return (
    <ul className="space-y-3">
      {itens.map((item) => (
        <li key={item} className="flex gap-3">
          <Check aria-hidden size={18} strokeWidth={2.5} className="mt-0.5 shrink-0 text-vermelho" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function Tags({ itens }: { itens: string[] }) {
  if (itens.length === 0) return null;
  return (
    <ul className="flex flex-wrap gap-1.5">
      {itens.map((tec) => (
        <li key={tec} className="rounded-sm border-2 border-borda px-2 py-0.5 font-mono text-xs text-ink">
          {tec}
        </li>
      ))}
    </ul>
  );
}

// O caminho do dado contado em quadrinhos: cada etapa é um quadro, ligado ao próximo por uma seta.
function Fluxo({ etapas }: { etapas: NonNullable<Projeto["fluxo"]> }) {
  return (
    <ol className="grid gap-8 lg:grid-cols-5 lg:gap-6">
      {etapas.map((etapa, i) => (
        <li key={etapa.titulo} className="quadro relative flex flex-col px-4 pt-9 pb-5">
          <span className="legenda absolute top-0 left-0 border-t-0 border-l-0 px-2.5 py-0.5 text-sm">{i + 1}</span>
          <p className="font-semibold leading-snug text-ink">{etapa.titulo}</p>
          <p className="mt-1.5 text-[15px] leading-snug">{etapa.detalhe}</p>
          {i < etapas.length - 1 && (
            <span aria-hidden className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-vermelho lg:top-1/2 lg:-right-6 lg:bottom-auto lg:left-auto lg:translate-x-0 lg:-translate-y-1/2">
              <ArrowDown size={22} strokeWidth={3} className="lg:hidden" />
              <ArrowRight size={22} strokeWidth={3} className="hidden lg:block" />
            </span>
          )}
        </li>
      ))}
    </ol>
  );
}

function Destaque({ projeto }: { projeto: Projeto }) {
  return (
    <article aria-labelledby={`p-${projeto.slug}`} className="quadro relative overflow-hidden px-6 pt-10 pb-10 md:px-10 md:pt-12">

      <div className="relative flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-[60ch]">
          <h3 id={`p-${projeto.slug}`} className="titulo-hq text-[2.25rem] md:text-[3.25rem]">
            {projeto.nome}
          </h3>
          <div className="mt-3">
            <Meta projeto={projeto} />
          </div>
          <p className="mt-4 text-lg text-ink">{projeto.resumo}</p>
        </div>
        <Links projeto={projeto} />
      </div>

      {projeto.imagem && (
        <div className="relative mt-10">
          <Captura projeto={projeto} />
        </div>
      )}

      {projeto.fluxo && (
        <div className="relative mt-12">
          <h4 className="titulo-hq-leve mb-5 text-xl">{pagina.projetos.tituloFluxo}</h4>
          <Fluxo etapas={projeto.fluxo} />
        </div>
      )}

      <div className="relative mt-12 grid gap-10 text-[15px] leading-relaxed lg:grid-cols-2 lg:gap-12">
        <dl className="space-y-6">
          <div>
            <dt className="rotulo text-muted">Problema</dt>
            <dd className="mt-1.5">{projeto.problema}</dd>
          </div>
          <div>
            <dt className="rotulo text-muted">Solução</dt>
            <dd className="mt-1.5">{projeto.solucao}</dd>
          </div>
        </dl>
        <div className="space-y-6">
          <div>
            <p className="rotulo mb-3 text-muted">Decisões</p>
            <Decisoes itens={projeto.decisoes} />
          </div>
          <Tags itens={projeto.stack} />
        </div>
      </div>
    </article>
  );
}

function Detalhe({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-2 border-t border-line py-5 sm:grid-cols-[9rem_1fr] sm:gap-6">
      <dt className="rotulo pt-0.5 text-muted">{titulo}</dt>
      <dd>{children}</dd>
    </div>
  );
}

function Linha({ projeto }: { projeto: Projeto }) {
  return (
    <article aria-labelledby={`p-${projeto.slug}`} className="border-t-[3px] border-borda py-8">
      <div className="grid gap-4 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <h4 id={`p-${projeto.slug}`} className="titulo-hq-leve text-[1.625rem] md:text-[1.875rem]">
            {projeto.nome}
          </h4>
          <div className="mt-2">
            <Meta projeto={projeto} />
          </div>
        </div>
        <div className="space-y-4 lg:col-span-7">
          <p className="text-lg text-ink">{projeto.resumo}</p>
          <Links projeto={projeto} />
        </div>
      </div>

      <details className="group mt-6 lg:ml-[calc(5/12*100%+2rem)]">
        <summary className="inline-flex cursor-pointer list-none items-center gap-2 font-medium text-ink underline decoration-2 decoration-line underline-offset-[6px] transition-colors hover:decoration-vermelho">
          <Plus aria-hidden size={18} strokeWidth={2.5} className="text-vermelho transition-transform group-open:rotate-45" />
          {pagina.projetos.lerEstudo}
        </summary>
        {projeto.imagem && (
          <div className="mt-5">
            <Captura projeto={projeto} />
          </div>
        )}
        <dl className="mt-4 text-[15px] leading-relaxed">
          <Detalhe titulo="Problema">
            <p>{projeto.problema}</p>
          </Detalhe>
          <Detalhe titulo="Solução">
            <p>{projeto.solucao}</p>
          </Detalhe>
          <Detalhe titulo="Arquitetura">
            <ul className="list-disc space-y-2 pl-5 marker:text-muted">
              {projeto.arquitetura.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Detalhe>
          <Detalhe titulo="Decisões">
            <Decisoes itens={projeto.decisoes} />
          </Detalhe>
          {projeto.stack.length > 0 && (
            <Detalhe titulo="Stack">
              <Tags itens={projeto.stack} />
            </Detalhe>
          )}
        </dl>
      </details>
    </article>
  );
}

export function Projetos() {
  const destaque = projetos.find((p) => p.destaque);
  const outros = projetos.filter((p) => p !== destaque);

  return (
    <Secao id="projetos" titulo={pagina.projetos.titulo} descricao={pagina.projetos.descricao}>
      {destaque && <Destaque projeto={destaque} />}
      {outros.length > 0 && (
        <div className="mt-20">
          <h3 className="titulo-hq-leve mb-6 text-2xl">{pagina.projetos.outros}</h3>
          <div className="border-b-[3px] border-borda">
            {outros.map((projeto) => (
              <Linha key={projeto.slug} projeto={projeto} />
            ))}
          </div>
        </div>
      )}
    </Secao>
  );
}
