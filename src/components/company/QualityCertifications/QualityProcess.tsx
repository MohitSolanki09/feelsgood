// src/components/QualityCertifications/QualityProcess.tsx

const processItems = [
    {
        number: "01",
        title: "Raw Material Check",
        text: "Brass material is checked before production for suitability, strength, and machining consistency.",
    },
    {
        number: "02",
        title: "Dimensional Accuracy",
        text: "Critical dimensions, threading, tolerance, and fitment are verified during production.",
    },
    {
        number: "03",
        title: "Surface Finish Review",
        text: "Each batch is checked for clean finishing, burr control, polishing, and visual consistency.",
    },
    {
        number: "04",
        title: "Final Inspection",
        text: "Finished brass parts are inspected before packing to ensure reliable dispatch quality.",
    },
];

function CheckIcon() {
    return (
        <svg viewBox="0 0 64 64" className="h-[64px] w-[64px]" fill="none">
            <path
                d="M32 7l21 12v18c0 12.5-8.5 20-21 24-12.5-4-21-11.5-21-24V19L32 7Z"
                stroke="currentColor"
                strokeWidth="1.7"
            />
            <path
                d="M23 32l6 6 13-15"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default function QualityProcess() {
    return (
        <section className="bg-white py-[110px] max-lg:py-20 max-md:py-16">
            <div className="mx-auto max-w-[1500px] px-10 max-md:px-5">
                <div className="mb-16 grid grid-cols-[0.8fr_1.2fr] gap-16 max-lg:grid-cols-1 max-lg:gap-8">
                    <div>
                        <span className="mb-5 block text-[14px] font-extrabold uppercase tracking-[3px] text-[#D79229]">
                            / Inspection Process
                        </span>

                        <h2 className="text-[58px] font-extrabold uppercase leading-[1.08] tracking-[-2px] text-[#050505] max-xl:text-[48px] max-md:text-[36px] max-sm:text-[30px]">
                            Quality From Material To Dispatch
                        </h2>
                    </div>

                    <p className="max-w-[720px] text-[19px] leading-[1.8] text-[#465566] max-md:text-[16px]">
                        Our quality process is designed to maintain consistent standards across brass inserts, brass fittings, brass fasteners, precision turned parts, electrical brass components, and customized products, ensuring accuracy, durability, and reliable performance.
                    </p>
                </div>

                <div className="grid grid-cols-4 border border-[#e7e1d7] max-lg:grid-cols-2 max-md:grid-cols-1">
                    {processItems.map((item, index) => (
                        <div
                            key={item.title}
                            className={`group min-h-[370px] px-9 py-12 transition-colors duration-500 hover:bg-[#0B1F35] max-md:min-h-[300px] max-md:px-6 ${index !== processItems.length - 1
                                ? "border-r border-[#e7e1d7]"
                                : ""
                                } max-lg:border-b max-lg:border-r-0`}
                        >
                            <div className="mb-10 text-[#b8c0c8] transition-colors duration-500 group-hover:text-[#D79229]">
                                <CheckIcon />
                            </div>

                            <span className="mb-5 block text-[13px] font-extrabold uppercase tracking-[3px] text-[#D79229]">
                                {item.number}
                            </span>

                            <h3 className="text-[23px] font-extrabold uppercase leading-[1.15] tracking-[-0.5px] text-[#0B1F35] transition-colors duration-500 group-hover:text-white">
                                {item.title}
                            </h3>

                            <p className="mt-6 text-[16px] leading-[1.75] text-[#465566] transition-colors duration-500 group-hover:text-white/75">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}