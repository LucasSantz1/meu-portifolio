"use client";

import { useEffect, useState } from "react";
import { Monitor, Moon, Sun } from "lucide-react";

type Tema = "auto" | "claro" | "escuro";

const opcoes: { valor: Tema; rotulo: string; Icone: typeof Sun }[] = [
  { valor: "auto", rotulo: "Automático", Icone: Monitor },
  { valor: "claro", rotulo: "Claro", Icone: Sun },
  { valor: "escuro", rotulo: "Escuro", Icone: Moon },
];

function ler(): Tema {
  try {
    const salvo = localStorage.getItem("tema");
    return salvo === "claro" || salvo === "escuro" ? salvo : "auto";
  } catch {
    return "auto";
  }
}

// Seletor de aparência: automático (segue o sistema), claro ou escuro.
export function SeletorTema() {
  const [tema, setTema] = useState<Tema>("auto");

  useEffect(() => setTema(ler()), []);

  function escolher(novo: Tema) {
    setTema(novo);
    const raiz = document.documentElement;
    if (novo === "auto") delete raiz.dataset.tema;
    else raiz.dataset.tema = novo;
    try {
      if (novo === "auto") localStorage.removeItem("tema");
      else localStorage.setItem("tema", novo);
    } catch {
      // Sem localStorage (aba anônima, por exemplo): o tema vale só pra esta visita.
    }
  }

  return (
    <div role="radiogroup" aria-label="Aparência" className="flex items-center rounded-full border-2 border-borda p-0.5">
      {opcoes.map(({ valor, rotulo, Icone }) => {
        const ativo = tema === valor;
        return (
          <button
            key={valor}
            type="button"
            role="radio"
            aria-checked={ativo}
            aria-label={rotulo}
            title={rotulo}
            onClick={() => escolher(valor)}
            className={`grid size-8 place-items-center rounded-full transition-colors ${
              ativo ? "bg-ink text-canvas" : "text-muted hover:text-ink"
            }`}
          >
            <Icone aria-hidden size={14} strokeWidth={1.75} />
          </button>
        );
      })}
    </div>
  );
}
