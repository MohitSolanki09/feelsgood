// src/components/company/Products/productsData.ts

export type ProductVisual =
    | "insert"
    | "fitting"
    | "fastener"
    | "electrical"
    | "cnc"
    | "custom";

export type Product = {
    slug: string;
    title: string;
    label: string;
    visual: ProductVisual;
    shortText: string;
    description: string;
    components: string[];
    applications: string[];
    specifications: string[];
};

export const products: Product[] = [
    {
        slug: "brass-inserts",
        title: "Brass Inserts",
        label: "Threaded Brass Insert Solutions",
        visual: "insert",
        shortText:
            "Precision brass inserts for plastic moulding, electrical fittings, automotive parts, and industrial assemblies.",
        description:
            "We manufacture brass inserts with accurate internal threads, clean knurling, strong grip, and reliable dimensional consistency. These inserts are suitable for plastic moulding, compression moulding, heat-set applications, and custom assembly requirements.",
        components: [
            "Threaded Brass Inserts",
            "Knurled Brass Inserts",
            "Heat-Set Brass Inserts",
            "Moulding Brass Inserts",
            "Press-Fit Inserts",
            "Custom Brass Inserts",
        ],
        applications: [
            "Plastic moulded components",
            "Automotive assemblies",
            "Electrical switchgear",
            "Hardware and machinery",
        ],
        specifications: [
            "Internal threading as per requirement",
            "Custom OD, ID, length, and knurl pattern",
            "Clean burr-free finishing",
            "Manufactured as per drawing or sample",
        ],
    },
    {
        slug: "brass-fittings",
        title: "Brass Fittings",
        label: "Durable Brass Fittings For Flow And Connection",
        visual: "fitting",
        shortText:
            "Brass fittings for plumbing, pneumatic, hydraulic, valve, and industrial connection applications.",
        description:
            "Our brass fittings are manufactured for reliable fitment, accurate threading, clean surface finishing, and long-term performance in water, air, oil, and industrial connection systems.",
        components: [
            "Brass Pipe Fittings",
            "Brass Adaptors",
            "Brass Nipples",
            "Brass Couplings",
            "Brass Valve Parts",
            "Custom Brass Fittings",
        ],
        applications: [
            "Plumbing systems",
            "Valve assemblies",
            "Industrial pipe connections",
            "Pneumatic and flow control systems",
        ],
        specifications: [
            "Internal and external threads",
            "Custom sizes and patterns",
            "Leak-resistant fitment focus",
            "Polishing and plating support",
        ],
    },
    {
        slug: "brass-fasteners",
        title: "Brass Fasteners",
        label: "Precision Brass Fasteners For Strong Assembly",
        visual: "fastener",
        shortText:
            "Brass screws, nuts, washers, bolts, and threaded fasteners for electrical and industrial use.",
        description:
            "We produce brass fasteners with accurate threads, clean finish, and strong assembly performance. Brass fasteners are suitable where corrosion resistance, conductivity, and premium finishing are required.",
        components: [
            "Brass Screws",
            "Brass Nuts",
            "Brass Bolts",
            "Brass Washers",
            "Threaded Brass Pins",
            "Special Brass Fasteners",
        ],
        applications: [
            "Electrical panels",
            "Industrial assemblies",
            "Hardware products",
            "Machinery and instruments",
        ],
        specifications: [
            "Metric and custom threads",
            "Round, hex, and special shapes",
            "Bulk production support",
            "Custom development as per sample",
        ],
    },
    {
        slug: "brass-electrical-parts",
        title: "Brass Electrical Parts",
        label: "Conductive Brass Parts For Electrical Use",
        visual: "electrical",
        shortText:
            "Brass terminals, connectors, earthing parts, neutral links, and switchgear components.",
        description:
            "Brass is widely used in electrical applications because of its conductivity, strength, and machining reliability. We manufacture brass electrical parts for panels, switchgear, earthing, wiring, and industrial electrical assemblies.",
        components: [
            "Brass Terminals",
            "Brass Connectors",
            "Neutral Links",
            "Earthing Components",
            "Switchgear Parts",
            "Custom Electrical Brass Parts",
        ],
        applications: [
            "Electrical switchgear",
            "Panel boards",
            "Earthing systems",
            "Wiring and connection assemblies",
        ],
        specifications: [
            "Good conductivity and strength",
            "Accurate drilling and threading",
            "Clean finishing for assembly",
            "Custom design support",
        ],
    },
    {
        slug: "cnc-turned-components",
        title: "CNC Turned Components",
        label: "Accurate CNC Brass Turned Parts",
        visual: "cnc",
        shortText:
            "CNC turned brass components for OEM, industrial, automotive, and electrical applications.",
        description:
            "We manufacture CNC turned brass components with high accuracy, repeat quality, and consistent finishing. These parts are suitable for custom industrial assemblies, OEM supply, electrical products, and precision engineering applications.",
        components: [
            "CNC Brass Parts",
            "Brass Bushes",
            "Brass Sleeves",
            "Brass Pins",
            "Brass Shafts",
            "Custom Turned Components",
        ],
        applications: [
            "OEM manufacturing",
            "Machinery assemblies",
            "Automotive parts",
            "Industrial components",
        ],
        specifications: [
            "Tight dimensional control",
            "Repeat batch production",
            "Turning, threading, drilling support",
            "Drawing-based manufacturing",
        ],
    },
    {
        slug: "custom-brass-components",
        title: "Custom Brass Components",
        label: "Custom Brass Parts As Per Drawing Or Sample",
        visual: "custom",
        shortText:
            "Custom brass components developed from drawings, samples, sizes, tolerances, and finish requirements.",
        description:
            "We help customers develop custom brass parts based on drawings, physical samples, application needs, and production quantities. This is suitable for OEMs, traders, exporters, and manufacturers who need special brass components.",
        components: [
            "Drawing-Based Brass Parts",
            "Sample-Based Components",
            "Special Threaded Parts",
            "Custom Brass Fittings",
            "Custom Inserts",
            "Special CNC Brass Parts",
        ],
        applications: [
            "OEM development",
            "Export supply",
            "Special industrial use",
            "Replacement component manufacturing",
        ],
        specifications: [
            "Manufacturing as per drawing",
            "Material and finish flexibility",
            "Sample-based development",
            "Small and bulk quantity support",
        ],
    },
];

export function getProductBySlug(slug: string) {
    return products.find((product) => product.slug === slug);
}