import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main className={styles.page}>
      <div className={styles.content}>
        <div className={styles.visual} aria-hidden="true" data-reveal="scale-in">
          <svg viewBox="0 0 600 320" fill="none" aria-hidden="true" focusable="false">
            <g className={styles.guides} stroke="currentColor" strokeWidth="1">
              <path d="M20 60H580M20 260H580M300 16V304M160 32V288M440 32V288" />
              <circle cx="300" cy="160" r="132" strokeDasharray="3 7" />
              <path d="M20 54V66M580 54V66M20 254V266M580 254V266M292 24H308M292 296H308" />
            </g>
            <g stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
              <path d="M102 70H140V192H164V226H140V250H103V226H30V190L102 70ZM103 128L65 192H103V128Z" />
              <path d="M508 70H546V192H570V226H546V250H509V226H436V190L508 70ZM509 128L471 192H509V128Z" />
            </g>
            <g className={styles.nut} stroke="currentColor" strokeWidth="2">
              <path className={styles.nutFace} d="M300 53L393 106V214L300 267L207 214V106Z" />
              <path d="M300 66L382 113V207L300 254L218 207V113Z" />
              <circle cx="300" cy="160" r="67" />
              <circle cx="300" cy="160" r="57" />
              <circle cx="300" cy="160" r="51" strokeWidth="1" strokeDasharray="100 7" />
              <path d="M300 53V66M393 106L382 113M393 214L382 207M300 267V254M207 214L218 207M207 106L218 113" />
            </g>
          </svg>
        </div>
        <div className={styles.copy} data-reveal="fade-up">
          <p className={styles.eyebrow}>Error 404</p>
          <h1 className={styles.heading}>Page not found</h1>
          <p className={styles.message}>
            The page you’re looking for may have moved, changed, or no longer exists.
          </p>
          <nav className={styles.navigation} aria-label="Page not found navigation">
            <div className={styles.links}>
              <Link href="/" className={styles.link}>
                <span className={styles.backArrow} aria-hidden="true">←</span>
                BACK TO HOME
              </Link>
              <Link href="/contact" className={styles.link}>
                CONTACT US
                <span className={styles.forwardArrow} aria-hidden="true">→</span>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </main>
  );
}
