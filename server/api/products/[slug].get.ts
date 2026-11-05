import { products } from '~/data/products'

export default defineEventHandler((event) => {
  const slug = getRouterParam(event, 'slug')

  if (!slug) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Product slug is required'
    })
  }

  const product = products.find(
    item => item.slug.toLowerCase() === slug.toLowerCase()
  )

  if (!product) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Product not found'
    })
  }

  return {
    data: product
  }
})
