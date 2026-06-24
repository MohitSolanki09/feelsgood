// src/app/solutions/electrical/page.tsx

import SolutionDetail from "@/src/components/company/Solutions/SolutionDetail";

export default function ElectricalSolutionsPage() {
    return (
        <SolutionDetail
            eyebrow="Electrical Solutions"
            title="Brass Parts For Electrical And Switchgear Use"
            image="/images/solutions/electrical.jpg"
            description="Brass is widely used in electrical applications because of its conductivity, strength, and machining reliability. We manufacture brass terminals, connectors, earthing parts, switchgear components, and custom electrical brass parts."
            parts={[
                "Brass Terminals",
                "Brass Connectors",
                "Earthing Components",
                "Switchgear Brass Parts",
                "Brass Neutral Links",
                "Custom Electrical Parts",
            ]}
            applications={[
                {
                    title: "Switchgear",
                    text: "Precision brass components for electrical panels, breakers, contact systems, and control units.",
                },
                {
                    title: "Earthing Systems",
                    text: "Brass earthing and grounding components designed for dependable electrical safety.",
                },
                {
                    title: "Electrical Assemblies",
                    text: "Custom connectors, terminals, and conductive parts for industrial electrical applications.",
                },
            ]}
            benefits={[
                "Good conductivity and mechanical strength",
                "Clean machining and accurate threads",
                "Suitable for panel, switchgear, and earthing use",
                "Manufacturing as per electrical drawings",
            ]}
        />
    );
}