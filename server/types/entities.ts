/**
 * E-commerce Entity Type Definitions
 * These interfaces define the structure of all entities in the mock database
 */

/**
 * Category - Product categorization
 * Supports hierarchical categories with parent_id
 */
export interface Category {
  id: number
  name: string
  slug: string
  description: string
  image: string
  parent_id: number | null // null for root categories
}

/**
 * Collection - Curated product groups
 * Used for seasonal collections, promotions, etc.
 */
export interface Collection {
  id: number
  title: string
  slug: string
  description: string
  image: string
}

/**
 * Product - Base product information
 * Actual purchasable items are variants
 */
export interface Product {
  id: number
  title: string
  slug: string
  description: string
  category_id: number
  base_price: number // Base price, actual price is in variants
  is_featured: boolean
  publishedAt: string // ISO date string
}

/**
 * ProductVariant - Specific product variation
 * Each product can have multiple variants (colors, etc.)
 */
export interface ProductVariant {
  id: number
  product_id: number
  sku: string // Stock Keeping Unit (unique identifier)
  color_name: string
  color_hex: string // Hex color code (e.g., "#FF5733")
  price: number
  gallery: string[] // Array of image URLs
}

/**
 * Size - Size availability for a variant
 * Tracks size and stock quantity
 */
export interface Size {
  id: number
  variant_id: number
  label: string // Size label (e.g., "S", "M", "L", "XL")
  quantity: number // Stock quantity
}

/**
 * Review - Product reviews and ratings
 * Customer feedback for products
 */
export interface Review {
  id: number
  product_id: number
  rating: number // 1-5 stars
  comment: string
  author_name: string
  author_email: string
  createdAt: string // ISO date string
}

/**
 * Extended Product with Relations
 * Used for detailed product views with all related data
 */
export interface ProductWithRelations extends Product {
  category?: Category
  variants?: ProductVariant[]
  reviews?: Review[]
  averageRating?: number
  reviewCount?: number
}

/**
 * Extended Variant with Relations
 * Includes size information
 */
export interface VariantWithSizes extends ProductVariant {
  sizes?: Size[]
  totalStock?: number
}
