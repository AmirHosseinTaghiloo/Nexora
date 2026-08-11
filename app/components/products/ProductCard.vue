<script setup lang="ts">

import type { Product } from '@/types/product'


const props = defineProps<{
  product: Product
}>()


const emit = defineEmits<{
  addToCart: [product: Product]
}>()



function formatPrice(price:number){

  return new Intl.NumberFormat('fa-IR')
    .format(price)

}


</script>



<template>


<article

class="
group
overflow-hidden
rounded-[28px]
bg-white
border
border-slate-100
shadow-sm
transition
duration-300
hover:-translate-y-2
hover:shadow-xl
"

>



<NuxtLink

:to="`/products/${product.id}`"

class="
relative
block
h-72
overflow-hidden
bg-slate-100
"

>


<img

:src="product.image"

:alt="product.title"

class="
h-full
w-full
object-cover
transition
duration-500
group-hover:scale-110
"

/>



<div

v-if="product.badge"

class="
absolute
right-4
top-4
rounded-xl
bg-brand
px-3
py-2
text-sm
font-black
text-white
"

>

{{product.badge}}

</div>



</NuxtLink>





<div class="p-6">



<p

class="
text-sm
font-bold
text-brand
"

>

{{product.category}}

</p>



<h3

class="
mt-3
text-lg
font-black
leading-8
"

>

{{product.title}}

</h3>




<div

class="
mt-3
flex
items-center
gap-2
"

>

<span class="text-yellow-400">
★
</span>


<span class="font-bold">

{{product.rating}}

</span>



<span class="text-sm text-slate-400">

({{product.reviews || 0}} نظر)

</span>


</div>





<div

class="
mt-6
flex
items-center
justify-between
"

>


<p

class="
font-black
text-lg
"

>

{{formatPrice(product.price)}}

<span class="text-xs text-slate-500">

تومان

</span>


</p>




<button

class="
rounded-xl
bg-brand
px-4
py-3
font-bold
text-white
transition
hover:scale-105
"

@click.prevent="emit('addToCart', product)"

>

افزودن

</button>



</div>


</div>



</article>


</template>