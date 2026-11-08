#!/usr/bin/env node
// Turns a "Submit a recipe" issue form body into src/content/recipes/<slug>.md.
// Input via env: ISSUE_BODY, ISSUE_NUMBER, ISSUE_USER. Prints JSON {slug, file, title} on success.
// Exits 1 with a human-readable message (for the issue comment) on bad input.
// The issue body is untrusted: every value is written as a JSON-quoted YAML string and only
// frontmatter is generated (no Markdown body), so nothing in a submission can inject HTML or code.
import fs from "node:fs";
import path from "node:path";

const RECIPES_DIR = path.resolve(process.env.RECIPES_DIR || "src/content/recipes");
const TAGS = ["Breakfast", "Lunch", "Dinner", "Soup", "Side", "Dessert", "Snack", "Drink",
  "Vegetarian", "Vegan", "Gluten-free", "Kid-friendly", "Make-ahead", "Baking"];

const UNIT_ALIASES = {
  tsp: ["tsp", "tsps", "teaspoon", "teaspoons", "t"],
  tbsp: ["tbsp", "tbsps", "tbs", "tablespoon", "tablespoons", "T"],
  cup: ["cup", "cups", "c"],
  oz: ["oz", "ounce", "ounces"],
  lb: ["lb", "lbs", "pound", "pounds"],
  pint: ["pint", "pints"],
  can: ["can", "cans"],
  pinch: ["pinch", "pinches"],
  g: ["g", "gram", "grams"],
  kg: ["kg", "kilogram", "kilograms"],
  ml: ["ml", "milliliter", "milliliters", "millilitre", "millilitres"],
  l: ["l", "liter", "liters", "litre", "litres"],
};
const UNIT_LOOKUP = new Map();
for (const [unit, names] of Object.entries(UNIT_ALIASES)) for (const n of names) UNIT_LOOKUP.set(n === "T" || n === "t" ? n : n.toLowerCase(), unit);

const VULGAR = { "¼": 0.25, "½": 0.5, "¾": 0.75, "⅓": 1 / 3, "⅔": 2 / 3, "⅛": 0.125, "⅜": 0.375, "⅝": 0.625, "⅞": 0.875 };

function fail(msg) { console.error(msg); process.exit(1); }

/** Split the issue-form body into { "Heading": "value" }. */
export function parseSections(body) {
  const out = {};
  const parts = body.replace(/\r\n/g, "\n").split(/^### /m).slice(1);
  for (const p of parts) {
    const nl = p.indexOf("\n");
    const head = p.slice(0, nl).trim();
    let val = p.slice(nl + 1).trim();
    if (val === "_No response_") val = "";
    out[head] = val;
  }
  return out;
}

/** "1 1/2", "1½", "3/4", "2.5", "2-3" → number (first of a range). Returns [qty, rest]. */
export function parseQty(s) {
  s = s.trim();
  for (const [ch, v] of Object.entries(VULGAR)) s = s.replace(new RegExp(`(\\d+)?\\s?${ch}`), (m, d) => String(Math.round(((d ? Number(d) : 0) + v) * 1000) / 1000));
  const m = s.match(/^(\d+(?:\.\d+)?)(?:\s+(\d+)\/(\d+)|\/(\d+))?(?:\s*(?:-|–|to)\s*\d+(?:[./]\d+)?)?\s*(.*)$/);
  if (!m) {
    const dec = s.match(/^(0?\.\d+)\s*(.*)$/);
    return dec ? [Number(dec[1]), dec[2]] : [0, s];
  }
  let q = Number(m[1]);
  if (m[2]) q += Number(m[2]) / Number(m[3]);
  if (m[4]) q = Number(m[1]) / Number(m[4]);
  return [Math.round(q * 1000) / 1000, m[5]];
}

export function parseIngredient(line) {
  line = line.replace(/^\s*(?:[-*•]|\d+[.)])\s+/, "").trim();
  if (!line) return null;
  let [qty, rest] = parseQty(line);
  let unit = "";
  const um = rest.match(/^([A-Za-z]+)\.?\s+(.*)$/);
  if (qty && um) {
    const key = um[1] === "T" || um[1] === "t" ? um[1] : um[1].toLowerCase();
    if (UNIT_LOOKUP.has(key)) { unit = UNIT_LOOKUP.get(key); rest = um[2]; }
  }
  rest = rest.replace(/^of\s+/i, "").trim();
  if (!rest) return null;
  return { qty, unit, item: rest };
}

const lines = (s) => s.split("\n").map((l) => l.trim()).filter(Boolean);
const q = (s) => JSON.stringify(s);
export const slugify = (s) => s.toLowerCase().replace(/['’]/g, "").normalize("NFKD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 60);

export function build(body, user) {
  const f = parseSections(body);
  const title = (f["Recipe name"] || "").replace(/\s+/g, " ").trim();
  if (title.length < 3 || title.length > 80) fail("The recipe name needs to be between 3 and 80 characters.");
  const time = parseInt(f["Total time (minutes)"], 10);
  if (!(time > 0 && time <= 4320)) fail("Total time should be a number of minutes, like 25.");
  const servings = parseInt(f["Servings"], 10);
  if (!(servings > 0 && servings <= 100)) fail("Servings should be a number, like 4.");
  const tags = (f["Tags"] || "").split(",").map((t) => t.trim()).filter((t) => TAGS.includes(t));
  if (!tags.length) fail("Pick at least one tag.");
  const ingredients = lines(f["Ingredients"] || "").map(parseIngredient).filter(Boolean);
  if (!ingredients.length) fail("Add at least one ingredient, one per line.");
  const steps = lines(f["Steps"] || "").map((l) => l.replace(/^\s*(?:[-*•]|(?:step\s*)?\d+[.):])\s*/i, "").trim()).filter((l) => l.length >= 3);
  if (!steps.length) fail("Add the steps, one per line.");
  if (!/\[x\]/i.test(f["Terms"] || "")) fail("Please tick the box confirming the recipe is in your own words.");
  const tip = (f["One tip (optional)"] || "").trim();
  const credit = (f["Credit as (optional)"] || "").replace(/\s+/g, " ").trim().slice(0, 60);

  let y = "---\n";
  y += `title: ${q(title)}\n`;
  y += `emoji: "🍽️"\n`;
  y += `tags: [${tags.map(q).join(", ")}]\n`;
  y += `time: ${time}\nservings: ${servings}\ningredients:\n`;
  y += ingredients.map((i) => `  - { qty: ${i.qty}, unit: ${q(i.unit)}, item: ${q(i.item)} }`).join("\n") + "\nsteps:\n";
  y += steps.map((s) => `  - ${q(s)}`).join("\n") + "\n";
  if (tip) y += `tip: ${q(tip)}\n`;
  y += `author: ${q(credit || "A No Scroll Recipes reader")}\n`;
  y += `added: ${new Date().toISOString().slice(0, 10)}\n`;
  y += `# submitted via issue by @${String(user || "unknown").replace(/[^A-Za-z0-9-]/g, "")}\n`;
  y += "---\n";
  return { title, yaml: y };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const body = process.env.ISSUE_BODY;
  if (!body) fail("Empty submission.");
  const num = String(process.env.ISSUE_NUMBER || "").replace(/\D/g, "");
  const { title, yaml } = build(body, process.env.ISSUE_USER);
  // Re-runs for the same issue overwrite their own file; otherwise avoid clobbering an existing recipe.
  const marker = num ? `submission-${num}` : "";
  let slug = slugify(title) || `recipe-${num}`;
  const taken = (s) => {
    const p = path.join(RECIPES_DIR, `${s}.md`);
    return fs.existsSync(p) && !(marker && fs.readFileSync(p, "utf8").includes(`# ${marker}`));
  };
  if (taken(slug)) slug = `${slug}-${num || Date.now()}`;
  const file = path.join(RECIPES_DIR, `${slug}.md`);
  fs.writeFileSync(file, marker ? yaml.replace(/\n---\n$/, `\n# ${marker}\n---\n`) : yaml);
  console.log(JSON.stringify({ slug, file: path.relative(process.cwd(), file), title }));
}
