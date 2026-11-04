
<script setup lang="ts">
import { motion } from 'motion-v'

const searchQuery = ref('')

function submitSearch() {
  if (!searchQuery.value.trim()) {
    navigateTo('/products')
    return
  }

  navigateTo({
    path: '/products',
    query: {
      search: searchQuery.value
    }
  })
}

const animation = {
  initial: {
    opacity: 0,
    y: 40
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
  <section
    class="
      relative
      h-[900px]
      overflow-hidden
      bg-slate-950
      py-14
      md:py-10
    "
  >
    <!-- نورهای پس‌زمینه -->
    <motion.div
      class="
        pointer-events-none
        absolute
        -right-40
        -top-40
        h-[500px]
        w-[500px]
        rounded-full
        bg-indigo-600/30
        blur-[140px]
      "
      :initial="{ opacity: 0, scale: 0.8 }"
      :animate="{ opacity: 1, scale: 1 }"
      :transition="{ duration: 1.2, ease: 'easeOut' }"
    />

    <motion.div
      class="
        pointer-events-none
        absolute
        -bottom-52
        -left-40
        h-[600px]
        w-[500px]
        rounded-full
        bg-violet-600/25
        blur-[150px]
      "
      :initial="{ opacity: 0, scale: 0.8 }"
      :animate="{ opacity: 1, scale: 1 }"
      :transition="{
        duration: 1.3,
        delay: 0.15,
        ease: 'easeOut'
      }"
    />

    <!-- پس‌زمینه شیشه‌ای -->
    <motion.div
      class="
        pointer-events-none
        absolute
        inset-0
        bg-[linear-gradient(
          115deg,
          rgba(255,255,255,0.05),
          transparent_45%,
          rgba(255,255,255,0.03)
        )]
      "
      :initial="{ opacity: 0 }"
      :animate="{ opacity: 1 }"
      :transition="{ duration: 1 }"
    />

    <div
      class="
        container-shop
        relative
        z-10
        mt-[90px]
        grid
        min-h-[580px]
        items-center
        gap-10
        lg:grid-cols-2
      "
    >
      <!-- متن بنر -->
      <div
        class="
          order-2
          text-center
          lg:order-1
          lg:text-right
        "
      >
        <!-- Badge -->
        <motion.div
          class="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-indigo-400/20
            bg-white/10
            px-4
            py-2
            text-sm
            font-bold
            text-indigo-200
            backdrop-blur-xl
          "
          :initial="{ opacity: 0, y: 25, scale: 0.95 }"
          :animate="{ opacity: 1, y: 0, scale: 1 }"
          :transition="{
            duration: 0.6,
            delay: 0.15,
            ease: 'easeOut'
          }"
        >
          <motion.span
            class="
              h-2
              w-2
              rounded-full
              bg-emerald-400
            "
            :animate="{
              scale: [1, 1.3, 1],
              opacity: [1, 0.6, 1]
            }"
            :transition="{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut'
            }"
          />

          خرید هوشمند، سریع و مطمئن
        </motion.div>

        <!-- Title -->
        <motion.h1
          class="
            mt-7
            text-4xl
            font-black
            leading-[1.5]
            text-white
            sm:text-5xl
            lg:text-6xl
          "
          :initial="{ opacity: 0, y: 35 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{
            duration: 0.7,
            delay: 0.25,
            ease: 'easeOut'
          }"
        >
          همه چیز،
          <motion.span
            class="
              inline-block
              bg-gradient-to-l
              from-violet-300
              to-indigo-400
              bg-clip-text
              text-transparent
            "
            :initial="{ opacity: 0, y: 15 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{
              duration: 0.6,
              delay: 0.45,
              ease: 'easeOut'
            }"
          >
            فقط چند کلیک
          </motion.span>
          فاصله دارد
        </motion.h1>

        <!-- Description -->
        <motion.p
          class="
            mx-auto
            mt-6
            max-w-xl
            text-base
            leading-9
            text-slate-300
            lg:mx-0
            lg:text-lg
          "
          :initial="{ opacity: 0, y: 25 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{
            duration: 0.7,
            delay: 0.4,
            ease: 'easeOut'
          }"
        >
          جدیدترین محصولات دیجیتال، موبایل، لپ‌تاپ،
          پوشاک و لوازم خانه را با بهترین قیمت
          از فروشگاه NEXORA خریداری کنید.
        </motion.p>

        <!-- جستجو -->
        <motion.form
          class="
            mx-auto
            mt-9
            flex
            max-w-xl
            rounded-[24px]
            border
            border-white/10
            bg-white/10
            p-2
            shadow-2xl
            backdrop-blur-xl
            lg:mx-0
          "
          :initial="{ opacity: 0, y: 25, scale: 0.98 }"
          :animate="{ opacity: 1, y: 0, scale: 1 }"
          :transition="{
            duration: 0.7,
            delay: 0.5,
            ease: 'easeOut'
          }"
          @submit.prevent="submitSearch"
        >
          <input
            v-model="searchQuery"
            type="search"
            placeholder="دنبال چه محصولی هستید؟"
            class="
              min-w-0
              flex-1
              bg-transparent
              px-4
              py-3
              text-white
              outline-none
              placeholder:text-slate-400
            "
          >

          <motion.button
            type="submit"
            class="
              shrink-0
              rounded-2xl
              bg-white
              px-6
              py-3
              font-black
              text-slate-950
            "
            :whileHover="{
              scale: 1.04,
              y: -2
            }"
            :whileTap="{ scale: 0.96 }"
          >
            جستجو
          </motion.button>
        </motion.form>

        <!-- دکمه‌ها -->
        <motion.div
          class="
            mt-7
            flex
            flex-wrap
            justify-center
            gap-4
            lg:justify-start
          "
          :initial="{ opacity: 0, y: 25 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{
            duration: 0.7,
            delay: 0.6,
            ease: 'easeOut'
          }"
        >
          <motion.div
            :whileHover="{ y: -5, scale: 1.02 }"
            :whileTap="{ scale: 0.97 }"
          >
            <NuxtLink
              to="/products"
              class="
                block
                rounded-2xl
                bg-brand
                px-7
                py-4
                font-black
                text-white
                shadow-lg
                shadow-indigo-600/30
                transition
                hover:shadow-xl
              "
            >
              مشاهده فروشگاه
            </NuxtLink>
          </motion.div>

          <motion.div
            :whileHover="{ y: -5, scale: 1.02 }"
            :whileTap="{ scale: 0.97 }"
          >
            <NuxtLink
              to="/offers"
              class="
                block
                rounded-2xl
                border
                border-white/15
                bg-white/10
                px-7
                py-4
                font-black
                text-white
                backdrop-blur-xl
                transition
                hover:bg-white/15
              "
            >
              پیشنهادهای ویژه
            </NuxtLink>
          </motion.div>
        </motion.div>

        <!-- آمار -->
        <motion.div
          class="
            mt-10
            grid
            grid-cols-3
            gap-3
            border-t
            border-white/10
            pt-7
          "
          :initial="{ opacity: 0, y: 25 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{
            duration: 0.7,
            delay: 0.7,
            ease: 'easeOut'
          }"
        >
          <motion.div
            :whileHover="{ y: -5 }"
            :transition="{ duration: 0.2 }"
          >
            <strong
              class="
                block
                text-2xl
                font-black
                text-white
              "
            >
              +۵۰K
            </strong>

            <span
              class="
                mt-1
                block
                text-xs
                text-slate-400
              "
            >
              محصول متنوع
            </span>
          </motion.div>

          <motion.div
            :whileHover="{ y: -5 }"
            :transition="{ duration: 0.2 }"
          >
            <strong
              class="
                block
                text-2xl
                font-black
                text-white
              "
            >
              +۱۲۰K
            </strong>

            <span
              class="
                mt-1
                block
                text-xs
                text-slate-400
              "
            >
              مشتری راضی
            </span>
          </motion.div>

          <motion.div
            :whileHover="{ y: -5 }"
            :transition="{ duration: 0.2 }"
          >
            <strong
              class="
                block
                text-2xl
                font-black
                text-white
              "
            >
              ۲۴/۷
            </strong>

            <span
              class="
                mt-1
                block
                text-xs
                text-slate-400
              "
            >
              پشتیبانی
            </span>
          </motion.div>
        </motion.div>
      </div>

      <!-- آبجکت سه‌بعدی -->
      <motion.div
        class="
          order-1
          relative
          flex
          min-h-[380px]
          items-center
          justify-center
          lg:order-2
          lg:min-h-[560px]
        "
        :initial="{ opacity: 0, x: 60, scale: 0.9 }"
        :animate="{ opacity: 1, x: 0, scale: 1 }"
        :transition="{
          duration: 1,
          delay: 0.25,
          ease: 'easeOut'
        }"
      >
        <!-- هاله پشت تصویر -->
        <motion.div
          class="
            absolute
            h-[300px]
            w-[300px]
            rounded-full
            bg-indigo-500/25
            blur-[100px]
            lg:h-[420px]
            lg:w-[420px]
          "
          :animate="{
            scale: [1, 1.08, 1],
            opacity: [0.6, 0.9, 0.6]
          }"
          :transition="{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut'
          }"
        />

        <!-- حلقه شیشه‌ای -->
        <motion.div
          class="
            absolute
            h-[300px]
            w-[300px]
            rounded-full
            border
            border-white/10
            bg-white/[0.03]
            backdrop-blur-sm
            lg:h-[430px]
            lg:w-[430px]
          "
          :animate="{
            rotate: [0, 360]
          }"
          :transition="{
            duration: 30,
            repeat: Infinity,
            ease: 'linear'
          }"
        />

        <!-- تصویر -->
        <motion.div
          class="
            hero-3d-float
            relative
            z-10
            w-full
            max-w-[620px]
          "
          :whileHover="{
            scale: 1.04,
            rotate: 1
          }"
          :transition="{
            duration: 0.4,
            ease: 'easeOut'
          }"
        >
          <img
            src="/images/hero-shopping-3d.png"
            alt="خرید آنلاین در فروشگاه NEXORA"
            class="
              h-auto
              w-full
              select-none
              drop-shadow-[0_35px_45px_rgba(0,0,0,0.35)]
            "
            draggable="false"
          >
        </motion.div>

        <!-- کارت شیشه‌ای -->
        <motion.div
          class="
            absolute
            bottom-5
            right-0
            z-20
            hidden
            rounded-2xl
            border
            border-white/15
            bg-white/10
            px-5
            py-4
            text-white
            shadow-2xl
            backdrop-blur-xl
            lg:block
          "
          :initial="{ opacity: 0, x: 30, y: 20 }"
          :animate="{ opacity: 1, x: 0, y: 0 }"
          :transition="{
            duration: 0.7,
            delay: 0.9,
            ease: 'easeOut'
          }"
          :whileHover="{
            y: -6,
            scale: 1.03
          }"
        >
          <p
            class="
              text-xs
              text-slate-300
            "
          >
            ارسال سریع سفارش‌ها
          </p>

          <strong
            class="
              mt-1
              block
              text-lg
              font-black
            "
          >
            تحویل در کوتاه‌ترین زمان
          </strong>
        </motion.div>
      </motion.div>
    </div>
  </section>
</template>

<style scoped>
.hero-3d-float {
  animation:
    hero-float
    5s
    ease-in-out
    infinite;
}

@keyframes hero-float {
  0%,
  100% {
    transform:
      translateY(0)
      rotate(-1deg);
  }

  50% {
    transform:
      translateY(-24px)
      rotate(1deg);
  }
}

@media (
  prefers-reduced-motion: reduce
) {
  .hero-3d-float {
    animation: none;
  }
}
</style>

