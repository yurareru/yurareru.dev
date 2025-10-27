import { defineContentConfig, defineCollection } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    post: defineCollection({
      type: 'page',
      source: '**/*.md',
      schema: z.object({
        type: z.string(),
        date: z.string(),
        tags: z.array(z.string()),
        wordCount: z.number().optional(),
        readingTime: z.number().optional(),
        class: z.string().optional(),
      }),
    }),
  },
})
