<script setup lang="ts">
import { computed, ref } from 'vue'
import { products } from '@/data/products'

const route = useRoute()

const cartStore = useCartStore()
const wishlistStore = useWishlistStore()

const product = computed(() => {
  return products.find(
    item => String(item.id) === String(route.params.id)
  )
})

if (!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'محصول پیدا نشد'
  })
}

/*
|--------------------------------------------------------------------------
| Images
|--------------------------------------------------------------------------
*/

const productImages = computed(() => {
  if (product.value?.images?.length) {
    return product.value.images
  }

  if (product.value?.image) {
    return [product.value.image]
  }

  return []
})

const activeImageIndex = ref(0)

const activeImage = computed(() => {
  return productImages.value[activeImageIndex.value]
})

/*
|--------------------------------------------------------------------------
| Quantity
|--------------------------------------------------------------------------
*/

const quantity = ref(1)

function increaseQuantity() {
  if (
    product.value &&
    quantity.value < product.value.stock
  ) {
    quantity.value++
  }
}

function decreaseQuantity() {
  if (quantity.value > 1) {
    quantity.value--
  }
}

/*
|--------------------------------------------------------------------------
| Gallery
|--------------------------------------------------------------------------
*/

function selectImage(index: number) {
  activeImageIndex.value = index
}

function nextImage() {
  if (!productImages.value.length) {
    return
  }

  activeImageIndex.value =
    (activeImageIndex.value + 1) %
    productImages.value.length
}

function previousImage() {
  if (!productImages.value.length) {
    return
  }

  activeImageIndex.value =
    (activeImageIndex.value - 1 + productImages.value.length) %
    productImages.value.length
}

/*
|--------------------------------------------------------------------------
| Zoom
|--------------------------------------------------------------------------
*/

const zoomX = ref(50)
const zoomY = ref(50)
const isZooming = ref(false)

function handleZoom(event: MouseEvent) {
  const target = event.currentTarget as HTMLElement

  const rect = target.getBoundingClientRect()

  const x =
    ((event.clientX - rect.left) / rect.width) * 100

  const y =
    ((event.clientY - rect.top) / rect.height) * 100

  zoomX.value = Math.max(0, Math.min(100, x))
  zoomY.value = Math.max(0, Math.min(100, y))
}

function startZoom() {
  isZooming.value = true
}

function stopZoom() {
  isZooming.value = false
}

/*
|--------------------------------------------------------------------------
| Cart
|--------------------------------------------------------------------------
*/

function addToCart() {
  if (!product.value) {
    return
  }

  for (let i = 0; i < quantity.value; i++) {
    cartStore.addToCart(product.value)
  }
}

/*
|--------------------------------------------------------------------------
| Wishlist
|--------------------------------------------------------------------------
*/

function toggleWishlist() {
  if (!product.value) {
    return
  }

  wishlistStore.toggleWishlist(product.value)
}

/*
|--------------------------------------------------------------------------
| Price
|--------------------------------------------------------------------------
*/

function formatPrice(price: number) {
  return new Intl.NumberFormat('fa-IR').format(price)
}
/*  */
interface ProductReview {
  id: number
  name: string
  text: string
  rating: number
  date: string
}

const reviews = ref<ProductReview[]>([])

const reviewForm = reactive({
  name: '',
  text: '',
  rating: 0
})

const reviewError = ref('')
const reviewSuccess = ref(false)

const reviewStorageKey = computed(() => {
  return `nexora-reviews-${product.value?.id}`
})

const averageRating = computed(() => {
  if (!reviews.value.length) {
    return product.value?.rating?.toFixed(1) || '0.0'
  }

  const total = reviews.value.reduce(
    (sum, review) => sum + review.rating,
    0
  )

  return (total / reviews.value.length).toFixed(1)
})

function loadReviews() {
  if (!import.meta.client) {
    return
  }

  const saved = localStorage.getItem(
    reviewStorageKey.value
  )

  if (!saved) {
    reviews.value = []
    return
  }

  try {
    reviews.value = JSON.parse(saved)
  } catch {
    reviews.value = []
  }
}

function saveReviews() {
  if (!import.meta.client) {
    return
  }

  localStorage.setItem(
    reviewStorageKey.value,
    JSON.stringify(reviews.value)
  )
}

function submitReview() {
  reviewError.value = ''
  reviewSuccess.value = false

  if (!reviewForm.name.trim()) {
    reviewError.value = 'لطفاً نام خود را وارد کنید.'
    return
  }

  if (!reviewForm.rating) {
    reviewError.value = 'لطفاً امتیاز خود را انتخاب کنید.'
    return
  }

  if (!reviewForm.text.trim()) {
    reviewError.value = 'لطفاً متن نظر را وارد کنید.'
    return
  }

  reviews.value.unshift({
    id: Date.now(),
    name: reviewForm.name.trim(),
    text: reviewForm.text.trim(),
    rating: reviewForm.rating,
    date: new Intl.DateTimeFormat('fa-IR').format(
      new Date()
    )
  })

  saveReviews()

  reviewForm.name = ''
  reviewForm.text = ''
  reviewForm.rating = 0

  reviewSuccess.value = true
}

onMounted(() => {
  loadReviews()
})
</script>

<template>
  <main class="min-h-screen py-10 md:py-14">

    <div class="container-shop">

      <!-- Breadcrumb -->
      <nav
        class="
          mb-8
          flex
          flex-wrap
          items-center
          gap-2
          text-sm
          text-slate-500
        "
      >
        <NuxtLink
          to="/"
          class="hover:text-brand"
        >
          خانه
        </NuxtLink>

        <span>←</span>

        <NuxtLink
          to="/products"
          class="hover:text-brand"
        >
          فروشگاه
        </NuxtLink>

        <span>←</span>

        <span class="font-bold text-slate-700">
          {{ product?.title }}
        </span>
      </nav>


      <!-- Main Product -->
      <section
        class="
          overflow-hidden
          rounded-[32px]
          border
          border-slate-100
          bg-white
          shadow-sm
        "
      >

        <div
          class="
            grid
            gap-10
            p-5
            md:p-8
            lg:grid-cols-2
          "
        >

          <!-- ================================================= -->
          <!-- GALLERY -->
          <!-- ================================================= -->

          <div>

            <!-- Main Image -->
            <div
              class="
                relative
                overflow-hidden
                rounded-[30px]
                bg-slate-50
              "
              @mousemove="handleZoom"
              @mouseenter="startZoom"
              @mouseleave="stopZoom"
            >

              <img
                v-if="activeImage"
                :src="activeImage"
                :alt="product?.title"
                class="
                  h-[420px]
                  w-full
                  select-none
                  object-contain
                  p-6
                  transition-transform
                  duration-150
                  md:h-[520px]
                  md:p-10
                "
                :style="{
                  transform: isZooming
                    ? 'scale(2)'
                    : 'scale(1)',
                  transformOrigin:
                    `${zoomX}% ${zoomY}%`
                }"
              >

              <!-- Zoom Hint -->
              <div
                class="
                  pointer-events-none
                  absolute
                  bottom-5
                  left-5
                  rounded-xl
                  bg-black/60
                  px-4
                  py-2
                  text-xs
                  font-bold
                  text-white
                  backdrop-blur
                "
              >
                🔍 حرکت موس برای بزرگنمایی
              </div>


              <!-- Previous -->
              <button
                v-if="productImages.length > 1"
                type="button"
                class="
                  absolute
                  right-4
                  top-1/2
                  flex
                  h-12
                  w-12
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  bg-white/90
                  text-xl
                  shadow-lg
                  transition
                  hover:scale-110
                "
                aria-label="تصویر قبلی"
                @click="previousImage"
              >
                →
              </button>


              <!-- Next -->
              <button
                v-if="productImages.length > 1"
                type="button"
                class="
                  absolute
                  left-4
                  top-1/2
                  flex
                  h-12
                  w-12
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  bg-white/90
                  text-xl
                  shadow-lg
                  transition
                  hover:scale-110
                "
                aria-label="تصویر بعدی"
                @click="nextImage"
              >
                ←
              </button>


              <!-- Wishlist -->
              <button
                type="button"
                class="
                  absolute
                  left-5
                  top-5
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  bg-white/95
                  text-2xl
                  shadow-lg
                  transition
                  hover:scale-110
                "
                :class="
                  wishlistStore.isInWishlist(product!.id)
                    ? 'text-rose-500'
                    : 'text-slate-700'
                "
                aria-label="علاقه‌مندی"
                @click="toggleWishlist"
              >
                {{
                  wishlistStore.isInWishlist(product!.id)
                    ? '♥'
                    : '♡'
                }}
              </button>

            </div>


            <!-- Thumbnails -->
            <div
              v-if="productImages.length > 1"
              class="
                mt-5
                flex
                gap-3
                overflow-x-auto
                pb-2
              "
            >

              <button
                v-for="(image, index) in productImages"
                :key="`${image}-${index}`"
                type="button"
                class="
                  relative
                  h-24
                  w-24
                  shrink-0
                  overflow-hidden
                  rounded-2xl
                  border-2
                  bg-slate-50
                  transition
                  hover:scale-105
                "
                :class="
                  activeImageIndex === index
                    ? 'border-brand'
                    : 'border-transparent'
                "
                @click="selectImage(index)"
              >

                <img
                  :src="image"
                  :alt="`${product?.title} ${index + 1}`"
                  class="
                    h-full
                    w-full
                    object-cover
                  "
                >

                <span
                  v-if="activeImageIndex === index"
                  class="
                    absolute
                    inset-0
                    rounded-2xl
                    ring-2
                    ring-brand
                    ring-inset
                  "
                />

              </button>

            </div>

          </div>


          <!-- ================================================= -->
          <!-- PRODUCT INFO -->
          <!-- ================================================= -->

          <div class="flex flex-col">

            <!-- Category -->
            <span
              class="
                w-fit
                rounded-full
                bg-brand/10
                px-4
                py-2
                text-sm
                font-bold
                text-brand
              "
            >
              {{ product?.category }}
            </span>


            <!-- Title -->
            <h1
              class="
                mt-5
                text-3xl
                font-black
                leading-tight
                md:text-4xl
              "
            >
              {{ product?.title }}
            </h1>


            <!-- Rating -->
            <div
              class="
                mt-5
                flex
                flex-wrap
                items-center
                gap-3
              "
            >

              <span class="text-xl text-amber-400">
                ★
              </span>

              <span class="font-black">
                {{ product?.rating }}
              </span>

              <span class="text-slate-400">
                ({{ product?.reviews }} نظر)
              </span>

            </div>


            <!-- Description -->
            <p
              class="
                mt-7
                leading-8
                text-slate-500
              "
            >
              {{ product?.description || 'این محصول با کیفیت بالا و مناسب استفاده روزمره طراحی شده است.' }}
            </p>


            <!-- Price -->
            <div
              class="
                mt-8
                rounded-3xl
                bg-slate-50
                p-6
              "
            >

              <div
                v-if="product?.oldPrice"
                class="
                  text-sm
                  text-slate-400
                "
              >
                <del>
                  {{ formatPrice(product.oldPrice) }}
                </del>
                تومان
              </div>

              <div
                class="
                  mt-2
                  text-3xl
                  font-black
                "
              >
                {{ formatPrice(product!.price) }}

                <span
                  class="
                    text-sm
                    font-bold
                    text-slate-500
                  "
                >
                  تومان
                </span>
              </div>

            </div>


            <!-- Stock -->
            <div class="mt-6">

              <span
                v-if="product?.stock > 0"
                class="font-bold text-emerald-600"
              >
                ✓ موجود در انبار
              </span>

              <span
                v-else
                class="font-bold text-rose-500"
              >
                ناموجود
              </span>

            </div>


            <!-- Quantity -->
            <div
              class="
                mt-7
                flex
                flex-wrap
                items-center
                gap-5
              "
            >

              <span class="font-black">
                تعداد
              </span>

              <div
                class="
                  flex
                  items-center
                  overflow-hidden
                  rounded-2xl
                  border
                  border-slate-200
                "
              >

                <button
                  type="button"
                  class="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    text-xl
                    font-black
                    transition
                    hover:bg-slate-100
                  "
                  @click="decreaseQuantity"
                >
                  −
                </button>

                <span
                  class="
                    flex
                    h-12
                    w-14
                    items-center
                    justify-center
                    border-x
                    border-slate-200
                    font-black
                  "
                >
                  {{ quantity }}
                </span>

                <button
                  type="button"
                  class="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    text-xl
                    font-black
                    transition
                    hover:bg-slate-100
                  "
                  @click="increaseQuantity"
                >
                  +
                </button>

              </div>

            </div>


            <!-- Actions -->
            <div
              class="
                mt-8
                grid
                gap-3
                sm:grid-cols-[1fr_auto]
              "
            >

              <button
                type="button"
                :disabled="!product?.stock"
                class="
                  rounded-2xl
                  bg-brand
                  px-6
                  py-4
                  font-black
                  text-white
                  shadow-lg
                  shadow-brand/20
                  transition
                  hover:-translate-y-1
                  hover:shadow-xl
                  disabled:cursor-not-allowed
                  disabled:opacity-50
                "
                @click="addToCart"
              >
                افزودن به سبد خرید
              </button>


              <button
                type="button"
                class="
                  flex
                  h-14
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  px-6
                  text-2xl
                  transition
                  hover:border-rose-200
                  hover:bg-rose-50
                "
                :class="
                  wishlistStore.isInWishlist(product!.id)
                    ? 'text-rose-500'
                    : 'text-slate-700'
                "
                @click="toggleWishlist"
              >
                {{
                  wishlistStore.isInWishlist(product!.id)
                    ? '♥'
                    : '♡'
                }}
              </button>

            </div>


            <!-- Benefits -->
            <div
              class="
                mt-8
                grid
                gap-4
                border-t
                border-slate-100
                pt-8
                sm:grid-cols-3
              "
            >

              <div>
                <div class="text-2xl">
                  🚚
                </div>

                <p class="mt-2 text-sm font-bold">
                  ارسال سریع
                </p>
              </div>

              <div>
                <div class="text-2xl">
                  🛡️
                </div>

                <p class="mt-2 text-sm font-bold">
                  ضمانت اصالت
                </p>
              </div>

              <div>
                <div class="text-2xl">
                  ↩️
                </div>

                <p class="mt-2 text-sm font-bold">
                  ضمانت بازگشت
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      <!-- Specifications -->
      <section
        v-if="product?.specifications"
        class="
          rounded-4xl
          border
          border-slate-100
          bg-white
          p-6
          shadow-sm
          md:p-8
        "
      >

        <h2
          class="
            text-2xl
            font-black
          "
        >
          مشخصات محصول
        </h2>

        <div
          class="
            mt-6
            divide-y
            divide-slate-100
          "
        >

          <div
            v-for="(value, key) in product.specifications"
            :key="key"
            class="
              grid
              gap-2
              py-4
              sm:grid-cols-3
            "
          >

            <span class="font-bold text-slate-500">
              {{ key }}
            </span>

            <span
              class="
                font-bold
                sm:col-span-2
              "
            >
              {{ value }}
            </span>

          </div>

        </div>

      </section>
  <!-- Reviews & Rating -->
        <section
          class="
            w-[1150px]
            container-shop
            flex
            flex-col
            mt-8
            rounded-[32px]
            border
            border-slate-100
            bg-white
            p-6
            shadow-sm
            md:p-8
          "
        >

          <!-- Header -->
          <div
            class="
              flex
              flex-col
              gap-6
              border-b
              border-slate-100
              pb-8
              md:flex-row
              md:items-center
              md:justify-between
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
                تجربه خریداران
              </span>

              <h2
                class="
                  mt-2
                  text-2xl
                  font-black
                "
              >
                نظرات و امتیاز کاربران
              </h2>

              <p class="mt-2 text-slate-500">
                نظر خودتان را درباره این محصول با دیگران به اشتراک بگذارید.
              </p>
            </div>


            <!-- Average Rating -->
            <div
              class="
                flex
                items-center
                gap-4
                rounded-3xl
                bg-slate-50
                p-5
              "
            >

              <div class="text-center">

                <div
                  class="
                    text-4xl
                    font-black
                  "
                >
                  {{ averageRating }}
                </div>

                <div class="mt-1 text-amber-400">
                  ★★★★★
                </div>

              </div>

              <div
                class="
                  h-12
                  w-px
                  bg-slate-200
                "
              />

              <div>
                <div class="font-bold">
                  {{ reviews.length }}
                  نظر
                </div>

                <div class="mt-1 text-sm text-slate-500">
                  امتیاز ثبت شده
                </div>
              </div>

            </div>

          </div>


          <!-- Add Review -->
          <div
            class="
              mt-8
              rounded-[28px]
              bg-slate-50
              p-6
            "
          >

            <h3
              class="
                text-xl
                font-black
              "
            >
              ثبت نظر شما
            </h3>


            <!-- Name -->
            <div class="mt-6">

              <label
                class="
                  mb-2
                  block
                  font-bold
                "
              >
                نام شما
              </label>

              <input
                v-model="reviewForm.name"
                type="text"
                placeholder="مثلاً امیر"
                class="
                  w-full
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  px-5
                  py-4
                  outline-none
                  transition
                  focus:border-brand
                "
              />

            </div>


            <!-- Rating -->
            <div class="mt-6">

              <label
                class="
                  mb-3
                  block
                  font-bold
                "
              >
                امتیاز شما
              </label>

              <div
                class="
                  flex
                  flex-row-reverse
                  justify-end
                  gap-2
                "
              >

                <button
                  v-for="star in 5"
                  :key="star"
                  type="button"
                  class="
                    text-3xl
                    transition
                    hover:scale-125
                  "
                  :class="
                    star <= reviewForm.rating
                      ? 'text-amber-400'
                      : 'text-slate-300'
                  "
                  @click="reviewForm.rating = star"
                >
                  ★
                </button>

              </div>

              <p
                v-if="reviewForm.rating"
                class="
                  mt-2
                  text-sm
                  font-bold
                  text-slate-500
                "
              >
                {{ reviewForm.rating }}
                از ۵
              </p>

            </div>


            <!-- Comment -->
            <div class="mt-6">

              <label
                class="
                  mb-2
                  block
                  font-bold
                "
              >
                نظر شما
              </label>

              <textarea
                v-model="reviewForm.text"
                rows="5"
                placeholder="تجربه خودتان از این محصول را بنویسید..."
                class="
                  w-full
                  resize-none
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  px-5
                  py-4
                  outline-none
                  transition
                  focus:border-brand
                "
              />

            </div>


            <!-- Error -->
            <p
              v-if="reviewError"
              class="
                mt-4
                rounded-2xl
                bg-rose-50
                p-4
                text-sm
                font-bold
                text-rose-600
              "
            >
              {{ reviewError }}
            </p>


            <!-- Success -->
            <p
              v-if="reviewSuccess"
              class="
                mt-4
                rounded-2xl
                bg-emerald-50
                p-4
                text-sm
                font-bold
                text-emerald-600
              "
            >
              نظر شما با موفقیت ثبت شد.
            </p>


            <!-- Submit -->
            <button
              type="button"
              class="
                mt-6
                rounded-2xl
                bg-brand
                px-7
                py-4
                font-black
                text-white
                transition
                hover:-translate-y-1
                hover:shadow-xl
              "
              @click="submitReview"
            >
              ثبت نظر
            </button>

          </div>


          <!-- Reviews -->
          <div class="mt-10">

            <div
              v-if="reviews.length"
              class="space-y-5"
            >

              <article
                v-for="review in reviews"
                :key="review.id"
                class="
                  rounded-[28px]
                  border
                  border-slate-100
                  p-6
                "
              >

                <div
                  class="
                    flex
                    flex-col
                    gap-4
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                  "
                >

                  <div
                    class="
                      flex
                      items-center
                      gap-4
                    "
                  >

                    <div
                      class="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-full
                        bg-brand/10
                        font-black
                        text-brand
                      "
                    >
                      {{ review.name.charAt(0) }}
                    </div>

                    <div>

                      <h4 class="font-black">
                        {{ review.name }}
                      </h4>

                      <p
                        class="
                          mt-1
                          text-xs
                          text-slate-400
                        "
                      >
                        {{ review.date }}
                      </p>

                    </div>

                  </div>


                  <div class="text-amber-400">
                    {{ '★'.repeat(review.rating) }}
                    <span class="text-slate-300">
                      {{ '★'.repeat(5 - review.rating) }}
                    </span>
                  </div>

                </div>


                <p
                  class="
                    mt-5
                    leading-8
                    text-slate-600
                  "
                >
                  {{ review.text }}
                </p>

              </article>

            </div>


            <!-- Empty -->
            <div
              v-else
              class="
                rounded-[28px]
                border
                border-dashed
                border-slate-200
                p-10
                text-center
              "
            >

              <div class="text-5xl">
                💬
              </div>

              <h3
                class="
                  mt-4
                  text-xl
                  font-black
                "
              >
                هنوز نظری ثبت نشده
              </h3>

              <p
                class="
                  mt-2
                  text-slate-500
                "
              >
                اولین نفری باشید که درباره این محصول نظر می‌دهد.
              </p>

            </div>

          </div>

        </section>
    </div>
  </main>
</template>