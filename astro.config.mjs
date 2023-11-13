import { defineConfig } from 'astro/config';
import prefetch from '@astrojs/prefetch';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import mdx from "@astrojs/mdx";
import { remarkModifiedTime } from './remark-modified-time.mjs';
import { remarkReadingTime } from './remark-reading-time.mjs';
import react from "@astrojs/react";


// https://astro.build/config
export default defineConfig({
  site: 'https://kyeshimizu.com',
  integrations: [prefetch(), sitemap(), tailwind({      applyBaseStyles: false,}), mdx(), react()],
  markdown: {
    remarkPlugins: [remarkModifiedTime, remarkReadingTime]
  },
});