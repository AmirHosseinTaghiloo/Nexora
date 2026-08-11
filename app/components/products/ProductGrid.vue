<script setup lang="ts">

import type {Product} from '@/types/product'


defineProps<{
products:Product[]
}>()


const emit = defineEmits<{

addToCart:[product:Product]

}>()


</script>



<template>


<div
class="
grid
grid-cols-1
gap-6
sm:grid-cols-2
lg:grid-cols-3
xl:grid-cols-4
"
>


<ProductCard

v-for="product in products"

:key="product.id"

:product="product"

@add-to-cart="
emit('addToCart',$event)
"

/>


</div>


</template>