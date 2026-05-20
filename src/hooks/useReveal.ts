"use client";
import { useEffect, useRef } from "react";

/**
 * Adds IntersectionObserver scroll-reveal to elements with class="reveal" or "reveal-scale"
 * inside the observed container.
 */
export function useReveal() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const targets = Array.from(
      container.querySelectorAll<HTMLElement>(".reveal, .reveal-scale")
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return ref;
}
