"use client";

import { useRef } from "react";

// Palco 3D que inclina o conteúdo seguindo o mouse (só mouse; toque e movimento reduzido ficam parados).
// O elemento de fora tem a perspectiva e recebe o mouse; o de dentro gira via --rx/--ry.
export function Inclina3D({ max = 8, className = "", children }: { max?: number; className?: string; children: React.ReactNode }) {
  const dentro = useRef<HTMLDivElement>(null);
  const quadro = useRef(0);

  function aplicar(x: number, y: number) {
    const el = dentro.current;
    if (!el) return;
    el.style.setProperty("--rx", `${-y * max}deg`);
    el.style.setProperty("--ry", `${x * max}deg`);
  }

  function mover(e: React.PointerEvent<HTMLDivElement>) {
    if (e.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    cancelAnimationFrame(quadro.current);
    quadro.current = requestAnimationFrame(() => aplicar(x, y));
  }

  return (
    <div
      className={`palco-3d ${className}`}
      onPointerMove={mover}
      onPointerLeave={() => {
        cancelAnimationFrame(quadro.current);
        aplicar(0, 0);
      }}
    >
      <div ref={dentro} className="inclina-3d">
        {children}
      </div>
    </div>
  );
}
