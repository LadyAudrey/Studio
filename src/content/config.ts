import { defineCollection, z } from 'astro:content';

const baseSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  date: z.coerce.date(),
  updated: z.coerce.date().optional(),
  tags: z.array(z.string()).default([]),
  published: z.boolean().default(true),
  featured: z.boolean().default(false),
  cover: z.string().optional(),
  ai_assisted: z.boolean().optional(),
  ai_notes: z.string().optional(),
});

const blog = defineCollection({
  type: 'content',
  schema: baseSchema,
});

const products = defineCollection({
  type: 'content',
  schema: baseSchema.extend({
    status: z.enum(['coming-soon', 'beta', 'live', 'sunset']).default('coming-soon'),
    url: z.string().url().optional(),
    repo: z.string().url().optional(),
    logo: z.string().optional(),
    pricing: z.enum(['free', 'paid', 'freemium']).default('free'),
    order: z.number().default(0),
  }),
});

const services = defineCollection({
  type: 'content',
  schema: baseSchema.extend({
    tier: z.enum(['starter', 'growth', 'custom']).default('starter'),
    price: z.string().optional(),
    features: z.array(z.string()).default([]),
    cta_text: z.string().default('Get in touch'),
    cta_url: z.string().optional(),
    order: z.number().default(0),
  }),
});

export const collections = { blog, products, services };
