import { z, defineCollection } from 'astro:content';

const projectCollection = defineCollection({
  schema: z.object({
    name: z.string(),
    description: z.string(),
    link_repo: z.string(),
    link_app: z.string(),
    type: z.string(),
    stack: z.array(z.string()),
    goals: z.array(z.string()),
    images: z.array(z.string()),
  }),
});

export const collections = {
  portfolio: projectCollection,
};
