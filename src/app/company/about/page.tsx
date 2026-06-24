// src/app/company/about/page.tsx

import AboutHero from "@/src/components/About/AboutHero";
import CompanyOverview from "@/src/components/About/CompanyOverview";
import CoreValues from "@/src/components/About/CoreValues";
import CompanyJourney from "@/src/components/About/CompanyJourney";
import LeadershipMessage from "@/src/components/About/LeadershipMessage";

export default function CompanyAboutPage() {
    return (
        <main>
            <AboutHero />
            <CompanyOverview />
            <CoreValues />
            <CompanyJourney />
            <LeadershipMessage />
        </main>
    );
}