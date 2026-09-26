import { pageMetadata, seoPages } from "@/src/lib/seo";
import { BreadcrumbSchema } from "@/src/components/common/StructuredData";
// src/app/products/page.tsx

import ProductsLanding from "@/src/components/company/Products/ProductsLanding";

export const metadata = pageMetadata(...seoPages["/products"], "/products");

export default function ProductsPage() {
    return <><BreadcrumbSchema items={[{ name: "Products", path: "/products" }]} /><ProductsLanding /></>;
}