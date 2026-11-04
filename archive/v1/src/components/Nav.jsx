import { useEffect, useState } from "react";
import { brand, nav } from "../data/content.js";

/**
 * Nav — sticky header that gains a backdrop + shadow on scroll.
 * Includes an accessible mobile menu (toggle + ESC + click-to-close).
 */
export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on Escape; lock scroll while open.
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="container nav-inner">
        <a href="#main" className="wordmark" aria-label={`${brand.name} home`}>
          <span className="wordmark-mark" aria-hidden="true">
            {/* Monogram — [REPLACE] with your logo if you have one */}
            <svg viewBox="0 0 64 64" width="30" height="30">
              <rect width="64" height="64" rx="14" fill="var(--forest)" />
              <path d="M20 44V20h4.6l14 16.4V20H43v24h-4.6l-14-16.4V44H20Z" fill="var(--canvas)" />
              <circle cx="46" cy="22" r="3" fill="var(--gold)" />
            </svg>
          </span>
          <span className="wordmark-text">{brand.name}</span>
        </a>

        {/* Desktop nav */}
        <nav className="nav-links" aria-label="Primary">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="btn nav-cta">
          Start a project
        </a>

        {/* Mobile menu toggle */}
        <button
          className="nav-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`burger ${open ? "burger--open" : ""}`} />
        </button>
      </div>

      {/* Mobile menu panel */}
      <div id="mobile-menu" className={`mobile-menu ${open ? "mobile-menu--open" : ""}`}>
        <nav aria-label="Mobile">
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href="#contact" className="btn" onClick={() => setOpen(false)}>
            Start a project
          </a>
        </nav>
      </div>

      <style>{`
        .nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          transition: background-color 0.4s var(--ease), box-shadow 0.4s var(--ease),
            backdrop-filter 0.4s var(--ease);
        }
        .nav--scrolled {
          background: rgba(246, 242, 234, 0.82);
          backdrop-filter: saturate(140%) blur(14px);
          box-shadow: 0 1px 0 var(--hairline), var(--shadow-sm);
        }
        .nav-inner {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          height: 76px;
        }
        .wordmark {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 1.18rem;
          letter-spacing: -0.01em;
        }
        .wordmark-mark { display: inline-flex; }
        .nav-links {
          display: flex;
          gap: 1.9rem;
          margin-left: auto;
          font-weight: 500;
          font-size: 0.95rem;
        }
        .nav-links a {
          position: relative;
          color: var(--ink-muted);
          transition: color 0.25s var(--ease);
        }
        .nav-links a::after {
          content: "";
          position: absolute; left: 0; bottom: -6px;
          width: 100%; height: 1.5px;
          background: var(--gold);
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.35s var(--ease);
        }
        .nav-links a:hover { color: var(--ink); }
        .nav-links a:hover::after { transform: scaleX(1); }
        .nav-cta {
          padding: 0.7rem 1.2rem;
          font-size: 0.9rem;
        }
        .nav-toggle {
          display: none;
          width: 44px; height: 44px;
          margin-left: auto;
          align-items: center; justify-content: center;
        }
        .burger, .burger::before, .burger::after {
          content: "";
          display: block;
          width: 24px; height: 2px;
          background: var(--ink);
          border-radius: 2px;
          transition: transform 0.35s var(--ease), opacity 0.2s var(--ease);
        }
        .burger { position: relative; }
        .burger::before { position: absolute; top: -7px; }
        .burger::after { position: absolute; top: 7px; }
        .burger--open { background: transparent; }
        .burger--open::before { transform: translateY(7px) rotate(45deg); }
        .burger--open::after { transform: translateY(-7px) rotate(-45deg); }

        .mobile-menu {
          overflow: hidden;
          max-height: 0;
          background: var(--surface);
          border-bottom: 1px solid var(--hairline);
          transition: max-height 0.45s var(--ease);
        }
        .mobile-menu--open { max-height: 420px; }
        .mobile-menu nav {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          padding: 1rem var(--gutter) 1.75rem;
        }
        .mobile-menu nav a {
          padding: 0.85rem 0;
          font-size: 1.15rem;
          font-weight: 500;
          border-bottom: 1px solid var(--hairline);
        }
        .mobile-menu nav a.btn {
          margin-top: 1rem;
          border-bottom: none;
          justify-content: center;
        }

        @media (max-width: 860px) {
          .nav-links, .nav-cta { display: none; }
          .nav-toggle { display: inline-flex; }
        }
      `}</style>
    </header>
  );
}
