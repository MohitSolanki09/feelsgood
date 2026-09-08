// src/components/home/QualitySection.tsx

const qualityItems = [
    {
        title: "Material Grade Control",
        text: "Verified brass material selection for strength, durability, and reliable machining performance.",
        icon: "material",
    },
    {
        title: "Precision Tolerances",
        text: "Accurate machining for brass inserts, fittings, fasteners, and custom turned components.",
        icon: "tolerance",
    },
    {
        title: "Dimensional Inspection",
        text: "Every batch is checked for thread quality, size accuracy, finish, and production consistency.",
        icon: "inspection",
    },
    {
        title: "Finishing & Packaging",
        text: "Clean finishing, safe packing, and ready-to-dispatch brass parts for domestic and export supply.",
        icon: "finish",
    },
];

function QualityIcon({ type }: { type: string }) {
    if (type === "material") {
        return (
            <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none">
                <path
                    d="M15 8h15l6 6v26H15V8Z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                />
                <path d="M30 8v7h6" stroke="currentColor" strokeWidth="1.7" />
                <path d="M19 24h13M19 30h13" stroke="currentColor" strokeWidth="1.7" />
                <path
                    d="M20 18h7"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                />
            </svg>
        );
    }

    if (type === "tolerance") {
        return (
            <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none">
                <path
                    d="M13 20h22M18 20v-5h12v5M24 20v18"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M20 38h8M21 31h6"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                />
                <path
                    d="M12 18h6M30 18h6"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                />
            </svg>
        );
    }

    if (type === "inspection") {
        return (
            <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none">
                <path
                    d="M24 7l15 8v18l-15 8-15-8V15l15-8Z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                />
                <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="1.7" />
                <path
                    d="M20 23l3 3 6-6"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        );
    }

    return (
        <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none">
            <path
                d="M24 9l17 9-17 9-17-9 17-9Z"
                stroke="currentColor"
                strokeWidth="1.7"
            />
            <path
                d="M12 25l12 6 12-6M14 32l10 5 10-5"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M18 18l6-3 6 3-6 3-6-3Z"
                stroke="currentColor"
                strokeWidth="1.7"
            />
        </svg>
    );
}

export default function QualitySection() {
    return (
        <section className="bg-white py-[110px] max-lg:py-20 max-md:py-16">
            <div className="mx-auto max-w-[1500px] px-10 max-md:px-5">
                <div className="mb-[70px] max-w-[720px] max-md:mb-12">
                    <span className="mb-5 block text-[14px] font-extrabold uppercase tracking-[3px] text-[#D79229]">
                        / Quality Assurance
                    </span>

                    <h2 className="text-[62px] font-extrabold uppercase leading-[1.08] tracking-[-2.5px] text-[#050505] max-xl:text-[52px] max-lg:text-[42px] max-md:text-[34px] max-sm:text-[30px]">
                        Quality From Start To Finish
                    </h2>
                </div>

                <div className="grid grid-cols-4 border-y border-[#e7e1d7] max-lg:grid-cols-2 max-sm:grid-cols-1">
                    {qualityItems.map((item, index) => (
                        <div
                            key={item.title}
                            className="group min-h-[330px] border-r border-[#e7e1d7] px-10 py-[82px] transition-colors duration-500 last:border-r-0 hover:bg-[#0B1F35] max-xl:px-8 max-lg:border-b max-lg:last:border-b-0 max-lg:nth-[2n]:border-r-0 max-sm:min-h-[260px] max-sm:border-r-0 max-sm:px-6 max-sm:py-10"
                        >
                            <div className="text-[#6f7b88] transition-colors duration-500 group-hover:text-[#D79229]">
                                <QualityIcon type={item.icon} />
                            </div>

                            <div className="mt-9">
                                <span className="mb-4 block text-[13px] font-extrabold uppercase tracking-[3px] text-[#D79229]">
                                    0{index + 1}
                                </span>

                                <h3 className="max-w-[280px] text-[22px] font-extrabold leading-[1.25] tracking-[-0.5px] text-[#0B1F35] transition-colors duration-500 group-hover:text-white max-sm:text-[20px]">
                                    {item.title}
                                </h3>

                                <p className="mt-5 max-w-[300px] text-[15px] leading-[1.7] text-[#465566] transition-colors duration-500 group-hover:text-white/75">
                                    {item.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}