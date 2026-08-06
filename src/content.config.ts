import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const destinations = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/destinations" }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    badges: z.array(z.enum(["foreign", "domestic"])),
    heroImage: z.string(),
    hookId: z.string(),
    hookEn: z.string(),
    whatsappMessageId: z.string(),
    whatsappMessageEn: z.string(),
  }),
});

const testimonials = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/testimonials" }),
  schema: z.object({
    author: z.string(),
    location: z.string().optional(),
    quoteId: z.string(),
    quoteEn: z.string(),
    rating: z.number().min(1).max(5),
    isPlaceholder: z.boolean().default(true),
  }),
});

export const collections = {
  destinations,
  testimonials,
};
