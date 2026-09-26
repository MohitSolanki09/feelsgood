import type { Metadata } from "next";

// No custom production domain is configured; this is the supplied live site.
export const siteUrl = "https://feelsgoodbrass.netlify.app";
export const business = {
  name: "Feel Good Brass Industry",
  email: "feelgoodbrass@gmail.com",
  telephone: "+919316636271",
  additionalTelephone: "+919723541192",
  streetAddress: "Plot No. 50/2, Survey No.45, FCI Godown Zone, Lalpur Road, Dared",
  addressLocality: "Jamnagar",
  addressRegion: "Gujarat",
  postalCode: "361004",
  addressCountry: "IN",
};
export const defaultDescription = "Feel Good Brass Industry manufactures precision brass inserts, fittings, fasteners and custom components in Jamnagar, Gujarat, India.";
export const socialImage = "/images/logo/FEEL_GOOD_LOGO.png";
export const absoluteUrl = (path: string) => new URL(path, siteUrl).toString();

export function pageMetadata(title: string, description: string, path: string, image = socialImage): Metadata {
  const fullTitle = `${title} | ${business.name}`;
  return {
    title,
    description,
    alternates: { canonical: absoluteUrl(path) },
    openGraph: {
      title: fullTitle, description, url: absoluteUrl(path),
      siteName: business.name, type: "website", locale: "en_IN",
      images: [{ url: absoluteUrl(image), alt: business.name }],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [absoluteUrl(image)] },
  };
}

export const seoPages = {
  "/": ["Brass Parts Manufacturer in Jamnagar", defaultDescription],
  "/company/about": ["About Our Brass Manufacturing Company", "Learn about Feel Good Brass Industry, a precision brass components manufacturer in Jamnagar, Gujarat, serving industrial and custom assembly requirements."],
  "/company/manufacturing": ["Precision Brass Manufacturing in Jamnagar", "Explore brass turning, threading, machining and finishing capabilities at Feel Good Brass Industry in Jamnagar, Gujarat."],
  "/company/qualitycertifications": ["Quality Processes & Manufacturing Standards", "Explore material checks, dimensional inspection and manufacturing standards used for brass components at Feel Good Brass Industry."],
  "/products": ["Brass Parts & Components from Jamnagar", "Browse brass inserts, fittings, fasteners and custom components manufactured by Feel Good Brass Industry in Jamnagar, Gujarat."],
  "/quality": ["Brass Component Quality & Inspection", "See how material selection, thread checks, dimensional inspection and final review support reliable brass components at Feel Good Brass Industry."],
  "/gallery": ["Brass Parts Manufacturing Gallery", "Explore the Feel Good Brass Industry gallery of brass inserts, fittings, fasteners and custom machined components from Jamnagar, Gujarat."],
  "/contact": ["Contact Our Jamnagar Brass Manufacturing Team", "Contact Feel Good Brass Industry in Dared, Jamnagar, Gujarat. Share drawings, samples and quantities for brass parts and custom component inquiries."],
} satisfies Record<string, [string, string]>;
