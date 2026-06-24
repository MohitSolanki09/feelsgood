// src/app/company/manufacturing/page.tsx

import ManufacturingHero from "@/src/components/company/Manufacturing/ManufacturingHero";
import CapabilitiesGrid from "@/src/components/company/Manufacturing/CapabilitiesGrid";
import ManufacturingCTA from "@/src/components/company/Manufacturing/ManufacturingCTA";

export default function ManufacturingPage() {
    return (
        <main>
            <ManufacturingHero />
            <CapabilitiesGrid />
            <ManufacturingCTA />
        </main>
    );
}