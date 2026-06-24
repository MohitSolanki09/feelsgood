// src/app/solutions/plumbing/page.tsx

import SolutionDetail from "@/src/components/company/Solutions/SolutionDetail";

export default function PlumbingSolutionsPage() {
    return (
        <SolutionDetail
            eyebrow="Plumbing Solutions"
            title="Brass Fittings For Plumbing And Flow Systems"
            image="/images/solutions/plumbing.jpg"
            description="We manufacture brass fittings and plumbing components used in water flow, pipe connections, valves, sanitary fittings, and industrial fluid applications. Our focus is on proper threading, fitment, finishing, and long-term durability."
            parts={[
                "Brass Pipe Fittings",
                "Brass Nipples",
                "Brass Adaptors",
                "Brass Valve Parts",
                "Threaded Brass Fittings",
                "Custom Plumbing Components",
            ]}
            applications={[
                {
                    title: "Pipe Connections",
                    text: "Threaded brass fittings and adaptors for secure and reliable pipe connections.",
                },
                {
                    title: "Valve Assemblies",
                    text: "Brass components for valves, flow control, and plumbing hardware assemblies.",
                },
                {
                    title: "Sanitary Use",
                    text: "Clean-finished brass fittings suitable for sanitary and plumbing product manufacturing.",
                },
            ]}
            benefits={[
                "Strong threading and fitment accuracy",
                "Durable brass material for plumbing use",
                "Custom fittings as per size and sample",
                "Clean finishing and reliable packing",
            ]}
        />
    );
}