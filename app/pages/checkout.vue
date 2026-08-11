<script setup lang="ts">
const cartStore = useCartStore()

const ordersStore = useOrdersStore()

const router = useRouter()

const fullName = ref('')

const phone = ref('')

const address = ref('')

const shippingMethod = ref('post')

const paymentMethod = ref('online')

const errorMessage = ref('')

const isSubmitting = ref(false)

const shippingCost = computed(() => {
  if (shippingMethod.value === 'express') {
    return 120000
  }

  if (cartStore.totalPrice >= 5000000) {
    return 0
  }

  return 70000
})

const finalPrice = computed(() => {
  return (
    cartStore.totalPrice +
    shippingCost.value
  )
})

const formattedSubtotal = computed(() => {
  return new Intl.NumberFormat(
    'fa-IR'
  ).format(
    cartStore.totalPrice
  )
})

const formattedShipping = computed(() => {
  return new Intl.NumberFormat(
    'fa-IR'
  ).format(
    shippingCost.value
  )
})

const formattedFinalPrice = computed(() => {
  return new Intl.NumberFormat(
    'fa-IR'
  ).format(
    finalPrice.value
  )
})

function submitOrder() {
  errorMessage.value = ''

  if (
    !fullName.value.trim() ||
    !phone.value.trim() ||
    !address.value.trim()
  ) {
    errorMessage.value =
      'لطفاً اطلاعات گیرنده و آدرس را کامل وارد کنید.'

    return
  }

  if (
    phone.value.replace(
      /\D/g,
      ''
    ).length < 10
  ) {
    errorMessage.value =
      'شماره موبایل معتبر نیست.'

    return
  }

  if (
    cartStore.items.length === 0
  ) {
    errorMessage.value =
      'سبد خرید شما خالی است.'

    return
  }

  isSubmitting.value = true

  const order =
    ordersStore.createOrder({
      items: [
        ...cartStore.items
      ],

      subtotal:
        cartStore.totalPrice,

      shippingCost:
        shippingCost.value,

      totalPrice:
        finalPrice.value,

      customer: {
        fullName:
          fullName.value,

        phone:
          phone.value,

        address:
          address.value
      },

      shippingMethod:
        shippingMethod.value,

      paymentMethod:
        paymentMethod.value
    })

  cartStore.clearCart()

  setTimeout(() => {
    router.push({
      path: '/order-success',
      query: {
        id: order.id
      }
    })
  }, 700)
}

onMounted(() => {
  cartStore.loadCart()

  ordersStore.loadOrders()

  if (
    cartStore.items.length === 0
  ) {
    navigateTo('/cart')
  }
})
</script>

<template>
  <div
    class="
      min-h-screen
      bg-slate-50
      py-10
    "
  >
    <div class="container-shop">
      <!-- عنوان -->

      <div class="mb-8">
        <span
          class="
            text-sm
            font-black
            text-brand
          "
        >
          تکمیل خرید
        </span>

        <h1
          class="
            mt-2
            text-4xl
            font-black
          "
        >
          پرداخت و ثبت سفارش
        </h1>

        <p
          class="
            mt-3
            text-slate-500
          "
        >
          اطلاعات تحویل و روش پرداخت
          را مشخص کنید.
        </p>
      </div>

      <div
        class="
          grid
          gap-7
          xl:grid-cols-[minmax(0,1fr)_390px]
        "
      >
        <!-- فرم -->

        <main
          class="
            space-y-7
          "
        >
          <!-- اطلاعات گیرنده -->

          <section
            class="
              rounded-[30px]
              bg-white
              p-6
              shadow-sm
              md:p-8
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
                  rounded-2xl
                  bg-indigo-50
                  text-xl
                "
              >
                👤
              </div>

              <div>
                <h2
                  class="
                    text-2xl
                    font-black
                  "
                >
                  اطلاعات گیرنده
                </h2>

                <p
                  class="
                    mt-1
                    text-sm
                    text-slate-500
                  "
                >
                  اطلاعات شخصی سفارش
                </p>
              </div>
            </div>

            <div
              class="
                mt-7
                grid
                gap-5
                md:grid-cols-2
              "
            >
              <label>
                <span
                  class="
                    mb-2
                    block
                    font-bold
                  "
                >
                  نام و نام خانوادگی
                </span>

                <input
                  v-model="fullName"
                  type="text"
                  placeholder="مثلاً امیرحسین تقیلو"
                  class="
                    w-full
                    rounded-2xl
                    border
                    border-slate-200
                    px-5
                    py-4
                    outline-none
                    transition
                    focus:border-brand
                    focus:ring-4
                    focus:ring-indigo-50
                  "
                >
              </label>

              <label>
                <span
                  class="
                    mb-2
                    block
                    font-bold
                  "
                >
                  شماره موبایل
                </span>

                <input
                  v-model="phone"
                  type="tel"
                  dir="ltr"
                  placeholder="09120000000"
                  class="
                    w-full
                    rounded-2xl
                    border
                    border-slate-200
                    px-5
                    py-4
                    text-right
                    outline-none
                    transition
                    focus:border-brand
                    focus:ring-4
                    focus:ring-indigo-50
                  "
                >
              </label>
            </div>
          </section>

          <!-- آدرس -->

          <section
            class="
              rounded-[30px]
              bg-white
              p-6
              shadow-sm
              md:p-8
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
                  rounded-2xl
                  bg-violet-50
                  text-xl
                "
              >
                📍
              </div>

              <div>
                <h2
                  class="
                    text-2xl
                    font-black
                  "
                >
                  آدرس تحویل
                </h2>

                <p
                  class="
                    mt-1
                    text-sm
                    text-slate-500
                  "
                >
                  آدرس دقیق دریافت سفارش
                </p>
              </div>
            </div>

            <label
              class="
                mt-7
                block
              "
            >
              <span
                class="
                  mb-2
                  block
                  font-bold
                "
              >
                نشانی کامل
              </span>

              <textarea
                v-model="address"
                rows="5"
                placeholder="استان، شهر، خیابان، کوچه، پلاک و واحد..."
                class="
                  w-full
                  resize-none
                  rounded-2xl
                  border
                  border-slate-200
                  px-5
                  py-4
                  leading-8
                  outline-none
                  transition
                  focus:border-brand
                  focus:ring-4
                  focus:ring-indigo-50
                "
              />
            </label>
          </section>

          <!-- روش ارسال -->

          <section
            class="
              rounded-[30px]
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
              روش ارسال
            </h2>

            <div
              class="
                mt-6
                grid
                gap-4
              "
            >
              <label
                class="
                  flex
                  cursor-pointer
                  items-center
                  justify-between
                  gap-4
                  rounded-2xl
                  border
                  p-5
                  transition
                "
                :class="
                  shippingMethod ===
                  'post'
                    ? 'border-brand bg-indigo-50'
                    : 'border-slate-200'
                "
              >
                <div
                  class="
                    flex
                    items-center
                    gap-4
                  "
                >
                  <input
                    v-model="
                      shippingMethod
                    "
                    value="post"
                    type="radio"
                  >

                  <div>
                    <strong>
                      پست پیشتاز
                    </strong>

                    <p
                      class="
                        mt-1
                        text-sm
                        text-slate-500
                      "
                    >
                      تحویل تقریبی ۲ تا ۴ روز
                    </p>
                  </div>
                </div>

                <strong>
                  {{
                    cartStore.totalPrice >=
                    5000000
                      ? 'رایگان'
                      : '۷۰,۰۰۰ تومان'
                  }}
                </strong>
              </label>

              <label
                class="
                  flex
                  cursor-pointer
                  items-center
                  justify-between
                  gap-4
                  rounded-2xl
                  border
                  p-5
                  transition
                "
                :class="
                  shippingMethod ===
                  'express'
                    ? 'border-brand bg-indigo-50'
                    : 'border-slate-200'
                "
              >
                <div
                  class="
                    flex
                    items-center
                    gap-4
                  "
                >
                  <input
                    v-model="
                      shippingMethod
                    "
                    value="express"
                    type="radio"
                  >

                  <div>
                    <strong>
                      ارسال سریع
                    </strong>

                    <p
                      class="
                        mt-1
                        text-sm
                        text-slate-500
                      "
                    >
                      تحویل سریع‌تر در شهرهای منتخب
                    </p>
                  </div>
                </div>

                <strong>
                  ۱۲۰,۰۰۰ تومان
                </strong>
              </label>
            </div>
          </section>

          <!-- پرداخت -->

          <section
            class="
              rounded-[30px]
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
              روش پرداخت
            </h2>

            <div
              class="
                mt-6
                grid
                gap-4
                md:grid-cols-2
              "
            >
              <label
                class="
                  cursor-pointer
                  rounded-2xl
                  border
                  p-6
                  transition
                "
                :class="
                  paymentMethod ===
                  'online'
                    ? 'border-brand bg-indigo-50'
                    : 'border-slate-200'
                "
              >
                <input
                  v-model="
                    paymentMethod
                  "
                  value="online"
                  type="radio"
                >

                <div
                  class="
                    mt-4
                    text-3xl
                  "
                >
                  💳
                </div>

                <strong
                  class="
                    mt-4
                    block
                  "
                >
                  پرداخت آنلاین
                </strong>

                <p
                  class="
                    mt-2
                    text-sm
                    text-slate-500
                  "
                >
                  پرداخت از طریق درگاه بانکی
                </p>
              </label>

              <label
                class="
                  cursor-pointer
                  rounded-2xl
                  border
                  p-6
                  transition
                "
                :class="
                  paymentMethod ===
                  'wallet'
                    ? 'border-brand bg-indigo-50'
                    : 'border-slate-200'
                "
              >
                <input
                  v-model="
                    paymentMethod
                  "
                  value="wallet"
                  type="radio"
                >

                <div
                  class="
                    mt-4
                    text-3xl
                  "
                >
                  👛
                </div>

                <strong
                  class="
                    mt-4
                    block
                  "
                >
                  کیف پول
                </strong>

                <p
                  class="
                    mt-2
                    text-sm
                    text-slate-500
                  "
                >
                  استفاده از موجودی حساب
                </p>
              </label>
            </div>
          </section>
        </main>

        <!-- خلاصه -->

        <aside
          class="
            h-fit
            rounded-[30px]
            bg-slate-950
            p-6
            text-white
            shadow-xl
            xl:sticky
            xl:top-28
          "
        >
          <h2
            class="
              text-2xl
              font-black
            "
          >
            خلاصه سفارش
          </h2>

          <div
            class="
              mt-7
              max-h-72
              space-y-4
              overflow-y-auto
            "
          >
            <article
              v-for="
                item
                in cartStore.items
              "
              :key="
                item.product.id
              "
              class="
                flex
                items-center
                gap-4
                rounded-2xl
                bg-white/5
                p-3
              "
            >
              <img
                :src="
                  item.product.image
                "
                :alt="
                  item.product.title
                "
                class="
                  h-16
                  w-16
                  rounded-xl
                  object-cover
                "
              >

              <div
                class="
                  min-w-0
                  flex-1
                "
              >
                <h3
                  class="
                    line-clamp-1
                    text-sm
                    font-bold
                  "
                >
                  {{
                    item.product.title
                  }}
                </h3>

                <p
                  class="
                    mt-2
                    text-xs
                    text-white/55
                  "
                >
                  تعداد:
                  {{
                    item.quantity
                  }}
                </p>
              </div>
            </article>
          </div>

          <div
            class="
              mt-7
              space-y-4
              border-t
              border-white/10
              pt-6
              text-sm
            "
          >
            <div
              class="
                flex
                justify-between
                text-white/60
              "
            >
              <span>
                مبلغ کالاها
              </span>

              <span>
                {{
                  formattedSubtotal
                }}
                تومان
              </span>
            </div>

            <div
              class="
                flex
                justify-between
                text-white/60
              "
            >
              <span>
                هزینه ارسال
              </span>

              <span>
                {{
                  formattedShipping
                }}
                تومان
              </span>
            </div>

            <div
              class="
                flex
                items-center
                justify-between
                border-t
                border-white/10
                pt-5
                text-lg
                font-black
              "
            >
              <span>
                مبلغ نهایی
              </span>

              <span>
                {{
                  formattedFinalPrice
                }}
                تومان
              </span>
            </div>
          </div>

          <p
            v-if="errorMessage"
            class="
              mt-5
              rounded-xl
              bg-rose-500/15
              p-4
              text-sm
              font-bold
              text-rose-300
            "
          >
            {{ errorMessage }}
          </p>

          <button
            class="
              mt-7
              flex
              w-full
              items-center
              justify-center
              rounded-2xl
              bg-white
              px-6
              py-4
              font-black
              text-slate-950
              transition
              hover:-translate-y-0.5
              disabled:cursor-not-allowed
              disabled:opacity-60
            "
            :disabled="
              isSubmitting
            "
            @click="
              submitOrder
            "
          >
            {{
              isSubmitting
                ? 'در حال ثبت سفارش...'
                : 'ثبت نهایی سفارش'
            }}
          </button>

          <p
            class="
              mt-5
              text-center
              text-xs
              leading-6
              text-white/40
            "
          >
            با ثبت سفارش،
            قوانین و شرایط استفاده
            از فروشگاه را می‌پذیرید.
          </p>
        </aside>
      </div>
    </div>
  </div>
</template>