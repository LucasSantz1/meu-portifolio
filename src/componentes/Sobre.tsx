import { livros } from "@/conteudo/carreira";
import { pagina } from "@/conteudo/pagina";
import { sobre } from "@/conteudo/perfil";
import { Secao } from "./Secao";

export function Sobre() {
  return (
    <Secao id="sobre" titulo={pagina.sobre.titulo}>
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="space-y-5 text-lg leading-relaxed lg:col-span-7">
          {sobre.paragrafos.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        <div className="lg:col-span-5">
          <h3 className="titulo-hq-leve border-b-[3px] border-borda pb-3 text-2xl">{pagina.sobre.foraDoCodigo}</h3>
          <dl>
            {sobre.foraDoCodigo.map((item) => (
              <div key={item.titulo} className="border-b border-line py-4">
                <dt className="font-semibold text-ink">{item.titulo}</dt>
                <dd className="mt-0.5 text-[15px]">{item.texto}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Estante: só aparece quando tiver livro na lista (src/conteudo/carreira.ts). */}
      {livros.length > 0 && (
        <div className="mt-20">
          <h3 className="titulo-hq-leve text-2xl">{pagina.sobre.estante}</h3>
          <p className="mt-1 text-[15px] text-muted">{pagina.sobre.descricaoEstante}</p>
          <ul className="mt-6 flex flex-wrap items-end gap-2 border-b-[6px] border-borda">
            {livros.map((livro, i) => (
              <li
                key={livro.titulo}
                className={`flex w-14 flex-col justify-between overflow-hidden rounded-t-sm border-[3px] border-b-0 border-borda px-1.5 pt-3 pb-2 ${
                  ["h-60 bg-surface", "h-52 bg-canvas", "h-64 bg-surface", "h-56 bg-vermelho-fundo"][i % 4]
                }`}
              >
                <span
                  className={`titulo-hq-leve max-h-full overflow-hidden text-[15px] leading-tight text-ellipsis [writing-mode:vertical-rl] ${
                    i % 4 === 3 ? "text-sobre-vermelho" : "text-ink"
                  }`}
                >
                  {livro.titulo}
                </span>
                <span className="sr-only">, de {livro.autor}</span>
              </li>
            ))}
          </ul>
          <ul className="mt-5 grid gap-x-8 gap-y-1 text-[15px] sm:grid-cols-2" aria-hidden>
            {livros.map((livro) => (
              <li key={livro.titulo}>
                <span className="font-medium text-ink">{livro.titulo}</span>
                <span className="text-muted"> · {livro.autor}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Secao>
  );
}
