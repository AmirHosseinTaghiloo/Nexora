import tailwindcss from '@tailwindcss/vite'
import { products } from './app/data/products'

export default defineNuxtConfig({
  compatibilityDate: '2026-08-04',

  app: {
    head: {
      title: 'فروشگاه اینترنتی کالای دیجیتال',
      titleTemplate: '%s | NEXORA',
      htmlAttrs: {
        lang: 'fa',
        dir: 'rtl'
      },
      meta: [
        {
          name: 'description',
          content: 'خرید آنلاین موبایل، لپ‌تاپ و لوازم دیجیتال از فروشگاه NEXORA؛ مشاهده قیمت، مشخصات و تصاویر محصولات.'
        },
        {
          name: 'theme-color',
          content: '#0d0d2e'
        }
      ]
    }
  },

  devtools: {
    enabled: false
  },

  modules: [
    '@pinia/nuxt',
    'nuxt-auth-utils'
  ],

  css: [
    '~/assets/css/main.css'
  ],

  vite: {
    plugins: [
      tailwindcss()
    ]
  },

  runtimeConfig: {
    googleClientSecret: '',
    sessionPassword: '',

    public: {
      googleClientId: '',
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://nexora-iota-gules.vercel.app'
    }
  },

  // Preserve old numeric product URLs when switching to readable slugs.
  routeRules: {
    '/products/1': {
      redirect: {
        to: '/products/iphone-15-pro-max',
        statusCode: 301
      }
    },
    '/products/2': {
      redirect: {
        to: '/products/macbook-pro-m3',
        statusCode: 301
      }
    },
    '/products/3': {
      redirect: {
        to: '/products/samsung-galaxy-s25-ultra-5g',
        statusCode: 301
      }
    },
    '/products/4': {
      redirect: {
        to: '/products/apple-watch-series-11',
        statusCode: 301
      }
    }
  },

  nitro: {
    prerender: {
      routes: [
        '/sitemap.xml',
        '/robots.txt',
        ...products.map(product =>
          `/products/${product.slug.toLowerCase()}`
        )
      ]
    }
  }
})
