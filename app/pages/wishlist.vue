<script setup lang="ts">
import { computed } from 'vue'
import ProductCard from '@/components/products/ProductCard.vue'

const wishlistStore = useWishlistStore()

const wishlistProducts = computed(() => {
  return wishlistStore.items
})
</script>

<template>
  <main class="min-h-screen py-12">

    <div class="container-shop">

      <!-- Header -->
      <section
        class="
          overflow-hidden
          rounded-[32px]
          bg-gradient-to-l
          from-brand
          to-indigo-700
          p-8
          text-white
          md:p-12
        "
      >

        <div
          class="
            flex
            flex-col
            gap-6
            md:flex-row
            md:items-center
            md:justify-between
          "
        >

          <div>

            <span
              class="
                inline-flex
                rounded-full
                bg-white/15
                px-4
                py-2
                text-sm
                font-bold
              "
            >
              محصولات ذخیره‌شده
            </span>

            <h1
              class="
                mt-5
                text-3xl
                font-black
                md:text-5xl
              "
            >
              علاقه‌مندی‌های من
            </h1>

            <p
              class="
                mt-4
                text-white/70
              "
            >
              محصولاتی که برای خرید بعدی ذخیره کرده‌اید.
            </p>

          </div>

          <div
            class="
              flex
              h-20
              w-20
              shrink-0
              items-center
              justify-center
              rounded-3xl
              bg-white/10
              text-4xl
            "
          >
            ♥
          </div>

        </div>

      </section>


      <!-- Products -->
      <section class="mt-12">

        <!-- Count -->
        <div
          v-if="wishlistProducts.length"
          class="
            mb-8
            flex
            flex-col
            gap-4
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >

          <div>

            <span
              class="
                text-sm
                font-bold
                text-brand
              "
            >
              لیست علاقه‌مندی
            </span>

            <h2
              class="
                mt-2
                text-2xl
                font-black
              "
            >
              {{ wishlistProducts.length }}
              محصول
            </h2>

          </div>


          <button
            type="button"
            class="
              rounded-2xl
              border
              border-rose-200
              bg-white
              px-5
              py-3
              font-bold
              text-rose-500
              transition
              hover:bg-rose-50
            "
            @click="wishlistStore.clearWishlist()"
          >
            حذف همه
          </button>

        </div>


        <!-- Product Grid -->
        <div
          v-if="wishlistProducts.length"
          class="
            grid
            gap-6
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
          "
        >

          <ProductCard
            v-for="product in wishlistProducts"
            :key="product.id"
            :product="product"
          />

        </div>


        <!-- Empty -->
        <div
          v-else
          class="
            rounded-[32px]
            border
            border-slate-100
            bg-white
            px-6
            py-20
            text-center
            shadow-sm
          "
        >

          <div
            class="
              mx-auto
              flex
              h-24
              w-24
              items-center
              justify-center
              rounded-full
              bg-rose-50
              text-5xl
              text-rose-400
            "
          >
            ♡
          </div>

          <h2
            class="
              mt-7
              text-2xl
              font-black
            "
          >
            هنوز محصولی در علاقه‌مندی‌ها نیست
          </h2>

          <p
            class="
              mx-auto
              mt-3
              max-w-md
              text-slate-500
            "
          >
            با زدن روی قلب محصولات، آن‌ها را اینجا ذخیره کنید.
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
              transition
              hover:-translate-y-1
              hover:shadow-xl
            "
          >
            رفتن به فروشگاه
          </NuxtLink>

        </div>

      </section>

    </div>

  </main>
</template>