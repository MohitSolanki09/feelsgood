// src/components/home/AdvancementSection.tsx

import Image from "next/image";
import Link from "next/link";
import brassAdvance from "@/public/images/hero/brass_left.png";

function ArrowIcon() {
    return (
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
    );
}

export default function AdvancementSection() {
    return (
        <section className="bg-white py-[110px] max-lg:py-20 max-md:py-16">
            <div className="mx-auto max-w-[1500px] px-10 max-md:px-5">
                <div className="grid items-center gap-[110px] lg:grid-cols-2 max-2xl:gap-[80px] max-xl:gap-[60px] max-lg:gap-12">
                    {/* Image */}
                    <div className="relative h-[560px] overflow-hidden bg-[#F8F3EA] max-xl:h-[500px] max-lg:h-[430px] max-md:h-[340px] max-sm:h-[280px]">
                        <Image
                            src={brassAdvance}
                            alt="Brass parts manufacturing"
                            fill
                            sizes="(max-width: 1024px) 100vw, 720px"
                            className="object-cover transition-transform duration-700 hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F35]/15 via-transparent to-[#D79229]/10" />
                    </div>

                    {/* Content */}
                    <div className="max-w-[600px]">
                        <p className="mb-9 flex items-center gap-2 text-[20px] font-medium tracking-[-0.5px] text-[#0B1F35] max-md:text-[17px]">
                            <span className="text-[#D79229]">/</span>
                            Become a Customer
                        </p>

                        <h2 className="text-[62px] font-extrabold uppercase leading-[1.16] tracking-[-2.2px] text-[#050505] max-2xl:text-[56px] max-xl:text-[48px] max-md:text-[38px] max-sm:text-[32px]">
                            Advancements In The Brass Parts Industry
                        </h2>

                        <p className="mt-8 max-w-[500px] text-[17px] leading-[1.8] text-[#465566]">
                            We manufacture precision brass inserts, fittings, fasteners, turned parts, electrical components, and custom brass parts with reliable quality and consistent production standards.
                        </p>

                        <Link
                            href="/contact"
                            className="group mt-12 inline-flex items-center gap-5 border-b border-[#D79229] pb-2 text-[15px] font-extrabold uppercase tracking-[3px] text-[#0B1F35] transition-colors duration-300 hover:text-[#D79229]"
                        >
                            Let’s Talk
                            <ArrowIcon />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}