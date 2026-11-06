import { certificacoes, formacao, trajetoria } from "@/conteudo/carreira";
import { perfil } from "@/conteudo/perfil";
import { Secao } from "./Secao";

// Trajetória no formato de CHANGELOG: cada emprego é uma versão, e a próxima ainda não saiu.
export function Trajetoria() {
  return (
    <Secao
      id="trajetoria"
      numero="04"
      rotulo="Trajetória"
      titulo="Changelog da carreira."
      descricao="Cada etapa como uma versão. A próxima ainda está em desenvolvimento."
    >
      <ol className="relative">
        {trajetoria.map((v) => (
          <li key={v.versao} className="grid gap-3 border-t border-hairline py-7 md:grid-cols-12 md:gap-8">
            <div className="flex items-baseline gap-3 md:col-span-3 md:flex-col md:gap-1">
              <span
                className={`font-mono text-sm ${
                  v.proxima ? "rounded-sm border border-dashed border-accent px-1.5 text-accent" : "text-ink"
                }`}
              >
                {v.versao}
              </span>
              <span className="rotulo text-muted">{v.periodo}</span>
            </div>
            <div className="md:col-span-9">
              <h3 className="text-lg font-medium tracking-tight">
                {v.cargo}
                <span className="font-normal text-muted"> · {v.empresa}</span>
              </h3>
              <p className="mt-1.5 max-w-[62ch] text-[15px]">{v.resumo}</p>
            </div>
          </li>
        ))}
      </ol>
    </Secao>
  );
}

export function Formacao() {
  return (
    <Secao id="formacao" numero="05" rotulo="Formação" titulo="Formação, cursos e idiomas.">
      <div className="space-y-12">
        <Grupo titulo="Formação">
          {formacao.map((f) => (
            <Linha key={f.titulo} principal={f.titulo} secundario={f.instituicao} lateral={f.periodo} />
          ))}
        </Grupo>
        <Grupo titulo="Cursos e certificações">
          {certificacoes.map((c) => (
            <Linha
              key={c.titulo}
              principal={c.titulo}
              secundario={c.emissor}
              lateral={c.ano}
              link={c.link}
            />
          ))}
        </Grupo>
        <Grupo titulo="Idiomas">
          {perfil.idiomas.map((i) => (
            <Linha key={i.idioma} principal={i.idioma} lateral={i.nivel} />
          ))}
        </Grupo>
      </div>
    </Secao>
  );
}

function Grupo({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-4 md:grid-cols-12 md:gap-8">
      <h3 className="rotulo pt-4 text-muted md:col-span-3">{titulo}</h3>
      <ul className="border-b border-hairline md:col-span-9">{children}</ul>
    </div>
  );
}

function Linha({
  principal,
  secundario,
  lateral,
  link,
}: {
  principal: string;
  secundario?: string;
  lateral?: string;
  link?: string;
}) {
  const texto = (
    <>
      <span className="font-medium text-ink">{principal}</span>
      {secundario && <span className="text-muted"> · {secundario}</span>}
    </>
  );
  return (
    <li className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-t border-hairline py-4 text-[15px]">
      {link ? (
        <a href={link} target="_blank" rel="noreferrer" className="underline-offset-4 hover:underline">
          {texto}
        </a>
      ) : (
        <span>{texto}</span>
      )}
      {lateral && <span className="font-mono text-xs text-muted">{lateral}</span>}
    </li>
  );
}
