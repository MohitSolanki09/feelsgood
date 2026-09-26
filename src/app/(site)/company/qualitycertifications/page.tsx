import { pageMetadata, seoPages } from "@/src/lib/seo";
import { BreadcrumbSchema } from "@/src/components/common/StructuredData";
// src/app/company/quality-certifications/page.tsx

import QualityHero from "@/src/components/company/QualityCertifications/QualityHero";
import QualityProcess from "@/src/components/company/QualityCertifications/QualityProcess";
import CertificationStandards from "@/src/components/company/QualityCertifications/CertificationStandards";
import QualityCTA from "@/src/components/company/QualityCertifications/QualityCTA";

export const metadata = pageMetadata(...seoPages["/company/qualitycertifications"], "/company/qualitycertifications");

export default function QualityCertificationsPage() {
    return (
        <main>
            <BreadcrumbSchema items={[{ name: "Quality Processes", path: "/company/qualitycertifications" }]} />
            <QualityHero />
            <QualityProcess />
            <CertificationStandards />
            <QualityCTA />
        </main>
    );
}