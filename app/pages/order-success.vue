<script setup lang="ts">
const route = useRoute()

const orderId = computed(() => {
  return (
    route.query.id ||
    'NX-0000000'
  )
})
</script>

<template>
  <div
    class="
      container-shop
      flex
      min-h-[75vh]
      items-center
      justify-center
      py-12
    "
  >
    <section
      class="
        w-full
        max-w-2xl
        overflow-hidden
        rounded-[36px]
        bg-white
        p-8
        text-center
        shadow-xl
        shadow-slate-200/60
        md:p-14
      "
    >
      <div
        class="
          mx-auto
          flex
          h-28
          w-28
          items-center
          justify-center
          rounded-full
          bg-emerald-50
          text-5xl
        "
      >
        ✓
      </div>

      <span
        class="
          mt-8
          inline-flex
          rounded-full
          bg-emerald-50
          px-4
          py-2
          text-sm
          font-black
          text-emerald-700
        "
      >
        سفارش با موفقیت ثبت شد
      </span>

      <h1
        class="
          mt-6
          text-4xl
          font-black
        "
      >
        خرید شما با موفقیت انجام شد
      </h1>

      <p
        class="
          mx-auto
          mt-5
          max-w-xl
          leading-8
          text-slate-500
        "
      >
        سفارش شما ثبت شد و پس از
        بررسی، مراحل آماده‌سازی
        و ارسال از طریق پنل کاربری
        قابل پیگیری است.
      </p>

      <div
        class="
          mx-auto
          mt-8
          max-w-md
          rounded-2xl
          bg-slate-50
          p-6
        "
      >
        <span
          class="
            text-sm
            text-slate-500
          "
        >
          شماره سفارش
        </span>

        <strong
          class="
            mt-3
            block
            text-2xl
            font-black
            text-brand
          "
        >
          {{ orderId }}
        </strong>
      </div>

      <div
        class="
          mt-9
          flex
          flex-col
          justify-center
          gap-4
          sm:flex-row
        "
      >
        <NuxtLink
          to="/account/orders"
          class="
            rounded-2xl
            bg-brand
            px-7
            py-4
            font-black
            text-white
          "
        >
          پیگیری سفارش
        </NuxtLink>

        <NuxtLink
          to="/products"
          class="
            rounded-2xl
            bg-slate-100
            px-7
            py-4
            font-black
            text-slate-800
          "
        >
          ادامه خرید
        </NuxtLink>
      </div>
    </section>
  </div>
</template>