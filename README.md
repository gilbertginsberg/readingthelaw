# Reading the Law

An independent educational resource explaining how to become a licensed attorney in the U.S. through
legal apprenticeship ("reading the law") instead of law school — covering California, Vermont, Virginia,
Washington, and the hybrid programs in Maine and New York. Also the future home of a matchmaking platform
connecting aspiring apprentices with attorneys open to sponsoring one.

## Stack

- [Astro](https://astro.build) (static site)
- [Tailwind CSS v4](https://tailwindcss.com)

## Development

```sh
npm install
npm run dev       # start local dev server
npm run build     # type-check + build static site to dist/
npm run preview   # preview the production build locally
```

## Project structure

```
src/
  components/   Nav, Footer, PageHeader, Callout, FAQItem
  data/         states.ts — structured data for every state program
  layouts/      BaseLayout.astro — shared <head>, nav, footer, SEO tags
  pages/        one folder per route (home, what-is-reading-the-law, states, faq, resources, matchmaking, about, disclaimer)
  styles/       global.css — Tailwind + design tokens
```

State program data lives in `src/data/states.ts` as a single typed array — add a new state or update an
existing one there and both the comparison table (`/states/`) and the individual state pages
(`/states/[slug]/`) update automatically.

## Content accuracy

Bar admission rules referenced on this site were researched in good faith but change over time. Before
publishing updates, verify claims against each state's official governing body (linked from every state
page) rather than relying solely on prior content.

## Waitlist form

The "Join the Waitlist" button on `/matchmaking/` links out to a Google Form
(https://forms.gle/DYcw6eYWM5KXxAnB9) in a new tab (see `src/pages/matchmaking/index.astro`). Update that
URL if the form is ever recreated, or swap it for a different backend (e.g. Formspree, a serverless
function, or your own API) later on.

## Contact

The site's contact address is `readingthelaw@gmail.com`.
