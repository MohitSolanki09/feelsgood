"use client";

import { useEffect, useState, type MouseEvent } from "react";
import styles from "./FloatingActions.module.css";

const inquiry = "Hello Feel Good Brass Industry,\nI would like to inquire about your brass components.";

export default function FloatingActions({ phone }: { phone: string }) {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const update = () => setShowTop(window.scrollY >= 500);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const backToTop = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // Let the existing Lenis anchors listener handle the bubbling #top link.
    if (!reducedMotion && document.documentElement.classList.contains("lenis")) return;
    window.scrollTo({ top: 0, behavior: reducedMotion ? "instant" : "smooth" });
  };

  return (
    <div className={styles.actions}>
      {showTop && (
        <a href="#top" onClick={backToTop} aria-label="Back to top" className={styles.top}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="m6 11 6-6 6 6M12 5v14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      )}
      <a
        href={`https://wa.me/${phone.replace(/\D/g, "")}?text=${encodeURIComponent(inquiry)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Feel Good Brass Industry on WhatsApp"
        className={styles.whatsapp}
      >
        <svg width="29" height="29" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M20.52 3.48A11.9 11.9 0 0 0 12.05 0C5.47 0 .12 5.35.12 11.93c0 2.1.55 4.16 1.6 5.97L0 24l6.28-1.65a11.94 11.94 0 0 0 5.77 1.47h.01c6.57 0 11.92-5.35 11.92-11.93 0-3.19-1.24-6.18-3.46-8.41ZM12.05 21.8a9.9 9.9 0 0 1-5.03-1.37l-.36-.21-3.73.98 1-3.63-.24-.38a9.87 9.87 0 0 1-1.51-5.26c0-5.47 4.45-9.92 9.93-9.92a9.87 9.87 0 0 1 7.02 2.91 9.87 9.87 0 0 1 2.9 7.02c0 5.47-4.45 9.92-9.98 9.86Zm5.44-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.47-.88-.79-1.48-1.77-1.65-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.91-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.71.63.72.23 1.37.2 1.89.12.58-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35Z" />
        </svg>
      </a>
    </div>
  );
}
