"use client";

import { useRef, useState } from "react";

type Props = { arquivo: string; nome: string; artista: string; tocandoAgora: string };

// Balão de música flutuante. Nunca toca sozinho (navegadores bloqueiam autoplay com som): só no clique.
export function PlayerMusica({ arquivo, nome, artista, tocandoAgora }: Props) {
  const audio = useRef<HTMLAudioElement>(null);
  // Começa minimizado (disco no canto): aberto, o balão cobriria o botão do currículo no topo.
  const [aberto, setAberto] = useState(false);
  const [tocando, setTocando] = useState(false);
  const [progresso, setProgresso] = useState(0);

  function alternar() {
    const a = audio.current;
    if (!a) return;
    if (a.paused) a.play().then(() => setTocando(true)).catch(() => setTocando(false));
    else {
      a.pause();
      setTocando(false);
    }
  }

  function buscar(valor: number) {
    const a = audio.current;
    if (a?.duration) a.currentTime = (valor / 100) * a.duration;
    setProgresso(valor);
  }

  return (
    <div className="player">
      <audio
        ref={audio}
        src={arquivo}
        loop
        preload="metadata"
        onTimeUpdate={(e) => {
          const a = e.currentTarget;
          if (a.duration) setProgresso((a.currentTime / a.duration) * 100);
        }}
        onPause={() => setTocando(false)}
        onPlay={() => setTocando(true)}
      />

      {aberto ? (
        <div className="player-balao player-in" role="region" aria-label="Player de música">
          <svg aria-hidden viewBox="0 0 40 30" className="player-rabo">
            <path d="M6 1 L4 28 L30 1" strokeWidth="3" strokeLinejoin="round" />
          </svg>
          <div className="flex items-center gap-3">
            <button type="button" className="player-play" onClick={alternar} aria-label={tocando ? "Pausar música" : "Tocar música"}>
              <svg aria-hidden viewBox="0 0 24 24" width="22" height="22">
                {tocando ? (
                  <>
                    <rect x="6" y="5" width="4" height="14" />
                    <rect x="14" y="5" width="4" height="14" />
                  </>
                ) : (
                  <path d="M8 5v14l11-7z" />
                )}
              </svg>
            </button>
            <div className="flex min-w-0 flex-1 flex-col gap-0.5">
              <span className="text-[13px] font-medium text-[var(--muted)]">{tocandoAgora}</span>
              <span className="player-nome">{nome}</span>
              <span className="truncate text-sm font-bold">{artista}</span>
            </div>
            <div className={`eq ${tocando ? "eq-on" : ""}`} aria-hidden>
              <span />
              <span />
              <span />
              <span />
            </div>
            <button type="button" className="player-min" onClick={() => setAberto(false)} aria-label="Minimizar player">
              <svg aria-hidden viewBox="0 0 24 24" width="20" height="20" fill="none" strokeWidth="2.5" strokeLinecap="round">
                <path d="M6 12h12" />
              </svg>
            </button>
          </div>
          <label className="flex flex-col">
            <span className="so-leitor">Posição da música</span>
            <input type="range" min="0" max="100" step="0.1" value={progresso} onChange={(e) => buscar(Number(e.target.value))} className="player-barra" />
          </label>
        </div>
      ) : (
        <button type="button" className="player-disco player-in" onClick={() => setAberto(true)} aria-label={`Abrir player de música (${nome})`}>
          <svg className={tocando ? "spin" : ""} aria-hidden viewBox="0 0 24 24" width="30" height="30" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18V5l12-2v13" />
            <circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="16" r="3" />
          </svg>
        </button>
      )}
    </div>
  );
}
