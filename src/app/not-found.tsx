import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main className={styles.page}>
      <div className={styles.content}>
        <p className={styles.eyebrow}>Error 404</p>
        <h1 className={styles.heading}>Page not found</h1>
        <p className={styles.message}>
          The page you’re looking for may have moved or no longer exists.
        </p>
        <Link href="/" className={styles.homeLink}>
          <span className={styles.arrow} aria-hidden="true">←</span>
          Back to Home
        </Link>
      </div>
    </main>
  );
}
