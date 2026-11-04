import { useEffect, useRef } from "react";

/**
 * ScrollProgress — a thin gradient bar pinned to the top of the viewport
 * that fills as the visitor scrolls. Subtle, futuristic, and useful.
 *
 * Updates the bar's transform directly via a ref, throttled to one update
 * per animation frame. (Calling React setState on every scroll event causes
 * a re-render per frame and visibly janks scrolling.)
 */
export default function ScrollProgress() {
  const barRef = useRef(null);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      ticking = false;
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight || 1;
      const p = Math.min(Math.max(el.scrollTop / max, 0), 1);
      if (barRef.current) barRef.current.style.transform = `scaleX(${p})`;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="scroll-progress" aria-hidden="true">
      <span
        ref={barRef}
        className="scroll-progress-bar"
        style={{ transform: "scaleX(0)" }}
      />
      <style>{`
        .scroll-progress {
          position: fixed;
          top: 0; left: 0; right: 0;
          height: 3px;
          z-index: 150;
          pointer-events: none;
        }
        .scroll-progress-bar {
          display: block;
          height: 100%;
          transform-origin: left center;
          background: linear-gradient(90deg, var(--gold), var(--forest));
          box-shadow: 0 0 14px rgba(168, 137, 92, 0.55);
          transition: transform 0.12s linear;
        }
      `}</style>
    </div>
  );
}
