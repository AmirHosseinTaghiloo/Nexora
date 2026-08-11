<script setup lang="ts">
const mobileMenuOpen = ref(false)

const searchText = ref('')
const cartStore = useCartStore()

onMounted(() => {
  cartStore.loadCart()
})


const navigation = [
  {
    title: 'صفحه اصلی',
    to: '/'
  },
  {
    title: 'فروشگاه',
    to: '/products'
  },
  {
    title: 'وبلاگ',
    to: '/blog'
  },
  {
    title: 'درباره ما',
    to: '/about-us'
  }
]

function searchProducts() {
  if (!searchText.value.trim()) return

  navigateTo({
    path: '/products',
    query: {
      search: searchText.value
    }
  })
}
</script>

<template>
  <header
    class="
            sticky
      top-0
      z-50
      border-b
      bg-white/80
      backdrop-blur-2xl
      z-50
      bg-gradient-to-r
      from-[#05051a]
      via-[#0d0d2e]
      to-[#1a1a4b]
      shadow-xl
      shadow-indigo-950/40
    "
  >
    <div
      class="
        container-shop
        flex
        h-20
        items-center
        gap-4
        px-4
      "
    >
      <!-- Mobile menu -->

      <button
        class="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-xl
          border
          border-white/15
          bg-white/10
          text-xl
          text-white
          backdrop-blur-sm
          transition
          hover:bg-white/20
          lg:hidden
        "
        aria-label="باز کردن منو"
        @click="mobileMenuOpen = !mobileMenuOpen"
      >
        ☰
      </button>

      <!-- Logo -->

      <NuxtLink
        to="/"
        class="
          text-2xl
          font-black
          tracking-tight
          text-white
          sm:text-3xl
        "
      >
        <img
          src="C:\Users\AMT\Desktop\nexora\public\images\logo\logo-buld.png"
          class="
            max-w-[220px]
            items-center
            rounded-2xl
          "
        >
      </NuxtLink>

      <!-- Desktop navigation -->

      <nav
        class="
          hidden
          items-center
          gap-6
          font-bold
          text-sm
          text-white/80
          lg:flex
        "
      >
        <NuxtLink
          v-for="item in navigation"
          :key="item.title"
          :to="item.to"
          class="
            transition
            hover:text-white
          "
        >
          {{ item.title }}
        </NuxtLink>
      </nav>

      <!-- Search -->

      <form
        class="
          mr-auto
          hidden
          max-w-xl
          flex-1
          items-center
          rounded-2xl
          border
          border-white/15
          bg-white/10
          px-4
          py-3
          backdrop-blur-sm
          lg:flex
        "
        @submit.prevent="searchProducts"
      >
        <span class="text-lg text-white/70">
          🔍
        </span>

        <input
          v-model="searchText"
          class="
            mr-3
            w-full
            bg-transparent
            text-sm
            text-white
            outline-none
            placeholder:text-white/50
          "
          type="search"
          placeholder="جستجو در میان هزاران محصول..."
        >
      </form>

      <!-- Actions -->

      <div
        class="
          flex
          items-center
          gap-2
        "
      >
        <NuxtLink
          to="/wishlist"
          class="
            flex
            items-center
            gap-2
            rounded-xl
            px-4
            py-3
            font-bold
            text-white/80
            transition
            hover:bg-white/10
            hover:text-white
           "
          >
          <span class="text-xl">
            ♡
          </span>

          <span>
            علاقه‌مندی‌ها
          </span>
        </NuxtLink>

        <NuxtLink
          to="/login"
          class="
            hidden
            rounded-xl
            border
            border-white/20
            bg-white/10
            px-4
            py-3
            font-bold
            text-white
            transition
            hover:border-white/40
            hover:bg-white/20
            sm:block
          "
        >
          👤 ورود
        </NuxtLink>

        <NuxtLink
          to="/cart"
          class="
            flex
            items-center
            gap-2
            rounded-xl
            bg-white
            px-4
            py-3
            font-bold
            text-[#0d0d2e]
            shadow-lg
            shadow-white/10
            transition
            hover:-translate-y-0.5
            hover:bg-white/90
          "
        >
          <span>🛒</span>

          <span class="hidden sm:block">
            سبد خرید
          </span>

          <span
            class="
              rounded-full
              bg-[#0d0d2e]/10
              px-2
              py-0.5
              text-xs
            "
          >
            {{ cartStore.totalItems }}
          </span>
        </NuxtLink>
      </div>
    </div>

    <!-- Mobile menu -->

    <Transition name="menu">
      <div
        v-if="mobileMenuOpen"
        class="
          border-t
          border-white/10
          p-5
          lg:hidden
        "
      >
        <form
          class="
            flex
            items-center
            rounded-2xl
            border
            border-white/15
            bg-white/10
            px-4
            py-3
          "
          @submit.prevent="searchProducts"
        >
          <span class="text-white/70">🔍</span>

          <input
            v-model="searchText"
            class="
              mr-3
              w-full
              bg-transparent
              text-white
              outline-none
              placeholder:text-white/50
            "
            placeholder="جستجوی محصول..."
          >
        </form>

        <nav
          class="
            mt-5
            grid
            gap-2
          "
        >
          <NuxtLink
            to="/wishlist"
            class="
              flex
              items-center
              gap-2
              rounded-xl
              px-4
              py-3
              font-bold
              text-white/80
              transition
              hover:bg-white/10
              hover:text-white
            "
          >
            <span class="text-xl">
              ♡
            </span>

            <span>
              علاقه‌مندی‌ها
            </span>
          </NuxtLink>

          <NuxtLink
            v-for="item in navigation"
            :key="item.title"
            :to="item.to"
            class="
              rounded-xl
              px-4
              py-3
              font-bold
              text-white/80
              transition
              hover:bg-white/10
              hover:text-white
            "
            @click="mobileMenuOpen = false"
          >
            {{ item.title }}
          </NuxtLink>

          <NuxtLink
            to="/login"
            class="
              rounded-xl
              bg-white/10
              px-4
              py-3
              font-bold
              text-white
              transition
              hover:bg-white/20
            "
            @click="mobileMenuOpen = false"
          >
            👤 ورود و ثبت‌نام
          </NuxtLink>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.menu-enter-active,
.menu-leave-active {
  transition:
    opacity 180ms ease,
    transform 180ms ease;
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>