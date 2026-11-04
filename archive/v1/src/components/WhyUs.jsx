import Reveal from "./ui/Reveal.jsx";
import { why } from "../data/content.js";

/**
 * WhyUs — the persuasive core. Addresses client fears (risk, communication,
 * surprises) and desires (quality, longevity) with a strong closing statement.
 */
export default function WhyUs() {
  return (
    <section id="why" className="section why">
      <div className="container why-inner">
        {/* Left: sticky intro + statement */}
        <div className="why-aside">
          <Reveal as="p" className="eyebrow">
            {why.eyebrow}
          </Reveal>
          <Reveal as="h2" className="display why-title" delay={0.06}>
            {why.title}
          </Reveal>
          <Reveal as="p" className="lead why-sub" delay={0.12}>
            {why.sub}
          </Reveal>

          <Reveal className="why-statement" delay={0.18}>
            <span className="quote-mark" aria-hidden="true">“</span>
            <p>{why.statement}</p>
          </Reveal>
        </div>

        {/* Right: value pillars */}
        <div className="why-pillars">
          {why.pillars.map((p, i) => (
            <Reveal key={p.title} className="pillar" delay={i * 0.08}>
              <span className="pillar-num">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="pillar-title">{p.title}</h3>
                <p className="pillar-copy">{p.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .why { background: var(--surface); border-block: 1px solid var(--hairline); }
        .why-inner {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: clamp(2.5rem, 1rem + 6vw, 6rem);
          align-items: start;
        }
        .why-aside { position: sticky; top: 110px; }
        .why-title { margin-top: 1rem; }
        .why-sub { margin-top: 1.25rem; }
        .why-statement {
          position: relative;
          margin-top: 2.25rem;
          padding: 1.75rem 1.75rem 1.75rem 2.5rem;
          background: var(--forest);
          color: var(--canvas);
          border-radius: var(--radius);
          box-shadow: var(--shadow-md);
        }
        .why-statement p {
          font-family: var(--font-display);
          font-size: 1.15rem;
          line-height: 1.4;
          font-style: italic;
        }
        .quote-mark {
          position: absolute;
          top: 0.4rem; left: 1rem;
          font-family: var(--font-display);
          font-size: 3.5rem;
          color: var(--gold);
          line-height: 1;
        }

        .why-pillars { display: flex; flex-direction: column; }
        .pillar {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 1.5rem;
          padding: 1.75rem 0;
          border-bottom: 1px solid var(--hairline);
        }
        .pillar:first-child { padding-top: 0; }
        .pillar:last-child { border-bottom: none; }
        .pillar-num {
          font-family: var(--font-display);
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--gold);
          padding-top: 0.2rem;
        }
        .pillar-title {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }
        .pillar-copy { color: var(--ink-muted); }

        @media (max-width: 860px) {
          .why-inner { grid-template-columns: 1fr; }
          .why-aside { position: static; }
        }
      `}</style>
    </section>
  );
}
