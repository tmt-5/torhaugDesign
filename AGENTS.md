# torhaug.design

Personal portfolio/CV. Next.js 16 App Router, React 19, TypeScript, Tailwind v4,
`motion` for animation. Statically generated; deployed on Vercel.

## Conventions

- **The design is the source of truth.** `design/frontPage.png` is a 2x Figma
  export; measurements taken from it live as tokens at the top of
  `src/app/globals.css`. Change tokens, not one-off values in components.
- **Copy lives in dictionaries**, `src/content/dictionaries/{no,en}.ts`, typed by
  `types.ts`. Never hardcode user-facing strings in a component. Both locales
  must be updated together — the type will fail the build otherwise.
- **Hierarchy is carried by colour**, not font weight: `text-ink` (#111) for
  titles, `text-ink-muted` (#555) for body, `text-ink-subtle` (#999) for the
  quietest text. Everything is 15px/27px except the name.
- **One motion primitive**, `components/motion/Reveal.tsx`. Anything new that
  animates should reuse its easing (`--ease-soft`) and duration tokens, and must
  degrade under `prefers-reduced-motion`.
- Server components by default; `"use client"` only where a hook needs it
  (`Reveal`, `LocaleSwitcher`).

## Checks before finishing

```bash
npm run lint && npm run typecheck && npm run build
```
