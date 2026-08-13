---
name: "[Nombre del Realtor] — Bienes Raíces Florida"
description: Web editorial premium para un Realtor residencial de Florida, tratada como una revista de arquitectura que además vende propiedades.
colors:
  bg: "#FAF7F2"
  bg-2: "#F3EEE4"
  surface: "#FFFFFF"
  ink: "#1A1815"
  ink-soft: "#332F29"
  muted: "#6B6558"
  accent: "#A67C3D"
  accent-2: "#2F4F4A"
  line: "rgba(26,24,21,0.12)"
typography:
  display:
    fontFamily: "Fraunces, ui-serif, Georgia, serif"
    fontWeight: 500
    lineHeight: 1.05
  body:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, system-ui, sans-serif"
    fontWeight: 400
    lineHeight: 1.6
  mono:
    fontFamily: "IBM Plex Mono, SFMono-Regular, ui-monospace, monospace"
    fontWeight: 500
    letterSpacing: "0.08em"
components:
  btn-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.surface}"
    typography: "{typography.mono}"
    padding: "1rem 1.6rem"
  btn-primary-hover:
    transform: "translateY(-4px)"
    boxShadow: "0 22px 44px rgba(26,24,21,0.18)"
  card-property:
    backgroundColor: "{colors.surface}"
    border: "1px solid {colors.line}"
  ref-badge:
    backgroundColor: "rgba(26,24,21,0.72)"
    textColor: "{colors.bg}"
    typography: "{typography.mono}"
---

# Design System: [Nombre del Realtor] — Bienes Raíces Florida

## Overview

**Creative North Star: "Editorial de Arquitectura y Luz"**

El sitio se comporta como una revista de arquitectura premium (Dwell / Architectural Digest) que vende propiedades, no como un sitio típico de Realtor. La fotografía es la marca — full-bleed, asimétrica, con espacio negativo generoso. Los datos de cada propiedad (m², precio, ubicación) se tratan como ficha técnica de arquitectura, en mono trackeado, nunca como texto de venta.

Rechazos confirmados: sin iconos genéricos de agente inmobiliario, sin gradientes turquesa/naranja de atardecer, sin tarjetas repetidas de 3 columnas, sin párrafos largos tipo "About", sin badges de confianza genéricos, sin emojis como iconos, sin efectos típicos de landing generada por IA.

**Key Characteristics:**
- Base editorial cálida (marfil + casi-negro cálido) con un único acento dominante (latón/sol) y un segundo acento deliberadamente raro (teal de anochecer) — misma lógica de "un color que domina, otro casi nunca" usada para dar coherencia sin sentirse plano.
- Fraunces (serif óptica cálida) para titulares grandes, Inter para cuerpo/UI, IBM Plex Mono en mayúsculas trackeadas para datos y etiquetas — nunca mezclado con sans genérico.
- Grid bento asimétrico (no 3-columnas repetidas) para propiedades destacadas; fotografía full-bleed con overlay para áreas de servicio.
- Efecto firma: hover de imagen con leve zoom + tilt 3D sutil (4°) en tarjetas de propiedad — sobrio, no chromatic-aberration ni efectos "wow" genéricos.
- Reveals de scroll universales (IntersectionObserver, umbral 0.01 + red de seguridad a 6s), cursor personalizado de dos círculos, marquesina de especialidades como divisor rítmico.

## Contenido provisional

Todo el contenido comercial (nombre, brokerage, licencia, ciudad, precios, bio, credenciales) es **placeholder claramente marcado** entre corchetes `[ ]`, hasta contar con datos reales del cliente. Las fotografías son de referencia (licencias CC0/BY/BY-SA, ver `creditos.html`), etiquetadas visualmente con la insignia "Imagen de referencia" en cada tarjeta — para que el reemplazo por fotografía real del cliente sea trivial: sustituir el archivo en `assets/img/` con el mismo nombre y quitar la insignia en `index.html`.

La sección de Testimonios se omitió intencionalmente (comentario en el HTML marca dónde iría) — se añadirá solo con testimonios reales de clientes.

## Hero

Composición adaptada de un componente de referencia de 21st.dev (un hero cinematográfico full-bleed) — reproducida en HTML/CSS/JS vanilla, sin adoptar React/Tailwind/shadcn ni la temática original del componente:

- **Foco asimétrico**: el sujeto de la fotografía se reencuadra por breakpoint vía `object-position` (más abajo y centrado en móvil, desplazado a la derecha en desktop), dejando siempre un lado despejado para el texto.
- **Scrim + viñeta direccionales**: degradado de arriba hacia abajo en móvil (el texto va encima), de izquierda a derecha en desktop (el texto va al lado) — nunca un overlay plano uniforme.
- **Zoom ambiental**: `transform: scale()` de 1 a 1.09 en 28s, `ease-in-out infinite alternate` — el "acercamiento y alejamiento" del componente original, solo con `transform` (nunca layout) y pausado bajo `prefers-reduced-motion`.
- **Grano sutil** (SVG turbulence, opacidad 0.05, `mix-blend-mode: overlay`) para la sensación de profundidad/cine sin coste de rendimiento de un shader real.
- Texto mínimo: nombre del Realtor (placeholder) + una línea + dos CTA (uno sólido, uno ghost) — sin kicker, sin bloques de texto.

Clases relevantes: `.hero`, `.hero-media`/`.hero-img`, `.hero-vignette`, `.hero-scrim`, `.hero-grain`, `.hero-inner`, `.btn-ghost-hero`.

## Colors

| Token | Hex | Uso |
|---|---|---|
| `--bg` | `#FAF7F2` | Fondo general — marfil cálido |
| `--surface` | `#FFFFFF` | Tarjetas, formularios |
| `--ink` | `#1A1815` | Texto principal, footer |
| `--muted` | `#6B6558` | Texto secundario, metadatos |
| `--accent` | `#A67C3D` | CTA, precios, hover, líneas de énfasis |
| `--accent-2` | `#2F4F4A` | Uso raro: hover en Áreas de Servicio |

## Typography

- **Display:** Fraunces 400–500, itálica para énfasis puntual (`<em>`).
- **Body/UI:** Inter 400–600.
- **Datos/etiquetas:** IBM Plex Mono 400–500, mayúsculas, tracking 0.06–0.14em.

## Componentes 21st.dev a integrar después

1. Hero cinematográfico de arquitectura/real estate (obligatorio, en espera de selección del cliente).
2. Showcase/galería de propiedades con reveal en hover (bento asimétrico ya construido como base).
3. Stat-reveal / scroll-triggered counters para datos visuales.
4. Contacto/CTA con microinteracciones premium, o carrusel de testimonios (en reserva).

Al integrar cualquier componente de 21st.dev: adaptar colores/tipografía a los tokens de este documento, conservar animaciones/interacciones de valor, optimizar performance, y asegurar que se sienta parte del mismo sistema — nunca una colección de piezas distintas.
