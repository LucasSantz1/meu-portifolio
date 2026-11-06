import { trajetoria } from "@/conteudo/carreira";
import { pagina } from "@/conteudo/pagina";
import { Capitulo } from "./Capitulo";

// Trajetória em 5 quadros numerados de HQ. O último (atual) fica em destaque.
export function Trajetoria() {
  return (
    <Capitulo id="trajetoria" legenda={pagina.trajetoria.legenda} titulo={pagina.trajetoria.titulo}>
      <ol className="quadros">
        {trajetoria.map((q, i) => (
          <li
            key={q.titulo}
            className={`quadro ${q.atual ? "atual" : ""} ${i === 0 ? "panel-l" : i === trajetoria.length - 1 ? "panel-r" : "panel"}`}
          >
            <span className="quadro-n">{i + 1}</span>
            <span className="quadro-ano">{q.periodo}</span>
            <span className="quadro-titulo">{q.titulo}</span>
            <span className="quadro-texto">{q.texto}</span>
          </li>
        ))}
      </ol>
    </Capitulo>
  );
}
