import type { MetadataRoute } from "next";
import { absoluteUrl, seoPages } from "@/src/lib/seo";
import { products } from "@/src/components/company/Products/productsData";

export default function sitemap(): MetadataRoute.Sitemap {
  return [...Object.keys(seoPages), ...products.map((product) => `/products/${product.slug}`)]
    .map((path) => ({ url: absoluteUrl(path) }));
}
