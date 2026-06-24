// src/components/Manufacturing/ManufacturingCTA.tsx

import Image from "next/image";
import Link from "next/link";
import brassParts from "@/public/images/hero/brass_left.png";

function ArrowIcon() {
    return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none">
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

export default function ManufacturingCTA() {
    return (
        <section className="bg-white pb-[110px] max-lg:pb-20 max-md:pb-16">
            <div className="mx-auto max-w-[1500px] px-10 max-md:px-5">
                <div className="grid overflow-hidden bg-[#F8F3EA] lg:grid-cols-2">
                    <div className="relative h-[560px] max-lg:h-[420px] max-md:h-[320px]">
                        <Image
                            src={brassParts}
                            alt="Custom brass parts manufacturing"
                            fill
                            sizes="(max-width: 1024px) 100vw, 750px"
                            className="object-cover object-center"
                        />

                        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F35]/20 via-transparent to-[#D79229]/10" />
                    </div>

                    <div className="flex items-center px-[80px] py-[80px] max-xl:px-12 max-md:px-6 max-md:py-12">
                        <div>
                            <span className="mb-6 block text-[14px] font-extrabold uppercase tracking-[3px] text-[#D79229]">
                                / Custom Manufacturing
                            </span>

                            <h2 className="max-w-[650px] text-[54px] font-extrabold uppercase leading-[1.1] tracking-[-2px] text-[#050505] max-xl:text-[44px] max-md:text-[34px] max-sm:text-[29px]">
                                Share Your Drawing, Sample Or Brass Part Requirement
                            </h2>

                            <p className="mt-7 max-w-[560px] text-[17px] leading-[1.8] text-[#465566]">
                                We help you manufacture brass parts with the right material,
                                accurate size, clean finish, inspection support, and dependable
                                delivery for repeat production.
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
                                    className="group inline-flex h-[60px] items-center justify-center gap-4 border border-[#0B1F35]/20 px-8 text-[14px] font-extrabold uppercase tracking-[3px] text-[#0B1F35] transition-colors duration-300 hover:border-[#D79229] hover:text-[#D79229]"
                                >
                                    View Products
                                    <ArrowIcon />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}