// src/components/company/Products/ProductsLanding.tsx

import Link from "next/link";
import { products } from "./productsData";
import BrassProductVisual from "./BrassProductVisual";

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

export default function ProductsLanding() {
    return (
        <main>
            <section className="bg-white">
                <div className="mx-auto max-w-[1600px] px-5">
                    <div className="grid min-h-[340px] grid-cols-[1.1fr_0.9fr] border-x border-[#e7e1d7] max-lg:grid-cols-1">
                        <div className="flex items-center border-r border-[#e7e1d7] px-10 py-16 max-lg:border-r-0 max-lg:border-b max-md:px-5">
                            <div>
                                <p className="mb-6 flex items-center gap-2 text-[18px] font-medium text-[#0B1F35]">
                                    <span className="text-[#D79229]">/</span>
                                    Products
                                </p>

                                <h1 className="max-w-[900px] text-[64px] font-extrabold uppercase leading-[1.08] tracking-[-2.5px] text-[#050505] max-xl:text-[52px] max-md:text-[40px] max-sm:text-[32px]">
                                    Precision Brass Parts And Components
                                </h1>
                            </div>
                        </div>

                        <div className="flex items-end">
                            <div className="w-full bg-[#0B1F35] px-12 py-12 max-md:px-6">
                                <p className="text-[18px] leading-[1.8] text-white/75">
                                    Explore brass inserts, fittings, fasteners, electrical parts,
                                    CNC turned components, and custom brass products manufactured
                                    for industrial use.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white py-[110px] max-lg:py-20 max-md:py-16">
                <div className="mx-auto max-w-[1500px] px-10 max-md:px-5">
                    <div className="mb-16 grid grid-cols-[0.8fr_1.2fr] gap-16 max-lg:grid-cols-1 max-lg:gap-8">
                        <div>
                            <span className="mb-5 block text-[14px] font-extrabold uppercase tracking-[3px] text-[#D79229]">
                                / Product Range
                            </span>

                            <h2 className="text-[56px] font-extrabold uppercase leading-[1.08] tracking-[-2px] text-[#050505] max-xl:text-[46px] max-md:text-[34px] max-sm:text-[29px]">
                                Brass Products For Multiple Industries
                            </h2>
                        </div>

                        <p className="max-w-[760px] text-[19px] leading-[1.8] text-[#465566] max-md:text-[16px]">
                            Our product range supports automotive, electrical, plumbing,
                            industrial, OEM, and export supply requirements with accurate
                            machining, clean finishing, and reliable production quality.
                        </p>
                    </div>

                    <div className="grid grid-cols-3 gap-6 max-xl:grid-cols-2 max-md:grid-cols-1">
                        {products.map((product, index) => (
                            <Link
                                key={product.slug}
                                href={`/products/${product.slug}`}
                                className="group overflow-hidden bg-[#F8F3EA] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                            >
                                <div className="h-[340px]">
                                    <BrassProductVisual type={product.visual} />
                                </div>

                                <div className="bg-white px-8 py-8 transition-colors duration-500 group-hover:bg-[#0B1F35] max-md:px-6">
                                    <span className="mb-6 block text-[13px] font-extrabold uppercase tracking-[3px] text-[#D79229]">
                                        0{index + 1}
                                    </span>

                                    <h3 className="text-[25px] font-extrabold uppercase leading-[1.15] text-[#0B1F35] transition-colors duration-500 group-hover:text-white">
                                        {product.title}
                                    </h3>

                                    <p className="mt-5 text-[16px] leading-[1.7] text-[#465566] transition-colors duration-500 group-hover:text-white/75">
                                        {product.shortText}
                                    </p>

                                    <div className="mt-8 flex items-center gap-4 text-[13px] font-extrabold uppercase tracking-[3px] text-[#D79229]">
                                        View Product
                                        <ArrowIcon />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}