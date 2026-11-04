import Section from "./ui/Section.jsx";
import Reveal from "./ui/Reveal.jsx";
import { process } from "../data/content.js";

/**
 * Process — a four-step timeline (Discover → Design → Build → Launch) that
 * signals organization and reliability. Connected by a progress line.
 */
export default function Process() {
  return (
    <Section
      id="process"
      eyebrow={process.eyebrow}
      title={process.title}
      sub={process.sub}
    >
      <div className="process">
        <div className="process-line" aria-hidden="true" />
        {process.steps.map((step, i) => (
          <Reveal key={step.no} className="step" delay={i * 0.1}>
            <div className="step-node" aria-hidden="true">
              <span className="step-dot" />
            </div>
            <span className="step-no">{step.no}</span>
            <h3 className="step-name display">{step.name}</h3>
            <p className="step-copy">{step.copy}</p>
          </Reveal>
        ))}
      </div>

      <style>{`
        .process {
          position: relative;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: clamp(1.25rem, 0.5rem + 2vw, 2.5rem);
        }
        /* Connecting progress line across the top of the nodes */
        .process-line {
          position: absolute;
          top: 11px; left: 6%; right: 6%;
          height: 2px;
          background: linear-gradient(90deg, var(--gold), var(--forest));
          opacity: 0.35;
        }
        .step { position: relative; }
        .step-node {
          width: 24px; height: 24px;
          border-radius: 50%;
          background: var(--canvas);
          border: 2px solid var(--gold);
          display: grid;
          place-items: center;
          margin-bottom: 1.5rem;
        }
        .step-dot {
          width: 9px; height: 9px;
          border-radius: 50%;
          background: var(--forest);
          transition: transform 0.4s var(--ease);
        }
        .step:hover .step-dot { transform: scale(1.4); }
        .step-no {
          font-family: var(--font-display);
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--gold);
          letter-spacing: 0.05em;
        }
        .step-name {
          font-size: 1.5rem;
          margin: 0.4rem 0 0.75rem;
        }
        .step-copy { color: var(--ink-muted); font-size: 0.97rem; }

        @media (max-width: 860px) {
          .process { grid-template-columns: 1fr; gap: 0; }
          .process-line {
            left: 11px; right: auto;
            top: 12px; bottom: 12px;
            width: 2px; height: auto;
            background: linear-gradient(180deg, var(--gold), var(--forest));
          }
          .step {
            padding-left: 3rem;
            padding-bottom: 2.25rem;
          }
          .step-node { position: absolute; left: 0; top: 2px; margin-bottom: 0; }
          .step:last-child { padding-bottom: 0; }
        }
      `}</style>
    </Section>
  );
}
