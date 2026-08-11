<script setup lang="ts">
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
</script>

<template>
  <section
    class="
    h-[900px]
      relative
      overflow-hidden
      bg-slate-950
      py-14
      md:py-10
    "
  >
    
    <!-- نورهای پس‌زمینه -->

    <div
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
    />

    <div
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
    />

    <!-- پس‌زمینه شیشه‌ای -->

    <div
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
    />

    <div
      class="
        container-shop
        relative
        mt-[90px]
        z-10
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
        <div
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
        >
          <span
            class="
              h-2
              w-2
              animate-pulse
              rounded-full
              bg-emerald-400
            "
          />

          خرید هوشمند، سریع و مطمئن
        </div>

        <h1
          class="
            mt-7
            text-4xl
            font-black
            leading-[1.5]
            text-white
            sm:text-5xl
            lg:text-6xl
          "
        >
          همه چیز،
          <span
            class="
              bg-gradient-to-l
              from-violet-300
              to-indigo-400
              bg-clip-text
              text-transparent
            "
          >
            فقط چند کلیک
          </span>
          فاصله دارد
        </h1>

        <p
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
        >
          جدیدترین محصولات دیجیتال، موبایل، لپ‌تاپ،
          پوشاک و لوازم خانه را با بهترین قیمت
          از فروشگاه NEXORA خریداری کنید.
        </p>

        <!-- جستجو -->

        <form
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

          <button
            type="submit"
            class="
              shrink-0
              rounded-2xl
              bg-white
              px-6
              py-3
              font-black
              text-slate-950
              transition
              hover:scale-[1.03]
            "
          >
            جستجو
          </button>
        </form>

        <!-- دکمه‌ها -->

        <div
          class="
            mt-7
            flex
            flex-wrap
            justify-center
            gap-4
            lg:justify-start
          "
        >
          <NuxtLink
            to="/products"
            class="
              rounded-2xl
              bg-brand
              px-7
              py-4
              font-black
              text-white
              shadow-lg
              shadow-indigo-600/30
              transition
              hover:-translate-y-1
              hover:shadow-xl
            "
          >
            مشاهده فروشگاه
          </NuxtLink>

          <NuxtLink
            to="/offers"
            class="
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
        </div>

        <!-- آمار -->

        <div
          class="
            mt-10
            grid
            grid-cols-3
            gap-3
            border-t
            border-white/10
            pt-7
          "
        >
          <div>
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
          </div>

          <div>
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
          </div>

          <div>
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
          </div>
        </div>
      </div>

      <!-- آبجکت سه‌بعدی -->

      <div
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
      >
        <!-- هاله پشت تصویر -->

        <div
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
        />

        <!-- حلقه شیشه‌ای -->

        <div
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
        />

        <!-- تصویر -->

        <div
          class="
            hero-3d-float
            relative
            z-10
            w-full
            max-w-[620px]
          "
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
        </div>

        <!-- کارت شیشه‌ای -->

        <div
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
        </div>
      </div>
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

/* برای کاربرانی که انیمیشن را غیرفعال کرده‌اند */

@media (
  prefers-reduced-motion: reduce
) {
  .hero-3d-float {
    animation: none;
  }
}
</style>