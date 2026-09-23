import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "zod";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default("Reading the Law"),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).optional(),
  }),
});

const media = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/media" }),
  schema: z.object({
    title: z.string(),
    url: z.string(),
    publication: z.string(),
    pubDate: z.coerce.date(),
    note: z.string(),
    addedDate: z.coerce.date().optional(),
  }),
});

export const collections = { blog, media };
