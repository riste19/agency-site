import { motion, useReducedMotion } from "motion/react";

/**
 * Reveal — wraps children in a scroll-triggered fade/rise animation.
 * Respects prefers-reduced-motion (renders static when requested).
 *
 * Props:
 *   as       — element/component to render (default "div")
 *   delay    — stagger delay in seconds
 *   y        — starting vertical offset in px
 *   amount   — how much must be visible before firing (0–1)
 */
export default function Reveal({
  children,
  as = "div",
  delay = 0,
  y = 24,
  amount = 0.3,
  className,
  ...rest
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  if (reduce) {
    const Tag = as;
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    );
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
