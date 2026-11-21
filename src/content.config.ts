import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    type: z.enum(['company', 'personal']),
    summary: z.string(),
    period: z.string(),
    team: z.string(),
    role: z.string(),
    stack: z.array(z.string()),
    featured: z.boolean().default(false),
    thumbnail: z.string().startsWith('/media/'),
    order: z.number(),
    links: z
      .object({
        github: z.string().url().optional(),
        video: z.string().url().optional(),
      })
      .optional(),
  }),
});

export const collections = { projects };
