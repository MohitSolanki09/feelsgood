// // src/components/home/ProcessSection.tsx

// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";

// const processSteps = [
//     {
//         title: "Inquiry & Quotation",
//         text: "Share your brass part drawing, sample, size, material grade, or custom requirement. Our team reviews the details and provides a clear quotation.",
//         side: "left",
//     },
//     {
//         title: "Order Confirmation",
//         text: "After approval, we confirm material, quantity, tolerance, finishing, delivery timeline, and packaging requirements.",
//         side: "right",
//     },
//     {
//         title: "CNC Manufacturing",
//         text: "Precision brass inserts, fittings, fasteners, electrical parts, and custom turned components are produced using reliable machining processes.",
//         side: "left",
//     },
//     {
//         title: "Quality Inspection",
//         text: "Every batch is checked for dimensions, threading, surface finish, material quality, and consistency before dispatch.",
//         side: "right",
//     },
//     {
//         title: "Finishing & Packaging",
//         text: "Components are cleaned, finished, packed safely, and prepared for local or export delivery as per customer needs.",
//         side: "left",
//     },
//     {
//         title: "Dispatch & Support",
//         text: "Orders are shipped on time with proper coordination, documentation, and after-sales support for repeat requirements.",
//         side: "right",
//     },
// ];

// function BrassPartIcon() {
//     return (
//         <motion.div
//             initial={{ opacity: 0, y: 40, rotate: -8 }}
//             whileInView={{ opacity: 1, y: 0, rotate: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             className="relative mx-auto mb-10 h-[190px] w-[150px]"
//         >
//             <div className="absolute left-1/2 top-0 h-[150px] w-[84px] -translate-x-1/2 overflow-hidden rounded-t-[44px] border-[2px] border-[#0B1F35]/20 bg-gradient-to-r from-[#9b6319] via-[#f0b653] to-[#b97520] shadow-[inset_18px_0_30px_rgba(11,31,53,0.22),inset_-14px_0_25px_rgba(255,255,255,0.35)]" />

//             <div className="absolute left-1/2 top-[118px] h-[38px] w-[92px] -translate-x-1/2 rounded-[50%] border-[2px] border-[#0B1F35]/25 bg-gradient-to-r from-[#8b5618] via-[#e2a13a] to-[#b87520]" />

//             <div className="absolute left-1/2 top-[132px] h-[26px] w-[72px] -translate-x-1/2 rounded-b-[36px] border-x-[2px] border-b-[2px] border-[#0B1F35]/25 bg-[#F8F3EA]" />

//             <div className="absolute left-1/2 top-[19px] h-[126px] w-px -translate-x-1/2 bg-white/35" />

//             <div className="absolute bottom-0 left-1/2 h-[36px] w-[2px] -translate-x-1/2 bg-[#D79229]" />
//         </motion.div>
//     );
// }

// function ProcessCard({
//     step,
//     index,
// }: {
//     step: (typeof processSteps)[number];
//     index: number;
// }) {
//     const isLeft = step.side === "left";

//     return (
//         <motion.div
//             initial={{
//                 opacity: 0,
//                 x: isLeft ? -70 : 70,
//                 y: 35,
//             }}
//             whileInView={{
//                 opacity: 1,
//                 x: 0,
//                 y: 0,
//             }}
//             viewport={{ once: true, margin: "-120px" }}
//             transition={{
//                 duration: 0.7,
//                 delay: index * 0.08,
//                 ease: [0.22, 1, 0.36, 1],
//             }}
//             className={`relative grid min-h-[250px] grid-cols-2 max-lg:grid-cols-1 ${isLeft ? "" : ""
//                 }`}
//         >
//             <div
//                 className={`px-10 max-md:px-5 ${isLeft
//                         ? "col-start-1 pr-[110px] text-left max-lg:pr-5"
//                         : "col-start-2 pl-[110px] text-left max-lg:col-start-1 max-lg:pl-5"
//                     }`}
//             >
//                 <div className="group max-w-[390px]">
//                     <span className="mb-5 block text-[13px] font-extrabold uppercase tracking-[3px] text-[#D79229]">
//                         Step {String(index + 1).padStart(2, "0")}
//                     </span>

//                     <h3 className="text-[22px] font-extrabold uppercase leading-[1.15] tracking-[-0.6px] text-[#0B1F35] transition-colors duration-300 group-hover:text-[#D79229] max-sm:text-[19px]">
//                         {step.title}
//                     </h3>

//                     <p className="mt-5 text-[15px] leading-[1.7] text-[#465566] max-sm:text-[14px]">
//                         {step.text}
//                     </p>
//                 </div>
//             </div>

//             <motion.span
//                 initial={{ scale: 0 }}
//                 whileInView={{ scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.45, delay: index * 0.08 + 0.15 }}
//                 className="absolute left-1/2 top-[8px] z-20 h-[13px] w-[13px] -translate-x-1/2 rounded-full border-[3px] border-white bg-[#D79229] shadow-[0_0_0_1px_#D79229] max-lg:left-[26px]"
//             />
//         </motion.div>
//     );
// }

// export default function ProcessSection() {
//     const sectionRef = useRef<HTMLElement | null>(null);

//     const { scrollYProgress } = useScroll({
//         target: sectionRef,
//         offset: ["start 70%", "end 70%"],
//     });

//     const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

//     return (
//         <section
//             ref={sectionRef}
//             className="relative overflow-hidden bg-white py-[110px] max-lg:py-20 max-md:py-16"
//         >
//             <div className="mx-auto max-w-[1220px] px-6">
//                 <motion.div
//                     initial={{ opacity: 0, y: 35 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.7, ease: "easeOut" }}
//                     className="mx-auto mb-14 max-w-[760px] text-center"
//                 >
//                     <span className="mb-5 inline-flex items-center gap-2 text-[14px] font-extrabold uppercase tracking-[3px] text-[#D79229]">
//                         / Our Process
//                     </span>

//                     <h2 className="text-[48px] font-extrabold uppercase leading-[1.08] tracking-[-2px] text-[#050505] max-lg:text-[40px] max-md:text-[32px] max-sm:text-[28px]">
//                         Unveiling The Process Of Precision Brass Parts Production
//                     </h2>
//                 </motion.div>

//                 <BrassPartIcon />

//                 <div className="relative">
//                     {/* Center line */}
//                     <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[#e7e1d7] max-lg:left-[26px]" />

//                     <motion.div
//                         style={{ scaleY: lineScale }}
//                         className="absolute left-1/2 top-0 h-full w-px origin-top -translate-x-1/2 bg-[#D79229] max-lg:left-[26px]"
//                     />

//                     <div className="relative z-10">
//                         {processSteps.map((step, index) => (
//                             <ProcessCard key={step.title} step={step} index={index} />
//                         ))}
//                     </div>

//                     <motion.span
//                         style={{ scale: lineScale }}
//                         className="absolute bottom-0 left-1/2 z-20 h-[28px] w-[2px] -translate-x-1/2 origin-bottom bg-[#D79229] max-lg:left-[26px]"
//                     />
//                 </div>
//             </div>
//         </section>
//     );
// }








// src/components/home/ProcessSection.tsx

"use client";

import {
    motion,
    MotionValue,
    useScroll,
    useSpring,
    useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

type ProcessStep = {
    title: string;
    text: string;
    side: "left" | "right";
};

const processSteps: ProcessStep[] = [
    {
        title: "Inquiry & Quotation",
        text: "Share your brass part drawing, sample, size, material grade, or custom requirement. Our team reviews the details and provides a clear quotation.",
        side: "left",
    },
    {
        title: "Order Confirmation",
        text: "After approval, we confirm material, quantity, tolerance, finishing, delivery timeline, and packaging requirements.",
        side: "right",
    },
    {
        title: "CNC Manufacturing",
        text: "Precision brass inserts, fittings, fasteners, electrical parts, and custom turned components are produced using reliable machining processes.",
        side: "left",
    },
    {
        title: "Quality Inspection",
        text: "Every batch is checked for dimensions, threading, surface finish, material quality, and consistency before dispatch.",
        side: "right",
    },
    {
        title: "Finishing & Packaging",
        text: "Components are cleaned, finished, packed safely, and prepared for local or export delivery as per customer needs.",
        side: "left",
    },
    {
        title: "Dispatch & Support",
        text: "Orders are shipped on time with proper coordination, documentation, and after-sales support for repeat requirements.",
        side: "right",
    },
];

function useElementHeight(ref: React.RefObject<HTMLDivElement | null>) {
    const [height, setHeight] = useState(0);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const updateHeight = () => {
            setHeight(element.offsetHeight);
        };

        updateHeight();

        const observer = new ResizeObserver(updateHeight);
        observer.observe(element);

        window.addEventListener("resize", updateHeight);

        return () => {
            observer.disconnect();
            window.removeEventListener("resize", updateHeight);
        };
    }, [ref]);

    return height;
}

function ArrowNutComponent({ y }: { y: MotionValue<number> }) {
    return (
        <motion.div
            style={{ y }}
            className="pointer-events-none absolute left-1/2 top-0 z-30 flex h-[126px] w-[126px] -translate-x-1/2 items-center justify-center max-lg:left-[26px] max-lg:h-[96px] max-lg:w-[96px]"
        >
            <motion.div
                animate={{
                    rotate: [0, 8, -6, 0],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="relative h-[112px] w-[112px] max-lg:h-[82px] max-lg:w-[82px]"
            >
                {/* soft glow */}
                <div className="absolute inset-[-26px] rounded-full bg-[#D79229]/15 blur-2xl" />

                {/* depth shadow */}
                <div
                    className="absolute left-[12px] top-[8px] h-full w-full bg-[#6f4212] opacity-45 blur-[1px]"
                    style={{
                        clipPath:
                            "polygon(25% 4%, 75% 4%, 100% 50%, 75% 96%, 25% 96%, 0 50%)",
                    }}
                />

                {/* brass hex nut */}
                <div
                    className="absolute inset-0 shadow-[0_28px_60px_rgba(11,31,53,0.18)]"
                    style={{
                        clipPath:
                            "polygon(25% 4%, 75% 4%, 100% 50%, 75% 96%, 25% 96%, 0 50%)",
                        background:
                            "linear-gradient(135deg, #7b4812 0%, #c98224 24%, #f4c76a 50%, #d79229 68%, #7a4512 100%)",
                    }}
                />

                {/* right depth face */}
                <div
                    className="absolute right-0 top-0 h-full w-[42%] opacity-55"
                    style={{
                        clipPath: "polygon(36% 4%, 100% 50%, 36% 96%, 0 74%, 30% 50%, 0 26%)",
                        background:
                            "linear-gradient(90deg, rgba(11,31,53,0.05), rgba(11,31,53,0.42))",
                    }}
                />

                {/* inner hole shadow */}
                <div
                    className="absolute left-1/2 top-1/2 h-[46px] w-[46px] -translate-x-1/2 -translate-y-1/2 bg-[#0B1F35]/20"
                    style={{
                        clipPath:
                            "polygon(25% 4%, 75% 4%, 100% 50%, 75% 96%, 25% 96%, 0 50%)",
                    }}
                />

                {/* inner hole */}
                <div
                    className="absolute left-1/2 top-1/2 h-[39px] w-[39px] -translate-x-1/2 -translate-y-1/2 bg-white shadow-[inset_8px_8px_16px_rgba(11,31,53,0.16)] max-lg:h-[30px] max-lg:w-[30px]"
                    style={{
                        clipPath:
                            "polygon(25% 4%, 75% 4%, 100% 50%, 75% 96%, 25% 96%, 0 50%)",
                    }}
                />

                {/* highlight */}
                <div className="absolute left-[30px] top-[14px] h-[78px] w-[10px] rotate-[22deg] rounded-full bg-white/38 blur-[1px] max-lg:left-[22px] max-lg:top-[10px] max-lg:h-[58px]" />

                {/* dark shine */}
                <div className="absolute right-[24px] top-[18px] h-[70px] w-[8px] rotate-[22deg] rounded-full bg-[#0B1F35]/20 blur-[1px] max-lg:right-[18px] max-lg:top-[13px] max-lg:h-[52px]" />
            </motion.div>
        </motion.div>
    );
}

function ProcessContent({
    step,
    index,
}: {
    step: ProcessStep;
    index: number;
}) {
    return (
        <div className="group max-w-[395px]">
            <span className="mb-5 block text-[13px] font-extrabold uppercase tracking-[3px] text-[#D79229]">
                Step {String(index + 1).padStart(2, "0")}
            </span>

            <h3 className="text-[22px] font-extrabold uppercase leading-[1.15] tracking-[-0.6px] text-[#0B1F35] transition-colors duration-300 group-hover:text-[#D79229] max-sm:text-[19px]">
                {step.title}
            </h3>

            <p className="mt-5 text-[15px] leading-[1.7] text-[#465566] max-sm:text-[14px]">
                {step.text}
            </p>
        </div>
    );
}

function ProcessCard({
    step,
    index,
}: {
    step: ProcessStep;
    index: number;
}) {
    const isLeft = step.side === "left";

    return (
        <motion.div
            initial={{
                opacity: 0,
                x: isLeft ? -45 : 45,
                y: 25,
            }}
            whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
            }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{
                duration: 0.65,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="relative grid min-h-[280px] grid-cols-[1fr_160px_1fr] max-lg:grid-cols-[52px_1fr] max-lg:gap-5 max-md:min-h-[250px]"
        >
            {isLeft && (
                <div className="col-start-1 pr-16 text-left max-lg:col-start-2 max-lg:pr-0">
                    <ProcessContent step={step} index={index} />
                </div>
            )}

            <div className="relative col-start-2 flex justify-center max-lg:col-start-1 max-lg:row-start-1">
                <span className="mt-[8px] h-[14px] w-[14px] rounded-full border-[3px] border-white bg-[#D79229] shadow-[0_0_0_1px_#D79229]" />
            </div>

            {!isLeft && (
                <div className="col-start-3 pl-16 text-left max-lg:col-start-2 max-lg:pl-0">
                    <ProcessContent step={step} index={index} />
                </div>
            )}
        </motion.div>
    );
}

export default function ProcessSection() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const timelineRef = useRef<HTMLDivElement | null>(null);

    const timelineHeight = useElementHeight(timelineRef);

    const { scrollYProgress } = useScroll({
        target: timelineRef,
        offset: ["start 58%", "end 58%"],
    });

    const maxTravel = Math.max(timelineHeight - 126, 0);

    const rawY = useTransform(scrollYProgress, [0, 1], [0, maxTravel]);

    const componentY = useSpring(rawY, {
        stiffness: 90,
        damping: 28,
        mass: 0.45,
    });

    const lineScale = useSpring(scrollYProgress, {
        stiffness: 90,
        damping: 26,
        mass: 0.5,
    });

    return (
        <section
            ref={sectionRef}
            className="relative overflow-hidden bg-white py-[110px] max-lg:py-20 max-md:py-16"
        >
            <div className="mx-auto max-w-[1220px] px-6">
                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="mx-auto mb-20 max-w-[780px] text-center max-md:mb-14"
                >
                    <span className="mb-5 inline-flex items-center gap-2 text-[14px] font-extrabold uppercase tracking-[3px] text-[#D79229]">
                        / Our Process
                    </span>

                    <h2 className="text-[48px] font-extrabold uppercase leading-[1.08] tracking-[-2px] text-[#050505] max-lg:text-[40px] max-md:text-[32px] max-sm:text-[28px]">
                        Unveiling The Process Of Precision Brass Parts Production
                    </h2>
                </motion.div>

                <div ref={timelineRef} className="relative">
                    {/* base center line */}
                    <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[#e7e1d7] max-lg:left-[26px]" />

                    {/* scroll fill line */}
                    <motion.div
                        style={{ scaleY: lineScale }}
                        className="absolute left-1/2 top-0 h-full w-px origin-top -translate-x-1/2 bg-[#D79229] max-lg:left-[26px]"
                    />

                    {/* moving brass component */}
                    <ArrowNutComponent y={componentY} />

                    <div className="relative z-10 pt-[150px]">
                        {processSteps.map((step, index) => (
                            <ProcessCard key={step.title} step={step} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}