import { defineStore } from 'pinia'
import type { Product } from '@/types/product'

export const useWishlistStore = defineStore(
  'wishlist',
  () => {
    const items = ref<Product[]>([])

    function isInWishlist(id: number) {
      return items.value.some(
        product => product.id === id
      )
    }

    function addToWishlist(product: Product) {
      if (!isInWishlist(product.id)) {
        items.value.push(product)
      }
    }

    function removeFromWishlist(id: number) {
      items.value = items.value.filter(
        product => product.id !== id
      )
    }

    function toggleWishlist(product: Product) {
      if (isInWishlist(product.id)) {
        removeFromWishlist(product.id)
      } else {
        addToWishlist(product)
      }
    }

    function clearWishlist() {
      items.value = []
    }

    return {
      items,
      isInWishlist,
      addToWishlist,
      removeFromWishlist,
      toggleWishlist,
      clearWishlist
    }
  },
  {
    persist: true
  }
)