/* Recipe data. One object per recipe.
   ing: [quantity, unit, name]  — quantity 0 = "to taste"/no amount; units: tsp tbsp cup oz lb pint can pinch or "" for countable items.
   "Quick" is added automatically for recipes 30 minutes or less. */
window.RECIPES = [

/* ---------- Breakfast ---------- */
{ id:"fluffy-pancakes", emoji:"🥞", title:"Fluffy Buttermilk Pancakes", tags:["Breakfast","Kid-friendly","Vegetarian"], time:20, serves:4,
  ing:[[2,"cup","all-purpose flour"],[2,"tbsp","sugar"],[2,"tsp","baking powder"],[0.5,"tsp","baking soda"],[0.5,"tsp","salt"],[2,"cup","buttermilk"],[2,"","eggs"],[4,"tbsp","butter, melted"],[1,"tsp","vanilla"]],
  steps:["Whisk flour, sugar, baking powder, baking soda and salt in a large bowl.","In another bowl whisk buttermilk, eggs, melted butter and vanilla.","Pour wet into dry and stir just until combined — lumps are good. Rest 5 minutes.","Heat a lightly buttered griddle over medium. Pour ¼ cup batter per pancake.","Flip when bubbles cover the top and the edges look set, about 2 minutes. Cook 1 minute more."],
  note:"No buttermilk? Stir 2 tbsp lemon juice into 2 cups milk and wait 5 minutes." },

{ id:"buttermilk-waffles", emoji:"🧇", title:"Crisp Waffles", tags:["Breakfast","Kid-friendly","Vegetarian"], time:25, serves:4,
  ing:[[2,"cup","all-purpose flour"],[2,"tbsp","sugar"],[1,"tbsp","baking powder"],[0.5,"tsp","salt"],[2,"","eggs"],[1.75,"cup","milk"],[0.5,"cup","butter, melted"],[1,"tsp","vanilla"]],
  steps:["Preheat your waffle iron.","Whisk flour, sugar, baking powder and salt in a bowl.","Whisk eggs, milk, melted butter and vanilla, then stir into the dry ingredients until just combined.","Grease the iron, add batter per the iron's size, and cook until steam mostly stops and the waffle is golden.","Keep finished waffles crisp on a rack in a 200°F oven while you cook the rest."],
  note:"Leftovers freeze well — reheat straight from frozen in the toaster." },

{ id:"overnight-oats", emoji:"🥣", title:"Peanut Butter Overnight Oats", tags:["Breakfast","Make-ahead","Vegetarian"], time:5, serves:2,
  ing:[[1,"cup","rolled oats"],[1,"cup","milk"],[0.5,"cup","plain yogurt"],[2,"tbsp","peanut butter"],[1,"tbsp","maple syrup"],[1,"tbsp","chia seeds"],[1,"pinch","salt"],[1,"","banana, sliced, to serve"]],
  steps:["Stir everything except the banana together in a jar or bowl.","Cover and refrigerate at least 6 hours or overnight.","Stir, loosen with a splash of milk if needed, and top with banana."],
  note:"Keeps 4 days in the fridge — make a batch on Sunday." },

{ id:"soft-scrambled-eggs", emoji:"🍳", title:"Soft Scrambled Eggs", tags:["Breakfast","Vegetarian","Gluten-free"], time:5, serves:1,
  ing:[[3,"","eggs"],[1,"tbsp","butter"],[1,"pinch","salt"],[0,"","chopped chives and black pepper, to serve"]],
  steps:["Whisk eggs with salt until no streaks remain.","Melt butter in a nonstick pan over medium-low.","Add eggs and stir slowly with a spatula, pushing curds from the edges to the center.","Pull the pan off the heat while the eggs still look slightly wet — they finish cooking on the plate.","Top with chives and pepper."],
  note:"Low heat is the whole trick. If the eggs sizzle when they hit the pan, it's too hot." },

{ id:"classic-french-toast", emoji:"🍞", title:"Classic French Toast", tags:["Breakfast","Kid-friendly","Vegetarian"], time:20, serves:4,
  ing:[[4,"","eggs"],[1,"cup","milk"],[1,"tbsp","sugar"],[1,"tsp","vanilla"],[0.5,"tsp","cinnamon"],[1,"pinch","salt"],[8,"","thick slices of bread"],[2,"tbsp","butter"],[0,"","maple syrup and berries, to serve"]],
  steps:["Whisk eggs, milk, sugar, vanilla, cinnamon and salt in a shallow dish.","Heat a skillet over medium and melt a little butter.","Dip each slice for a few seconds per side — soaked but not falling apart.","Cook 2–3 minutes per side until golden, adding butter as needed.","Serve with syrup and berries."],
  note:"Day-old bread soaks up the custard without getting soggy." },

{ id:"banana-bread", emoji:"🍌", title:"One-Bowl Banana Bread", tags:["Breakfast","Baking","Vegetarian","Make-ahead"], time:75, serves:10,
  ing:[[3,"","very ripe bananas"],[0.33,"cup","butter, melted"],[0.75,"cup","sugar"],[1,"","egg"],[1,"tsp","vanilla"],[1,"tsp","baking soda"],[0.25,"tsp","salt"],[1.5,"cup","all-purpose flour"],[0.5,"cup","chocolate chips or walnuts (optional)"]],
  steps:["Heat oven to 350°F and grease a 9×5-inch loaf pan.","Mash bananas in a large bowl, then stir in melted butter.","Stir in sugar, egg and vanilla, then sprinkle baking soda and salt over and mix.","Add flour and stir just until no dry streaks remain. Fold in chips or nuts.","Bake 55–65 minutes, until a toothpick in the center comes out clean. Cool 10 minutes, then turn out."],
  note:"The browner the bananas, the better the bread. Freeze overripe ones whole and thaw before using." },

{ id:"blueberry-muffins", emoji:"🫐", title:"Blueberry Muffins", tags:["Breakfast","Baking","Vegetarian"], time:35, serves:12,
  ing:[[2,"cup","all-purpose flour"],[0.75,"cup","sugar"],[2,"tsp","baking powder"],[0.5,"tsp","salt"],[0.5,"cup","butter, melted"],[2,"","eggs"],[0.75,"cup","milk"],[1,"tsp","vanilla"],[1.5,"cup","blueberries"]],
  steps:["Heat oven to 375°F and line a 12-cup muffin tin.","Whisk flour, sugar, baking powder and salt in a large bowl.","Whisk butter, eggs, milk and vanilla, then stir into the dry ingredients until just combined.","Gently fold in blueberries and divide batter among the cups.","Bake 20–24 minutes, until golden and a toothpick comes out clean."],
  note:"Toss frozen berries in a spoonful of flour first so they don't sink or turn the batter purple." },

{ id:"make-ahead-breakfast-burritos", emoji:"🌯", title:"Freezer Breakfast Burritos", tags:["Breakfast","Make-ahead"], time:40, serves:8,
  ing:[[1,"lb","breakfast sausage"],[2,"cup","frozen diced hash browns"],[10,"","eggs"],[0.5,"tsp","salt"],[1.5,"cup","shredded cheddar"],[8,"","large flour tortillas"],[0.5,"cup","salsa"]],
  steps:["Brown sausage in a large skillet, breaking it up, about 8 minutes. Move to a bowl, leaving the fat.","Cook hash browns in the same pan until crisp, about 8 minutes. Add to the sausage.","Whisk eggs with salt and scramble over medium-low until just set.","Fill each tortilla with eggs, sausage and potatoes, cheese and a spoon of salsa. Roll tightly, tucking in the ends.","Eat now, or cool, wrap each in foil, and freeze in a bag."],
  note:"To reheat from frozen: remove foil, wrap in a damp paper towel, and microwave 2–3 minutes, flipping halfway." },

{ id:"shakshuka", emoji:"🍅", title:"Shakshuka", tags:["Breakfast","Vegetarian","Gluten-free"], time:30, serves:4,
  ing:[[2,"tbsp","olive oil"],[1,"","onion, diced"],[1,"","red bell pepper, diced"],[3,"","garlic cloves, minced"],[1,"tsp","ground cumin"],[1,"tsp","paprika"],[0.25,"tsp","red pepper flakes"],[1,"can","crushed tomatoes (28 oz)"],[0.5,"tsp","salt"],[6,"","eggs"],[0.5,"cup","crumbled feta"],[0,"","parsley and crusty bread, to serve"]],
  steps:["Cook onion and pepper in oil in a large skillet over medium until soft, about 6 minutes.","Add garlic, cumin, paprika and pepper flakes for 30 seconds.","Stir in tomatoes and salt and simmer 10 minutes until slightly thickened.","Make 6 wells with a spoon and crack an egg into each. Cover and cook on low 5–8 minutes until whites are set and yolks still runny.","Scatter feta and parsley. Serve straight from the pan with bread."],
  note:"" },

{ id:"maple-granola", emoji:"🥜", title:"Maple Nut Granola", tags:["Breakfast","Make-ahead","Vegetarian"], time:35, serves:8,
  ing:[[3,"cup","rolled oats"],[1,"cup","chopped nuts (almonds, pecans or walnuts)"],[1,"tsp","cinnamon"],[0.5,"tsp","salt"],[0.33,"cup","maple syrup"],[0.33,"cup","olive or coconut oil"],[1,"tsp","vanilla"],[0.5,"cup","dried fruit"]],
  steps:["Heat oven to 325°F and line a sheet pan with parchment.","Mix oats, nuts, cinnamon and salt. Stir in maple syrup, oil and vanilla until everything is coated.","Spread on the pan and press down lightly.","Bake 25 minutes, stirring once halfway, until golden.","Cool completely on the pan — it crisps as it cools — then break up and stir in dried fruit."],
  note:"Stored airtight, it keeps 2 weeks." },

{ id:"egg-muffin-cups", emoji:"🧁", title:"Veggie Egg Muffin Cups", tags:["Breakfast","Make-ahead","Gluten-free","Vegetarian"], time:30, serves:12,
  ing:[[10,"","eggs"],[0.25,"cup","milk"],[0.5,"tsp","salt"],[0.25,"tsp","black pepper"],[1,"cup","finely chopped vegetables (peppers, spinach, onion)"],[1,"cup","shredded cheese"]],
  steps:["Heat oven to 350°F and grease a 12-cup muffin tin well.","Whisk eggs, milk, salt and pepper.","Divide vegetables and cheese among the cups, then pour egg mixture over until each is about ¾ full.","Bake 20–22 minutes, until puffed and set in the center.","Cool 5 minutes before removing. Refrigerate up to 4 days."],
  note:"Add cooked bacon or sausage if you're not keeping it vegetarian." },

/* ---------- Lunch ---------- */
{ id:"classic-chicken-salad", emoji:"🥪", title:"Classic Chicken Salad", tags:["Lunch","Make-ahead","Gluten-free"], time:15, serves:4,
  ing:[[3,"cup","cooked chicken, shredded or diced"],[0.5,"cup","mayonnaise"],[1,"tbsp","Dijon mustard"],[1,"tbsp","lemon juice"],[2,"","celery ribs, finely diced"],[2,"tbsp","red onion, minced"],[0.5,"tsp","salt"],[0.25,"tsp","black pepper"],[0.5,"cup","halved grapes (optional)"]],
  steps:["Stir mayo, mustard, lemon juice, salt and pepper in a large bowl.","Add chicken, celery, onion and grapes and fold until coated.","Taste and adjust salt. Serve on bread, in lettuce cups or with crackers."],
  note:"Rotisserie chicken makes this a 10-minute lunch." },

{ id:"smashed-chickpea-sandwich", emoji:"🥙", title:"Smashed Chickpea Salad Sandwich", tags:["Lunch","Vegetarian"], time:10, serves:4,
  ing:[[1,"can","chickpeas (15 oz), drained"],[3,"tbsp","mayonnaise"],[1,"tsp","Dijon mustard"],[1,"tbsp","lemon juice"],[1,"","celery rib, diced"],[2,"tbsp","chopped pickles"],[0.25,"tsp","salt"],[8,"","slices of bread"],[0,"","lettuce and tomato, to serve"]],
  steps:["Mash chickpeas with a fork until mostly broken up but still chunky.","Stir in mayo, mustard, lemon, celery, pickles and salt.","Spread on bread with lettuce and tomato."],
  note:"Use vegan mayo to make it fully plant-based." },

{ id:"cheesy-quesadillas", emoji:"🫓", title:"Crispy Quesadillas", tags:["Lunch","Kid-friendly"], time:15, serves:2,
  ing:[[4,"","large flour tortillas"],[2,"cup","shredded Mexican-blend cheese"],[1,"cup","cooked chicken or black beans"],[1,"tsp","butter"],[0,"","salsa and sour cream, to serve"]],
  steps:["Heat a large skillet over medium and brush lightly with butter.","Lay a tortilla in the pan, cover half with cheese and filling, and fold it over.","Cook 2–3 minutes per side until golden and the cheese has melted.","Cut into wedges and serve with salsa and sour cream."],
  note:"" },

{ id:"greek-salad", emoji:"🥗", title:"Greek Salad", tags:["Lunch","Side","Vegetarian","Gluten-free"], time:15, serves:4,
  ing:[[3,"","ripe tomatoes, cut in wedges"],[1,"","cucumber, sliced"],[0.5,"","red onion, thinly sliced"],[1,"","green bell pepper, sliced"],[0.5,"cup","kalamata olives"],[4,"oz","feta, in a block or crumbled"],[3,"tbsp","olive oil"],[1,"tbsp","red wine vinegar"],[1,"tsp","dried oregano"],[0.5,"tsp","salt"]],
  steps:["Combine tomatoes, cucumber, onion, pepper and olives in a large bowl.","Sprinkle with salt, then drizzle with oil and vinegar and toss.","Top with feta and oregano."],
  note:"Salt the tomatoes a few minutes before serving — they release juice that becomes the dressing." },

{ id:"caprese-pasta-salad", emoji:"🍅", title:"Caprese Pasta Salad", tags:["Lunch","Side","Vegetarian","Make-ahead"], time:25, serves:6,
  ing:[[12,"oz","short pasta (rotini or fusilli)"],[1,"pint","cherry tomatoes, halved"],[8,"oz","mozzarella pearls"],[0.5,"cup","fresh basil, torn"],[0.25,"cup","olive oil"],[2,"tbsp","balsamic vinegar"],[1,"","garlic clove, grated"],[1,"tsp","salt"]],
  steps:["Cook pasta in salted water until al dente. Drain and rinse under cold water.","Whisk oil, balsamic, garlic and salt in a large bowl.","Add pasta, tomatoes and mozzarella and toss.","Fold in basil just before serving."],
  note:"Keeps 3 days in the fridge; add the basil fresh each time." },

/* ---------- Dinner ---------- */
{ id:"weeknight-chicken-tacos", emoji:"🌮", title:"Weeknight Chicken Tacos", tags:["Dinner"], time:25, serves:4,
  ing:[[1.5,"lb","boneless chicken thighs"],[1,"tbsp","chili powder"],[1,"tsp","ground cumin"],[1,"tsp","garlic powder"],[0.75,"tsp","salt"],[1,"","lime, juiced"],[2,"tbsp","olive oil"],[8,"","small tortillas"],[2,"cup","shredded cabbage"],[0.5,"cup","sour cream or yogurt"],[0,"","cilantro and hot sauce, to serve"]],
  steps:["Toss chicken with chili powder, cumin, garlic powder, salt, half the lime juice and 1 tbsp oil.","Heat the remaining oil in a skillet over medium-high. Cook chicken 5–6 minutes per side until 165°F inside.","Rest 5 minutes, then slice thin and squeeze over the rest of the lime.","Warm tortillas in a dry pan, about 20 seconds per side.","Fill with chicken, cabbage, a spoon of sour cream, cilantro and hot sauce."],
  note:"Thighs stay juicy even if you overshoot a minute. Breasts work but pull them at 160°F." },

{ id:"one-pot-tomato-pasta", emoji:"🍝", title:"One-Pot Tomato Basil Pasta", tags:["Dinner","Vegetarian"], time:20, serves:4,
  ing:[[12,"oz","spaghetti or linguine"],[1,"pint","cherry tomatoes, halved"],[1,"","small onion, thinly sliced"],[4,"","garlic cloves, sliced"],[0.5,"tsp","red pepper flakes"],[3,"tbsp","olive oil"],[4.5,"cup","water"],[2,"tsp","salt"],[1,"cup","fresh basil leaves"],[0.5,"cup","grated parmesan"]],
  steps:["Put pasta, tomatoes, onion, garlic, pepper flakes, oil, water and salt in a wide pot.","Bring to a boil over high heat, stirring and tossing often with tongs.","Boil 9–10 minutes, stirring, until pasta is al dente and the water has become a glossy sauce.","Off heat, stir in basil and parmesan. Add a splash of water if it tightens up."],
  note:"Use a pot wide enough that the pasta lies flat — it cooks more evenly." },

{ id:"crispy-sheet-pan-gnocchi", emoji:"🥘", title:"Crispy Sheet-Pan Gnocchi & Veggies", tags:["Dinner","Vegetarian"], time:30, serves:3,
  ing:[[17,"oz","shelf-stable potato gnocchi"],[1,"","red bell pepper, chopped"],[1,"","zucchini, chopped"],[1,"","red onion, cut in wedges"],[3,"tbsp","olive oil"],[1,"tsp","Italian seasoning"],[0.75,"tsp","salt"],[4,"oz","fresh mozzarella, torn"]],
  steps:["Heat oven to 450°F.","Toss gnocchi (straight from the pack, uncooked) and vegetables with oil, seasoning and salt on a sheet pan.","Spread in one layer and roast 20 minutes, flipping halfway, until the gnocchi are golden.","Scatter mozzarella over and roast 3 more minutes until melty."],
  note:"Don't boil the gnocchi first — roasting them raw is what makes them crisp." },

{ id:"garlic-butter-salmon", emoji:"🐟", title:"Garlic Butter Salmon", tags:["Dinner","Gluten-free"], time:15, serves:4,
  ing:[[4,"","salmon fillets (6 oz each)"],[0.75,"tsp","salt"],[0.5,"tsp","black pepper"],[1,"tbsp","olive oil"],[3,"tbsp","butter"],[4,"","garlic cloves, minced"],[1,"","lemon, juiced"],[2,"tbsp","chopped parsley"]],
  steps:["Pat salmon dry and season with salt and pepper.","Heat oil in a skillet over medium-high. Cook salmon flesh-side down 4 minutes until golden, then flip.","Lower heat to medium, add butter and garlic, and spoon the foaming butter over the fish for 2–3 minutes until just cooked.","Squeeze in lemon, scatter parsley, and spoon the pan sauce over each fillet."],
  note:"Salmon is medium at 125°F, fully firm at 145°F." },

{ id:"fried-rice", emoji:"🍚", title:"Leftover Fried Rice", tags:["Dinner","Kid-friendly"], time:15, serves:3,
  ing:[[3,"cup","cold cooked rice"],[2,"tbsp","neutral oil"],[3,"","eggs, beaten"],[1,"cup","frozen peas and carrots"],[3,"","green onions, sliced"],[2,"","garlic cloves, minced"],[3,"tbsp","soy sauce"],[1,"tsp","sesame oil"]],
  steps:["Heat 1 tbsp oil in a large skillet over high. Scramble eggs until just set, then move to a plate.","Add the remaining oil, garlic and the white parts of the green onions for 30 seconds.","Add rice and press it flat. Let it sizzle 1–2 minutes without stirring, then toss.","Add peas and carrots, soy sauce and sesame oil. Stir-fry 2 minutes.","Fold the eggs back in and top with the green onion tops."],
  note:"Day-old rice is the secret — fresh rice turns mushy." },

{ id:"chicken-broccoli-stir-fry", emoji:"🥦", title:"Chicken & Broccoli Stir-Fry", tags:["Dinner"], time:25, serves:4,
  ing:[[1.5,"lb","chicken breast, thinly sliced"],[1,"tbsp","cornstarch (for chicken)"],[0.25,"cup","soy sauce"],[2,"tbsp","honey"],[1,"tbsp","rice vinegar"],[1,"tbsp","cornstarch (for sauce)"],[0.25,"cup","water"],[2,"tbsp","neutral oil"],[4,"cup","broccoli florets"],[1,"","red bell pepper, sliced"],[3,"","garlic cloves, minced"],[1,"tbsp","fresh ginger, grated"],[0,"","cooked rice, to serve"]],
  steps:["Toss chicken with 1 tbsp cornstarch. Whisk soy, honey, vinegar, the other tbsp cornstarch and water for the sauce.","Heat 1 tbsp oil in a large skillet or wok over high. Cook chicken in one layer until browned and cooked through, 5–6 minutes. Remove.","Add remaining oil, broccoli, pepper and 2 tbsp water. Cover 2 minutes, then uncover and stir-fry 2 minutes.","Add garlic and ginger for 30 seconds, return chicken, and pour in the sauce.","Stir until glossy and thick, about 1 minute. Serve over rice."],
  note:"" },

{ id:"beef-and-broccoli", emoji:"🥩", title:"Beef & Broccoli", tags:["Dinner"], time:25, serves:4,
  ing:[[1,"lb","flank steak, thinly sliced against the grain"],[1,"tbsp","cornstarch (for beef)"],[0.33,"cup","soy sauce"],[2,"tbsp","brown sugar"],[1,"tbsp","oyster sauce"],[1,"tsp","sesame oil"],[0.5,"cup","water"],[1,"tbsp","cornstarch (for sauce)"],[2,"tbsp","neutral oil"],[4,"cup","broccoli florets"],[3,"","garlic cloves, minced"],[1,"tsp","fresh ginger, grated"]],
  steps:["Toss beef with 1 tbsp cornstarch. Whisk soy, brown sugar, oyster sauce, sesame oil, water and the other tbsp cornstarch.","Heat 1 tbsp oil in a wok or skillet over high. Sear beef in batches, 1–2 minutes per side. Remove.","Add remaining oil and broccoli with 2 tbsp water. Cover 2 minutes until bright green.","Add garlic and ginger for 30 seconds, then the beef and sauce.","Toss until the sauce thickens, about 1 minute. Serve with rice."],
  note:"Freeze the steak 20 minutes before slicing — it's much easier to cut thin." },

{ id:"teriyaki-chicken", emoji:"🍗", title:"Sticky Teriyaki Chicken", tags:["Dinner","Kid-friendly"], time:25, serves:4,
  ing:[[1.5,"lb","boneless chicken thighs, cut in bite-size pieces"],[1,"tbsp","neutral oil"],[0.5,"cup","soy sauce"],[0.25,"cup","brown sugar"],[2,"tbsp","honey"],[1,"tbsp","rice vinegar"],[2,"","garlic cloves, grated"],[1,"tsp","fresh ginger, grated"],[1,"tbsp","cornstarch mixed with 2 tbsp water"],[0,"","sesame seeds and green onions, to serve"]],
  steps:["Whisk soy, brown sugar, honey, vinegar, garlic and ginger.","Brown chicken in oil in a large skillet over medium-high, 6–8 minutes, until cooked through.","Pour in the sauce and simmer 2 minutes.","Stir in the cornstarch slurry and cook until thick and glossy, about 1 minute.","Top with sesame seeds and green onions. Serve over rice."],
  note:"" },

{ id:"chicken-fajitas", emoji:"🫑", title:"Skillet Chicken Fajitas", tags:["Dinner"], time:30, serves:4,
  ing:[[1.5,"lb","chicken breast, cut in strips"],[2,"tsp","chili powder"],[1,"tsp","ground cumin"],[1,"tsp","paprika"],[0.5,"tsp","garlic powder"],[1,"tsp","salt"],[2,"tbsp","neutral oil"],[2,"","bell peppers, sliced"],[1,"","onion, sliced"],[1,"","lime"],[8,"","flour tortillas"],[0,"","sour cream, salsa, guacamole, to serve"]],
  steps:["Toss chicken with the spices, salt and 1 tbsp oil.","Heat a large skillet over high. Cook chicken in one layer, 3–4 minutes per side, until cooked through. Remove.","Add remaining oil, peppers and onion. Cook 5–6 minutes until charred at the edges but still crisp.","Return chicken, squeeze over the lime, and toss.","Serve in warm tortillas with toppings."],
  note:"" },

{ id:"lemon-chicken-orzo", emoji:"🍋", title:"One-Pot Lemon Chicken Orzo", tags:["Dinner"], time:30, serves:4,
  ing:[[1,"lb","chicken breast, cut in 1-inch pieces"],[1,"tsp","salt"],[2,"tbsp","olive oil"],[1,"","shallot or small onion, minced"],[3,"","garlic cloves, minced"],[1.5,"cup","orzo"],[3.5,"cup","chicken broth"],[1,"","lemon, zested and juiced"],[2,"cup","baby spinach"],[0.33,"cup","grated parmesan"]],
  steps:["Season chicken with half the salt. Brown in oil in a deep skillet over medium-high, 5 minutes. Remove.","Cook shallot and garlic 1 minute, then stir in orzo to toast for 1 minute.","Add broth and the remaining salt, bring to a simmer, and cook 8–10 minutes, stirring often, until the orzo is tender.","Return chicken with lemon zest and juice and cook 2 minutes until the chicken reaches 165°F.","Stir in spinach and parmesan until wilted and creamy."],
  note:"" },

{ id:"weeknight-chicken-curry", emoji:"🍛", title:"Coconut Chicken Curry", tags:["Dinner","Gluten-free"], time:40, serves:4,
  ing:[[2,"tbsp","neutral oil"],[1,"","onion, diced"],[3,"","garlic cloves, minced"],[1,"tbsp","fresh ginger, grated"],[2,"tbsp","curry powder"],[1.5,"lb","boneless chicken thighs, cubed"],[1,"can","diced tomatoes (14.5 oz)"],[1,"can","coconut milk (13.5 oz)"],[1,"tsp","salt"],[2,"cup","baby spinach"],[0,"","rice and cilantro, to serve"]],
  steps:["Cook onion in oil over medium until soft, 5 minutes.","Add garlic, ginger and curry powder and stir 1 minute.","Add chicken and stir to coat, cooking 3 minutes.","Add tomatoes, coconut milk and salt. Simmer uncovered 15–20 minutes, until the chicken is tender and the sauce thickens.","Stir in spinach until wilted. Serve over rice with cilantro."],
  note:"" },

{ id:"red-lentil-curry", emoji:"🥘", title:"Red Lentil Coconut Dal", tags:["Dinner","Vegetarian","Gluten-free"], time:35, serves:4,
  ing:[[1,"tbsp","neutral oil"],[1,"","onion, diced"],[3,"","garlic cloves, minced"],[1,"tbsp","fresh ginger, grated"],[2,"tsp","curry powder"],[1,"tsp","ground cumin"],[1,"cup","red lentils, rinsed"],[1,"can","diced tomatoes (14.5 oz)"],[1,"can","coconut milk (13.5 oz)"],[2.5,"cup","water or vegetable broth"],[1,"tsp","salt"],[1,"","lime"]],
  steps:["Cook onion in oil over medium until soft, 5 minutes. Add garlic, ginger, curry powder and cumin for 1 minute.","Add lentils, tomatoes, coconut milk, water and salt.","Simmer 20–25 minutes, stirring often, until lentils break down and it's thick.","Squeeze in lime and adjust salt. Serve with rice or naan."],
  note:"Thickens a lot as it sits — loosen leftovers with water." },

{ id:"beef-chili", emoji:"🌶️", title:"Classic Beef Chili", tags:["Dinner","Gluten-free","Make-ahead"], time:55, serves:6,
  ing:[[1,"tbsp","olive oil"],[1,"","onion, diced"],[1,"","bell pepper, diced"],[3,"","garlic cloves, minced"],[1.5,"lb","ground beef"],[3,"tbsp","chili powder"],[2,"tsp","ground cumin"],[1,"tsp","dried oregano"],[1,"tsp","salt"],[1,"can","crushed tomatoes (28 oz)"],[2,"can","kidney beans (15 oz), drained"],[1,"cup","beef broth"],[0,"","cheese, sour cream, green onions, to serve"]],
  steps:["Cook onion and pepper in oil in a large pot over medium until soft, 6 minutes. Add garlic for 30 seconds.","Add beef and cook, breaking it up, until no longer pink, 6–8 minutes. Drain excess fat.","Stir in chili powder, cumin, oregano and salt for 1 minute.","Add tomatoes, beans and broth. Simmer partly covered 30 minutes, stirring now and then.","Taste, adjust seasoning, and serve with toppings."],
  note:"Better the next day. Freezes for 3 months." },

{ id:"spaghetti-meat-sauce", emoji:"🍝", title:"Spaghetti with Meat Sauce", tags:["Dinner","Kid-friendly"], time:45, serves:6,
  ing:[[1,"tbsp","olive oil"],[1,"lb","ground beef"],[1,"","onion, finely diced"],[3,"","garlic cloves, minced"],[2,"tbsp","tomato paste"],[1,"can","crushed tomatoes (28 oz)"],[1,"tsp","Italian seasoning"],[1,"tsp","salt"],[0.5,"tsp","sugar"],[1,"lb","spaghetti"],[0,"","parmesan, to serve"]],
  steps:["Brown beef in oil in a large pot over medium-high, breaking it up. Drain excess fat.","Add onion and cook 5 minutes, then garlic and tomato paste for 1 minute.","Add tomatoes, Italian seasoning, salt and sugar. Simmer 25 minutes.","Meanwhile cook spaghetti in salted water. Save ½ cup pasta water before draining.","Toss pasta with the sauce, loosening with pasta water. Serve with parmesan."],
  note:"" },

{ id:"baked-ziti", emoji:"🧀", title:"Baked Ziti", tags:["Dinner","Make-ahead","Kid-friendly"], time:60, serves:8,
  ing:[[1,"lb","ziti or penne"],[1,"lb","Italian sausage, casings removed"],[24,"oz","jar marinara sauce"],[15,"oz","ricotta"],[1,"","egg"],[2,"cup","shredded mozzarella"],[0.5,"cup","grated parmesan"],[0.5,"tsp","salt"]],
  steps:["Heat oven to 375°F. Cook pasta 2 minutes less than the package says. Drain.","Brown sausage in a skillet, breaking it up. Drain fat and stir in the marinara.","Mix ricotta, egg, half the parmesan and salt.","In a 9×13 dish layer half the pasta, all the ricotta, half the sauce and half the mozzarella. Repeat with the remaining pasta, sauce, mozzarella and parmesan.","Bake covered with foil 20 minutes, then uncovered 15 minutes until bubbly and browned. Rest 10 minutes."],
  note:"Assemble up to a day ahead; add 10 minutes to the covered bake if it's cold from the fridge." },

{ id:"turkey-meatballs", emoji:"🧆", title:"Baked Turkey Meatballs", tags:["Dinner","Make-ahead","Kid-friendly"], time:30, serves:4,
  ing:[[1,"lb","ground turkey"],[0.5,"cup","panko breadcrumbs"],[0.25,"cup","grated parmesan"],[1,"","egg"],[2,"tbsp","milk"],[2,"","garlic cloves, grated"],[1,"tsp","Italian seasoning"],[0.75,"tsp","salt"]],
  steps:["Heat oven to 400°F and line a sheet pan with parchment.","Mix everything gently with your hands until just combined.","Roll into 1½-inch balls (about 16) and place on the pan.","Bake 18–20 minutes, until browned and 165°F inside.","Serve with marinara over pasta, or in sub rolls."],
  note:"Wet your hands to keep the mixture from sticking." },

{ id:"smash-burgers", emoji:"🍔", title:"Smash Burgers", tags:["Dinner","Kid-friendly"], time:20, serves:4,
  ing:[[1.5,"lb","80/20 ground beef"],[1,"tsp","salt"],[0.5,"tsp","black pepper"],[8,"","slices American cheese"],[4,"","burger buns, toasted"],[0,"","pickles, onion, lettuce, sauce, to serve"]],
  steps:["Divide beef into 8 loose balls (3 oz each). Don't pack them.","Heat a cast-iron skillet or griddle over high until smoking.","Add 2–3 balls, smash flat with a sturdy spatula, and season with salt and pepper.","Cook 2 minutes until deeply browned, scrape up, flip, add cheese, and cook 1 minute more.","Stack two patties per bun with toppings."],
  note:"A sheet of parchment between the spatula and the meat keeps it from sticking when you smash." },

{ id:"sloppy-joes", emoji:"🥪", title:"Sloppy Joes", tags:["Dinner","Kid-friendly"], time:25, serves:4,
  ing:[[1,"lb","ground beef"],[0.5,"","onion, finely diced"],[0.5,"","green bell pepper, finely diced"],[2,"","garlic cloves, minced"],[0.75,"cup","ketchup"],[0.25,"cup","water"],[1,"tbsp","brown sugar"],[1,"tbsp","Worcestershire sauce"],[1,"tsp","yellow mustard"],[0.5,"tsp","salt"],[4,"","hamburger buns"]],
  steps:["Brown beef with onion and pepper in a skillet over medium-high, 8 minutes. Drain fat.","Add garlic for 30 seconds.","Stir in ketchup, water, brown sugar, Worcestershire, mustard and salt.","Simmer 10 minutes until thick.","Spoon onto toasted buns."],
  note:"" },

{ id:"shrimp-scampi", emoji:"🍤", title:"Shrimp Scampi", tags:["Dinner"], time:25, serves:4,
  ing:[[12,"oz","linguine"],[1,"lb","large shrimp, peeled and deveined"],[0.5,"tsp","salt"],[2,"tbsp","olive oil"],[4,"tbsp","butter"],[5,"","garlic cloves, thinly sliced"],[0.25,"tsp","red pepper flakes"],[0.5,"cup","dry white wine or chicken broth"],[1,"","lemon, zested and juiced"],[0.25,"cup","chopped parsley"]],
  steps:["Cook linguine in salted water. Save 1 cup pasta water, then drain.","Season shrimp with salt. Heat oil in a large skillet over medium-high and cook shrimp 1 minute per side. Remove.","Lower heat to medium, add 2 tbsp butter, garlic and pepper flakes for 1 minute.","Add wine and simmer 2 minutes, then the remaining butter, lemon zest and juice.","Toss in pasta, shrimp, parsley and pasta water as needed until silky."],
  note:"Pull the shrimp as soon as they turn pink — they finish in the sauce." },

{ id:"lemon-garlic-chicken-thighs", emoji:"🍗", title:"Crispy Lemon-Herb Chicken Thighs", tags:["Dinner","Gluten-free"], time:50, serves:4,
  ing:[[8,"","bone-in, skin-on chicken thighs (about 3 lb)"],[2,"tbsp","olive oil"],[1,"tsp","salt"],[0.5,"tsp","black pepper"],[1,"tsp","garlic powder"],[1,"tsp","dried thyme"],[1,"","lemon, sliced"]],
  steps:["Heat oven to 425°F. Pat chicken very dry.","Rub with oil, salt, pepper, garlic powder and thyme.","Arrange skin-side up on a sheet pan with lemon slices tucked around.","Roast 35–40 minutes, until the skin is crisp and the thickest part reads at least 175°F.","Rest 5 minutes and squeeze the roasted lemon over."],
  note:"Thighs are safe at 165°F but get more tender at 175–185°F." },

{ id:"pan-seared-pork-chops", emoji:"🥩", title:"Pan-Seared Pork Chops", tags:["Dinner","Gluten-free"], time:20, serves:4,
  ing:[[4,"","boneless pork chops, about 1 inch thick"],[1,"tsp","salt"],[0.5,"tsp","black pepper"],[1,"tsp","paprika"],[1,"tbsp","neutral oil"],[2,"tbsp","butter"],[2,"","garlic cloves, smashed"],[2,"","sprigs fresh thyme (or ½ tsp dried)"]],
  steps:["Pat chops dry and season with salt, pepper and paprika.","Heat oil in a skillet over medium-high. Sear chops 4 minutes without moving.","Flip, add butter, garlic and thyme, and baste with the melted butter for 3–4 minutes.","Remove at 145°F and rest 3 minutes before serving."],
  note:"" },

{ id:"sheet-pan-sausage-potatoes", emoji:"🥔", title:"Sheet-Pan Sausage, Potatoes & Peppers", tags:["Dinner","Gluten-free"], time:50, serves:4,
  ing:[[1.5,"lb","baby potatoes, halved"],[3,"tbsp","olive oil"],[1,"tsp","paprika"],[1,"tsp","garlic powder"],[0.75,"tsp","salt"],[14,"oz","smoked sausage, sliced"],[2,"","bell peppers, chopped"],[1,"","onion, cut in wedges"]],
  steps:["Heat oven to 425°F.","Toss potatoes with half the oil, spices and salt on a sheet pan. Roast 20 minutes.","Toss sausage, peppers and onion with the remaining oil.","Add to the pan, stir everything, and roast 20 minutes more until the potatoes are tender and browned."],
  note:"" },

{ id:"stovetop-mac-and-cheese", emoji:"🧀", title:"Stovetop Mac & Cheese", tags:["Dinner","Kid-friendly","Vegetarian"], time:20, serves:4,
  ing:[[8,"oz","elbow macaroni"],[2,"tbsp","butter"],[2,"tbsp","all-purpose flour"],[2,"cup","milk"],[0.5,"tsp","dry mustard powder"],[0.5,"tsp","salt"],[2,"cup","shredded sharp cheddar (8 oz)"]],
  steps:["Cook pasta in salted water until just tender. Drain.","In the same pot melt butter over medium, whisk in flour, and cook 1 minute.","Slowly whisk in milk and cook, stirring, until it thickens slightly, 4–5 minutes.","Off heat, stir in mustard, salt and cheese until smooth.","Fold in the pasta. Loosen with a splash of milk if needed."],
  note:"Shred the cheese yourself — pre-shredded can make the sauce grainy." },

{ id:"homemade-pizza", emoji:"🍕", title:"Homemade Pizza Night", tags:["Dinner","Kid-friendly","Baking","Vegetarian"], time:90, serves:4,
  ing:[[3,"cup","all-purpose flour"],[2.25,"tsp","instant yeast (1 packet)"],[1.5,"tsp","salt"],[1,"tsp","sugar"],[1,"cup","warm water"],[2,"tbsp","olive oil"],[1,"cup","pizza sauce"],[2,"cup","shredded mozzarella"],[0,"","your favorite toppings"]],
  steps:["Mix flour, yeast, salt and sugar. Add warm water and oil and knead 5–7 minutes until smooth.","Cover and let rise in a warm spot until doubled, about 1 hour.","Heat oven to 500°F with a sheet pan or pizza stone inside.","Divide dough in two and stretch each into a 12-inch round on parchment.","Top with sauce, cheese and toppings. Slide onto the hot pan and bake 10–12 minutes until the crust is browned."],
  note:"Make the dough the night before and refrigerate it — it tastes even better." },

{ id:"slow-cooker-pulled-pork", emoji:"🐖", title:"Slow Cooker Pulled Pork", tags:["Dinner","Make-ahead","Gluten-free"], time:490, serves:8,
  ing:[[3.5,"lb","boneless pork shoulder"],[2,"tbsp","brown sugar"],[1,"tbsp","paprika"],[2,"tsp","salt"],[1,"tsp","garlic powder"],[1,"tsp","onion powder"],[0.5,"tsp","ground cumin"],[0.5,"cup","chicken broth"],[1,"cup","barbecue sauce"],[0,"","buns and coleslaw, to serve"]],
  steps:["Mix brown sugar, paprika, salt, garlic powder, onion powder and cumin. Rub all over the pork.","Place in the slow cooker and pour the broth around it.","Cook on low 8–10 hours, until it shreds easily with a fork.","Shred, discard excess fat, and toss with barbecue sauce and a little of the cooking liquid.","Pile on buns with coleslaw."],
  note:"Check your barbecue sauce label if you need it gluten-free." },

/* ---------- Soups ---------- */
{ id:"black-bean-soup", emoji:"🍲", title:"20-Minute Black Bean Soup", tags:["Soup","Dinner","Vegetarian","Gluten-free"], time:20, serves:4,
  ing:[[2,"tbsp","olive oil"],[1,"","onion, diced"],[3,"","garlic cloves, minced"],[2,"tsp","ground cumin"],[1,"tsp","smoked paprika"],[3,"can","black beans (15 oz), undrained"],[2,"cup","vegetable broth"],[1,"cup","salsa"],[1,"","lime, juiced"],[0,"","avocado, cheese, tortilla chips, to serve"]],
  steps:["Cook onion in oil over medium heat until soft, about 5 minutes. Add garlic, cumin and paprika for 30 seconds.","Add beans with their liquid, broth and salsa. Simmer 10 minutes.","Blend about half the soup (an immersion blender is easiest) so it's thick but still chunky.","Stir in lime juice and season to taste. Top as you like."],
  note:"" },

{ id:"creamy-tomato-soup", emoji:"🥫", title:"Creamy Tomato Soup", tags:["Soup","Lunch","Vegetarian","Gluten-free"], time:30, serves:4,
  ing:[[2,"tbsp","butter"],[1,"","onion, diced"],[2,"","garlic cloves, minced"],[1,"can","whole peeled tomatoes (28 oz)"],[1.5,"cup","vegetable or chicken broth"],[1,"tsp","sugar"],[0.5,"tsp","salt"],[0.5,"cup","heavy cream"]],
  steps:["Melt butter in a pot over medium. Cook onion until soft, 6 minutes, then garlic for 30 seconds.","Add tomatoes with their juice, broth, sugar and salt. Simmer 15 minutes.","Blend until smooth.","Stir in cream and warm through. Taste for salt."],
  note:"Serve with grilled cheese for dipping." },

{ id:"chicken-noodle-soup", emoji:"🍜", title:"Chicken Noodle Soup", tags:["Soup","Dinner","Kid-friendly"], time:45, serves:6,
  ing:[[2,"tbsp","butter or olive oil"],[1,"","onion, diced"],[3,"","carrots, sliced"],[3,"","celery ribs, sliced"],[2,"","garlic cloves, minced"],[8,"cup","chicken broth"],[1,"tsp","dried thyme"],[1,"","bay leaf"],[1.5,"lb","boneless chicken breasts"],[6,"oz","wide egg noodles"],[1,"tsp","salt"],[2,"tbsp","chopped parsley"]],
  steps:["Cook onion, carrots and celery in butter in a large pot over medium until softened, 8 minutes. Add garlic for 30 seconds.","Add broth, thyme, bay leaf and the whole chicken breasts. Simmer gently 15–18 minutes until the chicken reaches 165°F.","Remove chicken, shred it with two forks, and discard the bay leaf.","Add noodles and simmer until tender, 6–8 minutes.","Return chicken, add salt to taste, and stir in parsley."],
  note:"If you plan leftovers, cook the noodles separately so they don't soak up all the broth." },

{ id:"hearty-lentil-soup", emoji:"🥣", title:"Hearty Lentil Soup", tags:["Soup","Dinner","Vegetarian","Gluten-free","Make-ahead"], time:45, serves:6,
  ing:[[2,"tbsp","olive oil"],[1,"","onion, diced"],[2,"","carrots, diced"],[2,"","celery ribs, diced"],[3,"","garlic cloves, minced"],[1,"tsp","ground cumin"],[1,"tsp","smoked paprika"],[1.5,"cup","brown or green lentils, rinsed"],[1,"can","diced tomatoes (14.5 oz)"],[6,"cup","vegetable broth"],[1,"tsp","salt"],[2,"cup","baby spinach"],[1,"tbsp","lemon juice"]],
  steps:["Cook onion, carrots and celery in oil over medium until soft, 8 minutes.","Add garlic, cumin and paprika for 30 seconds.","Add lentils, tomatoes, broth and salt. Bring to a boil, then simmer 30 minutes until the lentils are tender.","Stir in spinach and lemon juice. Adjust salt."],
  note:"" },

{ id:"loaded-potato-soup", emoji:"🥔", title:"Loaded Baked Potato Soup", tags:["Soup","Dinner","Gluten-free"], time:40, serves:6,
  ing:[[4,"","slices bacon, chopped"],[1,"","onion, diced"],[2,"","garlic cloves, minced"],[2.5,"lb","russet potatoes, peeled and cubed"],[4,"cup","chicken broth"],[1,"tsp","salt"],[1,"cup","milk"],[0.5,"cup","sour cream"],[1.5,"cup","shredded cheddar"],[3,"","green onions, sliced"]],
  steps:["Cook bacon in a large pot over medium until crisp. Remove, leaving 2 tbsp fat.","Cook onion in the fat until soft, 5 minutes, then garlic for 30 seconds.","Add potatoes, broth and salt. Simmer 15 minutes until the potatoes are very tender.","Mash about half the potatoes right in the pot, then stir in milk, sour cream and 1 cup cheese.","Serve topped with bacon, the remaining cheese and green onions."],
  note:"" },

{ id:"minestrone", emoji:"🥕", title:"Easy Minestrone", tags:["Soup","Dinner","Vegetarian"], time:40, serves:6,
  ing:[[2,"tbsp","olive oil"],[1,"","onion, diced"],[2,"","carrots, diced"],[2,"","celery ribs, diced"],[1,"","zucchini, diced"],[3,"","garlic cloves, minced"],[1,"tsp","Italian seasoning"],[1,"can","diced tomatoes (14.5 oz)"],[6,"cup","vegetable broth"],[1,"can","cannellini beans (15 oz), drained"],[1,"cup","small pasta (ditalini or shells)"],[1,"tsp","salt"],[2,"cup","baby spinach or chopped kale"],[0,"","grated parmesan, to serve"]],
  steps:["Cook onion, carrots and celery in oil over medium until soft, 8 minutes.","Add zucchini, garlic and Italian seasoning and cook 2 minutes.","Add tomatoes, broth, beans and salt. Simmer 10 minutes.","Add pasta and simmer until tender, 8–10 minutes.","Stir in greens until wilted. Top with parmesan."],
  note:"" },

/* ---------- Sides ---------- */
{ id:"roasted-broccoli", emoji:"🥦", title:"Crispy Roasted Broccoli", tags:["Side","Vegetarian","Gluten-free"], time:25, serves:4,
  ing:[[1.5,"lb","broccoli, cut in florets"],[3,"tbsp","olive oil"],[0.5,"tsp","salt"],[0.25,"tsp","black pepper"],[0.25,"cup","grated parmesan"],[0.5,"","lemon"]],
  steps:["Heat oven to 425°F.","Toss broccoli with oil, salt and pepper on a sheet pan and spread out so pieces don't touch.","Roast 18–22 minutes until the edges are deeply browned.","Toss with parmesan and a squeeze of lemon."],
  note:"Dry the broccoli well after washing — wet florets steam instead of crisping." },

{ id:"garlic-mashed-potatoes", emoji:"🥔", title:"Garlic Mashed Potatoes", tags:["Side","Vegetarian","Gluten-free"], time:35, serves:6,
  ing:[[3,"lb","Yukon Gold potatoes, peeled and cubed"],[6,"","garlic cloves, peeled"],[1,"tbsp","salt (for the water)"],[4,"tbsp","butter"],[0.75,"cup","milk, warmed"],[0.5,"cup","sour cream"],[1,"tsp","salt"]],
  steps:["Put potatoes and garlic in a pot, cover with cold water by an inch, and add 1 tbsp salt.","Boil, then simmer 15–18 minutes until a knife slides in easily.","Drain well and return to the pot over low heat for 1 minute to dry.","Mash with butter, then stir in warm milk, sour cream and salt."],
  note:"Starting potatoes in cold water cooks them evenly all the way through." },

{ id:"crispy-roasted-potatoes", emoji:"🥔", title:"Crispy Roasted Potatoes", tags:["Side","Vegetarian","Gluten-free"], time:45, serves:4,
  ing:[[2,"lb","Yukon Gold potatoes, cut in 1-inch chunks"],[3,"tbsp","olive oil"],[1,"tsp","salt"],[0.5,"tsp","garlic powder"],[0.5,"tsp","paprika"],[1,"tsp","dried rosemary"]],
  steps:["Heat oven to 425°F.","Toss potatoes with everything on a sheet pan and spread in one layer.","Roast 35–40 minutes, flipping once halfway, until golden and crisp."],
  note:"" },

{ id:"garlicky-green-beans", emoji:"🫛", title:"Garlicky Green Beans", tags:["Side","Vegetarian","Gluten-free"], time:15, serves:4,
  ing:[[1,"lb","green beans, trimmed"],[1,"tbsp","olive oil"],[1,"tbsp","butter"],[3,"","garlic cloves, sliced"],[0.5,"tsp","salt"],[0.5,"","lemon, zested"]],
  steps:["Heat oil in a large skillet over medium-high. Add green beans and 3 tbsp water, then cover.","Steam 4 minutes, then uncover and cook until the water is gone and the beans start to blister, 3–4 minutes.","Add butter and garlic and cook 1 minute.","Season with salt and lemon zest."],
  note:"" },

{ id:"creamy-coleslaw", emoji:"🥬", title:"Creamy Coleslaw", tags:["Side","Vegetarian","Gluten-free","Make-ahead"], time:10, serves:6,
  ing:[[14,"oz","bag coleslaw mix"],[0.5,"cup","mayonnaise"],[1,"tbsp","apple cider vinegar"],[1,"tbsp","sugar"],[0.5,"tsp","celery seed"],[0.5,"tsp","salt"]],
  steps:["Whisk mayo, vinegar, sugar, celery seed and salt in a large bowl.","Add coleslaw mix and toss well.","Chill at least 30 minutes so the cabbage softens slightly."],
  note:"Perfect on pulled pork sandwiches." },

{ id:"skillet-cornbread", emoji:"🌽", title:"Golden Cornbread", tags:["Side","Baking","Vegetarian"], time:35, serves:8,
  ing:[[1,"cup","yellow cornmeal"],[1,"cup","all-purpose flour"],[0.25,"cup","sugar"],[1,"tbsp","baking powder"],[0.5,"tsp","salt"],[1,"cup","milk"],[2,"","eggs"],[0.33,"cup","butter, melted"]],
  steps:["Heat oven to 400°F and grease a 9-inch cast-iron skillet or square pan.","Whisk cornmeal, flour, sugar, baking powder and salt.","Whisk milk, eggs and butter, then stir into the dry ingredients until just combined.","Pour into the pan and bake 20–25 minutes, until golden and a toothpick comes out clean."],
  note:"Heat the greased skillet in the oven first for a crunchy crust." },

{ id:"easy-garlic-bread", emoji:"🥖", title:"Garlic Bread", tags:["Side","Vegetarian","Kid-friendly"], time:20, serves:6,
  ing:[[1,"","loaf Italian bread or baguette"],[0.5,"cup","butter, softened"],[4,"","garlic cloves, minced"],[2,"tbsp","chopped parsley"],[0.25,"tsp","salt"],[0.25,"cup","grated parmesan"]],
  steps:["Heat oven to 400°F.","Mash butter with garlic, parsley and salt.","Split the loaf lengthwise and spread the butter on both cut sides. Sprinkle with parmesan.","Bake cut-side up on a sheet pan 10–12 minutes until golden at the edges.","Slice and serve hot."],
  note:"" },

{ id:"cilantro-lime-rice", emoji:"🍚", title:"Cilantro Lime Rice", tags:["Side","Vegetarian","Gluten-free"], time:30, serves:4,
  ing:[[1,"cup","long-grain white rice, rinsed"],[1.75,"cup","water"],[1,"tbsp","butter"],[0.5,"tsp","salt"],[1,"","lime, zested and juiced"],[0.25,"cup","chopped cilantro"]],
  steps:["Bring water, butter and salt to a boil in a saucepan. Stir in rice.","Cover, reduce heat to low, and cook 18 minutes without lifting the lid.","Remove from heat and rest, still covered, 10 minutes.","Fluff with a fork and stir in lime zest, juice and cilantro."],
  note:"" },

/* ---------- Desserts ---------- */
{ id:"chocolate-chip-cookies", emoji:"🍪", title:"Chewy Chocolate Chip Cookies", tags:["Dessert","Baking","Kid-friendly","Vegetarian"], time:30, serves:24,
  ing:[[1,"cup","butter, melted"],[1,"cup","brown sugar"],[0.5,"cup","white sugar"],[2,"","eggs"],[2,"tsp","vanilla"],[2.25,"cup","all-purpose flour"],[1,"tsp","baking soda"],[1,"tsp","salt"],[2,"cup","chocolate chips"]],
  steps:["Heat oven to 350°F and line two baking sheets.","Whisk melted butter with both sugars until smooth, then whisk in eggs and vanilla.","Stir in flour, baking soda and salt, then fold in chocolate chips.","Scoop 2-tablespoon balls onto the sheets, 2 inches apart.","Bake 10–11 minutes, until the edges are golden and the centers look slightly underdone. Cool on the sheet 5 minutes."],
  note:"Chill the dough 30 minutes for thicker cookies." },

{ id:"fudgy-brownies", emoji:"🟫", title:"Fudgy Cocoa Brownies", tags:["Dessert","Baking","Vegetarian"], time:40, serves:16,
  ing:[[0.5,"cup","butter, melted"],[1,"cup","sugar"],[2,"","eggs"],[1,"tsp","vanilla"],[0.33,"cup","unsweetened cocoa powder"],[0.5,"cup","all-purpose flour"],[0.25,"tsp","salt"],[0.25,"tsp","baking powder"],[0.5,"cup","chocolate chips (optional)"]],
  steps:["Heat oven to 350°F and line an 8×8-inch pan with parchment.","Whisk melted butter and sugar, then whisk in eggs and vanilla.","Stir in cocoa, flour, salt and baking powder just until combined. Fold in chips.","Spread in the pan and bake 20–25 minutes, until the center is just set.","Cool completely before cutting into 16 squares."],
  note:"Pull them when a toothpick shows a few moist crumbs — that's fudgy, not underdone." },

{ id:"apple-crisp", emoji:"🍎", title:"Apple Crisp", tags:["Dessert","Baking","Vegetarian"], time:60, serves:8,
  ing:[[6,"","apples, peeled and sliced (about 2½ lb)"],[2,"tbsp","sugar"],[1,"tbsp","lemon juice"],[1,"tbsp","all-purpose flour (for apples)"],[1.5,"tsp","cinnamon, divided"],[0.75,"cup","all-purpose flour (for topping)"],[0.75,"cup","rolled oats"],[0.75,"cup","brown sugar"],[0.25,"tsp","salt"],[0.5,"cup","cold butter, cubed"]],
  steps:["Heat oven to 375°F.","Toss apples with sugar, lemon juice, 1 tbsp flour and 1 tsp cinnamon. Spread in a 9-inch square baking dish.","Mix the topping flour, oats, brown sugar, salt and remaining cinnamon. Rub in butter with your fingers until clumpy.","Scatter topping over the apples.","Bake 40–45 minutes, until golden and bubbling at the edges. Cool 10 minutes."],
  note:"Serve warm with vanilla ice cream." },

{ id:"lemon-bars", emoji:"🍋", title:"Lemon Bars", tags:["Dessert","Baking","Vegetarian"], time:120, serves:16,
  ing:[[1,"cup","all-purpose flour (for crust)"],[0.25,"cup","powdered sugar, plus more for dusting"],[0.5,"cup","butter, melted"],[1,"pinch","salt"],[2,"","eggs"],[1,"cup","sugar"],[2,"tbsp","all-purpose flour (for filling)"],[0.33,"cup","fresh lemon juice"],[1,"","lemon, zested"]],
  steps:["Heat oven to 350°F and line an 8×8-inch pan with parchment.","Mix crust flour, powdered sugar, butter and salt. Press into the pan and bake 15–18 minutes until lightly golden.","Whisk eggs, sugar, filling flour, lemon juice and zest until smooth.","Pour over the hot crust and bake 20–22 minutes, until the center no longer jiggles.","Cool, then chill 1 hour. Dust with powdered sugar and cut into squares."],
  note:"" },

{ id:"chocolate-mug-cake", emoji:"☕", title:"2-Minute Chocolate Mug Cake", tags:["Dessert","Kid-friendly","Vegetarian"], time:5, serves:1,
  ing:[[4,"tbsp","all-purpose flour"],[2,"tbsp","unsweetened cocoa powder"],[3,"tbsp","sugar"],[0.25,"tsp","baking powder"],[1,"pinch","salt"],[3,"tbsp","milk"],[2,"tbsp","neutral oil"],[0.25,"tsp","vanilla"],[1,"tbsp","chocolate chips"]],
  steps:["Stir flour, cocoa, sugar, baking powder and salt in a large mug.","Add milk, oil and vanilla and mix until smooth. Drop chips on top.","Microwave 60–90 seconds, until risen and just set on top.","Cool 1 minute before eating."],
  note:"Microwaves vary — start checking at 60 seconds." },

{ id:"peanut-butter-cookies", emoji:"🥜", title:"Flourless Peanut Butter Cookies", tags:["Dessert","Baking","Gluten-free","Vegetarian","Kid-friendly"], time:20, serves:18,
  ing:[[1,"cup","creamy peanut butter"],[1,"cup","sugar"],[1,"","egg"],[1,"tsp","vanilla"],[0.5,"tsp","baking soda"]],
  steps:["Heat oven to 350°F and line a baking sheet.","Stir everything together until smooth.","Roll into 1-inch balls, place 2 inches apart, and press a crisscross with a fork.","Bake 10–12 minutes, until just set. Cool on the sheet 5 minutes — they firm up as they cool."],
  note:"Use regular peanut butter, not natural — the oil separation makes them spread." },

{ id:"crispy-rice-treats", emoji:"🍬", title:"Crispy Rice Treats", tags:["Dessert","Kid-friendly"], time:15, serves:16,
  ing:[[3,"tbsp","butter"],[10,"oz","bag mini marshmallows"],[1,"pinch","salt"],[0.5,"tsp","vanilla"],[6,"cup","crisp rice cereal"]],
  steps:["Grease a 9×13-inch pan.","Melt butter in a large pot over low heat. Add marshmallows and stir until completely melted.","Off heat, stir in salt and vanilla, then the cereal until evenly coated.","Press gently into the pan with a greased spatula. Cool 30 minutes, then cut."],
  note:"Press lightly — packing them hard makes them dense." },

{ id:"banana-nice-cream", emoji:"🍨", title:"Banana Nice Cream", tags:["Dessert","Kid-friendly","Gluten-free","Vegetarian"], time:5, serves:2,
  ing:[[4,"","ripe bananas, sliced and frozen"],[3,"tbsp","milk (any kind)"],[1,"tbsp","cocoa powder or peanut butter (optional)"]],
  steps:["Let frozen banana slices sit 5 minutes to soften slightly.","Blend with milk, scraping down often, until smooth like soft-serve.","Blend in cocoa or peanut butter if using. Eat right away, or freeze 1 hour for a firmer scoop."],
  note:"" },

/* ---------- Snacks ---------- */
{ id:"chunky-guacamole", emoji:"🥑", title:"Chunky Guacamole", tags:["Snack","Vegetarian","Gluten-free"], time:10, serves:4,
  ing:[[3,"","ripe avocados"],[1,"","lime, juiced"],[0.5,"tsp","salt"],[0.25,"cup","red onion, finely diced"],[1,"","jalapeño, seeded and minced"],[2,"tbsp","chopped cilantro"],[1,"","Roma tomato, diced"]],
  steps:["Mash avocados with lime juice and salt, leaving some chunks.","Fold in onion, jalapeño, cilantro and tomato.","Taste and add more salt or lime."],
  note:"Press plastic wrap directly on the surface to keep it green." },

{ id:"smooth-hummus", emoji:"🫘", title:"Extra-Smooth Hummus", tags:["Snack","Vegetarian","Gluten-free"], time:10, serves:6,
  ing:[[1,"can","chickpeas (15 oz), drained"],[0.25,"cup","tahini"],[3,"tbsp","lemon juice"],[1,"","garlic clove"],[0.5,"tsp","salt"],[0.5,"tsp","ground cumin"],[3,"tbsp","ice water"],[2,"tbsp","olive oil, plus more to serve"]],
  steps:["Blend tahini and lemon juice in a food processor 1 minute until whipped.","Add garlic, salt and cumin, then chickpeas, and blend 2 minutes.","With the motor running, drizzle in ice water and oil until very smooth, about 2 minutes more.","Spread in a bowl and drizzle with oil."],
  note:"Blending the tahini and lemon first is what makes it fluffy." },

{ id:"fresh-pico-de-gallo", emoji:"🍅", title:"Pico de Gallo", tags:["Snack","Vegetarian","Gluten-free"], time:10, serves:6,
  ing:[[4,"","Roma tomatoes, diced"],[0.5,"","white onion, finely diced"],[1,"","jalapeño, minced"],[0.33,"cup","chopped cilantro"],[1,"","lime, juiced"],[0.5,"tsp","salt"]],
  steps:["Combine everything in a bowl.","Rest 10 minutes so the flavors come together.","Taste and adjust lime and salt."],
  note:"" },

{ id:"stovetop-popcorn", emoji:"🍿", title:"Stovetop Popcorn", tags:["Snack","Kid-friendly","Gluten-free","Vegetarian"], time:10, serves:4,
  ing:[[3,"tbsp","coconut or neutral oil"],[0.5,"cup","popcorn kernels"],[2,"tbsp","butter, melted"],[0.5,"tsp","fine salt"]],
  steps:["Heat oil and 3 kernels in a large pot over medium-high, covered.","When those kernels pop, add the rest, cover, and shake the pot.","Shake every few seconds, leaving the lid slightly ajar to let steam out.","When popping slows to 2 seconds between pops, remove from the heat.","Toss with butter and salt."],
  note:"Fine salt (or blitzed table salt) sticks far better than coarse." },

{ id:"classic-deviled-eggs", emoji:"🥚", title:"Classic Deviled Eggs", tags:["Snack","Gluten-free","Vegetarian","Make-ahead"], time:30, serves:6,
  ing:[[6,"","eggs"],[0.25,"cup","mayonnaise"],[1,"tsp","Dijon mustard"],[1,"tsp","pickle juice or white vinegar"],[0.25,"tsp","salt"],[0,"","paprika, to garnish"]],
  steps:["Cover eggs with cold water in a pot and bring to a boil. Turn off the heat, cover, and let sit 12 minutes.","Move to ice water for 5 minutes, then peel.","Halve lengthwise and pop the yolks into a bowl.","Mash yolks with mayo, mustard, pickle juice and salt until smooth.","Spoon or pipe back into the whites and dust with paprika."],
  note:"Week-old eggs peel more easily than very fresh ones." },

{ id:"no-bake-energy-bites", emoji:"⚡", title:"No-Bake Energy Bites", tags:["Snack","Make-ahead","Kid-friendly","Vegetarian"], time:40, serves:20,
  ing:[[1,"cup","rolled oats"],[0.5,"cup","peanut butter"],[0.33,"cup","honey"],[0.5,"cup","mini chocolate chips"],[2,"tbsp","ground flaxseed"],[1,"tsp","vanilla"]],
  steps:["Stir everything together until evenly combined.","Chill 30 minutes so it's easier to handle.","Roll into 1-inch balls.","Store in the fridge up to 1 week."],
  note:"" }
];
