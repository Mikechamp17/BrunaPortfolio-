import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const photos = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/photos' }),
  schema: ({ image }) =>
    z.object({
      src: image(),
      alt: z.string().min(1),
      aspectRatio: z.enum(['3/4', '1/1', '4/3', '16/9']),
      order: z.number(),
      caption: z.string().optional(),
      category: z.enum(['marketing', 'personal']).default('personal'),
    }),
});

const videos = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/videos' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      vimeoId: z.string(),
      poster: image(),
      order: z.number(),
    }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      slug: z.string(),
      category: z.enum(['marketing', 'personal']),
      order: z.number(),
      description: z.string(),
      coverImage: image(),
      images: z.array(image()).optional(),
      vimeoId: z.string().optional(),
    }),
});

export const collections = { photos, videos, projects };
