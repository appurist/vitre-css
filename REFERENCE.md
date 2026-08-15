# Vitre CSS — CSS Custom Property Reference

> Extracted from `vitre.css` v1.5.10. All variables are defined on `:root` and can be overridden after loading the stylesheet.
>
> ```css
> :root {
>   --vitre-hue: 168;
>   --vitre-primary: hsl(var(--vitre-hue) 76% 42%);
>   --vitre-radius: 0.5rem;
> }
> ```

---

## Typography

| Variable | Default | Description |
|---|---|---|
| `--vitre-font-sans` | `"Segoe UI", system-ui, …` | Sans-serif font stack used for body text |
| `--vitre-font-mono` | `ui-monospace, Menlo, …` | Monospace stack for code, kbd, and samp |
| `--vitre-font-weight` | `400` | Base body font weight |
| `--vitre-leading` | `1.65` | Line height for body text |

---

## Fluid Type Scale

Fluid sizes generated with `clamp()`. Use these on headings or any element that should scale with viewport width.

| Variable | Range | Maps to |
|---|---|---|
| `--vitre-step--1` | `0.88rem → 0.94rem` | Small / caption text |
| `--vitre-step-0` | `1rem → 1.1rem` | Body / base size |
| `--vitre-step-1` | `1.2rem → 1.48rem` | h4 |
| `--vitre-step-2` | `1.44rem → 1.98rem` | h3 |
| `--vitre-step-3` | `1.73rem → 2.65rem` | h2 |
| `--vitre-step-4` | `2.07rem → 3.52rem` | h1 |

---

## Spacing

| Variable | Value | Description |
|---|---|---|
| `--vitre-space-1` | `0.25rem` | Tightest gap (icon spacing) |
| `--vitre-space-2` | `0.5rem` | Small gap |
| `--vitre-space-3` | `0.75rem` | Medium-small gap |
| `--vitre-space-4` | `1rem` | Standard gap |
| `--vitre-space-5` | `1.5rem` | Section inner padding |
| `--vitre-space-6` | `2rem` | Section block padding |
| `--vitre-space-7` | `3rem` | Large section gap / scroll margin |
| `--vitre-nav-gap` | `var(--vitre-space-5)` | Gap between nav items |

---

## Layout

| Variable | Default | Description |
|---|---|---|
| `--vitre-measure` | `72ch` | Default max content width |
| `--vitre-width-narrow` | `72ch` | Narrow `data-width` variant |
| `--vitre-width-wide` | `72rem` | Wide `data-width` variant |

---

## Shape & Borders

| Variable | Default | Description |
|---|---|---|
| `--vitre-radius-sm` | `0.45rem` | Small radius (inline elements, code) |
| `--vitre-radius` | `0.75rem` | Default radius for inputs and cards |
| `--vitre-radius-lg` | `1rem` | Large radius for panels and dialogs |
| `--vitre-border-width` | `1px` | Default border width |


---

## Colors — Shared (Light & Dark)

These intent colors are defined once and used in both themes.

| Variable | Default Value | Description |
|---|---|---|
| `--vitre-hue` | `214` | Base hue for the primary color; change this to retheme the whole UI |
| `--vitre-primary` | `hsl(214 88% 46%)` | Primary brand / action color |
| `--vitre-primary-ink` | `hsl(0 0% 100%)` | Text color on primary backgrounds |
| `--vitre-info` | `hsl(199 89% 48%)` | Info semantic color |
| `--vitre-info-ink` | `hsl(0 0% 100%)` | Text on info backgrounds |
| `--vitre-info-bg` | `color-mix(…info, transparent 88%)` | Soft info tint for alerts |
| `--vitre-success` | `hsl(152 58% 38%)` | Success semantic color |
| `--vitre-success-ink` | `hsl(0 0% 100%)` | Text on success backgrounds |
| `--vitre-success-bg` | `color-mix(…success, transparent 88%)` | Soft success tint for alerts |
| `--vitre-warning` | `hsl(38 92% 48%)` | Warning semantic color |
| `--vitre-warning-ink` | `hsl(222 38% 14%)` | Text on warning backgrounds |
| `--vitre-warning-bg` | `color-mix(…warning, transparent 86%)` | Soft warning tint for alerts |
| `--vitre-error` | `hsl(356 72% 52%)` | Error / invalid semantic color |
| `--vitre-error-ink` | `hsl(0 0% 100%)` | Text on error backgrounds |
| `--vitre-error-bg` | `color-mix(…error, transparent 88%)` | Soft error tint for alerts |
| `--vitre-inserted` | `var(--vitre-success)` | Color for `<ins>` text |
| `--vitre-inserted-bg` | `color-mix(…success, transparent 86%)` | Background for inserted text |
| `--vitre-deleted` | `var(--vitre-error)` | Color for `<del>` text |
| `--vitre-deleted-bg` | `color-mix(…error, transparent 88%)` | Background for deleted text |

---

## Colors — Theme (Light / Dark)

These swap automatically with the system color scheme or an explicit `data-theme` attribute.

| Variable | Light | Dark | Description |
|---|---|---|---|
| `--vitre-bg` | `hsl(210 32% 98%)` | `hsl(224 26% 8%)` | Page background |
| `--vitre-surface` | `hsl(0 0% 100% / 0.78)` | `hsl(224 20% 14% / 0.76)` | Panels and elevated surfaces |
| `--vitre-surface-strong` | `hsl(0 0% 100% / 0.94)` | `hsl(224 20% 16% / 0.94)` | Higher-emphasis surfaces |
| `--vitre-surface-soft` | `hsl(214 50% 96% / 0.72)` | `hsl(220 24% 18% / 0.72)` | Hover fills and subtle backgrounds |
| `--vitre-text` | `hsl(222 38% 14%)` | `hsl(210 35% 94%)` | Primary text |
| `--vitre-muted` | `hsl(218 16% 43%)` | `hsl(216 16% 70%)` | Body copy and secondary text |
| `--vitre-subtle` | `hsl(215 18% 58%)` | `hsl(216 13% 58%)` | Low-emphasis text and quiet details |
| `--vitre-border` | `hsl(218 28% 82% / 0.82)` | `hsl(216 18% 32% / 0.82)` | Default borders |
| `--vitre-border-strong` | `hsl(217 25% 72% / 0.95)` | `hsl(216 20% 43% / 0.92)` | High-emphasis borders |
| `--vitre-glass` | `hsl(0 0% 100% / 0.58)` | `hsl(224 20% 20% / 0.52)` | Glass panel background |
| `--vitre-glass-border` | `hsl(0 0% 100% / 0.6)` | `hsl(0 0% 100% / 0.14)` | Glass panel border |
| `--vitre-mark` | `hsl(48 100% 77% / 0.72)` | `hsl(48 100% 60% / 0.22)` | Highlighted text background |
| `--vitre-shadow` | `0 18px 48px hsl(222 35% 18% / 0.1)` | `0 18px 54px hsl(0 0% 0% / 0.36)` | Elevated surface shadow |
| `--vitre-shadow-sm` | `0 8px 24px hsl(222 35% 18% / 0.08)` | `0 8px 28px hsl(0 0% 0% / 0.28)` | Subtle shadow |
| `--vitre-code-bg` | `hsl(220 33% 95%)` | `hsl(224 24% 12%)` | Code block background |
| `--vitre-code-text` | `hsl(224 48% 22%)` | `hsl(210 35% 92%)` | Code text color |
| `--vitre-code-border` | `hsl(218 28% 82% / 0.72)` | `hsl(216 18% 32% / 0.85)` | Code block border |


---

## Effects & Visual

| Variable | Default | Description |
|---|---|---|
| `--vitre-backdrop-blur` | `blur(18px) saturate(160%)` | Backdrop filter for glass surfaces |
| `--vitre-focus-color` | `color-mix(…primary, transparent 70%)` | Focus ring glow color |
| `--vitre-focus` | `0 0 0 3px var(--vitre-focus-color)` | Full focus ring box-shadow |
| `--vitre-page-glow` | `color-mix(…primary, transparent 78%)` | Background radial gradient glow |
| `--vitre-page-tint` | `color-mix(…bg, primary 5%)` | Background gradient tint |

---

## Controls (Inputs & Selects)

| Variable | Default | Description |
|---|---|---|
| `--vitre-control-bg` | `var(--vitre-surface-strong)` | Input / select background |
| `--vitre-control-border` | `var(--vitre-border)` | Input / select border |
| `--vitre-control-text` | `var(--vitre-text)` | Input text color |
| `--vitre-control-placeholder` | `var(--vitre-subtle)` | Placeholder text color |
| `--vitre-control-height` | `2.75rem` | Default height for inputs and selects |
| `--vitre-invalid-focus` | `color-mix(…error, transparent 78%)` | Focus ring on invalid inputs |
| `--vitre-valid-border` | `color-mix(…success, border 35%)` | Border on valid inputs |

---

## Buttons

| Variable | Default | Description |
|---|---|---|
| `--vitre-button-color` | `var(--vitre-primary)` | Base button color (overridden by `data-color`) |
| `--vitre-button-ink` | `var(--vitre-primary-ink)` | Button text color |
| `--vitre-button-height` | `36px` | Button height |
| `--vitre-button-font-size` | `14px` | Button font size |
| `--vitre-button-padding-inline` | `1rem` | Button horizontal padding |
| `--vitre-button-bg-angle` | `180deg` | Gradient angle for button fill |
| `--vitre-button-hover-glow-shadow` | `0 6px 20px …` | Glow shadow on button hover |
| `--vitre-button-hover-drop-shadow` | `0 3px 10px …` | Drop shadow on button hover |
| `--vitre-button-hover-shadow` | Both of the above combined | Full hover shadow |

> **Button color variables** (`--vitre-button-border`, `--vitre-button-bg`, `--vitre-button-bg-start`, `--vitre-button-bg-end`, `--vitre-button-bg-image`, `--vitre-button-hover-border`, `--vitre-button-hover-glow`) are computed at the element level from `--vitre-button-color` and are not meant to be set globally.

---

## Alerts

| Variable | Default | Description |
|---|---|---|
| `--vitre-alert-color` | `var(--vitre-info)` | Alert accent and border color (overridden by `data-color`) |
| `--vitre-alert-bg` | `var(--vitre-info-bg)` | Alert background (overridden by `data-color`) |
| `--vitre-alert-border` | `color-mix(…alert-color, border 45%)` | Alert outer border |
| `--vitre-alert-accent-width` | `0.32rem` | Width of the left accent stripe |

---

## Loading Spinner (busy state)

| Variable | Default | Description |
|---|---|---|
| `--vitre-busy-color` | `currentColor` | Spinner foreground color |
| `--vitre-busy-size` | `1em` | Spinner size |
| `--vitre-busy-border-width` | `2px` | Spinner ring thickness |
| `--vitre-busy-border` | `color-mix(…busy-color, transparent 70%)` | Spinner ring base color |

---

## Tables

| Variable | Default | Description |
|---|---|---|
| `--vitre-table-foot-bg` | `color-mix(…surface-soft, primary 4%)` | `tfoot` background |
| `--vitre-table-row-hover` | `color-mix(…primary, transparent 94%)` | Row hover background |

---

## Progress & Meter

| Variable | Default | Description |
|---|---|---|
| `--vitre-indicator-color` | `var(--vitre-primary)` | Fill color for `<progress>` and `<meter>` (overridden by `data-color`) |

---

## Media

| Variable | Default | Description |
|---|---|---|
| `--vitre-media-aspect` | `16 / 9` | Default aspect ratio for iframes and `data-fit="contain"` media |

---

## Decorative / Misc

| Variable | Default | Description |
|---|---|---|
| `--vitre-link-decoration` | `color-mix(…primary, transparent 55%)` | Link underline color |
| `--vitre-abbr-decoration` | `color-mix(…primary, transparent 35%)` | Abbreviation underline color |
| `--vitre-kbd-shadow` | `color-mix(…border, transparent 20%)` | Inset shadow on `<kbd>` |
| `--vitre-code-bg-end` | `color-mix(…code-bg, black 3%)` | Gradient end for `<pre>` blocks |

---

## Splitter

| Variable | Default | Description |
|---|---|---|
| `--vitre-splitter-size` | `0.375rem` | Width/height of the splitter handle |
| `--vitre-splitter-bg` | `var(--vitre-border)` | Default splitter background |
| `--vitre-splitter-active-bg` | `var(--vitre-primary)` | Splitter background when active/focused |

---

## Tabs

| Variable | Default | Description |
|---|---|---|
| `--vitre-tab-color` | `var(--vitre-subtle)` | Resting tab label color |
| `--vitre-tab-hover-color` | `var(--vitre-text)` | Tab label color on hover |
| `--vitre-tab-hover-bg` | `var(--vitre-surface-soft)` | Tab background on hover |
| `--vitre-tab-active-color` | `var(--vitre-primary)` | Selected tab label and indicator color |
| `--vitre-tab-indicator-width` | `0.14rem` | Thickness of the selected-tab indicator |
| `--vitre-tab-font-size` | `var(--vitre-button-font-size)` | Tab label font size |
| `--vitre-tab-font-weight` | `500` | Tab label font weight |
| `--vitre-tab-gap` | `0.15rem` | Gap between adjacent tabs |
| `--vitre-tab-padding-block` | `0.6rem` | Vertical padding inside a tab |
| `--vitre-tab-padding-inline` | `0.9rem` | Horizontal padding inside a tab |
| `--vitre-tablist-border` | `var(--vitre-border)` | Rule along the tab strip |
| `--vitre-tablist-border-width` | `1px` | Thickness of the tab strip rule |
| `--vitre-tab-panel-padding-block` | `var(--vitre-space-4)` | Space above the active panel |
