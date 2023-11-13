import type { APIRoute, APIContext } from 'astro'
import { getCollection } from 'astro:content'
import generateOgImage from '../../utils/generateOGImage'

export const get: APIRoute = async ({ props }: APIContext) => {
  const res = await generateOgImage(props.note.title)
  return new Response(res, {
    status: 200,
    headers: {
      'Content-Type': 'image/png',
    },
  })
}

export async function getStaticPaths() {
  //   const collections = await getCollection('projects')
  //   const internalNotes = collections.map((collection) => collection.data)
  //   return internalNotes.map((note) => {
  //     return {
  //       params: { note_id: note.noteId },
  //       props: { note },
  //     }
  //   })
}
