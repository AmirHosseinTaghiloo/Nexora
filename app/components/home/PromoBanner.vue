<template>
  <section class="container-shop mt-20">
    <div
      class="
        relative
        overflow-hidden
        rounded-[36px]
        bg-gradient-to-l
        from-rose-600
        to-orange-500
        px-8
        py-12
        text-white
        md:px-16
      "
    >
      <div
        class="
          absolute
          -left-10
          top-0
          text-[220px]
          opacity-10
        "
      >
        %
      </div>

      <div
        class="
          relative
          flex
          flex-col
          items-start
          justify-between
          gap-8
          md:flex-row
          md:items-center
        "
      >
        <div>
          <span
            class="
              rounded-full
              bg-white/15
              px-4
              py-2
              font-bold
            "
          >
            فقط تا پایان امروز
          </span>

          <h2
            class="
              mt-5
              text-4xl
              font-black
              md:text-5xl
            "
          >
            جشنواره تخفیف NEXORA
          </h2>

          <p
            class="
              mt-4
              text-lg
              text-white/75
            "
          >
            تا ۵۰ درصد تخفیف روی صدها محصول منتخب
          </p>
        </div>

        <NuxtLink
          to="/offers"
          class="
            rounded-2xl
            bg-white
            px-8
            py-4
            font-black
            text-rose-600
          "
        >
          ورود به جشنواره
        </NuxtLink>
      </div>
    </div>
  </section>
</template>