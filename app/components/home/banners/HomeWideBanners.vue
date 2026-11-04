<script setup lang="ts">

const appleWatchBanner = new URL(
  '../../../assets/images/banners/apple-watch.jpg',
  import.meta.url
).href

const samsungBanner = new URL(
  '../../../assets/images/banners/samsung.jpg',
  import.meta.url
).href

</script>

<template>

  <section class="container-shop mt-16">

    <div
      class="
        grid
        gap-6
        lg:grid-cols-2
      "
    >

      <!-- Apple Watch -->

      <NuxtLink
        to="/products"
        class="
          group
          relative
          block
          overflow-hidden
          rounded-[28px]
          bg-slate-100
          shadow-lg
        "
      >

        <img
          :src="appleWatchBanner"
          alt="Apple Watch"
          class="
            block
            h-auto
            w-full
            max-w-full
            object-contain
            transition
            duration-700
            md:group-hover:scale-[1.02]
          "
        />

      </NuxtLink>


      <!-- Samsung -->

      <NuxtLink
        to="/products"
        class="
          group
          relative
          block
          overflow-hidden
          rounded-[28px]
          bg-slate-100
          shadow-lg
        "
      >

        <img
          :src="samsungBanner"
          alt="Samsung"
          class="
            block
            h-auto
            w-full
            max-w-full
            object-contain
            transition
            duration-700
            md:group-hover:scale-[1.02]
          "
        />

      </NuxtLink>

    </div>

  </section>

</template>