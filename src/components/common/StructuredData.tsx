import { absoluteUrl, business, defaultDescription, socialImage } from "@/src/lib/seo";

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

export function BusinessSchema() {
  return <JsonLd data={{
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": absoluteUrl("/#business"),
    name: business.name,
    url: absoluteUrl("/"),
    logo: absoluteUrl(socialImage),
    image: absoluteUrl(socialImage),
    description: defaultDescription,
    telephone: business.telephone,
    email: business.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.streetAddress,
      addressLocality: business.addressLocality,
      addressRegion: business.addressRegion,
      postalCode: business.postalCode,
      addressCountry: business.addressCountry,
    },
    contactPoint: [{ "@type": "ContactPoint", telephone: business.additionalTelephone, contactType: "sales" }],
  }} />;
}

export function BreadcrumbSchema({ items }: { items: { name: string; path: string }[] }) {
  return <JsonLd data={{
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map((item, index) => ({
      "@type": "ListItem", position: index + 1, name: item.name, item: absoluteUrl(item.path),
    })),
  }} />;
}
