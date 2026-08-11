<script setup lang="ts">

const props = defineProps<{

images:string[]

}>()


const activeImage = ref(props.images[0])


</script>


<template>

<div>

<div
class="
overflow-hidden
rounded-[30px]
bg-white
"
>

<img
:src="activeImage"
class="
h-[450px]
w-full
object-cover
"
/>

</div>


<div
class="
mt-5
flex
gap-3
"
>

<button
v-for="img in images"
:key="img"
@click="activeImage=img"
class="
h-20
w-20
overflow-hidden
rounded-xl
"
>

<img
:src="img"
class="
h-full
w-full
object-cover
"
/>

</button>


</div>


</div>

</template>