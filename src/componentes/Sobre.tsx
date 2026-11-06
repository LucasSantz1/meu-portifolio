import { livros } from "@/conteudo/carreira";
import { sobre } from "@/conteudo/perfil";
import { Secao } from "./Secao";

export function Sobre() {
  return (
    <Secao id="sobre" numero="03" rotulo="Sobre mim" titulo="Prazer, Lucas.">
      <div className="grid gap-12 md:grid-cols-12 md:gap-8">
        <div className="space-y-5 text-lg leading-relaxed text-body md:col-span-6 md:col-start-4">
          {sobre.paragrafos.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-12">
        <h3 className="rotulo text-muted md:col-span-3">Fora do código</h3>
        <ul className="grid gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-2 md:col-span-9">
          {sobre.foraDoCodigo.map((item) => (
            <li key={item.titulo} className="bg-surface p-6">
              <p className="font-medium text-ink">{item.titulo}</p>
              <p className="mt-1.5 text-[15px]">{item.texto}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-12">
        <h3 className="rotulo text-muted md:col-span-3">Estante</h3>
        <div className="md:col-span-9">
          {livros.length > 0 ? (
            <ol className="divide-y divide-hairline border-y border-hairline">
              {livros.map((livro, i) => (
                <li key={livro.titulo} className="grid grid-cols-[3rem_1fr] items-baseline gap-4 py-4 sm:grid-cols-[3rem_1fr_auto]">
                  <span className="font-mono text-xs text-muted">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-medium text-ink">{livro.titulo}</span>
                  <span className="col-start-2 text-[15px] sm:col-start-auto">{livro.autor}</span>
                </li>
              ))}
            </ol>
          ) : (
            <p className="rounded-md border border-dashed border-line px-6 py-8 text-[15px] text-muted">
              Estou montando a lista dos livros que já li. Logo eles aparecem aqui.
            </p>
          )}
        </div>
      </div>
    </Secao>
  );
}
