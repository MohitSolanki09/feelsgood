// src/components/company/Products/BrassProductVisual.tsx

import type { ProductVisual } from "./productsData";

type BrassProductVisualProps = {
    type: ProductVisual;
};

export default function BrassProductVisual({ type }: BrassProductVisualProps) {
    return (
        <div className="relative flex h-full min-h-[360px] items-center justify-center overflow-hidden bg-[#F8F3EA]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(215,146,41,0.24),transparent_32%),radial-gradient(circle_at_80%_80%,rgba(11,31,53,0.12),transparent_30%)]" />

            <div className="absolute left-8 top-8 h-20 w-20 rounded-full border border-[#D79229]/30" />
            <div className="absolute bottom-10 right-10 h-28 w-28 rounded-full border border-[#0B1F35]/10" />

            {type === "insert" && (
                <div className="relative h-[210px] w-[210px] rounded-full bg-gradient-to-br from-[#F5C66E] via-[#D79229] to-[#9B5B17] shadow-2xl">
                    <div className="absolute inset-[38px] rounded-full bg-[#F8F3EA] shadow-inner" />
                    <div className="absolute inset-x-8 top-[50%] h-[2px] bg-[#0B1F35]/25" />
                    <div className="absolute inset-y-8 left-[50%] w-[2px] bg-[#0B1F35]/25" />
                </div>
            )}

            {type === "fitting" && (
                <div className="relative h-[150px] w-[280px] rounded-[80px] bg-gradient-to-r from-[#9B5B17] via-[#D79229] to-[#F5C66E] shadow-2xl">
                    <div className="absolute -left-10 top-1/2 h-[96px] w-[96px] -translate-y-1/2 rounded-full bg-[#D79229]" />
                    <div className="absolute -right-10 top-1/2 h-[96px] w-[96px] -translate-y-1/2 rounded-full bg-[#D79229]" />
                    <div className="absolute left-1/2 top-1/2 h-[72px] w-[170px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F8F3EA]" />
                </div>
            )}

            {type === "fastener" && (
                <div className="relative h-[260px] w-[120px] rotate-[-18deg] rounded-t-[44px] bg-gradient-to-b from-[#F5C66E] via-[#D79229] to-[#9B5B17] shadow-2xl">
                    <div className="absolute -top-12 left-1/2 h-[95px] w-[170px] -translate-x-1/2 rounded-[30px] bg-[#D79229]" />
                    <div className="absolute left-0 top-16 h-[3px] w-full bg-[#0B1F35]/20" />
                    <div className="absolute left-0 top-28 h-[3px] w-full bg-[#0B1F35]/20" />
                    <div className="absolute left-0 top-40 h-[3px] w-full bg-[#0B1F35]/20" />
                </div>
            )}

            {type === "electrical" && (
                <div className="relative h-[210px] w-[310px] rounded-[28px] bg-gradient-to-br from-[#F5C66E] via-[#D79229] to-[#9B5B17] shadow-2xl">
                    <div className="absolute left-8 top-8 h-10 w-10 rounded-full bg-[#F8F3EA]" />
                    <div className="absolute right-8 top-8 h-10 w-10 rounded-full bg-[#F8F3EA]" />
                    <div className="absolute bottom-10 left-8 h-7 w-[250px] rounded-full bg-[#0B1F35]/20" />
                </div>
            )}



            {type === "custom" && (
                <div
                    className="relative h-[230px] w-[230px] bg-gradient-to-br from-[#F5C66E] via-[#D79229] to-[#9B5B17] shadow-2xl"
                    style={{
                        clipPath:
                            "polygon(50% 0%, 90% 22%, 90% 72%, 50% 100%, 10% 72%, 10% 22%)",
                    }}
                >
                    <div
                        className="absolute inset-[52px] bg-[#F8F3EA]"
                        style={{
                            clipPath:
                                "polygon(50% 0%, 90% 22%, 90% 72%, 50% 100%, 10% 72%, 10% 22%)",
                        }}
                    />
                </div>
            )}
        </div>
    );
}