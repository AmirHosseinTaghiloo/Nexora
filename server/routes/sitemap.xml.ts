import { products } from '../../app/data/products'

function escapeXml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export default defineEventHandler((event) => {
  const config = useRuntimeConfig(event)

  const siteUrl = String(
    config.public.siteUrl || getRequestURL(event).origin
  ).replace(/\/+$/, '')

  const publicRoutes = [
    '/',
    '/products',
    '/about-us',
    '/blog',
    ...products.map(product =>
      `/products/${product.slug.toLowerCase()}`
    )
  ]

  const urls = [...new Set(publicRoutes)]
    .map(path => {
      const loc = new URL(path, `${siteUrl}/`).toString()
      return `<url><loc>${escapeXml(loc)}</loc></url>`
    })
    .join('')

  setHeader(event, 'Content-Type', 'application/xml; charset=utf-8')
  setHeader(
    event,
    'Cache-Control',
    'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400'
  )

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`
})
