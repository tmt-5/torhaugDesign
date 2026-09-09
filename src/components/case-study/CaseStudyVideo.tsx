"use client";

import { useReducedMotion } from "motion/react";

import { Reveal } from "@/components/motion/Reveal";

type CaseStudyVideoProps = {
  src: string;
  poster: string;
  alt: string;
  width: number;
  height: number;
  /** Line under the video, in the quietest ink. */
  caption?: string;
  /**
   * Caps the rendered height (px) and centers the frame — for a portrait
   * clip that would otherwise dominate the page. Omit for a full-measure
   * video that fills the column width, same as `CaseStudyImage`.
   */
  maxHeight?: number;
};

/**
 * A supporting video — silent and autoplaying, the moving equivalent of
 * `CaseStudyImage`. `width`/`height` set its aspect ratio the same way; the
 * video fills its frame with `object-cover`.
 *
 * Under prefers-reduced-motion it degrades to the poster frame with manual
 * controls, matching Reveal's own degrade rule — nothing autoplays that
 * shouldn't.
 */
export function CaseStudyVideo({
  src,
  poster,
  alt,
  width,
  height,
  caption,
  maxHeight,
}: CaseStudyVideoProps) {
  const reduceMotion = Boolean(useReducedMotion());

  const videoProps = {
    src,
    poster,
    "aria-label": alt,
    muted: true,
    autoPlay: !reduceMotion,
    loop: !reduceMotion,
    controls: reduceMotion,
    playsInline: true,
    preload: "metadata" as const,
  };

  return (
    <Reveal
      className={maxHeight ? "mt-section flex justify-center" : "mt-section"}
    >
      <figure>
        {maxHeight ? (
          <video
            {...videoProps}
            style={{ aspectRatio: `${width} / ${height}`, maxHeight }}
            className="w-auto max-w-full rounded-xl object-cover"
          />
        ) : (
          <div
            className="relative overflow-hidden rounded-xl"
            style={{ aspectRatio: `${width} / ${height}` }}
          >
            <video
              {...videoProps}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        )}

        {caption ? (
          <figcaption className="text-ink-subtle mt-2 text-pretty">
            {caption}
          </figcaption>
        ) : null}
      </figure>
    </Reveal>
  );
}
