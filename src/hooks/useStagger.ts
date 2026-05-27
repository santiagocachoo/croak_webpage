import { useEffect, useRef } from "react";

const EASING = "cubic-bezier(0.23, 1, 0.32, 1)";
const DURATION = "600ms";

export function useStagger(itemDelay = 90) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const items = Array.from(el.querySelectorAll<HTMLElement>(".croak-stagger-item"));
    if (!items.length) return;

    if (prefersReduced) {
      items.forEach((item) => {
        item.style.opacity = "1";
        item.style.transform = "none";
      });
      return;
    }

    // Start items hidden (before they flash visible)
    items.forEach((item) => {
      item.style.opacity = "0";
      item.style.transform = "translateY(22px)";
      item.style.transition = `opacity ${DURATION} ${EASING}, transform ${DURATION} ${EASING}`;
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        items.forEach((item, i) => {
          item.style.transitionDelay = `${i * itemDelay}ms`;
          item.style.opacity = "1";
          item.style.transform = "none";
        });

        // Clean up delays once all animations settle
        const cleanup = window.setTimeout(() => {
          items.forEach((item) => {
            item.style.transitionDelay = "";
          });
        }, items.length * itemDelay + 700);

        observer.disconnect();
        return () => window.clearTimeout(cleanup);
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [itemDelay]);

  return ref;
}
