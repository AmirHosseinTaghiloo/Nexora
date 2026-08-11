<script setup lang="ts">
const ordersStore =
  useOrdersStore()

const selectedStatus =
  ref('all')

onMounted(() => {
  ordersStore.loadOrders()
})

const filteredOrders =
  computed(() => {
    if (
      selectedStatus.value ===
      'all'
    ) {
      return ordersStore.orders
    }

    return ordersStore.orders.filter(
      order =>
        order.status ===
        selectedStatus.value
    )
  })

function formatPrice(
  value: number
) {
  return new Intl.NumberFormat(
    'fa-IR'
  ).format(value)
}
</script>

<template>
  <div
    class="
      min-h-screen
      bg-slate-50
      py-8
      md:py-12
    "
  >
    <div class="container-shop">
      <div
        class="
          grid
          gap-7
          lg:grid-cols-[285px_minmax(0,1fr)]
        "
      >
        <div class="hidden lg:block">
          <AccountSidebar />
        </div>

        <main>
          <!-- عنوان -->

          <section
            class="
              rounded-[32px]
              bg-white
              p-7
              shadow-sm
              md:p-9
            "
          >
            <span
              class="
                font-bold
                text-brand
              "
            >
              مدیریت خریدها
            </span>

            <h1
              class="
                mt-3
                text-4xl
                font-black
              "
            >
              سفارش‌های من
            </h1>

            <p
              class="
                mt-4
                text-slate-500
              "
            >
              وضعیت و جزئیات
              تمام سفارش‌های خود را
              از این بخش پیگیری کنید.
            </p>

            <!-- فیلتر -->

            <div
              class="
                mt-7
                flex
                gap-3
                overflow-x-auto
              "
            >
              <button
                class="
                  min-w-max
                  rounded-xl
                  px-5
                  py-3
                  font-bold
                "
                :class="
                  selectedStatus ===
                  'all'
                    ? 'bg-brand text-white'
                    : 'bg-slate-100'
                "
                @click="
                  selectedStatus =
                    'all'
                "
              >
                همه سفارش‌ها
              </button>

              <button
                class="
                  min-w-max
                  rounded-xl
                  bg-slate-100
                  px-5
                  py-3
                  font-bold
                "
                @click="
                  selectedStatus =
                    'در انتظار بررسی'
                "
              >
                در انتظار بررسی
              </button>

              <button
                class="
                  min-w-max
                  rounded-xl
                  bg-slate-100
                  px-5
                  py-3
                  font-bold
                "
                @click="
                  selectedStatus =
                    'در حال ارسال'
                "
              >
                در حال ارسال
              </button>

              <button
                class="
                  min-w-max
                  rounded-xl
                  bg-slate-100
                  px-5
                  py-3
                  font-bold
                "
                @click="
                  selectedStatus =
                    'تحویل شده'
                "
              >
                تحویل شده
              </button>
            </div>
          </section>

          <!-- لیست -->

          <section
            v-if="
              filteredOrders.length
            "
            class="
              mt-7
              space-y-5
            "
          >
            <article
              v-for="
                order
                in filteredOrders
              "
              :key="order.id"
              class="
                overflow-hidden
                rounded-[30px]
                bg-white
                shadow-sm
              "
            >
              <!-- Header -->

              <div
                class="
                  flex
                  flex-col
                  gap-5
                  border-b
                  border-slate-100
                  p-6
                  md:flex-row
                  md:items-center
                  md:justify-between
                "
              >
                <div>
                  <div
                    class="
                      flex
                      items-center
                      gap-3
                    "
                  >
                    <h2
                      class="
                        text-xl
                        font-black
                      "
                    >
                      {{
                        order.id
                      }}
                    </h2>

                    <span
                      class="
                        rounded-full
                        bg-amber-50
                        px-3
                        py-2
                        text-xs
                        font-bold
                        text-amber-700
                      "
                    >
                      {{
                        order.status
                      }}
                    </span>
                  </div>

                  <p
                    class="
                      mt-3
                      text-sm
                      text-slate-500
                    "
                  >
                    تاریخ ثبت:
                    {{
                      order.createdAt
                    }}
                  </p>
                </div>

                <div
                  class="
                    text-right
                  "
                >
                  <span
                    class="
                      text-sm
                      text-slate-400
                    "
                  >
                    مبلغ نهایی
                  </span>

                  <strong
                    class="
                      mt-2
                      block
                      text-xl
                      font-black
                    "
                  >
                    {{
                      formatPrice(
                        order.totalPrice
                      )
                    }}
                    تومان
                  </strong>
                </div>
              </div>

              <!-- محصولات -->

              <div
                class="
                  grid
                  gap-4
                  p-6
                  sm:grid-cols-2
                  xl:grid-cols-3
                "
              >
                <div
                  v-for="
                    item
                    in order.items
                  "
                  :key="
                    item.product.id
                  "
                  class="
                    flex
                    items-center
                    gap-4
                    rounded-2xl
                    bg-slate-50
                    p-4
                  "
                >
                  <img
                    :src="
                      item.product.image
                    "
                    :alt="
                      item.product.title
                    "
                    class="
                      h-16
                      w-16
                      rounded-xl
                      object-cover
                    "
                  >

                  <div
                    class="
                      min-w-0
                    "
                  >
                    <h3
                      class="
                        line-clamp-1
                        font-bold
                      "
                    >
                      {{
                        item.product.title
                      }}
                    </h3>

                    <p
                      class="
                        mt-2
                        text-xs
                        text-slate-500
                      "
                    >
                      تعداد:
                      {{
                        item.quantity
                      }}
                    </p>
                  </div>
                </div>
              </div>

              <!-- Footer -->

              <div
                class="
                  flex
                  flex-col
                  gap-4
                  border-t
                  border-slate-100
                  p-6
                  md:flex-row
                  md:items-center
                  md:justify-between
                "
              >
                <p
                  class="
                    text-sm
                    text-slate-500
                  "
                >
                  ارسال به:
                  {{
                    order.customer.fullName
                  }}
                </p>

                <button
                  class="
                    rounded-xl
                    bg-slate-950
                    px-6
                    py-3
                    font-bold
                    text-white
                  "
                >
                  مشاهده جزئیات
                </button>
              </div>
            </article>
          </section>

          <!-- خالی -->

          <section
            v-else
            class="
              mt-7
              rounded-[32px]
              bg-white
              p-14
              text-center
            "
          >
            <div class="text-6xl">
              📦
            </div>

            <h2
              class="
                mt-6
                text-3xl
                font-black
              "
            >
              سفارشی وجود ندارد
            </h2>

            <p
              class="
                mt-4
                text-slate-500
              "
            >
              هنوز سفارشی ثبت نکرده‌اید.
            </p>

            <NuxtLink
              to="/products"
              class="
                mt-8
                inline-flex
                rounded-2xl
                bg-brand
                px-7
                py-4
                font-black
                text-white
              "
            >
              ورود به فروشگاه
            </NuxtLink>
          </section>
        </main>
      </div>
    </div>
  </div>
</template>