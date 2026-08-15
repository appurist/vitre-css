# Vitre UI

![Vitre UI](https://vitre-ui.com/images/vitre-ui-dark.webp)

The transparent style layer. Class-free, style-free web with a high-end finish. Clear. Light. Vitre.

A great looking web page *without* `class="..."` or `style="..."` on your HTML elements.

Just add `<link rel="stylesheet" href="vitre.css">` (or equivalent) and you're done.

**Vitre** is *single-file* CSS for making raw semantic HTML look polished by default. It honors semantic tags without polluting markup, so ordinary elements such as headings, links, buttons, forms, tables, code blocks, dialogs, and details receive modern light and dark theme styling without required classes.

An optional companion file, `vitre.js`, adds class-free *behavior* to the same semantic markup — dismissible alerts, a theme toggle, SPA navigation, and focusable splitters. It is entirely opt-in: the stylesheet works on its own and needs no JavaScript.

## Links

- Documentation: https://docs.vitre-ui.com/
- GitHub repo: https://github.com/vitre-ui/vitre-css
- npmjs.org: https://www.npmjs.com/package/vitre-css

## Install

Use the file directly:

```html
<link rel="stylesheet" href="vitre.css">
```

Install from npm:

```sh
npm install vitre-css
```

Use a CDN:

```html
<link rel="stylesheet" href="https://unpkg.com/vitre-css/vitre-base.css">
<link rel="stylesheet" href="https://unpkg.com/vitre-css/vitre.css">
```

Add the optional behavior helpers only if you want them:

```html
<link rel="stylesheet" href="https://unpkg.com/vitre-css/vitre-base.css">
<link rel="stylesheet" href="https://unpkg.com/vitre-css/vitre.css">
<script type="module" src="https://unpkg.com/vitre-css/vitre.js"></script>
```

For CDN usage, prefer the unversioned unpkg URLs. They resolve to the latest published npm version quickly while keeping copy/paste usage simple. `vitre-base.css` is optional; include it before `vitre.css` when you want Vitre's first-paint background, typography, theme, and page-width baseline to apply immediately.

Or import the ESM API from a bundler:

```js
import { Vitre, apply } from "vitre-css/vitre.js";
```

## Documentation

Read the [documentation and examples](https://docs.vitre-ui.com/). A complete list of CSS custom properties is in [REFERENCE.md](REFERENCE.md).

## Usage

Write semantic HTML and let Vitre style the elements directly:

```html
<main>
  <section>
    <h1>Account settings</h1>
    <p>Manage your profile and notification preferences.</p>

    <form>
      <label>
        Email
        <input type="email" placeholder="you@example.com">
      </label>

      <button>Save changes</button>
    </form>
  </section>
</main>
```

## Themes

Vitre follows the user's operating system preference by default with `prefers-color-scheme`. You can force a theme with `data-theme` on the root element:

```html
<html data-theme="dark">
```

Supported values are `light` and `dark`.

## Customization

The main customization API is CSS variables. Add your own stylesheet after Vitre and override `--vitre-*` values there:

```html
<link rel="stylesheet" href="vitre.css">
<link rel="stylesheet" href="custom.css">
```

In `custom.css`, start with variable overrides:

```css
:root {
  --vitre-hue: 168;
  --vitre-primary: hsl(var(--vitre-hue) 76% 42%);
  --vitre-font-weight: 400;
  --vitre-radius: 0.5rem;
  --vitre-measure: 80ch;
  --vitre-button-height: 40px;
  --vitre-button-bg-angle: 180deg;
}
```

Useful tokens include colors, spacing, typography, surfaces, borders, focus rings, forms, tables, shadows, and code blocks. See [REFERENCE.md](REFERENCE.md) for the full variable surface.

Buttons expose background and hover variables. Use `data-variant` for common button treatments:

```css
:root {
  --vitre-button-bg-image: none;
}
```

For a single flat button, use the variant attribute instead of adding a class:

```html
<button type="button" data-variant="flat">Flat button</button>
```

Other supported variants are `outline`, `ghost`, and `plain`:

```html
<button type="button" data-variant="outline">Outline button</button>
<button type="button" data-variant="ghost">Ghost button</button>
<button type="button" data-variant="plain">Plain button</button>
```

Use `data-color` for semantic button intent. Supported values are `primary`, `info`, `success`, `warning`, and `error`; each variant decides whether that color is used as a fill, foreground, border, or hover tint:

```html
<button type="button" data-color="success">Save</button>
<button type="button" data-color="error" data-variant="outline">Delete</button>
<button type="button" data-color="info" data-variant="ghost">Details</button>
```

The same `data-color` values are also supported on `progress` and `meter`:

```html
<progress data-color="success" max="100" value="72">72%</progress>
<meter data-color="warning" min="0" max="100" value="68">68</meter>
```

Resizable panes can mark their drag handle as a semantic splitter:

```html
<div data-kind="splitter" role="separator" aria-orientation="vertical"></div>
```

Include `vitre.js` to ensure splitter handles receive keyboard focus and orientation metadata.

Iframes are responsive by default with a `16 / 9` aspect ratio. Use `data-fit="contain"` on embedded or framed media that should opt into the same stable responsive ratio:

```html
<iframe data-fit="contain" src="https://www.youtube.com/embed/..."></iframe>
```

Token swatches can use `data-token`:

```html
<mark data-token="primary"></mark>
<mark data-token="surface"></mark>
```

If a selector does not expose the exact customization you need, override the element rule in your stylesheet after Vitre:

```css
button {
  text-transform: none;
}
```

Prefer variables when they exist. If you find yourself repeatedly overriding the same kind of rule, that is a good sign Vitre should expose another `--vitre-*` variable for that customization.

## What It Styles

- Page layout primitives: `body`, `header`, `main`, `section`, `article`, `aside`, `footer`, and `nav`
- Typography: headings, paragraphs, links, lists, blockquotes, `mark`, `small`, and horizontal rules
- Code: `code`, `pre`, `kbd`, and `samp`
- Forms: labels, buttons, inputs, textareas, selects, fieldsets, checkboxes, radios, ranges, and color inputs
- Data and disclosure: tables, `details`, `summary`, `dialog`, `progress`, and `meter`
- Data patterns: `[data-kind="alert"]`, `[data-color="warning"]`, `[data-variant="outline"]`, `[role="dialog"]`, and grouped form controls
- Media: images, videos, SVGs, canvas, and iframes

## Optional JavaScript

`vitre.js` is a separate, optional file. The stylesheet is fully functional without it — load it only when you want the behaviors below. It ships no component skinning of its own; the styling comes from `vitre.css`.

```html
<script type="module" src="https://unpkg.com/vitre-css/vitre.js"></script>
```

Components are selected by the same `data-kind` attributes the stylesheet uses, so there is no separate markup to learn.

### Alerts

Semantic alert markup:

```html
<div data-kind="alert" data-color="success" role="status" dismiss timeout="6">
  Saved successfully.
</div>
```

Alerts are selected with `data-kind="alert"`. Use named `data-color` values such as `primary`, `info`, `success`, `warning`, and `error` for styling. Add `role="alert"` or `role="status"` only when live-region behavior is intended. Add `dismiss` for a close button and `timeout` for automatic dismissal, in seconds. Dismiss controls are generated as right-aligned SVG icon buttons with `data-variant="ghost"`. Dismissing an alert emits a `vitre:dismiss` event.

### Theme Toggle

Use a span with `data-kind="theme-toggle"` to render a light/dark toggle button:

```html
<span data-kind="theme-toggle"></span>
```

The generated button toggles `data-theme="light"` and `data-theme="dark"` on the root `<html>` element and stores the selected theme in local storage.

### Navigation

Use `data-kind="nav"` on a semantic navigation region to add class-free SPA navigation behavior:

```html
<nav data-kind="nav" aria-label="Primary navigation">
  <a href="/">Home</a>
  <a href="/videos">Videos</a>
</nav>
```

Vitre intercepts same-origin primary clicks, updates browser history, dispatches a `popstate` event for routers that listen to history changes, and maintains `aria-current="page"` on the current link. External links, downloads, modified clicks, and links with `target` other than `_self` use normal browser behavior.

Each intercepted link emits a cancelable `vitre:navigate` event from the clicked anchor. Applications can call `event.preventDefault()` to hand navigation to a framework router while still using semantic anchors.

### Splitters

Use `data-kind="splitter"` with `role="separator"` for resizable pane handles:

```html
<div data-kind="splitter" role="separator" aria-orientation="vertical"></div>
```

Vitre ensures the handle is focusable and has a default `aria-orientation` when one is not provided. Applications still own the pane sizing behavior.

### API

```js
Vitre.apply();
Vitre.apply(document.querySelector("#dynamic-content"), ["alerts", "theme-toggle"]);
```

`Vitre.apply()` runs automatically on page load for browser script usage. Call it again after inserting dynamic content. It is idempotent — already-enhanced elements are skipped.

## Browser Support

Vitre targets modern browsers and uses current CSS features including cascade layers, `color-mix()`, `:where()`, `:has()`, logical properties, `clamp()`, and `backdrop-filter`. It favors a small, expressive stylesheet over legacy fallbacks.

## Note

**WARNING**: This is a new library (May 2026) under active development. You're free to try it, make suggestions, and report problems at https://github.com/vitre-ui/vitre-css/issues, but it comes **as-is** and **without** any stated or implied warranty. It is a **best effort** that I made for myself and I'm making it available for everyone to use for free.
