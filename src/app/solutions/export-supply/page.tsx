// src/app/solutions/export-supply/page.tsx

import SolutionDetail from "@/src/components/company/Solutions/SolutionDetail";

export default function ExportSupplyPage() {
    return (
        <SolutionDetail
            eyebrow="Export Supply"
            title="Reliable Brass Parts Supply For Domestic And Export Markets"
            image="/images/solutions/export-supply.jpg"
            description="We support domestic and export requirements for brass inserts, fittings, fasteners, electrical parts, CNC turned parts, and custom brass components with careful packing, production consistency, and documentation support."
            parts={[
                "Export Brass Inserts",
                "Export Brass Fittings",
                "Brass Fasteners",
                "Electrical Brass Parts",
                "CNC Turned Components",
                "Custom Export Components",
            ]}
            applications={[
                {
                    title: "Export Orders",
                    text: "Support for packed, inspected, and production-ready brass parts for export supply.",
                },
                {
                    title: "Bulk Manufacturing",
                    text: "Repeat production for exporters, traders, suppliers, and industrial customers.",
                },
                {
                    title: "Documentation Support",
                    text: "Basic packing and dispatch details can be managed as per customer requirements.",
                },
            ]}
            benefits={[
                "Reliable packing for dispatch",
                "Support for bulk and repeat orders",
                "Consistent machining and finish quality",
                "Suitable for traders, OEMs, and exporters",
            ]}
        />
    );
}