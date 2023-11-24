import million from 'million/compiler'
import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'
import { remarkModifiedTime } from './remark-modified-time.mjs'
import { remarkReadingTime } from './remark-reading-time.mjs'
import react from '@astrojs/react'
import robotsTxt from 'astro-robots-txt'
import sentry from '@sentry/astro'

import compress from 'astro-compress'

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
      // this needs to be there, cause this cannot be customized through client config.js
      // per https://docs.sentry.io/platforms/javascript/guides/astro/manual-setup/?original_referrer=https%3A%2F%2Fwww.google.com%2F
      sourceMapsUploadOptions: {
        project: 'kyeshimizu-web',
        authToken: process.env.SENTRY_AUTH_TOKEN,
      },
    }),
    compress(),
  ],
  prefetch: true,
  markdown: {
    remarkPlugins: [remarkModifiedTime, remarkReadingTime],
  },
  vite: {
    optimizeDeps: {
      exclude: ['@resvg/resvg-js'],
    },
    plugins: [
      million.vite({
        mode: 'react',
        server: true,
        auto: true,
      }),
    ],
  },
})
