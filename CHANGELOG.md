# Changelog

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
