// // src/components/common/Footer.tsx

// import Image from "next/image";
// import Link from "next/link";

// function FabrikLogo() {
//     return (
//         <Link href="/" className="inline-flex items-center gap-[8px]">
//             <span className="flex h-[28px] w-[32px] flex-col justify-center gap-[4px]">
//                 <span className="block h-[5px] w-[32px] rounded-full border-[3px] border-black" />
//                 <span className="block h-[5px] w-[32px] rounded-full border-[3px] border-black" />
//                 <span className="block h-[5px] w-[32px] rounded-full border-[3px] border-black" />
//             </span>

//             <span className="text-[34px] font-black leading-none tracking-[-2.5px] text-black max-sm:text-[30px]">
//                 FABRIK
//             </span>
//         </Link>
//     );
// }

// function LinkedinIcon() {
//     return (
//         <svg viewBox="0 0 24 24" className="h-[22px] w-[22px]" fill="currentColor">
//             <path d="M6.94 8.99H3.75V20h3.19V8.99ZM5.35 4a1.85 1.85 0 1 0 0 3.7 1.85 1.85 0 0 0 0-3.7ZM20.25 13.69c0-3.11-1.66-4.56-3.88-4.56-1.79 0-2.59.98-3.04 1.67V8.99h-3.06V20h3.19v-5.45c0-1.44.27-2.84 2.06-2.84 1.76 0 1.79 1.65 1.79 2.93V20h3.19v-6.31h-.25Z" />
//         </svg>
//     );
// }

// function TwitterIcon() {
//     return (
//         <svg viewBox="0 0 24 24" className="h-[22px] w-[22px]" fill="currentColor">
//             <path d="M21.5 6.1c-.7.3-1.45.52-2.23.61a3.9 3.9 0 0 0 1.7-2.15 7.83 7.83 0 0 1-2.47.95A3.88 3.88 0 0 0 11.78 8c0 .3.03.6.1.86A11 11 0 0 1 3.9 4.82a3.86 3.86 0 0 0-.52 1.95c0 1.34.68 2.52 1.72 3.21a3.79 3.79 0 0 1-1.76-.48v.05a3.88 3.88 0 0 0 3.12 3.8 3.88 3.88 0 0 1-1.75.07 3.9 3.9 0 0 0 3.63 2.7A7.79 7.79 0 0 1 2.6 17.74a10.98 10.98 0 0 0 5.96 1.75c7.15 0 11.06-5.92 11.06-11.06v-.5a7.9 7.9 0 0 0 1.88-1.83Z" />
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
//         <footer className="w-full overflow-hidden bg-white px-[38px] pb-0 max-lg:px-5 max-sm:px-4">
//             <div className="mx-auto w-full max-w-[1825px] overflow-hidden bg-[#e8ecef] px-[100px] pb-[58px] pt-[126px] max-2xl:px-[70px] max-xl:px-10 max-lg:pt-16 max-md:px-6">
//                 <div className="grid min-w-0 grid-cols-12 gap-x-[70px] max-xl:grid-cols-1 max-xl:gap-y-14">
//                     {/* LEFT */}
//                     <div className="col-span-5 min-w-0">
//                         <FabrikLogo />

//                         <p className="mt-[24px] text-[18px] font-normal leading-none tracking-[-0.3px] text-black">
//                             Custom Manufactured Parts
//                         </p>

//                         <div className="relative mt-[42px] h-[410px] w-full max-w-[500px] max-lg:h-[340px] max-sm:h-[260px]">
//                             <Image
//                                 src="/images/footer/footer-product.png"
//                                 alt="Custom Manufactured Parts"
//                                 fill
//                                 sizes="(max-width: 768px) 100vw, 500px"
//                                 className="object-contain object-left-bottom"
//                             />
//                         </div>
//                     </div>

//                     {/* RIGHT */}
//                     <div className="col-span-7 flex min-w-0 flex-col justify-between pt-[3px]">
//                         <div className="min-w-0">
//                             <h2 className="max-w-[860px] text-[25px] font-black uppercase leading-[1.22] tracking-[-1px] text-black max-lg:text-[22px] max-sm:text-[19px]">
//                                 Elevate Your Manufacturing Experience With Improve: Precision,
//                                 Speed, And Satisfaction Guaranteed
//                             </h2>

//                             <div className="mt-[132px] grid min-w-0 grid-cols-[1fr_1fr_0.75fr] gap-x-[54px] max-2xl:gap-x-[38px] max-xl:mt-16 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:gap-y-9">
//                                 <div className="min-w-0">
//                                     <h3 className="mb-[28px] text-[18px] font-normal leading-none tracking-[-0.4px] text-black">
//                                         Comapny address
//                                     </h3>

//                                     <p className="max-w-[245px] text-[17px] font-black leading-[1.36] tracking-[-0.4px] text-black">
//                                         41088 Chagrin Boulevard #120 Cleveland, OH 44124
//                                     </p>
//                                 </div>

//                                 <div className="min-w-0">
//                                     <h3 className="mb-[28px] text-[18px] font-normal leading-none tracking-[-0.4px] text-black">
//                                         Contact us
//                                     </h3>

//                                     <div className="space-y-[10px] text-[15px] font-black leading-[1.45] tracking-[4px] text-black max-sm:tracking-[2px]">
//                                         <Link
//                                             href="mailto:office@fabrik.com"
//                                             className="block max-w-full break-words transition-colors duration-300 hover:text-[#ff4b26]"
//                                         >
//                                             office@fabrik.com
//                                         </Link>

//                                         <Link
//                                             href="tel:+14408488222"
//                                             className="block max-w-full break-words transition-colors duration-300 hover:text-[#ff4b26]"
//                                         >
//                                             +1 440 848 8222
//                                         </Link>
//                                     </div>
//                                 </div>

//                                 <div className="min-w-0">
//                                     <h3 className="mb-[28px] text-[18px] font-normal leading-none tracking-[-0.4px] text-black">
//                                         Social
//                                     </h3>

//                                     <div className="flex items-center gap-[24px] text-black">
//                                         <Link
//                                             href="#"
//                                             aria-label="LinkedIn"
//                                             className="transition-colors duration-300 hover:text-[#ff4b26]"
//                                         >
//                                             <LinkedinIcon />
//                                         </Link>

//                                         <Link
//                                             href="#"
//                                             aria-label="Twitter"
//                                             className="transition-colors duration-300 hover:text-[#ff4b26]"
//                                         >
//                                             <TwitterIcon />
//                                         </Link>

//                                         <Link
//                                             href="#"
//                                             aria-label="Facebook"
//                                             className="transition-colors duration-300 hover:text-[#ff4b26]"
//                                         >
//                                             <FacebookIcon />
//                                         </Link>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="mt-[126px] grid min-w-0 grid-cols-[1.4fr_1fr_1fr] gap-x-[40px] text-[15px] font-normal tracking-[-0.2px] text-black max-xl:mt-16 max-lg:grid-cols-1 max-lg:gap-y-4">
//                             <p>© 2026 VamTam. All rights reserved.</p>

//                             <Link
//                                 href="/terms-conditions"
//                                 className="transition-colors duration-300 hover:text-[#ff4b26]"
//                             >
//                                 Terms & Conditions
//                             </Link>

//                             <Link
//                                 href="/privacy-policy"
//                                 className="transition-colors duration-300 hover:text-[#ff4b26]"
//                             >
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
import logo from '@/public/images/logo/feelsgood_logo.png'

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
            <div className="mx-auto w-full max-w-[1825px] overflow-hidden bg-[#F8F3EA] px-[100px] pb-[58px] pt-[110px] max-2xl:px-[70px] max-xl:px-10 max-lg:pt-16 max-md:px-6">
                <div className="grid min-w-0 grid-cols-12 gap-x-[70px] max-xl:grid-cols-1 max-xl:gap-y-14">
                    <div className="col-span-5 min-w-0">
                        <Link href="/" className="relative block h-[88px] w-[360px] max-md:w-[300px] max-sm:w-[240px]">
                            <Image
                                src={logo}
                                alt="Feel Good Brass Industry"
                                fill
                                sizes="250px"
                                className="object-contain object-left"
                            />
                        </Link>

                        <p className="mt-[20px] text-[18px] font-medium leading-none tracking-[-0.3px] text-[#0B1F35]">
                            Precision Brass Parts Manufacturer
                        </p>

                        <div className="mt-[44px] max-w-[430px]">
                            <p className="text-[17px] leading-[1.7] text-[#465566]">
                                Feel Good Brass Industry delivers quality brass inserts, fittings, fasteners,
                                electrical parts, CNC turned parts, and custom components for multiple industries.
                            </p>
                        </div>
                    </div>

                    <div className="col-span-7 flex min-w-0 flex-col justify-between pt-[3px]">
                        <div className="min-w-0">
                            <h2 className="max-w-[860px] text-[25px] font-black uppercase leading-[1.22] tracking-[-1px] text-[#0B1F35] max-lg:text-[22px] max-sm:text-[19px]">
                                Innovate, Inspire And Impact With High-Quality Brass Manufacturing Solutions
                            </h2>

                            <div className="mt-[118px] grid min-w-0 grid-cols-[1fr_1fr_0.75fr] gap-x-[54px] max-2xl:gap-x-[38px] max-xl:mt-16 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:gap-y-9">
                                <div className="min-w-0">
                                    <h3 className="mb-[26px] text-[18px] font-normal leading-none tracking-[-0.4px] text-[#0B1F35]">
                                        Company address
                                    </h3>

                                    <p className="max-w-[245px] text-[17px] font-black leading-[1.36] tracking-[-0.4px] text-[#0B1F35]">
                                        Jamnagar, Gujarat, India
                                    </p>
                                </div>

                                <div className="min-w-0">
                                    <h3 className="mb-[26px] text-[18px] font-normal leading-none tracking-[-0.4px] text-[#0B1F35]">
                                        Contact us
                                    </h3>

                                    <div className="space-y-[10px] text-[15px] font-black leading-[1.45] tracking-[3px] text-[#0B1F35] max-sm:tracking-[1.5px]">
                                        <Link
                                            href="mailto:info@feelgoodbrass.com"
                                            className="block max-w-full break-words transition-colors duration-300 hover:text-[#D79229]"
                                        >
                                            info@feelgoodbrass.com
                                        </Link>

                                        <Link
                                            href="tel:+910000000000"
                                            className="block max-w-full break-words transition-colors duration-300 hover:text-[#D79229]"
                                        >
                                            +91 00000 00000
                                        </Link>
                                    </div>
                                </div>

                                <div className="min-w-0">
                                    <h3 className="mb-[26px] text-[18px] font-normal leading-none tracking-[-0.4px] text-[#0B1F35]">
                                        Social
                                    </h3>

                                    <div className="flex items-center gap-[24px] text-[#0B1F35]">
                                        <Link href="#" aria-label="LinkedIn" className="transition-colors duration-300 hover:text-[#D79229]">
                                            <LinkedinIcon />
                                        </Link>

                                        <Link href="#" aria-label="Facebook" className="transition-colors duration-300 hover:text-[#D79229]">
                                            <FacebookIcon />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-[126px] grid min-w-0 grid-cols-[1.4fr_1fr_1fr] gap-x-[40px] text-[15px] font-normal tracking-[-0.2px] text-[#465566] max-xl:mt-16 max-lg:grid-cols-1 max-lg:gap-y-4">
                            <p>© 2026 Feel Good Brass Industry. All rights reserved.</p>

                            <Link href="/terms-conditions" className="transition-colors duration-300 hover:text-[#D79229]">
                                Terms & Conditions
                            </Link>

                            <Link href="/privacy-policy" className="transition-colors duration-300 hover:text-[#D79229]">
                                Privacy Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}