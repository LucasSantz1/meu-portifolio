import { certificados, formacao, stack } from "@/conteudo/carreira";
import { pagina } from "@/conteudo/pagina";
import { perfil } from "@/conteudo/perfil";
import { Capitulo } from "./Capitulo";

const t = pagina.stack;

function Lista({ itens }: { itens: string[] }) {
  return (
    <>
      [
      {itens.map((item, i) => (
        <span key={item}>
          <span className="s">&quot;{item}&quot;</span>
          {i < itens.length - 1 && ", "}
        </span>
      ))}
      ]
    </>
  );
}

// As linhas do developer.ts, montadas a partir do conteúdo (perfil e carreira).
function linhas(): React.ReactNode[] {
  return [
    <span key="c" className="cm">{t.comentario}</span>,
    <span key="a">
      <span className="kw">const</span> lucas = {"{"}
    </span>,
    <span key="cargo">
      {"  "}<span className="k">cargo</span>: <span className="s">&quot;{perfil.cargo}&quot;</span>,
    </span>,
    <span key="foco">
      {"  "}<span className="k">foco</span>: <span className="s">&quot;{perfil.foco}&quot;</span>,
    </span>,
    ...stack.map((camada) => (
      <span key={camada.chave}>
        {"  "}<span className="k">{camada.chave}</span>: <Lista itens={camada.itens} />,
      </span>
    )),
    <span key="idiomas">
      {"  "}<span className="k">idiomas</span>: <Lista itens={perfil.idiomas} />,
    </span>,
    <span key="f">{"};"}</span>,
    <span key="v" />,
    <span key="e">
      <span className="kw">export default</span> lucas;
    </span>,
  ];
}

export function Stack() {
  const resumo = `${perfil.cargo}, foco em ${perfil.foco}: ${stack.map((c) => `${c.chave} ${c.itens.join(", ")}`).join("; ")}.`;

  return (
    <Capitulo id="stack" legenda={t.legenda} titulo={t.titulo}>
      <div className="stack-grade">
        <div className="ide panel-l relative z-[1]">
          <div className="ide-bar">
            <span className="mono">developer.ts</span>
          </div>
          <div className="code mono" role="img" aria-label={`Objeto em TypeScript com a stack do Lucas. ${resumo}`}>
            {linhas().map((conteudo, i) => (
              <div key={i} className="ln">
                <span className="ln-n">{i + 1}</span>
                {conteudo}
              </div>
            ))}
          </div>
        </div>

        <div className="term-solto panel-r">
          <div className="term-win">
            <div className="term-bar mono">
              <span>bash</span>
              <span>~/lucas</span>
            </div>
            <pre className="term-body mono">
              <span className="p">$</span> whoami{"\n"}
              lucas-santanna: {perfil.cargo.toLowerCase()}, foco em {perfil.foco}
              {"\n\n"}
              <span className="p">$</span> {t.terminalComando}
              {"\n"}
              <span className="ok">{t.terminalSaida}</span>
              {"\n\n"}
              <span className="p">$</span> cat formacao.txt{"\n"}
              {formacao}
              {"\n\n"}
              <span className="p">$</span> ls certificados/
              {certificados.map((c) => (
                <span key={c.arquivo}>
                  {"\n"}
                  {c.arquivo.padEnd(30)}
                  {c.link && (
                    <a href={c.link} target="_blank" rel="noreferrer">
                      verificar
                    </a>
                  )}
                </span>
              ))}
              {"\n\n"}
              <span className="p">$</span> <span className="cursor" aria-hidden />
            </pre>
          </div>
          <p className="note hide-sm" aria-hidden>
            <svg viewBox="0 0 60 40" width="60" height="40" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M56 34 C40 34 22 26 10 8" />
              <path d="M4 16 L10 6 L20 10" />
            </svg>
            {t.nota}
          </p>
        </div>
      </div>
    </Capitulo>
  );
}
