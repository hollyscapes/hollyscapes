// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Canonical site URL — used for sitemap, social meta, and absolute URLs.
  // Custom-domain GitHub Pages serves at the root, so no `base` is needed.
  site: 'https://hollyscapes.com',
  trailingSlash: 'always',
});
