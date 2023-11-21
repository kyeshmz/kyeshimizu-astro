import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'
import { remarkModifiedTime } from './remark-modified-time.mjs'
import { remarkReadingTime } from './remark-reading-time.mjs'
import react from '@astrojs/react'
import robotsTxt from 'astro-robots-txt'

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
    robotsTxt(),
  ],
  prefetch: true,
  markdown: {
    remarkPlugins: [remarkModifiedTime, remarkReadingTime],
  },
  vite: { optimizeDeps: { exclude: ['@resvg/resvg-js'] } },
})
