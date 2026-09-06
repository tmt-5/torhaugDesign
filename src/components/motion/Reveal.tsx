"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ElementType, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Stagger offset in seconds, for sequencing siblings. */
  delay?: number;
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
 */
export function Reveal({
  children,
  delay = 0,
  as = "div",
  className,
  ...rest
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as as "div"] ?? motion.div;

  if (reduceMotion) {
    const Plain = as as ElementType;
    return (
      <Plain className={className} {...rest}>
        {children}
      </Plain>
    );
  }

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </Component>
  );
}
