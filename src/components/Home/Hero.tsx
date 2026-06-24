// src/components/home/Hero.tsx

import Image from "next/image";
import Link from "next/link";
import heroImage from "@/public/images/hero/hero_brass.png"

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-white">
            {/* Top Content */}
            <div className="mx-auto grid max-w-[1500px] grid-cols-[1.15fr_0.85fr] border-x border-[#e7e1d7] max-lg:grid-cols-1">
                <div className="border-r border-[#e7e1d7] px-10 pb-14 pt-[72px] max-xl:px-8 max-lg:border-r-0 max-md:px-5 max-md:pt-12">
                    <p className="mb-6 flex items-center gap-2 text-[17px] font-medium text-[#0B1F35] max-sm:text-[15px]">
                        <span className="text-[#D79229]">/</span>
                        Trusted Brass Parts Manufacturer
                    </p>

                    <h1 className="max-w-[860px] text-[72px] font-extrabold uppercase leading-[1.04] tracking-[-3px] text-[#050505] max-2xl:text-[62px] max-xl:text-[54px] max-md:text-[42px] max-sm:text-[34px]">
                        Precision Brass Parts Built For Modern Industries
                    </h1>
                </div>

                <div className="hidden border-r border-[#e7e1d7] lg:block" />
            </div>

            {/* Image Area */}
            <div className="relative">
                <div className="relative h-[540px] w-full overflow-hidden max-xl:h-[500px] max-lg:h-[430px] max-md:h-[360px] max-sm:h-[300px]">
                    <Image
                        src={heroImage}
                        alt="Precision brass manufacturing parts"
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover object-center"
                    />

                    <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F35]/45 via-[#0B1F35]/10 to-[#D79229]/15" />
                </div>

                {/* CTA Card */}
                <div className="absolute right-[8%] top-0 z-10 -translate-y-1/2 max-lg:right-6 max-md:static max-md:translate-y-0">
                    <Link
                        href="/products"
                        className="group flex h-[82px] w-[430px] items-center justify-between bg-[#0B1F35] px-9 text-white transition-colors duration-300 hover:bg-[#D79229] max-md:h-[72px] max-md:w-full max-md:px-6"
                    >
                        <span className="text-[15px] font-extrabold uppercase tracking-[3px] max-sm:text-[13px]">
                            Explore Products
                        </span>

                        <svg
                            viewBox="0 0 24 24"
                            className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                            fill="none"
                            aria-hidden="true"
                        >
                            <path
                                d="M5 12h13M13 6l6 6-6 6"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </Link>
                </div>
            </div>

            {/* Bottom Info */}
            {/* <div className="mx-auto grid max-w-[1500px] grid-cols-3 border-x border-b border-[#e7e1d7] bg-[#F8F3EA] max-lg:grid-cols-1">
                <div className="border-r border-[#e7e1d7] px-10 py-8 max-lg:border-b max-lg:border-r-0 max-md:px-5">
                    <span className="mb-3 block text-[13px] font-extrabold uppercase tracking-[3px] text-[#D79229]">
                        01
                    </span>
                    <h3 className="text-[21px] font-extrabold uppercase text-[#0B1F35]">
                        Custom Brass Components
                    </h3>
                    <p className="mt-3 text-[15px] leading-[1.7] text-[#465566]">
                        Manufactured as per client drawings, samples, and exact industrial requirements.
                    </p>
                </div>

                <div className="border-r border-[#e7e1d7] px-10 py-8 max-lg:border-b max-lg:border-r-0 max-md:px-5">
                    <span className="mb-3 block text-[13px] font-extrabold uppercase tracking-[3px] text-[#D79229]">
                        02
                    </span>
                    <h3 className="text-[21px] font-extrabold uppercase text-[#0B1F35]">
                        CNC Precision
                    </h3>
                    <p className="mt-3 text-[15px] leading-[1.7] text-[#465566]">
                        High accuracy brass inserts, fittings, fasteners, turned parts, and electrical parts.
                    </p>
                </div>

                <div className="px-10 py-8 max-md:px-5">
                    <span className="mb-3 block text-[13px] font-extrabold uppercase tracking-[3px] text-[#D79229]">
                        03
                    </span>
                    <h3 className="text-[21px] font-extrabold uppercase text-[#0B1F35]">
                        Jamnagar Manufacturing
                    </h3>
                    <p className="mt-3 text-[15px] leading-[1.7] text-[#465566]">
                        Reliable brass part manufacturing with quality material, finishing, and timely delivery.
                    </p>
                </div>
            </div> */}
        </section>
    );
}