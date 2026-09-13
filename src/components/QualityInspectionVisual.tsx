export default function QualityInspectionVisual() {
    return (
        <div className="relative flex min-h-[560px] items-center justify-center overflow-hidden bg-[var(--fg-cream)] max-lg:min-h-[440px] max-md:min-h-[340px]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_60%_54%,rgba(215,146,41,0.12),transparent_60%)]" />
            <svg
                viewBox="0 0 640 560"
                role="img"
                aria-label="A digital caliper inspecting a precision threaded brass adapter, with dimensional, thread and finish inspection guides"
                className="absolute h-full max-h-[560px] w-full max-w-[640px] max-md:w-[125%]"
            >
                <defs>
                    <linearGradient id="qc-brass" x1="0" x2="1">
                        <stop stopColor="#A9610C" />
                        <stop offset=".17" stopColor="#DEA13A" />
                        <stop offset=".32" stopColor="#F7D98A" />
                        <stop offset=".43" stopColor="#F4C66A" />
                        <stop offset=".68" stopColor="#A9610C" />
                        <stop offset=".87" stopColor="#DEA13A" />
                        <stop offset="1" stopColor="#C57A13" />
                    </linearGradient>
                    <linearGradient id="qc-rim" x1="0" y1="0" x2=".8" y2="1">
                        <stop stopColor="#FFF1BF" />
                        <stop offset=".35" stopColor="#F4C66A" />
                        <stop offset=".7" stopColor="#B97B23" />
                        <stop offset="1" stopColor="#F7D98A" />
                    </linearGradient>
                    <linearGradient id="qc-bore" x1="0" y1="0" x2="0" y2="1">
                        <stop stopColor="#4C3416" />
                        <stop offset=".6" stopColor="#80511A" />
                        <stop offset="1" stopColor="#D5A24D" />
                    </linearGradient>
                    <linearGradient id="qc-steel" x1="0" y1="0" x2="0" y2="1">
                        <stop stopColor="#FFFFFF" />
                        <stop offset=".18" stopColor="#CCD1D3" />
                        <stop offset=".5" stopColor="#F1F2F0" />
                        <stop offset=".7" stopColor="#9DA6AA" />
                        <stop offset="1" stopColor="#DEE2E2" />
                    </linearGradient>
                    <linearGradient id="qc-jaw" x1="0" x2="1">
                        <stop stopColor="#879298" />
                        <stop offset=".35" stopColor="#F3F4F1" />
                        <stop offset=".65" stopColor="#C3CBCE" />
                        <stop offset="1" stopColor="#78868D" />
                    </linearGradient>
                    <radialGradient id="qc-shadow">
                        <stop stopColor="#6A4B22" stopOpacity=".2" />
                        <stop offset="1" stopColor="#6A4B22" stopOpacity="0" />
                    </radialGradient>
                </defs>

                {/* Restrained drawing geometry, separate from the inspected part. */}
                <g fill="none" stroke="var(--fg-navy)" strokeWidth=".8" opacity=".13" className="max-md:hidden">
                    <circle cx="355" cy="310" r="171" strokeDasharray="3 7" />
                    <path d="M355 99V488M147 310H560M202 231A172 172 0 0 1 490 203M470 444A172 172 0 0 1 219 414" />
                    <path d="M240 112V144M464 112V144M240 126H464M240 126l7-3m-7 3 7 3M464 126l-7-3m7 3-7 3" />
                    <path d="M510 230h24m-12 0v155m-12 0h24m-12-155-3 7m3-7 3 7m-3 148-3-7m3 7 3-7" />
                </g>
                <g fill="var(--fg-slate)" fontSize="11" letterSpacing="1" opacity=".45" className="max-lg:hidden">
                    <text x="328" y="113">Ø20.00</text>
                    <text x="538" y="317" transform="rotate(90 538 317)">±0.02 mm</text>
                    <text x="151" y="443">Ø12.00</text>
                    <text x="453" y="430">THREAD CHECK</text>
                </g>
                <ellipse cx="362" cy="444" rx="157" ry="29" fill="url(#qc-shadow)" />

                {/* One turned adapter: lower collar, hexagonal flats and external thread. */}
                <g strokeLinejoin="round">
                    <path d="M281 359H429V409C429 443 281 443 281 409Z" fill="url(#qc-brass)" stroke="#B27A2B" strokeWidth=".7" />
                    <ellipse cx="355" cy="406" rx="74" ry="23" fill="none" stroke="#FFF0BD" strokeOpacity=".65" />
                    <path d="M281 413C303 443 410 443 429 413" fill="none" stroke="#79521D" strokeOpacity=".55" />
                    <path d="M244 316L300 283H411L466 316V365L411 398H300L244 365Z" fill="url(#qc-rim)" stroke="#C08B38" strokeWidth=".8" />
                    <path d="M244 316L300 345V398L244 365Z" fill="#BB812A" />
                    <path d="M300 345H411V398H300Z" fill="url(#qc-brass)" />
                    <path d="M411 345L466 316V365L411 398Z" fill="#9E641C" />
                    <path d="M245 317L300 346H411L465 317M301 348V394" fill="none" stroke="#F7D98A" strokeWidth="1.5" />
                    <path d="M277 235H433V311C433 346 277 346 277 311Z" fill="url(#qc-brass)" stroke="#A96E23" strokeWidth=".8" />
                    {Array.from({ length: 10 }, (_, index) => (
                        <g key={index}>
                            <path d={`M277 ${243 + index * 8}C302 ${267 + index * 8} 408 ${267 + index * 8} 433 ${243 + index * 8}`} fill="none" stroke="#82551C" strokeWidth="3.5" />
                            <path d={`M277 ${241 + index * 8}C304 ${263 + index * 8} 406 ${263 + index * 8} 433 ${241 + index * 8}`} fill="none" stroke="url(#qc-rim)" strokeWidth="2.5" />
                        </g>
                    ))}
                    <ellipse cx="355" cy="235" rx="78" ry="26" fill="url(#qc-rim)" stroke="#FBE7AD" strokeWidth="1.2" />
                    <ellipse cx="355" cy="235" rx="53" ry="17" fill="url(#qc-bore)" stroke="#B7883F" />
                    <path d="M303 237C316 221 393 221 407 237" fill="none" stroke="#5E401B" strokeWidth="3" />
                    <path d="M306 242C326 255 386 255 405 242" fill="none" stroke="#FFE5A0" strokeWidth="1.4" />
                    <path d="M305 350H308V390H305Z" fill="#FFF0BD" opacity=".32" />
                </g>

                {/* Caliper jaws contact the opposing outer faces of the hex. */}
                <g stroke="#7E8A90" strokeWidth=".8" strokeLinejoin="round">
                    <path d="M183 167H503V190H183Z" fill="url(#qc-steel)" />
                    <path d="M503 175H534V181H503Z" fill="#B7C0C3" />
                    <path d="M221 162H244V353L231 343L221 302Z" fill="url(#qc-jaw)" />
                    <path d="M466 172H485V300L478 341L466 353Z" fill="url(#qc-jaw)" />
                    <path d="M242 301V351M467 301V351" stroke="#F7F8F5" strokeWidth="2" />
                    {Array.from({ length: 32 }, (_, index) => (
                        <path key={index} d={`M${248 + index * 7} 168v${index % 5 === 0 ? 10 : 5}`} strokeWidth=".65" />
                    ))}
                    <rect x="409" y="150" width="79" height="53" rx="3" fill="url(#qc-steel)" />
                    <rect x="418" y="159" width="59" height="27" rx="1" fill="#D9DDD0" stroke="#8D9894" />
                    <rect x="445" y="140" width="15" height="10" rx="2" fill="url(#qc-jaw)" />
                    <path d="M443 143H461M443 146H461" strokeWidth=".6" />
                    <circle cx="422" cy="195" r="2" fill="var(--fg-navy)" stroke="none" />
                    <circle cx="432" cy="195" r="2" fill="var(--fg-gold)" stroke="none" />
                </g>
                <text x="424" y="178" fill="#354440" fontSize="17" fontFamily="monospace" letterSpacing="1">20.00</text>

                <g fill="none" stroke="var(--fg-slate)" strokeWidth=".7" opacity=".42" className="max-md:hidden">
                    <path d="M118 238H177L220 280M440 280L492 256H549M381 378L410 456H451" />
                    <circle cx="220" cy="280" r="2" fill="var(--fg-gold)" stroke="none" />
                    <circle cx="440" cy="280" r="2" fill="var(--fg-gold)" stroke="none" />
                    <circle cx="381" cy="378" r="2" fill="var(--fg-gold)" stroke="none" />
                </g>
                <g fill="var(--fg-navy)" fontSize="10" letterSpacing="2" opacity=".6" className="max-md:hidden">
                    <text x="118" y="228">DIMENSION</text>
                    <text x="499" y="247">THREAD</text>
                    <text x="456" y="460">FINISH</text>
                </g>
            </svg>
            <div className="absolute bottom-[9%] right-[10%] flex items-center gap-3 bg-[var(--fg-navy)] px-5 py-3 text-white shadow-[0_8px_24px_rgba(11,31,53,0.08)] max-md:bottom-5 max-md:right-5 max-md:px-4 max-md:py-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--fg-gold)]">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true"><path d="m6 12 4 4 8-8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
                <span className="text-[10px] font-extrabold uppercase leading-[1.6] tracking-[2.5px]">QC<br />Passed</span>
            </div>
        </div>
    );
}
