import { BreadcrumbSchema } from "@/src/components/common/StructuredData";
import styles from "./LegalPage.module.css";

type LegalSection = { title: string; blocks: (string | string[])[] };

export default function LegalPage({ title, path, intro, sections }: {
  title: string;
  path: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <main className={styles.page}>
      <BreadcrumbSchema items={[{ name: title, path }]} />
      <section className={styles.hero} aria-labelledby="legal-title">
        <div className={styles.container}>
          <p className={styles.eyebrow}><span aria-hidden="true">/</span> Legal</p>
          <h1 id="legal-title">{title}</h1>
          <p className={styles.updated}>Last Updated: September 2026</p>
        </div>
      </section>
      <div className={styles.content}>
        <p className={styles.intro}>{intro}</p>
        {sections.map((section, index) => (
          <section key={section.title} className={styles.section} aria-labelledby={`legal-section-${index}`}>
            <h2 id={`legal-section-${index}`}>{index + 1}. {section.title}</h2>
            {section.blocks.map((block, blockIndex) => Array.isArray(block) ? (
              <ul key={blockIndex}>{block.map(item => <li key={item}>{item}</li>)}</ul>
            ) : <p key={blockIndex}>{block}</p>)}
          </section>
        ))}
      </div>
    </main>
  );
}
