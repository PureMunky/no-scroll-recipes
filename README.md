# No Scroll Recipes

An ad-free recipe site: tap a dish, get the ingredients and steps. No ads, no life stories, no pop-ups. Supported by reader tips.

## How it's built (and why it scales)

| Piece | What | Why |
|---|---|---|
| [Astro](https://astro.build) static build | Every recipe, tag and list page is pre-rendered HTML | Fast first paint, crawlable, cheap to host anywhere |
| `src/content/recipes/*.md` | One file per recipe, validated by a schema (`src/content.config.ts`) | Adding a recipe = adding a file; bad data fails the build, not the site |
| Paginated lists | `/browse/`, `/tags/<tag>/`, 48 per page | Page weight stays flat at 50 or 50,000 recipes |
| [Pagefind](https://pagefind.app) search | Static, chunked search index built at deploy | Browsers download only the index shards a query needs — no search server |
| schema.org `Recipe` JSON-LD + sitemap | On every recipe page | Eligible for Google recipe results |
| GitHub Actions | Builds and validates every PR; deploys `main` | Submissions are checked before you merge |

```
src/
  config.ts              site name, page size, donation link
  content.config.ts      recipe schema (tags, units, required fields)
  content/recipes/       one .md per recipe
  lib/                   data helpers + formatting (shared with the browser)
  components/ layouts/   UI
  pages/                 routes: /, /recipes/[slug], /browse, /tags/[tag], /search, /submit
```

## Commands
```bash
npm ci
npm run dev       # local dev server
npm run build     # astro build + pagefind index → dist/
npm run preview
```

## Donations
Tips go to PayPal via `DONATE.url` in `src/config.ts`. Set `DONATE.amountUrl` (e.g. `https://paypal.me/NAME/{amount}`) to show preset amount buttons.

## Hosting
**Now: GitHub Pages.** Settings → Pages → Source: **GitHub Actions**. `.github/workflows/deploy.yml` builds and deploys every push to `main`.

**Custom domain:** live at noscrollrecipes.net — `public/CNAME`, `SITE_URL`/`BASE_PATH` in the workflow, and the custom domain set in Settings → Pages.

**Later: GCP.** `dist/` is plain static files, so swap the deploy step for one of:
- Firebase Hosting — `firebase deploy --only hosting` (public dir `dist`); free SSL + CDN, simplest
- Cloud Storage bucket + external HTTPS load balancer + Cloud CDN — most control
- Cloud Run serving `dist/` from an nginx image — if you later add an API (e.g. a no-account submission form) alongside

## Contributing
See [CONTRIBUTING.md](CONTRIBUTING.md). Public submissions come in through the "Submit a recipe" issue form.
