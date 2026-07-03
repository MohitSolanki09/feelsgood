"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import logo from '@/public/images/logo/feelsgood_logo.png'

type MegaMenuItem = {
    label: string;
    href: string;
};

type NavItem = {
    label: string;
    href: string;
    active?: boolean;
    mega?: {
        title: string;
        image: string;
        cta: string;
        ctaHref: string;
        links: MegaMenuItem[];
    };
};

const navItems: NavItem[] = [
    {
        label: "Home",
        href: "/",
        active: true,
    },
    {
        label: "Company",
        href: "/company/about",
        mega: {
            title: "Precision Brass Manufacturing With Innovation And Trust",
            image: "/images/menu/factory.jpg",
            cta: "About Company",
            ctaHref: "/company/about",
            links: [
                { label: "About Us", href: "/company/about" },
                { label: "Manufacturing Capabilities", href: "/company/manufacturing" },
                { label: "Quality & Certifications", href: "/company/qualitycertifications" },
            ],
        },
    },
    {
        label: "Products",
        href: "/products",
        mega: {
            title: "High Quality Brass Parts And Components",
            image: "/images/menu/products.jpg",
            cta: "View Products",
            ctaHref: "/products",
            links: [
                { label: "Brass Cpvc Inserts", href: "/products/brass-inserts" },
                { label: "Brass ppr Inserts", href: "/products/brass-fittings" },
                { label: "Brass Inserts", href: "/products/brass-fasteners" },
                {
                    label: "Brass Nut",
                    href: "/products/brass-electrical-parts",
                },
                {
                    label: "Brass Reducer",
                    href: "/products/cnc-turned-components",
                },
                {
                    label: "Brass Sanitary Fitting",
                    href: "/products/custom-brass-components",
                },
            ],
        },
    },
    { label: "Quality", href: "/quality" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
];

function Logo() {
    return (
        <Link
            href="/"
            className="relative block h-[58px] w-[285px] max-xl:w-[250px] max-md:h-[52px] max-md:w-[220px] max-sm:w-[190px]"
        >
            <Image
                src={logo}
                alt="Feel Good Brass Industry"
                fill
                priority
                sizes="285px"
                className="object-contain object-left"
            />
        </Link>
    );
}

function SearchIcon() {
    return (
        <svg viewBox="0 0 24 24" className="h-[23px] w-[23px]" fill="none">
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.7" />
            <path
                d="M16.5 16.5L21 21"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
            />
        </svg>
    );
}

function CloseIcon() {
    return (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none">
            <path d="M5 5L19 19" stroke="currentColor" strokeWidth="1.2" />
            <path d="M19 5L5 19" stroke="currentColor" strokeWidth="1.2" />
        </svg>
    );
}

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

function GridIcon() {
    return (
        <span className="grid grid-cols-3 gap-[6px]">
            {Array.from({ length: 9 }).map((_, index) => (
                <span key={index} className="h-[5px] w-[5px] bg-white" />
            ))}
        </span>
    );
}

function MegaMenu({ menu }: { menu: NonNullable<NavItem["mega"]> }) {
    return (
        <div className="invisible fixed left-0 right-0 top-[84px] z-40 translate-y-3 border-b border-[#e7e1d7] bg-white opacity-0 shadow-[0_25px_70px_rgba(11,31,53,0.12)] transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
            <div className="mx-auto grid max-w-[1360px] grid-cols-[310px_1px_1fr_360px] gap-12 px-10 py-7">
                <div className="flex min-h-[245px] flex-col justify-center">
                    <h3 className="max-w-[270px] text-[26px] font-extrabold uppercase leading-[1.15] tracking-[-0.8px] text-[#0B1F35]">
                        {menu.title}
                    </h3>

                    <Link
                        href={menu.ctaHref}
                        className="mt-9 inline-flex w-fit items-center gap-4 border-b border-[#D79229] pb-1 text-[13px] font-extrabold uppercase tracking-[3px] text-[#0B1F35] transition-colors duration-300 hover:text-[#D79229]"
                    >
                        View All
                        <ArrowIcon />
                    </Link>
                </div>

                <div className="h-full w-px bg-[#e7e1d7]" />

                <div className="flex items-center">
                    <div className="grid w-full grid-cols-3 gap-x-10 gap-y-5">
                        {menu.links.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="text-[18px] font-semibold tracking-[-0.3px] text-[#0B1F35] transition-all duration-300 hover:translate-x-1 hover:text-[#D79229]"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="flex items-center">
                    <Link
                        href={menu.ctaHref}
                        className="group/card relative block h-[265px] w-full overflow-hidden bg-[#F8F3EA]"
                    >
                        <Image
                            src={menu.image}
                            alt={menu.cta}
                            fill
                            sizes="360px"
                            className="object-cover transition-transform duration-700 group-hover/card:scale-105"
                        />

                        <div className="absolute bottom-0 left-0 right-0 flex h-[68px] items-center justify-between bg-[#0B1F35] px-8 text-white">
                            <span className="text-[14px] font-extrabold uppercase tracking-[2.5px]">
                                {menu.cta}
                            </span>
                            <ArrowIcon />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

function SearchPanel({
    isOpen,
    onClose,
}: {
    isOpen: boolean;
    onClose: () => void;
}) {
    return (
        <div
            className={`fixed right-0 top-[84px] z-[70] w-[620px] bg-[#F8F3EA] px-9 py-5 shadow-[0_15px_45px_rgba(11,31,53,0.12)] transition-all duration-300 max-lg:left-0 max-lg:w-full max-sm:px-5 ${isOpen
                ? "translate-y-0 opacity-100"
                : "pointer-events-none -translate-y-4 opacity-0"
                }`}
        >
            <div className="flex items-center gap-7">
                <input
                    type="text"
                    placeholder="Search here"
                    className="h-[58px] flex-1 bg-white px-6 text-[15px] font-medium text-[#0B1F35] outline-none placeholder:text-[#465566]"
                />

                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close search"
                    className="flex h-12 w-12 items-center justify-center text-[#0B1F35] transition-colors duration-300 hover:text-[#D79229]"
                >
                    <CloseIcon />
                </button>
            </div>
        </div>
    );
}

// function SideMenu({
//     isOpen,
//     onClose,
// }: {
//     isOpen: boolean;
//     onClose: () => void;
// }) {
//     return (
//         <>
//             <div
//                 onClick={onClose}
//                 className={`fixed inset-0 z-[80] bg-[#0B1F35] transition-opacity duration-500 ${isOpen ? "opacity-55" : "pointer-events-none opacity-0"
//                     }`}
//             />

//             <aside
//                 className={`fixed right-0 top-0 z-[90] h-screen w-[640px] overflow-y-auto bg-white transition-transform duration-500 max-md:w-[88vw] ${isOpen ? "translate-x-0" : "translate-x-full"
//                     }`}
//             >
//                 <div className="relative min-h-screen px-[80px] pb-0 pt-10 max-md:px-8">
//                     <button
//                         type="button"
//                         onClick={onClose}
//                         aria-label="Close menu"
//                         className="absolute right-10 top-10 flex h-12 w-12 items-center justify-center text-[#0B1F35] transition-colors duration-300 hover:text-[#D79229] max-md:right-6"
//                     >
//                         <CloseIcon />
//                     </button>

//                     <div className="relative mb-12 h-[90px] w-[330px] max-sm:w-[250px]">
//                         <Image
//                             src="/images/logo/feel-good-brass.png"
//                             alt="Feel Good Brass Industry"
//                             fill
//                             sizes="330px"
//                             className="object-contain object-left"
//                         />
//                     </div>

//                     <div className="mb-7 flex items-center gap-2 text-[20px] text-[#465566]">
//                         <span className="text-[#D79229]">/</span>
//                         <span>Contact us</span>
//                     </div>

//                     <h2 className="mb-8 text-[42px] font-extrabold uppercase leading-[1.15] tracking-[-1.2px] text-[#0B1F35] max-md:text-[32px]">
//                         Feel Good <br />
//                         Brass Industry
//                     </h2>

//                     <div className="space-y-8 text-[19px] leading-[1.45] text-[#465566] max-md:text-[17px]">
//                         <p>
//                             Jamnagar, Gujarat <br />
//                             India
//                         </p>

//                         <p>
//                             info@feelgoodbrass.com <br />
//                             +91 00000 00000
//                         </p>
//                     </div>

//                     {/* <nav className="mt-12 grid gap-4 border-t border-[#e7e1d7] pt-8">
//                         {navItems.map((item) => (
//                             <Link
//                                 key={item.label}
//                                 href={item.href}
//                                 onClick={onClose}
//                                 className="text-[15px] font-extrabold uppercase tracking-[2.5px] text-[#0B1F35] transition-colors duration-300 hover:text-[#D79229]"
//                             >
//                                 {item.label}
//                             </Link>
//                         ))}
//                     </nav> */}
//                 </div>

//                 <Link
//                     href="/contact"
//                     onClick={onClose}
//                     className="sticky bottom-0 flex h-[78px] w-full items-center justify-center gap-3 bg-[#0B1F35] text-[16px] font-extrabold uppercase tracking-[2.5px] text-white transition-colors duration-300 hover:bg-[#D79229]"
//                 >
//                     Get In Touch
//                     <ArrowIcon />
//                 </Link>
//             </aside>
//         </>
//     );
// }
function SideMenu({
    isOpen,
    onClose,
}: {
    isOpen: boolean;
    onClose: () => void;
}) {
    return (
        <>
            <div
                onClick={onClose}
                className={`fixed inset-0 z-[80] bg-[#0B1F35] transition-opacity duration-500 ${isOpen ? "opacity-55" : "pointer-events-none opacity-0"
                    }`}
            />

            <aside
                className={`fixed right-0 top-0 z-[90] flex h-screen w-[640px] flex-col overflow-hidden bg-white transition-transform duration-500 max-md:w-[88vw] ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="relative flex flex-1 flex-col px-[80px] pt-10 max-md:px-8">
                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close menu"
                        className="absolute right-10 top-10 flex h-12 w-12 items-center justify-center text-[#0B1F35] transition-colors duration-300 hover:text-[#D79229] max-md:right-6"
                    >
                        <CloseIcon />
                    </button>

                    <div className="relative mb-10 h-[82px] w-[310px] max-sm:w-[230px]">
                        <Image
                            src="/images/logo/feel-good-brass.png"
                            alt="Feel Good Brass Industry"
                            fill
                            sizes="310px"
                            className="object-contain object-left"
                        />
                    </div>

                    <div className="mb-6 flex items-center gap-2 text-[19px] text-[#465566]">
                        <span className="text-[#D79229]">/</span>
                        <span>Contact us</span>
                    </div>

                    <h2 className="mb-7 text-[42px] font-extrabold uppercase leading-[1.15] tracking-[-1.2px] text-[#0B1F35] max-md:text-[31px]">
                        Feel Good <br />
                        Brass Industry
                    </h2>

                    <div className="space-y-7 text-[19px] leading-[1.45] text-[#465566] max-md:text-[16px]">
                        <p>
                            Jamnagar, Gujarat, 
                            India
                        </p>

                        <p>
                            info@feelgoodbrass.com <br />
                            +91 00000 00000
                        </p>
                    </div>
                </div>

                <Link
                    href="/contact"
                    onClick={onClose}
                    className="flex h-[78px] shrink-0 items-center justify-center gap-3 bg-[#0B1F35] text-[16px] font-extrabold uppercase tracking-[2.5px] text-white transition-colors duration-300 hover:bg-[#D79229]"
                >
                    Get In Touch
                    <ArrowIcon />
                </Link>
            </aside>
        </>
    );
}

export default function Header() {
    const [searchOpen, setSearchOpen] = useState(false);
    const [sideOpen, setSideOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = sideOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [sideOpen]);

    return (
        <>
            <header className="sticky top-0 z-50 h-[84px] border-b border-[#e7e1d7] bg-white">
                <div className="flex h-full items-stretch">
                    <div className="flex h-full w-[350px] items-center pl-10 max-xl:w-[300px] max-lg:flex-1 max-md:pl-5">
                        <Logo />
                    </div>

                    <nav className="hidden flex-1 items-center justify-center gap-8 xl:flex">
                        {navItems.map((item) => (
                            <div key={item.label} className="group flex h-full items-center">
                                <Link
                                    href={item.href}
                                    className={`relative flex h-full items-center text-[13px] font-extrabold uppercase tracking-[2.7px] transition-colors duration-300 ${item.active
                                        ? "text-[#D79229]"
                                        : "text-[#0B1F35] group-hover:text-[#D79229]"
                                        }`}
                                >
                                    <span
                                        className={`absolute left-0 top-0 h-[3px] w-full bg-[#D79229] transition-transform duration-300 ${item.active
                                            ? "scale-x-100"
                                            : "scale-x-0 group-hover:scale-x-100"
                                            }`}
                                    />
                                    {item.label}
                                </Link>

                                {item.mega && <MegaMenu menu={item.mega} />}
                            </div>
                        ))}
                    </nav>

                    <div className="ml-auto flex items-stretch">
                        <button
                            type="button"
                            aria-label="Search"
                            onClick={() => {
                                setSearchOpen((prev) => !prev);
                                setSideOpen(false);
                            }}
                            className="hidden w-[82px] items-center justify-center border-l border-[#e7e1d7] text-[#0B1F35] transition-colors duration-300 hover:text-[#D79229] lg:flex"
                        >
                            <SearchIcon />
                        </button>

                        <button
                            type="button"
                            aria-label="Open menu"
                            onClick={() => {
                                setSideOpen(true);
                                setSearchOpen(false);
                            }}
                            className="flex w-[92px] items-center justify-center bg-[#D79229] transition-colors duration-300 hover:bg-[#0B1F35] max-md:w-[76px]"
                        >
                            <GridIcon />
                        </button>
                    </div>
                </div>
            </header>

            <SearchPanel isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
            <SideMenu isOpen={sideOpen} onClose={() => setSideOpen(false)} />
        </>
    );
}