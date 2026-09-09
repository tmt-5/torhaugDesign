"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ElementType, ReactNode } from "react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

/** Mirrors --ease-soft and the duration tokens in globals.css. */
const EASE = [0.22, 1, 0.36, 1] as const;
const DURATION = 0.7;

/**
 * How far apart the top and bottom of the first screenful start moving. The
 * whole opening sweep therefore runs DURATION + CASCADE.
 */
const CASCADE = 0.3;

/** Matches the viewport margin below: a block reveals once it's this far in. */
const TRIGGER_MARGIN = 80;

const useIsomorphicLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  id?: string;
  "aria-labelledby"?: string;
  "aria-label"?: string;
};

/**
 * The site's single reveal micro-animation: a short rise + fade the first time
 * a block scrolls into view. Collapses to a plain element when the visitor has
 * asked for reduced motion, so nothing moves that shouldn't.
 *
 * Blocks already on screen when the page loads share one cascade, staggered by
 * how far down the page they sit rather than by their index within a section —
 * so the opening reads as a single sweep down the page instead of every
 * section starting its own wave. Anything below the fold reveals on its own as
 * it scrolls in, with no delay to lag behind the scroll.
 */
export function Reveal({
  children,
  as = "div",
  className,
  ...rest
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [delay, setDelay] = useState(0);

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Normalised against the same threshold that triggers the reveal, so the
    // cascade spreads across exactly the blocks that animate on load.
    const threshold = window.innerHeight - TRIGGER_MARGIN;
    const { top } = element.getBoundingClientRect();

    setDelay(top < threshold ? (Math.max(top, 0) / threshold) * CASCADE : 0);
  }, []);

  if (reduceMotion) {
    const Plain = as as ElementType;
    return (
      <Plain className={className} {...rest}>
        {children}
      </Plain>
    );
  }

  const Component = motion[as as "div"] ?? motion.div;

  return (
    <Component
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: `0px 0px -${TRIGGER_MARGIN}px 0px` }}
      transition={{ duration: DURATION, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </Component>
  );
}
