# No Scroll Recipes

An ad-free recipe site: tap a dish, get the ingredients and steps. No ads, no life stories, no pop-ups. Supported by reader tips.

## Structure
- `index.html` — the whole site (HTML, CSS, JS, recipe data). No build step.
- `.nojekyll` — tells GitHub Pages to serve files as-is.

## Donations
Set `DONATE.url` near the top of the script in `index.html` to your tip page (Ko-fi, Buy Me a Coffee, GitHub Sponsors, Stripe Payment Link).

## Hosting
**Now:** GitHub Pages — Settings → Pages → Deploy from branch → `main` / root.

**Later (GCP):** it's static, so any of these work unchanged:
- Cloud Storage bucket + Cloud CDN / HTTPS load balancer
- Firebase Hosting (`firebase init hosting`, public dir `.`)
- Cloud Run with an nginx container
