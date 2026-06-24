// src/app/solutions/automotive/page.tsx

import SolutionDetail from "@/src/components/company/Solutions/SolutionDetail";

export default function AutomotiveSolutionsPage() {
    return (
        <SolutionDetail
            eyebrow="Automotive Solutions"
            title="Brass Components For Automotive Applications"
            image="/images/solutions/automotive.jpg"
            description="We manufacture precision brass components for automotive assemblies where strength, accuracy, corrosion resistance, and long-term reliability are important. Our parts support electrical connections, fuel systems, fittings, inserts, and custom automotive requirements."
            parts={[
                "Brass Inserts",
                "Brass Bushes",
                "Brass Connectors",
                "Brass Terminals",
                "Threaded Brass Parts",
                "Custom Automotive Components",
            ]}
            applications={[
                {
                    title: "Electrical Connections",
                    text: "Brass terminals, connectors, and inserts for secure current flow and reliable automotive wiring applications.",
                },
                {
                    title: "Mechanical Assemblies",
                    text: "Bushes, threaded inserts, and precision turned components for durable mechanical fitment.",
                },
                {
                    title: "Custom OEM Parts",
                    text: "Manufacturing support for customer drawings, samples, and repeat automotive production needs.",
                },
            ]}
            benefits={[
                "Accurate CNC turned brass parts",
                "Reliable threading and dimensional consistency",
                "Suitable for repeat automotive production",
                "Custom development as per drawing or sample",
            ]}
        />
    );
}



