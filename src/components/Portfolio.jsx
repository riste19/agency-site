import Section from "./ui/Section.jsx";
import Reveal from "./ui/Reveal.jsx";
import { work } from "../data/content.js";

/**
 * Portfolio — showcase grid. Each project uses a tasteful CSS gradient as a
 * placeholder "thumbnail" (no image files, nothing to break). Replace with
 * real screenshots/case-study links via src/data/content.js.
 */
export default function Portfolio() {
  return (
    <Section id="work" eyebrow={work.eyebrow} title={work.title} sub={work.sub}>
      <div className="work-grid">
        {work.projects.map((p, i) => (
          <Reveal
            key={p.title}
            as="a"
            href="#contact"
            className="card card--hover project spotlight"
            delay={(i % 3) * 0.08}
            aria-label={`${p.title} — ${p.category}`}
          >
            <div
              className="project-thumb"
              style={{ background: `linear-gradient(135deg, ${p.from}, ${p.to})` }}
              aria-hidden="true"
            >
              <span className="project-result">{p.result}</span>
              <span className="project-view">
                View case study <span className="arrow">↗</span>
              </span>
            </div>
            <div className="project-meta">
              <h3 className="project-title">{p.title}</h3>
              <span className="project-cat">{p.category}</span>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal as="p" className="work-note">
        {work.note}
      </Reveal>

      <style>{`
        .work-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: clamp(1rem, 0.5rem + 1.5vw, 1.75rem);
        }
        .project { overflow: hidden; }
        .project-thumb {
          position: relative;
          aspect-ratio: 4 / 3;
          padding: 1.25rem;
          display: flex;
          align-items: flex-end;
          color: var(--canvas);
          overflow: hidden;
        }
        /* Subtle inner texture on the gradient */
        .project-thumb::after {
          content: "";
          position: absolute; inset: 0;
          background-image: radial-gradient(circle at 80% 20%, rgba(255,255,255,0.18), transparent 45%);
        }
        .project-result {
          position: relative;
          z-index: 1;
          font-family: var(--font-display);
          font-size: 1.15rem;
          font-weight: 600;
          max-width: 14ch;
          line-height: 1.2;
        }
        .project-view {
          position: absolute;
          z-index: 1;
          top: 1.25rem; left: 1.25rem;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.82rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          opacity: 0;
          transform: translateY(-6px);
          transition: opacity 0.4s var(--ease), transform 0.4s var(--ease);
        }
        .project:hover .project-view { opacity: 1; transform: translateY(0); }
        .project-meta {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 1rem;
          padding: 1.25rem 1.35rem 1.4rem;
        }
        .project-title { font-size: 1.15rem; font-weight: 600; }
        .project-cat {
          font-size: 0.8rem;
          color: var(--ink-soft);
          text-align: right;
          letter-spacing: 0.02em;
        }
        .work-note {
          margin-top: 2rem;
          text-align: center;
          font-size: 0.85rem;
          color: var(--gold);
          background: rgba(168,137,92,0.08);
          border: 1px dashed var(--gold-soft);
          border-radius: 100px;
          padding: 0.6rem 1.25rem;
          width: fit-content;
          margin-inline: auto;
        }
        @media (max-width: 860px) {
          .work-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .work-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </Section>
  );
}
