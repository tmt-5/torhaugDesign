"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";

/** Just enough smoothing to take the jitter out of a fast scroll — no
 * overshoot, so the bar never looks like it's animating on its own. */
const SPRING = { stiffness: 300, damping: 40, mass: 0.1 };

/**
 * A thin fill at the top of the viewport tracking read progress down the
 * page. Tied 1:1 to scroll position rather than looping or autoplaying, so it
 * stays on under reduced motion — only the smoothing spring is skipped there,
 * for an exact, un-eased mapping to scroll.
 */
export function ScrollProgress() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const smoothed = useSpring(scrollYProgress, SPRING);

  return (
    <motion.div
      aria-hidden="true"
      className="bg-ink-subtle/50 fixed top-0 left-0 z-50 h-[2px] w-full origin-left"
      style={{ scaleX: reduceMotion ? scrollYProgress : smoothed }}
    />
  );
}
