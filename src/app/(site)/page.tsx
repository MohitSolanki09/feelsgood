import { pageMetadata, seoPages } from "@/src/lib/seo";
// src/app/page.tsx

import Hero from "@/src/components/Home/Hero";
import BrassValueSection from "@/src/components/Home/BrassValueSection";
import ProcessSection from "@/src/components/Home/ProcessSection";
import QualitySection from "@/src/components/Home/QualitySection";
import AdvancementSection from "@/src/components/Home/AdvancementSection";

export const metadata = {
  ...pageMetadata(...seoPages["/"], "/"),
  title: { absolute: "Feel Good Brass Industry | Brass Parts Manufacturer in Jamnagar" },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <BrassValueSection />
      <ProcessSection />
      <QualitySection />
      <AdvancementSection />
    </main>
  );
}
