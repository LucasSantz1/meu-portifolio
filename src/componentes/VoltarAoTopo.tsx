"use client";

import { useEffect, useRef, useState } from "react";

const facilitar = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

// Voltar ao topo: um fio desce até o botão, dá um tranco e puxa a página para cima.
export function VoltarAoTopo() {
  const [visivel, setVisivel] = useState(false);
  const [fase, setFase] = useState<0 | 1 | 2>(0);
  const timers = useRef<number[]>([]);
  const raf = useRef(0);

  useEffect(() => {
    let pendente = false;
    const aoRolar = () => {
      if (pendente) return;
      pendente = true;
      requestAnimationFrame(() => {
        pendente = false;
        setVisivel(window.scrollY > 700);
      });
    };
    window.addEventListener("scroll", aoRolar, { passive: true });
    aoRolar();
    return () => {
      window.removeEventListener("scroll", aoRolar);
      timers.current.forEach(clearTimeout);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  function puxar() {
    if (fase) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      window.scrollTo({ top: 0, behavior: "instant" });
      return;
    }
    setFase(1);
    timers.current.push(
      window.setTimeout(() => {
        setFase(2);
        const inicio = window.scrollY;
        const t0 = performance.now();
        const passo = (agora: number) => {
          const p = Math.min(1, (agora - t0) / 750);
          window.scrollTo({ top: inicio * (1 - facilitar(p)), behavior: "instant" });
          if (p < 1) raf.current = requestAnimationFrame(passo);
          else timers.current.push(window.setTimeout(() => setFase(0), 200));
        };
        raf.current = requestAnimationFrame(passo);
      }, 330),
    );
  }

  const classeFase = fase === 1 ? "pull1" : fase === 2 ? "pull2" : "";

  return (
    <>
      <div className={`totop-thread ${classeFase}`} aria-hidden />
      <button
        type="button"
        className={`totop ${visivel || fase ? "show" : ""} ${classeFase}`}
        onClick={puxar}
        aria-label="Voltar ao topo"
        title="Voltar ao topo"
        tabIndex={visivel ? 0 : -1}
      >
        <svg aria-hidden viewBox="0 0 24 24" width="30" height="30" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path strokeWidth="1.2" opacity="0.55" d="M12 12L3 7M12 12L21 7M12 12L4 19M12 12L20 19M5.5 8.4Q8 12 6 17.3M18.5 8.4Q16 12 18 17.3" />
          <path strokeWidth="2.6" d="M12 19V5M6 11l6-6 6 6" />
        </svg>
      </button>
    </>
  );
}
