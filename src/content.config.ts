import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// Every recipe file is validated against this schema at build time.
// A bad submission fails CI with a clear error instead of breaking the live site.
export const UNITS = ["", "tsp", "tbsp", "cup", "oz", "lb", "pint", "can", "pinch", "g", "kg", "ml", "l"] as const;
export const TAGS = [
  "Breakfast", "Lunch", "Dinner", "Soup", "Side", "Dessert", "Snack",
  "Vegetarian", "Vegan", "Gluten-free", "Kid-friendly", "Make-ahead", "Baking",
] as const;

const recipes = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/recipes" }),
  schema: z.object({
    title: z.string().min(3).max(80),
    emoji: z.string().max(8).default("🍽️"),
    description: z.string().max(160).optional(),
    tags: z.array(z.enum(TAGS)).min(1),
    time: z.number().int().positive().max(24 * 60 * 3),
    servings: z.number().int().positive().max(100),
    ingredients: z.array(z.object({
      qty: z.number().min(0),          // 0 = "to taste" / no amount
      unit: z.enum(UNITS),
      item: z.string().min(1),
    })).min(1),
    steps: z.array(z.string().min(3)).min(1),
    tip: z.string().optional(),
    author: z.string().default("No Scroll Recipes"),
    added: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { recipes };
