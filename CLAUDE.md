# Hollyscapes

Website for Holly's native garden design business in New Jersey. Fresh build. The goal is a calm, welcoming, hand-crafted site that reads like a real small business with a point of view, not a template. It should feel like a sage-green garden, not a cream page.

## What Changed From The Last Attempt (read this first)
The previous build was well-crafted but too cream. Cream was the canvas and sage was only an accent, so the whole page read as beige and boring. This build flips that: SAGE is the dominant surface and cream is the relief. See Palette Balance below, it is the most important rule on this page.

## The Business
Holly designs native gardens and coaches homeowners on creating them.

Services:
- Native garden design and coaching (NJ area)
- Garden maintenance and enhancement
- Bringing garden designs to life (installation)

Her values: native plants that belong in the local ecology, calm and welcoming spaces, working with people rather than at them.

## Who Edits This (Important)
- CK (developer) builds it. Holly (non-technical) maintains it through Pages CMS.
- Holly must be able to add a Showcase project, swap photos, and edit text and prices WITHOUT touching code or Git.
- Every piece of editable content lives in markdown or data files, exposed through a `.pages.yml` config so Pages CMS shows Holly friendly forms with drag-and-drop image upload.
- Never hardcode editable copy or showcase items inside component files where Holly cannot reach them.

## Stack
- Astro, static output. Component-driven so the bespoke design stays clean.
- Hosting: GitHub Pages (free). Custom domain: hollyscapes.com (CNAME plus GitHub Pages custom domain setting).
- Content editing: Pages CMS (app.pagescms.org), git-backed, no database, free.
- Contact form: Formspree free tier, posts to Holly's email. No backend, no server.
- Styling: plain CSS with custom properties for the palette. Keep dependencies minimal and maintainable.

## Pages
Home, About, Services, Showcase, Contact. Shared header nav and footer on every page.

- Home: sage hero (a one-line value statement on a green field), short welcome in Holly's voice, a glimpse of services, a few showcase highlights, a soft call to action toward Contact.
- About: Holly's story and philosophy on native gardens. First person, personal, patient.
- Services: the three services with descriptions and pricing. Each one explained in plain, warm language.
- Showcase: gallery of past and current work. Each project is a CMS-managed item (title, location, short description, photos). This is the page Holly updates most, so its CMS setup must be effortless.
- Contact: Formspree form (name, email, message) plus her email shown directly. Friendly and low-pressure.

## Design System (this is what keeps it from looking generic)
Aesthetic target: cottage core. Calm, welcoming, warm, organic. It should feel like a sunlit garden.

It is NOT: a corporate landscaping template, dark academia, an AI-default look, or cream-dominant.

### Palette
Sage family (the dominant surfaces):
- Sage field (main green sections, header): `#869A66`
- Deep sage (footer, strong bands, hero base): `#4F5C3A`
- Light sage (gentle bands, tints): `#D3DCBF`

Cream family (relief and card surfaces):
- Parchment: `#F7F3EA`
- Soft white (raised cards): `#FCFAF4`

Accent and text:
- Clay terracotta (CTAs, links, used sparingly): `#C0734F`
- Bark (body text on cream): `#3F392F`
- On sage fields use cream (`#F7F3EA`) for headings, and make sure body text has strong contrast (cream on deep sage, or bark on light sage).

### Palette Balance (the most important rule)
- Sage is the canvas. Cream is the relief. Sage-family backgrounds should dominate the page.
- The header, the hero, and the footer are all sage. The first screen a visitor sees must read as green, not cream.
- Section backgrounds alternate between sage bands and cream or light-sage sections as the user scrolls. Do not run long stretches of cream back to back.
- On sage sections, float cream or soft-white cards for any block of body copy, so green dominates the field while text stays easy to read.
- Keep sage soft and calm, never saturated corporate emerald. The goal is more green, not darker or heavier.

### Typography
- Headings: Fraunces (warm, organic, characterful old-style serif). Use the soft optical settings.
- Body: Mulish or Karla (clean, friendly humanist sans, readable for service and pricing copy).
- Generous line height. Comfortable measure. Type should breathe.

### Texture and Feel
- Generous whitespace. Airy, never cramped.
- Soft rounded corners on cards and images (8 to 16px). No hard rectangles.
- Natural, sunlit garden photography in rounded frames.
- Botanical line-art or pressed-leaf motifs as section dividers, used with restraint. (These worked in the last build, keep them.)
- Gentle hover transitions. Calm motion only. Nothing flashy.
- Soft, low shadows. Nothing harsh.

### Voice and Copy (realistic drafts, easy for Holly to replace)
- Write realistic, business-relevant draft copy in Holly's voice so the site looks and feels like a real, finished site in preview. Representative placeholder is good; a page full of empty brackets is not.
- The hard requirement is that every line of copy is EASY for Holly to replace. All narrative copy lives in the CMS-editable content files (markdown front-matter or data files exposed by `.pages.yml`), never hardcoded inside components. The test: Holly can change any sentence by editing one field in Pages CMS, without touching code.
- Flag draft copy clearly (for example a `draft: true` field in front-matter, or a short DRAFT note) so Holly knows which lines are stand-ins versus her final words.
- Tone: warm, personal, patient, first person, native-plant ethos, no corporate filler.

## Anti-Patterns (do not do)
- Cream-dominant layout with sage only as an accent. The page must read sage-forward.
- Generic stock hero plus three identical service cards.
- Bootstrap or default-framework appearance.
- Pure black text or pure white backgrounds.
- Cold corporate sans, corporate blue, or harsh borders.
- Burying copy in component files where Holly cannot reach it. All copy must be editable in Pages CMS.

## Content Config (CK to confirm; defaults in place)
- Pricing display: "starting at" ranges. Real numbers come from Holly. Use a clearly-marked draft figure until then.
- Assets: placeholder image slots Holly fills through Pages CMS. Drop a logo and real photos into `/public` when ready. A clean Fraunces wordmark works as a logo until a real one exists.

## Build Order
1. Scaffold the Astro project, set up GitHub Pages deploy and the hollyscapes.com domain config.
2. Establish the design tokens (palette plus fonts) as CSS custom properties before building any pages. Bake the sage-forward balance into the base layout (sage header and footer) from the start.
3. Build the shared layout, then the Home page. Stop and show a preview before continuing.
4. Build the remaining pages in order: About, Services, Showcase, Contact.
5. Move all editable copy and showcase items into markdown or data files.
6. Write `.pages.yml` so Pages CMS exposes: site text, services and pricing, and the Showcase collection (with image upload).
7. Wire the Formspree contact form to Holly's email.
8. Responsive pass (mobile first), then a polish pass on spacing, type rhythm, and imagery.

## Definition of Done
- Reads sage-forward and calm, meets the design system, mobile first and fast.
- Every line of copy is editable in Pages CMS, draft copy clearly flagged so Holly can replace it with her words in one edit.
- Holly can add a full Showcase project end to end in Pages CMS without help.
- Contact form delivers to her inbox.
- Live on hollyscapes.com via GitHub Pages.

## Working Style
- Build incrementally and show previews at natural checkpoints. Ask before introducing new dependencies or deviating from the design system.
- When in doubt, choose the calmer, warmer, greener, simpler option.
