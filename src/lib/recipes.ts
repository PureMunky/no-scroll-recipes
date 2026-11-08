import { getCollection, type CollectionEntry } from "astro:content";
import { fmtTime } from "./format";
export { fmtTime, isoDuration, fmtQty, unitLabel, ingredientLine } from "./format";

export type Recipe = CollectionEntry<"recipes">;

export const TAG_ORDER = [
  "Breakfast", "Lunch", "Dinner", "Soup", "Side", "Dessert", "Snack",
  "Quick", "Vegetarian", "Vegan", "Gluten-free", "Kid-friendly", "Make-ahead", "Baking",
];

/** Tags including the computed "Quick" tag (30 minutes or less). */
export function tagsOf(r: Recipe): string[] {
  const t = [...r.data.tags] as string[];
  if (r.data.time <= 30) t.push("Quick");
  return t.sort((a, b) => TAG_ORDER.indexOf(a) - TAG_ORDER.indexOf(b));
}

export const tagSlug = (t: string) => t.toLowerCase().replace(/[^a-z0-9]+/g, "-");

let cache: Recipe[] | undefined;
/** All published recipes, sorted alphabetically. Cached per build. */
export async function allRecipes(): Promise<Recipe[]> {
  if (!cache) {
    cache = (await getCollection("recipes", (r) => !r.data.draft))
      .sort((a, b) => a.data.title.localeCompare(b.data.title));
  }
  return cache;
}

export async function allTags(): Promise<{ tag: string; slug: string; count: number }[]> {
  const counts = new Map<string, number>();
  for (const r of await allRecipes()) for (const t of tagsOf(r)) counts.set(t, (counts.get(t) ?? 0) + 1);
  return [...counts.entries()]
    .sort((a, b) => TAG_ORDER.indexOf(a[0]) - TAG_ORDER.indexOf(b[0]))
    .map(([tag, count]) => ({ tag, slug: tagSlug(tag), count }));
}

export function describe(r: Recipe): string {
  if (r.data.description) return r.data.description;
  const t = tagsOf(r).map((x) => x.toLowerCase()).join(", ");
  return `${r.data.title}: ${r.data.ingredients.length} ingredients, ${fmtTime(r.data.time)}, serves ${r.data.servings}. ${t}. No ads, no life story — just the recipe.`.slice(0, 160);
}

/** Prefix a site path with the configured base. */
export function url(path = "/"): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}${path.startsWith("/") ? path : "/" + path}`;
}
