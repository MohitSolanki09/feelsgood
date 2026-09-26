import LegalPage from "@/src/components/legal/LegalPage";
import { pageMetadata } from "@/src/lib/seo";

export const metadata = pageMetadata("Terms & Conditions", "Read the Terms & Conditions governing use of the Feel Good Brass Industry website, product information, quotations, custom manufacturing and related business enquiries.", "/terms-and-conditions");

const sections = [
  {
    "title": "Website Use",
    "blocks": [
      "This website is provided for general information about Feel Good Brass Industry, our brass components, manufacturing capabilities, quality processes, and related services.",
      "Users must not misuse the website or attempt to interfere with its normal operation."
    ]
  },
  {
    "title": "Product Information",
    "blocks": [
      "Product images, specifications, dimensions, materials, finishes, and descriptions displayed on the website are provided for general reference.",
      "Actual products may vary depending on drawings, samples, tolerances, materials, quantities, finishes, and customer requirements."
    ]
  },
  {
    "title": "Quotations & Orders",
    "blocks": [
      "Website enquiries do not constitute confirmed orders.",
      "Pricing, quantities, specifications, delivery schedules, payment terms, and other commercial conditions are confirmed separately through an official quotation or direct communication from Feel Good Brass Industry."
    ]
  },
  {
    "title": "Custom Manufacturing",
    "blocks": [
      "Custom brass components may be manufactured according to customer:",
      [
        "drawings",
        "samples",
        "specifications",
        "dimensions",
        "tolerances",
        "material requirements"
      ],
      "Customers are responsible for providing accurate technical information before production."
    ]
  },
  {
    "title": "Intellectual Property",
    "blocks": [
      "Website content, branding, graphics, photographs, text, and other materials belong to Feel Good Brass Industry unless otherwise stated.",
      "They may not be copied, reproduced, or commercially used without prior permission."
    ]
  },
  {
    "title": "Third-Party Links",
    "blocks": [
      "The website may contain links to services such as:",
      [
        "LinkedIn",
        "Instagram",
        "WhatsApp",
        "other external websites"
      ],
      "Feel Good Brass Industry is not responsible for the content, privacy practices, or availability of third-party platforms."
    ]
  },
  {
    "title": "Limitation of Liability",
    "blocks": [
      "Reasonable efforts are made to keep website information accurate and updated.",
      "However, Feel Good Brass Industry does not guarantee that all website information will always be complete or error-free.",
      "Commercial and technical requirements should be confirmed directly before placing an order."
    ]
  },
  {
    "title": "Changes to These Terms",
    "blocks": [
      "Feel Good Brass Industry may update these Terms & Conditions when necessary.",
      "Updated terms will be published on this page."
    ]
  },
  {
    "title": "Contact",
    "blocks": [
      "For questions regarding these Terms & Conditions, contact Feel Good Brass Industry using the contact information available on the website."
    ]
  }
];

export default function Page() {
  return <LegalPage title="Terms & Conditions" path="/terms-and-conditions" intro="Welcome to the Feel Good Brass Industry website. By accessing or using this website, you agree to these Terms & Conditions." sections={sections} />;
}
