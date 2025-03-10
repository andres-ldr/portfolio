import { z, defineCollection } from 'astro:content';

// const jobsCollection = defineCollection({
//   schema: z.object({
//     company: z.string(),
//     date_start: z.string(),
//     date_end: z.string(),
//     post: z.string(),
//     description: z.string(),
//     location: z.string(),
//     stack: z.array(z.string()),
//     tasks: z.array(z.string()),
//   }),
// });

// const projectCollection = defineCollection({
//   schema: z.object({
//     name: z.string(),
//     link_repo: z.union([z.string(), z.null()]),
//     link_app: z.union([z.string(), z.null()]),
//     type: z.string(),
//     stack: z.array(z.string()),
//     goals: z.array(
//       z.object({
//         goal: z.string(),
//         icon: z.string(),
//         title: z.string(),
//       })
//     ),
//     images: z.array(z.string()),
//   }),
// });

const articleCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    author: z.string(),
    categories: z.array(z.string()),
    image: z.string().optional(),
    isDraft: z.boolean(),
  }),
});

export const collections = {
  articles: articleCollection,
};
