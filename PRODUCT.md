# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Buyers and sellers of residential property in [Área de Servicio], Florida, evaluating a Realtor from the website alone before ever speaking to them — deciding whether this person feels trustworthy, exclusive, and worth a phone call. Secondary audience: people researching the Realtor by name after a referral.

## Product Purpose

A one-page marketing site for a Florida residential Realtor. The site exists to convert a visitor into a scheduled consultation by projecting premium, editorial-grade credibility — closer to an architecture magazine than a typical real estate template — and by showcasing properties and service areas primarily through photography rather than text.

## Positioning

"Editorial de Arquitectura y Luz" — the Realtor's site reads as a design-led publication that happens to sell property, not a stock real-estate template with trust badges and stat counters. Visual proof (large, asymmetric, full-bleed photography) carries more weight than adjectives or claimed statistics.

## Operating Context

Single page, no backend, no MLS/IDX integration yet (architecture prepared for it — see `DESIGN.md`). Visitor arrives, sees a placeholder Hero (reserved for a future 21st.dev component), scrolls through featured properties → about the Realtor → areas served → buying/selling process → gallery → contact form. No scheduling system; the contact form currently only simulates submission client-side.

## Capabilities and Constraints

- Static HTML/CSS/vanilla JS. No build step, no framework, no backend — deploys by dragging the folder to Hostinger or any static host.
- The Hero is a finished cinematic composition (ambient zoom, directional scrim, vignette, grain) adapted from a 21st.dev reference component into vanilla HTML/CSS/JS — see `DESIGN.md`. Brand text inside it (name, tagline) is still placeholder, same as the rest of the site.
- Contact form has no real backend — `initForm()` in `main.js` simulates a submission (validates, shows a status message) but sends nothing anywhere. Needs a real endpoint (Formspree, serverless function, etc.) before launch.
- No MLS/IDX feed connected. The five "featured properties" are static placeholder cards; swapping in a live feed later means replacing the `properties` array in `lib/manifest.js` and the corresponding markup in `index.html`, or wiring a real integration.
- Testimonials section intentionally omitted (see HTML comment in `index.html` marking where it would go) — add only once real client testimonials exist.

## Brand Commitments

- Name, brokerage, license number, service areas, specialization, bio, and all contact details are **explicitly bracketed placeholders** (`[Nombre del Realtor]`, `[Nombre del Brokerage]`, `FL #[XXXXXX]`, `[Ciudad, FL]`, etc.) — none of it is real, none of it should be mistaken for real. Fill in from the client before launch.
- Visual identity: warm ivory + near-black base, brass/sun accent as the dominant color, a deliberately rare dusk-teal secondary accent (used only in the Areas Served hover state) — Fraunces display serif + Inter body + IBM Plex Mono for data/labels. Full rationale in `DESIGN.md`.
- No invented commercial claims: no fabricated years of experience, transaction counts, awards, or sales figures anywhere on the site, including in placeholder copy.

## Evidence on Hand

- **Photography is entirely stock** (Openverse — Wikimedia/Flickr/StockSnap/Rawpixel, CC0/BY/BY-SA licensed, verified individually to exclude non-commercial and no-derivative licenses). None of it depicts the real Realtor, their real listings, or real Florida properties. Every placeholder photo carries a visible "Imagen de referencia" badge in the UI. Full attribution in `creditos.html` / `assets/credits.json`. Must be swapped for the client's real photography before the site reads as authentic.
- **Portrait is a generic stock headshot** (`assets/img/portrait-realtor.webp`), not the actual Realtor. Replace with a real professional photo before launch.
- **Contact info is a placeholder, confirmed not real**: phone, email, and office address are all bracketed. Do not treat as functioning contact details.
- **No testimonials exist** — the section was omitted rather than fabricated; add it only once real reviews are collected.
