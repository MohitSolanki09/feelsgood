// src/app/products/[slug]/page.tsx

import { notFound } from "next/navigation";
import ProductDetail from "@/src/components/company/Products/ProductDetail";
import { getProductBySlug, products } from "@/src/components/company/Products/productsData";

export function generateStaticParams() {
    return products.map((product) => ({
        slug: product.slug,
    }));
}

export default async function ProductPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const product = getProductBySlug(slug);

    if (!product) {
        notFound();
    }

    return <ProductDetail product={product} />;
}