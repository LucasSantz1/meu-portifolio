// Moldura padrão de cada seção: título de capa de gibi e, se tiver, uma descrição curta.

type Props = {
  id: string;
  titulo: string;
  descricao?: string;
  children: React.ReactNode;
};

export function Secao({ id, titulo, descricao, children }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-titulo`} className="scroll-mt-28 px-5 pt-16 pb-6 md:scroll-mt-20 md:px-10 md:pt-20 md:pb-8">
      <header className="mb-8 max-w-[60ch] md:mb-10">
        <h2 id={`${id}-titulo`} className="titulo-hq text-[2.75rem] md:text-[4rem]">
          {titulo}
        </h2>
        {descricao && <p className="mt-4 text-lg">{descricao}</p>}
      </header>
      {children}
    </section>
  );
}
