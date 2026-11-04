<script setup lang="ts">
import { computed } from 'vue'

const route = useRoute()

const privatePaths = [
  '/account',
  '/cart',
  '/checkout',
  '/login',
  '/register',
  '/wishlist',
  '/order-success'
]

const isPrivatePage = computed(() =>
  privatePaths.some(path =>
    route.path === path || route.path.startsWith(`${path}/`)
  )
)

useSeoMeta({
  robots: computed(() =>
    isPrivatePage.value ? 'noindex, follow' : 'index, follow'
  )
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
