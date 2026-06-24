// src/components/company/Products/ProductDetail.tsx

import Link from "next/link";
import type { Product } from "./productsData";
import BrassProductVisual from "./BrassProductVisual";

type ProductDetailProps = {
    product: Product;
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

export default function ProductDetail({ product }: ProductDetailProps) {
    return (
        <main>
            <section className="bg-white">
                <div className="mx-auto max-w-[1600px] px-5">
                    <div className="grid min-h-[620px] grid-cols-[1fr_0.9fr] border-x border-[#e7e1d7] max-lg:grid-cols-1">
                        <div className="flex items-center border-r border-[#e7e1d7] px-10 py-16 max-lg:border-r-0 max-lg:border-b max-md:px-5">
                            <div>
                                <p className="mb-6 flex items-center gap-2 text-[18px] font-medium text-[#0B1F35]">
                                    <span className="text-[#D79229]">/</span>
                                    {product.title}
                                </p>

                                <h1 className="max-w-[850px] text-[64px] font-extrabold uppercase leading-[1.08] tracking-[-2.5px] text-[#050505] max-xl:text-[52px] max-md:text-[40px] max-sm:text-[32px]">
                                    {product.label}
                                </h1>

                                <p className="mt-8 max-w-[720px] text-[18px] leading-[1.8] text-[#465566]">
                                    {product.description}
                                </p>

                                <Link
                                    href="/contact"
                                    className="group mt-10 inline-flex h-[60px] items-center justify-center gap-4 bg-[#D79229] px-8 text-[14px] font-extrabold uppercase tracking-[3px] text-white transition-colors duration-300 hover:bg-[#0B1F35]"
                                >
                                    Request Quote
                                    <ArrowIcon />
                                </Link>
                            </div>
                        </div>

                        <BrassProductVisual type={product.visual} />
                    </div>
                </div>
            </section>

            <section className="bg-white py-[110px] max-lg:py-20 max-md:py-16">
                <div className="mx-auto max-w-[1500px] px-10 max-md:px-5">
                    <div className="mb-14">
                        <span className="mb-5 block text-[14px] font-extrabold uppercase tracking-[3px] text-[#D79229]">
                            / Components
                        </span>

                        <h2 className="text-[52px] font-extrabold uppercase leading-[1.1] tracking-[-2px] text-[#050505] max-md:text-[34px]">
                            Available Product Types
                        </h2>
                    </div>

                    <div className="grid grid-cols-3 border border-[#e7e1d7] max-lg:grid-cols-2 max-md:grid-cols-1">
                        {product.components.map((item, index) => (
                            <div
                                key={item}
                                className="group min-h-[210px] border-r border-b border-[#e7e1d7] px-8 py-8 transition-colors duration-500 hover:bg-[#0B1F35] max-md:px-6"
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

            <section className="bg-[#F8F3EA] py-[110px] max-lg:py-20 max-md:py-16">
                <div className="mx-auto max-w-[1500px] px-10 max-md:px-5">
                    <div className="grid grid-cols-2 gap-8 max-lg:grid-cols-1">
                        <div className="bg-white p-12 max-md:p-6">
                            <span className="mb-5 block text-[14px] font-extrabold uppercase tracking-[3px] text-[#D79229]">
                                / Applications
                            </span>

                            <h2 className="mb-10 text-[42px] font-extrabold uppercase leading-[1.1] text-[#050505] max-md:text-[30px]">
                                Where It Is Used
                            </h2>

                            <div className="grid gap-5">
                                {product.applications.map((item) => (
                                    <div key={item} className="flex gap-4 border-b border-[#e7e1d7] pb-5">
                                        <span className="mt-2 h-2 w-2 rounded-full bg-[#D79229]" />
                                        <p className="text-[17px] text-[#465566]">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-[#0B1F35] p-12 max-md:p-6">
                            <span className="mb-5 block text-[14px] font-extrabold uppercase tracking-[3px] text-[#D79229]">
                                / Specifications
                            </span>

                            <h2 className="mb-10 text-[42px] font-extrabold uppercase leading-[1.1] text-white max-md:text-[30px]">
                                Manufacturing Support
                            </h2>

                            <div className="grid gap-5">
                                {product.specifications.map((item) => (
                                    <div key={item} className="flex gap-4 border-b border-white/10 pb-5">
                                        <span className="mt-2 h-2 w-2 rounded-full bg-[#D79229]" />
                                        <p className="text-[17px] text-white/75">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 bg-white px-12 py-12 max-md:px-6">
                        <div className="flex items-center justify-between gap-8 max-lg:flex-col max-lg:items-start">
                            <h2 className="max-w-[760px] text-[42px] font-extrabold uppercase leading-[1.1] text-[#050505] max-md:text-[30px]">
                                Need {product.title} As Per Drawing Or Sample?
                            </h2>

                            <Link
                                href="/contact"
                                className="group inline-flex h-[60px] shrink-0 items-center justify-center gap-4 bg-[#D79229] px-8 text-[14px] font-extrabold uppercase tracking-[3px] text-white transition-colors duration-300 hover:bg-[#0B1F35]"
                            >
                                Send Inquiry
                                <ArrowIcon />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}