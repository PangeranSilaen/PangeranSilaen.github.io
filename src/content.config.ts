import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    shortDescription: z.string(),
    tech: z.string(),
    order: z.number(),
    featured: z.boolean().default(false),
    category: z.string().default('Software Engineering'),
    role: z.string(),
    period: z.string(),
    clientOrContext: z.string(),
    repository: z.url().nullable().optional(),
    liveUrl: z.url().nullable().optional(),
    deliverables: z.array(z.string()).default([]),
    stack: z.array(z.string()).default([]),
  }),
});

export const collections = { projects };
