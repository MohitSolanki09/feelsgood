// src/components/QualityCertifications/QualityHero.tsx

import Image from "next/image";
import Link from "next/link";
import qualityHero from "@/public/images/hero/brass_left.png";

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

export default function QualityHero() {
    return (
        <section className="bg-white">
            <div className="mx-auto max-w-[1600px] px-5">
                <div className="grid min-h-[310px] grid-cols-[1.15fr_0.85fr] border-x border-[#e7e1d7] max-lg:grid-cols-1">
                    <div className="flex items-center border-r border-[#e7e1d7] px-10 py-16 max-lg:border-r-0 max-lg:border-b max-md:px-5">
                        <div>
                            <p className="mb-6 flex items-center gap-2 text-[18px] font-medium text-[#0B1F35]">
                                <span className="text-[#D79229]">/</span>
                                Quality & Certifications
                            </p>

                            <h1 className="max-w-[900px] text-[64px] font-extrabold uppercase leading-[1.1] tracking-[-2.5px] text-[#050505] max-xl:text-[52px] max-md:text-[40px] max-sm:text-[32px]">
                                Quality Control Built Into Every Brass Component
                            </h1>
                        </div>
                    </div>

                    <div className="flex items-end justify-end">
                        <Link
                            href="/contact"
                            className="group flex h-[86px] w-full max-w-[560px] items-center justify-between bg-[#0B1F35] px-12 text-white transition-colors duration-300 hover:bg-[#D79229] max-lg:max-w-full max-md:h-[74px] max-md:px-6"
                        >
                            <span className="text-[15px] font-extrabold uppercase tracking-[4px]">
                                Request Details
                            </span>
                            <ArrowIcon />
                        </Link>
                    </div>
                </div>

                <div className="relative h-[520px] overflow-hidden max-xl:h-[450px] max-md:h-[320px]">
                    <Image
                        src={qualityHero}
                        alt="Brass parts quality inspection"
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover object-center"
                    />

                    <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F35]/40 via-transparent to-[#D79229]/20" />
                </div>
            </div>
        </section>
    );
}