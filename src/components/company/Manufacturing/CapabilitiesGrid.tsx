// src/components/Manufacturing/CapabilitiesGrid.tsx

const capabilities = [
    {
        number: "01",
        title: "Automatic Bar/Lathe Turning",
        text: "Accurate brass turned parts, inserts, connectors, bushes, pins, and custom round components.",
    },
    {
        number: "02",
        title: "Threading & Tapping",
        text: "Internal and external threading for brass inserts, fittings, and fasteners.",
    },
    {
        number: "03",
        title: "Custom Components",
        text: "Manufacturing as per drawings, samples, dimensions, material grade, and finishing requirements.",
    },
    {
        number: "04",
        title: "Surface Finishing",
        text: "Clean finishing, polishing, nickel plating support, and component-ready surface preparation.",
    },
    {
        number: "05",
        title: "Quality Inspection",
        text: "Dimension checking, thread checking, visual inspection, surface finish review, and batch consistency.",
    },
    {
        number: "06",
        title: "Bulk Production",
        text: "Reliable repeat production for OEM suppliers, exporters, hardware, electrical, and industrial clients.",
    },
];

export default function CapabilitiesGrid() {
    return (
        <section className="bg-white py-[110px] max-lg:py-20 max-md:py-16">
            <div className="mx-auto max-w-[1500px] px-10 max-md:px-5">
                <div className="mobile-heading-group mb-16 grid grid-cols-[0.8fr_1.2fr] gap-16 max-lg:grid-cols-1 max-lg:gap-8">
                    <div>
                        <span data-reveal="fade-up" className="mobile-eyebrow mb-5 block text-[14px] font-extrabold uppercase tracking-[3px] text-[#D79229]">
                            / What We Do
                        </span>

                        <h2 data-reveal="fade-up" className="mobile-section-title text-[58px] font-extrabold uppercase leading-[1.08] tracking-[-2px] text-[#050505] max-xl:text-[48px] max-md:text-[36px] max-sm:text-[30px]">
                            Complete Brass Part Manufacturing Support
                        </h2>
                    </div>

                    <p className="mobile-body max-w-[720px] text-[19px] leading-[1.8] text-[#465566] max-md:text-[16px]">
                        Our manufacturing setup supports the production of precision brass inserts, fittings, fasteners, turned components, sanitary parts, and customized brass products, ensuring consistent quality, reliable performance, and timely delivery for diverse industrial applications.
                    </p>
                </div>

                <div className="grid grid-cols-3 border border-[#e7e1d7] max-lg:grid-cols-2 max-md:grid-cols-1">
                    {capabilities.map((item, index) => (
                        <div data-reveal="fade-up" data-reveal-stagger
                            key={item.title}
                            className={`group min-h-[310px] border-[#e7e1d7] px-9 py-10 transition-colors duration-500 hover:bg-[#0B1F35] max-md:min-h-[260px] max-md:px-6 ${index !== 2 && index !== 5 ? "border-r" : ""
                                } ${index < 3 ? "border-b" : ""} max-lg:border-r-0 max-lg:border-b`}
                        >
                            <span className="mb-10 block text-[14px] font-extrabold uppercase tracking-[3px] text-[#D79229]">
                                {item.number}
                            </span>

                            <h3 className="mobile-card-title text-[25px] font-extrabold uppercase leading-[1.15] tracking-[-0.6px] text-[#0B1F35] transition-colors duration-500 group-hover:text-white">
                                {item.title}
                            </h3>

                            <p className="mobile-body mt-6 text-[16px] leading-[1.75] text-[#465566] transition-colors duration-500 group-hover:text-white/75">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}