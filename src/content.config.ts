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
    // SNS 미리보기(og:image) 호환을 위해 PNG/JPG만 허용. SVG·WebP 등은 변환해서 넣는다.
    thumbnail: z
      .string()
      .regex(/^\/media\/.+\.(png|jpe?g)$/i, 'thumbnail은 /media/ 아래의 PNG 또는 JPG 파일이어야 합니다.'),
    order: z.number(),
    platform: z.string().optional(),
    engine: z.string().optional(),
    links: z
      .object({
        github: z.string().url().optional(),
        video: z.string().url().optional(),
      })
      .optional(),
  }),
});

export const collections = { projects };
