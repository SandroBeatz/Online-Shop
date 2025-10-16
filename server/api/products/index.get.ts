import { mockProductsNew } from '../../data/products-new'
import { getVariantsByProductId, getSizesByVariantId } from '../../data/variants-and-sizes'
import type { Product, VariantWithSizes } from '../../types/entities'

/**
 * GET /api/products
 * Retrieves all products with their variants and sizes
 * Supports filtering, sorting, and pagination
 *
 * Query params:
 * - category_id: number (filter by category)
 * - search: string (search in title and description)
 * - minPrice: number (minimum price filter)
 * - maxPrice: number (maximum price filter)
 * - is_featured: boolean (filter featured products)
 * - sort: 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc' | 'newest'
 * - page: number (page number, default 1)
 * - limit: number (items per page, default 10)
 */
export default defineEventHandler((event) => {
  const query = getQuery(event)

  let filteredProducts: Product[] = [...mockProductsNew]

  // Filter by category
  if (query.category_id) {
    const categoryId = Number(query.category_id)
    filteredProducts = filteredProducts.filter(p => p.category_id === categoryId)
  }

  // Filter by featured status
  if (query.is_featured !== undefined) {
    const isFeatured = query.is_featured === 'true' || query.is_featured === true
    filteredProducts = filteredProducts.filter(p => p.is_featured === isFeatured)
  }

  // Filter by search query
  if (query.search) {
    const searchLower = String(query.search).toLowerCase()
    filteredProducts = filteredProducts.filter(p =>
      p.title.toLowerCase().includes(searchLower) ||
      p.description.toLowerCase().includes(searchLower)
    )
  }

  // Filter by price range (using base_price)
  if (query.minPrice) {
    const minPrice = Number(query.minPrice)
    filteredProducts = filteredProducts.filter(p => p.base_price >= minPrice)
  }
  if (query.maxPrice) {
    const maxPrice = Number(query.maxPrice)
    filteredProducts = filteredProducts.filter(p => p.base_price <= maxPrice)
  }

  // Sort products
  const sort = String(query.sort || '')
  switch (sort) {
    case 'price-asc':
      filteredProducts.sort((a, b) => a.base_price - b.base_price)
      break
    case 'price-desc':
      filteredProducts.sort((a, b) => b.base_price - a.base_price)
      break
    case 'name-asc':
      filteredProducts.sort((a, b) => a.title.localeCompare(b.title))
      break
    case 'name-desc':
      filteredProducts.sort((a, b) => b.title.localeCompare(a.title))
      break
    case 'newest':
      filteredProducts.sort((a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      )
      break
  }

  // Pagination
  const page = Number(query.page) || 1
  const limit = Number(query.limit) || 10
  const startIndex = (page - 1) * limit
  const endIndex = startIndex + limit

  const paginatedProducts = filteredProducts.slice(startIndex, endIndex)

  // Enrich products with variants and sizes
  const enrichedProducts = paginatedProducts.map(product => {
    const variants = getVariantsByProductId(product.id)
    const variantsWithSizes: VariantWithSizes[] = variants.map(variant => {
      const sizes = getSizesByVariantId(variant.id)
      const totalStock = sizes.reduce((sum, size) => sum + size.quantity, 0)
      return {
        ...variant,
        sizes,
        totalStock
      }
    })

    return {
      ...product,
      variants: variantsWithSizes
    }
  })

  return {
    products: enrichedProducts,
    total: filteredProducts.length,
    page,
    limit,
    totalPages: Math.ceil(filteredProducts.length / limit)
  }
})
