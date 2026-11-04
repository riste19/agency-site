import Reveal from "./ui/Reveal.jsx";
import CountUp from "./ui/CountUp.jsx";
import { trust } from "../data/content.js";

/**
 * TrustStrip — social proof: a slow logo marquee + headline stats with
 * animated count-up. Logos render as text wordmarks (swap for real ones).
 */
export default function TrustStrip() {
  // Duplicate the list so the marquee loops seamlessly.
  const loop = [...trust.logos, ...trust.logos];

  return (
    <section className="trust" aria-label="Social proof">
      <div className="container">
        <Reveal as="p" className="trust-line">
          {trust.line}
        </Reveal>
      </div>

      {/* Full-bleed marquee */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {loop.map((logo, i) => (
            <span key={i} className="marquee-logo">
              {logo}
            </span>
          ))}
        </div>
      </div>

      <div className="container">
        <Reveal className="stats" delay={0.05}>
          {trust.stats.map((s) => (
            <div key={s.label} className="stat">
              <div className="stat-value display">
                <CountUp value={s.value} suffix={s.suffix} />
              </div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </Reveal>
      </div>

      <style>{`
        .trust {
          padding-block: clamp(2.5rem, 2rem + 3vw, 4rem);
          border-top: 1px solid var(--hairline);
          border-bottom: 1px solid var(--hairline);
          background: var(--surface);
        }
        .trust-line {
          text-align: center;
          font-size: 0.78rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--ink-soft);
          margin-bottom: 1.75rem;
        }
        .marquee {
          overflow: hidden;
          -webkit-mask-image: linear-gradient(90deg, transparent, black 12%, black 88%, transparent);
          mask-image: linear-gradient(90deg, transparent, black 12%, black 88%, transparent);
        }
        .marquee-track {
          display: flex;
          gap: clamp(2.5rem, 6vw, 5rem);
          width: max-content;
          animation: marquee 38s linear infinite;
        }
        .marquee:hover .marquee-track { animation-play-state: paused; }
        .marquee-logo {
          font-family: var(--font-display);
          font-size: clamp(1.4rem, 1.1rem + 1vw, 2rem);
          font-weight: 600;
          color: var(--ink);
          opacity: 0.42;
          white-space: nowrap;
          transition: opacity 0.3s var(--ease);
        }
        .marquee-logo:hover { opacity: 0.85; }
        @keyframes marquee {
          to { transform: translateX(-50%); }
        }

        .stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          margin-top: 2.75rem;
        }
        .stat {
          text-align: center;
          padding: 0 0.5rem;
        }
        .stat + .stat { border-left: 1px solid var(--hairline); }
        .stat-value {
          font-size: clamp(2.2rem, 1.6rem + 2.4vw, 3.4rem);
          color: var(--forest);
          line-height: 1;
        }
        .stat-label {
          margin-top: 0.6rem;
          font-size: 0.85rem;
          color: var(--ink-muted);
          letter-spacing: 0.01em;
        }
        @media (max-width: 720px) {
          .stats { grid-template-columns: repeat(2, 1fr); gap: 2rem 1rem; }
          .stat:nth-child(3) { border-left: none; }
        }
      `}</style>
    </section>
  );
}
