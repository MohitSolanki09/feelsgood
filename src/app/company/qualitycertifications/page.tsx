// src/app/company/quality-certifications/page.tsx

import QualityHero from "@/src/components/company/QualityCertifications/QualityHero";
import QualityProcess from "@/src/components/company/QualityCertifications/QualityProcess";
import CertificationStandards from "@/src/components/company/QualityCertifications/CertificationStandards";
import QualityCTA from "@/src/components/company/QualityCertifications/QualityCTA";

export default function QualityCertificationsPage() {
    return (
        <main>
            <QualityHero />
            <QualityProcess />
            <CertificationStandards />
            <QualityCTA />
        </main>
    );
}