import { PageTemplate } from "@/components/templates";

const contactItems = [
  {
    title: "Email",
    description: "contacto@gds-studio.com",
  },
  {
    title: "Ubicacion",
    description: "Cordoba, Argentina.",
  },
  {
    title: "Horario",
    description: "Lunes a viernes de 9 a 18 hs.",
  },
];

const ContactoPage = () => {
  return (
    <PageTemplate
      eyebrow="Contacto"
      title="Hablemos del proximo proyecto."
      description="Datos de contacto de ejemplo para completar la estructura multipagina."
      items={contactItems}
    />
  );
};

export default ContactoPage;
