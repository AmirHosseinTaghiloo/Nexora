<script setup lang="ts">
definePageMeta({
  layout: 'auth'
})
const authStore =
  useAuthStore()

const route =
  useRoute()

const email =
  ref('')

const password =
  ref('')

const showPassword =
  ref(false)

const loading =
  ref(false)

const loginError =
  ref('')

const googleError =
  computed(() => {
    return (
      route.query.error ===
      'google'
    )
  })

async function login() {
  loginError.value =
    ''

  if (
    !email.value.trim() ||
    !password.value.trim()
  ) {
    loginError.value =
      'ایمیل و رمز عبور را وارد کنید.'

    return
  }

  loading.value =
    true

  setTimeout(
    () => {
      loading.value =
        false

      loginError.value =
        'ورود با ایمیل هنوز به بک‌اند متصل نشده است. فعلاً از ورود با گوگل استفاده کنید.'
    },
    700
  )
}

function loginWithGoogle() {
  authStore.loginWithGoogle()
}

onMounted(
  async () => {
    await authStore.loadUser()

    if (
      authStore.isLoggedIn
    ) {
      navigateTo(
        '/account'
      )
    }
  }
)
</script>

<template>
    <div
      class="
        relative
        flex
        min-h-[100dvh]
        w-full
        items-center
        justify-center
        overflow-hidden
        bg-slate-950
        px-4
        py-8
        sm:px-6
      "
    >
    <!-- نور پس‌زمینه -->

    <div
      class="
        pointer-events-none
        absolute
        -right-40
        -top-40
        h-[700px]
        w-[700px]
        rounded-full
        bg-indigo-600/25
        blur-[130px]
      "
    />

    <div
      class="
        pointer-events-none
        absolute
        -bottom-48
        -left-40
        h-[600px]
        w-[600px]
        rounded-full
        bg-violet-600/20
        blur-[140px]
      "
    />

    <!-- کارت ورود -->

    <section
      class="
        relative
        z-10
        w-full
        max-w-[500px]
        rounded-[36px]
        border
        border-white/10
        bg-white/[0.97]
        p-7
        shadow-2xl
        shadow-black/30
        backdrop-blur-xl
        md:p-10
      "
    >
      <!-- لوگو -->

      <NuxtLink
        to="/"
        class="
          mx-auto
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-3xl
          bg-gradient-to-br
          text-2xl
          font-black
          text-white
          shadow-lg
          shadow-indigo-500/30
          transition
          hover:scale-105
        "
      >
        <img src="C:\Users\AMT\Desktop\nexora\public\images\logo\logo-center-bgr.png" alt="">
      </NuxtLink>

      <!-- عنوان -->

      <div
        class="
          mt-7
          text-center
        "
      >
        <span
          class="
            text-sm
            font-black
            text-brand
          "
        >
          NEXORA ACCOUNT
        </span>

        <h1
          class="
            mt-3
            text-3xl
            font-black
            text-slate-950
            sm:text-4xl
          "
        >
          ورود به حساب
        </h1>

        <p
          class="
            mt-4
            leading-7
            text-slate-500
          "
        >
          برای مدیریت سفارش‌ها،
          علاقه‌مندی‌ها و اطلاعات
          حساب وارد شوید.
        </p>
      </div>

      <!-- خطای گوگل -->

      <div
        v-if="googleError"
        class="
          mt-7
          rounded-2xl
          border
          border-rose-100
          bg-rose-50
          p-4
          text-center
          text-sm
          font-bold
          text-rose-600
        "
      >
        ورود با گوگل انجام نشد.
        تنظیمات Google OAuth
        را بررسی کنید.
      </div>

      <!-- ورود گوگل -->

      <button
        type="button"
        class="
          mt-8
          flex
          w-full
          items-center
          justify-center
          gap-4
          rounded-2xl
          border
          border-slate-200
          bg-white
          px-6
          py-4
          font-bold
          text-slate-800
          shadow-sm
          transition
          hover:-translate-y-0.5
          hover:border-slate-300
          hover:shadow-lg
          active:translate-y-0
        "
        @click="
          loginWithGoogle
        "
      >
        <!-- لوگوی گوگل -->

        <svg
          width="23"
          height="23"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fill="#4285F4"
            d="M21.35 12.24c0-.79-.07-1.55-.2-2.27H12v4.3h5.23a4.47 4.47 0 0 1-1.94 2.93v2.79h3.13c1.83-1.68 2.93-4.16 2.93-7.75Z"
          />

          <path
            fill="#34A853"
            d="M12 21.73c2.62 0 4.82-.87 6.43-2.35l-3.13-2.79c-.87.58-1.98.92-3.3.92-2.54 0-4.7-1.72-5.47-4.03H3.3v2.88A9.72 9.72 0 0 0 12 21.73Z"
          />

          <path
            fill="#FBBC05"
            d="M6.53 13.48A5.85 5.85 0 0 1 6.22 12c0-.51.09-1 .31-1.48V7.64H3.3A9.73 9.73 0 0 0 2.27 12c0 1.57.38 3.06 1.03 4.36l3.23-2.88Z"
          />

          <path
            fill="#EA4335"
            d="M12 6.49c1.43 0 2.71.49 3.72 1.45l2.79-2.79C16.81 3.56 14.61 2.27 12 2.27A9.72 9.72 0 0 0 3.3 7.64l3.23 2.88C7.3 8.21 9.46 6.49 12 6.49Z"
          />
        </svg>

        ادامه با حساب گوگل
      </button>

      <!-- جداکننده -->

      <div
        class="
          my-8
          flex
          items-center
          gap-4
        "
      >
        <div
          class="
            h-px
            flex-1
            bg-slate-200
          "
        />

        <span
          class="
            whitespace-nowrap
            text-xs
            font-bold
            text-slate-400
          "
        >
          یا ورود با ایمیل
        </span>

        <div
          class="
            h-px
            flex-1
            bg-slate-200
          "
        />
      </div>

      <!-- فرم -->

      <form
        class="
          space-y-5
        "
        @submit.prevent="
          login
        "
      >
        <!-- ایمیل -->

        <label
          class="
            block
          "
        >
          <span
            class="
              mb-2
              block
              font-bold
              text-slate-700
            "
          >
            ایمیل
          </span>

          <input
            v-model="email"
            type="email"
            dir="ltr"
            autocomplete="email"
            placeholder="example@email.com"
            class="
              w-full
              rounded-2xl
              border
              border-slate-200
              bg-slate-50
              px-5
              py-4
              text-left
              outline-none
              transition
              focus:border-brand
              focus:bg-white
              focus:ring-4
              focus:ring-indigo-50
            "
          >
        </label>

        <!-- رمز -->

        <label
          class="
            block
          "
        >
          <span
            class="
              mb-2
              block
              font-bold
              text-slate-700
            "
          >
            رمز عبور
          </span>

          <div
            class="
              relative
            "
          >
            <input
              v-model="password"
              :type="
                showPassword
                  ? 'text'
                  : 'password'
              "
              autocomplete="current-password"
              placeholder="رمز عبور"
              class="
                w-full
                rounded-2xl
                border
                border-slate-200
                bg-slate-50
                px-5
                py-4
                pl-20
                outline-none
                transition
                focus:border-brand
                focus:bg-white
                focus:ring-4
                focus:ring-indigo-50
              "
            >

            <button
              type="button"
              class="
                absolute
                left-3
                top-1/2
                -translate-y-1/2
                rounded-xl
                px-3
                py-2
                text-xs
                font-bold
                text-slate-500
                transition
                hover:bg-slate-100
              "
              @click="
                showPassword =
                  !showPassword
              "
            >
              {{
                showPassword
                  ? 'مخفی'
                  : 'نمایش'
              }}
            </button>
          </div>
        </label>

        <!-- گزینه‌ها -->

        <div
          class="
            flex
            items-center
            justify-between
            gap-4
          "
        >
          <label
            class="
              flex
              cursor-pointer
              items-center
              gap-2
              text-sm
              text-slate-500
            "
          >
            <input
              type="checkbox"
              class="
                h-4
                w-4
                accent-indigo-600
              "
            >

            مرا به خاطر بسپار
          </label>

          <NuxtLink
            to="/forgot-password"
            class="
              text-sm
              font-bold
              text-brand
              transition
              hover:text-indigo-800
            "
          >
            فراموشی رمز؟
          </NuxtLink>
        </div>

        <!-- خطا -->

        <div
          v-if="loginError"
          class="
            rounded-2xl
            border
            border-amber-100
            bg-amber-50
            p-4
            text-center
            text-sm
            font-bold
            leading-6
            text-amber-700
          "
        >
          {{ loginError }}
        </div>

        <!-- دکمه ورود -->

        <button
          type="submit"
          :disabled="loading"
          class="
            flex
            w-full
            items-center
            justify-center
            rounded-2xl
            bg-gradient-to-l
            from-indigo-600
            to-violet-700
            px-6
            py-4
            font-black
            text-white
            shadow-lg
            shadow-indigo-500/25
            transition
            hover:-translate-y-0.5
            hover:shadow-xl
            disabled:cursor-not-allowed
            disabled:opacity-60
          "
        >
          {{
            loading
              ? 'در حال بررسی...'
              : 'ورود به حساب'
          }}
        </button>
      </form>

      <!-- ثبت نام -->

      <p
        class="
          mt-8
          text-center
          text-sm
          text-slate-500
        "
      >
        حساب کاربری ندارید؟

        <NuxtLink
          to="/register"
          class="
            mr-1
            font-black
            text-brand
            transition
            hover:text-indigo-800
          "
        >
          ثبت‌نام کنید
        </NuxtLink>
      </p>

      <!-- بازگشت -->

      <NuxtLink
        to="/"
        class="
          mt-7
          flex
          justify-center
          text-sm
          font-bold
          text-slate-400
          transition
          hover:text-slate-700
        "
      >
        بازگشت به صفحه اصلی
      </NuxtLink>
    </section>
  </div>
</template>