// src/components/Company/CompanyOverview.tsx

import Image from "next/image";
import brassCompany from "@/public/images/hero/brass_left.png";

function InspectionIcon() {
    return (
        <svg viewBox="0 0 64 64" className="h-[58px] w-[58px]" fill="none">
            <path
                d="M18 18h28l5 10-19 22-19-22 5-10Z"
                stroke="currentColor"
                strokeWidth="1.6"
            />
            <path
                d="M22 28h20M25 34h14"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
            />
        </svg>
    );
}

function ComponentIcon() {
    return (
        <svg viewBox="0 0 64 64" className="h-[70px] w-[70px]" fill="none">
            <path
                d="M32 8l18 10v22L32 56 14 40V18L32 8Z"
                stroke="currentColor"
                strokeWidth="1.6"
            />
            <circle cx="32" cy="32" r="9" stroke="currentColor" strokeWidth="1.6" />
            <path
                d="M32 8v10M32 46v10M14 18l9 5M41 41l9 5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
            />
        </svg>
    );
}

export default function CompanyOverview() {
    return (
        <section className="bg-white">
            <div className="mx-auto max-w-[1500px] px-5">
                <div className="grid grid-cols-3 border-x border-[#e7e1d7] max-lg:grid-cols-1">
                    {/* Top left heading */}
                    <div className="min-h-[345px] border-r border-[#e7e1d7] px-10 py-14 max-lg:min-h-0 max-lg:border-b max-lg:border-r-0 max-md:px-5">
                        <h2 className="max-w-[390px] text-[28px] font-extrabold uppercase leading-[1.18] tracking-[-0.8px] text-[#050505] max-md:text-[24px]">
                            The Next Generation Of Brass Manufacturing: Precision,
                            Consistency And Speed
                        </h2>
                    </div>

                    {/* Top center paragraph */}
                    <div className="min-h-[345px] border-r border-[#e7e1d7] px-10 py-14 max-lg:min-h-0 max-lg:border-b max-lg:border-r-0 max-md:px-5">
                        <p className="text-[17px] leading-[1.6] tracking-[-0.2px] text-[#465566] max-md:text-[16px]">
                            At Feel Good Brass Industry, we manufacture high-quality brass inserts, fittings, fasteners, electrical parts, turned components, and customized brass parts, with a strong focus on precision, superior finish, durability, and long-term reliability.
                        </p>
                    </div>

                    {/* Top right paragraph */}
                    <div className="min-h-[345px] px-10 py-14 max-lg:min-h-0 max-lg:border-b max-md:px-5">
                        <p className="text-[17px] leading-[1.6] tracking-[-0.2px] text-[#465566] max-md:text-[16px]">
                            From material selection to final inspection, our process is built
                            to support industrial customers, OEM suppliers, exporters, and
                            businesses that need repeat-quality brass components delivered on
                            time.
                        </p>
                    </div>

                    {/* Image area spanning 2 columns */}
                    <div className="relative col-span-2 min-h-[500px] overflow-hidden border-r border-t border-[#e7e1d7] max-lg:col-span-1 max-lg:border-b max-lg:border-r-0 max-md:min-h-[420px] max-sm:min-h-[360px]">
                        <Image
                            src={brassCompany}
                            alt="Brass parts manufacturing"
                            fill
                            sizes="(max-width: 1024px) 100vw, 1000px"
                            className="object-cover object-center"
                        />

                        <div className="absolute inset-0 bg-gradient-to-r from-white/15 via-transparent to-[#D79229]/10" />

                        {/* Floating stat card */}
                        <div className="absolute bottom-0 left-0 w-[430px] bg-white px-10 py-10 max-md:w-[calc(100%-28px)] max-md:px-6 max-md:py-8">
                            <p className="mb-8 flex items-center gap-2 text-[16px] font-medium text-[#465566]">
                                <span className="text-[#D79229]">/</span>
                                Experience. Transparency. Results.
                            </p>

                            <strong className="block text-[66px] font-extrabold leading-none tracking-[-2px] text-[#050505] max-md:text-[50px]">
                                25K+
                            </strong>

                            <p className="mt-4 text-[17px] font-extrabold text-[#0B1F35]">
                                Brass Parts Manufactured
                            </p>
                        </div>
                    </div>

                    {/* Empty right block like reference */}
                    <div className="min-h-[500px] border-t border-[#e7e1d7] max-lg:hidden" />

                    {/* Empty left bottom block */}
                    <div className="min-h-[360px] border-r border-t border-[#e7e1d7] max-lg:hidden" />

                    {/* Bottom stat 1 */}
                    <div className="min-h-[360px] border-r border-t border-[#e7e1d7] px-10 py-14 max-lg:border-b max-lg:border-r-0 max-md:min-h-[280px] max-md:px-5">
                        <div className="mb-8 text-[#b8c0c8]">
                            <InspectionIcon />
                        </div>

                        <strong className="block text-[64px] font-extrabold leading-none tracking-[-2px] text-[#050505] max-md:text-[48px]">
                            10K+
                        </strong>

                        <p className="mt-4 max-w-[290px] text-[16px] font-extrabold leading-[1.35] text-[#0B1F35]">
                            Quality Inspections Yearly Average
                        </p>
                    </div>

                    {/* Bottom stat 2 */}
                    <div className="min-h-[360px] border-t border-[#e7e1d7] px-10 py-14 max-md:min-h-[280px] max-md:px-5">
                        <div className="mb-8 text-[#b8c0c8]">
                            <ComponentIcon />
                        </div>

                        <strong className="block text-[64px] font-extrabold leading-none tracking-[-2px] text-[#050505] max-md:text-[48px]">
                            400+
                        </strong>

                        <p className="mt-4 max-w-[290px] text-[16px] font-extrabold leading-[1.35] text-[#0B1F35]">
                            Custom Brass Components Supplied
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}