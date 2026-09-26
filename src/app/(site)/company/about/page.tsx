import { pageMetadata, seoPages } from "@/src/lib/seo";
import { BreadcrumbSchema } from "@/src/components/common/StructuredData";
// src/app/company/about/page.tsx

import AboutHero from "@/src/components/About/AboutHero";
import CompanyOverview from "@/src/components/About/CompanyOverview";
import CoreValues from "@/src/components/About/CoreValues";
import CompanyJourney from "@/src/components/About/CompanyJourney";
import LeadershipMessage from "@/src/components/About/LeadershipMessage";

export const metadata = pageMetadata(...seoPages["/company/about"], "/company/about");

export default function CompanyAboutPage() {
    return (
        <main>
            <BreadcrumbSchema items={[{ name: "About", path: "/company/about" }]} />
            <AboutHero />
            <CompanyOverview />
            <CoreValues />
            <CompanyJourney />
            <LeadershipMessage />
        </main>
    );
}