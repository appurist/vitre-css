# Vitre JS

Small behavior helpers for semantic Vitre UI components.

Vitre JS provides optional interactivity for semantic HTML. It does not ship styling. Pair it with [Vitre CSS](https://www.npmjs.com/package/vitre-css) when you want the full Vitre UI presentation.

## WARNING

This is a new library (today) under new development. It is published mostly for testing its own docs and examples from CDNs.

You're free to try it, make suggestions, report problems at https://github.com/appurist/vitre-js/issues but it comes **as-is** and **without** any stated or implied warrantees. It is a **best effort** that I made for myself and I'm making it available for everyone to use for free.

## Links

- GitHub repo: https://github.com/appurist/vitre-js
- GitHub docs: https://appurist.github.io/vitre-js/
- npmjs.org: https://www.npmjs.com/package/vitre-js
- Vitre CSS: https://www.npmjs.com/package/vitre-css

## Install

```sh
npm install vitre-js
```

Use the browser file:

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/vitre-js/vitre.js"></script>
```

Or import the ESM API:

```js
import { Vitre, enhance, alerts } from "vitre-js";
```

## Alerts

Native semantic markup:

```html
<div role="status" data-v-dismiss data-v-timeout="6">
  Saved successfully.
</div>
```

Custom element markup:

```html
<vitre-alert tone="status" dismiss timeout="6">
  Saved successfully.
</vitre-alert>
```

Supported tones are `alert`, `status`, and `note`. The custom element maps directly to the corresponding ARIA role.

## API

```js
Vitre.enhance();
Vitre.alerts(document.querySelector("#dynamic-content"));
```

`Vitre.enhance()` runs automatically on page load for browser script usage. Call it again after inserting dynamic content.
