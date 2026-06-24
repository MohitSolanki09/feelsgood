// src/components/QualityCertifications/CertificationStandards.tsx

const certifications = [
    {
        title: "Material Traceability",
        text: "Material details and production records are maintained for better batch control and customer confidence.",
    },
    {
        title: "Dimensional Reports",
        text: "Inspection support can be provided for critical brass parts as per customer requirements.",
    },
    {
        title: "Standard Packaging",
        text: "Parts are packed safely to reduce damage, mixing, scratches, and handling issues during dispatch.",
    },
];

function CertificateIcon() {
    return (
        <svg viewBox="0 0 64 64" className="h-[72px] w-[72px]" fill="none">
            <path
                d="M18 8h22l8 8v40H18V8Z"
                stroke="currentColor"
                strokeWidth="1.7"
            />
            <path d="M40 8v9h8" stroke="currentColor" strokeWidth="1.7" />
            <path
                d="M24 28h18M24 34h18M24 40h12"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
            />
            <circle cx="28" cy="18" r="4" stroke="currentColor" strokeWidth="1.7" />
        </svg>
    );
}

export default function CertificationStandards() {
    return (
        <section className="bg-[#F8F3EA] py-[110px] max-lg:py-20 max-md:py-16">
            <div className="mx-auto max-w-[1500px] px-10 max-md:px-5">
                <div className="mx-auto mb-16 max-w-[850px] text-center">
                    <span className="mb-5 block text-[14px] font-extrabold uppercase tracking-[3px] text-[#D79229]">
                        / Certifications & Standards
                    </span>

                    <h2 className="text-[56px] font-extrabold uppercase leading-[1.1] tracking-[-2px] text-[#050505] max-xl:text-[46px] max-md:text-[34px] max-sm:text-[29px]">
                        Reliable Standards For Industrial Brass Supply
                    </h2>

                    <p className="mx-auto mt-7 max-w-[720px] text-[18px] leading-[1.8] text-[#465566] max-md:text-[16px]">
                        We follow structured inspection, documentation, and packing
                        practices to support consistent brass part manufacturing.
                    </p>
                </div>

                <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-1">
                    {certifications.map((item) => (
                        <div
                            key={item.title}
                            className="group bg-white px-10 py-12 transition-all duration-500 hover:-translate-y-2 hover:bg-[#0B1F35] max-md:px-6"
                        >
                            <div className="mb-10 text-[#b8c0c8] transition-colors duration-500 group-hover:text-[#D79229]">
                                <CertificateIcon />
                            </div>

                            <h3 className="text-[25px] font-extrabold uppercase leading-[1.15] tracking-[-0.6px] text-[#0B1F35] transition-colors duration-500 group-hover:text-white">
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