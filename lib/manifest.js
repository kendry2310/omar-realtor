(function () {
  "use strict";

  window.__BRAND__ = {
    name: "Omar Realtor",
    brokerage: "[Nombre del Brokerage]",
    license: "FL Lic. Inmobiliaria #[XXXXXX]",
    tagline: "Bienes Raíces Residenciales · Florida",
    statement: "Arquitectura, luz y un lugar al que llamar hogar.",

    nav: [
      { label: "Propiedades", href: "#propiedades" },
      { label: "Sobre mí", href: "#sobre-mi" },
      { label: "Ciudades", href: "#areas" },
      { label: "Proceso", href: "#proceso" },
      { label: "Contacto", href: "#contacto" }
    ],

    specialties: [
      "RESIDENCIAL", "LUJO", "WATERFRONT", "CONDOMINIOS", "REUBICACIÓN", "NUEVA CONSTRUCCIÓN", "INVERSIÓN"
    ],

    properties: [
      {
        id: "prop-01",
        title: "Residencia Contemporánea",
        location: "Tampa, FL",
        price: "Precio a consultar",
        beds: "—", baths: "—", area: "—",
        photo: "assets/img/featured-02.webp",
        alt: "Fachada de vivienda blanca de estilo mediterráneo — fotografía de referencia",
        placeholder: true
      },
      {
        id: "prop-02",
        title: "Villa con Piscina Infinita",
        location: "Palm Beach, FL",
        price: "Precio a consultar",
        beds: "—", baths: "—", area: "—",
        photo: "assets/img/featured-04.webp",
        alt: "Piscina infinita frente a residencia mediterránea — fotografía de referencia",
        placeholder: true
      },
      {
        id: "prop-03",
        title: "Cocina de Autor",
        location: "Miami, FL",
        price: "Precio a consultar",
        beds: "—", baths: "—", area: "—",
        photo: "assets/img/featured-03.webp",
        alt: "Cocina moderna con isla de mármol — fotografía de referencia",
        placeholder: true
      },
      {
        id: "prop-04",
        title: "Interior Minimalista",
        location: "Hialeah, FL",
        price: "Precio a consultar",
        beds: "—", baths: "—", area: "—",
        photo: "assets/img/featured-01.webp",
        alt: "Sala de estar minimalista con luz natural — fotografía de referencia",
        placeholder: true
      },
      {
        id: "prop-05",
        title: "Suite Principal",
        location: "Miami, FL",
        price: "Precio a consultar",
        beds: "—", baths: "—", area: "—",
        photo: "assets/img/featured-05.webp",
        alt: "Dormitorio principal con luz natural — fotografía de referencia",
        placeholder: true
      }
    ],

    realtor: {
      photo: "assets/img/portrait-realtor.webp",
      alt: "Retrato profesional — fotografía de referencia, a sustituir por foto real",
      bio: "Un enfoque personal, atento a los detalles y a las personas detrás de cada decisión inmobiliaria. Cada propiedad se presenta con la misma dedicación: la de un hogar propio.",
      credentials: [
        { label: "Licencia", value: "FL #[XXXXXX]" },
        { label: "Brokerage", value: "[Nombre del Brokerage]" },
        { label: "Especialización", value: "[Residencial / Lujo / Waterfront]" },
        { label: "Idiomas", value: "[Español, Inglés]" }
      ]
    },

    areas: [
      { id: "area-tampa", name: "Tampa", photo: "assets/img/city-tampa.webp", alt: "Tampa, Florida — skyline junto al río Hillsborough al atardecer" },
      { id: "area-miami", name: "Miami", photo: "assets/img/city-miami.webp", alt: "Miami, Florida — skyline del centro al atardecer" },
      { id: "area-palmbeach", name: "Palm Beach", photo: "assets/img/city-palmbeach.webp", alt: "Palm Beach, Florida — vista aérea costera de residencias de lujo" },
      { id: "area-hialeah", name: "Hialeah", photo: "assets/img/city-hialeah.webp", alt: "Hialeah, Florida — entrada histórica de Hialeah Park" }
    ],

    process: [
      { n: "01", title: "Consulta inicial", text: "Escuchamos tus objetivos y evaluamos las posibilidades reales." },
      { n: "02", title: "Estrategia", text: "Valoración, posicionamiento y un plan de acción a medida." },
      { n: "03", title: "Exposición", text: "Fotografía cuidada, marketing dirigido y visibilidad cualificada." },
      { n: "04", title: "Negociación", text: "Cada oferta se maneja con visión, datos y cuidado por tu interés." },
      { n: "05", title: "Cierre", text: "Acompañamiento cercano hasta la firma final." }
    ],

    gallery: [
      { photo: "assets/img/gallery-01.webp", alt: "Detalle arquitectónico de cubierta al atardecer — fotografía de referencia" },
      { photo: "assets/img/gallery-02.webp", alt: "Comedor moderno con luz natural — fotografía de referencia" },
      { photo: "assets/img/gallery-03.webp", alt: "Fachada de vidrio moderna al atardecer — fotografía de referencia" }
    ],

    cta: {
      photo: "assets/img/cta-bg.webp",
      alt: "Residencia iluminada al anochecer — fotografía de referencia",
      heading: "Hablemos de tu próximo paso.",
      buttonLabel: "Agendar una consulta"
    },

    contact: {
      phone: "[(XXX) XXX-XXXX]",
      email: "[correo@dominio.com]",
      office: "[Dirección de la oficina], FL [XXXXX]",
      hours: "Lunes – Viernes · [Horario a confirmar]"
    },

    social: [
      { label: "Instagram", href: "#" },
      { label: "Facebook", href: "#" },
      { label: "LinkedIn", href: "#" }
    ]
  };
})();
