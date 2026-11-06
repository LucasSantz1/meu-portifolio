"use client";

import { useEffect, useState } from "react";

// Hora local de Presidente Prudente, atualizada a cada 30 segundos.
export function Relogio({ fuso }: { fuso: string }) {
  const [hora, setHora] = useState<string | null>(null);

  useEffect(() => {
    const formato = new Intl.DateTimeFormat("pt-BR", { hour: "2-digit", minute: "2-digit", timeZone: fuso });
    const atualizar = () => setHora(formato.format(new Date()));
    atualizar();
    const id = setInterval(atualizar, 30_000);
    return () => clearInterval(id);
  }, [fuso]);

  return <time className="tabular-nums">{hora ?? "--:--"} BRT</time>;
}
