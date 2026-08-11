<script setup lang="ts">
const authStore = useAuthStore()

onMounted(() => {
  authStore.loadUser()

  if (!authStore.isLoggedIn) {
    navigateTo('/login')
  }
})

function logoutUser() {
  authStore.logout()

  navigateTo('/')
}
</script>

<template>
  <div class="container-shop py-10">
    <section
      v-if="authStore.user"
      class="
        rounded-[32px]
        bg-white
        p-8
        shadow-sm
      "
    >
      <span class="font-bold text-brand">
        پنل کاربری
      </span>

      <h1 class="mt-3 text-4xl font-black">
        سلام،
        {{ authStore.user.name }} 👋
      </h1>

      <p class="mt-4 text-slate-500">
        {{ authStore.user.email }}
      </p>

      <div
        class="
          mt-10
          grid
          gap-5
          md:grid-cols-3
        "
      >
        <NuxtLink
          to="/orders"
          class="
            rounded-3xl
            bg-slate-50
            p-7
            font-black
          "
        >
          📦 سفارش‌های من
        </NuxtLink>

        <NuxtLink
          to="/wishlist"
          class="
            rounded-3xl
            bg-slate-50
            p-7
            font-black
          "
        >
          ♡ علاقه‌مندی‌ها
        </NuxtLink>

        <NuxtLink
          to="/account"
          class="
            rounded-3xl
            bg-slate-50
            p-7
            font-black
          "
        >
          ⚙️ تنظیمات حساب
        </NuxtLink>
      </div>

      <button
        class="
          mt-8
          rounded-2xl
          bg-rose-50
          px-7
          py-4
          font-bold
          text-rose-600
        "
        @click="logoutUser"
      >
        خروج از حساب
      </button>
    </section>
  </div>
</template>