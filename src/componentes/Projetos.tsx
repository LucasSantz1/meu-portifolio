import { pagina } from "@/conteudo/pagina";
import { Capitulo } from "./Capitulo";
import { EditorProjetos } from "./EditorProjetos";

export function Projetos() {
  return (
    <Capitulo id="projetos" legenda={pagina.projetos.legenda} titulo={pagina.projetos.titulo}>
      <EditorProjetos />
    </Capitulo>
  );
}
