// src/components/QualityCertifications/QualityCTA.tsx

import Image from "next/image";
import Link from "next/link";
import qualityImage from "@/public/images/hero/hero_brass.png";

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

export default function QualityCTA() {
    return (
        <section className="bg-white py-[110px] max-lg:py-20 max-md:py-16">
            <div className="mx-auto max-w-[1500px] px-10 max-md:px-5">
                <div className="grid overflow-hidden bg-[#0B1F35] lg:grid-cols-2">
                    <div className="flex items-center px-[80px] py-[80px] max-xl:px-12 max-md:px-6 max-md:py-12">
                        <div>
                            <span className="mb-6 block text-[14px] font-extrabold uppercase tracking-[3px] text-[#D79229]">
                                / Quality Support
                            </span>

                            <h2 className="max-w-[650px] text-[54px] font-extrabold uppercase leading-[1.1] tracking-[-2px] text-white max-xl:text-[44px] max-md:text-[34px] max-sm:text-[29px]">
                                Need Brass Parts With Consistent Quality?
                            </h2>

                            <p className="mt-7 max-w-[560px] text-[17px] leading-[1.8] text-white/70">
                                Share your drawing, tolerance, finish requirement, quantity, or
                                sample. We will guide you with the right manufacturing and
                                inspection approach.
                            </p>

                            <Link
                                href="/contact"
                                className="group mt-10 inline-flex h-[60px] items-center justify-center gap-4 bg-[#D79229] px-8 text-[14px] font-extrabold uppercase tracking-[3px] text-white transition-colors duration-300 hover:bg-white hover:text-[#0B1F35]"
                            >
                                Send Requirement
                                <ArrowIcon />
                            </Link>
                        </div>
                    </div>

                    <div className="relative h-[560px] max-lg:h-[420px] max-md:h-[320px]">
                        <Image
                            src={qualityImage}
                            alt="Brass parts quality checking"
                            fill
                            sizes="(max-width: 1024px) 100vw, 750px"
                            className="object-cover object-center"
                        />

                        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F35]/35 via-transparent to-[#D79229]/10" />
                    </div>
                </div>
            </div>
        </section>
    );
}