// src/components/company/AboutHero.tsx

import Image from "next/image";
import Link from "next/link";
import aboutHero from "@/public/images/hero/hero_brass.png"

function ArrowIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            fill="none"
            aria-hidden="true"
        >
            <path
                d="M7 17L17 7M17 7H9M17 7V15"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default function AboutHero() {
    return (
        <section className="relative overflow-hidden bg-white">
            <div className="mx-auto max-w-[1600px] px-5">
                {/* Top Grid */}
                <div className="grid min-h-[285px] grid-cols-[1.2fr_0.8fr] border-x border-[#e7e1d7] max-lg:grid-cols-1">
                    {/* Left Content */}
                    <div className="flex items-center border-r border-[#e7e1d7] px-10 py-14 max-lg:border-r-0 max-lg:border-b max-md:px-5 max-md:py-10">
                        <div>
                            <p className="mb-6 flex items-center gap-2 text-[18px] font-medium tracking-[-0.4px] text-[#0B1F35] max-md:text-[16px]">
                                <span className="text-[#D79229]">/</span>
                                About
                            </p>

                            <h1 className="max-w-[760px] text-[64px] font-extrabold uppercase leading-[1.12] tracking-[-2.5px] text-[#050505] max-2xl:text-[58px] max-xl:text-[50px] max-md:text-[40px] max-sm:text-[32px]">
                                Shaping The Future Of Brass
                            </h1>
                        </div>
                    </div>

                    {/* Right CTA */}
                    <div className="flex items-end justify-end bg-white max-lg:justify-start">
                        <Link
                            href="/contact"
                            className="group flex h-[86px] w-full max-w-[560px] items-center justify-between bg-white px-12 text-[#0B1F35] transition-colors duration-300 hover:bg-[#0B1F35] hover:text-white max-lg:max-w-full max-md:h-[74px] max-md:px-6"
                        >
                            <span className="text-[15px] font-extrabold uppercase tracking-[4px] max-sm:text-[13px] max-sm:tracking-[3px]">
                                Find Out More
                            </span>

                            <ArrowIcon />
                        </Link>
                    </div>
                </div>

                {/* Image */}
                <div className="relative h-[430px] overflow-hidden max-xl:h-[390px] max-lg:h-[350px] max-md:h-[300px] max-sm:h-[240px]">
                    <Image
                        src={aboutHero}
                        alt="Feel Good Brass Industry manufacturing facility"
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover object-center"
                    />

                    <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F35]/20 via-transparent to-[#D79229]/10" />
                </div>
            </div>
        </section>
    );
}