<script setup lang="ts">
definePageMeta({
  layout: 'auth'
})
const authStore = useAuthStore()

const name = ref('')

const email = ref('')

const password = ref('')

const errorMessage = ref('')

const showPassword = ref(false)

function registerUser() {
  errorMessage.value = ''

  if (
    !name.value.trim() ||
    !email.value.trim() ||
    !password.value.trim()
  ) {
    errorMessage.value =
      'تمام اطلاعات را وارد کنید.'

    return
  }

  if (password.value.length < 6) {
    errorMessage.value =
      'رمز عبور باید حداقل ۶ کاراکتر باشد.'

    return
  }

  authStore.login(
    email.value,
    name.value
  )

  navigateTo('/account')
}

function registerWithGoogle() {
  authStore.loginWithGoogle()
}
</script>

<template>
  <div
    class="
      relative
      flex
      min-h-screen
      items-center
      justify-center
      overflow-hidden
      bg-slate-950
      px-4
      py-10
    "
  >
    <!-- نورهای پس‌زمینه -->

    <div
      class="
        pointer-events-none
        absolute
        -right-40
        -top-40
        h-[500px]
        w-[500px]
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
        h-[500px]
        w-[500px]
        rounded-full
        bg-violet-600/20
        blur-[140px]
      "
    />

    <!-- کارت ثبت‌نام -->

    <section
      class="
        relative
        z-10
        w-full
        max-w-md
        rounded-[32px]
        border
        border-white/10
        bg-white/[0.97]
        p-8
        shadow-2xl
        backdrop-blur-xl
        md:p-10
      "
    >
      <!-- لوگو -->

      <div class="text-center">
        <NuxtLink
          to="/"
          class="
            inline-flex
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
          "
        >
          <img src="C:\Users\AMT\Desktop\nexora\public\images\logo\logo-center-bgr.png" alt="">
        </NuxtLink>

        <p
          class="
            mt-6
            text-sm
            font-black
            text-brand
          "
        >
          NEXORA ACCOUNT
        </p>

        <h1
          class="
            mt-3
            text-3xl
            font-black
            text-slate-950
          "
        >
          ساخت حساب کاربری
        </h1>

        <p
          class="
            mt-3
            text-slate-500
          "
        >
          در کمتر از یک دقیقه عضو فروشگاه شوید.
        </p>
      </div>

      <!-- ثبت‌نام با گوگل -->

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
        @click="registerWithGoogle"
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

        ثبت‌نام با حساب گوگل
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
          یا ثبت‌نام با ایمیل
        </span>

        <div
          class="
            h-px
            flex-1
            bg-slate-200
          "
        />
      </div>

      <!-- فرم ثبت‌نام -->

      <form
        class="
          grid
          gap-5
        "
        @submit.prevent="registerUser"
      >
        <!-- نام -->

        <label>
          <span
            class="
              mb-2
              block
              font-bold
              text-slate-700
            "
          >
            نام و نام خانوادگی
          </span>

          <input
            v-model="name"
            type="text"
            autocomplete="name"
            class="
              w-full
              rounded-2xl
              border
              border-slate-200
              bg-slate-50
              px-5
              py-4
              outline-none
              transition
              focus:border-brand
              focus:bg-white
              focus:ring-4
              focus:ring-indigo-50
            "
            placeholder="نام شما"
          >
        </label>

        <!-- ایمیل -->

        <label>
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
            autocomplete="email"
            dir="ltr"
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
            placeholder="example@email.com"
          >
        </label>

        <!-- رمز -->

        <label>
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

          <div class="relative">
            <input
              v-model="password"
              :type="
                showPassword
                  ? 'text'
                  : 'password'
              "
              autocomplete="new-password"
              dir="ltr"
              class="
                w-full
                rounded-2xl
                border
                border-slate-200
                bg-slate-50
                px-5
                py-4
                pl-20
                text-left
                outline-none
                transition
                focus:border-brand
                focus:bg-white
                focus:ring-4
                focus:ring-indigo-50
              "
              placeholder="حداقل ۶ کاراکتر"
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

        <!-- خطا -->

        <p
          v-if="errorMessage"
          class="
            rounded-2xl
            bg-rose-50
            p-4
            text-center
            text-sm
            font-bold
            text-rose-600
          "
        >
          {{ errorMessage }}
        </p>

        <!-- دکمه ثبت‌نام -->

        <button
          type="submit"
          class="
            rounded-2xl
            bg-gradient-to-l
            from-indigo-600
            to-violet-700
            py-4
            font-black
            text-white
            shadow-lg
            shadow-indigo-500/25
            transition
            hover:-translate-y-0.5
            hover:shadow-xl
            active:translate-y-0
          "
        >
          ایجاد حساب کاربری
        </button>
      </form>

      <!-- ورود -->

      <p
        class="
          mt-7
          text-center
          text-slate-500
        "
      >
        قبلاً ثبت‌نام کرده‌اید؟

        <NuxtLink
          to="/login"
          class="
            mr-1
            font-black
            text-brand
          "
        >
          وارد شوید
        </NuxtLink>
      </p>

      <!-- بازگشت -->

      <NuxtLink
        to="/"
        class="
          mt-6
          flex
          justify-center
          text-sm
          font-bold
          text-slate-400
          transition
          hover:text-slate-700
        "
      >
        بازگشت به فروشگاه
      </NuxtLink>
    </section>
  </div>
</template>