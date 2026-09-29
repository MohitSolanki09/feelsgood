import Image from "next/image";

// src/components/Company/CompanyJourney.tsx

const milestones = [
    {
        year: "1998",
        title: "Foundation Started",
        text: "Started with a clear focus on reliable brass component manufacturing for local industrial requirements.",
    },
    {
        year: "2008",
        title: "Precision Machining",
        text: "Expanded manufacturing capacity for brass inserts, fittings, fasteners, precision turned brass parts, and customized components.",
    },
    {
        year: "2016",
        title: "Custom Development",
        text: "Improved custom brass component development as per client drawings, samples, sizes, and material needs.",
    },
    {
        year: "2026",
        title: "Future Ready",
        text: "Focused on consistent quality, faster production, clean finishing, and dependable supply for modern industries.",
    },
];

export default function CompanyJourney() {
    return (
        <section className="bg-white py-[110px] max-lg:py-20 max-md:py-16">
            <div className="mx-auto max-w-[1500px] px-10 max-md:px-5">
                {/* Top intro */}
                <div className="mobile-heading-group mx-auto mb-[80px] max-w-[980px] text-center max-md:mb-14">
                    <span data-reveal="fade-up" className="mobile-eyebrow mb-5 block text-[14px] font-extrabold uppercase tracking-[3px] text-[#D79229]">
                        / Our Journey
                    </span>

                    <h2 data-reveal="fade-up" className="mobile-section-title text-[42px] font-extrabold uppercase leading-[1.18] tracking-[-1.6px] text-[#050505] max-lg:text-[34px] max-md:text-[28px]">
                        Since our beginning, Feel Good Brass Industry has grown with a clear
                        commitment to precision brass parts, reliable quality, and long-term
                        customer trust.
                    </h2>
                </div>

                {/* Main card */}
                <div className="overflow-hidden bg-[#F8F3EA]">
                    <div className="grid grid-cols-[0.9fr_1.1fr] max-lg:grid-cols-1">
                        {/* Preserve the former visual footprint after removing its illustration and copy. */}
                        <div className="relative min-h-[520px] overflow-hidden max-lg:min-h-[572.48px] max-md:min-h-[calc(510.8px+clamp(20px,5.5vw,24px)*1.18)] max-[22.5rem]:min-h-[585.2px]">
                            <Image
                                src="/images/about/about-journey-brass.png"
                                alt="Technical brass fitting assembly with component labels and engineering dimensions"
                                fill
                                sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1023px) calc(100vw - 80px), (max-width: 1500px) calc((100vw - 80px) * 0.45), 639px"
                                className="object-cover object-center"
                            />
                        </div>

                        {/* Timeline */}
                        <div className="grid grid-cols-2 max-md:grid-cols-1">
                            {milestones.map((item, index) => (
                                <div data-reveal="fade-up" data-reveal-stagger
                                    key={item.year}
                                    className="group relative min-h-[260px] border-b border-r border-[#e7e1d7] bg-white px-10 py-10 transition-colors duration-500 hover:bg-[#F8F3EA] max-md:border-r-0 max-md:px-6"
                                >
                                    <div data-reveal="line-x" className="absolute left-10 top-0 h-[4px] w-[80px] bg-[#D79229] transition-all duration-500 group-hover:w-[140px] max-md:left-6" />

                                    <span className="text-[15px] font-extrabold uppercase tracking-[3px] text-[#D79229]">
                                        0{index + 1}
                                    </span>

                                    <h3 className="mobile-year mt-10 text-[42px] font-extrabold leading-none tracking-[-1.5px] text-[#050505] max-md:text-[34px]">
                                        {item.year}
                                    </h3>

                                    <h4 className="mt-6 text-[21px] font-extrabold uppercase leading-[1.2] tracking-[-0.5px] text-[#0B1F35]">
                                        {item.title}
                                    </h4>

                                    <p className="mobile-secondary mt-5 text-[15px] leading-[1.75] text-[#465566]">
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}