// src/app/solutions/industrial/page.tsx

import SolutionDetail from "@/src/components/company/Solutions/SolutionDetail";

export default function IndustrialSolutionsPage() {
    return (
        <SolutionDetail
            eyebrow="Industrial Components"
            title="Custom Brass Components For Industrial Use"
            image="/images/solutions/industrial.jpg"
            description="We supply brass parts for machinery, equipment, assemblies, hardware, and industrial systems. Our manufacturing supports repeat production, custom dimensions, threading, CNC turning, and inspection-based delivery."
            parts={[
                "Brass Turned Parts",
                "Brass Bushes",
                "Brass Fasteners",
                "Brass Sleeves",
                "Machine Brass Components",
                "Custom Industrial Parts",
            ]}
            applications={[
                {
                    title: "Machinery Parts",
                    text: "Brass bushes, sleeves, fasteners, and machined parts for industrial machinery and equipment.",
                },
                {
                    title: "Hardware Assemblies",
                    text: "Reliable brass components for industrial hardware, fittings, and mechanical assemblies.",
                },
                {
                    title: "Repeat Production",
                    text: "Manufacturing support for bulk and repeat orders with consistent dimensions and finish.",
                },
            ]}
            benefits={[
                "Suitable for heavy industrial usage",
                "Reliable CNC machining capability",
                "Custom size and batch production",
                "Quality checking before dispatch",
            ]}
        />
    );
}