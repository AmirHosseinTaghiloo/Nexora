<script setup lang="ts">
const cartStore = useCartStore()

function formatPrice(price: number) {
  return new Intl.NumberFormat('fa-IR').format(price)
}
</script>

<template>
  <div class="container-shop py-10">
    <!-- Page heading -->

    <div
      class="
        mb-8
        flex
        flex-col
        gap-3
        sm:flex-row
        sm:items-end
        sm:justify-between
      "
    >
      <div>
        <span class="font-bold text-brand">
          NEXORA SHOPPING CART
        </span>

        <h1 class="mt-2 text-4xl font-black">
          سبد خرید
        </h1>

        <p class="mt-3 text-slate-500">
          {{ cartStore.totalItems }}
          کالا در سبد خرید شما قرار دارد.
        </p>
      </div>

      <NuxtLink
        to="/products"
        class="
          font-bold
          text-brand
        "
      >
        ← ادامه خرید
      </NuxtLink>
    </div>

    <!-- Empty cart -->

    <section
      v-if="cartStore.items.length === 0"
      class="
        rounded-[32px]
        bg-white
        p-12
        text-center
        shadow-sm
      "
    >
      <div class="text-7xl">
        🛒
      </div>

      <h2 class="mt-6 text-3xl font-black">
        سبد خرید شما خالی است
      </h2>

      <p class="mt-4 text-slate-500">
        هنوز محصولی به سبد خرید اضافه نکرده‌اید.
      </p>

      <NuxtLink
        to="/"
        class="
          mt-8
          inline-flex
          rounded-2xl
          bg-brand
          px-8
          py-4
          font-bold
          text-white
        "
      >
        مشاهده محصولات
      </NuxtLink>
    </section>

    <!-- Cart content -->

    <div
      v-else
      class="
        grid
        gap-7
        lg:grid-cols-[1fr_380px]
      "
    >
      <!-- Product list -->

      <section
        class="
          overflow-hidden
          rounded-[30px]
          bg-white
          shadow-sm
        "
      >
        <div
          class="
            border-b
            border-slate-100
            px-6
            py-5
          "
        >
          <h2 class="text-xl font-black">
            کالاهای انتخاب‌شده
          </h2>
        </div>

        <div class="divide-y divide-slate-100">
          <article
            v-for="item in cartStore.items"
            :key="item.id"
            class="
              flex
              flex-col
              gap-5
              p-6
              sm:flex-row
              sm:items-center
            "
          >
            <!-- Product image -->

            <NuxtLink
              :to="`/products/${item.id}`"
              class="
                h-32
                w-full
                shrink-0
                overflow-hidden
                rounded-2xl
                bg-slate-100
                sm:w-32
              "
            >
              <img
                :src="item.image"
                :alt="item.title"
                class="
                  h-full
                  w-full
                  object-cover
                "
              >
            </NuxtLink>

            <!-- Product information -->

            <div class="min-w-0 flex-1">
              <span
                class="
                  text-sm
                  font-bold
                  text-brand
                "
              >
                {{ item.category }}
              </span>

              <h3
                class="
                  mt-2
                  text-lg
                  font-black
                "
              >
                {{ item.title }}
              </h3>

              <p
                class="
                  mt-3
                  font-black
                "
              >
                {{ formatPrice(item.price) }}

                <span
                  class="
                    text-xs
                    font-medium
                    text-slate-500
                  "
                >
                  تومان
                </span>
              </p>
            </div>

            <!-- Quantity -->

            <div
              class="
                flex
                items-center
                justify-between
                gap-5
                sm:flex-col
              "
            >
              <div
                class="
                  flex
                  items-center
                  rounded-xl
                  bg-slate-100
                  p-1
                "
              >
                <button
                  class="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-lg
                    bg-white
                    text-xl
                    font-black
                    shadow-sm
                  "
                  aria-label="افزایش تعداد"
                  @click="
                    cartStore.increaseQuantity(
                      item.id
                    )
                  "
                >
                  +
                </button>

                <span
                  class="
                    flex
                    h-10
                    w-12
                    items-center
                    justify-center
                    font-black
                  "
                >
                  {{ item.quantity }}
                </span>

                <button
                  class="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-lg
                    bg-white
                    text-xl
                    font-black
                    shadow-sm
                  "
                  aria-label="کاهش تعداد"
                  @click="
                    cartStore.decreaseQuantity(
                      item.id
                    )
                  "
                >
                  −
                </button>
              </div>

              <button
                class="
                  text-sm
                  font-bold
                  text-rose-500
                "
                @click="
                  cartStore.removeFromCart(
                    item.id
                  )
                "
              >
                حذف
              </button>
            </div>
          </article>
        </div>
      </section>

      <!-- Order summary -->

      <aside
        class="
          h-fit
          rounded-[30px]
          bg-white
          p-7
          shadow-sm
          lg:sticky
          lg:top-28
        "
      >
        <h2 class="text-2xl font-black">
          خلاصه سفارش
        </h2>

        <div
          class="
            mt-7
            grid
            gap-5
            text-slate-600
          "
        >
          <div
            class="
              flex
              justify-between
            "
          >
            <span>جمع مبلغ کالاها</span>

            <strong class="text-slate-900">
              {{ formatPrice(cartStore.subtotal) }}
              تومان
            </strong>
          </div>

          <div
            class="
              flex
              justify-between
            "
          >
            <span>هزینه ارسال</span>

            <strong
              :class="
                cartStore.shippingCost === 0
                  ? 'text-emerald-600'
                  : 'text-slate-900'
              "
            >
              <template
                v-if="
                  cartStore.shippingCost === 0
                "
              >
                رایگان
              </template>

              <template v-else>
                {{
                  formatPrice(
                    cartStore.shippingCost
                  )
                }}
                تومان
              </template>
            </strong>
          </div>
        </div>

        <div
          class="
            mt-7
            border-t
            border-slate-100
            pt-7
          "
        >
          <div
            class="
              flex
              items-end
              justify-between
            "
          >
            <span class="font-bold">
              مبلغ قابل پرداخت
            </span>

            <div class="text-left">
              <strong
                class="
                  text-2xl
                  font-black
                  text-brand
                "
              >
                {{
                  formatPrice(
                    cartStore.totalPrice
                  )
                }}
              </strong>

              <span
                class="
                  mr-1
                  text-xs
                  text-slate-500
                "
              >
                تومان
              </span>
            </div>
          </div>
          <NuxtLink
            to="/checkout"
            class="
              flex
              w-full
              items-center
              justify-center
              rounded-2xl
              bg-brand
              px-6
              py-4
              font-black
              text-white
              transition
              hover:-translate-y-0.5
              hover:shadow-lg
            "
          >
            ادامه و پرداخت
          </NuxtLink>

          <p
            class="
              mt-5
              text-center
              text-xs
              leading-6
              text-slate-400
            "
          >
            با ثبت سفارش، قوانین و شرایط
            استفاده از فروشگاه را می‌پذیرید.
          </p>
        </div>
      </aside>
    </div>
  </div>
</template>