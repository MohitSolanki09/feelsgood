# SEO implementation and deployment handoff

## Production URL

The project contained no custom production domain, environment domain setting, canonical configuration, or hosting redirect. The supplied live URL, `https://feelsgoodbrass.netlify.app`, is the single origin in `src/lib/seo.ts`. If a custom domain is adopted, update this value and configure hosting redirects to that preferred domain before rebuilding.

## Implemented

- Default metadata, title template, index/follow, Open Graph and Twitter large-image metadata. The existing logo is the default social image; product pages with a photo use that photo.
- Unique titles, descriptions, production canonicals and social metadata on all 18 content routes, including 10 product detail pages.
- One server-rendered LocalBusiness entity per page. LocalBusiness is an Organization subtype; no redundant Organization entity is emitted. It contains the existing business name, phones, email and PostalAddress. No reviews, ratings, prices, awards, opening hours or unsupported business facts were invented.
- BreadcrumbList on all internal content pages; product breadcrumbs include Products. The `/company` redirect is excluded from the sitemap.
- Native Next.js `sitemap.ts` and `robots.ts`. Sitemap dates are omitted rather than fabricated.
- Existing unique product H1s preserved. Contact card headings use H2 to avoid skipping from H1 to H3. Image alt attributes audited; product photo descriptions clarified.
- Natural Jamnagar/Gujarat/India references in Home, About and Footer; the existing full address is also displayed on Contact.
- About product text links to Products; Products copy links to Quality. Existing Home/Quality/Gallery/product inquiry links retained.
- Contact/Header placeholder phones replaced with the existing primary Footer number. Both Footer telephone destinations now match their displayed numbers. Contact telephone URLs use normalized digits.
- The Footer's displayed `feelgoodbrass@gmail.com` address is used consistently in Contact, Header, Footer, form destination and schema. This resolves the previous mismatch with `info@feelgoodbrass.com`; confirm the preferred mailbox with the business owner.
- Missing legal-page links and empty social destinations are now plain labels/icons. Their visual slots remain; no legal policies or social profiles were fabricated.
- No responsive, Lenis, animation or global style implementation was changed by the SEO work.

## Validation

Run `npm run build`, then `node tests/seo-build.test.cjs`. The test reads production HTML and checks every sitemap page for a unique title/description, one canonical, indexability, Open Graph/Twitter tags, one H1, heading order, image alt attributes, valid JSON-LD, one business entity, correct breadcrumbs, and valid internal route destinations. It also checks robots and the 18-entry sitemap. Existing motion lifecycle tests remain available at `node tests/motion-provider.test.cjs`.

These checks validate code and build output, not Google's indexing or rich-result eligibility. Product schema was deliberately omitted: these pages describe product families and inquiries without verified offers/reviews.

Final result: production build passed (23 generated entries); all 18 content-route SEO checks and all four existing motion lifecycle tests passed. Browser spot checks of About, Products and Contact at 320, 768 and 1440 pixels showed no horizontal overflow and preserved the 84px Header. Home also passed the 320px overflow check.

## Files changed for SEO

- `src/lib/seo.ts`
- `src/components/common/StructuredData.tsx`
- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/app/company/about/page.tsx`
- `src/app/company/manufacturing/page.tsx`
- `src/app/company/qualitycertifications/page.tsx`
- `src/app/products/page.tsx`
- `src/app/products/[slug]/page.tsx`
- `src/app/quality/page.tsx`
- `src/app/gallery/page.tsx`
- `src/app/contact/page.tsx`
- `src/app/robots.ts`
- `src/app/sitemap.ts`
- `src/components/About/CompanyOverview.tsx`
- `src/components/Home/BrassValueSection.tsx`
- `src/components/common/Header/Header.tsx`
- `src/components/common/Footer/Footer.tsx`
- `src/components/company/Products/ProductDetail.tsx`
- `src/components/company/Products/ProductsLanding.tsx`
- `tests/seo-build.test.cjs`
- `docs/seo-handoff.md`

Other pre-existing working changes belong to the earlier responsive/animation work and were preserved.

## Manual steps after deployment

1. Deploy the tested code; this task does not publish it.
2. Verify the live site's preferred domain, redirects, HTTP status codes and absence of hosting-level `X-Robots-Tag: noindex`. The research tool could not fetch the live Netlify homepage, so hosting-level indexability is not confirmed here.
3. In Google Search Console, verify a URL-prefix property for the Netlify address using an owner-provided method. A future custom domain can use DNS verification. No verification token has been invented or added.
4. Submit `https://feelsgoodbrass.netlify.app/sitemap.xml`, inspect important URLs, and request indexing.
5. Run Google's Rich Results Test and Schema.org Validator against the deployed pages. Monitor Search Console for crawl/indexing issues; rankings and indexing are not guaranteed.
6. Confirm the preferred public email, publish owner-approved legal pages, and supply genuine social profile URLs before re-enabling those links.
7. Verify/update the real Google Business Profile with consistent name, address and phone information. No account changes or listings were created in this task.

Reference: https://developers.google.com/search/docs/appearance/structured-data/local-business
