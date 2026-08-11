import type {
  CartItem
} from '@/stores/cart'

export interface Order {
  id: string
  items: CartItem[]
  subtotal: number
  shippingCost: number
  totalPrice: number
  status: string
  createdAt: string

  customer: {
    fullName: string
    phone: string
    address: string
  }

  shippingMethod: string

  paymentMethod: string
}

export const useOrdersStore =
  defineStore(
    'orders',
    () => {
      const orders =
        ref<Order[]>([])

      const totalOrders =
        computed(() => {
          return orders.value
            .length
        })

      function createOrder(
        order: Omit<
          Order,
          'id' |
          'status' |
          'createdAt'
        >
      ) {
        const newOrder: Order = {
          ...order,

          id:
            `NX-${Date.now()
              .toString()
              .slice(-7)}`,

          status:
            'در انتظار بررسی',

          createdAt:
            new Date()
              .toLocaleDateString(
                'fa-IR'
              )
        }

        orders.value.unshift(
          newOrder
        )

        saveOrders()

        return newOrder
      }

      function saveOrders() {
        if (
          !import.meta.client
        ) {
          return
        }

        localStorage.setItem(
          'nexora-orders',
          JSON.stringify(
            orders.value
          )
        )
      }

      function loadOrders() {
        if (
          !import.meta.client
        ) {
          return
        }

        const saved =
          localStorage.getItem(
            'nexora-orders'
          )

        if (!saved) return

        try {
          orders.value =
            JSON.parse(saved)
        } catch {
          orders.value = []
        }
      }

      return {
        orders,
        totalOrders,
        createOrder,
        loadOrders
      }
    }
  )