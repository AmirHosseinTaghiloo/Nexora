import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    './app/**/*.{vue,js,ts}',
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue'
  ],

  theme: {
    extend: {
      colors: {
        brand: '#5b5cf0'
      }
    }
  },

  plugins: []
}