"use client";

import { useState } from "react";
import { ilustracoes, pagina } from "@/conteudo/pagina";
import { perfil } from "@/conteudo/perfil";
import { projetos, type Projeto } from "@/conteudo/projetos";

const t = pagina.projetos;

function IconeTeia() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19" />
      <path d="M12 7l3.5 1.5L17 12l-1.5 3.5L12 17l-3.5-1.5L7 12l1.5-3.5z" />
    </svg>
  );
}

// Ilustração do preview.png de cada projeto, até chegar o print real (campo `imagem`).
function Previa({ projeto }: { projeto: Projeto }) {
  if (projeto.imagem) {
    return (
      <figure className="ilus" style={{ rotate: "1deg" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={projeto.imagem} alt={projeto.legendaImagem} className="block w-full" />
      </figure>
    );
  }
  if (projeto.slug === "inspetor-de-emails") {
    const d = ilustracoes["inspetor-de-emails"];
    return (
      <figure className="ilus" style={{ rotate: "1.5deg" }} aria-label={projeto.legendaImagem}>
        <div className="ilus-inbox-topo">
          <span className="hq text-2xl tracking-wide">{d.titulo}</span>
          <span className="text-sm font-bold">{d.contagem}</span>
        </div>
        {d.mensagens.map((m) => (
          <div key={m.de} className={`ilus-msg ${m.golpe ? "golpe" : ""}`}>
            <span className="flex flex-wrap items-center gap-2">
              <span className="ilus-de">{m.de}</span>
              {m.golpe && <span className="ilus-selo">{d.alerta}</span>}
            </span>
            <span className="ilus-hora">{m.hora}</span>
            <span className="ilus-assunto">{m.assunto}</span>
          </div>
        ))}
      </figure>
    );
  }
  if (projeto.slug === "eficiencia-energetica") {
    const d = ilustracoes["eficiencia-energetica"];
    return (
      <div className="ilus ilus-energia">
        <div className="ilus-conta">
          {d.conta.map((parte) => (
            <span key={parte}>{parte}</span>
          ))}
        </div>
        <div role="img" aria-label="Gráfico ilustrativo de consumo por aparelho, com o maior destacado" className="ilus-barras">
          {d.barras.map((h, i) => (
            <span key={i} style={{ height: `${h}%` }} />
          ))}
        </div>
        <span className="text-[15px] font-extrabold">{d.rodape}</span>
      </div>
    );
  }
  if (projeto.slug === "monitor-atendimentos") {
    const d = ilustracoes["monitor-atendimentos"];
    return (
      <div className="ilus ilus-monitor">
        <span className="hq text-2xl tracking-wide">{d.titulo}</span>
        <div className="ilus-linha" style={{ width: "80%" }} />
        <div className="ilus-linha" style={{ width: "60%" }} />
        <div className="ilus-linha" style={{ width: "70%" }} />
        <div className="ilus-aviso">
          <svg aria-hidden viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="#000000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
          </svg>
          <div className="flex flex-col gap-0.5">
            <span className="font-extrabold">{d.aviso}</span>
            <span className="text-sm">{d.detalhe}</span>
          </div>
        </div>
      </div>
    );
  }
  return null;
}

function Readme({ projeto }: { projeto: Projeto }) {
  return (
    <div className="md">
      <h3 className="md-h">
        <span className="hash mono">#</span> {projeto.nome}
      </h3>
      <p className="md-p md-resumo">{projeto.resumo}</p>
      <p className="md-h2 mono">
        <span className="hash">##</span> Problema
      </p>
      <p className="md-p">{projeto.problema}</p>
      <p className="md-h2 mono">
        <span className="hash">##</span> Arquitetura
      </p>
      <ul className="md-p">
        {projeto.arquitetura.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p className="md-h2 mono">
        <span className="hash">##</span> Decisões
      </p>
      <ul className="md-p">
        {projeto.decisoes.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="topicos mono">
        {projeto.topicos.map((tp) => (
          <span key={tp} className="topic">
            {tp}
          </span>
        ))}
      </div>
      <div className="md-botoes">
        {projeto.producao && (
          <a className="btn btn-acao btn-p" href={projeto.producao} target="_blank" rel="noreferrer">
            {t.verNoAr}
          </a>
        )}
        {projeto.repositorio ? (
          <a className="btn btn-branco btn-p" href={projeto.repositorio} target="_blank" rel="noreferrer">
            {t.repositorio}
          </a>
        ) : (
          projeto.status === "uso interno" && <span className="md-privado mono">{`${t.privado} · ${projeto.status}`}</span>
        )}
      </div>
    </div>
  );
}

// Janela de editor com uma aba por projeto. Abas e árvore de arquivos trocam o projeto visível.
export function EditorProjetos() {
  const [ativo, setAtivo] = useState(projetos[0].slug);
  const projeto = projetos.find((p) => p.slug === ativo) ?? projetos[0];

  function teclas(e: React.KeyboardEvent, i: number) {
    const passo = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!passo) return;
    const proximo = projetos[(i + passo + projetos.length) % projetos.length];
    setAtivo(proximo.slug);
    document.getElementById(`aba-${proximo.slug}`)?.focus();
  }

  return (
    <div className="ide panel">
      <div className="ide-bar">
        <span className="ide-caminho mono">
          <IconeTeia />
          ~/lucas/projetos/{projeto.slug}/README.md
        </span>
        <span className="hide-sm">{projetos.length} projetos</span>
      </div>
      <div className="ide-tabs" role="tablist" aria-label="Projetos">
        {projetos.map((p, i) => (
          <button
            key={p.slug}
            id={`aba-${p.slug}`}
            type="button"
            role="tab"
            className="tab mono"
            aria-selected={p.slug === ativo}
            aria-controls="painel-projeto"
            tabIndex={p.slug === ativo ? 0 : -1}
            onClick={() => setAtivo(p.slug)}
            onKeyDown={(e) => teclas(e, i)}
          >
            {p.slug}
          </button>
        ))}
      </div>
      <div className="ide-body">
        <nav className="ide-side mono" aria-label="Arquivos dos projetos">
          <p className="side-h">{t.explorador}</p>
          <p className="m-0 mb-1 font-bold">▾ projetos</p>
          {projetos.map((p) => (
            <div key={p.slug}>
              <button type="button" className="tree-btn mono" aria-current={p.slug === ativo} onClick={() => setAtivo(p.slug)}>
                ▸ {p.slug}/
              </button>
              {p.slug === ativo && (
                <div className="tree-sub">
                  README.md
                  <br />
                  preview.png
                </div>
              )}
            </div>
          ))}
          <div className="ide-agora">
            <p className="side-h">{t.agora}</p>
            <p>{perfil.agora}</p>
          </div>
        </nav>
        <div id="painel-projeto" className="ide-main" role="tabpanel" aria-labelledby={`aba-${projeto.slug}`}>
          <Readme projeto={projeto} />
          <div>
            <p className="preview-label mono">{t.previa}</p>
            <Previa projeto={projeto} />
          </div>
        </div>
      </div>
      <div className="ide-status mono">
        <span className="flex flex-wrap gap-x-[18px] gap-y-1.5">
          <span>⎇ main</span>
          <span>README.md</span>
        </span>
        <span>{projeto.stack.length > 0 ? projeto.stack.slice(0, 4).join(", ") : projeto.tipo}</span>
      </div>
    </div>
  );
}
