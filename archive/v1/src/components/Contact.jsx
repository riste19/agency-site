import { useState } from "react";
import Reveal from "./ui/Reveal.jsx";
import { brand, contact } from "../data/content.js";

/**
 * Contact — conversion form powered by Formspree (works on any static host,
 * no backend). Handles idle / submitting / success / error states and
 * includes a honeypot field for basic spam protection.
 *
 * SETUP: create a free form at https://formspree.io, then paste its endpoint
 * into `formEndpoint` in src/data/content.js. Until then it submits to a
 * placeholder URL and will show the error state.
 */
export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;

    // Honeypot: if the hidden field is filled, it's a bot — silently succeed.
    if (form.elements._gotcha?.value) {
      setStatus("success");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch(brand.formEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section contact">
      <div className="container contact-inner">
        {/* Left: pitch + details */}
        <div className="contact-aside">
          <Reveal as="p" className="eyebrow">
            {contact.eyebrow}
          </Reveal>
          <Reveal as="h2" className="display contact-title" delay={0.06}>
            {contact.title}
          </Reveal>
          <Reveal as="p" className="lead contact-sub" delay={0.12}>
            {contact.sub}
          </Reveal>

          <Reveal className="contact-next" delay={0.18}>
            <h3 className="contact-next-head">What happens next</h3>
            <ul>
              {contact.whatNext.map((item, i) => (
                <li key={item}>
                  <span className="next-num">{i + 1}</span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="contact-direct" delay={0.24}>
            <span>Prefer email?</span>
            <a href={`mailto:${brand.email}`} className="link-underline">
              {brand.email}
              <span className="arrow" aria-hidden="true">→</span>
            </a>
          </Reveal>
        </div>

        {/* Right: the form */}
        <Reveal as="div" className="card contact-card" delay={0.1}>
          {status === "success" ? (
            <div className="contact-success" role="status">
              <div className="success-check" aria-hidden="true">✓</div>
              <h3 className="display">{contact.successTitle}</h3>
              <p>{contact.successBody}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              {/* Honeypot — hidden from humans, catches bots */}
              <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                className="honeypot"
                aria-hidden="true"
              />

              <div className="field">
                <label htmlFor="name">Your name</label>
                <input id="name" name="name" type="text" required placeholder="Jane Doe" />
              </div>

              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required placeholder="jane@company.com" />
              </div>

              <div className="field">
                <label htmlFor="budget">Project budget (optional)</label>
                <select id="budget" name="budget" defaultValue="">
                  <option value="" disabled>Select a range…</option>
                  <option>Under $5k</option>
                  <option>$5k – $15k</option>
                  <option>$15k – $50k</option>
                  <option>$50k+</option>
                  <option>Not sure yet</option>
                </select>
              </div>

              <div className="field">
                <label htmlFor="message">Tell us about your project</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="What are you building, and what does success look like?"
                />
              </div>

              <button type="submit" className="btn contact-submit" disabled={status === "submitting"}>
                {status === "submitting" ? "Sending…" : "Send message"}
                {status !== "submitting" && <span className="arrow" aria-hidden="true">↗</span>}
              </button>

              {status === "error" && (
                <p className="contact-error" role="alert">
                  Something went wrong. Email us directly at{" "}
                  <a href={`mailto:${brand.email}`}>{brand.email}</a>.
                  <br />
                  <span className="contact-error-hint">
                    (Developer note: set your Formspree endpoint in src/data/content.js)
                  </span>
                </p>
              )}

              <p className="contact-privacy">
                We'll only use your details to reply. No spam, ever.
              </p>
            </form>
          )}
        </Reveal>
      </div>

      <style>{`
        .contact-inner {
          display: grid;
          grid-template-columns: 1fr 1.05fr;
          gap: clamp(2.5rem, 1rem + 5vw, 5rem);
          align-items: start;
        }
        .contact-title { margin-top: 1rem; }
        .contact-sub { margin-top: 1.25rem; }
        .contact-next {
          margin-top: 2.5rem;
          padding-top: 2rem;
          border-top: 1px solid var(--hairline);
        }
        .contact-next-head {
          font-size: 0.8rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--ink-soft);
          margin-bottom: 1.25rem;
        }
        .contact-next ul { display: flex; flex-direction: column; gap: 1rem; }
        .contact-next li {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-weight: 500;
        }
        .next-num {
          width: 28px; height: 28px;
          flex-shrink: 0;
          border-radius: 50%;
          display: grid; place-items: center;
          background: rgba(168,137,92,0.15);
          color: var(--gold);
          font-size: 0.85rem;
          font-weight: 700;
        }
        .contact-direct {
          margin-top: 2rem;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .contact-direct span { color: var(--ink-soft); font-size: 0.9rem; }

        .contact-card { padding: clamp(1.75rem, 1.25rem + 1.5vw, 2.5rem); }
        .honeypot {
          position: absolute !important;
          left: -9999px;
          width: 1px; height: 1px;
          opacity: 0;
        }
        .field { margin-bottom: 1.25rem; display: flex; flex-direction: column; }
        .field label {
          font-size: 0.88rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }
        .field input,
        .field select,
        .field textarea {
          font: inherit;
          width: 100%;
          padding: 0.85rem 1rem;
          background: var(--canvas);
          border: 1px solid var(--hairline);
          border-radius: var(--radius-sm);
          color: var(--ink);
          transition: border-color 0.25s var(--ease), box-shadow 0.25s var(--ease);
        }
        .field textarea { resize: vertical; }
        .field input:focus,
        .field select:focus,
        .field textarea:focus {
          outline: none;
          border-color: var(--forest);
          box-shadow: 0 0 0 3px rgba(27,58,43,0.12);
        }
        .field input::placeholder,
        .field textarea::placeholder { color: var(--ink-soft); }

        .contact-submit { width: 100%; margin-top: 0.5rem; }
        .contact-submit:disabled { opacity: 0.7; cursor: progress; }
        .contact-error {
          margin-top: 1rem;
          font-size: 0.9rem;
          color: #8a2c1f;
          background: rgba(138,44,31,0.07);
          border: 1px solid rgba(138,44,31,0.2);
          border-radius: var(--radius-sm);
          padding: 0.85rem 1rem;
        }
        .contact-error a { font-weight: 600; text-decoration: underline; }
        .contact-error-hint { color: var(--ink-soft); font-size: 0.82rem; }
        .contact-privacy {
          margin-top: 1rem;
          font-size: 0.82rem;
          color: var(--ink-soft);
          text-align: center;
        }

        .contact-success {
          text-align: center;
          padding: 2rem 1rem;
        }
        .success-check {
          width: 64px; height: 64px;
          margin: 0 auto 1.5rem;
          border-radius: 50%;
          display: grid; place-items: center;
          background: var(--forest);
          color: var(--canvas);
          font-size: 1.8rem;
        }
        .contact-success h3 { font-size: 1.6rem; margin-bottom: 0.75rem; }
        .contact-success p { color: var(--ink-muted); max-width: 32ch; margin-inline: auto; }

        @media (max-width: 860px) {
          .contact-inner { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
