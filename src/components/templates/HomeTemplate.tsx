import { Container } from "@/components/atoms";
import { CTAButton } from "@/components/atoms/CTAButton";
import { Card } from "@/components/molecules";
import Link from "next/link";

const cards = [
  {
    title: "Sitios modernos",
    description: "Paginas claras, rapidas y adaptables para presentar una marca.",
  },
  {
    title: "Componentes simples",
    description: "Bloques reutilizables para crecer sin complicar el codigo.",
  },
  {
    title: "Base ordenada",
    description: "Rutas, layout y estilos listos para seguir practicando.",
  },
];

export const HomeTemplate = () => {
  return (
    <main className="min-h-screen py-12">
      <Container>
        <section className="rounded-lg bg-white p-8 shadow-sm sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-700">
            Proyecto multipagina
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-bold leading-tight sm:text-5xl">
            Web simple con menu, secciones y paginas listas.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Una base rapida hecha con Next.js, componentes reutilizables y rutas
            estaticas para practicar o presentar un proyecto chico.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/servicios">
              <CTAButton>Ver servicios</CTAButton>
            </Link>
            <Link
              href="/contacto"
              className="rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-teal-600 hover:text-teal-700"
            >
              Contactar
            </Link>
          </div>
        </section>

        <section id="componentes" className="mt-8 grid gap-4 md:grid-cols-3">
          {cards.map((card) => (
            <Card key={card.title} {...card} />
          ))}
        </section>
      </Container>
    </main>
  );
};
