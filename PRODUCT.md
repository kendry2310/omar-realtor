# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Buyers and sellers of residential property in Tampa, Miami, Palm Beach, and Hialeah, Florida, evaluating a Realtor from the website alone before ever speaking to them — deciding whether this person feels trustworthy, exclusive, and worth a phone call. Secondary audience: people researching the Realtor by name after a referral.

## Product Purpose

A one-page marketing site for a Florida residential Realtor. The site exists to convert a visitor into a scheduled consultation by projecting premium, editorial-grade credibility — closer to an architecture magazine than a typical real estate template — and by showcasing properties and service areas primarily through photography rather than text.

## Positioning

"Editorial de Arquitectura y Luz" — the Realtor's site reads as a design-led publication that happens to sell property, not a stock real-estate template with trust badges and stat counters. Visual proof (large, asymmetric, full-bleed photography) carries more weight than adjectives or claimed statistics.

## Operating Context

Single page, no backend, no MLS/IDX integration yet (architecture prepared for it — see `DESIGN.md`). Visitor arrives at the cinematic Hero, scrolls through featured properties → about the Realtor → areas served (Tampa, Miami, Palm Beach, Hialeah) → buying/selling process → gallery → contact form. Property, area, and gallery photos open in a lightbox for a closer look. No scheduling system; the contact form currently only simulates submission client-side.

## Capabilities and Constraints

- Static HTML/CSS/vanilla JS. No build step, no framework, no backend — deploys by dragging the folder to Hostinger or any static host.
- The Hero is a finished cinematic composition (ambient zoom, directional scrim, vignette, grain) adapted from a 21st.dev reference component into vanilla HTML/CSS/JS — see `DESIGN.md`. Brand text inside it (name, tagline) is still placeholder, same as the rest of the site.
- Contact form has no real backend — `initForm()` in `main.js` simulates a submission (validates, shows a status message) but sends nothing anywhere. Needs a real endpoint (Formspree, serverless function, etc.) before launch.
- No MLS/IDX feed connected. The five "featured properties" are static placeholder cards; swapping in a live feed later means replacing the `properties` array in `lib/manifest.js` and the corresponding markup in `index.html`, or wiring a real integration.
- Testimonials section intentionally omitted (see HTML comment in `index.html` marking where it would go) — add only once real client testimonials exist.

## Brand Commitments

- Name ("Omar Realtor") and service areas (Tampa, Miami, Palm Beach, Hialeah) are confirmed real, client-provided. Brokerage, license number, specialization, bio, and contact details remain **explicitly bracketed placeholders** (`[Nombre del Brokerage]`, `FL #[XXXXXX]`, etc.) — fill in from the client before launch.
- Visual identity: warm ivory + near-black base, brass/sun accent as the dominant color, a deliberately rare dusk-teal secondary accent (used only in the Areas Served hover state) — Fraunces display serif + Inter body + IBM Plex Mono for data/labels. Full rationale in `DESIGN.md`.
- No invented commercial claims: no fabricated years of experience, transaction counts, awards, or sales figures anywhere on the site, including in placeholder copy.

## Evidence on Hand

- **Photography is entirely stock** (Openverse — Wikimedia/Flickr/StockSnap/Rawpixel, CC0/BY/BY-SA licensed, verified individually to exclude non-commercial and no-derivative licenses). The four Areas Served photos are genuine, correctly-identified photography of Tampa, Miami, Palm Beach, and Hialeah — real cities, real images — but still not the Realtor's own photography. Everything else (hero, featured properties, gallery, portrait) is generic stock standing in for real listings/photos and carries a visible "Imagen de referencia" badge in the UI. Full attribution in `creditos.html` / `assets/credits.json`. Must be swapped for the client's real photography before the site reads as authentic.
- **Portrait is a generic stock headshot** (`assets/img/portrait-realtor.webp`), not the actual Realtor. It appears twice — About section and the new Hero agent card — deliberately reusing the same photo both places so "Omar" is a consistent face across the site rather than two different stock men. The client asked for a black suit specifically; an extensive search (20+ queries) turned up nothing usable under a free commercial license, and a digital recolor attempt looked artificial and was discarded — the client chose to keep this photo (gray/charcoal suit) for consistency instead. Replace both instances with a real photo of Omar before launch.
- **Contact info is a placeholder, confirmed not real**: phone, email, and office address are all bracketed. Do not treat as functioning contact details.
- **No testimonials exist** — the section was omitted rather than fabricated; add it only once real reviews are collected.
