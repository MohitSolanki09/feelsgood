// src/app/quality/page.tsx

import Link from "next/link";

const qualityPillars = [
    {
        number: "01",
        title: "Material Control",
        text: "Brass raw material is checked before production to maintain stable machining, strength, and finishing quality.",
    },
    {
        number: "02",
        title: "Precision Checking",
        text: "Dimensions, threads, drilling, and tolerance areas are checked during machining and production.",
    },
    {
        number: "03",
        title: "Final Inspection",
        text: "Every batch is reviewed for burr-free finish, visual quality, packing condition, and dispatch readiness.",
    },
];

const inspectionFlow = [
    "Raw Material Review",
    "Drawing / Sample Study",
    "Machining Accuracy",
    "Thread Inspection",
    "Surface Finish Check",
    "Final Packing",
];

const checkAreas = [
    {
        title: "Dimensional Accuracy",
        text: "OD, ID, length, hole depth, and critical dimensions are verified as per requirement.",
    },
    {
        title: "Thread Quality",
        text: "Internal and external threads are checked for smooth fitting and assembly performance.",
    },
    {
        title: "Surface Finish",
        text: "Parts are reviewed for clean surface, polishing quality, plating support, and visual consistency.",
    },
    {
        title: "Burr-Free Output",
        text: "Machined edges and drilled areas are checked to reduce burrs and sharp finishing issues.",
    },
    {
        title: "Batch Consistency",
        text: "Repeat production is controlled to maintain the same size, finish, and quality across batches.",
    },
    {
        title: "Safe Packing",
        text: "Components are packed carefully to reduce scratches, mixing, and transport damage.",
    },
];

function ArrowIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
        >
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

function CheckIcon() {
    return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
            <path
                d="M20 6L9 17l-5-5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function BrassQualityVisual() {
    return (
        <div className="relative flex min-h-[560px] items-center justify-center overflow-hidden bg-[#F8F3EA] max-lg:min-h-[440px] max-md:min-h-[340px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_24%,rgba(215,146,41,0.28),transparent_34%),radial-gradient(circle_at_78%_80%,rgba(11,31,53,0.14),transparent_34%)]" />

            <div className="absolute left-10 top-10 h-24 w-24 rounded-full border border-[#D79229]/25" />
            <div className="absolute bottom-12 right-12 h-36 w-36 rounded-full border border-[#0B1F35]/10" />

            <div className="relative h-[290px] w-[290px] rounded-[42px] bg-gradient-to-br from-[#F8CF78] via-[#D79229] to-[#8F5518] shadow-2xl max-md:h-[220px] max-md:w-[220px]">
                <div className="absolute left-1/2 top-1/2 h-[148px] w-[148px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F8F3EA] shadow-inner max-md:h-[110px] max-md:w-[110px]" />

                <div className="absolute left-8 top-8 h-10 w-10 rounded-full bg-white/30" />
                <div className="absolute bottom-8 right-8 h-10 w-10 rounded-full bg-[#0B1F35]/20" />

                <div className="absolute -bottom-8 left-1/2 flex h-16 -translate-x-1/2 items-center gap-3 bg-[#0B1F35] px-7 text-white shadow-xl">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#D79229]">
                        <CheckIcon />
                    </span>
                    <span className="text-[13px] font-extrabold uppercase tracking-[3px]">
                        QC Passed
                    </span>
                </div>
            </div>
        </div>
    );
}

export default function QualityPage() {
    return (
        <main>
            {/* HERO */}
            <section className="bg-white">
                <div className="mx-auto max-w-[1600px] px-5">
                    <div className="grid min-h-[620px] grid-cols-[1.05fr_0.95fr] border-x border-[#e7e1d7] max-lg:grid-cols-1">
                        <div className="flex items-center border-r border-[#e7e1d7] px-12 py-20 max-lg:border-r-0 max-lg:border-b max-md:px-6 max-md:py-14">
                            <div>
                                <p className="mb-6 flex items-center gap-2 text-[18px] font-medium text-[#0B1F35]">
                                    <span className="text-[#D79229]">/</span>
                                    Quality Assurance
                                </p>

                                <h1 className="max-w-[850px] text-[66px] font-extrabold uppercase leading-[1.05] tracking-[-2.8px] text-[#050505] max-xl:text-[54px] max-md:text-[40px] max-sm:text-[32px]">
                                    Reliable Quality For Every Brass Component
                                </h1>

                                <p className="mt-8 max-w-[720px] text-[18px] leading-[1.85] text-[#465566] max-md:text-[16px]">
                                    Our quality process is built to maintain accurate dimensions, clean finishing, proper threading, and consistent production for brass inserts, fittings, fasteners, electrical parts, precision turned components, and custom brass products, ensuring reliable quality and long-lasting performance.
                                </p>

                                <div className="mt-10 flex flex-wrap gap-4">
                                    <Link
                                        href="/contact"
                                        className="group inline-flex h-[60px] items-center justify-center gap-4 bg-[#D79229] px-8 text-[14px] font-extrabold uppercase tracking-[3px] text-white transition-colors duration-300 hover:bg-[#0B1F35]"
                                    >
                                        Request Quote
                                        <ArrowIcon />
                                    </Link>

                                    <Link
                                        href="/products"
                                        className="group inline-flex h-[60px] items-center justify-center gap-4 border border-[#0B1F35]/15 px-8 text-[14px] font-extrabold uppercase tracking-[3px] text-[#0B1F35] transition-colors duration-300 hover:border-[#D79229] hover:text-[#D79229]"
                                    >
                                        View Products
                                        <ArrowIcon />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <BrassQualityVisual />
                    </div>
                </div>
            </section>

            {/* QUALITY PILLARS */}
            <section className="bg-white py-[110px] max-lg:py-20 max-md:py-16">
                <div className="mx-auto max-w-[1500px] px-10 max-md:px-5">
                    <div className="mb-16 grid grid-cols-[0.8fr_1.2fr] gap-16 max-lg:grid-cols-1 max-lg:gap-8">
                        <div>
                            <span className="mb-5 block text-[14px] font-extrabold uppercase tracking-[3px] text-[#D79229]">
                                / Our Quality Standard
                            </span>

                            <h2 className="text-[56px] font-extrabold uppercase leading-[1.08] tracking-[-2px] text-[#050505] max-xl:text-[46px] max-md:text-[34px] max-sm:text-[29px]">
                                Quality Built Into Manufacturing
                            </h2>
                        </div>

                        <p className="max-w-[760px] text-[19px] leading-[1.8] text-[#465566] max-md:text-[16px]">
                            We follow a practical inspection approach at every important
                            production stage so every brass component is suitable for
                            industrial use, OEM supply, and repeat production.
                        </p>
                    </div>

                    <div className="grid grid-cols-3 border border-[#e7e1d7] max-lg:grid-cols-1">
                        {qualityPillars.map((item, index) => (
                            <div
                                key={item.title}
                                className={`group min-h-[370px] px-10 py-12 transition-colors duration-500 hover:bg-[#0B1F35] max-md:min-h-[300px] max-md:px-6 ${index !== qualityPillars.length - 1
                                    ? "border-r border-[#e7e1d7] max-lg:border-r-0 max-lg:border-b"
                                    : ""
                                    }`}
                            >
                                <span className="mb-12 block text-[14px] font-extrabold uppercase tracking-[3px] text-[#D79229]">
                                    {item.number}
                                </span>

                                <h3 className="text-[27px] font-extrabold uppercase leading-[1.15] tracking-[-0.6px] text-[#0B1F35] transition-colors duration-500 group-hover:text-white">
                                    {item.title}
                                </h3>

                                <p className="mt-6 text-[16px] leading-[1.75] text-[#465566] transition-colors duration-500 group-hover:text-white/75">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* INSPECTION FLOW */}
            <section className="bg-[#F8F3EA] py-[110px] max-lg:py-20 max-md:py-16">
                <div className="mx-auto max-w-[1500px] px-10 max-md:px-5">
                    <div className="mb-16 max-w-[850px]">
                        <span className="mb-5 block text-[14px] font-extrabold uppercase tracking-[3px] text-[#D79229]">
                            / Inspection Flow
                        </span>

                        <h2 className="text-[56px] font-extrabold uppercase leading-[1.08] tracking-[-2px] text-[#050505] max-xl:text-[46px] max-md:text-[34px] max-sm:text-[29px]">
                            From Raw Material To Final Packing
                        </h2>
                    </div>

                    <div className="grid grid-cols-6 border border-[#e7e1d7] bg-white max-xl:grid-cols-3 max-md:grid-cols-1">
                        {inspectionFlow.map((item, index) => (
                            <div
                                key={item}
                                className="relative min-h-[240px] border-r border-[#e7e1d7] px-7 py-9 last:border-r-0 max-xl:border-b max-md:border-r-0"
                            >
                                <span className="mb-12 block text-[13px] font-extrabold uppercase tracking-[3px] text-[#D79229]">
                                    0{index + 1}
                                </span>

                                <h3 className="text-[21px] font-extrabold uppercase leading-[1.2] text-[#0B1F35]">
                                    {item}
                                </h3>

                                {index !== inspectionFlow.length - 1 && (
                                    <span className="absolute right-[-10px] top-1/2 z-10 flex h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full bg-[#D79229] text-white max-md:hidden">
                                        <ArrowIcon />
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* QUALITY CHECK AREAS */}
            <section className="bg-white py-[110px] max-lg:py-20 max-md:py-16">
                <div className="mx-auto max-w-[1500px] px-10 max-md:px-5">
                    <div className="mb-16 grid grid-cols-[0.8fr_1.2fr] gap-16 max-lg:grid-cols-1 max-lg:gap-8">
                        <div>
                            <span className="mb-5 block text-[14px] font-extrabold uppercase tracking-[3px] text-[#D79229]">
                                / Quality Checks
                            </span>

                            <h2 className="text-[56px] font-extrabold uppercase leading-[1.08] tracking-[-2px] text-[#050505] max-xl:text-[46px] max-md:text-[34px] max-sm:text-[29px]">
                                What We Check Before Dispatch
                            </h2>
                        </div>

                        <p className="max-w-[760px] text-[19px] leading-[1.8] text-[#465566] max-md:text-[16px]">
                            Our inspection checklist helps maintain consistency in custom brass components, precision turned components, electrical brass parts, fittings, inserts, and fasteners, while ensuring accurate dimensions, proper finishing, and reliable product performance.
                        </p>
                    </div>

                    <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">
                        {checkAreas.map((item, index) => (
                            <div
                                key={item.title}
                                className="group bg-[#F8F3EA] px-8 py-9 transition-all duration-500 hover:-translate-y-2 hover:bg-[#0B1F35] hover:shadow-xl max-md:px-6"
                            >
                                <div className="mb-10 flex items-center justify-between">
                                    <span className="text-[13px] font-extrabold uppercase tracking-[3px] text-[#D79229]">
                                        0{index + 1}
                                    </span>

                                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#D79229] transition-colors duration-500 group-hover:bg-white/10">
                                        <CheckIcon />
                                    </span>
                                </div>

                                <h3 className="text-[24px] font-extrabold uppercase leading-[1.15] text-[#0B1F35] transition-colors duration-500 group-hover:text-white">
                                    {item.title}
                                </h3>

                                <p className="mt-5 text-[16px] leading-[1.75] text-[#465566] transition-colors duration-500 group-hover:text-white/70">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="bg-white pb-[110px] max-lg:pb-20 max-md:pb-16">
                <div className="mx-auto max-w-[1500px] px-10 max-md:px-5">
                    <div className="grid overflow-hidden bg-[#0B1F35] lg:grid-cols-[1fr_0.72fr]">
                        <div className="px-[80px] py-[80px] max-xl:px-12 max-md:px-6 max-md:py-12">
                            <span className="mb-6 block text-[14px] font-extrabold uppercase tracking-[3px] text-[#D79229]">
                                / Quality Support
                            </span>

                            <h2 className="max-w-[800px] text-[54px] font-extrabold uppercase leading-[1.08] tracking-[-2px] text-white max-xl:text-[44px] max-md:text-[34px] max-sm:text-[29px]">
                                Need Brass Parts With Reliable Quality Control?
                            </h2>

                            <p className="mt-7 max-w-[650px] text-[17px] leading-[1.8] text-white/70">
                                Share your drawing, sample, quantity, tolerance, material grade,
                                or finish requirement. We will guide you with the right
                                manufacturing and inspection process.
                            </p>
                        </div>

                        <div className="flex items-end bg-[#F8F3EA] p-10 max-md:p-6">
                            <div>
                                <h3 className="text-[34px] font-extrabold uppercase leading-[1.12] text-[#0B1F35] max-md:text-[28px]">
                                    Send Your Requirement
                                </h3>

                                <p className="mt-5 text-[16px] leading-[1.7] text-[#465566]">
                                    Get support for brass inserts, fittings, fasteners, electrical
                                    parts,and custom brass components.
                                </p>

                                <Link
                                    href="/contact"
                                    className="group mt-8 inline-flex h-[60px] items-center justify-center gap-4 bg-[#D79229] px-8 text-[14px] font-extrabold uppercase tracking-[3px] text-white transition-colors duration-300 hover:bg-[#0B1F35]"
                                >
                                    Request Quote
                                    <ArrowIcon />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}