// src/components/Solutions/SolutionDetail.tsx

import Image from "next/image";
import Link from "next/link";

type SolutionDetailProps = {
    eyebrow: string;
    title: string;
    description: string;
    image: string;
    parts: string[];
    applications: {
        title: string;
        text: string;
    }[];
    benefits: string[];
};

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

export default function SolutionDetail({
    eyebrow,
    title,
    description,
    image,
    parts,
    applications,
    benefits,
}: SolutionDetailProps) {
    return (
        <main>
            {/* Hero */}
            <section className="bg-white">
                <div className="mx-auto max-w-[1600px] px-5">
                    <div className="grid min-h-[310px] grid-cols-[1.15fr_0.85fr] border-x border-[#e7e1d7] max-lg:grid-cols-1">
                        <div className="flex items-center border-r border-[#e7e1d7] px-10 py-16 max-lg:border-r-0 max-lg:border-b max-md:px-5">
                            <div>
                                <p className="mb-6 flex items-center gap-2 text-[18px] font-medium text-[#0B1F35]">
                                    <span className="text-[#D79229]">/</span>
                                    {eyebrow}
                                </p>

                                <h1 className="max-w-[900px] text-[64px] font-extrabold uppercase leading-[1.1] tracking-[-2.5px] text-[#050505] max-xl:text-[52px] max-md:text-[40px] max-sm:text-[32px]">
                                    {title}
                                </h1>
                            </div>
                        </div>

                        <div className="flex items-end justify-end">
                            <Link
                                href="/contact"
                                className="group flex h-[86px] w-full max-w-[560px] items-center justify-between bg-[#0B1F35] px-12 text-white transition-colors duration-300 hover:bg-[#D79229] max-lg:max-w-full max-md:h-[74px] max-md:px-6"
                            >
                                <span className="text-[15px] font-extrabold uppercase tracking-[4px]">
                                    Send Inquiry
                                </span>
                                <ArrowIcon />
                            </Link>
                        </div>
                    </div>

                    <div className="relative h-[520px] overflow-hidden max-xl:h-[450px] max-md:h-[320px]">
                        <Image
                            src={image}
                            alt={title}
                            fill
                            priority
                            sizes="100vw"
                            className="object-cover object-center"
                        />

                        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F35]/40 via-transparent to-[#D79229]/20" />
                    </div>
                </div>
            </section>

            {/* Intro */}
            <section className="bg-white py-[100px] max-lg:py-20 max-md:py-16">
                <div className="mx-auto grid max-w-[1500px] grid-cols-[0.8fr_1.2fr] gap-16 px-10 max-lg:grid-cols-1 max-lg:gap-8 max-md:px-5">
                    <div>
                        <span className="mb-5 block text-[14px] font-extrabold uppercase tracking-[3px] text-[#D79229]">
                            / Solution Overview
                        </span>

                        <h2 className="text-[52px] font-extrabold uppercase leading-[1.08] tracking-[-2px] text-[#050505] max-xl:text-[44px] max-md:text-[34px] max-sm:text-[29px]">
                            Brass Components Made For Reliable Industry Use
                        </h2>
                    </div>

                    <p className="max-w-[760px] text-[19px] leading-[1.8] text-[#465566] max-md:text-[16px]">
                        {description}
                    </p>
                </div>
            </section>

            {/* Parts */}
            <section className="bg-[#F8F3EA] py-[100px] max-lg:py-20 max-md:py-16">
                <div className="mx-auto max-w-[1500px] px-10 max-md:px-5">
                    <div className="mb-14 max-w-[760px]">
                        <span className="mb-5 block text-[14px] font-extrabold uppercase tracking-[3px] text-[#D79229]">
                            / Parts We Manufacture
                        </span>

                        <h2 className="text-[50px] font-extrabold uppercase leading-[1.1] tracking-[-2px] text-[#050505] max-md:text-[34px] max-sm:text-[29px]">
                            Product Range
                        </h2>
                    </div>

                    <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-md:grid-cols-1">
                        {parts.map((item, index) => (
                            <div
                                key={item}
                                className="group bg-white px-8 py-8 transition-colors duration-500 hover:bg-[#0B1F35]"
                            >
                                <span className="mb-8 block text-[13px] font-extrabold uppercase tracking-[3px] text-[#D79229]">
                                    0{index + 1}
                                </span>

                                <h3 className="text-[22px] font-extrabold uppercase leading-[1.2] text-[#0B1F35] transition-colors duration-500 group-hover:text-white">
                                    {item}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Applications */}
            <section className="bg-white py-[100px] max-lg:py-20 max-md:py-16">
                <div className="mx-auto max-w-[1500px] px-10 max-md:px-5">
                    <div className="grid grid-cols-3 border border-[#e7e1d7] max-lg:grid-cols-1">
                        {applications.map((item, index) => (
                            <div
                                key={item.title}
                                className={`min-h-[320px] px-10 py-12 max-md:px-6 ${index !== applications.length - 1
                                        ? "border-r border-[#e7e1d7] max-lg:border-r-0 max-lg:border-b"
                                        : ""
                                    }`}
                            >
                                <span className="mb-10 block text-[13px] font-extrabold uppercase tracking-[3px] text-[#D79229]">
                                    Application 0{index + 1}
                                </span>

                                <h3 className="text-[25px] font-extrabold uppercase leading-[1.15] text-[#0B1F35]">
                                    {item.title}
                                </h3>

                                <p className="mt-6 text-[16px] leading-[1.75] text-[#465566]">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits CTA */}
            <section className="bg-white pb-[110px] max-lg:pb-20 max-md:pb-16">
                <div className="mx-auto max-w-[1500px] px-10 max-md:px-5">
                    <div className="grid overflow-hidden bg-[#0B1F35] lg:grid-cols-[1fr_0.8fr]">
                        <div className="px-[80px] py-[80px] max-xl:px-12 max-md:px-6 max-md:py-12">
                            <span className="mb-6 block text-[14px] font-extrabold uppercase tracking-[3px] text-[#D79229]">
                                / Why Choose Us
                            </span>

                            <h2 className="max-w-[720px] text-[52px] font-extrabold uppercase leading-[1.1] tracking-[-2px] text-white max-xl:text-[42px] max-md:text-[34px] max-sm:text-[29px]">
                                Built For Precision, Repeat Quality And Timely Delivery
                            </h2>

                            <div className="mt-10 grid gap-4">
                                {benefits.map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-start gap-4 border-b border-white/10 pb-4"
                                    >
                                        <span className="mt-2 h-2 w-2 rounded-full bg-[#D79229]" />
                                        <p className="text-[17px] leading-[1.6] text-white/75">
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-end bg-[#F8F3EA] p-10 max-md:p-6">
                            <div>
                                <h3 className="text-[34px] font-extrabold uppercase leading-[1.12] text-[#0B1F35] max-md:text-[28px]">
                                    Have A Custom Brass Part Requirement?
                                </h3>

                                <p className="mt-5 text-[16px] leading-[1.7] text-[#465566]">
                                    Share your drawing, sample, size, material grade, finish, or
                                    quantity details. We will help you with the right solution.
                                </p>

                                <Link
                                    href="/contact"
                                    className="group mt-8 inline-flex h-[60px] items-center justify-center gap-4 bg-[#D79229] px-8 text-[14px] font-extrabold uppercase tracking-[3px] text-white transition-colors duration-300 hover:bg-[#0B1F35]"
                                >
                                    Request Quote
                                    <ArrowIcon />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}