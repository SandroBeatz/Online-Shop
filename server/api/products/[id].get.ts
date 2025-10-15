import { mockProducts } from '../../data/products'

export default defineEventHandler((event) => {
  const id = Number(getRouterParam(event, 'id'))

  const product = mockProducts.find(p => p.id === id)

  if (!product) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Product not found'
    })
  }

  return product
})
