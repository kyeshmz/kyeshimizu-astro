import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'
import { remarkModifiedTime } from './remark-modified-time.mjs'
import { remarkReadingTime } from './remark-reading-time.mjs'
import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  site: 'https://kyeshimizu.com',
  integrations: [
    sitemap(),
    tailwind({
      applyBaseStyles: false,
      configFile: './tailwind.config.cjs',
    }),
    mdx(),
    react(),
  ],
  prefetch: true,
  markdown: {
    remarkPlugins: [remarkModifiedTime, remarkReadingTime],
  },
})
