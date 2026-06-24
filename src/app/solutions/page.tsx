// src/app/solutions/page.tsx

import Link from "next/link";

const solutions = [
    {
        title: "Automotive Solutions",
        href: "/solutions/automotive",
        text: "Precision brass inserts, bushes, terminals, and custom parts for automotive applications.",
    },
    {
        title: "Electrical Solutions",
        href: "/solutions/electrical",
        text: "Brass terminals, connectors, neutral links, earthing parts, and switchgear components.",
    },
    {
        title: "Plumbing Solutions",
        href: "/solutions/plumbing",
        text: "Brass fittings, adaptors, nipples, valve parts, and threaded plumbing components.",
    },
    {
        title: "Industrial Components",
        href: "/solutions/industrial",
        text: "Brass bushes, sleeves, fasteners, machine parts, and industrial custom components.",
    },
    {
        title: "OEM / Custom Parts",
        href: "/solutions/oem-custom-parts",
        text: "Custom brass parts manufactured as per drawings, samples, dimensions, and finish needs.",
    },
    {
        title: "Export Supply",
        href: "/solutions/export-supply",
        text: "Reliable brass parts supply for domestic, export, OEM, and bulk production needs.",
    },
];

function ArrowIcon() {
    return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
            <path
                d="M5 12h13M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default function SolutionsPage() {
    return (
        <main>
            <section className="bg-white py-[110px] max-lg:py-20 max-md:py-16">
                <div className="mx-auto max-w-[1500px] px-10 max-md:px-5">
                    <div className="mb-16 max-w-[850px]">
                        <span className="mb-5 block text-[14px] font-extrabold uppercase tracking-[3px] text-[#D79229]">
                            / Solutions
                        </span>

                        <h1 className="text-[64px] font-extrabold uppercase leading-[1.08] tracking-[-2.5px] text-[#050505] max-xl:text-[52px] max-md:text-[40px] max-sm:text-[32px]">
                            Custom Brass Solutions For Modern Industries
                        </h1>

                        <p className="mt-7 max-w-[760px] text-[18px] leading-[1.8] text-[#465566]">
                            We manufacture brass parts for automotive, electrical, plumbing,
                            industrial, OEM, and export supply requirements with precision,
                            quality, and reliable delivery.
                        </p>
                    </div>

                    <div className="grid grid-cols-3 border border-[#e7e1d7] max-lg:grid-cols-2 max-md:grid-cols-1">
                        {solutions.map((item, index) => (
                            <Link
                                key={item.title}
                                href={item.href}
                                className={`group min-h-[320px] px-9 py-10 transition-colors duration-500 hover:bg-[#0B1F35] max-md:px-6 ${index !== 2 && index !== 5 ? "border-r border-[#e7e1d7]" : ""
                                    } ${index < 3 ? "border-b border-[#e7e1d7]" : ""} max-lg:border-r-0 max-lg:border-b`}
                            >
                                <span className="mb-10 block text-[13px] font-extrabold uppercase tracking-[3px] text-[#D79229]">
                                    0{index + 1}
                                </span>

                                <h2 className="text-[25px] font-extrabold uppercase leading-[1.15] tracking-[-0.6px] text-[#0B1F35] transition-colors duration-500 group-hover:text-white">
                                    {item.title}
                                </h2>

                                <p className="mt-6 text-[16px] leading-[1.75] text-[#465566] transition-colors duration-500 group-hover:text-white/75">
                                    {item.text}
                                </p>

                                <div className="mt-10 flex items-center gap-4 text-[14px] font-extrabold uppercase tracking-[3px] text-[#D79229]">
                                    View Details
                                    <ArrowIcon />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}