import Reveal from "./ui/Reveal.jsx";
import GradientMesh from "./atmosphere/GradientMesh.jsx";
import { finalCta } from "../data/content.js";

/**
 * FinalCTA — bold, full-width dark section that repeats the conversion ask
 * right before the contact form.
 */
export default function FinalCTA() {
  return (
    <section className="finalcta" aria-labelledby="finalcta-title">
      <GradientMesh variant="forest" />
      <div className="container finalcta-inner">
        <Reveal as="p" className="eyebrow finalcta-eyebrow">
          {finalCta.eyebrow}
        </Reveal>
        <Reveal as="h2" id="finalcta-title" className="display finalcta-title" delay={0.06}>
          {finalCta.title}
        </Reveal>
        <Reveal as="p" className="finalcta-sub" delay={0.12}>
          {finalCta.sub}
        </Reveal>
        <Reveal className="finalcta-actions" delay={0.18}>
          <a href={finalCta.cta.href} className="btn btn--gold">
            {finalCta.cta.label}
            <span className="arrow" aria-hidden="true">↗</span>
          </a>
          <span className="finalcta-reassure">No pressure. No jargon. Just honest advice.</span>
        </Reveal>
      </div>

      <style>{`
        .finalcta {
          position: relative;
          overflow: hidden;
          background: var(--forest);
          color: var(--canvas);
          padding-block: clamp(4.5rem, 3rem + 7vw, 8rem);
          text-align: center;
        }
        .finalcta-inner { position: relative; z-index: 1; max-width: 50rem; }
        .finalcta-eyebrow { color: var(--gold-soft); justify-content: center; }
        .finalcta-eyebrow::before { background: var(--gold-soft); }
        .finalcta-title {
          margin-top: 1.25rem;
          color: var(--canvas);
          font-size: clamp(2.4rem, 1.5rem + 4vw, 4.25rem);
        }
        .finalcta-sub {
          margin: 1.5rem auto 0;
          max-width: 44ch;
          color: rgba(246, 242, 234, 0.82);
          font-size: clamp(1.05rem, 1rem + 0.4vw, 1.25rem);
        }
        .finalcta-actions {
          margin-top: 2.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }
        .finalcta-reassure {
          font-size: 0.88rem;
          color: rgba(246, 242, 234, 0.6);
        }
      `}</style>
    </section>
  );
}
