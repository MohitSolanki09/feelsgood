// // src/components/common/Footer.tsx

// import Image from "next/image";
// import Link from "next/link";
// import logo from '@/public/images/logo/feelsgood_logo.png'

// function LinkedinIcon() {
//     return (
//         <svg viewBox="0 0 24 24" className="h-[22px] w-[22px]" fill="currentColor">
//             <path d="M6.94 8.99H3.75V20h3.19V8.99ZM5.35 4a1.85 1.85 0 1 0 0 3.7 1.85 1.85 0 0 0 0-3.7ZM20.25 13.69c0-3.11-1.66-4.56-3.88-4.56-1.79 0-2.59.98-3.04 1.67V8.99h-3.06V20h3.19v-5.45c0-1.44.27-2.84 2.06-2.84 1.76 0 1.79 1.65 1.79 2.93V20h3.19v-6.31h-.25Z" />
//         </svg>
//     );
// }

// function FacebookIcon() {
//     return (
//         <svg viewBox="0 0 24 24" className="h-[22px] w-[22px]" fill="currentColor">
//             <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06C2 17.08 5.66 21.25 10.44 22v-7.03H7.9v-2.91h2.54V9.84c0-2.52 1.5-3.91 3.78-3.91 1.1 0 2.24.2 2.24.2v2.47H15.2c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.44 2.91h-2.34V22C18.34 21.25 22 17.08 22 12.06Z" />
//         </svg>
//     );
// }

// export default function Footer() {
//     return (
//         <footer className="w-full overflow-hidden bg-white px-[38px] max-lg:px-5 max-sm:px-4">
//             <div className="mx-auto w-full max-w-[1825px] overflow-hidden bg-[#F8F3EA] px-[100px] pb-[58px] pt-[110px] max-2xl:px-[70px] max-xl:px-10 max-lg:pt-16 max-md:px-6">
//                 <div className="grid min-w-0 grid-cols-12 gap-x-[70px] max-xl:grid-cols-1 max-xl:gap-y-14">
//                     <div className="col-span-5 min-w-0">
//                         <Link href="/" className="relative block h-[88px] w-[360px] max-md:w-[300px] max-sm:w-[240px]">
//                             <Image
//                                 src={logo}
//                                 alt="Feel Good Brass Industry"
//                                 fill
//                                 sizes="250px"
//                                 className="object-contain object-left"
//                             />
//                         </Link>

//                         <p className="mt-[20px] text-[18px] font-medium leading-none tracking-[-0.3px] text-[#0B1F35]">
//                             Precision Brass Parts Manufacturer
//                         </p>

//                         <div className="mt-[44px] max-w-[430px]">
//                             <p className="text-[17px] leading-[1.7] text-[#465566]">
//                                 Feel Good Brass Industry delivers quality brass inserts, fittings, fasteners,
//                                 electrical parts, CNC turned parts, and custom components for multiple industries.
//                             </p>
//                         </div>
//                     </div>

//                     <div className="col-span-7 flex min-w-0 flex-col justify-between pt-[3px]">
//                         <div className="min-w-0">
//                             <h2 className="max-w-[860px] text-[25px] font-black uppercase leading-[1.22] tracking-[-1px] text-[#0B1F35] max-lg:text-[22px] max-sm:text-[19px]">
//                                 Innovate, Inspire And Impact With High-Quality Brass Manufacturing Solutions
//                             </h2>

//                             <div className="mt-[118px] grid min-w-0 grid-cols-[1fr_1fr_0.75fr] gap-x-[54px] max-2xl:gap-x-[38px] max-xl:mt-16 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:gap-y-9">
//                                 <div className="min-w-0">
//                                     <h3 className="mb-[26px] text-[18px] font-normal leading-none tracking-[-0.4px] text-[#0B1F35]">
//                                         Company Address
//                                     </h3>

//                                     <p className="max-w-[245px] text-[17px] font-black leading-[1.36] tracking-[-0.4px] text-[#0B1F35]">
//                                         Plot No. 50/2, Survey No.45, Fcl Godown Zone Lalpur Road, Dared, Jamnagar-361004
//                                     </p>
//                                 </div>
//                                 <div className="min-w-0">
//                                     <h3 className="mb-[26px] text-[18px] font-normal leading-none tracking-[-0.4px] text-[#0B1F35]">
//                                         GST NO:
//                                     </h3>

//                                     <p className="max-w-[245px] text-[17px] font-black leading-[1.36] tracking-[-0.4px] text-[#0B1F35]">
//                                         24AADFF0905G120
//                                     </p>
//                                 </div>

//                                 <div className="min-w-0">
//                                     <h3 className="mb-[26px] text-[18px] font-normal leading-none tracking-[-0.4px] text-[#0B1F35]">
//                                         Contact us
//                                     </h3>

//                                     <div className="space-y-[10px] text-[15px] font-black leading-[1.45] tracking-[3px] text-[#0B1F35] max-sm:tracking-[1.5px]">
//                                         <Link
//                                             href="mailto:info@feelgoodbrass.com"
//                                             className="block max-w-full break-words transition-colors duration-300 hover:text-[#D79229]"
//                                         >
//                                             info@feelgoodbrass.com
//                                         </Link>

//                                         <Link
//                                             href="tel:+910000000000"
//                                             className="block max-w-full break-words transition-colors duration-300 hover:text-[#D79229]"
//                                         >
//                                             +91 00000 00000
//                                         </Link>
//                                     </div>
//                                 </div>

//                                 <div className="min-w-0">
//                                     <h3 className="mb-[26px] text-[18px] font-normal leading-none tracking-[-0.4px] text-[#0B1F35]">
//                                         Social
//                                     </h3>

//                                     <div className="flex items-center gap-[24px] text-[#0B1F35]">
//                                         <Link href="#" aria-label="LinkedIn" className="transition-colors duration-300 hover:text-[#D79229]">
//                                             <LinkedinIcon />
//                                         </Link>

//                                         <Link href="#" aria-label="Facebook" className="transition-colors duration-300 hover:text-[#D79229]">
//                                             <FacebookIcon />
//                                         </Link>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="mt-[126px] grid min-w-0 grid-cols-[1.4fr_1fr_1fr] gap-x-[40px] text-[15px] font-normal tracking-[-0.2px] text-[#465566] max-xl:mt-16 max-lg:grid-cols-1 max-lg:gap-y-4">
//                             <p>© 2026 Feel Good Brass Industry. All rights reserved.</p>

//                             <Link href="/terms-conditions" className="transition-colors duration-300 hover:text-[#D79229]">
//                                 Terms & Conditions
//                             </Link>

//                             <Link href="/privacy-policy" className="transition-colors duration-300 hover:text-[#D79229]">
//                                 Privacy Policy
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// }







// src/components/common/Footer.tsx

import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/logo/feelsgood_logo.png";

function LinkedinIcon() {
    return (
        <svg viewBox="0 0 24 24" className="h-[22px] w-[22px]" fill="currentColor">
            <path d="M6.94 8.99H3.75V20h3.19V8.99ZM5.35 4a1.85 1.85 0 1 0 0 3.7 1.85 1.85 0 0 0 0-3.7ZM20.25 13.69c0-3.11-1.66-4.56-3.88-4.56-1.79 0-2.59.98-3.04 1.67V8.99h-3.06V20h3.19v-5.45c0-1.44.27-2.84 2.06-2.84 1.76 0 1.79 1.65 1.79 2.93V20h3.19v-6.31h-.25Z" />
        </svg>
    );
}

function FacebookIcon() {
    return (
        <svg viewBox="0 0 24 24" className="h-[22px] w-[22px]" fill="currentColor">
            <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06C2 17.08 5.66 21.25 10.44 22v-7.03H7.9v-2.91h2.54V9.84c0-2.52 1.5-3.91 3.78-3.91 1.1 0 2.24.2 2.24.2v2.47H15.2c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.44 2.91h-2.34V22C18.34 21.25 22 17.08 22 12.06Z" />
        </svg>
    );
}

export default function Footer() {
    return (
        <footer className="w-full overflow-hidden bg-white px-[38px] max-lg:px-5 max-sm:px-4">
            <div className="mx-auto w-full max-w-[1825px] overflow-hidden bg-[#F8F3EA] px-[90px] pb-[48px] pt-[78px] max-2xl:px-[60px] max-xl:px-10 max-md:px-6">
                {/* TOP */}
                <div className="grid grid-cols-[0.85fr_1.15fr] gap-[90px] border-b border-[#e7e1d7] pb-[72px] max-xl:grid-cols-1 max-xl:gap-12 max-md:pb-12">
                    <div>
                        <Link
                            href="/"
                            className="relative block h-[78px] w-[320px] max-md:w-[280px] max-sm:w-[230px]"
                        >
                            <Image
                                src={logo}
                                alt="Feel Good Brass Industry"
                                fill
                                sizes="320px"
                                className="object-contain object-left"
                            />
                        </Link>

                        <p className="mt-7 text-[18px] font-semibold text-[#0B1F35]">
                            Precision Brass Parts Manufacturer
                        </p>

                        <p className="mt-10 max-w-[560px] text-[17px] leading-[1.75] text-[#465566]">
                            Feel Good Brass Industry delivers quality brass inserts, fittings,
                            fasteners, electrical parts, CNC turned parts, and custom brass
                            components for multiple industries.
                        </p>
                    </div>

                    <div className="flex items-start">
                        <h2 className="max-w-[950px] text-[32px] font-black uppercase leading-[1.18] tracking-[-1.2px] text-[#0B1F35] max-xl:text-[28px] max-md:text-[23px]">
                            Innovate, Inspire And Impact With High-Quality Brass Manufacturing
                            Solutions
                        </h2>
                    </div>
                </div>

                {/* 4 COLUMNS */}
                <div className="grid grid-cols-[1.35fr_0.8fr_1fr_0.45fr] gap-x-[70px] gap-y-12 border-b border-[#e7e1d7] py-[58px] max-xl:grid-cols-2 max-md:grid-cols-1">
                    <div>
                        <h3 className="mb-6 text-[18px] font-medium text-[#0B1F35]">
                            Company Address
                        </h3>

                        <p className="max-w-[380px] text-[18px] font-extrabold leading-[1.45] text-[#0B1F35] max-md:text-[16px]">
                            Plot No. 50/2, Survey No.45, FCI Godown Zone, Lalpur Road, Dared,
                            Jamnagar-361004
                        </p>
                    </div>

                    <div>
                        <h3 className="mb-6 text-[18px] font-medium text-[#0B1F35]">
                            GST NO
                        </h3>

                        <p className="text-[18px] font-extrabold leading-[1.45] text-[#0B1F35] max-md:text-[16px]">
                            24AADFF0905G1Z0
                        </p>
                    </div>

                    <div>
                        <h3 className="mb-6 text-[18px] font-medium text-[#0B1F35]">
                            Contact Us
                        </h3>

                        <div className="space-y-4 text-[18px] font-extrabold leading-[1.45] text-[#0B1F35] max-md:text-[16px]">
                            <Link
                                href="mailto:info@feelgoodbrass.com"
                                className="block transition-colors duration-300 hover:text-[#D79229] max-sm:break-all"
                            >
                                feelgoodbrass@gmail.com
                            </Link>

                            <Link
                                href="tel:+910000000000"
                                className="block transition-colors duration-300 hover:text-[#D79229]"
                            >
                                +91 93166-36271
                            </Link>
                            <Link
                                href="tel:+910000000000"
                                className="block transition-colors duration-300 hover:text-[#D79229]"
                            >

                                +91 97235-41192
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="mb-6 text-[18px] font-medium text-[#0B1F35]">
                            Social
                        </h3>

                        <div className="flex items-center gap-6 text-[#0B1F35]">
                            <Link
                                href="#"
                                aria-label="LinkedIn"
                                className="transition-colors duration-300 hover:text-[#D79229]"
                            >
                                <LinkedinIcon />
                            </Link>

                            <Link
                                href="#"
                                aria-label="Facebook"
                                className="transition-colors duration-300 hover:text-[#D79229]"
                            >
                                <FacebookIcon />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* BOTTOM */}
                <div className="grid grid-cols-[6fr_5fr_1fr] gap-x-10 pt-8 text-[15px] text-[#465566] max-lg:grid-cols-1 max-lg:gap-y-4">
                    <p>© 2026 Feel Good Brass Industry. All rights reserved.</p>

                    <Link
                        href="/terms-conditions"
                        className="transition-colors duration-300 hover:text-[#D79229]"
                    >
                        Terms & Conditions
                    </Link>

                    <Link
                        href="/privacy-policy"
                        className="transition-colors duration-300 hover:text-[#D79229]"
                    >
                        Privacy Policy
                    </Link>
                </div>
            </div>
        </footer>
    );
}