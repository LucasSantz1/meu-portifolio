import { existsSync } from "node:fs";
import { join } from "node:path";
import { pagina } from "@/conteudo/pagina";
import { PlayerMusica } from "./PlayerMusica";

// Só mostra o player se o arquivo de áudio existir em public/ (conferido no build).
export function BalaoMusica() {
  const m = pagina.musica;
  if (!existsSync(join(process.cwd(), "public", m.arquivo))) return null;
  return <PlayerMusica arquivo={m.arquivo} nome={m.nome} artista={m.artista} tocandoAgora={m.tocandoAgora} />;
}
