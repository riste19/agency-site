import { motion, useReducedMotion } from "motion/react";
import GradientMesh from "./atmosphere/GradientMesh.jsx";
import { hero } from "../data/content.js";

/**
 * Hero — instant impact: atmospheric background, staggered on-load reveal,
 * confident headline, and the primary conversion CTA.
 */
export default function Hero() {
  const reduce = useReducedMotion();

  // Staggered entrance: each child animates in sequence on first load.
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.1, delayChildren: 0.1 },
    },
  };
  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="hero" aria-labelledby="hero-title">
      <GradientMesh variant="light" />

      {/* Decorative geometric accent lines */}
      <div className="hero-grid" aria-hidden="true" />

      <div className="container hero-inner">
        <motion.div variants={container} initial="hidden" animate="show" className="hero-content">
          <motion.p variants={item} className="eyebrow">
            {hero.eyebrow}
          </motion.p>

          <motion.h1 variants={item} id="hero-title" className="display hero-title">
            {hero.headlineTop}{" "}
            <span className="hero-accent">
              {hero.headlineAccent}
              <svg className="hero-underline" viewBox="0 0 300 12" preserveAspectRatio="none" aria-hidden="true">
                <path d="M2 9 C 80 2, 220 2, 298 8" fill="none" stroke="var(--gold)" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          </motion.h1>

          <motion.p variants={item} className="lead hero-sub">
            {hero.sub}
          </motion.p>

          <motion.div variants={item} className="hero-actions">
            <a href={hero.primaryCta.href} className="btn">
              {hero.primaryCta.label}
              <span className="arrow" aria-hidden="true">↗</span>
            </a>
            <a href={hero.secondaryCta.href} className="btn btn--ghost">
              {hero.secondaryCta.label}
            </a>
          </motion.div>

          <motion.p variants={item} className="hero-microproof">
            <span className="stars" aria-hidden="true">★★★★★</span>
            {hero.microProof}
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="scroll-cue" aria-hidden="true">
        <span className="scroll-cue-line" />
        Scroll
      </div>

      <style>{`
        .hero {
          position: relative;
          min-height: 100svh;
          display: flex;
          align-items: center;
          padding-top: 100px;
          padding-bottom: 4rem;
          overflow: hidden;
        }
        .hero-grid {
          position: absolute; inset: 0; z-index: 0;
          background-image:
            linear-gradient(var(--hairline) 1px, transparent 1px),
            linear-gradient(90deg, var(--hairline) 1px, transparent 1px);
          background-size: 64px 64px;
          mask-image: radial-gradient(circle at 70% 30%, black, transparent 72%);
          opacity: 0.5;
        }
        .hero-inner { position: relative; z-index: 2; }
        .hero-content { max-width: 60rem; }
        .hero-title {
          margin-top: 1.5rem;
          max-width: 18ch;
        }
        .hero-accent {
          position: relative;
          color: var(--forest);
          white-space: nowrap;
        }
        .hero-underline {
          position: absolute;
          left: 0; bottom: -0.12em;
          width: 100%; height: 0.35em;
          overflow: visible;
        }
        .hero-sub {
          margin-top: 1.75rem;
          max-width: 54ch;
          font-size: clamp(1.1rem, 1rem + 0.5vw, 1.35rem);
        }
        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-top: 2.5rem;
        }
        .hero-microproof {
          display: flex;
          align-items: center;
          gap: 0.7rem;
          margin-top: 2.25rem;
          font-size: 0.92rem;
          color: var(--ink-soft);
        }
        .stars { color: var(--gold); letter-spacing: 2px; }

        .scroll-cue {
          position: absolute;
          left: var(--gutter);
          bottom: 2rem;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 0.7rem;
          font-size: 0.72rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--ink-soft);
        }
        .scroll-cue-line {
          width: 48px; height: 1px;
          background: var(--ink-soft);
          position: relative; overflow: hidden;
        }
        .scroll-cue-line::after {
          content: "";
          position: absolute; inset: 0;
          background: var(--forest);
          transform: translateX(-100%);
          animation: scrollcue 2.4s var(--ease) infinite;
        }
        @keyframes scrollcue {
          0% { transform: translateX(-100%); }
          60%, 100% { transform: translateX(100%); }
        }
        @media (max-width: 600px) {
          .scroll-cue { display: none; }
          .hero-accent { white-space: normal; }
        }
      `}</style>
    </section>
  );
}
