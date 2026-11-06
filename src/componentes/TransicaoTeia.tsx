"use client";

import { useEffect, useRef, useState } from "react";
import { anel1, anel2, anel3, anel4, anel5, raiosLongos } from "./teia";

const COBRIR = 520; // ms até a teia cobrir a tela
const REVELAR = 760; // ms da folha enrolando para cima

// Transição entre seções: uma teia gira a partir do clique e cobre a tela,
// a página pula para a seção e a "folha" enrola para cima enquanto a seção desenrola em 3D.
export function TransicaoTeia() {
  const [fase, setFase] = useState<"cobre" | "revela" | null>(null);
  const [origem, setOrigem] = useState({ x: 50, y: 50 });
  const timers = useRef<number[]>([]);
  const ocupado = useRef(false);

  useEffect(() => {
    const aoClicar = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const link = (e.target as Element | null)?.closest<HTMLAnchorElement>('a[href^="#"]');
      const hash = link?.getAttribute("href");
      if (!link || !hash || hash === "#" || link.classList.contains("sr-only")) return;
      const alvo = document.querySelector<HTMLElement>(hash);
      if (!alvo || ocupado.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      e.preventDefault();
      ocupado.current = true;
      // Ativado pelo teclado (sem coordenadas): a teia nasce no centro.
      setOrigem(e.detail === 0 ? { x: 50, y: 50 } : { x: (e.clientX / innerWidth) * 100, y: (e.clientY / innerHeight) * 100 });
      setFase("cobre");

      timers.current.push(
        window.setTimeout(() => {
          const raiz = document.documentElement;
          raiz.style.scrollBehavior = "auto";
          if (location.hash === hash) alvo.scrollIntoView();
          else location.hash = hash; // atualiza :target (o título dá o pulo) e pula sem rolagem suave
          raiz.style.scrollBehavior = "";
          alvo.setAttribute("tabindex", "-1");
          alvo.focus({ preventScroll: true });
          alvo.classList.remove("desenrola");
          void alvo.offsetWidth; // reinicia a animação se a mesma seção for escolhida de novo
          alvo.classList.add("desenrola");
          setFase("revela");
          timers.current.push(
            window.setTimeout(() => {
              setFase(null);
              alvo.classList.remove("desenrola");
              ocupado.current = false;
            }, REVELAR + 120),
          );
        }, COBRIR),
      );
    };

    document.addEventListener("click", aoClicar);
    const lista = timers.current;
    return () => {
      document.removeEventListener("click", aoClicar);
      lista.forEach(clearTimeout);
    };
  }, []);

  if (!fase) return null;

  return (
    <div className={`teia-trans ${fase}`} aria-hidden style={{ "--ox": `${origem.x}%`, "--oy": `${origem.y}%` } as React.CSSProperties}>
      <div className="teia-trans-palco">
        <div className="teia-trans-fundo reticula" />
        <svg className="teia-trans-teia" viewBox="0 0 600 600">
          <g fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path strokeWidth="2.5" d={raiosLongos} />
            {[anel1, anel2, anel3, anel4, anel5].map((d) => (
              <path key={d} strokeWidth="1.8" d={d} />
            ))}
          </g>
          <circle cx="300" cy="300" r="32" strokeWidth="4" className="teia-trans-centro" />
        </svg>
      </div>
    </div>
  );
}
