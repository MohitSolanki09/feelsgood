"use client";

import { useRef, useState, type FormEvent } from "react";
import styles from "./ContactForm.module.css";

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

export default function ContactForm({ inquiryTypes }: { inquiryTypes: string[] }) {
    const [submitting, setSubmitting] = useState(false);
    const inFlight = useRef(false);
    const dialogRef = useRef<HTMLDialogElement>(null);
    const [notification, setNotification] = useState<"success" | "error">("success");

    function showNotification(type: "success" | "error") {
        setNotification(type);
        dialogRef.current?.showModal();
    }

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = event.currentTarget;
        if (inFlight.current || !form.reportValidity()) return;

        const data = new FormData(form);
        const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
        if (!accessKey?.trim() || data.get("botcheck")) {
            showNotification("error");
            return;
        }

        inFlight.current = true;
        setSubmitting(true);
        try {
            const field = (name: string) => String(data.get(name) ?? "").trim();
            const formattedMessage = `NEW WEBSITE ENQUIRY
Feel Good Brass Industry

----------------------------------------

CUSTOMER DETAILS

Name:
${field("name")}

Company:
${field("company") || "Not provided"}

Email:
${field("email")}

Phone:
${field("phone") || "Not provided"}

Product / Requirement:
${field("product") || "Not specified"}

----------------------------------------

MESSAGE

${field("message")}

----------------------------------------

Submitted from:
Feel Good Brass Industry Website`;

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    email: field("email"),
                    message: formattedMessage,
                    botcheck: data.get("botcheck") ?? "",
                    access_key: accessKey,
                    subject: "New Website Enquiry | Feel Good Brass Industry",
                    from_name: "Feel Good Brass Industry Website",
                }),
            });
            const result = await response.json();
            if (!response.ok || result?.success !== true) throw new Error("Submission failed");
            showNotification("success");
            form.reset();
        } catch {
            showNotification("error");
        } finally {
            inFlight.current = false;
            setSubmitting(false);
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="grid gap-6 bg-[#F8F3EA] p-12 max-md:p-6"
        >
            <input type="checkbox" name="botcheck" hidden tabIndex={-1} autoComplete="off" />
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
                disabled={submitting}
                aria-busy={submitting}
                className="group inline-flex h-[64px] w-fit items-center justify-center gap-4 bg-[#D79229] px-9 text-[14px] font-extrabold uppercase tracking-[3px] text-white transition-colors duration-300 hover:bg-[#0B1F35]"
            >
                {submitting ? "SENDING..." : "SEND MESSAGE"}
                <ArrowIcon />
            </button>
            <dialog
                ref={dialogRef}
                className={styles.popup}
                aria-labelledby="contact-notification-title"
                aria-describedby="contact-notification-message"
                data-lenis-prevent
            >
                <svg className={styles.icon} viewBox="0 0 64 64" fill="none" aria-hidden="true">
                    <circle cx="32" cy="32" r="29" stroke="currentColor" strokeWidth="1.5" />
                    {notification === "success" ? (
                        <path d="m19 32 9 9 17-18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    ) : (
                        <path d="M32 18v18m0 9v1" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    )}
                </svg>
                <h2 id="contact-notification-title" className={styles.title}>
                    {notification === "success" ? "Message Sent Successfully!" : "Unable to Send Message"}
                </h2>
                <p id="contact-notification-message" className={styles.message}>
                    {notification === "success" ? (
                        <>Thank you for contacting Feel Good Brass Industry.<br />We have received your enquiry and will contact you soon.</>
                    ) : (
                        <>We couldn't send your enquiry right now.<br />Please try again in a moment.</>
                    )}
                </p>
                <button type="button" autoFocus className={styles.confirm} onClick={() => dialogRef.current?.close()}>
                    {notification === "success" ? "OK" : "TRY AGAIN"}
                </button>
            </dialog>
        </form>
    );
}
