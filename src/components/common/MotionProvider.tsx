"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

/** One root scroll controller; page content remains server rendered. */
export default function MotionProvider() {
  const pathname = usePathname();

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let lenis: Lenis | undefined;
    const syncLock = () => {
      if (document.documentElement.dataset.scrollLocked === "true") lenis?.stop();
      else lenis?.start();
    };
    const syncPreference = () => {
      lenis?.destroy();
      lenis = undefined;
      if (!preference.matches) {
        lenis = new Lenis({
          lerp: 0.1,
          autoRaf: true,
          smoothWheel: true,
          syncTouch: false,
          // Lenis reads the root scroll-padding, also used by native anchors.
          anchors: true,
          stopInertiaOnNavigate: true,
        });
        syncLock();
      }
    };
    const lockObserver = new MutationObserver(syncLock);
    lockObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-scroll-locked"],
    });
    syncPreference();
    preference.addEventListener("change", syncPreference);
    return () => {
      preference.removeEventListener("change", syncPreference);
      lockObserver.disconnect();
      lenis?.destroy();
    };
  }, []);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    let observer: IntersectionObserver | undefined;
    const reset = () => {
      observer?.disconnect();
      elements.forEach((element) => element.classList.remove("reveal-pending"));
    };
    const setup = () => {
      reset();
      if (preference.matches || !("IntersectionObserver" in window)) return;
      observer = new IntersectionObserver((entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (!isIntersecting) return;
          target.classList.remove("reveal-pending");
          observer?.unobserve(target);
        });
      }, { threshold: 0.08 });
      elements.forEach((element) => {
        // Never hide initial viewport content or delay the page's LCP.
        if (element.getBoundingClientRect().top < window.innerHeight) return;
        element.classList.add("reveal-pending");
        observer?.observe(element);
      });
    };
    setup();
    preference.addEventListener("change", setup);
    return () => {
      reset();
      preference.removeEventListener("change", setup);
    };
  }, [pathname]);

  return null;
}
