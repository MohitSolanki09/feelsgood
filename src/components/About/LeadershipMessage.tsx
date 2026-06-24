// src/components/Company/LeadershipMessage.tsx

import Image from "next/image";
import Link from "next/link";
import founderImage from "@/public/images/hero/hero_brass.png";
import factoryImage from "@/public/images/hero/brass_left.png";

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

export default function LeadershipMessage() {
    return (
        <section className="bg-white">
            <div className="mx-auto max-w-[1500px] px-5">
                <div className="grid min-h-[720px] grid-cols-3 border-x border-y border-[#e7e1d7] max-lg:grid-cols-1">
                    {/* Left Image */}
                    <div className="flex items-center border-r border-[#e7e1d7] px-10 py-[90px] max-lg:border-b max-lg:border-r-0 max-md:px-5 max-md:py-12">
                        <div className="relative h-[470px] w-full overflow-hidden bg-[#F8F3EA] max-lg:h-[420px] max-md:h-[340px]">
                            <Image
                                src={founderImage}
                                alt="Feel Good Brass Industry leadership"
                                fill
                                sizes="(max-width: 1024px) 100vw, 460px"
                                className="object-cover object-center transition-transform duration-700 hover:scale-105"
                            />
                        </div>
                    </div>

                    {/* Center Content */}
                    <div className="flex items-center border-r border-[#e7e1d7] px-10 py-[90px] max-lg:border-b max-lg:border-r-0 max-md:px-5 max-md:py-12">
                        <div>
                            <span className="mb-8 block text-[14px] font-extrabold uppercase tracking-[3px] text-[#D79229]">
                                / Leadership Message
                            </span>

                            <blockquote className="text-[30px] font-medium leading-[1.35] tracking-[-1px] text-[#0B1F35] max-xl:text-[26px] max-md:text-[22px]">
                                “At Feel Good Brass Industry, our focus is simple — manufacture
                                precision brass components with reliable quality, honest
                                communication, and long-term customer trust.”
                            </blockquote>

                            <div className="mt-16">
                                <h3 className="text-[22px] font-extrabold uppercase tracking-[-0.4px] text-[#050505]">
                                    Feel Good Brass Industry
                                </h3>

                                <p className="mt-3 text-[17px] font-medium text-[#465566]">
                                    Brass Parts Manufacturer
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Image CTA */}
                    <div className="flex items-center px-10 py-[90px] max-md:px-5 max-md:py-12">
                        <div className="relative h-[560px] w-full overflow-hidden bg-[#F8F3EA] max-lg:h-[440px] max-md:h-[350px]">
                            <Image
                                src={factoryImage}
                                alt="Feel Good Brass Industry manufacturing unit"
                                fill
                                sizes="(max-width: 1024px) 100vw, 460px"
                                className="object-cover object-center transition-transform duration-700 hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F35]/50 via-transparent to-transparent" />

                            <Link
                                href="/contact"
                                className="group absolute bottom-0 right-0 flex h-[78px] w-[330px] items-center justify-between bg-[#0B1F35] px-9 text-white transition-colors duration-300 hover:bg-[#D79229] max-md:w-full"
                            >
                                <span className="text-[15px] font-extrabold uppercase tracking-[3px]">
                                    Meet Our Team
                                </span>

                                <ArrowIcon />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}