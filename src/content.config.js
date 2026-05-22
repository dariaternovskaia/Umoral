import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const content = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content' }),
  schema: z.object({
    title: z.string().optional(),
    date: z.union([z.string(), z.date()]).optional(),
    draft: z.boolean().default(false),
    cover: z.string().optional(),
    x: z.number().optional().default(0),
    y: z.number().optional().default(0),
  }),
});

export const collections = { content };