// src/app/gallery/page.tsx

import Link from "next/link";

const galleryItems = [
    {
        number: "01",
        title: "Brass Inserts",
        category: "Threaded Components",
        type: "insert",
    },
    {
        number: "02",
        title: "Brass Fittings",
        category: "Connection Parts",
        type: "fitting",
    },
    {
        number: "03",
        title: "Brass Fasteners",
        category: "Assembly Components",
        type: "fastener",
    },
    {
        number: "04",
        title: "Electrical Brass Parts",
        category: "Conductive Parts",
        type: "electrical",
    },
    {
        number: "05",
        title: "Quality Inspection",
        category: "QC Process",
        type: "quality",
    },
    {
        number: "06",
        title: "Custom Components",
        category: "Drawing Based Parts",
        type: "custom",
    },
    {
        number: "07",
        title: "Packing & Dispatch",
        category: "Safe Delivery",
        type: "packing",
    },
    {
        number: "08",
        title: "Electrical Brass Parts",
        category: "Conductive Parts",
        type: "electrical",
    },
    {
        number: "09",
        title: "Quality Inspection",
        category: "QC Process",
        type: "quality",
    },
    {
        number: "10",
        title: "Custom Components",
        category: "Drawing Based Parts",
        type: "custom",
    },
    {
        number: "11",
        title: "Packing & Dispatch",
        category: "Safe Delivery",
        type: "packing",
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

function BrassVisual({ type }: { type: string }) {
    return (
        <div className="relative flex h-full min-h-[360px] items-center justify-center overflow-hidden bg-[#F8F3EA]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_22%,rgba(215,146,41,0.28),transparent_34%),radial-gradient(circle_at_82%_80%,rgba(11,31,53,0.12),transparent_34%)]" />

            <div className="absolute left-8 top-8 h-20 w-20 rounded-full border border-[#D79229]/25" />
            <div className="absolute bottom-8 right-8 h-28 w-28 rounded-full border border-[#0B1F35]/10" />

            {type === "insert" && (
                <div className="relative h-[220px] w-[220px] rounded-full bg-gradient-to-br from-[#F8CF78] via-[#D79229] to-[#8F5518] shadow-2xl">
                    <div className="absolute inset-[42px] rounded-full bg-[#F8F3EA] shadow-inner" />
                    <div className="absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 bg-[#0B1F35]/18" />
                    <div className="absolute left-0 top-1/2 h-[3px] w-full -translate-y-1/2 bg-[#0B1F35]/18" />
                </div>
            )}

            {type === "fitting" && (
                <div className="relative h-[145px] w-[300px] rounded-[90px] bg-gradient-to-r from-[#8F5518] via-[#D79229] to-[#F8CF78] shadow-2xl">
                    <div className="absolute -left-10 top-1/2 h-[95px] w-[95px] -translate-y-1/2 rounded-full bg-[#D79229]" />
                    <div className="absolute -right-10 top-1/2 h-[95px] w-[95px] -translate-y-1/2 rounded-full bg-[#D79229]" />
                    <div className="absolute left-1/2 top-1/2 h-[68px] w-[175px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F8F3EA]" />
                </div>
            )}

            {type === "fastener" && (
                <div className="relative h-[260px] w-[120px] rotate-[-18deg] rounded-t-[44px] bg-gradient-to-b from-[#F8CF78] via-[#D79229] to-[#8F5518] shadow-2xl">
                    <div className="absolute -top-12 left-1/2 h-[90px] w-[170px] -translate-x-1/2 rounded-[30px] bg-[#D79229]" />
                    <div className="absolute left-0 top-16 h-[3px] w-full bg-[#0B1F35]/20" />
                    <div className="absolute left-0 top-28 h-[3px] w-full bg-[#0B1F35]/20" />
                    <div className="absolute left-0 top-40 h-[3px] w-full bg-[#0B1F35]/20" />
                </div>
            )}

            {type === "electrical" && (
                <div className="relative h-[210px] w-[320px] rounded-[28px] bg-gradient-to-br from-[#F8CF78] via-[#D79229] to-[#8F5518] shadow-2xl">
                    <div className="absolute left-9 top-8 h-11 w-11 rounded-full bg-[#F8F3EA]" />
                    <div className="absolute right-9 top-8 h-11 w-11 rounded-full bg-[#F8F3EA]" />
                    <div className="absolute bottom-10 left-9 h-7 w-[250px] rounded-full bg-[#0B1F35]/20" />
                </div>
            )}

            {type === "quality" && (
                <div className="relative h-[250px] w-[250px] rounded-[44px] bg-gradient-to-br from-[#F8CF78] via-[#D79229] to-[#8F5518] shadow-2xl">
                    <div className="absolute left-1/2 top-1/2 h-[130px] w-[130px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F8F3EA]" />
                    <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 bg-[#0B1F35] px-7 py-3 text-[12px] font-extrabold uppercase tracking-[3px] text-white">
                        QC Passed
                    </div>
                </div>
            )}

            {type === "custom" && (
                <div
                    className="relative h-[240px] w-[240px] bg-gradient-to-br from-[#F8CF78] via-[#D79229] to-[#8F5518] shadow-2xl"
                    style={{
                        clipPath:
                            "polygon(50% 0%, 90% 22%, 90% 72%, 50% 100%, 10% 72%, 10% 22%)",
                    }}
                >
                    <div
                        className="absolute inset-[56px] bg-[#F8F3EA]"
                        style={{
                            clipPath:
                                "polygon(50% 0%, 90% 22%, 90% 72%, 50% 100%, 10% 72%, 10% 22%)",
                        }}
                    />
                </div>
            )}

            {type === "packing" && (
                <div className="relative h-[210px] w-[280px] bg-gradient-to-br from-[#F8CF78] via-[#D79229] to-[#8F5518] shadow-2xl">
                    <div className="absolute left-0 top-0 h-full w-full border-[18px] border-[#8F5518]/25" />
                    <div className="absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 bg-[#0B1F35]/22" />
                    <div className="absolute left-0 top-1/2 h-[3px] w-full -translate-y-1/2 bg-[#0B1F35]/22" />
                </div>
            )}
        </div>
    );
}

export default function GalleryPage() {
    return (
        <main>
            {/* HERO */}
            <section className="bg-white">
                <div className="mx-auto max-w-[1600px] px-5">
                    <div className="border-x border-[#e7e1d7]">
                        <div className="grid grid-cols-[1fr_440px] border-b border-[#e7e1d7] max-lg:grid-cols-1">
                            <div className="px-12 py-20 max-md:px-6 max-md:py-14">
                                <p className="mb-6 flex items-center gap-2 text-[18px] font-medium text-[#0B1F35]">
                                    <span className="text-[#D79229]">/</span>
                                    Gallery
                                </p>

                                <h1 className="max-w-[1050px] text-[76px] font-extrabold uppercase leading-[0.98] tracking-[-3.5px] text-[#050505] max-2xl:text-[68px] max-xl:text-[56px] max-md:text-[40px] max-sm:text-[32px]">
                                    Brass Manufacturing Showcase
                                </h1>
                            </div>

                            <div className="flex flex-col justify-end border-l border-[#e7e1d7] bg-[#F8F3EA] p-10 max-lg:border-l-0 max-lg:border-t max-md:p-6">
                                <p className="text-[17px] leading-[1.8] text-[#465566]">
                                    Explore our brass components, manufacturing process, quality
                                    inspection, finishing, and dispatch-ready product range.
                                </p>

                                <Link
                                    href="/products"
                                    className="group mt-8 inline-flex h-[60px] w-fit items-center justify-center gap-4 bg-[#D79229] px-8 text-[14px] font-extrabold uppercase tracking-[3px] text-white transition-colors duration-300 hover:bg-[#0B1F35]"
                                >
                                    View Products
                                    <ArrowIcon />
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* GALLERY GRID */}
            <section className="bg-white py-[110px] max-lg:py-20 max-md:py-16">
                <div className="mx-auto max-w-[1500px] px-10 max-md:px-5">
                    <div className="mb-16 grid grid-cols-[0.8fr_1.2fr] gap-16 max-lg:grid-cols-1 max-lg:gap-8">
                        <div>
                            <span className="mb-5 block text-[14px] font-extrabold uppercase tracking-[3px] text-[#D79229]">
                                / Product Gallery
                            </span>

                            <h2 className="text-[56px] font-extrabold uppercase leading-[1.08] tracking-[-2px] text-[#050505] max-xl:text-[46px] max-md:text-[34px] max-sm:text-[29px]">
                                Premium Brass Parts Collection
                            </h2>
                        </div>

                        <p className="max-w-[760px] text-[19px] leading-[1.8] text-[#465566] max-md:text-[16px]">
                            A visual overview of brass inserts, fittings, electrical parts,
                            fasteners, custom parts, quality inspection, and dispatch
                            preparation.
                        </p>
                    </div>

                    <div className="grid grid-cols-4 gap-6 max-2xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1">
                        {galleryItems.map((item, index) => (
                            <div
                                key={item.title}
                                className={`group overflow-hidden bg-[#F8F3EA] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${index === 0 || index === 6 ? "max-2xl:col-span-2 max-md:col-span-1" : ""
                                    }`}
                            >
                                <div className="h-[360px]">
                                    <BrassVisual type={item.type} />
                                </div>

                                <div className="bg-white px-8 py-8 transition-colors duration-500 group-hover:bg-[#0B1F35] max-md:px-6">
                                    <div className="mb-8 flex items-center justify-between">
                                        <span className="text-[13px] font-extrabold uppercase tracking-[3px] text-[#D79229]">
                                            {item.number}
                                        </span>

                                        <span className="text-[12px] font-bold uppercase tracking-[2px] text-[#465566] transition-colors duration-500 group-hover:text-white/55">
                                            {item.category}
                                        </span>
                                    </div>

                                    <h3 className="text-[25px] font-extrabold uppercase leading-[1.15] text-[#0B1F35] transition-colors duration-500 group-hover:text-white">
                                        {item.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </main>
    );
}
