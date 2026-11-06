import { livros } from "@/conteudo/carreira";
import { pagina } from "@/conteudo/pagina";
import { sobre } from "@/conteudo/perfil";
import { Capitulo } from "./Capitulo";

// Ícones de traço que ficam na polaroid até chegar a foto real.
const icones = {
  bola: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7l4 3-1.5 4.5h-5L8 10z" />
      <path d="M12 3v4M16 10l4.5-1.5M14.5 14.5l2.5 4M9.5 14.5l-2.5 4M8 10L3.5 8.5" />
    </>
  ),
  coracao: <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" />,
  igreja: (
    <>
      <path d="M12 2v5M10 4h4" />
      <path d="M6 21V11l6-4 6 4v10" />
      <path d="M10 21v-4a2 2 0 0 1 4 0v4" />
      <path d="M3 21h18" />
    </>
  ),
  livro: (
    <>
      <path d="M3 5.5C5.5 4 9 4 12 6c3-2 6.5-2 9-.5V19c-2.5-1.5-6-1.5-9 .5-3-2-6.5-2-9-.5z" />
      <path d="M12 6v13.5" />
    </>
  ),
};

// Cada polaroid tem a sua inclinação, lado de entrada e deslocamento, como no álbum do design.
const album = [
  { rot: "-3deg", fita: "-4deg", topo: 0, voo: "fly-l fd1" },
  { rot: "2.5deg", fita: "5deg", topo: 30, voo: "fly-r fd2" },
  { rot: "1.5deg", fita: "-2deg", topo: -10, voo: "fly-l fd2" },
  { rot: "-2deg", fita: "3deg", topo: 20, voo: "fly-r fd3" },
];

const lombadas = [
  { altura: "88%", rot: "-2deg", cor: 1 },
  { altura: "74%", rot: "0deg", cor: 2 },
  { altura: "100%", rot: "0deg", cor: 3 },
  { altura: "82%", rot: "6deg", cor: 4 },
];

export function Sobre() {
  const temLivros = livros.length > 0;

  return (
    <Capitulo id="sobre" legenda={pagina.sobre.legenda} titulo={pagina.sobre.titulo} entrada="fly-l">
      <div className={`sobre-grade ${temLivros ? "" : "sem-estante"}`}>
        <div className="flex flex-col gap-[34px]">
          <p className="sobre-texto fly-r fd1">{sobre.texto}</p>
          <div className="polaroids">
            {sobre.polaroids.map((p, i) => {
              const a = album[i % album.length];
              return (
                <figure key={p.legenda} className={`pendurada ${a.voo}`} style={{ marginTop: temLivros ? a.topo : 0 }}>
                  <svg className="no-teia" viewBox="0 0 34 34" aria-hidden>
                    <g fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 17L17 0M17 17L2 4M17 17L32 4M17 17L0 20M17 17L34 20" />
                      <path d="M9 10Q17 6 25 10M5 15Q17 9 29 15" />
                    </g>
                    <circle cx="17" cy="17" r="4" strokeWidth="2" />
                  </svg>
                  <div className="polaroid" style={{ "--rot": a.rot, "--atraso": `${-i * 1.4}s` } as React.CSSProperties}>
                  <span className="polaroid-fio" aria-hidden />
                  <span className="tape-bit" aria-hidden style={{ rotate: a.fita }} />
                  <div className="photo">
                    {p.foto ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={p.foto} alt={p.legenda} />
                    ) : (
                      <svg aria-hidden viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        {icones[p.icone]}
                      </svg>
                    )}
                  </div>
                  <figcaption>{p.legenda}</figcaption>
                  </div>
                </figure>
              );
            })}
          </div>
        </div>

        {/* Estante: só aparece quando houver livros em src/conteudo/carreira.ts. */}
        {temLivros && (
          <div className="estante fly-r fd1">
            <h3>{pagina.sobre.estante}</h3>
            <ul className="prateleira">
              {livros.map((livro, i) => {
                const l = lombadas[i % lombadas.length];
                return (
                  <li
                    key={livro.titulo}
                    className="lombada"
                    title={`${livro.titulo}, de ${livro.autor}${livro.frase ? `: ${livro.frase}` : ""}`}
                    style={{ height: l.altura, rotate: l.rot, background: `var(--bk${l.cor})` }}
                  >
                    <span style={{ color: `var(--bk${l.cor}-ink)` }}>{livro.titulo}</span>
                    <span className="so-leitor">
                      , de {livro.autor}
                      {livro.frase ? `. ${livro.frase}` : ""}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </Capitulo>
  );
}
