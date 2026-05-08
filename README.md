# Vitre JS

Small behavior helpers for semantic Vitre UI components.

Vitre JS provides optional interactivity for semantic HTML. It does not ship component skinning. Pair it with [Vitre CSS](https://www.npmjs.com/package/vitre-css) when you want the full Vitre UI presentation.

**WARNING**: This is a new library (May 2026) under new development. It is published mostly for testing its own docs and examples from CDNs. You're free to try it, make suggestions, report problems at https://github.com/vitre-ui/vitre-js/issues but it comes **as-is** and **without** any stated or implied warrantees. It is a **best effort** that I made for myself and I'm making it available for everyone to use for free.

## Links

- GitHub repo: https://github.com/vitre-ui/vitre-js
- GitHub docs: https://vitre-ui.github.io/vitre-js/
- npmjs.org: https://www.npmjs.com/package/vitre-js
- Vitre CSS: https://www.npmjs.com/package/vitre-css

## Install

```sh
npm install vitre-js
```

Use the browser file:

```html
<link rel="stylesheet" href="https://unpkg.com/vitre-css/vitre.css">
<script type="module" src="https://unpkg.com/vitre-js/vitre.js"></script>
```

For CDN usage, prefer the unversioned unpkg URLs. They resolve to the latest published npm versions quickly while keeping copy/paste usage simple.

Or import the ESM API:

```js
import { Vitre, apply } from "vitre-js";
```

## Alerts

Semantic alert markup:

```html
<div data-kind="alert" data-color="success" role="status" dismiss timeout="6">
  Saved successfully.
</div>
```

Alerts are selected with `data-kind="alert"`. Use named `data-color` values such as `primary`, `info`, `success`, `warning`, and `error` for Vitre CSS styling. Add `role="alert"` or `role="status"` only when live-region behavior is intended. Add `dismiss` for a close button and `timeout` for automatic dismissal. Dismiss controls are generated as right-aligned SVG icon buttons with `data-variant="ghost"` when paired with Vitre CSS.

## API

```js
Vitre.apply();
Vitre.apply(document.querySelector("#dynamic-content"), ["alerts"]);
```

`Vitre.apply()` runs automatically on page load for browser script usage. Call it again after inserting dynamic content.

## Development

This repo uses a local pnpm link to the sibling `../vitre-css` checkout during development. The GitHub Pages docs and examples live under `docs/` and use CDN URLs so they render correctly as static Pages content:

```sh
pnpm install
```
