import { stackPontaAPonta } from "@/conteudo/carreira";
import { Secao } from "./Secao";

// A stack como um caminho: da interface até a entrega, cada etapa numa coluna.
export function Stack() {
  return (
    <Secao
      id="stack"
      numero="01"
      rotulo="Stack"
      titulo="De ponta a ponta, da tela ao deploy."
      descricao="As ferramentas que uso em cada camada de uma aplicação. O back-end é onde me sinto mais em casa."
    >
      {/* gap-px com fundo de linha: as divisórias entre colunas saem sozinhas em qualquer largura. */}
      <ol className="grid gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {stackPontaAPonta.map((camada, i) => (
          <li key={camada.etapa} className="bg-surface p-6">
            <p className="rotulo flex items-center justify-between text-muted">
              <span className="text-ink">{String(i + 1).padStart(2, "0")}</span>
              {i < stackPontaAPonta.length - 1 && (
                <span aria-hidden className="hidden text-faint lg:inline">
                  →
                </span>
              )}
            </p>
            <h3 className="mt-6 text-xl font-medium tracking-tight">{camada.etapa}</h3>
            <p className="mt-1 text-sm text-muted">{camada.descricao}</p>
            <ul className="mt-5 space-y-2 text-[15px]">
              {camada.itens.map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <span aria-hidden className="h-px w-3 bg-faint" />
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Secao>
  );
}
