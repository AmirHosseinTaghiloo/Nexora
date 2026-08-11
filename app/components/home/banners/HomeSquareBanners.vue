<script setup lang="ts">

const banners = [
  {
    id: 1,
    image: '/images/banners/banner-square-1.jpg',
    title: 'پیشنهاد ویژه',
    link: '/offers'
  },
  {
    id: 2,
    image: '/images/banners/banner-square-2.jpg',
    title: 'محصولات دیجیتال',
    link: '/shop?category=دیجیتال'
  },
  {
    id: 3,
    image: '/images/banners/banner-square-3.jpg',
    title: 'تخفیف ویژه',
    link: '/offers'
  },
  {
    id: 4,
    image: '/images/banners/banner-square-4.jpg',
    title: 'جدیدترین محصولات',
    link: '/shop?sort=newest'
  }
]

</script>

<template>
  <section class="container-shop mt-10">

    <div
      class="
        grid
        grid-cols-2
        gap-4
        md:grid-cols-4
        md:gap-6
      "
    >

      <NuxtLink
        v-for="banner in banners"
        :key="banner.id"
        :to="banner.link"
        class="
          group
          relative
          aspect-square
          overflow-hidden
          rounded-[24px]
          bg-slate-100
        "
      >

        <img
          :src="banner.image"
          :alt="banner.title"
          class="
            h-full
            w-full
            object-cover
            transition
            duration-700
            group-hover:scale-110
          "
        >

        <div
          class="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/40
            via-transparent
            to-transparent
            opacity-0
            transition
            duration-300
            group-hover:opacity-100
          "
        />

      </NuxtLink>

    </div>

  </section>
</template>