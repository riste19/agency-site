/**
 * Grain — a fixed, ultra-subtle film-grain overlay for depth.
 * Pure SVG noise (no image file), pointer-events disabled so it never
 * interferes with clicks. Hidden for reduced-motion-insensitive perf is
 * unnecessary since it's static.
 */
export default function Grain() {
  return (
    <div aria-hidden="true" className="grain-overlay">
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <filter id="grain-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-noise)" />
      </svg>
      <style>{`
        /* No mix-blend-mode: blending a fixed full-screen layer with the
           page forces a re-composite on every scroll frame. A plain low-
           opacity overlay gives subtle texture at near-zero cost. */
        .grain-overlay {
          position: fixed;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          opacity: 0.02;
        }
      `}</style>
    </div>
  );
}
