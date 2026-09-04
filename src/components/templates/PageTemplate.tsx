import { Container } from "@/components/atoms";
import { Card } from "@/components/molecules";

type PageTemplateProps = {
  eyebrow: string;
  title: string;
  description: string;
  items: {
    title: string;
    description: string;
  }[];
};

export const PageTemplate = ({
  eyebrow,
  title,
  description,
  items,
}: PageTemplateProps) => {
  return (
    <main className="min-h-screen py-12">
      <Container>
        <section className="rounded-lg bg-white p-8 shadow-sm sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-700">
            {eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
            {description}
          </p>
        </section>

        <section className="mt-8 grid gap-4 md:grid-cols-3">
          {items.map((item) => (
            <Card key={item.title} {...item} />
          ))}
        </section>
      </Container>
    </main>
  );
};
