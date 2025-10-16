import { mockVariants, getSizesByVariantId, getVariantsByProductId } from '../../data/variants-and-sizes'
import { getProductById } from '../../data/products-new'
import type { ProductVariant, VariantWithSizes, Product } from '../../types/entities'

/**
 * Extended variant with full product and all variants
 * Structure: variant => product => all variants of this product
 */
interface VariantWithProductAndVariants extends VariantWithSizes {
  product?: Product & {
    variants?: VariantWithSizes[]
  }
}

/**
 * GET /api/product-variants
 * Retrieves all product variants with their parent product and all sibling variants
 * Structure: each variant includes its sizes, totalStock, and full product info with all variants
 *
 * Query params:
 * - product_id: number (filter by product)
 * - category_id: number (filter by product category through product relation)
 * - color_name: string (filter by color name)
 * - minPrice: number (minimum price filter)
 * - maxPrice: number (maximum price filter)
 * - in_stock: boolean (filter variants with stock > 0)
 * - sort: 'price-asc' | 'price-desc' | 'color-asc' | 'color-desc'
 * - page: number (page number, default 1)
 * - limit: number (items per page, default 10)
 */
export default defineEventHandler((event) => {
  const query = getQuery(event)

  let filteredVariants: ProductVariant[] = [...mockVariants]

  // Filter by category_id through product relation
  if (query.category_id) {
    const categoryId = Number(query.category_id)
    filteredVariants = filteredVariants.filter(v => {
      const product = getProductById(v.product_id)
      return product && product.category_id === categoryId
    })
  }

  // Filter by product_id
  if (query.product_id) {
    const productId = Number(query.product_id)
    filteredVariants = filteredVariants.filter(v => v.product_id === productId)
  }

  // Filter by color name
  if (query.color_name) {
    const colorLower = String(query.color_name).toLowerCase()
    filteredVariants = filteredVariants.filter(v =>
      v.color_name.toLowerCase().includes(colorLower)
    )
  }

  // Filter by price range
  if (query.minPrice) {
    const minPrice = Number(query.minPrice)
    filteredVariants = filteredVariants.filter(v => v.price >= minPrice)
  }
  if (query.maxPrice) {
    const maxPrice = Number(query.maxPrice)
    filteredVariants = filteredVariants.filter(v => v.price <= maxPrice)
  }

  // Enrich variants with sizes first (needed for in_stock filter)
  let enrichedVariants: VariantWithSizes[] = filteredVariants.map(variant => {
    const sizes = getSizesByVariantId(variant.id)
    const totalStock = sizes.reduce((sum, size) => sum + size.quantity, 0)
    return {
      ...variant,
      sizes,
      totalStock
    }
  })

  // Filter by stock availability
  if (query.in_stock !== undefined) {
    const inStock = query.in_stock === 'true' || query.in_stock === true
    if (inStock) {
      enrichedVariants = enrichedVariants.filter(v => (v.totalStock || 0) > 0)
    } else {
      enrichedVariants = enrichedVariants.filter(v => (v.totalStock || 0) === 0)
    }
  }

  // Sort variants
  const sort = String(query.sort || '')
  switch (sort) {
    case 'price-asc':
      enrichedVariants.sort((a, b) => a.price - b.price)
      break
    case 'price-desc':
      enrichedVariants.sort((a, b) => b.price - a.price)
      break
    case 'color-asc':
      enrichedVariants.sort((a, b) => a.color_name.localeCompare(b.color_name))
      break
    case 'color-desc':
      enrichedVariants.sort((a, b) => b.color_name.localeCompare(a.color_name))
      break
  }

  // Pagination
  const page = Number(query.page) || 1
  const limit = Number(query.limit) || 10
  const startIndex = (page - 1) * limit
  const endIndex = startIndex + limit

  const paginatedVariants = enrichedVariants.slice(startIndex, endIndex)

  // Enrich variants with product and all variants
  const fullyEnrichedVariants: VariantWithProductAndVariants[] = paginatedVariants.map(variant => {
    const product = getProductById(variant.product_id)

    if (product) {
      // Get all variants for this product
      const allVariants = getVariantsByProductId(product.id)
      const allVariantsWithSizes: VariantWithSizes[] = allVariants.map(v => {
        const sizes = getSizesByVariantId(v.id)
        const totalStock = sizes.reduce((sum, size) => sum + size.quantity, 0)
        return {
          ...v,
          sizes,
          totalStock
        }
      })

      return {
        ...variant,
        product: {
          ...product,
          variants: allVariantsWithSizes
        }
      }
    }

    return variant
  })

  return {
    variants: fullyEnrichedVariants,
    total: enrichedVariants.length,
    page,
    limit,
    totalPages: Math.ceil(enrichedVariants.length / limit)
  }
})
