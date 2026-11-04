<template>
  <footer
    class="
      mt-24
      bg-slate-950
      text-white
    "
  >
    <div
      class="
        container-shop
        grid
        gap-12
        py-16
        md:grid-cols-2
        lg:grid-cols-4
      "
    >
      <div>
      <NuxtLink
        to="/"
        class="
          text-2xl
          font-black
          tracking-tight
          text-brand
          sm:text-3xl
        "
      >
        <img
          src="/images/logo/logo-buld2.png"
          alt="NEXORA"
          class="

          max-w-[200px]

          items-center
          rounded-2xl
        ">
      </NuxtLink>

        <p
          class="
            mt-5
            max-w-sm
            leading-8
            text-slate-400
          "
        >
          تجربه‌ای مدرن، سریع و مطمئن برای خرید آنلاین
          از میان هزاران محصول متنوع.
        </p>

        <a
          href="https://github.com/AmirHosseinTaghiloo"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="مشاهده پروفایل GitHub امیرحسین تقی‌لو"
          class="
            mt-6
            inline-flex
            w-fit
            items-center
            gap-3
            rounded-2xl
            border
            border-white/15
            bg-white/5
            px-5
            py-3
            font-bold
            text-white
            transition
            hover:-translate-y-1
            hover:border-white/30
            hover:bg-white/10
          "
        >
          <span class="text-xl" aria-hidden="true">⌘</span>
          مشاهده پروفایل GitHub
          <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div>
        <h3 class="text-lg font-black">
          راهنمای خرید
        </h3>

        <div
          class="
            mt-5
            grid
            gap-3
            text-slate-400
          "
        >
          <NuxtLink to="/products">
            مشاهده محصولات
          </NuxtLink>

          <NuxtLink to="/blog">
            راهنمای خرید و مقالات
          </NuxtLink>

          <NuxtLink to="/about-us">
            درباره NEXORA
          </NuxtLink>
        </div>
      </div>

      <div>
        <h3 class="text-lg font-black">
          خدمات مشتریان
        </h3>

        <div
          class="
            mt-5
            grid
            gap-3
            text-slate-400
          "
        >
          <NuxtLink to="/account">
            حساب کاربری
          </NuxtLink>

          <NuxtLink to="/wishlist">
            علاقه‌مندی‌ها
          </NuxtLink>

          <NuxtLink to="/cart">
            سبد خرید
          </NuxtLink>
        </div>
      </div>

      <div>
        <h3 class="text-lg font-black">
          خبرنامه
        </h3>

        <p class="mt-5 text-slate-400">
          از تخفیف‌ها و محصولات جدید باخبر شوید.
        </p>

        <div
          class="
            mt-5
            flex
            overflow-hidden
            rounded-2xl
            bg-white/10
          "
        >
          <input
            class="
              min-w-0
              flex-1
              bg-transparent
              px-4
              py-4
              text-sm
              outline-none
            "
            placeholder="ایمیل شما"
          >

          <button
            class="
              bg-brand
              px-5
              font-bold
            "
          >
            عضویت
          </button>
        </div>
      </div>
    </div>

    <div
      class="
        border-t
        border-white/10
      "
    >
      <div
        class="
          container-shop
          flex
          flex-col
          gap-3
          py-6
          text-sm
          text-slate-500
          md:flex-row
          md:items-center
          md:justify-between
        "
      >
        <p>
          © ۲۰۲۶ تمامی حقوق برای NEXORA محفوظ است.
        </p>

        <p>
          طراحی شده با Nuxt 4 و Tailwind CSS 4
        </p>
      </div>
    </div>
  </footer>
</template>