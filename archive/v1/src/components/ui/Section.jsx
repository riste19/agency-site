import Reveal from "./Reveal.jsx";

/**
 * Section — consistent section shell with an optional animated heading block
 * (eyebrow + title + sub). Keeps spacing and rhythm uniform site-wide.
 *
 * Props:
 *   id        — anchor id for nav links
 *   eyebrow   — small uppercase kicker
 *   title     — main heading (rendered as h2.display)
 *   sub       — supporting lead paragraph
 *   className — extra classes on the <section>
 *   headAlign — "left" (default) | "center"
 */
export default function Section({
  id,
  eyebrow,
  title,
  sub,
  headAlign = "left",
  className = "",
  children,
}) {
  const hasHead = eyebrow || title || sub;

  return (
    <section id={id} className={`section ${className}`}>
      <div className="container">
        {hasHead && (
          <div
            className="section-head"
            style={headAlign === "center" ? { marginInline: "auto", textAlign: "center" } : undefined}
          >
            {eyebrow && (
              <Reveal as="p" className="eyebrow" y={12}>
                {eyebrow}
              </Reveal>
            )}
            {title && (
              <Reveal as="h2" className="display" delay={0.06} y={18} style={{ marginTop: "1rem" }}>
                {title}
              </Reveal>
            )}
            {sub && (
              <Reveal
                as="p"
                className="lead"
                delay={0.12}
                y={18}
                style={headAlign === "center" ? { marginInline: "auto" } : undefined}
              >
                {sub}
              </Reveal>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
