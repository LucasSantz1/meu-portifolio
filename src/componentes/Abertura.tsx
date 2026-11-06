"use client";

import { useState } from "react";
import { pagina } from "@/conteudo/pagina";
import { perfil } from "@/conteudo/perfil";
import { anel2, anel3, anel4, raiosCurtos } from "./teia";

// Abertura: o fio desce, a teia se tece no LS e puxa a tela preta para cima.
// Aparece só na primeira visita da sessão (o script do layout esconde nas próximas).
export function Abertura() {
  const [ativa, setAtiva] = useState(true);

  function encerrar() {
    setAtiva(false);
    document.documentElement.dataset.intro = "vista";
    try {
      sessionStorage.setItem("intro-vista", "1");
    } catch {
      // Sem sessionStorage a abertura volta na próxima visita, sem problema.
    }
  }

  if (!ativa) return null;

  return (
    <div className="intro">
      <div className="curtain" onAnimationEnd={(e) => e.animationName === "curtain" && encerrar()}>
        <div className="curtain-dots" aria-hidden />
        <div className="thread" aria-hidden />
        <div className="intro-ball" aria-hidden>
          <svg className="intro-web" viewBox="60 60 480 480">
            <g fill="none" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5">
              {raiosCurtos.map((d) => (
                <path key={d} className="draw" pathLength={100} d={d} />
              ))}
            </g>
            <g fill="none" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5">
              <path className="draw draw-ring" pathLength={100} d={anel2} />
              <path className="draw draw-ring2" pathLength={100} d={anel3} />
              <path className="draw draw-ring3" pathLength={100} d={anel4} />
            </g>
          </svg>
          <div className="intro-disc">{perfil.iniciais}</div>
        </div>
        <p className="intro-text" aria-hidden>
          {pagina.abertura.texto}
        </p>
        <button type="button" className="intro-skip" onClick={encerrar}>
          {pagina.abertura.pular}
        </button>
        <div className="curtain-edge" aria-hidden />
      </div>
    </div>
  );
}
