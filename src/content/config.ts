import { z, defineCollection } from 'astro:content';

const jobsCollection = defineCollection({
  schema: z.object({
    company: z.string(),
    date_start: z.string(),
    date_end: z.string(),
    post: z.string(),
    description: z.string(),
    stack: z.array(z.string()),
    goals: z.array(z.string()),
    image: z.string(),
  }),
});

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
  jobs: jobsCollection,
};
