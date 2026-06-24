// src/components/Company/CompanyJourney.tsx

const milestones = [
    {
        year: "1997",
        title: "Foundation Started",
        text: "Started with a clear focus on reliable brass component manufacturing for local industrial requirements.",
    },
    {
        year: "2010",
        title: "Precision Machining",
        text: "Expanded machining capacity for brass inserts, fittings, fasteners, and CNC turned brass parts.",
    },
    {
        year: "2020",
        title: "Custom Development",
        text: "Improved custom brass component development as per client drawings, samples, sizes, and material needs.",
    },
    {
        year: "2026",
        title: "Future Ready",
        text: "Focused on consistent quality, faster production, clean finishing, and dependable supply for modern industries.",
    },
];

function BrassPartVisual() {
    return (
        <div className="relative mx-auto h-[260px] w-[260px] max-md:h-[210px] max-md:w-[210px]">
            <div className="absolute inset-0 rounded-full bg-[#D79229]/10 blur-3xl" />

            {/* Big brass gear */}
            <div
                className="absolute left-1/2 top-1/2 h-[170px] w-[170px] -translate-x-1/2 -translate-y-1/2 shadow-[0_30px_80px_rgba(11,31,53,0.16)]"
                style={{
                    clipPath:
                        "polygon(50% 0%, 58% 18%, 78% 10%, 72% 31%, 94% 36%, 76% 50%, 94% 64%, 72% 69%, 78% 90%, 58% 82%, 50% 100%, 42% 82%, 22% 90%, 28% 69%, 6% 64%, 24% 50%, 6% 36%, 28% 31%, 22% 10%, 42% 18%)",
                    background:
                        "linear-gradient(135deg, #8a5519 0%, #d79229 38%, #f3c46a 55%, #b96f1f 78%, #6e4214 100%)",
                }}
            />

            {/* Gear hole */}
            <div className="absolute left-1/2 top-1/2 h-[66px] w-[66px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[inset_10px_10px_20px_rgba(11,31,53,0.14)]" />

            {/* Small silver part */}
            <div
                className="absolute bottom-[25px] right-[18px] h-[86px] w-[86px] shadow-[0_20px_45px_rgba(11,31,53,0.12)]"
                style={{
                    clipPath:
                        "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0 50%)",
                    background:
                        "linear-gradient(135deg, #dce3e8 0%, #ffffff 42%, #9faab4 100%)",
                }}
            />

            <div
                className="absolute left-[28px] top-[34px] h-[76px] w-[76px] shadow-[0_20px_45px_rgba(11,31,53,0.12)]"
                style={{
                    clipPath:
                        "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0 50%)",
                    background:
                        "linear-gradient(135deg, #9c641e 0%, #e3a13a 45%, #7a4512 100%)",
                }}
            />

            <div className="absolute left-[58px] top-[20px] h-[120px] w-[1px] rotate-[35deg] bg-white/70" />
        </div>
    );
}

export default function CompanyJourney() {
    return (
        <section className="bg-white py-[110px] max-lg:py-20 max-md:py-16">
            <div className="mx-auto max-w-[1500px] px-10 max-md:px-5">
                {/* Top intro */}
                <div className="mx-auto mb-[80px] max-w-[980px] text-center max-md:mb-14">
                    <span className="mb-5 block text-[14px] font-extrabold uppercase tracking-[3px] text-[#D79229]">
                        / Our Journey
                    </span>

                    <h2 className="text-[42px] font-extrabold uppercase leading-[1.18] tracking-[-1.6px] text-[#050505] max-lg:text-[34px] max-md:text-[28px]">
                        Since our beginning, Feel Good Brass Industry has grown with a clear
                        commitment to precision brass parts, reliable quality, and long-term
                        customer trust.
                    </h2>
                </div>

                {/* Main card */}
                <div className="overflow-hidden bg-[#F8F3EA]">
                    <div className="grid grid-cols-[0.9fr_1.1fr] max-lg:grid-cols-1">
                        {/* Visual */}
                        <div className="relative flex min-h-[520px] items-center justify-center bg-[#0B1F35] px-10 py-16 max-lg:min-h-[420px] max-md:px-5">
                            <div className="absolute left-0 top-0 h-[6px] w-[38%] bg-[#D79229]" />

                            <div className="text-center">
                                <BrassPartVisual />

                                <h3 className="mt-10 text-[34px] font-extrabold uppercase leading-[1.12] tracking-[-1px] text-white max-md:text-[28px]">
                                    Built Around Precision
                                </h3>

                                <p className="mx-auto mt-5 max-w-[420px] text-[16px] leading-[1.8] text-white/70">
                                    From raw brass material to finished components, every stage is
                                    focused on accuracy, consistency, and dependable supply.
                                </p>
                            </div>
                        </div>

                        {/* Timeline */}
                        <div className="grid grid-cols-2 max-md:grid-cols-1">
                            {milestones.map((item, index) => (
                                <div
                                    key={item.year}
                                    className="group relative min-h-[260px] border-b border-r border-[#e7e1d7] bg-white px-10 py-10 transition-colors duration-500 hover:bg-[#F8F3EA] max-md:border-r-0 max-md:px-6"
                                >
                                    <div className="absolute left-10 top-0 h-[4px] w-[80px] bg-[#D79229] transition-all duration-500 group-hover:w-[140px] max-md:left-6" />

                                    <span className="text-[15px] font-extrabold uppercase tracking-[3px] text-[#D79229]">
                                        0{index + 1}
                                    </span>

                                    <h4 className="mt-10 text-[42px] font-extrabold leading-none tracking-[-1.5px] text-[#050505] max-md:text-[34px]">
                                        {item.year}
                                    </h4>

                                    <h5 className="mt-6 text-[21px] font-extrabold uppercase leading-[1.2] tracking-[-0.5px] text-[#0B1F35]">
                                        {item.title}
                                    </h5>

                                    <p className="mt-5 text-[15px] leading-[1.75] text-[#465566]">
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