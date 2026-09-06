/**
 * Shape of a content bundle. Every locale must satisfy this type, so a missing
 * translation is a build error rather than a blank spot on the page.
 *
 * Locale-independent data (dates, logo files, hrefs) is repeated per locale on
 * purpose: it keeps each bundle readable as a document, and the type guarantees
 * nothing drifts out of sync structurally.
 */
export type Dictionary = {
  meta: {
    title: string;
    description: string;
    /** og:locale value, e.g. nb_NO. */
    ogLocale: string;
  };
  a11y: {
    skipToContent: string;
    languageLabel: string;
    avatarAlt: string;
    photosLabel: string;
    copyEmail: string;
    emailCopied: string;
  };
  header: {
    name: string;
    tagline: string;
  };
  experience: Section<Entry>;
  education: Section<EducationEntry>;
  projects: Section<Entry>;
  sideProjects: Section<Entry>;
  contact: {
    id: string;
    label: string;
    rows: ContactRow[];
  };
  bio: string;
  photos: Photo[];
  projectPage: {
    back: string;
    comingSoon: string;
  };
};

export type Section<T> = {
  /** Anchor id — identical across locales so deep links survive a switch. */
  id: string;
  label: string;
  entries: T[];
};

export type Logo = {
  src: string;
  alt: string;
};

export type Entry = {
  key: string;
  period: string;
  logo?: Logo;
  title: string;
  body: string;
  /** Full case-study content for the project's own page — see CaseStudy. */
  caseStudy?: CaseStudy;
};

/**
 * A full project write-up. Every case study opens the same way — a centered
 * title, meta line and intro paragraphs — but what follows varies project to
 * project (see design/trumfPage.png vs design/askoPage.png: same visual
 * language, different section order, different fields present). `blocks` is
 * therefore an ordered, typed list rather than fixed named fields, so a new
 * project can reuse exactly the pieces its design actually has, in whatever
 * order its design has them. Any project can opt into this by adding
 * `caseStudy` to its Entry — one without it falls back to the plain
 * placeholder page.
 */
export type CaseStudy = {
  title: string;
  meta: string;
  intro: string[];
  blocks: CaseStudyBlock[];
};

/** One inline link inside a sentence — this page only ever needs one per string. */
export type InlineLink = {
  before: string;
  linkText: string;
  linkHref: string;
  after: string;
};

export type CaseStudyBlock =
  /** A full-measure supporting image — a flattened screenshot montage or mockup. */
  | { type: "image"; src: string; alt: string; width: number; height: number }
  /** Opens a deep-dive into one example project, e.g. "Eksempelprosjekt". */
  | { type: "sectionIntro"; id: string; eyebrow: string; title: string }
  /** A label|content row of prose — plain text, or one with an inline link. */
  | { type: "field"; label: string; text?: string; link?: InlineLink }
  /** A label|content row whose content is an intro line plus per-team paragraphs. */
  | {
      type: "role";
      label: string;
      intro: string;
      teams: { id?: string; title: string; body: string }[];
    }
  /** A label|content row whose content is a bullet list. */
  | {
      type: "list";
      label: string;
      intro?: string;
      items: (string | InlineLink)[];
      marker?: "dot" | "dash";
    }
  /** A tall/narrow photo mosaic (see PhotoGrid). */
  | { type: "photos"; label: string; photos: Photo[]; columns?: number[] }
  /** The closing "other initiatives" list — plain paragraphs, no labels. */
  | { type: "closing"; heading: string; items: string[] };

export type EducationEntry = {
  key: string;
  period: string;
  title: string;
  /** Institution line, shown directly under the title. */
  meta: string;
  /** Optional link-preview card, e.g. a thesis. */
  card?: {
    href?: string;
    thumb: string;
    thumbAlt: string;
    title: string;
    subtitle: string;
  };
};

export type ContactRow = {
  key: string;
  label: string;
  value: string;
  href: string;
  /** External links get target=_blank + rel. */
  external?: boolean;
  /** Renders as plain text + a copy-to-clipboard button instead of a link. */
  copyOnly?: boolean;
};

export type Photo = {
  src: string;
  alt: string;
  /** Mosaic cells that run the full height of the grid. */
  tall?: boolean;
};
