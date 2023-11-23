import million from 'million/compiler'
import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'
import { remarkModifiedTime } from './remark-modified-time.mjs'
import { remarkReadingTime } from './remark-reading-time.mjs'
import react from '@astrojs/react'
import robotsTxt from 'astro-robots-txt'
import sentryAstro from "@sentry/astro"

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
sentryAstro({
      dsn: "

https://examplePublicKey@o0.ingest.sentry.io/0",
      sourceMapsUploadOptions: {
        project: "

example-project",
        authToken: process.env.SENTRY_AUTH_TOKEN,
      },
    }),
  ],
  prefetch: true,
  markdown: {
    remarkPlugins: [remarkModifiedTime, remarkReadingTime],
  },
  vite: {
    optimizeDeps: { exclude: ['@resvg/resvg-js'] },
    plugins: [million.vite({ mode: 'react', server: true, auto: true })],
  },
})
