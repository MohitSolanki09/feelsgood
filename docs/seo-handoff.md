# Production SEO deployment handoff

Canonical origin: https://feelgoodbrass.com

## Scope

- Canonical, sitemap, robots, social and business-schema URLs share the production origin. Page URLs end with a slash; image and metadata files do not.
- Shorter branded titles retain page-specific intent. Existing unique descriptions, one H1 per content page, image alt text, factual LocalBusiness and BreadcrumbList data are preserved. About timeline heading tags now follow H2 -> H3 -> H4 with unchanged text and CSS classes.
- The homepage and About already identify Jamnagar, Gujarat, India. Manufacturing's existing paragraph now identifies the same location. Business contact details remain unchanged.
- Removed the obsolete brass-electrical-parts dataset entry: its generic drawing-based description and component list duplicated custom-brass-components, and it was not a featured product. Nine legitimate product routes remain. No product imagery or listing design changed.
- No Product offers, reviews, ratings, opening hours or social profiles were invented. Catalogue product-family pages retain factual business and breadcrumb schemas.
- Static export, unoptimized images, trailing slashes, force-static robots/sitemap and the Webpack production command are preserved.

## Build and output validation

Run npm run build, then node tests/seo-build.test.cjs. The test reads out/ directly and validates all 19 sitemap pages: unique titles/descriptions, self-canonicals, social metadata, indexability, one H1, heading order, image alt attributes, internal route links, business and breadcrumb JSON-LD, robots and sitemap.

Final validation: Webpack production build PASS; out/ generated; all 19 content-page checks PASS; zero former hosting-domain references in source or generated text files.

These checks verify generated files, not Google indexing or ranking. No live deployment is performed by this task.

## Upload to shared hosting

Upload the entire CONTENTS of G:/feelsgood/out into public_html, preserving filenames and directories. Do not upload the enclosing out directory, source files, node_modules or .env.local. Include all _next assets and all generated text payload files, not just HTML.

The exact relative upload file list is in docs/seo-upload-files.txt; each line maps out/<path> to public_html/<path>. Replace all listed files together so HTML and assets come from the same build. Preserve host-managed files such as existing .htaccess and verification files.

Remove any old public_html/products/brass-electrical-parts/ export after backing it up. If that historical URL has links or search traffic, configure a permanent redirect in the hosting panel to https://feelgoodbrass.com/products/custom-brass-components/.

## Hosting findings

Both https://www.feelgoodbrass.com and https://feelgoodbrass.com returned HTTP 200 during the live header check. Neither response contained X-Robots-Tag. Configure a permanent www-to-non-www redirect in Hostinger; no server rules were invented in this repository. Also verify HTTP-to-HTTPS redirects and that missing pages return HTTP 404 after upload.

## Manual after-deployment checklist

1. Verify the Google Search Console Domain Property feelgoodbrass.com using the owner-provided DNS record.
2. Submit https://feelgoodbrass.com/sitemap.xml.
3. Use URL Inspection and Request Indexing for:
   - https://feelgoodbrass.com/
   - https://feelgoodbrass.com/products/
   - https://feelgoodbrass.com/products/brass-inserts/
   - https://feelgoodbrass.com/products/brass-fittings/
   - https://feelgoodbrass.com/products/brass-fasteners/
   - https://feelgoodbrass.com/company/about/
   - https://feelgoodbrass.com/company/manufacturing/
4. Check deployed canonicals, robots and sitemap; run Google's Rich Results Test for business/breadcrumb markup. Review Search Console indexing reports.
5. Claim/verify the genuine Google Business Profile if eligible. Keep the real business name (without added keywords), address, phones and website consistent. Choose accurate available categories, add actual products and photos, and set owner-confirmed opening hours. Request honest customer reviews without incentives; do not create duplicate listings.

Search visibility and rankings are not guaranteed.

Reference: https://developers.google.com/search/docs/appearance/structured-data/local-business
