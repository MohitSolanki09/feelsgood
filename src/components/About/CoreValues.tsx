// src/components/Company/CoreValues.tsx

const values = [
    {
        title: "Precision First",
        text: "Every brass component is manufactured with accuracy, consistency, and attention to detail.",
        icon: "precision",
    },
    {
        title: "Never Compromise",
        text: "We focus on reliable material, clean finishing, proper threading, and strict quality checks.",
        icon: "quality",
    },
    {
        title: "Customer Focused",
        text: "We work closely with clients to deliver brass parts as per drawings, samples, and requirements.",
        icon: "customer",
    },
];

function ValueIcon({ type }: { type: string }) {
    if (type === "precision") {
        return (
            <svg viewBox="0 0 64 64" className="h-[78px] w-[78px]" fill="none">
                <circle cx="32" cy="32" r="20" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="32" cy="32" r="8" stroke="currentColor" strokeWidth="1.8" />
                <path
                    d="M32 8v10M32 46v10M8 32h10M46 32h10"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                />
                <path
                    d="M32 24v8l6 4"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        );
    }

    if (type === "quality") {
        return (
            <svg viewBox="0 0 64 64" className="h-[78px] w-[78px]" fill="none">
                <path
                    d="M32 8l18 10v18c0 11-7.5 17.5-18 20-10.5-2.5-18-9-18-20V18L32 8Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                />
                <path
                    d="M24 32l5 5 12-13"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        );
    }

    return (
        <svg viewBox="0 0 64 64" className="h-[78px] w-[78px]" fill="none">
            <path
                d="M22 36c0-6 4-10 10-10s10 4 10 10"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
            />
            <circle cx="32" cy="18" r="7" stroke="currentColor" strokeWidth="1.8" />
            <path
                d="M14 52c2-9 8.5-14 18-14s16 5 18 14"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
            />
            <path
                d="M16 28c0-4 2.5-7 6.5-8M48 28c0-4-2.5-7-6.5-8"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
            />
        </svg>
    );
}

export default function CoreValues() {
    return (
        <section className="bg-white">
            <div className="mx-auto max-w-[1500px] px-5">
                <div className="grid min-h-[620px] grid-cols-4 border-x border-y border-[#e7e1d7] max-xl:grid-cols-2 max-md:grid-cols-1">
                    {/* Heading block */}
                    <div className="border-r border-[#e7e1d7] px-10 py-[78px] max-xl:border-b max-md:border-r-0 max-md:px-5 max-md:py-12">
                        <span className="mb-6 block text-[14px] font-extrabold uppercase tracking-[3px] text-[#D79229]">
                            / Values
                        </span>

                        <h2 className="text-[58px] font-extrabold uppercase leading-[1.08] tracking-[-2.2px] text-[#050505] max-xl:text-[48px] max-md:text-[38px] max-sm:text-[32px]">
                            Core Values
                        </h2>

                        <p className="mt-8 max-w-[360px] text-[20px] leading-[1.55] tracking-[-0.4px] text-[#0B1F35] max-md:text-[17px]">
                            Our core values define how we manufacture, inspect, and deliver
                            precision brass components.
                        </p>
                    </div>

                    {/* Value cards */}
                    {values.map((item, index) => (
                        <div
                            key={item.title}
                            className={`group flex min-h-[620px] flex-col justify-end px-10 pb-[72px] pt-16 transition-colors duration-500 hover:bg-[#0B1F35] max-xl:min-h-[420px] max-md:min-h-[360px] max-md:px-5 max-md:py-12 ${index !== values.length - 1
                                    ? "border-r border-[#e7e1d7] max-md:border-r-0"
                                    : ""
                                } max-xl:border-b max-xl:nth-[2n]:border-r-0`}
                        >
                            <div className="mb-9 text-[#b8c0c8] transition-colors duration-500 group-hover:text-[#D79229]">
                                <ValueIcon type={item.icon} />
                            </div>

                            <h3 className="text-[23px] font-extrabold uppercase leading-[1.2] tracking-[-0.5px] text-[#050505] transition-colors duration-500 group-hover:text-white">
                                {item.title}
                            </h3>

                            <p className="mt-5 max-w-[360px] text-[17px] leading-[1.65] tracking-[-0.2px] text-[#465566] transition-colors duration-500 group-hover:text-white/75">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}