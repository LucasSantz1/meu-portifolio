import { Cabecalho } from "@/componentes/Cabecalho";
import { Contato, Rodape } from "@/componentes/Contato";
import { Hero } from "@/componentes/Hero";
import { Projetos } from "@/componentes/Projetos";
import { Sobre } from "@/componentes/Sobre";
import { Stack } from "@/componentes/Stack";
import { Formacao, Trajetoria } from "@/componentes/Trajetoria";

export default function Inicio() {
  return (
    <>
      <a
        href="#projetos"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-ink focus:px-3 focus:py-2 focus:text-canvas"
      >
        Pular para os projetos
      </a>
      <Cabecalho />
      <div className="mx-auto max-w-[1240px]">
        <main>
          <Hero />
          <Projetos />
          <Stack />
          <Trajetoria />
          <Sobre />
          <Formacao />
          <Contato />
        </main>
        <Rodape />
      </div>
    </>
  );
}
