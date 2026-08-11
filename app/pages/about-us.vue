<script setup lang="ts">
const stats = [
  {
    value: '10K+',
    title: 'مشتری',
    description: 'کاربرانی که به NEXORA اعتماد کرده‌اند',
  },
  {
    value: '5K+',
    title: 'محصول',
    description: 'محصول متنوع در دسته‌بندی‌های مختلف',
  },
  {
    value: '98%',
    title: 'رضایت مشتری',
    description: 'تجربه خرید موفق و رضایت‌بخش',
  },
  {
    value: '24/7',
    title: 'پشتیبانی',
    description: 'همراه شما در تمام مراحل خرید',
  },
]

const values = [
  {
    icon: '🎯',
    title: 'تمرکز روی کیفیت',
    text: 'ما تلاش می‌کنیم محصولاتی باکیفیت و قابل اعتماد را در اختیار کاربران قرار دهیم.',
  },
  {
    icon: '⚡',
    title: 'سرعت و سادگی',
    text: 'تجربه خرید باید سریع، ساده و بدون پیچیدگی باشد. این یکی از اصول اصلی NEXORA است.',
  },
  {
    icon: '🛡️',
    title: 'اعتماد و امنیت',
    text: 'امنیت اطلاعات و ایجاد یک تجربه خرید مطمئن برای ما اهمیت ویژه‌ای دارد.',
  },
  {
    icon: '💡',
    title: 'نوآوری',
    text: 'همیشه به دنبال راه‌های بهتر برای ساخت تجربه‌ای مدرن‌تر در خرید آنلاین هستیم.',
  },
]

const services = [
  {
    icon: '🚚',
    title: 'ارسال سریع',
    text: 'سفارش خود را در سریع‌ترین زمان ممکن دریافت کنید.',
  },
  {
    icon: '💳',
    title: 'پرداخت آسان',
    text: 'فرآیند پرداخت ساده و مناسب برای خرید آنلاین.',
  },
  {
    icon: '🔒',
    title: 'خرید امن',
    text: 'اطلاعات و فرآیند خرید شما با امنیت بالا مدیریت می‌شود.',
  },
  {
    icon: '💬',
    title: 'پشتیبانی حرفه‌ای',
    text: 'در صورت نیاز، تیم پشتیبانی در کنار شماست.',
  },
]
</script>

<template>
  <div class="pb-20">

    <!-- ================================= -->
    <!-- HERO -->
    <!-- ================================= -->

    <section class="container-shop pt-8 md:pt-12">

      <div
        class="
          relative
          overflow-hidden
          rounded-[36px]
          bg-slate-950
          px-6
          py-14
          text-white
          shadow-2xl
          md:px-12
          md:py-20
          lg:px-16
        "
      >

        <!-- Decorative circles -->

        <div
          class="
            pointer-events-none
            absolute
            -right-28
            -top-28
            h-80
            w-80
            rounded-full
            bg-brand/30
            blur-3xl
          "
        />

        <div
          class="
            pointer-events-none
            absolute
            -bottom-32
            -left-20
            h-96
            w-96
            rounded-full
            bg-purple-500/20
            blur-3xl
          "
        />

        <div
          class="
            relative
            z-10
            mx-auto
            max-w-4xl
            text-center
          "
        >

          <div
            class="
              mx-auto
              flex
              w-fit
              items-center
              gap-2
              rounded-full
              border
              border-white/10
              bg-white/10
              px-5
              py-2.5
              text-sm
              font-bold
              backdrop-blur
            "
          >

            <span
              class="
                h-2
                w-2
                rounded-full
                bg-brand
              "
            />

            درباره NEXORA

          </div>


          <h1
            class="
              mt-7
              text-4xl
              font-black
              leading-[1.25]
              md:text-5xl
              lg:text-6xl
            "
          >
            آینده خرید دیجیتال
            <span class="text-brand">
              اینجاست
            </span>
          </h1>


          <p
            class="
              mx-auto
              mt-6
              max-w-2xl
              text-base
              leading-8
              text-white/65
              md:text-lg
            "
          >
            NEXORA یک فروشگاه اینترنتی مدرن است که با هدف ایجاد
            تجربه‌ای ساده، سریع و حرفه‌ای برای خرید محصولات
            دیجیتال و کالاهای متنوع ساخته شده است.
          </p>


          <div
            class="
              mt-8
              flex
              flex-col
              justify-center
              gap-3
              sm:flex-row
            "
          >

            <NuxtLink
              to="/products"
              class="
                rounded-2xl
                bg-brand
                px-7
                py-4
                font-black
                text-white
                transition
                hover:-translate-y-1
                hover:shadow-xl
                hover:shadow-brand/30
              "
            >
              مشاهده محصولات
            </NuxtLink>


            <NuxtLink
              to="/blog"
              class="
                rounded-2xl
                border
                border-white/10
                bg-white/10
                px-7
                py-4
                font-black
                backdrop-blur
                transition
                hover:bg-white/15
              "
            >
              مجله NEXORA
            </NuxtLink>

          </div>

        </div>

      </div>

    </section>


    <!-- ================================= -->
    <!-- INTRO -->
    <!-- ================================= -->

    <section class="container-shop mt-16">

      <div
        class="
          grid
          items-center
          gap-10
          lg:grid-cols-2
        "
      >

        <!-- Image -->

        <div
          class="
            relative
            overflow-hidden
            rounded-[32px]
            bg-slate-100
            shadow-xl
          "
        >

          <img
            src="C:\Users\AMT\Desktop\nexora\public\images\logo\logo-center.png"
            alt="NEXORA Shopping"
            class="
              h-[360px]
              w-full
              object-cover
              md:h-[450px]
            "
          />

          


        </div>


        <!-- Text -->

        <div>

          <span
            class="
              text-sm
              font-bold
              text-brand
            "
          >
            داستان ما
          </span>


          <h2
            class="
              mt-3
              text-3xl
              font-black
              leading-tight
              md:text-4xl
            "
          >
            NEXORA چرا ساخته شد؟
          </h2>


          <p
            class="
              mt-6
              text-base
              leading-8
              text-slate-500
            "
          >
            خرید آنلاین فقط پیدا کردن یک محصول و پرداخت هزینه آن
            نیست. ما در NEXORA تلاش کرده‌ایم تمام مسیر خرید را
            ساده‌تر و لذت‌بخش‌تر کنیم.
          </p>


          <p
            class="
              mt-4
              text-base
              leading-8
              text-slate-500
            "
          >
            از پیدا کردن محصول موردنظر گرفته تا بررسی مشخصات،
            مشاهده تصاویر، مقایسه و در نهایت خرید؛ هدف ما ساخت
            تجربه‌ای است که کاربر در آن احساس راحتی و اطمینان داشته
            باشد.
          </p>


          <div
            class="
              mt-7
              h-px
              bg-slate-100
            "
          />


          <div
            class="
              mt-7
              flex
              flex-wrap
              gap-3
            "
          >

            <span
              class="
                rounded-full
                bg-brand/10
                px-4
                py-2
                text-sm
                font-bold
                text-brand
              "
            >
              مدرن
            </span>

            <span
              class="
                rounded-full
                bg-slate-100
                px-4
                py-2
                text-sm
                font-bold
                text-slate-600
              "
            >
              سریع
            </span>

            <span
              class="
                rounded-full
                bg-slate-100
                px-4
                py-2
                text-sm
                font-bold
                text-slate-600
              "
            >
              امن
            </span>

            <span
              class="
                rounded-full
                bg-slate-100
                px-4
                py-2
                text-sm
                font-bold
                text-slate-600
              "
            >
              مشتری‌محور
            </span>

          </div>

        </div>

      </div>

    </section>


    <!-- ================================= -->
    <!-- STATS -->
    <!-- ================================= -->

    <section class="container-shop mt-16">

      <div
        class="
          grid
          gap-4
          sm:grid-cols-2
          lg:grid-cols-4
        "
      >

        <div
          v-for="stat in stats"
          :key="stat.title"
          class="
            rounded-[28px]
            border
            border-slate-100
            bg-white
            p-6
            shadow-sm
            transition
            hover:-translate-y-1
            hover:shadow-xl
          "
        >

          <div
            class="
              text-3xl
              font-black
              text-brand
            "
          >
            {{ stat.value }}
          </div>

          <h3
            class="
              mt-3
              font-black
            "
          >
            {{ stat.title }}
          </h3>

          <p
            class="
              mt-2
              text-sm
              leading-6
              text-slate-500
            "
          >
            {{ stat.description }}
          </p>

        </div>

      </div>

    </section>


    <!-- ================================= -->
    <!-- VALUES -->
    <!-- ================================= -->

    <section class="container-shop mt-20">

      <div class="text-center">

        <span
          class="
            text-sm
            font-bold
            text-brand
          "
        >
          ارزش‌های ما
        </span>

        <h2
          class="
            mt-3
            text-3xl
            font-black
            md:text-4xl
          "
        >
          چیزی که برای ما اهمیت دارد
        </h2>

        <p
          class="
            mx-auto
            mt-4
            max-w-2xl
            text-sm
            leading-7
            text-slate-500
          "
        >
          NEXORA بر اساس چند اصل ساده ساخته شده؛
          کیفیت، اعتماد، سرعت و نوآوری.
        </p>

      </div>


      <div
        class="
          mt-10
          grid
          gap-6
          sm:grid-cols-2
          lg:grid-cols-4
        "
      >

        <article
          v-for="value in values"
          :key="value.title"
          class="
            group
            rounded-[28px]
            border
            border-slate-100
            bg-white
            p-7
            shadow-sm
            transition
            duration-300
            hover:-translate-y-2
            hover:shadow-2xl
          "
        >

          <div
            class="
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              bg-brand/10
              text-3xl
              transition
              group-hover:scale-110
            "
          >
            {{ value.icon }}
          </div>


          <h3
            class="
              mt-6
              text-lg
              font-black
            "
          >
            {{ value.title }}
          </h3>


          <p
            class="
              mt-3
              text-sm
              leading-7
              text-slate-500
            "
          >
            {{ value.text }}
          </p>

        </article>

      </div>

    </section>


    <!-- ================================= -->
    <!-- SERVICES -->
    <!-- ================================= -->

    <section class="container-shop mt-20">

      <div
        class="
          overflow-hidden
          rounded-[32px]
          bg-slate-950
          p-7
          text-white
          md:p-10
        "
      >

        <div
          class="
            flex
            flex-col
            gap-3
            md:flex-row
            md:items-end
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
              چرا NEXORA؟
            </span>

            <h2
              class="
                mt-2
                text-2xl
                font-black
                md:text-3xl
              "
            >
              تجربه‌ای فراتر از خرید
            </h2>

          </div>

          <p
            class="
              max-w-xl
              text-sm
              leading-7
              text-white/50
            "
          >
            تمام تلاش ما این است که از اولین ورود شما به سایت
            تا دریافت سفارش، تجربه‌ای ساده و مطمئن داشته باشید.
          </p>

        </div>


        <div
          class="
            mt-10
            grid
            gap-4
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >

          <div
            v-for="service in services"
            :key="service.title"
            class="
              rounded-[24px]
              border
              border-white/10
              bg-white/5
              p-6
              transition
              hover:bg-white/10
            "
          >

            <div class="text-3xl">
              {{ service.icon }}
            </div>

            <h3
              class="
                mt-5
                font-black
              "
            >
              {{ service.title }}
            </h3>

            <p
              class="
                mt-2
                text-sm
                leading-6
                text-white/50
              "
            >
              {{ service.text }}
            </p>

          </div>

        </div>

      </div>

    </section>


    <!-- ================================= -->
    <!-- CTA -->
    <!-- ================================= -->

    <section class="container-shop mt-16">

      <div
        class="
          relative
          overflow-hidden
          rounded-[32px]
          bg-brand
          px-7
          py-12
          text-center
          text-white
          md:px-12
          md:py-14
        "
      >

        <div
          class="
            pointer-events-none
            absolute
            -left-20
            -top-20
            h-56
            w-56
            rounded-full
            bg-white/10
            blur-3xl
          "
        />

        <div
          class="
            pointer-events-none
            absolute
            -bottom-24
            -right-10
            h-64
            w-64
            rounded-full
            bg-purple-500/20
            blur-3xl
          "
        />

        <div class="relative z-10">

          <div class="text-4xl">
            🛍️
          </div>

          <h2
            class="
              mt-5
              text-3xl
              font-black
              md:text-4xl
            "
          >
            آماده یک خرید بهتر هستید؟
          </h2>

          <p
            class="
              mx-auto
              mt-4
              max-w-xl
              text-sm
              leading-7
              text-white/70
            "
          >
            محصولات متنوع NEXORA را ببینید و خرید بعدی خود را
            با یک تجربه مدرن شروع کنید.
          </p>


          <div
            class="
              mt-7
              flex
              flex-col
              justify-center
              gap-3
              sm:flex-row
            "
          >

            <NuxtLink
              to="/products"
              class="
                rounded-2xl
                bg-white
                px-7
                py-4
                font-black
                text-brand
                transition
                hover:-translate-y-1
                hover:shadow-xl
              "
            >
              مشاهده فروشگاه
            </NuxtLink>


            <NuxtLink
              to="/blog"
              class="
                rounded-2xl
                border
                border-white/20
                bg-white/10
                px-7
                py-4
                font-black
                transition
                hover:bg-white/20
              "
            >
              خواندن مجله
            </NuxtLink>

          </div>

        </div>

      </div>

    </section>

  </div>
</template>