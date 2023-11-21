import type { APIContext } from 'astro'
import { getCollection } from 'astro:content'
import { getOgImage } from '../../utils/createOGPImage'

export async function getStaticPaths() {
  const posts = await getCollection('projects')

  return [
    {
      params: {
        slug: 'index',
      },
    },
    {
      params: {
        slug: 'about',
      },
    },
  ]
}

export async function GET({ params }: APIContext) {
  const { slug } = params
  if (!slug) return { status: 404 }
  const formattedSlug = slug.charAt(0).toUpperCase() + slug.slice(1)

  const body = await getOgImage(formattedSlug ?? 'No title')

  return new Response(body, {
    headers: {
      'content-type': 'image/png',
    },
  })
}
