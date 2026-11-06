import { certificacoes, formacao, trajetoria } from "@/conteudo/carreira";
import { pagina } from "@/conteudo/pagina";
import { perfil } from "@/conteudo/perfil";
import { Secao } from "./Secao";

// Trajetória no formato de CHANGELOG: cada emprego é uma versão, e a próxima ainda não saiu.
export function Trajetoria() {
  return (
    <Secao id="trajetoria" titulo={pagina.trajetoria.titulo} descricao={pagina.trajetoria.descricao}>
      <ol className="border-b-[3px] border-borda">
        {trajetoria.map((v) => (
          <li key={v.versao} className="grid gap-3 border-t-[3px] border-borda py-7 md:grid-cols-12 md:gap-8">
            <div className="flex flex-wrap items-center gap-3 md:col-span-3 md:flex-col md:items-start md:gap-2">
              {v.proxima ? (
                <span className="rounded-sm border-2 border-dashed border-vermelho px-1.5 font-mono text-base font-medium text-vermelho">{v.versao}</span>
              ) : (
                <span className="font-mono text-base font-medium text-ink">{v.versao}</span>
              )}
              <span className="rotulo text-muted">{v.periodo}</span>
            </div>
            <div className="md:col-span-9">
              <h3 className="titulo-hq-leve text-[1.625rem] md:text-[1.875rem]">{v.cargo}</h3>
              <p className="mt-0.5 font-medium text-ink">{v.empresa}</p>
              <p className="mt-2 max-w-[62ch] text-[15px]">{v.resumo}</p>
            </div>
          </li>
        ))}
      </ol>
    </Secao>
  );
}

export function Formacao() {
  const { grupos } = pagina.formacao;
  return (
    <Secao id="formacao" titulo={pagina.formacao.titulo}>
      <div className="grid gap-12 lg:grid-cols-3 lg:gap-10">
        <Grupo titulo={grupos.formacao}>
          {formacao.map((f) => (
            <Linha key={f.titulo} principal={f.titulo} secundario={f.instituicao} lateral={f.periodo} />
          ))}
        </Grupo>
        <Grupo titulo={grupos.cursos}>
          {certificacoes.map((c) => (
            <Linha key={c.titulo} principal={c.titulo} secundario={c.emissor} lateral={c.ano} link={c.link} />
          ))}
        </Grupo>
        <Grupo titulo={grupos.idiomas}>
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
    <div>
      <h3 className="titulo-hq-leve border-b-[3px] border-borda pb-3 text-2xl">{titulo}</h3>
      <ul>{children}</ul>
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
      <span className="block font-medium text-ink">{principal}</span>
      {secundario && <span className="block text-muted">{secundario}</span>}
    </>
  );
  return (
    <li className="flex items-baseline justify-between gap-6 border-b border-line py-4 text-[15px]">
      {link ? (
        <a href={link} target="_blank" rel="noreferrer" className="underline decoration-2 underline-offset-4">
          {texto}
        </a>
      ) : (
        <span>{texto}</span>
      )}
      {lateral && <span className="shrink-0 font-mono text-xs text-muted">{lateral}</span>}
    </li>
  );
}
