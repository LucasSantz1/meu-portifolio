import { Abertura } from "@/componentes/Abertura";
import { Cabecalho } from "@/componentes/Cabecalho";
import { Contato, Rodape } from "@/componentes/Contato";
import { Hero } from "@/componentes/Hero";
import { Projetos } from "@/componentes/Projetos";
import { Sobre } from "@/componentes/Sobre";
import { Stack } from "@/componentes/Stack";
import { Trajetoria } from "@/componentes/Trajetoria";
import { VoltarAoTopo } from "@/componentes/VoltarAoTopo";

export default function Inicio() {
  return (
    <>
      <a
        href="#projetos"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[110] focus:bg-[var(--accent2)] focus:px-3 focus:py-2 focus:font-bold focus:text-[var(--on-accent2)]"
      >
        Pular para os projetos
      </a>
      <div className="progress" aria-hidden />
      <Abertura />
      <Cabecalho />
      <main className="mx-auto max-w-[1280px] px-6 pt-6 pb-[140px]">
        <Hero />
        <div className="story">
          <div className="story-thread" aria-hidden>
            <span className="thread-tip" />
          </div>
          <Projetos />
          <Stack />
          <Trajetoria />
          <Sobre />
          <Contato />
        </div>
        <Rodape />
      </main>
      <VoltarAoTopo />
    </>
  );
}
