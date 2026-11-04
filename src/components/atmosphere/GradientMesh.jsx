/**
 * GradientMesh — soft, warm radial-gradient atmosphere placed behind
 * hero / CTA sections so backgrounds feel deep instead of flat.
 *
 * Props:
 *   variant: "light" (ivory, default) | "forest" (dark green CTA)
 */
export default function GradientMesh({ variant = "light" }) {
  return (
    <div aria-hidden="true" className={`mesh mesh--${variant}`}>
      <span className="mesh-blob mesh-blob--a" />
      <span className="mesh-blob mesh-blob--b" />
      <span className="mesh-blob mesh-blob--c" />
      <style>{`
        .mesh {
          position: absolute;
          inset: 0;
          overflow: hidden;
          z-index: 0;
          pointer-events: none;
        }
        /* Static blobs — no continuous animation. Animating a blur(70px)
           surface forces a full re-rasterization every frame, which tanks
           the frame-rate even when idle. Static looks nearly identical and
           costs essentially nothing. */
        .mesh-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(70px);
          opacity: 0.55;
        }
        /* Light variant — warm ivory glow with gold + faint green */
        .mesh--light .mesh-blob--a {
          width: 46vw; height: 46vw; top: -12vw; left: -8vw;
          background: radial-gradient(circle, #fbf8f2, transparent 70%);
          opacity: 0.9;
        }
        .mesh--light .mesh-blob--b {
          width: 38vw; height: 38vw; top: -6vw; right: -6vw;
          background: radial-gradient(circle, rgba(168,137,92,0.28), transparent 70%);
        }
        .mesh--light .mesh-blob--c {
          width: 40vw; height: 40vw; bottom: -16vw; left: 30vw;
          background: radial-gradient(circle, rgba(27,58,43,0.12), transparent 70%);
        }
        /* Forest variant — for the dark final-CTA section */
        .mesh--forest .mesh-blob--a {
          width: 50vw; height: 50vw; top: -16vw; left: -10vw;
          background: radial-gradient(circle, rgba(60,111,80,0.55), transparent 70%);
        }
        .mesh--forest .mesh-blob--b {
          width: 40vw; height: 40vw; bottom: -14vw; right: -8vw;
          background: radial-gradient(circle, rgba(168,137,92,0.40), transparent 70%);
        }
        .mesh--forest .mesh-blob--c {
          width: 34vw; height: 34vw; top: 20%; right: 26%;
          background: radial-gradient(circle, rgba(194,168,120,0.18), transparent 70%);
        }
      `}</style>
    </div>
  );
}
