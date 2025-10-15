# Online Shop - Nuxt 4 E-commerce Application

A fully-functional e-commerce application built with Nuxt 4, Vue 3, and Feature-Sliced Design (FSD) architecture.

## Features

- Hero Banner with Nuxt Swiper carousel
- Product Catalog with filtering, sorting, and pagination
- Product Detail Pages with image galleries
- Shopping Cart with localStorage persistence
- Checkout Process with form validation
- Responsive Design for all screen sizes
- SEO Optimization with meta tags
- TypeScript throughout the codebase

## Tech Stack

- **Nuxt 4.1.3** - Vue meta-framework
- **Vue 3.5** - Composition API
- **TypeScript 5.6** - Type safety
- **Pinia** - State management
- **@nuxt/ui 4.0** - UI component library
- **Nuxt Swiper 2.0** - Carousel/slider component
- **Bun** - Package manager and runtime

## Setup

Install dependencies:

```bash
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
bun run dev
```

## Production

Build the application for production:

```bash
bun run build
```

Preview production build:

```bash
bun run preview
```

## Architecture

This project follows **Feature-Sliced Design (FSD)** methodology with clear separation into:

- **entities/** - Business entities (product, cart, category, order)
- **features/** - User interactions (add-to-cart, filters, search, checkout-form)
- **widgets/** - Composite UI blocks (product-list, cart-summary)
- **shared/** - Reusable utilities and constants
- **pages/** - Application routes

## Pages

1. **Home** (`/`) - Hero banner, categories, featured products, new arrivals
2. **Catalog** (`/catalog`) - Product grid with filters, search, sorting, pagination
3. **Product Detail** (`/catalog/[id]`) - Image gallery, details, add to cart
4. **Cart** (`/cart`) - Cart items, quantities, totals
5. **Checkout** (`/checkout`) - Customer form, delivery, payment, order summary

## Mock Data

- 15 products across 4 categories
- Server-side filtering, sorting, and pagination
- All API endpoints at `/api/*`

Check out the [Nuxt documentation](https://nuxt.com/docs) for more information.
