import { pageMetadata, seoPages } from "@/src/lib/seo";
import { BreadcrumbSchema } from "@/src/components/common/StructuredData";
// src/app/company/manufacturing/page.tsx

import ManufacturingHero from "@/src/components/company/Manufacturing/ManufacturingHero";
import CapabilitiesGrid from "@/src/components/company/Manufacturing/CapabilitiesGrid";
import ManufacturingCTA from "@/src/components/company/Manufacturing/ManufacturingCTA";

export const metadata = pageMetadata(...seoPages["/company/manufacturing"], "/company/manufacturing");

export default function ManufacturingPage() {
    return (
        <main>
            <BreadcrumbSchema items={[{ name: "Manufacturing", path: "/company/manufacturing" }]} />
            <ManufacturingHero />
            <CapabilitiesGrid />
            <ManufacturingCTA />
        </main>
    );
}