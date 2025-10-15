# Mock Data Documentation

This directory contains comprehensive mock data for the e-commerce application. All data is structured following TypeScript interfaces defined in `../types/entities.ts`.

## Overview

The mock database consists of 6 interconnected entities that simulate a realistic e-commerce environment:

- **Categories**: 6 main product categories
- **Collections**: 5 curated product collections
- **Products**: 30 unique products
- **Product Variants**: 60+ color/style variants (2-4 per product)
- **Sizes**: 200+ size options (3-5 per variant)
- **Reviews**: 35 customer reviews (1-3 per product)

## Entity Structure

### Categories (`categories-new.ts`)

**Total**: 6 categories

Main fashion departments with hierarchical support:

1. **Men** - Modern fashion and essentials for men
2. **Women** - Elegant and trendy fashion for women
3. **Kids** - Comfortable and playful clothing for children
4. **Shoes** - Footwear for every occasion
5. **Accessories** - Bags, jewelry, watches, and more
6. **Sale** - Discounted items

**Fields**:
- `id`: Unique identifier
- `name`: Category name
- `slug`: URL-friendly identifier
- `description`: Category description
- `image`: Category banner image (Unsplash)
- `parent_id`: For hierarchical categories (nullable)

**Helper Functions**:
- `getCategoryById(id)`
- `getCategoryBySlug(slug)`
- `getRootCategories()`
- `getChildCategories(parentId)`

---

### Collections (`collections.ts`)

**Total**: 5 collections

Curated product groups for marketing and seasonal promotions:

1. **Summer 2025** - Light and vibrant summer styles
2. **New Arrivals** - Latest fashion finds
3. **Best Sellers** - Customer favorites
4. **Winter Collection** - Cozy winter essentials
5. **Urban Style** - Street-smart contemporary fashion

**Fields**:
- `id`: Unique identifier
- `title`: Collection name
- `slug`: URL-friendly identifier
- `description`: Collection description
- `image`: Collection hero image (Unsplash)

**Helper Functions**:
- `getCollectionById(id)`
- `getCollectionBySlug(slug)`

---

### Products (`products-new.ts`)

**Total**: 30 products

Diverse product catalog across all categories:

**Distribution by Category**:
- Men (category_id: 1): 5 products
- Women (category_id: 2): 5 products
- Kids (category_id: 3): 5 products
- Shoes (category_id: 4): 5 products
- Accessories (category_id: 5): 5 products
- Sale (category_id: 6): 5 products

**Fields**:
- `id`: Unique identifier
- `title`: Product name
- `slug`: URL-friendly identifier
- `description`: Product description
- `category_id`: Associated category
- `base_price`: Base price (actual price in variants)
- `is_featured`: Featured product flag
- `publishedAt`: Publication date (ISO 8601)

**Featured Products**: 7 products marked as featured

**Helper Functions**:
- `getProductById(id)`
- `getProductBySlug(slug)`
- `getProductsByCategory(categoryId)`
- `getFeaturedProducts()`
- `getNewestProducts(limit)`

---

### Product Variants (`variants-and-sizes.ts`)

**Total**: 60+ variants

Each product has 2-4 color/style variants:

**Variant Distribution**:
- Products 1-5 (Men): 2-4 variants each
- Products 6-10 (Women): 2-4 variants each
- Products 11-15 (Kids): 2 variants each
- Products 16-20 (Shoes): 2 variants each
- Products 21-25 (Accessories): 2 variants each
- Products 26-30 (Sale): 2 variants each

**Fields**:
- `id`: Unique identifier
- `product_id`: Associated product
- `sku`: Stock Keeping Unit (unique)
- `color_name`: Color name (e.g., "Black", "Navy")
- `color_hex`: Hex color code (e.g., "#000000")
- `price`: Variant price
- `gallery`: Array of image URLs (1-2 images)

**SKU Format**: `{CATEGORY}-{COLOR}-{PRODUCT_ID}`
- Example: `OXSH-WHT-001` (Oxford Shirt, White, Product 1)

**Helper Functions**:
- `getVariantsByProductId(productId)`
- `getVariantById(id)`
- `getVariantTotalStock(variantId)`

---

### Sizes (`variants-and-sizes.ts`)

**Total**: 200+ size options

Each variant has 3-5 size options with stock quantities:

**Size Systems by Category**:
- **Clothing** (Shirts, Pants, Dresses): S, M, L, XL, XXL
- **Jeans/Pants**: 28, 30, 32, 34, 36, 38
- **Shoes**: 7, 8, 9, 10, 11, 12
- **Accessories**: One Size or S, M, L

**Fields**:
- `id`: Unique identifier
- `variant_id`: Associated variant
- `label`: Size label (e.g., "M", "32", "10")
- `quantity`: Stock quantity (5-25 units)

**Stock Levels**: Randomly generated between 5-25 units per size

**Helper Functions**:
- `getSizesByVariantId(variantId)`
- `getVariantTotalStock(variantId)`

---

### Reviews (`reviews.ts`)

**Total**: 35 reviews

Customer reviews distributed across products:

**Review Distribution**:
- Popular products: 2-3 reviews
- Regular products: 1-2 reviews
- Some products: No reviews (realistic scenario)

**Rating Distribution**:
- 5 stars: ~60% of reviews
- 4 stars: ~35% of reviews
- 3 stars or below: ~5% of reviews

**Fields**:
- `id`: Unique identifier
- `product_id`: Associated product
- `rating`: Star rating (1-5)
- `comment`: Review text (50-150 characters)
- `author_name`: Reviewer name
- `author_email`: Reviewer email
- `createdAt`: Review date (ISO 8601)

**Reviewed Products**: Products 1-12, 16, 17, 18, 21, 23

**Helper Functions**:
- `getReviewsByProductId(productId)`
- `getProductAverageRating(productId)`
- `getProductReviewCount(productId)`
- `getRecentReviews(limit)`

---

## Data Relationships

```
Category (1) ----< (many) Product
Product (1) ----< (many) ProductVariant
Product (1) ----< (many) Review
ProductVariant (1) ----< (many) Size
```

### Example Product Hierarchy

```
Product: Classic White Oxford Shirt
├── Category: Men
├── Variants:
│   ├── White (#FFFFFF)
│   │   └── Sizes: S(15), M(25), L(20), XL(12), XXL(8)
│   ├── Light Blue (#ADD8E6)
│   │   └── Sizes: S(10), M(18), L(15), XL(10)
│   └── Pink (#FFC0CB)
│       └── Sizes: S(8), M(12), L(10)
└── Reviews: 3 reviews (avg 4.7 stars)
```

---

## Image Sources

All product images are sourced from **Unsplash**, a free high-quality image service:

- Categories: Lifestyle and fashion photography
- Collections: Seasonal and thematic imagery
- Products/Variants: Product-specific photos

**Image URL Format**: `https://images.unsplash.com/photo-{id}?w=800`

---

## Data Consistency

### Referential Integrity

All relationships are properly maintained:
- ✅ All products have valid `category_id`
- ✅ All variants have valid `product_id`
- ✅ All sizes have valid `variant_id`
- ✅ All reviews have valid `product_id`

### Realistic Data

- Product prices range from $19.99 to $189.99
- Stock quantities vary realistically (5-25 per size)
- Publication dates span recent months
- Review dates are recent and realistic
- SKUs follow consistent naming convention

---

## Usage in API Endpoints

### Recommended Endpoints

1. **GET /api/categories** - List all categories
2. **GET /api/collections** - List all collections
3. **GET /api/products** - List products (with filters)
4. **GET /api/products/:id** - Get product with variants, sizes, and reviews
5. **GET /api/products/:id/variants** - Get product variants
6. **GET /api/products/:id/reviews** - Get product reviews
7. **GET /api/variants/:id/sizes** - Get sizes for a variant

### Example API Response

```typescript
// GET /api/products/1
{
  id: 1,
  title: "Classic White Oxford Shirt",
  slug: "classic-white-oxford-shirt",
  description: "...",
  category_id: 1,
  base_price: 59.99,
  is_featured: true,
  publishedAt: "2025-01-15T10:00:00Z",
  category: { /* Category object */ },
  variants: [ /* Array of variants with sizes */ ],
  reviews: [ /* Array of reviews */ ],
  averageRating: 4.7,
  reviewCount: 3
}
```

---

## Statistics Summary

| Entity | Count | Notes |
|--------|-------|-------|
| Categories | 6 | All root categories |
| Collections | 5 | Seasonal/promotional |
| Products | 30 | Evenly distributed |
| Variants | 60+ | 2-4 per product |
| Sizes | 200+ | 3-5 per variant |
| Reviews | 35 | 1-3 per popular product |
| **Total Stock** | **~3,000 units** | Across all sizes |

---

## Future Enhancements

Potential additions for v2:

- Product tags and attributes
- Variant images per size
- Review helpfulness voting
- Product recommendations
- Inventory tracking history
- Product bundles
- Wishlist functionality
- Related products mapping

---

## Notes

- All data is generated for demonstration purposes
- Email addresses use `@example.com` domain
- Dates are in ISO 8601 format
- All monetary values in USD
- Images are publicly accessible via Unsplash
