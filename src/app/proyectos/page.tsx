import { PageTemplate } from "@/components/templates";

const projects = [
  {
    title: "Landing comercial",
    description:
      "Pagina principal para mostrar una marca, producto o servicio.",
  },
  {
    title: "Portfolio personal",
    description: "Secciones para experiencia, trabajos destacados y contacto.",
  },
  {
    title: "Panel simple",
    description:
      "Vista inicial para organizar informacion y acciones importantes.",
  },
];

const ProyectosPage = () => {
  return (
    <PageTemplate
      eyebrow="Proyectos"
      title="Proyectos y ejercicios estudiantiles"
      description="Una coleccion corta de ideas que pueden convertirse en nuevas rutas, componentes o ejercicios."
      items={projects}
    />
  );
};

export default ProyectosPage;
