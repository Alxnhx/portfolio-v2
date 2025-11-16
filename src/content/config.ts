import { defineCollection, z } from 'astro:content';

const proyectos = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    summary: z.string(),
    cover: z.string().optional(),
    stack: z.array(z.string()).default([]),
    role: z.string().optional(),
    repo: z.string().optional(),
    demo: z.string().optional()
  })
});

export const collections = { proyectos };
