export type ProductId = number
export type ProductVariantId = number

export interface Product {
    id: ProductId
    title: string
    slug: string
    description: string
    category_id: number
    base_price: number // Base price, actual price is in variants
    is_featured: boolean
    publishedAt: string // ISO date string
}

export interface ProductVariant {
    id: ProductVariantId
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

export type ProductItem = ProductVariant & {
    product: Product & {
        variants: ProductVariant[]
    }
    totalStock: number
}

export interface ProductItemsResponse {
    variants: ProductItem[]
    total: number
    page: number
    limit: number
    totalPages: number
}

export interface ProductCardProps {
    imageUrl: string
    title: string
    price: number
    to: string
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
