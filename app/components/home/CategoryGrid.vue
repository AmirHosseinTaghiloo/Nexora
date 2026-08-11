<script setup lang="ts">
const categories = [
  {
    title: 'موبایل',
    icon: '📱',
    color: 'from-blue-500 to-cyan-400'
  },
  {
    title: 'لپ‌تاپ',
    icon: '💻',
    color: 'from-violet-500 to-purple-400'
  },
  {
    title: 'دیجیتال',
    icon: '🎧',
    color: 'from-pink-500 to-rose-400'
  },
  {
    title: 'پوشاک',
    icon: '👕',
    color: 'from-orange-500 to-amber-400'
  },
  {
    title: 'خانه و آشپزخانه',
    icon: '🏠',
    color: 'from-emerald-500 to-green-400'
  },
  {
    title: 'زیبایی',
    icon: '✨',
    color: 'from-fuchsia-500 to-pink-400'
  },
  {
    title: 'کتاب',
    icon: '📚',
    color: 'from-red-500 to-orange-400'
  }
]
</script>

<template>
  <section class="container-shop mt-16">
    <div
      class="
        flex
        items-end
        justify-between
      "
    >
      <div>
        <span class="font-bold text-brand">
          خرید بر اساس دسته‌بندی
        </span>

        <h2 class="mt-2 text-3xl font-black">
          دسته‌بندی‌های محبوب
        </h2>
      </div>

      <NuxtLink
        to="/products"
        class="
          hidden
          font-bold
          text-brand
          sm:block
        "
      >
        مشاهده همه ←
      </NuxtLink>
    </div>

    <div
      class="
        mt-8
        grid
        grid-cols-2
        gap-4
        sm:grid-cols-3
        lg:grid-cols-7
      "
    >
      <NuxtLink
        v-for="category in categories"
        :key="category.title"
        to="/products"
        class="
          group
          rounded-3xl
          border
          border-white
          bg-white
          p-5
          text-center
          shadow-sm
          transition
          duration-300
          hover:-translate-y-2
          hover:shadow-xl
        "
      >
        <div
          :class="[
            category.color,
            'mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br text-3xl shadow-lg transition duration-300 group-hover:scale-110'
          ]"
        >
          {{ category.icon }}
        </div>

        <h3 class="mt-4 font-bold">
          {{ category.title }}
        </h3>
      </NuxtLink>
    </div>
  </section>
</template>