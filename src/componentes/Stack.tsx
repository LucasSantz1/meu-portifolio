import { stackPontaAPonta } from "@/conteudo/carreira";
import { pagina } from "@/conteudo/pagina";
import { Secao } from "./Secao";

// A stack como uma tabela curta: cada camada numa linha, da interface até a entrega.
export function Stack() {
  return (
    <Secao id="stack" titulo={pagina.stack.titulo} descricao={pagina.stack.descricao}>
      <dl className="border-b-[3px] border-borda">
        {stackPontaAPonta.map((camada) => (
          <div key={camada.etapa} className="grid gap-3 border-t-[3px] border-borda py-6 md:grid-cols-12 md:gap-8">
            <dt className="md:col-span-4">
              <span className="titulo-hq-leve block text-2xl text-ink">{camada.etapa}</span>
              <span className="mt-1 block text-[15px] text-muted">{camada.descricao}</span>
            </dt>
            <dd className="md:col-span-8 md:pt-1">
              <ul className="flex flex-wrap gap-1.5">
                {camada.itens.map((item) => (
                  <li key={item} className="rounded-sm border-2 border-borda bg-surface px-2.5 py-1 font-mono text-[13px] text-ink">
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Secao>
  );
}
