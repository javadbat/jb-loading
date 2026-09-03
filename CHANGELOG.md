# Changelog

## [2.1.0] - 2026-09-03

### Changed

- Aligned the package release with the coordinated JB Design System standardization release.

## [2.0.0] - 2026-09-01

### Changed

- Added `primary`, `secondary`, `neutral`, `content-inverse`, `content-primary`, and `content-secondary` color variants, with `neutral` as the default.
- Added `xs`, `sm`, `md`, `lg`, and `xl` size variants with a `md` (1.5rem) default; width and height CSS variables remain available for custom sizing.
- Made custom-element module evaluation SSR-safe by extending `JBBaseComponent` where needed and registering elements through the shared `defineWebComponent()` helper; raised the minimum `jb-core` version to `0.35.0`.

## [1.8.1] - 2026-08-14

### Changed

- Extended the SSR-safe `JBBaseComponent` and guarded custom-element registration so the package can be imported without browser globals.
- Preserved the React client boundary in the published React entry point and generated bundles.

## [1.8.0] - 2026-07-14

### Added

- Added `loading-wrapper`, `loading-svg`, and `loading-circle` CSS parts for targeted spinner customization.
- Added standard styling documentation, a live style gallery, and reusable custom theme recipes.

### Changed

- Standardized theme recipes on `jb-loading.<theme>-style`, public parts, and custom-state selectors without redundant component hook classes.
