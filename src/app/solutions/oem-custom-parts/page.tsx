// src/app/solutions/oem-custom-parts/page.tsx

import SolutionDetail from "@/src/components/company/Solutions/SolutionDetail";

export default function OEMCustomPartsPage() {
    return (
        <SolutionDetail
            eyebrow="OEM / Custom Parts"
            title="Custom Brass Parts As Per Drawing Or Sample"
            image="/images/solutions/oem-custom-parts.jpg"
            description="We help OEMs, manufacturers, traders, and exporters develop custom brass components according to drawings, samples, dimensions, tolerances, material grade, finish requirements, and quantity needs."
            parts={[
                "Drawing-Based Brass Parts",
                "Sample-Based Components",
                "CNC Custom Parts",
                "Threaded Custom Inserts",
                "Custom Brass Fittings",
                "Special Brass Components",
            ]}
            applications={[
                {
                    title: "Drawing-Based Production",
                    text: "Manufacturing support based on technical drawings, dimensions, tolerances, and finishing needs.",
                },
                {
                    title: "Sample Development",
                    text: "We can develop brass parts based on physical samples and required application details.",
                },
                {
                    title: "OEM Supply",
                    text: "Repeat production support for OEMs and businesses requiring consistent brass components.",
                },
            ]}
            benefits={[
                "Custom development as per client requirement",
                "Support for drawings, samples, and dimensions",
                "Flexible quantity and repeat production",
                "Inspection and finishing support",
            ]}
        />
    );
}