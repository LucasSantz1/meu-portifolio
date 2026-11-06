import { ArrowUpRight, Check } from "lucide-react";
import { projetos, type Projeto } from "@/conteudo/projetos";
import { Secao } from "./Secao";

const corStatus: Record<Projeto["status"], string> = {
  "no ar": "bg-accent",
  "em desenvolvimento": "bg-faint",
  "uso interno": "bg-ink",
};

function Detalhe({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-2 border-t border-hairline py-5 sm:grid-cols-[9rem_1fr] sm:gap-6">
      <dt className="rotulo pt-0.5 text-muted">{titulo}</dt>
      <dd>{children}</dd>
    </div>
  );
}

function Link({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1 font-medium text-accent underline-offset-4 hover:underline"
    >
      {children}
      <ArrowUpRight aria-hidden size={15} strokeWidth={1.75} />
    </a>
  );
}

function CartaoProjeto({ projeto, indice }: { projeto: Projeto; indice: number }) {
  return (
    <article aria-labelledby={`p-${projeto.slug}`} className="grid gap-10 border-t border-line pt-10 lg:grid-cols-12 lg:gap-8">
      {/* Coluna da esquerda: metadados, fica parada enquanto rola o texto. */}
      <div className="lg:col-span-4">
        <div className="lg:sticky lg:top-24">
          <p className="rotulo text-muted">
            <span className="text-ink">{String(indice + 1).padStart(2, "0")}</span>
            <span className="mx-2 text-faint">/</span>
            {projeto.tipo}
          </p>
          <h3 id={`p-${projeto.slug}`} className="titulo-secao mt-4 text-[1.75rem]">
            {projeto.nome}
          </h3>
          <p className="mt-3 text-[15px]">{projeto.resumo}</p>

          <dl className="rotulo mt-6 space-y-2 text-muted">
            <div className="flex justify-between gap-4">
              <dt>Status</dt>
              <dd className="flex items-center gap-2 text-ink">
                <span aria-hidden className={`size-1.5 rounded-full ${corStatus[projeto.status]}`} />
                {projeto.status}
              </dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt>Período</dt>
              <dd className="text-ink">{projeto.ano}</dd>
            </div>
          </dl>

          {(projeto.producao || projeto.repositorio) && (
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[15px]">
              {projeto.producao && <Link href={projeto.producao}>Ver no ar</Link>}
              {projeto.repositorio && <Link href={projeto.repositorio}>Repositório</Link>}
            </div>
          )}
        </div>
      </div>

      {/* Coluna da direita: imagem e o estudo de caso. */}
      <div className="lg:col-span-8">
        <figure>
          <div
            className={`aspect-[16/9] overflow-hidden rounded-md border bg-surface ${
              projeto.imagem ? "border-line" : "border-dashed border-line"
            }`}
          >
            {projeto.imagem ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={projeto.imagem} alt={projeto.legendaImagem} className="size-full object-cover object-top" />
            ) : (
              <div className="grid size-full place-items-center">
                <p className="rotulo text-muted">Captura em breve</p>
              </div>
            )}
          </div>
          <figcaption className="rotulo mt-3 text-muted">{projeto.legendaImagem}</figcaption>
        </figure>

        <dl className="mt-8 text-[15px] leading-relaxed">
          <Detalhe titulo="Problema">
            <p>{projeto.problema}</p>
          </Detalhe>
          <Detalhe titulo="Solução">
            <p>{projeto.solucao}</p>
          </Detalhe>
          <Detalhe titulo="Arquitetura">
            <ul className="space-y-2">
              {projeto.arquitetura.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden className="mt-[0.7em] h-px w-3 shrink-0 bg-faint" />
                  {item}
                </li>
              ))}
            </ul>
          </Detalhe>
          <Detalhe titulo="Decisões">
            <ul className="space-y-2">
              {projeto.decisoes.map((item) => (
                <li key={item} className="flex gap-3">
                  <Check aria-hidden size={16} strokeWidth={2} className="mt-1 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </Detalhe>
          {projeto.stack.length > 0 && (
            <Detalhe titulo="Stack">
              <ul className="flex flex-wrap gap-1.5">
                {projeto.stack.map((tec) => (
                  <li key={tec} className="rounded-sm border border-line px-2 py-0.5 font-mono text-xs text-ink">
                    {tec}
                  </li>
                ))}
              </ul>
            </Detalhe>
          )}
        </dl>
      </div>
    </article>
  );
}

export function Projetos() {
  return (
    <Secao
      id="projetos"
      numero="02"
      rotulo="Projetos"
      titulo="Projetos que nasceram de problemas reais."
      descricao="Cada um com o problema que resolve, como foi construído e as decisões que tomei pelo caminho."
    >
      <div className="space-y-20">
        {projetos.map((projeto, i) => (
          <CartaoProjeto key={projeto.slug} projeto={projeto} indice={i} />
        ))}
      </div>
    </Secao>
  );
}
