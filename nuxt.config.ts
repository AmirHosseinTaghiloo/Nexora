
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2026-08-04',

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
      googleClientId: ''
    }
  }
})
