// Capítulo da história: teia redonda presa ao fio lateral, legenda de narração e título grande.

type Props = {
  id: string;
  legenda: string;
  titulo: string;
  entrada?: "panel" | "fly-l";
  classeTitulo?: string;
  children: React.ReactNode;
};

export function Capitulo({ id, legenda, titulo, entrada = "panel", classeTitulo = "", children }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-titulo`} className="chapter">
      <div className={`chapter-head ${entrada}`}>
        <svg className="chapter-web" viewBox="0 0 60 60" aria-hidden>
          <g className="cw" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M30 30L58 30M30 30L49.8 49.8M30 30L30 58M30 30L10.2 49.8M30 30L2 30M30 30L10.2 10.2M30 30L30 2M30 30L49.8 10.2" />
            <path d="M52 30L45.6 45.6L30 52L14.4 45.6L8 30L14.4 14.4L30 8L45.6 14.4Z" />
            <path d="M42 30L38.5 38.5L30 42L21.5 38.5L18 30L21.5 21.5L30 18L38.5 21.5Z" />
          </g>
          <circle className="cd" cx="30" cy="30" r="6" strokeWidth="2.5" />
        </svg>
        <p className="cap">{legenda}</p>
        <h2 id={`${id}-titulo`} className={`sec-title ${classeTitulo}`}>
          {titulo}
        </h2>
      </div>
      {children}
    </section>
  );
}
