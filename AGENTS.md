# Repository Guidelines

## Project Structure & Module Organization

This repository is the whole of Vitre UI: the stylesheet and its optional behavior helpers, released together as the `vitre-css` npm package. The `vitre-js` package was merged in at 1.6.0 and is no longer a separate project.

Everything ships from the repository root — there is no `src/` and no build step. The files committed here are byte-for-byte what npm publishes and what unpkg serves:

- `vitre.css` — the stylesheet, the primary deliverable
- `vitre-base.css` — optional first-paint baseline, loaded *before* `vitre.css`
- `vitre.js` — optional, opt-in behavior helpers (ESM)
- `REFERENCE.md` — the complete `--vitre-*` custom property reference
- `README.md` — user-facing documentation

Do not reintroduce a `src/` copy of `vitre.js`. It previously existed as a hand-synced duplicate of the root file, drifted out of sync, and ended up carrying a syntax error that nothing caught because no build or test ever parsed it. One file per language, at the root.

## Build, Test, and Development Commands

There is no build system and no dependencies, by design. Edit the shipped files directly.

- `npm run check` — the full gate. Run this before every release. CI runs it on every push and pull request via `.github/workflows/check.yml`.
- `node --check vitre.js` — the JavaScript syntax gate on its own.
- `node scripts/check.mjs` — the consistency gate on its own.
- `rg "vitre-"` — find token names and keep variables consistent.

`scripts/check.mjs` is the only automated safety net in the repository. It has no dependencies and is not published. It enforces four invariants:

- **Version** — `package.json`, the `vitre.css`, `vitre-base.css`, and `vitre.js` banners, and the top `CHANGELOG.md` entry must all agree.
- **Tokens** — every `--vitre-*` property read with `var()` must be declared, every property declared must appear in `REFERENCE.md`, and every property in `REFERENCE.md` must exist. A `var()` fallback makes an undeclared token render correctly while being invisible to devtools and impossible to discover, so nothing else catches that.
- **Attributes** — every `data-kind` value `vitre.js` enhances must have a matching selector in `vitre.css`, unless it is listed in `BEHAVIOR_ONLY_KINDS` with a reason.
- **Package** — every file in the `files` list exists.

Adding a token means touching two files, and the gate will tell you which one you missed.

To exercise changes, serve a scratch HTML page over HTTP (not `file://`, which breaks ES module imports) and load the local `vitre-base.css`, `vitre.css`, and `vitre.js`. Always confirm the page still renders correctly with the `<script>` tag removed — the stylesheet must never depend on the JavaScript.

## Coding Style & Naming Conventions

Use 2-space indentation in CSS, JavaScript, and Markdown examples.

Keep the CSS class-free: style semantic elements first. Where an element alone is not enough, use a `data-*` attribute (`data-kind`, `data-variant`, `data-color`, `data-fit`, `data-width`, `data-token`) rather than introducing a class. `vitre.css` and `vitre.js` share these attribute names as their contract — a change to one side is a change to both, so update them together.

Naming guidance:

- CSS custom properties: `--vitre-*`
- JavaScript-generated attributes: `data-v-*`
- Markdown files use CRLF line endings

Prefer exposing a new `--vitre-*` variable over expecting users to override element rules.

## Versioning

The version appears in five places and they must agree: `package.json`, the `vitre.css` banner, the `vitre-base.css` banner, the `vitre.js` banner, and a `CHANGELOG.md` entry. `npm run check` enforces this. The release workflow fails the build if the git tag does not match `package.json`.

## Testing Guidelines

`npm run check` covers consistency between files, not behavior. Nothing renders a page or drives the JavaScript, so visual and interactive verification is still manual.

For any change, include a minimal HTML example demonstrating the affected states — default, hover, focus, and both themes. For JavaScript changes, also verify that calling `Vitre.apply()` a second time does not double-enhance an element.

## Commit & Pull Request Guidelines

Use a simple imperative commit style: `Add table styling spec`, `Refine glass token names`.

Pull requests should include:

- A short summary of the change
- Any updated example or screenshot for visual changes
- Notes on new tokens, selectors, attributes, or breaking styling decisions

## Releasing

1. Bump the version in all five places listed under Versioning.
2. Run `npm run check` and confirm the published file list is correct.
3. Merge to `main`, then push a `vX.Y.Z` tag. The `Release` workflow publishes to npm using Trusted Publishing.

If the workflow fails, it opens an issue titled `Release <tag> failed to publish`. A failed release is otherwise silent — the tag exists, so it looks shipped, while nothing reached npm. That is exactly how the splitter component sat unreleased for two months. Do not close that issue without either publishing or deleting the tag.
