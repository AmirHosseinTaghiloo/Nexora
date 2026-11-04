import {
  computed,
  toValue,
  type MaybeRefOrGetter
} from 'vue'

interface SiteSeoOptions {
  title: MaybeRefOrGetter<string>
  description: MaybeRefOrGetter<string>
  image?: MaybeRefOrGetter<string | undefined>
  type?: 'website' | 'article'
}

export function useSiteSeo(options: SiteSeoOptions) {
  const route = useRoute()
  const config = useRuntimeConfig()

  const siteUrl = String(config.public.siteUrl || '')
    .replace(/\/+$/, '')

  const title = computed(() => toValue(options.title))
  const description = computed(() => toValue(options.description))

  const canonicalUrl = computed(() => {
    if (!siteUrl) return undefined
    return new URL(route.path, `${siteUrl}/`).toString()
  })

  const imageUrl = computed(() => {
    const image = options.image ? toValue(options.image) : undefined
    if (!image || !siteUrl) return undefined
    return new URL(image, `${siteUrl}/`).toString()
  })

  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogImage: imageUrl,
    ogUrl: canonicalUrl,
    ogType: options.type || 'website',
    ogSiteName: 'NEXORA',
    ogLocale: 'fa_IR',
    twitterCard: 'summary_large_image',
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: imageUrl
  })

  useHead(() => ({
    link: canonicalUrl.value
      ? [{ rel: 'canonical', href: canonicalUrl.value }]
      : []
  }))
}
