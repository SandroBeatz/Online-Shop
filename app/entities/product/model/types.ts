export interface Product {
  id: number
  title: string
  description: string
  price: number
  category: string
  images: string[]
  inStock: boolean
  rating: number
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
