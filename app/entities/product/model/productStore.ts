import { defineStore } from 'pinia'
import type { Product, ProductQuery } from './types'

interface ProductState {
  products: Product[]
  currentProduct: Product | null
  total: number
  page: number
  limit: number
  totalPages: number
  loading: boolean
  error: string | null
}

export const useProductStore = defineStore('product', {
  state: (): ProductState => ({
    products: [],
    currentProduct: null,
    total: 0,
    page: 1,
    limit: 10,
    totalPages: 0,
    loading: false,
    error: null
  }),

  getters: {
    featuredProducts: (state) => state.products.filter(p => p.rating >= 4.5).slice(0, 4),
    newArrivals: (state) => [...state.products].sort((a, b) => b.id - a.id).slice(0, 4)
  },

  actions: {
    async fetchProducts(query: ProductQuery = {}) {
      this.loading = true
      this.error = null

      try {
        const { data, error } = await useFetch('/api/products', {
          query: {
            category: query.filters?.category,
            search: query.filters?.search,
            minPrice: query.filters?.minPrice,
            maxPrice: query.filters?.maxPrice,
            sort: query.sort,
            page: query.page || 1,
            limit: query.limit || 10
          }
        })

        if (error.value) {
          throw new Error(error.value.message)
        }

        if (data.value) {
          this.products = data.value.products
          this.total = data.value.total
          this.page = data.value.page
          this.limit = data.value.limit
          this.totalPages = data.value.totalPages
        }
      } catch (err) {
        this.error = err instanceof Error ? err.message : 'Failed to fetch products'
        console.error('Error fetching products:', err)
      } finally {
        this.loading = false
      }
    },

    async fetchProductById(id: number) {
      this.loading = true
      this.error = null

      try {
        const { data, error } = await useFetch(`/api/products/${id}`)

        if (error.value) {
          throw new Error(error.value.message)
        }

        if (data.value) {
          this.currentProduct = data.value as Product
        }
      } catch (err) {
        this.error = err instanceof Error ? err.message : 'Failed to fetch product'
        console.error('Error fetching product:', err)
      } finally {
        this.loading = false
      }
    },

    getRelatedProducts(productId: number, category: string): Product[] {
      return this.products
        .filter(p => p.category === category && p.id !== productId)
        .slice(0, 4)
    }
  }
})
