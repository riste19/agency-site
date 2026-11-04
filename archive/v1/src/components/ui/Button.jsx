/**
 * Button — anchor styled as a CTA button.
 * Variants map to CSS classes in index.css.
 *
 * Props:
 *   href     — link target (anchor or url)
 *   variant  — "primary" (default) | "ghost" | "gold" | "light"
 *   arrow    — show an animated arrow glyph
 */
export default function Button({
  href = "#",
  variant = "primary",
  arrow = false,
  children,
  className = "",
  ...rest
}) {
  const variantClass =
    variant === "ghost"
      ? "btn--ghost"
      : variant === "gold"
      ? "btn--gold"
      : variant === "light"
      ? "btn--light"
      : "";

  return (
    <a href={href} className={`btn ${variantClass} ${className}`} {...rest}>
      {children}
      {arrow && (
        <span className="arrow" aria-hidden="true">
          ↗
        </span>
      )}
    </a>
  );
}
