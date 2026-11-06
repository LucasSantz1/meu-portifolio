"use client";

import { useState } from "react";
import { pagina } from "@/conteudo/pagina";
import { perfil } from "@/conteudo/perfil";
import { montarMailto } from "./mailto";

const t = pagina.contato;

// contato.exe: formulário em terminal que abre o app de e-mail do visitante com a mensagem pronta.
export function ContatoExe() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  return (
    <form className="term-win contato-form panel-l" onSubmit={(e) => e.preventDefault()}>
      <div className="term-bar mono">
        <span>contato.exe</span>
        <span aria-live="polite">{mensagem ? "pronto" : "aguardando"}</span>
      </div>
      <div className="campos mono">
        <div className="field">
          <label htmlFor="f-nome">&gt; nome:</label>
          <input id="f-nome" type="text" autoComplete="name" placeholder={t.campos.nome} value={nome} onChange={(e) => setNome(e.target.value)} />
        </div>
        <div className="field">
          <label htmlFor="f-email">&gt; e-mail:</label>
          <input id="f-email" type="email" autoComplete="email" placeholder={t.campos.email} value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="field">
          <label htmlFor="f-msg">&gt; mensagem:</label>
          <textarea id="f-msg" rows={4} placeholder={t.campos.mensagem} value={mensagem} onChange={(e) => setMensagem(e.target.value)} />
        </div>
        <div className="contato-acao">
          <a
            className="btn btn-p"
            href={montarMailto(perfil.email, t.assunto, nome, email, mensagem)}
            style={{ ["--btn-shadow" as string]: "#FFFFFF", background: "#FFE24A", color: "#000000", borderColor: "#FFFFFF", fontSize: 22 }}
          >
            {t.botao}
          </a>
          <span>{t.ajuda}</span>
        </div>
      </div>
    </form>
  );
}
