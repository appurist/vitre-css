# Changelog

## 0.2.0 - 2026-05-07

- Added alert/status/note behavior for native role-based alerts using short `dismiss` and `timeout` attributes.
- Removed the custom element alert approach before first release.
- Replaced separate public behavior functions with `Vitre.apply(root, components)`.
- Generated right-aligned alert dismiss controls with SVG icons and `data-variant="ghost"`.
- Added docs and a kitchen sink example paired with local `vitre-css`.
- Switched the development `vitre-css` dependency to a pnpm `link:../vitre-css` dependency and removed the npm lockfile.
- Added a tag-triggered GitHub Actions release workflow using npm Trusted Publishing.

## 0.1.0 - 2026-05-06

- Published initial empty package.
