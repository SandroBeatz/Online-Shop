import { getProductById } from '../../data/products-new'
import { getVariantsByProductId, getSizesByVariantId } from '../../data/variants-and-sizes'
import type { VariantWithSizes } from '../../types/entities'

/**
 * GET /api/products/:id
 * Retrieves a single product by ID with its variants and sizes
 *
 * Returns:
 * - Product with all variants and their sizes
 * - 404 error if product not found
 */
export default defineEventHandler((event) => {
  const id = Number(getRouterParam(event, 'id'))

  const product = getProductById(id)

  if (!product) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Product not found'
    })
  }

  // Get variants for this product
  const variants = getVariantsByProductId(product.id)

  // Enrich variants with sizes
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
