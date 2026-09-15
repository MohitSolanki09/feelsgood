// src/app/gallery/page.tsx

import Link from "next/link";
import Image from "next/image";

const galleryItems = [
    {
        number: "01",
        title: "Brass Inserts",
        category: "Threaded Components",
        image: "/images/gallery/processed/brass-cpvc-inserts-1.webp",
        alt: "Brass CPVC Inserts",
    },
    {
        number: "02",
        title: "Brass Fittings",
        category: "Connection Parts",
        image: "/images/gallery/processed/brass-cpvc-fitting-inserts-1.webp",
        alt: "Brass CPVC Fitting Inserts",
    },
    {
        number: "03",
        title: "Brass Fasteners",
        category: "Assembly Components",
        image: "/images/gallery/processed/brass-cpvc-male-inserts-1.webp",
        alt: "Brass CPVC Male Inserts",
    },
    {
        number: "04",
        title: "Electrical Brass Parts",
        category: "Conductive Parts",
        image: "/images/gallery/processed/brass-cpvc-female-inserts-1.webp",
        alt: "Brass CPVC Female Inserts",
    },
    {
        number: "05",
        title: "Quality Inspection",
        category: "QC Process",
        image: "/images/gallery/processed/brass-cpvc-female-t2-2.webp",
        alt: "Brass CPVC Female T2",
    },
    {
        number: "06",
        title: "Custom Components",
        category: "Drawing Based Parts",
        image: "/images/gallery/processed/brass-cpvc-inserts-t1-1.webp",
        alt: "Brass CPVC Inserts T1",
    },
    {
        number: "07",
        title: "Packing & Dispatch",
        category: "Safe Delivery",
        image: "/images/gallery/processed/brass-cpvc-fitting-inserts-3.webp",
        alt: "Brass CPVC Fitting Inserts",
    },
    {
        number: "08",
        title: "Electrical Brass Parts",
        category: "Conductive Parts",
        image: "/images/gallery/processed/industrial-cpvc-female-inserts-1.webp",
        alt: "Industrial CPVC Female Inserts",
    },
    {
        number: "09",
        title: "Quality Inspection",
        category: "QC Process",
        image: "/images/gallery/processed/brass-cpvc-inserts-2.webp",
        alt: "Brass CPVC Inserts",
    },
    {
        number: "10",
        title: "Custom Components",
        category: "Drawing Based Parts",
        image: "/images/gallery/processed/brass-cpvc-female-inserts-2.webp",
        alt: "Brass CPVC Female Inserts",
    },
    {
        number: "11",
        title: "Packing & Dispatch",
        category: "Safe Delivery",
        image: "/images/gallery/processed/brass-cpvc-male-inserts-3.webp",
        alt: "Brass CPVC Male Inserts",
    },
    {
        number: "12",
        title: "Brass CPVC Inserts",
        category: "Threaded Components",
        image: "/images/gallery/processed/brass-cpvc-inserts-t1-3.webp",
        alt: "Brass CPVC Inserts T1",
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

function BrassVisual({ image, alt }: { image: string; alt: string }) {
    return (
        <div className="relative flex h-full min-h-[360px] items-center justify-center overflow-hidden bg-[#F8F3EA]">
            <Image src={image} alt={alt} fill sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, (max-width: 1535px) 33vw, 355px" className="object-contain" />
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

                            <h2 data-reveal="fade-up" className="text-[56px] font-extrabold uppercase leading-[1.08] tracking-[-2px] text-[#050505] max-xl:text-[46px] max-md:text-[34px] max-sm:text-[29px]">
                                Premium Brass Parts Collection
                            </h2>
                        </div>

                        <p className="max-w-[760px] text-[19px] leading-[1.8] text-[#465566] max-md:text-[16px]">
                            A visual overview of brass inserts, fittings, electrical parts,
                            fasteners, custom parts, quality inspection, and dispatch
                            preparation.
                        </p>
                    </div>

                    <div className="grid auto-rows-fr grid-cols-4 gap-6 max-2xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1">
                        {galleryItems.map((item, index) => (
                            <div
                                key={item.number}
                                className={`group overflow-hidden bg-[#F8F3EA] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${index === 0 || index === 6 ? "max-2xl:col-span-2 max-md:col-span-1" : ""
                                    }`}
                            >
                                <div className="h-[360px]">
                                    <BrassVisual image={item.image} alt={item.alt} />
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
