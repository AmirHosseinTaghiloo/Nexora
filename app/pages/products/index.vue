<script setup lang="ts">
import ProductCard from '~/components/products/ProductCard.vue'
import { products } from '~/data/products'
import type { Product } from '~/types/product'

const route = useRoute()

const cartStore = useCartStore()

const searchText = ref(
  String(route.query.search || '')
)

const selectedCategory = ref('همه')

const sortBy = ref(
  String(route.query.sort || 'default')
)

const minPrice = ref('')
const maxPrice = ref('')

const categories = computed(() => {
  return [
    'همه',
    ...new Set(
      products.map(
        product => product.category
      )
    )
  ]
})

const filteredProducts = computed(() => {
  let result = [...products]

  const search =
    searchText.value
      .trim()
      .toLowerCase()

  // جستجو
  if (search) {
    result = result.filter(product => {
      return (
        product.title
          .toLowerCase()
          .includes(search) ||
        product.category
          .toLowerCase()
          .includes(search)
      )
    })
  }

  // دسته‌بندی
  if (
    selectedCategory.value !== 'همه'
  ) {
    result = result.filter(
      product =>
        product.category ===
        selectedCategory.value
    )
  }

  // حداقل قیمت
  const minimum = Number(
    minPrice.value
  )

  if (
    minPrice.value &&
    !Number.isNaN(minimum)
  ) {
    result = result.filter(
      product =>
        product.price >= minimum
    )
  }

  // حداکثر قیمت
  const maximum = Number(
    maxPrice.value
  )

  if (
    maxPrice.value &&
    !Number.isNaN(maximum)
  ) {
    result = result.filter(
      product =>
        product.price <= maximum
    )
  }

  // مرتب‌سازی
  if (
    sortBy.value === 'price-low'
  ) {
    result.sort(
      (a, b) =>
        a.price - b.price
    )
  }

  if (
    sortBy.value === 'price-high'
  ) {
    result.sort(
      (a, b) =>
        b.price - a.price
    )
  }

  if (
    sortBy.value === 'rating'
  ) {
    result.sort(
      (a, b) =>
        b.rating - a.rating
    )
  }

  if (
    sortBy.value === 'newest'
  ) {
    result.sort(
      (a, b) =>
        b.id - a.id
    )
  }

  return result
})

function clearFilters() {
  searchText.value = ''
  selectedCategory.value = 'همه'
  minPrice.value = ''
  maxPrice.value = ''
  sortBy.value = 'default'
}

function addToCart(product: Product) {
  cartStore.addToCart(product)
}
</script>

<template>
  <div class="container-shop py-10">

    <!-- Hero -->
    <section
      class="
        rounded-[32px]
        bg-gradient-to-l
        from-slate-950
        via-indigo-950
        to-violet-900
        p-7
        text-white
        md:p-10
      "
    >
      <span
        class="
          text-sm
          font-bold
          text-indigo-200
        "
      >
        NEXORA MARKET
      </span>

      <h1
        class="
          mt-3
          text-4xl
          font-black
          md:text-5xl
        "
      >
        فروشگاه محصولات
      </h1>

      <p
        class="
          mt-4
          max-w-2xl
          leading-8
          text-white/65
        "
      >
        جدیدترین محصولات دیجیتال،
        پوشاک، خانه و آشپزخانه
        را با بهترین قیمت
        مشاهده و مقایسه کنید.
      </p>

      <!-- Search -->
      <div
        class="
          mt-8
          flex
          rounded-2xl
          bg-white
          p-2
          shadow-xl
        "
      >
        <input
          v-model="searchText"
          type="search"
          placeholder="جستجو در بین محصولات..."
          class="
            min-w-0
            flex-1
            bg-transparent
            px-4
            py-3
            text-slate-900
            outline-none
          "
        >

        <button
          type="button"
          class="
            rounded-xl
            bg-brand
            px-6
            py-3
            font-bold
            text-white
          "
        >
          جستجو
        </button>
      </div>
    </section>

    <!-- Main -->
    <div
      class="
        mt-8
        grid
        gap-7
        lg:grid-cols-[280px_minmax(0,1fr)]
      "
    >

      <!-- Filters -->
      <aside
        class="
          h-fit
          rounded-[28px]
          bg-white
          p-6
          shadow-sm
          lg:sticky
          lg:top-28
        "
      >
        <div
          class="
            flex
            items-center
            justify-between
          "
        >
          <h2
            class="
              text-xl
              font-black
            "
          >
            فیلتر محصولات
          </h2>

          <button
            type="button"
            class="
              text-sm
              font-bold
              text-rose-500
            "
            @click="clearFilters"
          >
            حذف فیلترها
          </button>
        </div>

        <!-- Categories -->
        <div
          class="
            mt-7
            border-t
            border-slate-100
            pt-6
          "
        >
          <h3 class="font-black">
            دسته‌بندی
          </h3>

          <div
            class="
              mt-4
              grid
              gap-2
            "
          >
            <button
              v-for="category in categories"
              :key="category"
              type="button"
              class="
                flex
                items-center
                justify-between
                rounded-xl
                px-4
                py-3
                text-right
                text-sm
                font-bold
                transition
              "
              :class="
                selectedCategory === category
                  ? 'bg-indigo-50 text-brand'
                  : 'text-slate-600 hover:bg-slate-50'
              "
              @click="
                selectedCategory = category
              "
            >
              <span>
                {{ category }}
              </span>

              <span>
                ‹
              </span>
            </button>
          </div>
        </div>

        <!-- Price -->
        <div
          class="
            mt-7
            border-t
            border-slate-100
            pt-6
          "
        >
          <h3 class="font-black">
            محدوده قیمت
          </h3>

          <div
            class="
              mt-4
              grid
              gap-3
            "
          >
            <input
              v-model="minPrice"
              type="number"
              placeholder="حداقل قیمت"
              class="
                w-full
                rounded-xl
                border
                border-slate-200
                px-4
                py-3
                outline-none
                focus:border-brand
              "
            >

            <input
              v-model="maxPrice"
              type="number"
              placeholder="حداکثر قیمت"
              class="
                w-full
                rounded-xl
                border
                border-slate-200
                px-4
                py-3
                outline-none
                focus:border-brand
              "
            >
          </div>
        </div>
      </aside>

      <!-- Products -->
      <main>

        <!-- Sort -->
        <div
          class="
            flex
            flex-col
            gap-4
            rounded-2xl
            bg-white
            p-5
            shadow-sm
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p
            class="
              font-bold
              text-slate-600
            "
          >
            <strong
              class="text-brand"
            >
              {{ filteredProducts.length }}
            </strong>

            محصول پیدا شد
          </p>

          <select
            v-model="sortBy"
            class="
              rounded-xl
              border
              border-slate-200
              bg-white
              px-4
              py-3
              font-bold
              outline-none
            "
          >
            <option value="default">
              مرتب‌سازی پیش‌فرض
            </option>

            <option value="newest">
              جدیدترین
            </option>

            <option value="price-low">
              ارزان‌ترین
            </option>

            <option value="price-high">
              گران‌ترین
            </option>

            <option value="rating">
              بالاترین امتیاز
            </option>
          </select>
        </div>

        <!-- Product Grid -->
        <div
          v-if="filteredProducts.length"
          class="
            mt-7
            grid
            gap-6
            sm:grid-cols-2
            xl:grid-cols-3
          "
        >
          <ProductCard
            v-for="product in filteredProducts"
            :key="product.id"
            :product="product"
            @add-to-cart="addToCart"
          />
        </div>

        <!-- Empty -->
        <section
          v-else
          class="
            mt-7
            rounded-[30px]
            bg-white
            p-14
            text-center
          "
        >
          <div class="text-6xl">
            🔎
          </div>

          <h2
            class="
              mt-6
              text-2xl
              font-black
            "
          >
            محصولی پیدا نشد
          </h2>

          <p
            class="
              mt-3
              text-slate-500
            "
          >
            عبارت جستجو یا
            فیلترهای انتخابی
            را تغییر دهید.
          </p>

          <button
            type="button"
            class="
              mt-7
              rounded-2xl
              bg-brand
              px-7
              py-4
              font-bold
              text-white
            "
            @click="clearFilters"
          >
            حذف همه فیلترها
          </button>
        </section>

      </main>
    </div>
  </div>
</template>