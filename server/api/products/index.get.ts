import { mockProducts } from '../../data/products'
import type { Product, SortOption } from '../../../app/entities/product/model/types'

export default defineEventHandler((event) => {
  const query = getQuery(event)

  let filteredProducts: Product[] = [...mockProducts]

  // Filter by category
  if (query.category && query.category !== 'all') {
    filteredProducts = filteredProducts.filter(p => p.category === query.category)
  }

  // Filter by search query
  if (query.search) {
    const searchLower = String(query.search).toLowerCase()
    filteredProducts = filteredProducts.filter(p =>
      p.title.toLowerCase().includes(searchLower) ||
      p.description.toLowerCase().includes(searchLower)
    )
  }

  // Filter by price range
  if (query.minPrice) {
    const minPrice = Number(query.minPrice)
    filteredProducts = filteredProducts.filter(p => p.price >= minPrice)
  }
  if (query.maxPrice) {
    const maxPrice = Number(query.maxPrice)
    filteredProducts = filteredProducts.filter(p => p.price <= maxPrice)
  }

  // Sort products
  const sort = query.sort as SortOption
  switch (sort) {
    case 'price-asc':
      filteredProducts.sort((a, b) => a.price - b.price)
      break
    case 'price-desc':
      filteredProducts.sort((a, b) => b.price - a.price)
      break
    case 'name-asc':
      filteredProducts.sort((a, b) => a.title.localeCompare(b.title))
      break
    case 'name-desc':
      filteredProducts.sort((a, b) => b.title.localeCompare(a.title))
      break
    case 'newest':
      filteredProducts.sort((a, b) => b.id - a.id)
      break
  }

  // Pagination
  const page = Number(query.page) || 1
  const limit = Number(query.limit) || 10
  const startIndex = (page - 1) * limit
  const endIndex = startIndex + limit

  const paginatedProducts = filteredProducts.slice(startIndex, endIndex)

  return {
    products: paginatedProducts,
    total: filteredProducts.length,
    page,
    limit,
    totalPages: Math.ceil(filteredProducts.length / limit)
  }
})
