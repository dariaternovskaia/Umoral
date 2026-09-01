// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const poems = defineCollection({
  type: 'content', // Важно!
  schema: z.object({
    title: z.string(),
    date: z.date().or(z.string()).optional(),
    cover: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = {
  content: poems,
};