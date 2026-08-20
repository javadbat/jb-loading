# Changelog

## Unreleased

### Changed

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
