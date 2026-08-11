<script setup lang="ts">


const props = defineProps<{

product:any

}>()


const cartStore = useCartStore()



function add(){

cartStore.addToCart({
    id: props.product.id,
    title: props.product.title,
    price: props.product.price,
    image: props.product.images[0],
    category: props.product.category,
    slug: '',
    brand: '',
    gallery: [],
    description: '',
    stock: 0,
    sold: 0,
    rating: 0,
    reviews: 0,
    isNew: false,
    isFeatured: false,
    colors: [],
    tags: []
})

}


</script>


<template>

<button

@click="add"

class="
mt-8
w-full
rounded-2xl
bg-brand
py-4
font-black
text-white
"

>

افزودن به سبد خرید 🛒

</button>


</template>