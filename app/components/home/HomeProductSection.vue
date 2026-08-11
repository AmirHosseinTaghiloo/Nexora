<script setup lang="ts">
import ProductCard from '~/components/products/ProductCard.vue'
import type { Product } from '~/types/product'

const props = defineProps<{
  title: string
  subtitle: string
  products: Product[]
  link?: string
}>()

const emit = defineEmits<{
  addToCart: [product: Product]
}>()

function handleAdd(product: Product) {
  emit('addToCart', product)
}
</script>

<template>
  <section class="container-shop mt-16">

    <!-- عنوان بخش -->
    <div
      class="
        mb-8
        flex
        items-end
        justify-between
        gap-4
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
          {{ props.subtitle }}
        </span>

        <h2
          class="
            mt-2
            text-3xl
            font-black
          "
        >
          {{ props.title }}
        </h2>
      </div>

      <NuxtLink
        v-if="props.link"
        :to="props.link"
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

    <!-- محصولات -->
    <div
      v-if="props.products.length > 0"
      class="
        grid
        gap-6
        sm:grid-cols-2
        lg:grid-cols-4
      "
    >
      <ProductCard
        v-for="product in props.products"
        :key="product.id"
        :product="product"
        @add-to-cart="handleAdd"
      />
    </div>

    <!-- اگر محصولی نبود -->
    <div
      v-else
      class="
        rounded-[30px]
        bg-white
        p-10
        text-center
        shadow-sm
      "
    >
      <div class="text-5xl">
        📦
      </div>

      <h3
        class="
          mt-4
          text-xl
          font-black
        "
      >
        محصولی وجود ندارد
      </h3>

      <p
        class="
          mt-2
          text-slate-500
        "
      >
        به زودی محصولات جدید اضافه می‌شوند.
      </p>
    </div>

  </section>
</template>