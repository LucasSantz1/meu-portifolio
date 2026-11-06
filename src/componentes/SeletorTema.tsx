"use client";

import { useEffect, useState } from "react";

type Tema = "padrao" | "claro" | "escuro";

const opcoes: { valor: Tema; rotulo: string; amostra: string; borda?: string }[] = [
  { valor: "padrao", rotulo: "Tema padrão", amostra: "linear-gradient(135deg, #D7141E 50%, #12307A 50%)" },
  { valor: "claro", rotulo: "Tema claro", amostra: "linear-gradient(135deg, #E0177A 50%, #2FD0E0 50%)" },
  { valor: "escuro", rotulo: "Tema escuro", amostra: "linear-gradient(135deg, #000000 50%, #FFFFFF 50%)", borda: "#9C9C9C" },
];

// Seletor de tema: padrão, claro ou escuro. Salva a escolha no localStorage.
export function SeletorTema() {
  const [tema, setTema] = useState<Tema>("padrao");

  useEffect(() => {
    const atual = document.documentElement.dataset.theme;
    if (atual === "claro" || atual === "escuro") setTema(atual);
  }, []);

  function escolher(novo: Tema) {
    setTema(novo);
    document.documentElement.dataset.theme = novo;
    try {
      localStorage.setItem("tema", novo);
    } catch {
      // Sem localStorage (aba anônima, por exemplo): o tema vale só pra esta visita.
    }
  }

  return (
    <div role="group" aria-label="Tema do site" className="temas">
      {opcoes.map((o) => (
        <button
          key={o.valor}
          type="button"
          className="seg"
          aria-pressed={tema === o.valor}
          aria-label={o.rotulo}
          title={o.rotulo}
          onClick={() => escolher(o.valor)}
        >
          <span className="swatch" style={{ background: o.amostra, borderColor: o.borda }} />
        </button>
      ))}
    </div>
  );
}
