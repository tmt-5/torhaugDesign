# torhaug.design

Portfolio and CV for Trym Torhaug. Next.js App Router, TypeScript, Tailwind v4,
statically generated and deployed on Vercel.

## Running it

```bash
npm install
npm run dev        # http://localhost:3000 → redirects to /no or /en
npm run build      # production build
npm run lint       # eslint
npm run typecheck  # tsc --noEmit
npm run format     # prettier
```

## How the front page is put together

The whole page is one 660px column (`--measure`) with a three-column row grid
inside it — period, logo, text — measured off `design/frontPage.png`. All of it
lives in tokens at the top of `src/app/globals.css`:

| Token                             | Value        | What it controls                          |
| --------------------------------- | ------------ | ----------------------------------------- |
| `--measure`                       | 660px        | Content column                            |
| `--col-date` / `--col-logo`       | 114 / 32px   | Row grid; text starts 178px in            |
| `--space-section` / `--space-row` | 54 / 24px    | Vertical rhythm                           |
| `--color-ink` / `-muted`/`-subtle`| #111/#555/#999 | Hierarchy is carried by colour, not weight |

Changing the rhythm or the palette is a token edit, not a component edit.

### Content

All copy lives in `src/content/dictionaries/{no,en}.ts` and is checked against
`types.ts`, so a missing translation is a build error. To edit the CV, edit
those two files — no component changes needed.

### Localisation

- `/no` and `/en` are both statically generated (`generateStaticParams`).
- `src/proxy.ts` negotiates `Accept-Language` on `/` and redirects.
- `hreflang`, canonical URLs, sitemap and per-locale OG images follow from
  `src/lib/i18n.ts` — adding a third locale means adding it to `locales` and
  dropping in a dictionary.

### Motion

One primitive, `src/components/motion/Reveal.tsx`: a 10px rise + fade the first
time a block enters the viewport, staggered 50ms per row. It renders a plain
element when `prefers-reduced-motion` is set, and `globals.css` neutralises the
remaining transitions for those visitors too.

## Assets

`public/images/` and `public/logos/` were extracted from the 2x Figma export in
`design/frontPage.png`, so they are pixel-correct at their rendered sizes but
capped there. Replace them with originals when convenient — the filenames are
referenced from the dictionaries.

## Deploying

Import the repo in Vercel; the framework preset is detected. Set
`NEXT_PUBLIC_SITE_URL` to the production origin (see `.env.example`) so
canonical URLs, sitemap and OG tags point at the real domain, then attach the
domain in Vercel's dashboard.

## Known gaps

- The thesis card under **Utdanning** has no link yet — add `href` to the `card`
  object in both dictionaries (marked with a `TODO`).
- The page is light-only, matching the sketch. The palette is already tokenised,
  so a dark theme is a `@media (prefers-color-scheme: dark)` block away.
- Body text uses `Inter` (`src/app/[locale]/layout.tsx`).

## Project case studies

A project entry in `src/content/dictionaries/{no,en}.ts` gets its own full
write-up (`/prosjekter/<slug>`) by adding a `caseStudy` object: `{title, meta,
intro, blocks}`. `title`/`meta`/`intro` are the fixed centered opener
(`CaseStudyHero`); everything after that is an ordered `blocks` array, since
different projects' designs put sections in different orders (compare `trumf`
and `asko` in the dictionaries — same visual language, different structure).

Block types (`CaseStudyBlock` in `content/dictionaries/types.ts`, rendered by
`src/components/case-study/CaseStudyBlocks.tsx`):

| type | renders |
| --- | --- |
| `image` | a full-measure supporting image |
| `sectionIntro` | eyebrow + heading that opens a deep-dive, with an anchor id |
| `field` | a label\|content prose row, optionally with one inline link |
| `role` | a label\|content row: an intro line + one paragraph per team |
| `list` | a label\|content bullet list (`marker: "dot"` or `"dash"`) |
| `photos` | a tall/narrow mosaic (`PhotoGrid`, with a `columns` fr-array) |
| `closing` | the "other initiatives" list — plain paragraphs, no labels |

A project without `caseStudy` falls back to the plain placeholder page
automatically — nothing else needs to change.

Screenshots and composite mockups (phone/laptop mockups, multiple overlapping
UI layers in one shot) should be exported at 2x from Figma into
`design/<name>Page.png`, then measured and cropped with `sharp` — see the
extraction script pattern used for `design/trumfPage.png` and
`design/askoPage.png` — rather than rebuilt as HTML/CSS, since these are
presented as evidence, not live UI. Plain, non-overlapping photos go straight
into a `photos` block instead.
