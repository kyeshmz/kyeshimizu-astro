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
    title: z.union([
      z.literal(Works.RhizomatiksFencing),
      z.literal(Works.Synflux),
      z.literal(Works.DeviationGame),
      z.literal(Works.MorphingIdentity),
      z.literal(Works.Aubik),
      z.literal(Works.AlgorithmicCouture),
      z.literal(Works.Harmonize),
      z.literal(Works.RhizomatiksFencing),
      z.literal(Works.RhizomatiksFencing),
    ]),
    // description: z.string(),
    date: z.string(),
    updatedDate: z
      .string()
      .optional()
      .transform((str) => (str ? new Date(str) : undefined)),
    tags: z.array(z.string()).default(['others']),
    publications: z.array(
      z.object({
        conference_name: z.string(),
        year: z.number(),
        reference: z.string(),
        url: z.string(),
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
  }),
})

export const collections = { blog, projects }
