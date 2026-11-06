import { pagina } from "@/conteudo/pagina";
import { perfil } from "@/conteudo/perfil";
import { anel1, anel2, anel3, anel4 } from "@/componentes/teia";

export const metadata = { title: "Página não encontrada" };

// Corta cada anel ao meio (fios faltando), pra teia parecer rasgada.
const rasgado = (d: string) => d.split("Q").slice(0, 4).join("Q");

export default function NaoEncontrado() {
  const t = pagina.naoEncontrado;
  return (
    <main className="nf">
      <div aria-hidden className="nf-dots" />
      <div className="nf-cols">
        <div className="nf-texto">
          <p className="cap" style={{ rotate: "-1.5deg", fontSize: 17 }}>
            {t.legenda}
          </p>
          <h1 className="nf-404">404</h1>
          <p className="nf-frase">{t.frase}</p>
          <p className="nf-term mono">
            <span style={{ color: "#9C9C9C" }}>$</span> curl /essa-pagina
            <br />
            <span style={{ color: "#FFE24A" }}>404 Não encontrado</span>
          </p>
          <div className="mt-2 flex flex-wrap gap-4">
            <a className="btn" href="/" style={{ background: "#D7141E", color: "#FFFFFF", borderColor: "#000000", ["--btn-shadow" as string]: "#000000" }}>
              {t.voltar}
            </a>
            <a className="btn" href="/#projetos" style={{ background: "#FFFFFF", color: "#000000", borderColor: "#000000", ["--btn-shadow" as string]: "#000000" }}>
              {t.projetos}
            </a>
          </div>
        </div>
        <svg className="nf-teia h-auto w-full overflow-visible" viewBox="0 0 600 600" role="img" aria-label="Teia rasgada, com um fio solto balançando">
          <g fill="none" stroke="#8FB8FF" strokeLinecap="round" strokeLinejoin="round">
            <path strokeWidth="3" d="M300 300L352 15 M300 300L510 100 M300 300L587 261 M300 300L470 470 M300 300L248 585 M300 300L150 450 M300 300L13 339 M300 300L45 162 M300 300L174 39" />
            <path strokeWidth="2" d={anel1} />
            <path strokeWidth="2" d={rasgado(anel2)} />
            <path strokeWidth="2" d={rasgado(anel3)} />
            <path strokeWidth="2" d={rasgado(anel4)} />
          </g>
          <g className="sway">
            <path d="M330 300 Q 345 380 330 470" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
            <circle cx="330" cy="478" r="11" fill="#D7141E" stroke="#000000" strokeWidth="3" />
          </g>
          <circle cx="300" cy="300" r="30" fill="#D7141E" stroke="#000000" strokeWidth="4" />
          <text x="300" y="311" textAnchor="middle" fill="#FFFFFF" fontFamily="var(--f-hq), cursive" fontSize="28" letterSpacing="1">
            {perfil.iniciais}
          </text>
        </svg>
      </div>
    </main>
  );
}
