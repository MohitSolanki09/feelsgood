import Header from "@/src/components/common/Header/Header";
import Footer from "@/src/components/common/Footer/Footer";
import FloatingActions from "@/src/components/common/FloatingActions";
import { business } from "@/src/lib/seo";

// Keep site chrome inside successful routes, outside the root 404 boundary.
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <FloatingActions phone={business.telephone} />
    </>
  );
}
