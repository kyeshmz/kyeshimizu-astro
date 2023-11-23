import million from 'million/compiler'
import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'
import { remarkModifiedTime } from './remark-modified-time.mjs'
import { remarkReadingTime } from './remark-reading-time.mjs'
import react from '@astrojs/react'
import robotsTxt from 'astro-robots-txt'
import sentry from "@sentry/astro"

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
sentry({
      dsn: "https://740dd5065bf6f581619af5cb14f71e94@o4505485115719680.ingest.sentry.io/4506272625065984",
      sourceMapsUploadOptions: {
        project: "kyeshimizu-web",
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
