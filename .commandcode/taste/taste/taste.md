# Taste
- Prefers reusable components over duplicating markup across pages; when content appears in multiple places, wants it extracted into shared components and a single source-of-truth data module so the places stay in sync. Confidence: 0.9
- For UI-guide/design-reference pages, wants them to render the literal production components (direct imports, same props and markup) rather than recreated approximations, and wants every block modular/independently importable so the guide is "high fidelity" with the real pages — pure composition, no copied or simplified mockups. Confidence: 0.8
- Prefers following shadcn/ui conventions for UI primitives (e.g., building a page header's breadcrumbs from shadcn's `breadcrumb.tsx` primitives rather than hand-rolling). Confidence: 0.9
- Prefers content to be JSON-driven rather than inline TS data: one JSON file per content item with frontmatter-style metadata (title, label, description, colors, variant) plus a `content` body, an `index.json` for ordering, and a typed loader that merges them into a typed array. Confidence: 0.9
- New pages and components must match the site's existing theme — reuse the established design tokens (CSS variables like `--vil-*`/`--text-*`, utility classes like `viiv-kicker`, `viiv-section-title`, display font) rather than introducing a divergent look; explicitly dislikes headers with off-theme design, fonts, or colors (e.g., a dark navy hero with italic headline on a light ivory themed site). Confidence: 0.9
- Likes the hero section's visual treatment enough to want it reused on interior page headers: blue/navy background with a cover image behind it plus gradient scrims for readability, and light ivory/gold text — even when the rest of the page is light-themed. Confidence: 0.8
- Explicitly likes the site's display font for headlines and wants it kept even when other header attributes (background, colors) change. Confidence: 0.8
- Prefers configuration to be file-based in a TypeScript config file (e.g., `config.ts`) rather than environment variables — explicitly asked for "file based please, no .env" when making an external link (cal.com) configurable. Confidence: 0.9
- Expects data-file fields (e.g., `variant` in a book's JSON) to genuinely control component rendering; when a data field appears to have no visible effect, treats it as a bug to fix rather than accepting a silent default. Confidence: 0.6
- Prefers long-form reading content to live on a single routed page per book with all chapters rendered inline (TOC uses in-page anchors) — explicitly removed separate chapter pages and the per-chapter route in favor of everything living on `library/[slug]` itself. This supersedes an earlier preference for one page per chapter. Confidence: 0.9
- Wants book/reading pages to be full-screen immersive sections that lead with Title, Author, a Table of contents, and the opening chapter's content. Confidence: 0.7
- For library/book reading pages, explicitly wants the entire book presented like an actual printed book — white/paper background (not a webpage look, e.g., the dark navy hero used on other pages), with book-like layout elements such as a title page, a contents page, serif reading typography, and page-style chapter navigation. This is a deliberate visual direction for reading content that overrides the usual site hero treatment. Confidence: 0.9
- Prefers cache-busting version query parameters (e.g., `?v=YYYYMMDD`) appended to static asset URLs (favicons, web manifest, etc.) so updates propagate without stale-cache issues — supplied these on every asset link rather than relying on default caching. Confidence: 0.8
- When the user pastes exact HTML/markup or code to implement (e.g., favicon link tags with specific paths, sizes, types, and version params; a package usage snippet with specific required props), expects the shipped output to follow that exact API/attributes verbatim rather than a close approximation. Confidence: 0.8
- The user verifies the actual served/rendered output in the browser, not just that the code or build looks right; when a requested change appears done but the site still shows framework-default assets (e.g., the Vercel default `src/app/favicon.ico` overriding custom favicon links), they report it and expect the root cause to be found and confirmed against the real served HTML — a passing build is not sufficient proof. Confidence: 0.7

- Never fabricates content or data for a page: only real project data may be shown (addresses, phone numbers, contact details, statistics, testimonials); explicitly forbids inventing missing campus/contact info and forbids adding stock imagery when the project has no suitable existing asset. Confidence: 0.9

- When asked to update an existing page, prefers extending it while preserving its existing functionality and integrations (e.g., keep the Cal.com embed and its booking URL/config untouched, keep header/footer/navigation unchanged) rather than rebuilding the page from scratch. Confidence: 0.8

- Explicitly requires interactive controls (buttons, accordion triggers) to be keyboard accessible and layouts to be fully responsive — multi-column on desktop, single-column on mobile. Confidence: 0.7

- Prefers third-party booking/calendar embeds (e.g., the Cal.com widget) to open in a modal dialog triggered by a CTA button rather than being embedded inline in the page flow. Confidence: 0.7

- Requires modals/dialogs to ALWAYS fit within the viewport — no overflow on shorter screens. Expects the dialog height capped to the viewport (e.g., `max-h-[calc(100dvh-2rem)]`) with a flexible/shrinking embed area (`h-[min(640px,calc(100dvh-11rem))]`) and internal scrolling, instead of a large fixed-height embed that pushes the modal off-screen. Confidence: 0.8

- Prefers leveraging established third-party npm packages for complex features rather than building custom implementations — sourced `react-pdf-flipbook-viewer` themselves and asked to try it for the library books. Confidence: 0.6
- When a third-party component behaves incorrectly (e.g., transparent pages in the flipbook), expects the agent to consult the official package documentation (user supplies the docs URL) to learn the correct usage/styling requirements before debugging — rather than guessing at causes or patching blind. Confidence: 0.8

- For library books, wants an interactive page-flip flipbook reading experience (turning pages like a real book) applied consistently to every book — extends the earlier "actual printed book" presentation preference with interactivity. Confidence: 0.7

- Prefers third-party tracking/analytics integrations (GA4, Meta Pixel, etc.) to be loaded centrally from the root layout file rather than added to each page file. Confidence: 0.9
- Prefers loading third-party scripts with Next's `next/script` component using `strategy="afterInteractive"` so tracking loads without blocking the main thread. Confidence: 0.9
- Prefers third-party service/tracking IDs (GA4 measurement ID, Meta Pixel ID) to be kept out of source code and injected via `NEXT_PUBLIC_*` environment variables (e.g., `NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_META_PIXEL_ID`) rather than hardcoded — distinct from site config/content, which they wanted file-based. Confidence: 0.8
- When implementing integrations, expects the delivered response to include a clean code snippet of the updated file(s) and a sample `.env.local` configuration block. Confidence: 0.6

- Dislikes decorative grid/dot background patterns on navy page heroes; wants the standard page hero to be a clean solid navy block with a breadcrumb trail, gold kicker, display headline, and descriptive subtext — explicitly asked to remove the grid from the "navy grid hero" variant and add breadcrumbs + subtext instead. Confidence: 0.7
- Treats gold (`--vil-gold`) as the brand's "secondary color" and wants CTAs on dark/photo heroes to use the golden treatment (gold background, navy text) rather than the navy primary button — explicitly asked for the photo hero's CTA in golden "secondary color". Confidence: 0.7

- For error pages (404), explicitly wants a full-page standalone layout — full viewport (`min-h-screen`), centered content, no site shell/header/footer wrapper — rather than embedding the error page within the site chrome. Confidence: 0.6

- Prefers matching the logo asset variant to the background tone: the colored (navy/gold, non-white) VIIV logo on light/white backgrounds and the white logo variant on dark/navy backgrounds — explicitly asked for the colored logo on the white 404 page. Confidence: 0.7

- Delegates copywriting when they give a loose vibe: when the user phrases page copy as a suggestion (e.g., "~ something corny like that" for the 404 tagline) they expect the agent to draft on-brand, witty copy and benefit-framed CTA wording themselves rather than ask for exact text — the "never fabricate" rule covers real facts/data (addresses, stats, testimonials), not marketing copy the user explicitly invited. Confidence: 0.6

- Wants interactive flipbook navigation to reuse the hero section's circular nav language — a round ring button with left/right arrow icons (gold fill on hover) — and the buttons positioned far outside the book (vertically centered, clear of the book edges) rather than the library's default arrow buttons. Confidence: 0.8

- Considers a third-party component's default effects undesirable when they clash with the site aesthetic — e.g., page-flip's dramatic shadows and ghosted/transparent pages during flips — and expects them fixed via the library's configurable props (drawShadow, maxShadowOpacity) plus CSS overrides that force opaque page backgrounds and cap shadow opacity, rather than accepting the defaults or patching library source. Confidence: 0.7

- Prefers a single canonical home for design/component reference: when `/ui-kit` was superseded by `ui-guide/components`, wanted its full contents moved over (preserved verbatim, not recreated) and the old route decommissioned with a redirect to the new home — rather than keeping parallel/duplicate reference sections. Confidence: 0.8
 clean code snippet of the updated file(s) and a sample `.env.local` configuration block. Confidence: 0.6
d. Confidence: 0.9
- Prefers third-party service/tracking IDs (GA4 measurement ID, Meta Pixel ID) to be kept out of source code and injected via `NEXT_PUBLIC_*` environment variables (e.g., `NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_META_PIXEL_ID`) rather than hardcoded — distinct from site config/content, which they wanted file-based. Confidence: 0.8
- When implementing integrations, expects the delivered response to include a clean code snippet of the updated file(s) and a sample `.env.local` configuration block. Confidence: 0.6
