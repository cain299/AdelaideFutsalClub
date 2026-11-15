# Adelaide Lions Futsal Club website

A static site for Adelaide Futsal Club, built with [Astro](https://astro.build) and hosted on Netlify. It replaces the old 2016–2018 WordPress site.

## Run it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # serve the built site
```

## Updating content

All club content lives in `src/data/`. Edit a file, commit, and Netlify rebuilds.

| File | What it holds |
| --- | --- |
| `site.ts` | Club name, email, phone contacts, registration form link, social links, menu |
| `teams.ts` | Pathway stages, this season's teams, and the latest round results for the homepage scoreboard |
| `honours.ts` | Titles and awards by season (newest first) |
| `sponsors.ts` | Partners and the weekly award each one presents |
| `instagram.ts` | Fallback Instagram posts, plus the live-feed loader |

Photos are in `src/assets/` and Astro optimises them at build time.

## Instagram feed

The homepage shows six recent posts.

- **Without setup**, it shows the hand-picked posts in `src/data/instagram.ts`.
- **For a live feed**:
  1. Have the club connect @adelaidefutsalclub to [Behold](https://behold.so) (free tier).
  2. Copy the feed's JSON URL.
  3. In Netlify, set the environment variable `BEHOLD_FEED_URL` to that URL.
  4. Add a Netlify build hook, and trigger it on a schedule (for example daily) so new posts appear.

If the feed fails, the build falls back to the hand-picked posts.

## Contact form

The form on `/contact/` uses Netlify Forms, so there's no backend to run.

- Submissions appear in the Netlify dashboard under **Forms**.
- Set up email notifications there, to send each submission to the club inbox.
- Spam is filtered by a honeypot field and by Netlify's own spam filtering.

## Deploying to Netlify

1. Push this repo to GitHub.
2. In Netlify, choose **Add new site → Import from Git** and pick the repo. `netlify.toml` already sets the build command, the publish folder and Node 24.
3. To go live on the club's domain, point the domain's DNS at Netlify. Netlify issues the HTTPS certificate, which also fixes the old site's broken certificate.

`netlify.toml` also redirects the old WordPress URLs (`/academies/`, `/teams/under-10/` and so on) to the matching new pages.

## Before launch: confirm with the club

Search for `TODO(` in `src/data/` to find each item.

- [ ] A high-resolution crest, as SVG or a PNG of at least 512 px. The current one is a 150 px Instagram profile image.
- [ ] Contact names, phone numbers and email. These come from the old site.
- [ ] Training days, times and venue.
- [ ] Honours for 2019–2024, and the "2025 Summer" title.
- [ ] Whether to list a Senior Women team this season.
- [ ] Sponsor logos, tiers and website links.
- [ ] Permission to use the match photos (one is credited to @captured_by_garreff).
