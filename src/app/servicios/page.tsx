import { PageTemplate } from "@/components/templates";

const services = [
  {
    title: "Diseno web",
    description: "Layouts prolijos, responsive y faciles de adaptar.",
  },
  {
    title: "Desarrollo frontend",
    description: "Componentes modernos con React, TypeScript y Next.js.",
  },
  {
    title: "Optimizacion",
    description: "Mejoras simples de velocidad, estructura y experiencia.",
  },
];

const ServiciosPage = () => {
  return (
    <PageTemplate
      eyebrow="Servicios"
      title="Soluciones digitales claras y rapidas."
      description="Servicios basicos para crear una presencia online ordenada sin sumar complejidad innecesaria."
      items={services}
    />
  );
};

export default ServiciosPage;
