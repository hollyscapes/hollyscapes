import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/* ------------------------------------------------------------------ */
/* Shared building blocks                                              */
/* ------------------------------------------------------------------ */

const ctaSchema = z.object({
  heading: z.string(),
  body: z.string().optional(),
  cta_label: z.string(),
  cta_href: z.string(),
});

const heroSchema = z.object({
  eyebrow: z.string().optional(),
  headline: z.string(),
  subhead: z.string().optional(),
  cta_label: z.string().optional(),
  cta_href: z.string().optional(),
});

/* ------------------------------------------------------------------ */
/* site — shared header/footer/contact copy (single entry)             */
/* ------------------------------------------------------------------ */

const site = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/site" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    contact_email: z.string(),
    nav: z.array(
      z.object({ label: z.string(), href: z.string() }),
    ),
    footer: z.object({
      tagline: z.string(),
      signoff: z.string(),
    }),
  }),
});

/* ------------------------------------------------------------------ */
/* pages — one markdown entry per page, discriminated by `template`.   */
/* Each page-specific schema is tight so Pages CMS can map cleanly.    */
/* ------------------------------------------------------------------ */

const homePageSchema = z.object({
  template: z.literal("home"),
  draft: z.boolean().default(false),
  hero: heroSchema.extend({
    cta_label: z.string(),
    cta_href: z.string(),
  }),
  welcome: z.object({
    eyebrow: z.string().optional(),
    heading: z.string(),
    body: z.string(),
    signoff: z.string().optional(),
  }),
  services_glimpse: z.object({
    eyebrow: z.string().optional(),
    heading: z.string(),
    intro: z.string().optional(),
    items: z.array(z.object({ title: z.string(), blurb: z.string() })),
    link_label: z.string(),
    link_href: z.string(),
  }),
  showcase_glimpse: z.object({
    eyebrow: z.string().optional(),
    heading: z.string(),
    intro: z.string().optional(),
    tiles: z.array(
      z.object({
        title: z.string(),
        location: z.string().optional(),
        image: z.string(),
        alt: z.string(),
      }),
    ),
    link_label: z.string(),
    link_href: z.string(),
  }),
  closing_cta: ctaSchema,
});

const aboutPageSchema = z.object({
  template: z.literal("about"),
  draft: z.boolean().default(false),
  hero: heroSchema,
  portrait: z
    .object({
      image: z.string(),
      alt: z.string(),
      caption: z.string().optional(),
    })
    .optional(),
  story: z.object({
    eyebrow: z.string().optional(),
    heading: z.string(),
    paragraphs: z.array(z.string()),
  }),
  philosophy: z.object({
    eyebrow: z.string().optional(),
    heading: z.string(),
    intro: z.string().optional(),
    principles: z.array(
      z.object({ title: z.string(), body: z.string() }),
    ),
  }),
  closing_cta: ctaSchema,
});

const servicesPageSchema = z.object({
  template: z.literal("services"),
  draft: z.boolean().default(false),
  hero: heroSchema,
  intro: z
    .object({
      heading: z.string().optional(),
      body: z.string(),
    })
    .optional(),
  services: z.array(
    z.object({
      slug: z.string(),
      title: z.string(),
      tagline: z.string(),
      description: z.array(z.string()),
      includes: z.array(z.string()).optional(),
      price_label: z.string(),
      price_note: z.string().optional(),
    }),
  ),
  expectations: z
    .object({
      eyebrow: z.string().optional(),
      heading: z.string(),
      steps: z.array(
        z.object({ title: z.string(), body: z.string() }),
      ),
    })
    .optional(),
  closing_cta: ctaSchema,
});

const showcasePageSchema = z.object({
  template: z.literal("showcase"),
  draft: z.boolean().default(false),
  hero: heroSchema,
  intro: z
    .object({
      heading: z.string().optional(),
      body: z.string(),
    })
    .optional(),
  closing_cta: ctaSchema,
});

const contactPageSchema = z.object({
  template: z.literal("contact"),
  draft: z.boolean().default(false),
  hero: heroSchema,
  intro: z
    .object({
      heading: z.string().optional(),
      body: z.string(),
    })
    .optional(),
  form: z.object({
    /* Holly: paste your Formspree form endpoint here once your form is set up.
       Form action will point at this URL. Until then it shows a friendly
       "not yet wired up" state. */
    formspree_endpoint: z.string(),
    submit_label: z.string().default("Send Holly a note"),
    success_message: z.string(),
    name_label: z.string().default("Your name"),
    email_label: z.string().default("Email"),
    message_label: z.string().default("Tell me a little about your garden"),
  }),
  direct_contact: z.object({
    heading: z.string(),
    body: z.string(),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: z.discriminatedUnion("template", [
    homePageSchema,
    aboutPageSchema,
    servicesPageSchema,
    showcasePageSchema,
    contactPageSchema,
  ]),
});

/* ------------------------------------------------------------------ */
/* showcase — Holly adds one markdown entry per project                */
/* ------------------------------------------------------------------ */

const showcase = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/showcase" }),
  schema: z.object({
    title: z.string(),
    location: z.string(),
    year: z.number().optional(),
    summary: z.string(),
    cover: z.object({
      image: z.string(),
      alt: z.string(),
    }),
    photos: z
      .array(
        z.object({
          image: z.string(),
          alt: z.string(),
          caption: z.string().optional(),
        }),
      )
      .default([]),
    /* Lets Holly hide a project without deleting it. */
    draft: z.boolean().default(false),
    /* Higher numbers float to the top of the showcase grid. */
    order: z.number().default(0),
  }),
});

export const collections = { site, pages, showcase };
