// src/components/common/Footer.tsx

import Image from "next/image";
import Link from "next/link";
import footerLogo from "@/public/images/logo/FEEL_GOOD_LOGO.png";

function LinkedinIcon() {
    return (
        <svg viewBox="0 0 24 24" className="h-[22px] w-[22px]" fill="currentColor">
            <path d="M6.94 8.99H3.75V20h3.19V8.99ZM5.35 4a1.85 1.85 0 1 0 0 3.7 1.85 1.85 0 0 0 0-3.7ZM20.25 13.69c0-3.11-1.66-4.56-3.88-4.56-1.79 0-2.59.98-3.04 1.67V8.99h-3.06V20h3.19v-5.45c0-1.44.27-2.84 2.06-2.84 1.76 0 1.79 1.65 1.79 2.93V20h3.19v-6.31h-.25Z" />
        </svg>
    );
}

function InstagramIcon() {
    return (
        <svg viewBox="0 0 24 24" className="h-[22px] w-[22px]" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
    );
}

export default function Footer() {
    return (
        <footer className="w-full overflow-hidden bg-white px-[38px] max-lg:px-5 max-sm:px-4">
            <div className="mx-auto w-full max-w-[1825px] overflow-hidden bg-[#F8F3EA] px-[90px] pb-[48px] pt-[78px] xl:pb-10 xl:pt-16 max-2xl:px-[60px] max-xl:px-10 max-md:px-6">
                {/* TOP */}
                <div className="grid grid-cols-[1.15fr_0.85fr] gap-12 border-b border-[#e7e1d7] pb-[72px] xl:pb-14 max-xl:grid-cols-1 max-xl:gap-12 max-md:pb-12">
                    <div data-reveal="fade-up" data-reveal-stagger>
                        <Link
                            href="/"
                            className="relative block h-[78px] w-[320px] max-md:w-[280px] max-sm:w-[230px]"
                        >
                            <Image
                                src={footerLogo}
                                alt="Feel Good Brass Industry"
                                fill
                                sizes="(max-width: 767px) 160px, (max-width: 1279px) 180px, 205px"
                                className="max-w-[205px] object-contain object-left max-xl:max-w-[180px] max-md:max-w-[160px]"
                            />
                        </Link>

                        <p className="mobile-body mt-7 text-[18px] font-semibold text-[#0B1F35]">
                            Precision Brass Parts Manufacturer
                        </p>

                        <p className="mobile-body mt-10 w-full max-w-[760px] xl:mt-7 max-xl:max-w-full text-[17px] leading-[1.75] text-[#465566]">
                            Feel Good Brass Industry delivers high-quality brass inserts, fittings, fasteners, turned components, and custom brass products, manufactured with precision, reliability, and consistent quality to meet the diverse requirements of multiple industries.
                        </p>
                    </div>

                    <div data-reveal="fade-up" data-reveal-stagger className="flex items-start">
                        <h2 className="mobile-compact-title max-w-[950px] text-[32px] font-black uppercase leading-[1.18] tracking-[-1.2px] text-[#0B1F35] max-xl:text-[28px] max-md:text-[23px]">
                            Innovate, Inspire And Impact With High-Quality Brass Manufacturing
                            Solutions
                        </h2>
                    </div>
                </div>

                {/* 4 COLUMNS */}
                <div className="grid grid-cols-[1.35fr_0.8fr_1fr_0.45fr] gap-x-[70px] gap-y-12 border-b border-[#e7e1d7] py-[58px] xl:pt-12 xl:pb-10 max-xl:grid-cols-2 max-md:grid-cols-1">
                    <div data-reveal="fade-up" data-reveal-stagger>
                        <h3 className="mobile-label-title mb-6 text-[18px] font-medium text-[#0B1F35]">
                            Company Address
                        </h3>

                        <p className="mobile-body max-w-[380px] text-[18px] font-extrabold leading-[1.45] text-[#0B1F35] max-md:text-[16px]">
                            Plot No. 50/2, Survey No.45, FCI Godown Zone, Lalpur Road, Dared,
                            Jamnagar-361004, Gujarat, India
                        </p>
                    </div>

                    <div data-reveal="fade-up" data-reveal-stagger>
                        <h3 className="mobile-label-title mb-6 text-[18px] font-medium text-[#0B1F35]">
                            GST NO
                        </h3>

                        <p className="mobile-body text-[18px] font-extrabold leading-[1.45] text-[#0B1F35] max-md:text-[16px]">
                            24AADFF0905G1Z0
                        </p>
                    </div>

                    <div data-reveal="fade-up" data-reveal-stagger>
                        <h3 className="mobile-label-title mb-6 text-[18px] font-medium text-[#0B1F35]">
                            Contact Us
                        </h3>

                        <div className="space-y-4 text-[18px] font-extrabold leading-[1.45] text-[#0B1F35] max-md:text-[16px]">
                            <Link
                                href="mailto:feelgoodbrass@gmail.com"
                                className="block transition-colors duration-300 hover:text-[#D79229] max-sm:break-all"
                            >
                                feelgoodbrass@gmail.com
                            </Link>

                            <Link
                                href="tel:+919316636271"
                                className="block transition-colors duration-300 hover:text-[#D79229]"
                            >
                                +91 93166-36271
                            </Link>
                            <Link
                                href="tel:+919723541192"
                                className="block transition-colors duration-300 hover:text-[#D79229]"
                            >

                                +91 97235-41192
                            </Link>
                        </div>
                    </div>

                    <div data-reveal="fade-up" data-reveal-stagger>
                        <h3 className="mobile-label-title mb-6 text-[18px] font-medium text-[#0B1F35]">
                            Social
                        </h3>

                        <div className="flex items-center gap-6 text-[#0B1F35]">
                            <a
                                href="https://www.linkedin.com/in/feelgood-brass-228854423?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Feel Good Brass Industry on LinkedIn"
                                className="inline-flex transition-colors duration-300 hover:text-[#D79229]"
                                style={{ minWidth: 22, minHeight: 22 }}
                            >
                                <LinkedinIcon />
                            </a>

                            <a
                                href="https://www.instagram.com/feelgoodbrass?stkn=MXY0ZXlwemxqYWtlbw=="
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Feel Good Brass Industry on Instagram"
                                className="inline-flex transition-colors duration-300 hover:text-[#D79229]"
                                style={{ minWidth: 22, minHeight: 22 }}
                            >
                                <InstagramIcon />
                            </a>
                        </div>
                    </div>
                </div>

                {/* BOTTOM */}
                <div className="grid grid-cols-[6fr_5fr_1fr] gap-x-10 pt-8 text-[15px] text-[#465566] max-lg:grid-cols-1 max-lg:gap-y-4">
                    <p className="mobile-body">© 2026 Feel Good Brass Industry. All rights reserved.</p>

                    <span
                        className="transition-colors duration-300 hover:text-[#D79229]"
                    >
                        Terms & Conditions
                    </span>

                    <span
                        className="transition-colors duration-300 hover:text-[#D79229]"
                    >
                        Privacy Policy
                    </span>
                </div>
            </div>
        </footer>
    );
}
