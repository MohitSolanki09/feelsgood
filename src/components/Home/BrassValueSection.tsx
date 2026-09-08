// src/components/home/BrassValueSection.tsx

import Image from "next/image";
import Link from "next/link";

const topStats = [
    {
        type: "intro",
        title:
            "Precision brass manufacturing solutions for industries, OEMs, exporters, and custom component requirements.",
    },
    {
        type: "stat",
        value: "100%",
        text: "Custom brass components manufactured as per drawings and samples",
    },
    {
        type: "stat",
        value: "90%",
        text: "Focus on repeat quality, dimensional accuracy, and timely delivery",
    },
];

const cards = [
    {
        eyebrow: "Become a customer",
        title: "Customer Centered, Future Focused Brass",
        href: "/contact",
        variant: "light",
    },
    {
        eyebrow: "Manufacturing",
        title: "Transforming Brass Parts Manufacturing",
        href: "/products",
        variant: "gold",
    },
    {
        eyebrow: "Quality",
        title: "Precision, Inspection And Material Reliability",
        href: "/quality",
        variant: "light",
    },
];

function ArrowIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            className="h-5 w-5 transition-transform duration-300 group-hover/card:translate-x-1"
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

export default function BrassValueSection() {
    return (
        <section className="bg-white">
            <div className="mx-auto max-w-[1500px] border-x border-[#e7e1d7]">
                {/* Top row */}
                <div className="grid min-h-[360px] grid-cols-3 border-b border-[#e7e1d7] max-lg:grid-cols-1">
                    {topStats.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col justify-start border-r border-[#e7e1d7] px-10 pt-[72px] last:border-r-0 max-lg:min-h-[230px] max-lg:border-b max-lg:border-r-0 max-md:px-5 max-md:pt-10"
                        >
                            {item.type === "intro" ? (
                                <h2 className="max-w-[420px] text-[24px] font-extrabold uppercase leading-[1.15] tracking-[-0.8px] text-[#0B1F35] max-md:text-[21px]">
                                    {item.title}
                                </h2>
                            ) : (
                                <>
                                    <strong className="text-[52px] font-extrabold leading-none tracking-[-2px] text-[#0B1F35] max-md:text-[42px]">
                                        {item.value}
                                    </strong>

                                    <p className="mt-3 max-w-[330px] text-[19px] leading-[1.35] tracking-[-0.4px] text-[#465566] max-md:text-[17px]">
                                        {item.text}
                                    </p>
                                </>
                            )}
                        </div>
                    ))}
                </div>

                {/* Cards row */}
                <div className="grid grid-cols-3 max-lg:grid-cols-1">
                    {cards.map((card, index) => {
                        const isGold = card.variant === "gold";

                        return (
                            <Link
                                key={index}
                                href={card.href}
                                className={`group/card relative min-h-[445px] overflow-hidden border-r border-[#e7e1d7] last:border-r-0 max-lg:border-b max-lg:border-r-0 ${isGold ? "bg-[#D79229]" : "bg-[#F8F3EA]"
                                    }`}
                            >
                                {/* Hover background */}
                                <span
                                    className={`absolute inset-0 origin-bottom scale-y-0 transition-transform duration-500 ease-out group-hover/card:scale-y-100 ${isGold ? "bg-[#0B1F35]" : "bg-[#0B1F35]"
                                        }`}
                                />


                                <div className="relative z-20 flex h-full min-h-[445px] flex-col justify-between px-10 pb-0 pt-12 max-md:px-5">
                                    <div className="flex items-center gap-2 text-[20px] font-medium tracking-[-0.4px] text-[#465566] transition-colors duration-300 group-hover/card:text-white">
                                        <span className="text-[#D79229] group-hover/card:text-white">
                                            /
                                        </span>
                                        <span>{card.eyebrow}</span>
                                    </div>

                                    <div className="pb-[96px]">
                                        <h3
                                            className={`max-w-[360px] text-[31px] font-extrabold uppercase leading-[1.16] tracking-[-1px] transition-colors duration-300 max-xl:text-[27px] max-md:text-[25px] ${isGold
                                                ? "text-white"
                                                : "text-[#0B1F35] group-hover/card:text-white"
                                                }`}
                                        >
                                            {card.title}
                                        </h3>
                                    </div>
                                </div>

                                {/* Arrow button */}
                                <div
                                    className={`absolute bottom-0 left-0 z-30 flex h-[70px] w-[108px] items-center justify-center transition-all duration-300 ${isGold
                                        ? "bg-white text-[#D79229] group-hover/card:bg-[#D79229] group-hover/card:text-white"
                                        : "bg-[#D79229] text-white group-hover/card:bg-white group-hover/card:text-[#0B1F35]"
                                        }`}
                                >
                                    <ArrowIcon />
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}