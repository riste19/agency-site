import { useEffect, useState } from "react";

/**
 * useCardSpotlight — gives any element with the `.spotlight` class a soft
 * glow that follows the cursor. Uses one delegated pointer listener (cheap)
 * and updates CSS custom properties read by the .spotlight::before in CSS.
 */
export function useCardSpotlight() {
  useEffect(() => {
    let raf = 0;
    let pending = null; // { card, x, y } captured from the latest move
    const apply = () => {
      raf = 0;
      if (!pending) return;
      const { card, x, y } = pending;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${x - r.left}px`);
      card.style.setProperty("--my", `${y - r.top}px`);
    };
    const onMove = (e) => {
      const card = e.target.closest?.(".spotlight");
      if (!card) return;
      pending = { card, x: e.clientX, y: e.clientY };
      if (!raf) raf = requestAnimationFrame(apply);
    };
    document.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      document.removeEventListener("pointermove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
}

/**
 * useActiveSection — scroll-spy. Returns the id of the section currently in
 * view so the nav can highlight the matching link as you move through the page.
 */
export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      // Trigger when a section crosses the vertical middle of the viewport.
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [ids.join(",")]);

  return active;
}

/**
 * useTabTitle — a small delight: when the visitor switches browser tabs,
 * swap the page title to gently invite them back. Restores on return.
 */
export function useTabTitle(awayText) {
  useEffect(() => {
    const original = document.title;
    const onVisibility = () => {
      document.title = document.hidden ? awayText : original;
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      document.removeEventListener("visibilitychange", onVisibility);
      document.title = original;
    };
  }, [awayText]);
}
