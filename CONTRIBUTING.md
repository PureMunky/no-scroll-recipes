# Adding a recipe

Every recipe is one Markdown file in `src/content/recipes/`. The file name is the URL:
`src/content/recipes/fried-rice.md` → `/recipes/fried-rice/`.

```yaml
---
title: "Leftover Fried Rice"
emoji: "🍚"
tags: ["Dinner", "Kid-friendly"]      # see TAGS in src/content.config.ts. "Quick" is added automatically for ≤30 min.
time: 15                              # total minutes
servings: 3
ingredients:
  - { qty: 3, unit: "cup", item: "cold cooked rice" }
  - { qty: 3, unit: "", item: "eggs, beaten" }               # "" = countable item
  - { qty: 0, unit: "", item: "hot sauce, to serve" }       # 0 = no amount
steps:
  - "Heat 1 tbsp oil in a large skillet over high…"
tip: "Day-old rice is the secret."   # optional
author: "Your Name"                   # optional
added: 2026-11-08
draft: false                          # optional; true hides it
---
Optional extra notes in Markdown go here.
```

Units: `tsp tbsp cup oz lb pint can pinch g kg ml l` or `""`. Quantities scale with the servings control, so use numbers (`0.5`, not `1/2`).

## Checking your work

```bash
npm ci
npm run build     # fails with a clear message if any recipe breaks the schema
npm run preview
```

Every pull request runs the same build in CI, so a broken recipe can't reach the live site.

## Ground rules
- Your own words. Ingredient lists are fine to share; don't copy someone else's written steps.
- Real amounts, steps in order, safe temperatures for meat, fish and eggs.
