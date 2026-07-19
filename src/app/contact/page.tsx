// src/app/contact/page.tsx

import Link from "next/link";

const contactCards = [
    {
        number: "01",
        title: "Send Inquiry",
        text: "Share your drawing, sample, material grade, quantity, and finish requirement.",
        value: "info@feelgoodbrass.com",
    },
    {
        number: "02",
        title: "Call Support",
        text: "Discuss your brass inserts, fittings, fasteners, CNC parts, or custom components.",
        value: "+91 00000 00000",
    },
    {
        number: "03",
        title: "Manufacturing Location",
        text: "Precision brass component manufacturing support from Jamnagar, Gujarat.",
        value: "Jamnagar, Gujarat, India",
    },
];

const inquiryTypes = [
    "Brass Inserts",
    "Brass Fittings",
    "Brass Fasteners",
    "Brass Electrical Parts",
    "Custom Brass Components",
];

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

function ContactVisual() {
    return (
        <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden bg-[#0B1F35] max-md:min-h-[340px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_24%,rgba(215,146,41,0.30),transparent_34%),radial-gradient(circle_at_82%_78%,rgba(255,255,255,0.08),transparent_32%)]" />

            <div className="absolute left-10 top-10 rounded-full border border-white/15 px-5 py-3 text-[12px] font-extrabold uppercase tracking-[3px] text-white/70 max-md:left-5 max-md:top-5">
                Brass Inquiry
            </div>

            <div className="absolute right-10 top-10 h-28 w-28 rounded-full border border-[#D79229]/30 max-md:hidden" />
            <div className="absolute bottom-10 left-16 h-40 w-40 rounded-full border border-white/10 max-md:hidden" />

            <div className="relative">
                <div
                    className="relative h-[250px] w-[250px] bg-gradient-to-br from-[#F8CF78] via-[#D79229] to-[#8F5518] shadow-2xl max-md:h-[200px] max-md:w-[200px]"
                    style={{
                        clipPath:
                            "polygon(50% 0%, 88% 20%, 88% 78%, 50% 100%, 12% 78%, 12% 20%)",
                    }}
                >
                    <div
                        className="absolute inset-[55px] bg-[#0B1F35] max-md:inset-[44px]"
                        style={{
                            clipPath:
                                "polygon(50% 0%, 88% 20%, 88% 78%, 50% 100%, 12% 78%, 12% 20%)",
                        }}
                    />
                </div>

                <div className="absolute -right-28 bottom-8 h-[105px] w-[180px] rounded-[80px] bg-gradient-to-r from-[#8F5518] via-[#D79229] to-[#F8CF78] shadow-2xl max-md:-right-10 max-md:h-[70px] max-md:w-[120px]" />

                <div className="absolute -bottom-8 left-1/2 flex h-16 -translate-x-1/2 items-center bg-white px-7 text-[#0B1F35] shadow-2xl max-md:h-14 max-md:px-5">
                    <span className="whitespace-nowrap text-[13px] font-extrabold uppercase tracking-[3px]">
                        Custom Parts
                    </span>
                </div>
            </div>
        </div>
    );
}

export default function ContactPage() {
    return (
        <main>
            {/* HERO */}
            <section className="bg-white">
                <div className="mx-auto max-w-[1600px] px-5">
                    <div className="border-x border-[#e7e1d7]">
                        <div className="grid grid-cols-[1fr_440px] border-b border-[#e7e1d7] max-lg:grid-cols-1">
                            <div className="px-12 py-20 max-md:px-6 max-md:py-14">
                                <p className="mb-6 flex items-center gap-2 text-[18px] font-medium text-[#0B1F35]">
                                    <span className="text-[#D79229]">/</span>
                                    Contact Us
                                </p>

                                <h1 className="max-w-[1050px] text-[76px] font-extrabold uppercase leading-[0.98] tracking-[-3.5px] text-[#050505] max-2xl:text-[68px] max-xl:text-[56px] max-md:text-[40px] max-sm:text-[32px]">
                                    Let’s Build Your Brass Component Requirement
                                </h1>
                            </div>

                            <div className="flex flex-col justify-end border-l border-[#e7e1d7] bg-[#F8F3EA] p-10 max-lg:border-l-0 max-lg:border-t max-md:p-6">
                                <p className="text-[17px] leading-[1.8] text-[#465566]">
                                    Send your drawing, sample, part size, material grade, quantity,
                                    or finish requirement. We will guide you with the right brass
                                    manufacturing solution.
                                </p>

                                <Link
                                    href="mailto:info@feelgoodbrass.com"
                                    className="group mt-8 inline-flex h-[60px] w-fit items-center justify-center gap-4 bg-[#D79229] px-8 text-[14px] font-extrabold uppercase tracking-[3px] text-white transition-colors duration-300 hover:bg-[#0B1F35]"
                                >
                                    Email Us
                                    <ArrowIcon />
                                </Link>
                            </div>
                        </div>

                        {/* <div className="grid grid-cols-[0.95fr_1.05fr] max-lg:grid-cols-1">
                             <div className="border-r border-[#e7e1d7] max-lg:border-r-0 max-lg:border-b">
                                <ContactVisual />
                            </div> 

                            <div className="grid grid-cols-3 max-md:grid-cols-1">
                                {contactCards.map((item, index) => (
                                    <div
                                        key={item.title}
                                        className={`flex min-h-[420px] flex-col justify-end p-9 max-md:min-h-[260px] max-md:p-6 ${index !== contactCards.length - 1
                                                ? "border-r border-[#e7e1d7] max-md:border-r-0 max-md:border-b"
                                                : ""
                                            }`}
                                    >
                                        <span className="mb-10 text-[13px] font-extrabold uppercase tracking-[3px] text-[#D79229]">
                                            {item.number}
                                        </span>

                                        <h3 className="text-[25px] font-extrabold uppercase leading-[1.15] text-[#0B1F35]">
                                            {item.title}
                                        </h3>

                                        <p className="mt-5 text-[15px] leading-[1.7] text-[#465566]">
                                            {item.text}
                                        </p>

                                        <p className="mt-7 text-[15px] font-extrabold uppercase tracking-[2px] text-[#0B1F35]">
                                            {item.value}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div> */}
                        <div className="border-t border-[#e7e1d7]">
                            <div className="grid grid-cols-3 max-lg:grid-cols-1">
                                {contactCards.map((item, index) => (
                                    <div
                                        key={item.title}
                                        className={`group relative min-h-[360px] overflow-hidden bg-white p-10 transition-colors duration-500 hover:bg-[#0B1F35] max-md:min-h-[280px] max-md:p-6 ${index !== contactCards.length - 1
                                                ? "border-r border-[#e7e1d7] max-lg:border-r-0 max-lg:border-b"
                                                : ""
                                            }`}
                                    >
                                        <div className="absolute right-8 top-8 h-24 w-24 rounded-full border border-[#D79229]/20 transition-all duration-500 group-hover:scale-125 group-hover:border-white/10" />

                                        <div className="relative z-10 flex h-full flex-col justify-between">
                                            <div>
                                                <span className="mb-10 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#F8F3EA] text-[13px] font-extrabold tracking-[3px] text-[#D79229] transition-colors duration-500 group-hover:bg-white/10">
                                                    {item.number}
                                                </span>

                                                <h3 className="max-w-[320px] text-[30px] font-extrabold uppercase leading-[1.08] tracking-[-0.8px] text-[#0B1F35] transition-colors duration-500 group-hover:text-white max-md:text-[25px]">
                                                    {item.title}
                                                </h3>

                                                <p className="mt-6 max-w-[340px] text-[16px] leading-[1.75] text-[#465566] transition-colors duration-500 group-hover:text-white/70">
                                                    {item.text}
                                                </p>
                                            </div>

                                            <div className="mt-10 border-t border-[#e7e1d7] pt-6 transition-colors duration-500 group-hover:border-white/10">
                                                {item.value.includes("@") ? (
                                                    <a
                                                        href={`mailto:${item.value}`}
                                                        className="break-all text-[15px] font-extrabold uppercase tracking-[2px] text-[#0B1F35] transition-colors duration-500 group-hover:text-[#D79229] max-md:text-[13px]"
                                                    >
                                                        {item.value}
                                                    </a>
                                                ) : item.value.includes("+") ? (
                                                    <a
                                                        href={`tel:${item.value.replace(/\s/g, "")}`}
                                                        className="text-[15px] font-extrabold uppercase tracking-[2px] text-[#0B1F35] transition-colors duration-500 group-hover:text-[#D79229] max-md:text-[13px]"
                                                    >
                                                        {item.value}
                                                    </a>
                                                ) : (
                                                    <p className="text-[15px] font-extrabold uppercase tracking-[2px] text-[#0B1F35] transition-colors duration-500 group-hover:text-[#D79229] max-md:text-[13px]">
                                                        {item.value}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTACT FORM */}
            <section className="bg-white py-[110px] max-lg:py-20 max-md:py-16">
                <div className="mx-auto grid max-w-[1500px] grid-cols-[0.85fr_1.15fr] gap-10 px-10 max-lg:grid-cols-1 max-md:px-5">
                    <div className="bg-[#0B1F35] p-12 max-md:p-6">
                        <span className="mb-6 block text-[14px] font-extrabold uppercase tracking-[3px] text-[#D79229]">
                            / Inquiry Details
                        </span>

                        <h2 className="text-[52px] font-extrabold uppercase leading-[1.08] tracking-[-2px] text-white max-xl:text-[42px] max-md:text-[34px]">
                            Share Your Brass Part Requirement
                        </h2>

                        <p className="mt-7 text-[17px] leading-[1.8] text-white/70">
                            Add your product type, dimensions, material grade, finish,
                            quantity, and application details. For custom parts, mention if
                            you have a drawing or sample available.
                        </p>

                        <div className="mt-10 grid gap-4">
                            {inquiryTypes.map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-4 border-b border-white/10 pb-4"
                                >
                                    <span className="h-2 w-2 rounded-full bg-[#D79229]" />
                                    <span className="text-[15px] font-bold uppercase tracking-[2px] text-white/75">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <form
                        action="mailto:info@feelgoodbrass.com"
                        method="post"
                        encType="text/plain"
                        className="grid gap-6 bg-[#F8F3EA] p-12 max-md:p-6"
                    >
                        <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
                            <div>
                                <label className="mb-3 block text-[13px] font-extrabold uppercase tracking-[3px] text-[#0B1F35]">
                                    Full Name
                                </label>
                                <input
                                    name="name"
                                    type="text"
                                    required
                                    placeholder="Your name"
                                    className="h-[58px] w-full border border-[#e7e1d7] bg-white px-5 text-[15px] text-[#0B1F35] outline-none transition-colors duration-300 placeholder:text-[#465566]/50 focus:border-[#D79229]"
                                />
                            </div>

                            <div>
                                <label className="mb-3 block text-[13px] font-extrabold uppercase tracking-[3px] text-[#0B1F35]">
                                    Company Name
                                </label>
                                <input
                                    name="company"
                                    type="text"
                                    placeholder="Company name"
                                    className="h-[58px] w-full border border-[#e7e1d7] bg-white px-5 text-[15px] text-[#0B1F35] outline-none transition-colors duration-300 placeholder:text-[#465566]/50 focus:border-[#D79229]"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
                            <div>
                                <label className="mb-3 block text-[13px] font-extrabold uppercase tracking-[3px] text-[#0B1F35]">
                                    Email Address
                                </label>
                                <input
                                    name="email"
                                    type="email"
                                    required
                                    placeholder="you@example.com"
                                    className="h-[58px] w-full border border-[#e7e1d7] bg-white px-5 text-[15px] text-[#0B1F35] outline-none transition-colors duration-300 placeholder:text-[#465566]/50 focus:border-[#D79229]"
                                />
                            </div>

                            <div>
                                <label className="mb-3 block text-[13px] font-extrabold uppercase tracking-[3px] text-[#0B1F35]">
                                    Phone Number
                                </label>
                                <input
                                    name="phone"
                                    type="tel"
                                    required
                                    placeholder="+91"
                                    className="h-[58px] w-full border border-[#e7e1d7] bg-white px-5 text-[15px] text-[#0B1F35] outline-none transition-colors duration-300 placeholder:text-[#465566]/50 focus:border-[#D79229]"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="mb-3 block text-[13px] font-extrabold uppercase tracking-[3px] text-[#0B1F35]">
                                Product Requirement
                            </label>
                            <select
                                name="product"
                                defaultValue=""
                                required
                                className="h-[58px] w-full border border-[#e7e1d7] bg-white px-5 text-[15px] text-[#0B1F35] outline-none transition-colors duration-300 focus:border-[#D79229]"
                            >
                                <option value="" disabled>
                                    Select product type
                                </option>
                                {inquiryTypes.map((item) => (
                                    <option key={item} value={item}>
                                        {item}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="mb-3 block text-[13px] font-extrabold uppercase tracking-[3px] text-[#0B1F35]">
                                Requirement Details
                            </label>
                            <textarea
                                name="message"
                                required
                                rows={7}
                                placeholder="Share size, quantity, drawing/sample details, material grade, finish, or application..."
                                className="w-full resize-none border border-[#e7e1d7] bg-white px-5 py-5 text-[15px] leading-[1.7] text-[#0B1F35] outline-none transition-colors duration-300 placeholder:text-[#465566]/50 focus:border-[#D79229]"
                            />
                        </div>

                        <button
                            type="submit"
                            className="group inline-flex h-[64px] w-fit items-center justify-center gap-4 bg-[#D79229] px-9 text-[14px] font-extrabold uppercase tracking-[3px] text-white transition-colors duration-300 hover:bg-[#0B1F35]"
                        >
                            Submit Inquiry
                            <ArrowIcon />
                        </button>
                    </form>
                </div>
            </section>

            {/* LOCATION / INFO */}
            <section className="bg-white pb-[110px] max-lg:pb-20 max-md:pb-16">
                <div className="mx-auto max-w-[1500px] px-10 max-md:px-5">
                    <div className="grid overflow-hidden border border-[#e7e1d7] lg:grid-cols-[0.9fr_1.1fr]">
                        <div className="bg-[#F8F3EA] p-12 max-md:p-6">
                            <span className="mb-6 block text-[14px] font-extrabold uppercase tracking-[3px] text-[#D79229]">
                                / Visit & Connect
                            </span>

                            <h2 className="text-[48px] font-extrabold uppercase leading-[1.1] tracking-[-2px] text-[#050505] max-md:text-[34px]">
                                Manufacturing Support From Jamnagar
                            </h2>

                            <p className="mt-7 text-[17px] leading-[1.8] text-[#465566]">
                                Feel Good Brass Industry supports brass parts manufacturing for
                                OEMs, traders, exporters, industrial suppliers, and businesses
                                requiring custom brass components.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 max-md:grid-cols-1">
                            <div className="border-r border-[#e7e1d7] p-10 max-md:border-r-0 max-md:border-b max-md:p-6">
                                <span className="mb-8 block text-[13px] font-extrabold uppercase tracking-[3px] text-[#D79229]">
                                    Address
                                </span>

                                <p className="text-[24px] font-extrabold uppercase leading-[1.25] text-[#0B1F35] max-md:text-[21px]">
                                    Jamnagar, Gujarat, India
                                </p>

                                <p className="mt-5 text-[16px] leading-[1.7] text-[#465566]">
                                    Brass manufacturing and custom component supply support.
                                </p>
                            </div>

                            <div className="p-10 max-md:p-6">
                                <span className="mb-8 block text-[13px] font-extrabold uppercase tracking-[3px] text-[#D79229]">
                                    Response
                                </span>

                                <p className="text-[24px] font-extrabold uppercase leading-[1.25] text-[#0B1F35] max-md:text-[21px]">
                                    Within 1 Working Day
                                </p>

                                <p className="mt-5 text-[16px] leading-[1.7] text-[#465566]">
                                    Send your requirement with drawing, sample, or quantity details
                                    for faster response.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}