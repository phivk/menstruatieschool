import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const workshops = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdoc}", base: "./content/workshops" }),
  schema: z.object({
    title: z.string(),
    badge: z.string(),
    date: z.coerce.date(),
    displayDate: z.string(),
    location: z.string(),
    duration: z.string(),
    price: z.string(),
    status: z.string(),
    statusType: z.enum(["available", "new", "last-spots", "full"]),
    statusLabel: z.string().optional().default("Beschikbaarheid"),
    accentColor: z.enum(["vermilion", "amber", "blush"]),
    ticketUrl: z.string().url(),
    image: z.string().url().optional(),
    cardDescription: z.string(),
    intro: z.string(),
    aboutParagraphs: z.array(z.string()),
    learnings: z.array(z.string()),
  }),
});

export const collections = { workshops };
