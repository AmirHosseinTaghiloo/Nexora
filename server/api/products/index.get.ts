import { products } from '~/data/products'
import type { Product } from '~/types/product'

type ProductSort = 'newest' | 'price-asc' | 'price-desc' | 'rating'

const allowedSorts: ProductSort[] = [
  'newest',
  'price-asc',
  'price-desc',
  'rating'
]

export default defineEventHandler((event) => {
  const query = getQuery(event)

  const search = String(query.search ?? '').trim().toLocaleLowerCase('fa-IR')
  const category = String(query.category ?? '').trim()
  const sort = String(query.sort ?? 'newest') as ProductSort

  const page = Math.max(1, Number.parseInt(String(query.page ?? '1'), 10) || 1)
  const limit = Math.min(48, Math.max(1, Number.parseInt(String(query.limit ?? '12'), 10) || 12))

  const minPrice = query.minPrice === undefined
    ? undefined
    : Number(query.minPrice)
  const maxPrice = query.maxPrice === undefined
    ? undefined
    : Number(query.maxPrice)

  if (minPrice !== undefined && (!Number.isFinite(minPrice) || minPrice < 0)) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid minimum price' })
  }

  if (maxPrice !== undefined && (!Number.isFinite(maxPrice) || maxPrice < 0)) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid maximum price' })
  }

  if (minPrice !== undefined && maxPrice !== undefined && minPrice > maxPrice) {
    throw createError({ statusCode: 400, statusMessage: 'Minimum price cannot exceed maximum price' })
  }

  let result: Product[] = [...products]

  if (search) {
    result = result.filter((product) => {
      const searchableText = [
        product.title,
        product.category,
        product.description,
        product.brand ?? '',
        ...(product.tags ?? [])
      ].join(' ').toLocaleLowerCase('fa-IR')

      return searchableText.includes(search)
    })
  }

  if (category && category !== 'all') {
    result = result.filter(product => product.category === category)
  }

  if (minPrice !== undefined) {
    result = result.filter(product => product.price >= minPrice)
  }

  if (maxPrice !== undefined) {
    result = result.filter(product => product.price <= maxPrice)
  }

  if (allowedSorts.includes(sort)) {
    const sorters: Record<ProductSort, (a: Product, b: Product) => number> = {
      newest: (a, b) => b.id - a.id,
      'price-asc': (a, b) => a.price - b.price,
      'price-desc': (a, b) => b.price - a.price,
      rating: (a, b) => b.rating - a.rating
    }

    result.sort(sorters[sort])
  }

  const total = result.length
  const totalPages = Math.ceil(total / limit)
  const start = (page - 1) * limit

  return {
    data: result.slice(start, start + limit),
    meta: {
      page,
      limit,
      total,
      totalPages,
      hasNextPage: page < totalPages,
      hasPreviousPage: page > 1
    }
  }
})
