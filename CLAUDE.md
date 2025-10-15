# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an **Online Shop** built with **Nuxt 4** (Vue 3 framework). The project is in its initial setup phase with minimal scaffolding.

**Key Technologies:**
- **Nuxt 4.1.3** - Vue meta-framework with SSR/SSG capabilities
- **Vue 3.5** - Composition API
- **TypeScript 5.6** - Type-safe development
- **Bun** - Package manager and runtime (note: `bun.lock` present)
- **@nuxt/ui 4.0** - UI component library
- **@nuxt/image 1.11** - Image optimization
- **@nuxt/scripts 0.12** - Script management
- **@nuxt/eslint 1.9** - Linting integration
- **@googlemaps/markerclusterer** - Google Maps integration

## Development Commands

**Package Manager:** This project uses **Bun** (not npm/pnpm/yarn).

```bash
# Install dependencies
bun install

# Start development server (http://localhost:3000)
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview

# Generate static site
bun run generate
```

## Linting

```bash
# Run ESLint (configured via @nuxt/eslint)
# The eslint config is auto-generated in .nuxt/eslint.config.mjs
npx eslint .
```

## Architecture

### Nuxt 4 Structure
- **`app/app.vue`** - Root application component (currently just shows NuxtWelcome)
- **`nuxt.config.ts`** - Nuxt configuration with module registration
- **`public/`** - Static assets served at root
- **`.nuxt/`** - Auto-generated Nuxt runtime (gitignored)

### Configuration Notes
- **TypeScript:** Uses project references pointing to `.nuxt/tsconfig.*.json` files (app, server, shared, node)
- **ESLint:** Extends auto-generated config from `.nuxt/eslint.config.mjs`
- **Compatibility Date:** Set to `2025-07-15` in nuxt.config.ts
- **Devtools:** Enabled in config

### Expected Directories (not yet created)
Following Nuxt conventions, the project may expand to include:
- **`pages/`** - File-based routing (auto-generates routes)
- **`components/`** - Auto-imported Vue components
- **`composables/`** - Auto-imported composition functions
- **`layouts/`** - Page layouts
- **`middleware/`** - Route middleware
- **`server/`** - API routes and server middleware
- **`assets/`** - Assets processed by build tools (CSS, images)
- **`plugins/`** - Vue plugins and app-level code

## Module-Specific Notes

### @nuxt/ui
Provides pre-built UI components. Components are auto-imported. Uses Tailwind CSS under the hood.

### @nuxt/image
Optimized image component. Use `<NuxtImg>` or `<NuxtPicture>` instead of `<img>` for automatic optimization.

### @nuxt/scripts
Manages third-party scripts with performance optimizations. Useful for analytics, maps, etc.

### Google Maps Integration
The `@googlemaps/markerclusterer` package suggests map functionality will be implemented. Likely used with @nuxt/scripts for loading Google Maps API.

## Testing
The project has `@nuxt/test-utils` installed but no test scripts configured yet in package.json.