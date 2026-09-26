import LegalPage from "@/src/components/legal/LegalPage";
import { pageMetadata } from "@/src/lib/seo";

export const metadata = pageMetadata("Privacy Policy", "Learn how Feel Good Brass Industry handles information submitted through website enquiries, email, phone, WhatsApp and related business communications.", "/privacy-policy");

const sections = [
  {
    "title": "Information We Collect",
    "blocks": [
      "When users contact us through:",
      [
        "website contact form",
        "email",
        "phone",
        "WhatsApp"
      ],
      "we may receive information such as:",
      [
        "name",
        "email address",
        "phone number",
        "company name",
        "product requirements",
        "drawings",
        "specifications",
        "enquiry/message details"
      ]
    ]
  },
  {
    "title": "How We Use Information",
    "blocks": [
      "Submitted information may be used to:",
      [
        "respond to enquiries",
        "provide quotations",
        "understand product requirements",
        "communicate regarding manufacturing requirements",
        "manage business communications",
        "improve customer service"
      ]
    ]
  },
  {
    "title": "Contact Form",
    "blocks": [
      "Information submitted through the website contact form may be delivered to our business email account so our team can respond to the enquiry."
    ]
  },
  {
    "title": "Cookies & Analytics",
    "blocks": [
      "If basic cookies or analytics tools are introduced, they may be used to understand website traffic, visitor interactions, device/browser information, and website performance to improve website functionality and user experience."
    ]
  },
  {
    "title": "WhatsApp & Social Media",
    "blocks": [
      "The website may provide links to:",
      [
        "WhatsApp",
        "LinkedIn",
        "Instagram"
      ],
      "When users access those services, the privacy policies and terms of those third-party platforms apply."
    ]
  },
  {
    "title": "Sharing of Information",
    "blocks": [
      "Feel Good Brass Industry does not sell personal information.",
      "Information may be shared only when reasonably necessary with service providers or business partners to:",
      [
        "operate the website",
        "communicate with customers",
        "process business enquiries",
        "fulfil legitimate business requirements"
      ]
    ]
  },
  {
    "title": "Data Security",
    "blocks": [
      "Reasonable measures are taken to protect information submitted through the website.",
      "However, no internet-based system can guarantee absolute security."
    ]
  },
  {
    "title": "Data Retention",
    "blocks": [
      "Information may be retained for as long as reasonably necessary to:",
      [
        "respond to enquiries",
        "manage business communications",
        "maintain business records",
        "satisfy legitimate operational or legal requirements"
      ]
    ]
  },
  {
    "title": "Your Choices",
    "blocks": [
      "Users may contact Feel Good Brass Industry to request correction or deletion of information previously submitted, subject to legitimate business or legal retention requirements."
    ]
  },
  {
    "title": "Policy Updates",
    "blocks": [
      "This Privacy Policy may be updated periodically.",
      "Any updated version will be published on this page."
    ]
  },
  {
    "title": "Contact",
    "blocks": [
      "For privacy-related questions, contact Feel Good Brass Industry using the email or contact information provided on the website."
    ]
  }
];

export default function Page() {
  return <LegalPage title="Privacy Policy" path="/privacy-policy" intro="Feel Good Brass Industry respects your privacy and is committed to handling information submitted through our website responsibly." sections={sections} />;
}
