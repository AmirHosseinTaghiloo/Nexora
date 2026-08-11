<script setup lang="ts">
const authStore = useAuthStore()

const cartStore = useCartStore()

const wishlistStore = useWishlistStore()

const ordersStore = useOrdersStore()

onMounted(() => {
  // بارگذاری اطلاعات کاربر
  authStore.loadUser()

  // بارگذاری سبد خرید
  cartStore.loadCart()

  // بارگذاری علاقه‌مندی‌ها
  wishlistStore.loadWishlist()

  // بارگذاری سفارش‌های ثبت‌شده
  ordersStore.loadOrders()

  // اگر کاربر وارد نشده باشد
  // به صفحه ورود منتقل می‌شود
  if (!authStore.isLoggedIn) {
    navigateTo('/login')
  }
})
</script>

<template>
  <div
    class="
      min-h-screen
      bg-[radial-gradient(circle_at_top_right,_rgba(99,102,241,0.12),transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(168,85,247,0.10),transparent_35%)]
      py-8
      md:py-12
    "
  >
    <div class="container-shop">

      <!-- منوی موبایل -->

      <div
        class="
          mb-5
          overflow-x-auto
          lg:hidden
        "
      >
        <div
          class="
            flex
            min-w-max
            gap-3
          "
        >
          <NuxtLink
            to="/account"
            class="
              rounded-xl
              bg-brand
              px-5
              py-3
              font-bold
              text-white
            "
          >
            داشبورد
          </NuxtLink>

          <NuxtLink
            to="/account/orders"
            class="
              rounded-xl
              bg-white
              px-5
              py-3
              font-bold
              text-slate-700
            "
          >
            سفارش‌ها
          </NuxtLink>

          <NuxtLink
            to="/account/wishlist"
            class="
              rounded-xl
              bg-white
              px-5
              py-3
              font-bold
              text-slate-700
            "
          >
            علاقه‌مندی‌ها
          </NuxtLink>

          <NuxtLink
            to="/account/addresses"
            class="
              rounded-xl
              bg-white
              px-5
              py-3
              font-bold
              text-slate-700
            "
          >
            آدرس‌ها
          </NuxtLink>

          <NuxtLink
            to="/account/wallet"
            class="
              rounded-xl
              bg-white
              px-5
              py-3
              font-bold
              text-slate-700
            "
          >
            کیف پول
          </NuxtLink>

          <NuxtLink
            to="/account/settings"
            class="
              rounded-xl
              bg-white
              px-5
              py-3
              font-bold
              text-slate-700
            "
          >
            تنظیمات
          </NuxtLink>
        </div>
      </div>

      <!-- ساختار اصلی پنل -->

      <div
        class="
          grid
          gap-7
          lg:grid-cols-[285px_minmax(0,1fr)]
        "
      >
        <!-- سایدبار دسکتاپ -->

        <div class="hidden lg:block">
          <AccountSidebar />
        </div>

        <!-- محتوای داشبورد -->

        <main class="min-w-0">

          <!-- کارت خوش‌آمدگویی -->

          <AccountProfileCard />

          <!-- کارت‌های آماری -->

          <section
            class="
              mt-7
              grid
              gap-5
              sm:grid-cols-2
              xl:grid-cols-4
            "
          >
            <!-- تعداد واقعی سفارش‌ها -->

            <AccountStatCard
              title="کل سفارش‌ها"
              :value="ordersStore.totalOrders"
              description="تعداد سفارش‌های ثبت‌شده"
              icon="📦"
            />

            <!-- سفارش‌های فعال -->

            <AccountStatCard
              title="سفارش‌های فعال"
              :value="
                ordersStore.orders.filter(
                  order =>
                    order.status !==
                    'تحویل شده'
                ).length
              "
              description="سفارش در حال بررسی یا ارسال"
              icon="🚚"
            />

            <!-- تعداد واقعی علاقه‌مندی‌ها -->

            <AccountStatCard
              title="علاقه‌مندی‌ها"
              :value="
                wishlistStore.totalItems
              "
              description="محصول ذخیره‌شده"
              icon="♡"
            />

            <!-- تعداد واقعی کالاهای سبد -->

            <AccountStatCard
              title="سبد خرید"
              :value="
                cartStore.totalItems
              "
              description="کالا در سبد خرید"
              icon="🛒"
            />
          </section>

          <!-- سفارش‌های اخیر -->

          <div class="mt-7">
            <AccountRecentOrders />
          </div>

          <!-- دسترسی سریع -->

          <section
            class="
              mt-7
              rounded-[30px]
              bg-slate-950
              p-7
              text-white
              md:p-9
            "
          >
            <div
              class="
                flex
                flex-col
                gap-6
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
                    text-indigo-300
                  "
                >
                  دسترسی سریع
                </span>

                <h2
                  class="
                    mt-2
                    text-2xl
                    font-black
                  "
                >
                  آماده یک خرید جدید هستید؟
                </h2>

                <p
                  class="
                    mt-3
                    max-w-xl
                    text-sm
                    leading-7
                    text-white/55
                  "
                >
                  جدیدترین محصولات، تخفیف‌ها
                  و پیشنهادهای ویژه فروشگاه
                  NEXORA را مشاهده کنید.
                </p>
              </div>

              <NuxtLink
                to="/products"
                class="
                  inline-flex
                  items-center
                  justify-center
                  rounded-2xl
                  bg-white
                  px-7
                  py-4
                  font-black
                  text-slate-950
                  transition
                  hover:-translate-y-0.5
                "
              >
                ورود به فروشگاه
                ←
              </NuxtLink>
            </div>
          </section>

        </main>
      </div>
    </div>
  </div>
</template>