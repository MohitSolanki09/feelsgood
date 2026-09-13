// src/components/company/Products/productsData.ts

export type ProductVisual =
    | "insert"
    | "fitting"
    | "fastener"
    | "electrical"
    | "custom";

export type Product = {
    slug: string;
    title: string;
    label: string;
    visual: ProductVisual;
    imageSrc?: string;
    shortText: string;
    description: string;
    components: string[];
    applications: string[];
    specifications: string[];
};

export const products: Product[] = [
    {
        slug: "brass-inserts",
        imageSrc: "/images/products/brass-inserts.png",
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

const newProducts: Product[] = ([
    {
        slug: "brass-cpvc-inserts",
        title: "Brass CPVC Inserts",
        label: "Brass Inserts For CPVC Fittings",
        visual: "insert",
        shortText: "Brass inserts for threaded connections in CPVC fittings and plumbing assemblies.",
        description: "Brass CPVC inserts provide a threaded connection within CPVC fittings. Explore female, male, and knurled insert designs, with requirements reviewed against your fitting design, drawing, or sample.",
        components: ["Female CPVC Inserts", "Male CPVC Inserts", "Knurled CPVC Inserts", "Threaded CPVC Inserts", "CPVC Fitting Inserts", "Custom CPVC Inserts"],
        applications: ["CPVC fitting assemblies", "Threaded plumbing connections", "Moulded fitting components", "Drawing-based fitting development"],
        specifications: ["Share the required thread details", "Provide the mating fitting dimensions", "Specify the insert profile and finish", "Submit a drawing or sample for review"],
    },
    {
        slug: "brass-nut",
        title: "Brass Nut",
        label: "Brass Nuts For Threaded Assemblies",
        visual: "fastener",
        shortText: "Brass nuts for threaded fastenings, hardware, and component assemblies.",
        description: "Brass nuts pair with mating threaded parts in hardware and component assemblies. Hex and check nut designs can be discussed using your drawing or sample to establish the required form and fit.",
        components: ["Brass Hex Nuts", "Brass Check Nuts", "Brass Hex Check Nuts", "Threaded Brass Nuts", "Assembly Nuts", "Custom Brass Nuts"],
        applications: ["Threaded component assemblies", "Hardware fastenings", "Machinery assembly", "Replacement part development"],
        specifications: ["Share the mating thread details", "Provide the nut profile and dimensions", "Specify the required surface finish", "Submit a drawing or sample for review"],
    },
    {
        slug: "brass-ppr-fitting-inserts",
        title: "Brass PPR Fitting Inserts",
        label: "Brass Inserts For PPR Fittings",
        visual: "insert",
        shortText: "Brass inserts for threaded connections in PPR fittings and pipe assemblies.",
        description: "Brass PPR fitting inserts form the threaded interface within PPR fittings. Female, male, and knurled designs are available for discussion based on the mating parts and your drawing or sample.",
        components: ["Female PPR Inserts", "Male PPR Inserts", "Knurled PPR Inserts", "Threaded PPR Inserts", "PPR Fitting Inserts", "Custom PPR Inserts"],
        applications: ["PPR fitting assemblies", "Threaded pipe connections", "Moulded plumbing fittings", "Drawing-based fitting development"],
        specifications: ["Share the required thread details", "Provide the mating fitting dimensions", "Specify the insert profile and finish", "Submit a drawing or sample for review"],
    },
    {
        slug: "brass-reducer",
        title: "Brass Reducer",
        label: "Brass Reducers For Fitting Connections",
        visual: "fitting",
        shortText: "Brass reducers for connecting mating fittings of different sizes.",
        description: "Brass reducers connect fittings with different connection sizes. Explore threaded and hex reducer forms, with the connection arrangement and dimensions reviewed against your assembly requirements.",
        components: ["Brass Reducers", "Brass Hex Reducers", "Brass Pipe Reducers", "Threaded Brass Reducers", "Reducer Bushes", "Custom Brass Reducers"],
        applications: ["Pipe fitting assemblies", "Connections between different sizes", "Plumbing component assemblies", "Replacement fitting development"],
        specifications: ["Provide both connection sizes", "Share the required thread details", "Specify the reducer form and finish", "Submit a drawing or sample for review"],
    },
    {
        slug: "brass-sanitary-fitting",
        title: "Brass Sanitary Fitting",
        label: "Brass Fittings For Sanitary Assemblies",
        visual: "fitting",
        shortText: "Brass fittings for sanitary connections and plumbing component assemblies.",
        description: "Brass sanitary fittings connect components in sanitary and plumbing assemblies. Threaded fittings and union components can be reviewed against the required connection arrangement, drawing, or sample.",
        components: ["Threaded Sanitary Fittings", "Brass Sanitary Adaptors", "Brass Sanitary Connectors", "Brass Union Components", "Brass Composite Unions", "Custom Sanitary Fittings"],
        applications: ["Sanitary fitting assemblies", "Plumbing connections", "Union and adaptor assemblies", "Replacement fitting development"],
        specifications: ["Share the connection arrangement", "Provide the required thread details", "Specify the fitting dimensions and finish", "Submit a drawing or sample for review"],
    },
] satisfies Product[]).map((product) => ({ ...product, imageSrc: `/images/products/${product.slug}.png` }));

// Retain the older detail routes alongside the six featured products.
products.push(...newProducts);

export function getProductBySlug(slug: string) {
    return products.find((product) => product.slug === slug);
}

// Featured listing order; every card uses the same data as its detail page.
export const productCards = [
    newProducts[0],
    products[0],
    ...newProducts.slice(1),
].map((product) => ({
    ...product,
    imageSrc: `/images/products/${product.slug}.png`,
    href: `/products/${product.slug}`,
}));
