import { defineCollection, z } from 'astro:content'

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
    title: z.string(),
    // description: z.string(),
    date: z.string(),
    updatedDate: z
      .string()
      .optional()
      .transform((str) => (str ? new Date(str) : undefined)),
    tags: z.array(z.string()).default(['others']),
  }),
})

export const collections = { blog, projects }
