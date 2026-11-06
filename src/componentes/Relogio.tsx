"use client";

import { useEffect, useState } from "react";

// Hora local de Presidente Prudente, atualizada a cada 30 segundos.
export function Relogio({ fuso }: { fuso: string }) {
  const [agora, setAgora] = useState<Date | null>(null);

  useEffect(() => {
    const atualizar = () => setAgora(new Date());
    atualizar();
    const id = setInterval(atualizar, 30_000);
    return () => clearInterval(id);
  }, []);

  // Antes de carregar o JavaScript não há hora certa pra mostrar; o espaço fica reservado.
  if (!agora) return <span className="inline-block w-[5ch]" aria-hidden />;

  const hora = new Intl.DateTimeFormat("pt-BR", { hour: "2-digit", minute: "2-digit", timeZone: fuso }).format(agora);
  return (
    <time dateTime={agora.toISOString()} className="tabular-nums">
      {hora}
    </time>
  );
}
