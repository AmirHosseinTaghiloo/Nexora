<script setup lang="ts">


defineProps<{

product:any

}>()


function formatPrice(price:number){

return new Intl.NumberFormat('fa-IR')
.format(price)

}


</script>


<template>

<div>


<span
class="
font-bold
text-brand
"
>
{{product.category}}
</span>



<h1
class="
mt-4
text-4xl
font-black
"
>
{{product.title}}
</h1>



<div
class="
mt-5
flex
gap-3
"
>

<span>
⭐ {{product.rating}}
</span>

<span>
موجودی:
{{product.stock}}
</span>

</div>



<p
class="
mt-6
leading-8
text-slate-600
"
>
{{product.description}}
</p>



<div
class="
mt-8
text-3xl
font-black
text-brand
"
>

{{formatPrice(product.price)}}

<span class="text-sm">
تومان
</span>

</div>



<h3
class="
mt-8
font-black
"
>
مشخصات
</h3>


<ul
class="
mt-4
space-y-3
"
>

<li
v-for="item in product.specs"
:key="item"
>
✓ {{item}}
</li>

</ul>


</div>

</template>