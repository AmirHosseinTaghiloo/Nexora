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

  postcss: {
    plugins: {
      '@tailwindcss/postcss': {}
    }
  },

  runtimeConfig: {
    googleClientSecret: '',

    sessionPassword: '',

    public: {
      googleClientId: ''
    }
  }
})