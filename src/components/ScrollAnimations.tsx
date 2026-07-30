/**
 * ScrollAnimations.tsx
 *
 * Global GSAP ScrollTrigger animation layer.
 * Mount this ONCE inside App.tsx. It queries the live DOM after
 * the portfolio renders and attaches scroll-triggered animations
 * to every section without rewriting individual components.
 *
 * Animations applied:
 *  • Section heading + divider — clip-path wipe from left
 *  • Cards / timeline items   — stagger fade-up
 *  • Stat counters            — count-up (driven by GSAP ticker)
 *  • Section number stamps    — parallax drift
 *  • Horizontal rule lines    — width expansion
 *  • Left/right slide-ins     — x-axis offset reveal
 *
 * Clean up: all ScrollTriggers are killed on unmount.
 */

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ─── helpers ─────────────────────────────────────────────────────────────────

function q<T extends Element = Element>(
  scope: Element | Document,
  sel: string
): T[] {
  return gsap.utils.toArray<T>(scope.querySelectorAll(sel));
}

// ─── main component ───────────────────────────────────────────────────────────

export default function ScrollAnimations() {
  useEffect(() => {
    const triggers: ScrollTrigger[] = [];
    const tweens:   gsap.core.Tween[] = [];

    // Give React one frame to finish mounting before querying DOM
    const raf = requestAnimationFrame(() => {
      // ── 1. Section headers: staggered fade + slide ─────────────────────────
      document.querySelectorAll("section").forEach((sec) => {
        const headings = q(sec, "h2.sr-heading");
        const dividers = q(sec, ".sr-divider");

        if (headings.length) {
          gsap.set(headings, { opacity: 0, y: 32, skewX: -3 });
          const t = ScrollTrigger.create({
            trigger: sec,
            start  : "top 82%",
            once   : true,
            onEnter() {
              gsap.to(headings, {
                opacity : 1,
                y       : 0,
                skewX   : 0,
                duration: 0.75,
                stagger : 0.08,
                ease    : "power3.out",
              });
            },
          });
          triggers.push(t);
        }

        if (dividers.length) {
          gsap.set(dividers, { scaleX: 0, transformOrigin: "left" });
          const t = ScrollTrigger.create({
            trigger: sec,
            start  : "top 80%",
            once   : true,
            onEnter() {
              gsap.to(dividers, {
                scaleX  : 1,
                duration: 0.6,
                delay   : 0.3,
                ease    : "power2.out",
              });
            },
          });
          triggers.push(t);
        }
      });

      // ── 2. Generic fade-up cards / items ───────────────────────────────────
      document.querySelectorAll(".sr-card").forEach((card) => {
        const parent = card.parentElement;
        if (!parent) return;
        gsap.set(card, { opacity: 0, y: 36 });
        const t = ScrollTrigger.create({
          trigger: card,
          start  : "top 90%",
          once   : true,
          onEnter() {
            gsap.to(card, {
              opacity : 1,
              y       : 0,
              duration: 0.65,
              ease    : "power3.out",
            });
          },
        });
        triggers.push(t);
      });

      // ── 3. Stagger groups — children marked sr-stagger inside a container ──
      document.querySelectorAll(".sr-group").forEach((group) => {
        const children = q(group, ".sr-item");
        if (!children.length) return;
        gsap.set(children, { opacity: 0, y: 30 });
        const t = ScrollTrigger.create({
          trigger: group,
          start  : "top 85%",
          once   : true,
          onEnter() {
            gsap.to(children, {
              opacity : 1,
              y       : 0,
              duration: 0.55,
              stagger : 0.09,
              ease    : "power3.out",
            });
          },
        });
        triggers.push(t);
      });

      // ── 4. Slide-from-left ─────────────────────────────────────────────────
      document.querySelectorAll(".sr-left").forEach((el) => {
        gsap.set(el, { opacity: 0, x: -50 });
        const t = ScrollTrigger.create({
          trigger: el,
          start  : "top 88%",
          once   : true,
          onEnter() {
            gsap.to(el, {
              opacity : 1,
              x       : 0,
              duration: 0.7,
              ease    : "power3.out",
            });
          },
        });
        triggers.push(t);
      });

      // ── 5. Slide-from-right ────────────────────────────────────────────────
      document.querySelectorAll(".sr-right").forEach((el) => {
        gsap.set(el, { opacity: 0, x: 50 });
        const t = ScrollTrigger.create({
          trigger: el,
          start  : "top 88%",
          once   : true,
          onEnter() {
            gsap.to(el, {
              opacity : 1,
              x       : 0,
              duration: 0.7,
              ease    : "power3.out",
            });
          },
        });
        triggers.push(t);
      });

      // ── 6. Scale-in (pop) ──────────────────────────────────────────────────
      document.querySelectorAll(".sr-pop").forEach((el) => {
        gsap.set(el, { opacity: 0, scale: 0.85 });
        const t = ScrollTrigger.create({
          trigger: el,
          start  : "top 90%",
          once   : true,
          onEnter() {
            gsap.to(el, {
              opacity : 1,
              scale   : 1,
              duration: 0.6,
              ease    : "back.out(1.4)",
            });
          },
        });
        triggers.push(t);
      });

      // ── 7. Section section-number watermarks — subtle parallax ─────────────
      document.querySelectorAll(".sr-parallax").forEach((el) => {
        const tween = gsap.to(el, {
          yPercent: -18,
          ease    : "none",
          scrollTrigger: {
            trigger : el.closest("section") ?? el,
            start   : "top bottom",
            end     : "bottom top",
            scrub   : 1.5,
          },
        });
        tweens.push(tween);
      });
    });

    ScrollTrigger.refresh();

    return () => {
      cancelAnimationFrame(raf);
      triggers.forEach((t) => t.kill());
      tweens.forEach((t) => t.scrollTrigger?.kill());
    };
  }, []);

  return null; // pure side-effect component
}
