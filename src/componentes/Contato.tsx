import { pagina } from "@/conteudo/pagina";
import { perfil } from "@/conteudo/perfil";
import { Capitulo } from "./Capitulo";
import { ContatoExe } from "./ContatoExe";

export function Contato() {
  const t = pagina.contato;
  return (
    <Capitulo id="contato" legenda={t.legenda} titulo={t.titulo} classeTitulo="contato-titulo">
      <div className="contato-grade">
        <ContatoExe />
        <div className="contato-lado panel-r">
          <p>{t.texto}</p>
          <a className="btn email-btn" href={`mailto:${perfil.email}`}>
            {perfil.email}
          </a>
          <div className="flex flex-wrap gap-3.5">
            <a className="btn btn-acao btn-p" style={{ rotate: "2deg", fontSize: 22 }} href={perfil.links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="btn btn-papel btn-p" style={{ rotate: "-1deg", fontSize: 22 }} href={perfil.links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </Capitulo>
  );
}

export function Rodape() {
  return (
    <footer className="rodape">
      <span>
        {perfil.nome}, {new Date().getFullYear()}
      </span>
      <span className="mono">{pagina.rodape}</span>
    </footer>
  );
}
