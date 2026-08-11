<script setup lang="ts">
import HomeSquareBanners from '~/components/home/banners/HomeSquareBanners.vue'
import HomeWideBanners from '~/components/home/banners/HomeWideBanners.vue'
import { products } from '~/data/products'
import type { Product } from '~/types/product'

const cartStore = useCartStore()

const specialProducts = products.slice(0, 3)

const newestProducts = [...products]
  .sort((a, b) => b.id - a.id)
  .slice(0, 6)

function handleAddToCart(product: Product) {
  cartStore.addToCart(product)
}
</script>

<template>

  <div>
    

    <HomeHeroBanner />

    <HomeCategoryGrid />

    <HomeSquareBanners/>

    <!-- پیشنهادهای ویژه -->
    <HomeProductSection
      title="پیشنهادهای ویژه"
      subtitle="فرصت محدود"
      :products="specialProducts"
      link="/products"
      @add-to-cart="handleAddToCart"
    />

    
    
    <HomeWideBanners/>



    <HomePromoBanner />

    <!-- جدیدترین محصولات -->
    <HomeProductSection
      title="جدیدترین محصولات"
      subtitle="تازه‌واردها"
      :products="newestProducts"
      link="/products?sort=newest"
      @add-to-cart="handleAddToCart"
    />

    <!-- امکانات -->
    <section
      class="
        container-shop
        mt-20
      "
    >
      <div
        class="
          grid
          gap-5
          rounded-4xl
          bg-slate-900
          p-8
          text-white
          md:grid-cols-4
        "
      >

        <div>
          <div class="text-3xl">
            🚚
          </div>

          <h3 class="mt-4 font-black">
            ارسال سریع
          </h3>

          <p
            class="
              mt-2
              text-sm
              text-white/60
            "
          >
            ارسال مطمئن به سراسر کشور
          </p>
        </div>

        <div>
          <div class="text-3xl">
            🛡️
          </div>

          <h3 class="mt-4 font-black">
            خرید امن
          </h3>

          <p
            class="
              mt-2
              text-sm
              text-white/60
            "
          >
            تضمین اصالت کالا
          </p>
        </div>

        <div>
          <div class="text-3xl">
            💳
          </div>

          <h3 class="mt-4 font-black">
            پرداخت آسان
          </h3>

          <p
            class="
              mt-2
              text-sm
              text-white/60
            "
          >
            روش‌های متنوع پرداخت
          </p>
        </div>

        <div>
          <div class="text-3xl">
            💬
          </div>

          <h3 class="mt-4 font-black">
            پشتیبانی حرفه‌ای
          </h3>

          <p
            class="
              mt-2
              text-sm
              text-white/60
            "
          >
            پاسخگویی حرفه‌ای
          </p>
        </div>

      </div>
    </section>

  </div>
</template>