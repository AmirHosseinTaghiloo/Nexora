<script setup lang="ts">
import type { Product } from '@/types/product'

defineProps<{
  title: string
  subtitle: string
  products: Product[]
  link?: string
}>()

const emit = defineEmits<{
  addToCart: [product: Product]
}>()
</script>

<template>
  <section class="container-shop mt-20">
    <div
      class="
        flex
        items-end
        justify-between
        gap-5
      "
    >
      <div>
        <span class="font-bold text-brand">
          {{ subtitle }}
        </span>

        <h2 class="mt-2 text-3xl font-black">
          {{ title }}
        </h2>
      </div>

      <NuxtLink
        v-if="link"
        :to="link"
        class="hidden font-bold text-brand sm:block"
      >
        مشاهده همه ←
      </NuxtLink>
    </div>

    <div
      class="
        mt-8
        grid
        gap-6
        sm:grid-cols-2
        lg:grid-cols-3
      "
    >
      <ProductProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        @add-to-cart="emit('addToCart', $event)"
      />
    </div>
  </section>
</template>