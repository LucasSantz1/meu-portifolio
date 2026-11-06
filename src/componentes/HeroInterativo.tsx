"use client";

import { useRef } from "react";

const INCLINACAO = 24; // graus máximos da teia seguindo o mouse

// Seção do topo que inclina a teia 3D e desloca a retícula seguindo o mouse.
// Escreve só variáveis CSS no elemento (sem re-renderizar o React).
export function HeroInterativo({ children }: { children: React.ReactNode }) {
  const quadro = useRef(0);

  function mover(e: React.PointerEvent<HTMLElement>) {
    if (e.pointerType !== "mouse") return;
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    cancelAnimationFrame(quadro.current);
    quadro.current = requestAnimationFrame(() => aplicar(el, x, y));
  }

  function aplicar(el: HTMLElement, x: number, y: number) {
    el.style.setProperty("--hx", String(x));
    el.style.setProperty("--hy", String(y));
    el.style.setProperty("--rx", `${-y * INCLINACAO * 0.8}deg`);
    el.style.setProperty("--ry", `${x * INCLINACAO}deg`);
  }

  return (
    <section
      id="topo"
      aria-labelledby="topo-titulo"
      className="hero"
      onPointerMove={mover}
      onPointerLeave={(e) => {
        cancelAnimationFrame(quadro.current);
        aplicar(e.currentTarget, 0, 0);
      }}
    >
      {children}
    </section>
  );
}
