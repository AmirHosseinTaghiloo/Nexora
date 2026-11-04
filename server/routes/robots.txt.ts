export default defineEventHandler((event) => {
  const config = useRuntimeConfig(event)

  const siteUrl = String(
    config.public.siteUrl || getRequestURL(event).origin
  ).replace(/\/+$/, '')

  setHeader(event, 'Content-Type', 'text/plain; charset=utf-8')

  setHeader(
    event,
    'Cache-Control',
    'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400'
  )

  return [
    'User-agent: *',
    'Allow: /',
    `Sitemap: ${siteUrl}/sitemap.xml`
  ].join('\\n')
})
