import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";
import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), prefetch(), sitemap(), tailwind(), partytown()]
});