"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

/** One root scroll controller; page content remains server rendered. */
export default function MotionProvider() {
  const pathname = usePathname();
  const revealed = useRef(new WeakSet<Element>());

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
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"))
      .filter((element) => !element.parentElement?.closest("[data-reveal]"));
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
          revealed.current.add(target);
          observer?.unobserve(target);
        });
      }, { threshold: 0 });
      elements.forEach((element) => {
        if (element.hasAttribute("data-reveal-stagger")) {
          const siblings = Array.from(element.parentElement?.children ?? [])
            .filter((sibling) => sibling.hasAttribute("data-reveal-stagger"));
          element.style.setProperty("--reveal-delay", `${Math.min(siblings.indexOf(element), 3) * 70}ms`);
        }
        // Never hide initial viewport content or delay the page's LCP.
        if (revealed.current.has(element)) return;
        if (element.getBoundingClientRect().top < window.innerHeight) {
          revealed.current.add(element);
          return;
        }
        element.classList.add("reveal-pending");
        observer?.observe(element);
      });
    };
    setup();
    const revealFocused = (event: FocusEvent) => {
      if (!(event.target instanceof Element)) return;
      elements.forEach((element) => {
        if (!element.contains(event.target as Node)) return;
        element.classList.remove("reveal-pending");
        revealed.current.add(element);
        observer?.unobserve(element);
      });
    };
    document.addEventListener("focusin", revealFocused);
    preference.addEventListener("change", setup);
    return () => {
      reset();
      document.removeEventListener("focusin", revealFocused);
      preference.removeEventListener("change", setup);
    };
  }, [pathname]);

  return null;
}
