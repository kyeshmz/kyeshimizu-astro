import { defineCollection, z } from 'astro:content'

import { Works } from '../types/works'

const blogs = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subtitle: z.string().optional(),
      description: z.string(),
      date: z.string(),
      tags: z.array(z.string()),
    }),
})

const projects = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.nativeEnum(Works),
      subtitle: z.string().optional(),
      date: z.string(),
      tags: z.array(z.string()),
      client: z.string().optional(),
      youtube: z.string().optional(),
      hoverImage: image()
        .refine((img) => img.width >= 200, {
          message: 'Cover image must be at least 1080 pixels wide!',
        })
        .optional(),
      hoverVideo: z.string().optional(),
      publications: z.array(
        z.object({
          conference_name: z.string(),
          year: z.number(),
          reference: z.string(),
          url: z.string(),
          pdf_path: z.string().optional(),
        }),
      ),
      media: z.array(
        z.object({
          media_name: z.string(),
          reference: z.string(),
          medium: z.string(),
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
      other: z.array(z.string()).optional(),
    }),
})

export const collections = { blogs, projects }
