import { pageMetadata, business, defaultDescription, siteUrl } from "@/src/lib/seo";
import { BusinessSchema } from "@/src/components/common/StructuredData";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import MotionProvider from "@/src/components/common/MotionProvider";
import "lenis/dist/lenis.css";
import Header from "@/src/components/common/Header/Header";
import Footer from "@/src/components/common/Footer/Footer";
import FloatingActions from "@/src/components/common/FloatingActions";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  ...pageMetadata("Brass Parts Manufacturer in Jamnagar", defaultDescription, "/"),
  metadataBase: new URL(siteUrl),
  title: { default: `${business.name} | Brass Parts Manufacturer in Jamnagar`, template: `%s | ${business.name}` },
  robots: { index: true, follow: true },
  icons: {
    icon: "/images/logo/favicon_logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <BusinessSchema />
        <MotionProvider />
        <Header />
        {children}
        <Footer />
        <FloatingActions phone={business.telephone} />
      </body>
    </html>
  );
}
