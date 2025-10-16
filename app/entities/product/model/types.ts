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

export type ProductItem = ProductVariant & {
    product: Product & {
        variants: ProductVariant[]
    }
    totalStock: number
}

export interface ProductVariant {
    id: number
    product_id: number
    sku: string // Stock Keeping Unit (unique identifier)
    color_name: string
    color_hex: string // Hex color code (e.g., "#FF5733")
    price: number
    gallery: string[] // Array of image URLs
}


export interface Size {
    id: number
    variant_id: number
    label: string // Size label (e.g., "S", "M", "L", "XL")
    quantity: number // Stock quantity
}

export interface ProductFilters {
    category?: string
    minPrice?: number
    maxPrice?: number
    search?: string
}

export type SortOption = 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc' | 'newest'

export interface ProductQuery {
    filters?: ProductFilters
    sort?: SortOption
    page?: number
    limit?: number
}
