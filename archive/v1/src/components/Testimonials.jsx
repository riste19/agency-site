import Section from "./ui/Section.jsx";
import Reveal from "./ui/Reveal.jsx";
import { testimonials } from "../data/content.js";

/**
 * Testimonials — believable placeholder quotes that build trust.
 * Replace quotes/names/companies via src/data/content.js (with permission).
 */
export default function Testimonials() {
  return (
    <Section
      id="testimonials"
      eyebrow={testimonials.eyebrow}
      title={testimonials.title}
    >
      <div className="testi-grid">
        {testimonials.items.map((t, i) => (
          <Reveal
            key={t.name}
            as="figure"
            className="card testi"
            delay={i * 0.1}
          >
            <div className="testi-stars" aria-label="5 out of 5 stars">★★★★★</div>
            <blockquote className="testi-quote">“{t.quote}”</blockquote>
            <figcaption className="testi-author">
              <span className="testi-avatar" aria-hidden="true">
                {t.name.split(" ").map((n) => n[0]).join("")}
              </span>
              <span>
                <span className="testi-name">{t.name}</span>
                <span className="testi-role">
                  {t.role}, {t.company}
                </span>
              </span>
            </figcaption>
          </Reveal>
        ))}
      </div>

      <style>{`
        .testi-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: clamp(1rem, 0.5rem + 1.5vw, 1.75rem);
        }
        .testi {
          padding: clamp(1.75rem, 1.25rem + 1.5vw, 2.25rem);
          display: flex;
          flex-direction: column;
        }
        .testi-stars {
          color: var(--gold);
          letter-spacing: 3px;
          margin-bottom: 1.25rem;
        }
        .testi-quote {
          font-family: var(--font-display);
          font-size: 1.18rem;
          line-height: 1.45;
          color: var(--ink);
          margin-bottom: 1.75rem;
          flex: 1;
        }
        .testi-author {
          display: flex;
          align-items: center;
          gap: 0.85rem;
        }
        .testi-avatar {
          width: 44px; height: 44px;
          flex-shrink: 0;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: var(--forest);
          color: var(--canvas);
          font-weight: 600;
          font-size: 0.9rem;
          letter-spacing: 0.03em;
        }
        .testi-name { display: block; font-weight: 600; }
        .testi-role { display: block; font-size: 0.85rem; color: var(--ink-soft); }
        @media (max-width: 860px) {
          .testi-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </Section>
  );
}
