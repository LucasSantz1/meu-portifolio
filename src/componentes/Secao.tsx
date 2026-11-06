// Moldura padrão de cada seção: linha de cima, cruzinhas nos cantos e o cabeçalho com número.

type Props = {
  id: string;
  numero: string;
  rotulo: string;
  titulo: string;
  descricao?: string;
  children: React.ReactNode;
};

export function Secao({ id, numero, rotulo, titulo, descricao, children }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-titulo`} className="relative scroll-mt-28 md:scroll-mt-16 border-t border-hairline">
      <span aria-hidden className="cruz -top-[6px] -left-[6px]" />
      <span aria-hidden className="cruz -top-[6px] -right-[6px]" />
      <div className="px-6 pt-20 pb-24 md:px-12 md:pt-24 md:pb-28">
        <header className="mb-12 grid gap-4 md:mb-16 md:grid-cols-12 md:gap-8">
          <p className="rotulo pt-2 text-muted md:col-span-3">
            <span className="text-ink">{numero}</span>
            <span className="mx-2 text-faint">/</span>
            {rotulo}
          </p>
          <div className="md:col-span-9">
            <h2 id={`${id}-titulo`} className="titulo-secao text-[1.875rem] md:text-[2.5rem]">
              {titulo}
            </h2>
            {descricao && <p className="mt-4 max-w-[60ch] text-lg">{descricao}</p>}
          </div>
        </header>
        {children}
      </div>
    </section>
  );
}
