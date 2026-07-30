/**
 * useScrollReveal.ts — Shared GSAP ScrollTrigger hook
 *
 * Attach to any section ref. Children with className "sr" animate in on scroll.
 */

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface RevealOptions {
  selector?: string;
  y?       : number;
  stagger? : number;
  duration?: number;
  start?   : string;
  once?    : boolean;
}

export function useScrollReveal<T extends HTMLElement = HTMLElement>(
  options: RevealOptions = {}
) {
  const ref = useRef<T>(null);

  const {
    selector = ".sr",
    y        = 40,
    stagger  = 0.1,
    duration = 0.7,
    start    = "top 88%",
    once     = true,
  } = options;

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const targets = gsap.utils.toArray<HTMLElement>(
      container.querySelectorAll(selector)
    );
    if (targets.length === 0) return;

    gsap.set(targets, { opacity: 0, y });

    const st = ScrollTrigger.create({
      trigger: container,
      start,
      once,
      onEnter() {
        gsap.to(targets, {
          opacity  : 1,
          y        : 0,
          duration,
          stagger,
          ease     : "power3.out",
          overwrite: "auto",
        });
      },
    });

    return () => {
      st.kill();
      gsap.set(targets, { clearProps: "opacity,y" });
    };
  }, [selector, y, stagger, duration, start, once]);

  return ref;
}
