import type { APIContext } from 'astro'
import { getCollection } from 'astro:content'
import { getOgImage } from '../../../utils/createOGPImage'

export async function getStaticPaths() {
  const posts = await getCollection('blogs')

  return posts.map((post) => ({
    params: {
      project: post.slug,
    },
  }))
}

export async function GET({ params }: APIContext) {
  const { project } = params
  if (!project) return { status: 404 }

  const post = (await getCollection('blogs')).find((post) => post.slug === project)
  if (!post) return { status: 404 }

  const body = await getOgImage(post.data.title ?? 'Kye Shimizu Portfolio')

  return new Response(body, {
    headers: {
      'content-type': 'image/png',
    },
  })
}
