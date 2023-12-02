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
import critters from 'astro-critters'
import { rehypeHeadingIds } from '@astrojs/markdown-remark'

import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

import rehypeToc from 'rehype-toc'
// https://astro.build/config
export default defineConfig({
  site: 'https://kyeshimizu.com',
  integrations: [
    tailwind({
      applyBaseStyles: false,
      configFile: './tailwind.config.cjs',
    }),

    mdx({
      remarkPlugins: [remarkModifiedTime, remarkReadingTime],
    }),
    sitemap(),
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
    critters(),
    compress({
      Image: false,
    }),
  ],
  prefetch: true,
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
  markdown: {
    rehypePlugins: [
      rehypeHeadingIds,
      rehypeSlug,
      rehypeToc,
      [rehypeAutolinkHeadings, { behavior: 'append' }],
    ],
    shikiConfig: {
      wrap: true,
    },
  },
  output: 'static',
})
