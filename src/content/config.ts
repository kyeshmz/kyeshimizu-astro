import { defineCollection, z } from 'astro:content'
import { Works } from '../types/works'

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    updatedDate: z
      .string()
      .optional()
      .transform((str) => (str ? new Date(str) : undefined)),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).default(['others']),
    author: z.string().optional(),
    draft: z.boolean().optional(),
    featured: z.boolean().optional(),
  }),
})
const projects = defineCollection({
  schema: z.object({
    title: z.nativeEnum(Works),
    // description: z.string(),
    date: z.string(),
    updatedDate: z
      .string()
      .optional()
      .transform((str) => (str ? new Date(str) : undefined)),
    tags: z.array(z.string()).default(['others']),
    client: z.string().optional(),
    youtube: z.string().optional(),
    publications: z.array(
      z.object({
        conference_name: z.string(),
        year: z.number(),
        reference: z.string(),
      }),
    ),
    media: z.array(
      z.object({
        media_name: z.string(),
        reference: z.string(),
        year: z.number(),
      }),
    ),
    awards: z.array(
      z.object({
        award_name: z.string(),
        year: z.number(),
      }),
    ),
    exhibitions: z.array(
      z.object({
        exhibition_name: z.string(),
        date: z.string(),
        city: z.string(),
        place: z.string(),
      }),
    ),
    credits: z.array(z.string()),
    thanks: z.array(z.string()),
    grants: z.array(
      z.object({
        grant_name: z.string(),
        year: z.number(),
        reference: z.string(),
      }),
    ),
    talks: z.array(
      z.object({
        talk_name: z.string(),
        reference: z.string(),
        place: z.string(),
        city: z.string(),
        year: z.number(),
        event_name: z.string(),
      }),
    ),
  }),
})

export const collections = { blog, projects }
