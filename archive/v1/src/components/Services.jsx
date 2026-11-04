import Section from "./ui/Section.jsx";
import Reveal from "./ui/Reveal.jsx";
import { services } from "../data/content.js";

/**
 * Services — four benefit-led offering cards with hover lift and a
 * "discuss your project" link that funnels toward contact.
 */
export default function Services() {
  return (
    <Section
      id="services"
      eyebrow={services.eyebrow}
      title={services.title}
      sub={services.sub}
    >
      <div className="services-grid">
        {services.items.map((s, i) => (
          <Reveal
            key={s.title}
            className="card card--hover service"
            delay={i * 0.08}
          >
            <div className="service-top">
              <span className="service-tag">{s.tag}</span>
              <span className="service-dot" aria-hidden="true" />
            </div>
            <h3 className="display service-title">{s.title}</h3>
            <p className="service-copy">{s.copy}</p>
            <ul className="service-points">
              {s.points.map((p) => (
                <li key={p}>
                  <span className="tick" aria-hidden="true">→</span>
                  {p}
                </li>
              ))}
            </ul>
            <a href="#contact" className="link-underline service-link">
              Discuss your project
              <span className="arrow" aria-hidden="true">→</span>
            </a>
          </Reveal>
        ))}
      </div>

      <style>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: clamp(1rem, 0.5rem + 1.5vw, 1.75rem);
        }
        .service {
          padding: clamp(1.75rem, 1.25rem + 1.5vw, 2.5rem);
          display: flex;
          flex-direction: column;
        }
        .service-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.5rem;
        }
        .service-tag {
          font-family: var(--font-display);
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--gold);
        }
        .service-dot {
          width: 10px; height: 10px;
          border-radius: 50%;
          background: var(--forest);
          opacity: 0.25;
          transition: opacity 0.4s var(--ease), transform 0.4s var(--ease);
        }
        .service:hover .service-dot { opacity: 1; transform: scale(1.3); }
        .service-title { margin-bottom: 0.85rem; }
        .service-copy {
          color: var(--ink-muted);
          margin-bottom: 1.5rem;
        }
        .service-points {
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
          margin-bottom: 1.75rem;
        }
        .service-points li {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          font-size: 0.95rem;
          font-weight: 500;
        }
        .tick { color: var(--gold); font-weight: 700; }
        .service-link { margin-top: auto; }
        @media (max-width: 720px) {
          .services-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </Section>
  );
}
