import { brand, footer } from "../data/content.js";

/**
 * Footer — professional close: wordmark, blurb, link columns, socials,
 * email, and copyright. All brand details come from src/data/content.js.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a href="#main" className="footer-wordmark">
            <svg viewBox="0 0 64 64" width="28" height="28" aria-hidden="true">
              <rect width="64" height="64" rx="14" fill="var(--gold)" />
              <path d="M20 44V20h4.6l14 16.4V20H43v24h-4.6l-14-16.4V44H20Z" fill="var(--forest)" />
            </svg>
            <span>{brand.name}</span>
          </a>
          <p className="footer-blurb">{footer.blurb}</p>
          <a href="#contact" className="btn btn--gold footer-cta">
            Start a project
            <span className="arrow" aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="footer-cols">
          {footer.columns.map((col) => (
            <nav key={col.heading} className="footer-col" aria-label={col.heading}>
              <h3 className="footer-col-head">{col.heading}</h3>
              <ul>
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="footer-col">
            <h3 className="footer-col-head">Connect</h3>
            <ul>
              <li>
                <a href={`mailto:${brand.email}`}>{brand.email}</a>
              </li>
              {brand.socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {year} {brand.name}. All rights reserved.</span>
        <span className="footer-built">Crafted with care · {brand.tagline}</span>
      </div>

      <style>{`
        .footer {
          background: var(--ink);
          color: rgba(246, 242, 234, 0.7);
          padding-top: clamp(3.5rem, 2.5rem + 4vw, 6rem);
        }
        .footer-inner {
          display: grid;
          grid-template-columns: 1.4fr 2fr;
          gap: clamp(2.5rem, 1rem + 5vw, 5rem);
          padding-bottom: 3.5rem;
        }
        .footer-wordmark {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          font-family: var(--font-display);
          font-size: 1.3rem;
          font-weight: 600;
          color: var(--canvas);
        }
        .footer-blurb {
          margin: 1.25rem 0 1.75rem;
          max-width: 38ch;
          line-height: 1.6;
        }
        .footer-cta { color: #1a1208; }

        .footer-cols {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        .footer-col-head {
          font-size: 0.78rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--gold-soft);
          margin-bottom: 1.25rem;
        }
        .footer-col ul { display: flex; flex-direction: column; gap: 0.75rem; }
        .footer-col a {
          color: rgba(246, 242, 234, 0.7);
          transition: color 0.25s var(--ease);
          font-size: 0.95rem;
        }
        .footer-col a:hover { color: var(--canvas); }

        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
          padding-block: 1.75rem;
          border-top: 1px solid rgba(246, 242, 234, 0.12);
          font-size: 0.85rem;
          color: rgba(246, 242, 234, 0.5);
        }

        @media (max-width: 860px) {
          .footer-inner { grid-template-columns: 1fr; }
        }
        @media (max-width: 560px) {
          .footer-cols { grid-template-columns: 1fr 1fr; }
        }
      `}</style>
    </footer>
  );
}
