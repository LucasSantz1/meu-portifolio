import { trajetoria } from "@/conteudo/carreira";
import { pagina } from "@/conteudo/pagina";
import { Capitulo } from "./Capitulo";

// Explosão de HQ (estrela de 14 pontas) atrás da onomatopeia.
const pontas = Array.from({ length: 28 }, (_, i) => {
  const a = (i / 28) * Math.PI * 2;
  const r = i % 2 ? 30 : 50;
  return `${(60 + Math.cos(a) * r * 1.15).toFixed(1)},${(42 + Math.sin(a) * r * 0.78).toFixed(1)}`;
}).join(" ");

function Som({ texto }: { texto: string }) {
  return (
    <span className="hq-som" aria-hidden>
      <svg viewBox="0 0 120 84">
        <polygon points={pontas} strokeWidth="3" strokeLinejoin="round" />
      </svg>
      <span>{texto}</span>
    </span>
  );
}

// Trajetória como uma página de gibi: quadros de tamanhos e formatos diferentes, calhas na diagonal,
// o emprego atual num quadro grande que ocupa a página toda. Na rolagem, cada quadro é "entintado".
export function Trajetoria() {
  return (
    <Capitulo id="trajetoria" legenda={pagina.trajetoria.legenda} titulo={pagina.trajetoria.titulo}>
      <ol className="hq-pagina">
        {trajetoria.map((q, i) => (
          <li key={q.titulo} className={`hq-quadro q${i + 1} ${q.atual ? "atual" : ""}`}>
            <div className="hq-tinta">
              <div className="hq-miolo">
                {!q.atual && i % 2 === 1 && <div aria-hidden className="hq-reticula reticula" />}
                {q.atual && (
                  <svg className="hq-teia-canto" viewBox="0 0 60 60" aria-hidden>
                    <g fill="none" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M60 0L0 60M60 0L60 60M60 0L0 0M60 0L20 60M60 0L0 20" />
                      <path d="M48 0Q46 8 52 12Q56 14 60 12M34 0Q31 15 43 21Q51 26 60 25M20 0Q16 22 34 31Q47 38 60 38" />
                    </g>
                  </svg>
                )}
                <div className="hq-conteudo">
                  {q.legenda && <p className="cap hq-legenda">{q.legenda}</p>}
                  <span className="quadro-n">{i + 1}</span>
                  <span className="quadro-ano">{q.periodo}</span>
                  <span className="quadro-titulo">{q.titulo}</span>
                  <span className="quadro-texto">{q.texto}</span>
                  {q.balao && (
                    <p className="hq-balao">
                      <svg aria-hidden viewBox="0 0 40 30" className="hq-balao-rabo">
                        <path d="M4 29 L10 2 L36 29" strokeWidth="3" strokeLinejoin="round" />
                      </svg>
                      {q.balao}
                    </p>
                  )}
                </div>
              </div>
            </div>
            {q.som && <Som texto={q.som} />}
          </li>
        ))}
      </ol>
    </Capitulo>
  );
}
