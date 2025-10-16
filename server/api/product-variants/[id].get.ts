import { getVariantById, getSizesByVariantId, getVariantsByProductId } from '../../data/variants-and-sizes'
import { getProductById } from '../../data/products-new'
import type { VariantWithSizes, Product } from '../../types/entities'

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
 * GET /api/product-variants/:id
 * Retrieves a single product variant by ID with its parent product and all sibling variants
 * Structure: variant => product => all variants of this product
 *
 * Returns:
 * - Variant with sizes, totalStock, and full product info with all variants
 * - 404 error if variant not found
 */
export default defineEventHandler((event) => {
  const id = Number(getRouterParam(event, 'id'))

  const variant = getVariantById(id)

  if (!variant) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Product variant not found'
    })
  }

  // Get sizes for this variant
  const sizes = getSizesByVariantId(variant.id)
  const totalStock = sizes.reduce((sum, size) => sum + size.quantity, 0)

  // Get the parent product
  const product = getProductById(variant.product_id)

  if (!product) {
    // Return variant without product if product is missing
    return {
      ...variant,
      sizes,
      totalStock
    }
  }

  // Get all variants for this product
  const allVariants = getVariantsByProductId(product.id)
  const allVariantsWithSizes: VariantWithSizes[] = allVariants.map(v => {
    const vSizes = getSizesByVariantId(v.id)
    const vTotalStock = vSizes.reduce((sum, size) => sum + size.quantity, 0)
    return {
      ...v,
      sizes: vSizes,
      totalStock: vTotalStock
    }
  })

  // Return variant with full product and all variants
  const result: VariantWithProductAndVariants = {
    ...variant,
    sizes,
    totalStock,
    product: {
      ...product,
      variants: allVariantsWithSizes
    }
  }

  return result
})
