// Curated, hand-ordered recipe collections (holidays, themes). Each becomes /collections/<slug>/.
// Recipe ids are file names in src/content/recipes; the build fails if one doesn't exist.

export interface Collection {
  slug: string;
  title: string;
  emoji: string;
  description: string;            // meta description + card text
  intro?: string;
  plan?: { when: string; what: string }[];   // optional game-plan timeline
  sections: { heading: string; recipes: string[] }[];
  featured?: boolean;             // show a banner on the home page
}

export const COLLECTIONS: Collection[] = [
  {
    slug: "thanksgiving",
    title: "Thanksgiving Dinner",
    emoji: "🦃",
    description: "A complete, ad-free Thanksgiving menu: turkey, gravy, stuffing, sides, pies and leftovers — every recipe straight to the ingredients.",
    intro: "Everything for the big meal, with nothing between you and the ingredient list. Most of the sides and both pies can be made ahead, so the day itself is mostly the turkey.",
    featured: true,
    plan: [
      { when: "4–5 days before", what: "Move a frozen turkey to the fridge to thaw — 24 hours for every 4–5 lb." },
      { when: "2–3 days before", what: "Dry-brine the turkey. Make pie dough and cranberry sauce." },
      { when: "1 day before", what: "Bake the pies. Assemble the stuffing and sweet potato casserole. Shape the rolls and refrigerate." },
      { when: "Morning of", what: "Turkey in the oven. Take the make-ahead dishes out of the fridge." },
      { when: "While the turkey rests", what: "Bake the casseroles and rolls, make the gravy, glaze the carrots." },
    ],
    sections: [
      { heading: "The turkey", recipes: ["dry-brined-roast-turkey", "herb-roasted-turkey-breast", "pan-drippings-turkey-gravy"] },
      { heading: "Sides", recipes: ["classic-herb-stuffing", "garlic-mashed-potatoes", "green-bean-casserole-from-scratch", "pecan-sweet-potato-casserole", "homemade-cranberry-sauce", "maple-balsamic-brussels-sprouts", "honey-glazed-carrots", "soft-dinner-rolls", "skillet-cornbread"] },
      { heading: "Pies & dessert", recipes: ["all-butter-pie-crust", "classic-pumpkin-pie", "classic-pecan-pie", "apple-crisp"] },
      { heading: "To drink", recipes: ["mulled-apple-cider"] },
      { heading: "Leftovers", recipes: ["turkey-cranberry-melt", "leftover-turkey-rice-soup"] },
    ],
  },
  {
    slug: "weeknight-dinners",
    title: "30-Minute Weeknight Dinners",
    emoji: "⏱️",
    description: "Fast weeknight dinners that land on the table in 30 minutes or less. No ads, no scrolling.",
    intro: "Dinners for the nights you get home late. Every one is 30 minutes or less, start to finish.",
    sections: [
      { heading: "Chicken", recipes: ["weeknight-chicken-tacos", "chicken-broccoli-stir-fry", "teriyaki-chicken", "chicken-fajitas", "lemon-chicken-orzo"] },
      { heading: "Pasta & grains", recipes: ["one-pot-tomato-pasta", "shrimp-scampi", "fried-rice", "stovetop-mac-and-cheese"] },
      { heading: "Meat & fish", recipes: ["garlic-butter-salmon", "beef-and-broccoli", "pan-seared-pork-chops", "smash-burgers", "sloppy-joes"] },
      { heading: "Meatless", recipes: ["crispy-sheet-pan-gnocchi", "black-bean-soup", "shakshuka"] },
    ],
  },
];
