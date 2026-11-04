<script setup lang="ts">
import { motion } from 'motion-v'

import HomeSquareBanners from '~/components/home/banners/HomeSquareBanners.vue'
import HomeWideBanners from '~/components/home/banners/HomeWideBanners.vue'
import { products } from '~/data/products'
import type { Product } from '~/types/product'

useSiteSeo({
  title: 'خرید آنلاین موبایل و کالای دیجیتال',
  description: 'خرید آنلاین موبایل، لپ‌تاپ و لوازم دیجیتال از NEXORA. مشخصات و قیمت محصولات را بررسی کنید و با اطمینان انتخاب کنید.',
  image: '/images/hero-shopping-3d.png'
})

const cartStore = useCartStore()

const specialProducts = products.slice(0, 3)

const newestProducts = [...products]
  .sort((a, b) => b.id - a.id)
  .slice(0, 6)

function handleAddToCart(product: Product) {
  cartStore.addToCart(product)
}

const animation = {
  initial: {
    opacity: 0,
    y: 50
  },
  whileInView: {
    opacity: 1,
    y: 0
  },
  viewport: {
    once: true,
    amount: 0.15
  },
  transition: {
    duration: 0.7,
    ease: 'easeOut'
  }
}
</script>

<template>
  <div class="overflow-hidden">

    <!-- Hero -->
    <motion.div
    >
      <HomeHeroBanner />
    </motion.div>


    <!-- Category -->
    <motion.div
      v-bind="animation"
    >
      <HomeCategoryGrid />
    </motion.div>


    <!-- Square Banners -->
    <motion.div
      v-bind="animation"
      :transition="{
        duration: 0.8,
        delay: 0.1,
        ease: 'easeOut'
      }"
    >
      <HomeSquareBanners />
    </motion.div>


    <!-- پیشنهادهای ویژه -->
    <motion.div
      v-bind="animation"
      :transition="{
        duration: 0.8,
        ease: 'easeOut'
      }"
    >
      <HomeProductSection
        title="پیشنهادهای ویژه"
        subtitle="فرصت محدود"
        :products="specialProducts"
        link="/products"
        @add-to-cart="handleAddToCart"
      />
    </motion.div>


    <!-- Wide Banners -->
    <motion.div
      v-bind="animation"
      :transition="{
        duration: 0.8,
        delay: 0.1,
        ease: 'easeOut'
      }"
    >
      <HomeWideBanners />
    </motion.div>


    <!-- Promo -->
    <motion.div
      v-bind="animation"
      :transition="{
        duration: 0.8,
        ease: 'easeOut'
      }"
    >
      <HomePromoBanner />
    </motion.div>


    <!-- جدیدترین محصولات -->
    <motion.div
      v-bind="animation"
      :transition="{
        duration: 0.8,
        ease: 'easeOut'
      }"
    >
      <HomeProductSection
        title="جدیدترین محصولات"
        subtitle="تازه‌واردها"
        :products="newestProducts"
        link="/products?sort=newest"
        @add-to-cart="handleAddToCart"
      />
    </motion.div>


    <!-- امکانات -->
    <motion.section
      class="container-shop mt-20"
      :initial="{ opacity: 0, y: 60 }"
      :whileInView="{ opacity: 1, y: 0 }"
      :viewport="{
        once: true,
        amount: 0.2
      }"
      :transition="{
        duration: 0.8,
        ease: 'easeOut'
      }"
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

        <!-- ارسال سریع -->
        <motion.div
          class="
            group
            rounded-2xl
            transition-colors
            duration-300
            hover:bg-white/5
          "
          :initial="{ opacity: 0, y: 30 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :whileHover="{ y: -6 }"
          :viewport="{ once: true }"
          :transition="{
            duration: 0.5,
            delay: 0.1,
            ease: 'easeOut'
          }"
        >
          <div
            class="
              text-3xl
              transition-transform
              duration-300
              group-hover:scale-110
            "
          >
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
        </motion.div>


        <!-- خرید امن -->
        <motion.div
          class="
            group
            rounded-2xl
            transition-colors
            duration-300
            hover:bg-white/5
          "
          :initial="{ opacity: 0, y: 30 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :whileHover="{ y: -6 }"
          :viewport="{ once: true }"
          :transition="{
            duration: 0.5,
            delay: 0.2,
            ease: 'easeOut'
          }"
        >
          <div
            class="
              text-3xl
              transition-transform
              duration-300
              group-hover:scale-110
            "
          >
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
        </motion.div>


        <!-- پرداخت آسان -->
        <motion.div
          class="
            group
            rounded-2xl
            transition-colors
            duration-300
            hover:bg-white/5
          "
          :initial="{ opacity: 0, y: 30 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :whileHover="{ y: -6 }"
          :viewport="{ once: true }"
          :transition="{
            duration: 0.5,
            delay: 0.3,
            ease: 'easeOut'
          }"
        >
          <div
            class="
              text-3xl
              transition-transform
              duration-300
              group-hover:scale-110
            "
          >
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
        </motion.div>


        <!-- پشتیبانی حرفه‌ای -->
        <motion.div
          class="
            group
            rounded-2xl
            transition-colors
            duration-300
            hover:bg-white/5
          "
          :initial="{ opacity: 0, y: 30 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :whileHover="{ y: -6 }"
          :viewport="{ once: true }"
          :transition="{
            duration: 0.5,
            delay: 0.4,
            ease: 'easeOut'
          }"
        >
          <div
            class="
              text-3xl
              transition-transform
              duration-300
              group-hover:scale-110
            "
          >
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
        </motion.div>

      </div>

    </motion.section>

  </div>
</template>