import { pagina } from "@/conteudo/pagina";
import { perfil } from "@/conteudo/perfil";
import { HeroInterativo } from "./HeroInterativo";
import { anel1, anel2, anel3, anel4, anel5, nos, raiosLongos } from "./teia";

// Teia 3D: seis camadas de SVG empilhadas em profundidade, com a stack nos nós e o LS no centro.
function Teia3D() {
  return (
    <div className="web" role="img" aria-label={`${pagina.hero.descricaoTeia}: ${perfil.teia.join(", ")}`}>
      <div className="web-drift">
        <div className="web-tilt">
          <svg className="web-layer" viewBox="0 0 600 600" aria-hidden style={{ transform: "translate(16px, 16px) translateZ(-110px)" }}>
            <g className="c-wshadow" fill="none" strokeLinecap="round" strokeWidth="3">
              <path d={raiosLongos} />
              <path d={anel3} />
              <path d={anel5} />
            </g>
          </svg>
          <svg className="web-layer" viewBox="0 0 600 600" aria-hidden style={{ transform: "translateZ(-50px)" }}>
            <g className="c-web" fill="none" strokeOpacity="0.55" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6">
              <path d={anel5} />
              <path d={anel4} />
            </g>
          </svg>
          <svg className="web-layer" viewBox="0 0 600 600" aria-hidden>
            <g className="c-web" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path strokeWidth="2.5" d={raiosLongos} />
              <path strokeWidth="1.8" d={anel3} />
            </g>
            <g className="c-spark" fill="none" strokeWidth="4" strokeLinecap="round">
              {["M300 300L352 15", "M300 300L587 261", "M300 300L248 585", "M300 300L13 339"].map((d, i) => (
                <path key={d} className="spark" pathLength={100} d={d} style={{ animationDelay: `${-0.8 * i}s` }} />
              ))}
            </g>
          </svg>
          <svg className="web-layer" viewBox="0 0 600 600" aria-hidden style={{ transform: "translateZ(45px)" }}>
            <g className="c-webin" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2">
              <path d={anel1} />
              <path d={anel2} />
            </g>
          </svg>
          <svg className="web-layer" viewBox="0 0 600 600" aria-hidden style={{ transform: "translateZ(80px)" }}>
            <g className="c-node" strokeWidth="3">
              {nos.map((n) => (
                <circle key={`${n.cx}-${n.cy}`} cx={n.cx} cy={n.cy} r="7" />
              ))}
            </g>
            <g className="c-lbl" fontWeight="700" fontSize="15">
              {nos.map((n, i) => (
                <g key={perfil.teia[i]} className="lbl">
                  <rect x={n.x} y={n.y} width={n.w} height="28" rx="4" strokeWidth="2.5" />
                  <text x={n.x + 9} y={n.y + 19}>
                    {perfil.teia[i]}
                  </text>
                </g>
              ))}
            </g>
          </svg>
          <svg className="web-layer" viewBox="0 0 600 600" aria-hidden style={{ transform: "translateZ(130px)" }}>
            <circle className="c-center" cx="300" cy="300" r="32" strokeWidth="4" />
            <text className="c-centertxt" x="300" y="311" textAnchor="middle" fontSize="30" letterSpacing="1">
              {perfil.iniciais}
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <HeroInterativo>
      <div aria-hidden className="hero-dots reticula" />
      <div className="hero-texto">
        <p className="cap pop-cedo">{pagina.hero.legenda}</p>
        <h1 id="topo-titulo" className="hero-nome letreiro slam">
          {perfil.nome}
        </h1>
        <div className="balao pop">
          <svg aria-hidden viewBox="0 0 40 30" className="balao-rabo">
            <path d="M4 29 L10 2 L36 29" strokeWidth="3" strokeLinejoin="round" />
          </svg>
          <p>{perfil.chamada}</p>
        </div>
        <div className="hero-botoes">
          <a className="btn btn-acao" href={perfil.links.curriculo} download>
            {pagina.hero.curriculo}
          </a>
          <a className="btn btn-papel" href={perfil.links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="btn btn-papel" href={perfil.links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
      <Teia3D />
    </HeroInterativo>
  );
}
