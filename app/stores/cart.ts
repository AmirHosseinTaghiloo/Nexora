import type { Product } from '@/types/product'

export interface CartItem extends Product {
  quantity: number
}

export const useCartStore = defineStore('cart', () => {
  const items = ref<CartItem[]>([])

  const totalItems = computed(() => {
    return items.value.reduce(
      (total, item) => total + item.quantity,
      0
    )
  })

  const subtotal = computed(() => {
    return items.value.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    )
  })

  const shippingCost = computed(() => {
    if (items.value.length === 0) {
      return 0
    }

    if (subtotal.value >= 5000000) {
      return 0
    }

    return 120000
  })

  const totalPrice = computed(() => {
    return subtotal.value + shippingCost.value
  })

  function addToCart(product: Product) {
    const existingItem = items.value.find(
      item => item.id === product.id
    )

    if (existingItem) {
      existingItem.quantity++
    } else {
      items.value.push({
        ...product,
        quantity: 1
      })
    }

    saveCart()
  }

  function increaseQuantity(productId: number) {
    const item = items.value.find(
      item => item.id === productId
    )

    if (!item) return

    item.quantity++

    saveCart()
  }

  function decreaseQuantity(productId: number) {
    const item = items.value.find(
      item => item.id === productId
    )

    if (!item) return

    if (item.quantity > 1) {
      item.quantity--
    } else {
      removeFromCart(productId)
      return
    }

    saveCart()
  }

  function removeFromCart(productId: number) {
    items.value = items.value.filter(
      item => item.id !== productId
    )

    saveCart()
  }

  function clearCart() {
    items.value = []

    saveCart()
  }

  function saveCart() {
    if (!import.meta.client) return

    localStorage.setItem(
      'nexora-cart',
      JSON.stringify(items.value)
    )
  }

  function loadCart() {
    if (!import.meta.client) return

    const savedCart = localStorage.getItem(
      'nexora-cart'
    )

    if (!savedCart) return

    try {
      items.value = JSON.parse(savedCart)
    } catch {
      items.value = []
    }
  }

  return {
    items,
    totalItems,
    subtotal,
    shippingCost,
    totalPrice,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
    loadCart
  }
})