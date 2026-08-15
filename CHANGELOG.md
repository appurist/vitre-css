# Changelog

## 1.6.0 - 2026-08-15

- Merged the `vitre-js` project into this package. Vitre is now a single project shipping both the stylesheet and optional behavior helpers, released and versioned together.
- Added `vitre.js` as an optional, opt-in behavior file alongside `vitre.css`. It provides `data-kind` components for alerts, theme toggle, navigation, and splitters. The stylesheet remains fully functional without it.
- Added a `data-kind="splitter"` component for resizable pane handles.
- Added a `data-kind="tabs"` component built on the ARIA tablist pattern, with generated `aria-*` wiring, roving tabindex, arrow/`Home`/`End` keyboard support, vertical orientation, and a `vitre:tabchange` event. Without JavaScript the tab strip is hidden and all panels render stacked, so content stays reachable.
- Added `REFERENCE.md`, a complete CSS custom property reference, and included it in the published package.
- Fixed a duplicate `COMPONENTS` declaration in the JavaScript entry point. It was introduced in `vitre-js` after 0.4.0 and never reached npm, so no published release was affected.
- Collapsed the previously hand-synced `src/vitre.js` and `vitre.js` duplicates into a single root `vitre.js`.
- Added a `node --check` syntax gate to the package check step so unparseable JavaScript cannot be published.

## 1.5.10 - 2026-05-08

- Made images and videos default to contained object fitting and made iframes responsive with a default media aspect ratio.

## 1.5.9 - 2026-05-08

- Added `data-fit="contain"` media support for responsive embedded video and framed media.

## 1.5.8 - 2026-05-08

- Fixed filled `data-color` buttons so derived gradient variables resolve against each button's semantic color.

## 1.5.7 - 2026-05-08

- Added variable-driven `data-color` support for buttons, button variants, `progress`, and `meter`.
- Added color-specific button ink tokens so filled semantic buttons can preserve readable contrast.

## 1.5.6 - 2026-05-08

- Added `vitre-base.css` as an optional first-paint baseline for Vitre theme, typography, background, and page-width styles.
- Added token swatch support for the full documented color token set.
- Added `data-width` page container variants for direct body children.
- Added default full-width sticky styling for a top-level first navigation element, including aligned horizontal padding.
- Restored preserved whitespace for `pre code` blocks while keeping inline code on one line.

## 1.5.5 - 2026-05-07

- Updated CDN examples to use unversioned unpkg URLs for faster latest-version resolution.
- Pointed package documentation links at the central Vitre Docs site and moved the kitchen-sink examples there.

## 1.5.4 - 2026-05-07

- Updated CDN examples to use explicit `@latest` Vitre package URLs.

## 1.5.3 - 2026-05-07

- Darkened the default primary color and reduced the default button highlight so white button text meets contrast requirements more reliably.

## 1.5.2 - 2026-05-07

- Updated repository and documentation links for the move to the `vitre-ui` GitHub organization.
- Reserved dismissible alert close-button layout before Vitre JS enhancement to avoid first-render layout jumps.
- Kept inline code, keyboard, and sample tokens on one line so package names and commands do not wrap awkwardly in tables.

## 1.5.0 - 2026-05-07

- Replaced role-based alert styling with `[data-kind="alert"]` and named `data-color` values.
- Renamed the error color token from `--vitre-danger` to `--vitre-error`.

## 1.4.0 - 2026-05-07

- Added default flex wrapping and tokenized spacing for `nav` elements with `--vitre-nav-gap`.
- Kept nav alignment neutral by avoiding automatic centering based on accessibility attributes.
- Strengthened button hover affordance with tokenized glow, border, shadow, and scale effects.
- Added `data-variant` button treatments for `flat`, `outline`, `ghost`, and `plain`.
- Replaced branded Vitre data attributes with shorter `data-*` attributes, including `data-token` for token swatches.
- Split button hover shadow variables so variant styles can disable glow without removing other button behavior.
- Added `--vitre-font-weight` and a cross-platform system sans stack.
- Restored the default body font weight to 400 and removed Segoe UI Semilight from the default stack to avoid slanted text rendering on Windows.
- Made alert boxes block-level, reduced their vertical padding from 16px to 8px, and added color-aligned left accents.

## 1.2.0 - 2026-05-06

- Split theme palette variables into `vitre.light` and `vitre.dark` cascade layers while keeping shared variables in `vitre.theme`.
- Refactored `color-mix()` usage into named dependent variables so generated colors remain overrideable.
- Added explicit spacing between adjacent card-rendered semantic panels, including document sections, articles, asides, and nested section articles.
- Replaced blank kitchen sink media placeholders with local MP3 and MP4 examples, a YouTube iframe embed, and live object/embed examples.

## 1.1.1 - 2026-05-03

- Added explicit spacing between adjacent card-rendered semantic panels, including document sections, articles, asides, and nested section articles.
- Split theme palette variables into `vitre.light` and `vitre.dark` cascade layers while keeping shared variables in `vitre.theme`.
- Replaced blank kitchen sink media placeholders with local MP3 and MP4 examples, a YouTube iframe embed, and live object/embed examples.
- Refactored `color-mix()` usage into named dependent variables so generated colors remain overrideable.

## 1.1.0 - 2026-05-03

- Added nested semantic structure styling for article cards with direct header and footer regions.
- Added card treatment for articles nested inside main or section content.
- Added nested aside callouts for supplementary content inside articles and sections.
- Added definition-list term and description styling for `dt` and `dd`.
- Added role-based banner styling for `[role="alert"]`, `[role="status"]`, and `[role="note"]` with dedicated `--vitre-alert-*`, `--vitre-status-*`, and `--vitre-note-*` variables.
- Added neutral styling for `dialog > article` so native dialog content can use semantic article structure without duplicate panel chrome.
- Expanded the kitchen sink page and docs coverage summary for the new semantic structure patterns.

## 1.0.2 - 2026-05-03

- Added explicit styling for additional semantic HTML elements, including captions, table footers, abbreviations, addresses, timestamps, inserted and deleted text, subscript and superscript text, outputs, embedded media, search regions, menus, heading groups, and ruby annotations.
- Added `--vitre-inserted`, `--vitre-inserted-bg`, `--vitre-deleted`, and `--vitre-deleted-bg` tokens for document-change styling.
- Expanded the kitchen sink page with examples for the new element coverage.
- Updated the documentation element coverage summary and kept the GitHub Pages stylesheet copy in sync.

## 1.0.1 - 2026-05-01

- Added native form validation styling for `:user-invalid` and `:user-valid` using existing semantic color variables.
- Added `[aria-busy="true"]` button styling with a CSS-only spinner and `--vitre-busy-*` customization variables.
- Improved `progress` styling with explicit native bar colors and rounded shape.
- Updated the CSS banner version to match the package version.
- Removed the old concept document from the npm package and folded its user-facing positioning into the README.
- Kept the GitHub Pages stylesheet copy in sync with the package stylesheet.

---

# Previously released as vitre-js

The entries below are the release history of the separate `vitre-js` package, which
merged into `vitre-css` at 1.6.0. Its version numbers are an independent sequence and
do not relate to the Vitre versions above.

## 0.4.0 - 2026-06-15

- Added `data-kind="nav"` behavior for class-free same-origin SPA navigation.
- Navigation helpers now dispatch cancelable `vitre:navigate` events, update history, and maintain `aria-current="page"` on current links.

## 0.3.5 - 2026-05-08

- Added a version and license banner to the package entry files.
- Added a `data-kind="theme-toggle"` component that renders a light/dark toggle button and persists the selected theme.

## 0.3.4 - 2026-05-08

- Removed stale package-local Pages documentation references after moving public docs and examples to the central Vitre Docs site.

## 0.3.3 - 2026-05-07

- Updated CDN examples and docs pages to use unversioned unpkg URLs for faster latest-version resolution.
- Pointed package documentation links at the central Vitre Docs site.

## 0.3.2 - 2026-05-07

- Updated CDN examples and docs pages to use explicit `@latest` Vitre package URLs.

## 0.3.1 - 2026-05-07

- Updated repository and documentation links for the move to the `vitre-ui` GitHub organization.
- Hid dismissible alerts during close-button injection so enhancement is presented after the final alert structure is ready.

## 0.3.0 - 2026-05-07

- Replaced role-based alert discovery with `[data-kind="alert"]`.

## 0.2.2 - 2026-05-07

- Added alert behavior for `[data-kind="alert"]` using short `dismiss` and `timeout` attributes.
- Removed the custom element alert approach before first release.
- Replaced separate public behavior functions with `Vitre.apply(root, components)`.
- Generated right-aligned alert dismiss controls with SVG icons and `data-variant="ghost"`.
- Added GitHub Pages docs and a kitchen sink example under `docs/`, paired with versioned CDN assets for static hosting.
- Switched the development `vitre-css` dependency to a pnpm `link:../vitre-css` dependency and removed the npm lockfile.
- Added a tag-triggered GitHub Actions release workflow using npm Trusted Publishing.

## 0.1.0 - 2026-05-06

- Published initial empty package.
