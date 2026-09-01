# jb-loading

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/jb-loading)
[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://raw.githubusercontent.com/javadbat/jb-loading/main/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/jb-loading)](https://www.npmjs.com/package/jb-loading)
![GitHub Created At](https://img.shields.io/github/created-at/javadbat/jb-loading)

SVG loading spinner web component.

- Fills its host size.
- Uses a lightweight SVG animation.
- Customizable with CSS variables.
- Works as a standalone web component or inside other JB components.

## When to use

Use `jb-loading` for a visual loading indicator inside a button, empty state, panel, or page area. [See it in the component examples](https://javadbat.github.io/design-system/?path=/story/components-jbloading--overview).

Pair it with text, `aria-busy`, or `aria-live` on the surrounding UI when users need an accessible loading announcement.

## Demo

[Try the Storybook examples](https://javadbat.github.io/design-system/?path=/story/components-jbloading--overview) or [open the GitHub Pages demo](https://javadbat.github.io/jb-loading/).

## Using With JS Frameworks

<a href="https://github.com/javadbat/jb-loading/tree/main/react" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/React.js-jb--loading%2Freact-000.svg?logo=react&logoColor=%2361DAFB" height="30" /></a>

See the [React API and examples](https://javadbat.github.io/design-system/?path=/docs/components-jbloading-react-readme--docs).

Other integrations: <a href="https://javadbat.github.io/design-system/?path=/docs/getting-started-framework-integration--docs#angular" target="_blank" rel="noopener noreferrer">Angular</a> · <a href="https://javadbat.github.io/design-system/?path=/docs/getting-started-framework-integration--docs#vue" target="_blank" rel="noopener noreferrer">Vue</a> · <a href="https://javadbat.github.io/design-system/?path=/docs/getting-started-framework-integration--docs#nuxt" target="_blank" rel="noopener noreferrer">Nuxt</a> · <a href="https://javadbat.github.io/design-system/?path=/docs/getting-started-framework-integration--docs#svelte" target="_blank" rel="noopener noreferrer">Svelte</a> · <a href="https://javadbat.github.io/design-system/?path=/docs/getting-started-framework-integration--docs#sveltekit" target="_blank" rel="noopener noreferrer">SvelteKit</a> · <a href="https://javadbat.github.io/design-system/?path=/docs/getting-started-framework-integration--docs#solidjs" target="_blank" rel="noopener noreferrer">SolidJS</a> · <a href="https://javadbat.github.io/design-system/?path=/docs/getting-started-framework-integration--docs#lit" target="_blank" rel="noopener noreferrer">Lit</a> · <a href="https://javadbat.github.io/design-system/?path=/docs/getting-started-framework-integration--docs#nextjs" target="_blank" rel="noopener noreferrer">Next.js</a> · <a href="https://javadbat.github.io/design-system/?path=/docs/getting-started-framework-integration--docs#astro" target="_blank" rel="noopener noreferrer">Astro</a> · <a href="https://javadbat.github.io/design-system/?path=/docs/getting-started-framework-integration--docs#blazor" target="_blank" rel="noopener noreferrer">Blazor</a> · <a href="https://javadbat.github.io/design-system/?path=/docs/getting-started-framework-integration--docs#server-rendered-templates" target="_blank" rel="noopener noreferrer">Server-rendered templates</a> · <a href="https://javadbat.github.io/design-system/?path=/docs/getting-started-framework-integration--docs#wordpress" target="_blank" rel="noopener noreferrer">WordPress</a> · <a href="https://javadbat.github.io/design-system/?path=/docs/getting-started-framework-integration--docs#alpinejs-and-htmx" target="_blank" rel="noopener noreferrer">Alpine.js and HTMX</a>

## Installation

### Using npm

```sh
npm i jb-loading
```

```js
import 'jb-loading';
```

```html
<jb-loading></jb-loading>
```

### Using CDN

```html
<script src="https://cdn.jsdelivr.net/npm/jb-loading/dist/JBLoading.umd.js"></script>
<jb-loading></jb-loading>
```

## API reference

### Attributes

| attribute | values | default | description |
| --- | --- | --- | --- |
| `size` | `xs`, `sm`, `md`, `lg`, `xl` | `md` | Sets the spinner size. |
| `color` | `primary`, `secondary`, `neutral`, `content-inverse`, `content-primary`, `content-secondary` | `neutral` | Sets the spinner color. |

### Properties

`jb-loading` does not currently define public JavaScript properties.

### Methods

`jb-loading` does not currently define public methods.

### Events

The lifecycle example verifies both events dispatched when the component connects. [Demo](https://javadbat.github.io/design-system/?path=/story/components-jbloading--lifecycle-events)

| event | detail | description |
| --- | --- | --- |
| `load` | none | Dispatched from `connectedCallback` when the component is connected. |
| `init` | none | Dispatched from `connectedCallback` after `load`. |

## Slots and CSS parts

`jb-loading` does not expose public slots. Its CSS parts are demonstrated in the [style gallery](https://javadbat.github.io/design-system/?path=/story/components-jbloading-style--gallery):

| CSS part | description |
| --- | --- |
| `loading-wrapper` | Wrapper around the spinner SVG. |
| `loading-svg` | Animated spinner SVG. |
| `loading-circle` | Visible spinner circle. |

## Custom style

For complete styling guidance, live examples, and copyable style recipes, see the [Styling guide](https://javadbat.github.io/design-system/?path=/docs/components-jbloading-styling) and [style gallery](https://javadbat.github.io/design-system/?path=/story/components-jbloading-style--gallery).

Set CSS variables in the parent scope of the component.

| CSS variable name | description |
| --- | --- |
| `--jb-loading-color` | Spinner stroke color. |
| `--jb-loading-color-primary` | Color of the `primary` variant. |
| `--jb-loading-color-secondary` | Color of the `secondary` variant. |
| `--jb-loading-color-neutral` | Color of the `neutral` variant. |
| `--jb-loading-color-content-inverse` | Color of the `content-inverse` variant. |
| `--jb-loading-color-content-primary` | Color of the `content-primary` variant. |
| `--jb-loading-color-content-secondary` | Color of the `content-secondary` variant. |
| `--jb-loading-width` | Host width. Defaults to the selected size. |
| `--jb-loading-height` | Host height. Defaults to the selected size. |
| `--jb-loading-size-xs` | Size of the `xs` variant. Defaults to `1rem`. |
| `--jb-loading-size-sm` | Size of the `sm` variant. Defaults to `1.25rem`. |
| `--jb-loading-size-md` | Size of the `md` variant. Defaults to `1.5rem`. |
| `--jb-loading-size-lg` | Size of the `lg` variant. Defaults to `2rem`. |
| `--jb-loading-size-xl` | Size of the `xl` variant. Defaults to `3rem`. |

```css
jb-loading {
  --jb-loading-width: 2.75rem;
  --jb-loading-height: 2.75rem;
  --jb-loading-color: var(--jb-primary);
}
```

## Accessibility notes

`jb-loading` is a visual spinner. Add accessible loading semantics to the surrounding UI when needed. [Accessible usage example](https://javadbat.github.io/design-system/?path=/story/components-jbloading--normal)

```html
<div aria-busy="true" aria-live="polite">
  <jb-loading style="--jb-loading-width: 1.5rem; --jb-loading-height: 1.5rem;"></jb-loading>
  <span>Loading</span>
</div>
```

## Related Docs

- See [`jb-loading/react`](https://github.com/javadbat/jb-loading/tree/main/react) if you want to use this component in React.
- See [All JB Design System Component List](https://javadbat.github.io/design-system/) for more components.
- Use [Contribution Guide](https://github.com/javadbat/design-system/blob/main/docs/contribution-guide.md) if you want to contribute to this component.

## AI agent notes

- Import `jb-loading` once before using `<jb-loading>`.
- The `size` attribute supports `xs`, `sm`, `md`, `lg`, and `xl`; it defaults to `md`.
- Set size with `--jb-loading-width` and `--jb-loading-height` or you can set width/height directly.
- Set color with `--jb-loading-color`.
- Add accessible loading text or state outside the component when the loading state must be announced.
- This package includes [`custom-elements.json`](./custom-elements.json) and points to it with the package.json `customElements` field. The field is documented by the Custom Elements Manifest project in [Referencing manifests from npm packages](https://github.com/webcomponents/custom-elements-manifest#referencing-manifests-from-npm-packages).
- In `custom-elements.json`, `exports.kind: "js"` describes the JavaScript/TypeScript class export and `exports.kind: "custom-element-definition"` maps the `jb-loading` tag name to that class.
