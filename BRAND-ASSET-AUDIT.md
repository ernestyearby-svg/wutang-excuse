# Wu-Tang Brands globe review audit

Branch: `brand-globe-review`. REVIEW ONLY. No merge to main or production deployment is authorized.

## Result

All six originally flagged artwork families have replacement assets in active use. Five additional merchandise families had small standalone marks corrected during the full-resolution review. No standalone Wu marks were identified in the final active imagery after these corrections. Original files remain retained and are not referenced by the two active pages.

Primary consumer identity: WU-TANG TEQUILA. Edition identifier: WU-TANG BRAND EDITION. Collector Goods public copy and active corrected merch imagery: zero EXCUSE branding. Original beverage labels and legitimate EXCUSE collaboration prose remain by contextual exception; these are not Collector Goods branding.

## Source fidelity

`wu-tang-tequila-globe.png` derives from the supplied JPG through neutral-white background alpha removal only. Source RGB channels are byte-identical before proportional placement; no symbol tracing, redraw, recoloring, filters or generative logo substitution was used. The original JPG is retained. Composites use black inset surfaces to cover legacy marks and preserve original foreground bottles. They are review artwork for client approval, not claims of approved physical packaging. Existing globe-containing artwork remains supplied artwork.

One generative candidate was rejected for source-logo drift and was never activated. The client explicitly authorized deterministic compositing thereafter.

## Replacements

| Family | Corrected marks | Active file |
| --- | ---: | --- |
| hero-desktop | 3 | hero-desktop-globe-review.webp |
| hero-mobile | 3 | hero-mobile-globe-review.webp |
| wu-edition | 3 | wu-edition-globe-review.webp |
| brand-edition | 1 | brand-edition-globe-review.webp |
| legacy | 2 | legacy-globe-review.webp |
| goods-campaign | 6 | goods-campaign-globe-review.webp |
| goods-jacket | 2 | goods-jacket-globe-review.webp |
| goods-hoodie | 2 | goods-hoodie-globe-review.webp |
| goods-crewneck | 1 | goods-crewneck-globe-review.webp |
| goods-tee | 2 | goods-tee-globe-review.webp |
| goods-duffel | 4 | goods-duffel-globe-review.webp |

Both full-size and 640px derivatives are available. Page src/srcset references point to the new versions. Central logo reference is `brand.js`. Original filenames and historical export packs are retained for provenance, not active use.

## Remaining active source imagery

goods-box, goods-barware, goods-cap and goods-beanie: visually reviewed; supplied globe identity retained. The collector box neck-label graphic is agave, not a standalone Wu mark. nyc-hero and nyc-mobile: supplied globe identity retained with legitimate beverage collaboration labels. agave: neutral scenery without Wu branding.

## QA

| Route | 1440px desktop | 768px tablet | 390px mobile |
| --- | --- | --- | --- |
| Splash | PASS | PASS | PASS |
| Collector Goods | PASS | PASS | PASS |

No horizontal overflow at tested sizes. Desktop/tablet and dedicated mobile hero sources verified. Tablet headline/CTA overlap corrected with a single-column editorial heading block and compact navigation. Main logo retains square proportions; source artwork is not stretched. Collector Goods interest modal opens and closes. Age gate acceptance works. Core form architecture remains unchanged.

Only agency credit: Designed & Developed by Dynasty Works Studio. Disallowed agency text scan: zero matches in deployable text files.

LIVE_SITE_CHANGED: NO
REVIEW_BRANCH_READY_FOR_CLIENT_APPROVAL: YES

## Modified deliverables

index.html, collector-goods.html, styles.css, collector-goods.css, app.js, brand.js, transparent globe master, 22 corrected WebP assets, this audit, and compositing manifest. Local lossless masters and reproducible compositing script are retained in review-artwork/ and composite-globe-review.py.
## Image quality correction
Review composites are now rebuilt directly from original supplied JPGs, not previously compressed WebPs. Full-size and 640px WebPs use lossless encoding. Edge-mask feathering is reduced to 0.65px; no global blur or sharpening is applied. Feature-section responsive sizes now reflect their actual display width. Original source resolution limits remain: landscape 1280px, dedicated mobile hero 720px, merchandise portraits 1024px. No synthetic detail or logo redraw was introduced.
