<script setup lang="ts">
import { computed, ref } from 'vue'

type BlogItem = {
  id: number
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  image: string
  featured?: boolean
  type: 'article' | 'news'
}

const activeCategory = ref('همه')
const searchQuery = ref('')

const categories = [
  'همه',
  'هوش مصنوعی',
  'موبایل',
  'لپ‌تاپ',
  'گجت',
  'تکنولوژی',
  'اخبار NEXORA',
]

const posts: BlogItem[] = [
  {
    id: 1,
    title: 'آینده هوش مصنوعی و تأثیر آن بر زندگی روزمره',
    excerpt:
      'هوش مصنوعی با سرعت زیادی در حال تغییر نحوه کار، خرید، آموزش و استفاده ما از تکنولوژی است.',
    category: 'هوش مصنوعی',
    date: '۲۱ مرداد ۱۴۰۵',
    readTime: '۵ دقیقه',
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=85',
    featured: true,
    type: 'article',
  },
  {
    id: 2,
    title: 'راهنمای انتخاب بهترین گوشی برای استفاده روزمره',
    excerpt:
      'قبل از خرید گوشی هوشمند به چه مشخصاتی توجه کنیم؟ از پردازنده تا دوربین و باتری.',
    category: 'موبایل',
    date: '۲۰ مرداد ۱۴۰۵',
    readTime: '۶ دقیقه',
    image:
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=85',
    type: 'article',
  },
  {
    id: 3,
    title: 'چطور یک لپ‌تاپ مناسب برنامه‌نویسی انتخاب کنیم؟',
    excerpt:
      'راهنمای انتخاب پردازنده، رم، حافظه و نمایشگر برای برنامه‌نویسان.',
    category: 'لپ‌تاپ',
    date: '۱۹ مرداد ۱۴۰۵',
    readTime: '۷ دقیقه',
    image:
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=85',
    type: 'article',
  },
  {
    id: 4,
    title: 'گجت‌های هوشمند چگونه تجربه زندگی ما را تغییر می‌دهند؟',
    excerpt:
      'از ساعت‌های هوشمند تا هدفون‌ها و تجهیزات خانه هوشمند.',
    category: 'گجت',
    date: '۱۸ مرداد ۱۴۰۵',
    readTime: '۴ دقیقه',
    image:
      'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=900&q=85',
    type: 'article',
  },
  {
    id: 5,
    title: 'نسل جدید فناوری‌های نمایشگر؛ از OLED تا Mini LED',
    excerpt:
      'تفاوت فناوری‌های جدید نمایشگر را بررسی می‌کنیم و می‌بینیم کدام گزینه برای شما بهتر است.',
    category: 'تکنولوژی',
    date: '۱۷ مرداد ۱۴۰۵',
    readTime: '۵ دقیقه',
    image:
      'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=900&q=85',
    type: 'article',
  },
  {
    id: 6,
    title: 'پیشنهادهای ویژه NEXORA برای خرید هوشمند',
    excerpt:
      'محصولات منتخب این هفته را با پیشنهادهای ویژه و قیمت‌های جذاب بررسی کنید.',
    category: 'اخبار NEXORA',
    date: '۱۶ مرداد ۱۴۰۵',
    readTime: '۳ دقیقه',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=85',
    type: 'news',
  },
  {
    id: 7,
    title: 'هوش مصنوعی مولد چیست و چرا اهمیت دارد؟',
    excerpt:
      'نگاهی ساده و کاربردی به مدل‌های مولد و کاربردهای آن‌ها در دنیای امروز.',
    category: 'هوش مصنوعی',
    date: '۱۵ مرداد ۱۴۰۵',
    readTime: '۸ دقیقه',
    image:
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=900&q=85',
    type: 'article',
  },
  {
    id: 8,
    title: '۵ نکته مهم قبل از خرید لوازم دیجیتال',
    excerpt:
      'قبل از پرداخت هزینه برای یک محصول دیجیتال این نکات مهم را بررسی کنید.',
    category: 'تکنولوژی',
    date: '۱۴ مرداد ۱۴۰۵',
    readTime: '۴ دقیقه',
    image:
      'https://images.unsplash.com/photo-1468495244123-6c6c332eeece?auto=format&fit=crop&w=900&q=85',
    type: 'article',
  },
]

const featuredPost = computed(() => {
  return posts.find(post => post.featured) || posts[0]
})

const filteredPosts = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()

  return posts.filter(post => {
    const categoryMatch =
      activeCategory.value === 'همه' ||
      post.category === activeCategory.value

    const searchMatch =
      !query ||
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query) ||
      post.category.toLowerCase().includes(query)

    return categoryMatch && searchMatch
  })
})

const normalPosts = computed(() => {
  return filteredPosts.value.filter(
    post => post.id !== featuredPost.value.id,
  )
})

const latestNews = computed(() => {
  return posts.filter(post => post.type === 'news').slice(0, 4)
})

function selectCategory(category: string) {
  activeCategory.value = category
}

function clearSearch() {
  searchQuery.value = ''
  activeCategory.value = 'همه'
}

function scrollToArticles() {
  document
    .getElementById('blog-articles')
    ?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
}
</script>

<template>
  <div class="pb-20">

    <!-- ========================= -->
    <!-- HERO -->
    <!-- ========================= -->

    <section class="container-shop pt-8 md:pt-12">

      <div
        class="
          relative
          overflow-hidden
          rounded-[36px]
          bg-slate-950
          px-6
          py-12
          text-white
          shadow-2xl
          md:px-10
          md:py-16
          lg:px-16
          lg:py-20
        "
      >

        <!-- Decorative -->
        <div
          class="
            pointer-events-none
            absolute
            -right-24
            -top-24
            h-72
            w-72
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
            h-80
            w-80
            rounded-full
            bg-purple-500/20
            blur-3xl
          "
        />

        <div
          class="
            relative
            z-10
            max-w-3xl
          "
        >

          <span
            class="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/10
              bg-white/10
              px-4
              py-2
              text-sm
              font-bold
              backdrop-blur
            "
          >
            <span
              class="
                h-2
                w-2
                animate-pulse
                rounded-full
                bg-emerald-400
              "
            />

            مجله NEXORA
          </span>

          <h1
            class="
              mt-6
              text-4xl
              font-black
              leading-[1.25]
              md:text-5xl
              lg:text-6xl
            "
          >
            دنیای تکنولوژی
            <span class="text-brand">
              اینجاست
            </span>
          </h1>

          <p
            class="
              mt-6
              max-w-2xl
              text-base
              leading-8
              text-white/65
              md:text-lg
            "
          >
            جدیدترین مقالات، اخبار تکنولوژی، بررسی گجت‌ها،
            راهنمای خرید و اتفاقات دنیای دیجیتال را در مجله
            NEXORA دنبال کنید.
          </p>

          <div
            class="
              mt-8
              flex
              flex-col
              gap-3
              sm:flex-row
            "
          >

            <button
              type="button"
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
              @click="scrollToArticles"
            >
              مشاهده مقالات
            </button>

            <NuxtLink
              to="/products"
              class="
                rounded-2xl
                border
                border-white/10
                bg-white/10
                px-7
                py-4
                text-center
                font-black
                backdrop-blur
                transition
                hover:bg-white/15
              "
            >
              فروشگاه NEXORA
            </NuxtLink>

          </div>

        </div>

      </div>

    </section>


    <!-- ========================= -->
    <!-- SEARCH -->
    <!-- ========================= -->

    <section class="container-shop mt-8">

      <div
        class="
          flex
          flex-col
          gap-4
          rounded-[28px]
          border
          border-slate-100
          bg-white
          p-4
          shadow-sm
          md:flex-row
          md:items-center
        "
      >

        <div
          class="
            relative
            flex-1
          "
        >

          <span
            class="
              pointer-events-none
              absolute
              right-5
              top-1/2
              -translate-y-1/2
              text-xl
              
            "
          >
           
          </span>

          <input
            v-model="searchQuery"
            type="search"
            placeholder="جستجو در مقالات و اخبار..."
            class="
              w-full
              rounded-2xl
              border
              border-slate-200
              bg-slate-50
              py-4
              pr-14
              pl-7
              text-sm
              outline-none
              transition
              focus:border-brand
              focus:bg-white
              focus:ring-4
              focus:ring-brand/10
            "
          />

        </div>

        <button
          v-if="searchQuery || activeCategory !== 'همه'"
          type="button"
          class="
            rounded-2xl
            bg-slate-100
            px-6
            py-4
            text-sm
            font-black
            text-slate-700
            transition
            hover:bg-slate-200
          "
          @click="clearSearch"
        >
          پاک کردن فیلتر
        </button>

      </div>

    </section>


    <!-- ========================= -->
    <!-- CATEGORIES -->
    <!-- ========================= -->

    <section class="container-shop mt-8">

      <div
        class="
          flex
          gap-3
          overflow-x-auto
          pb-2
        "
      >

        <button
          v-for="category in categories"
          :key="category"
          type="button"
          class="
            shrink-0
            rounded-full
            px-5
            py-3
            text-sm
            font-bold
            transition
          "
          :class="
            activeCategory === category
              ? 'bg-brand text-white shadow-lg shadow-brand/20'
              : 'bg-white text-slate-600 shadow-sm hover:bg-slate-100'
          "
          @click="selectCategory(category)"
        >
          {{ category }}
        </button>

      </div>

    </section>


    <!-- ========================= -->
    <!-- FEATURED -->
    <!-- ========================= -->

    <section class="container-shop mt-14">

      <div
        class="
          mb-7
          flex
          items-end
          justify-between
          gap-4
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
            انتخاب سردبیر
          </span>

          <h2
            class="
              mt-2
              text-3xl
              font-black
              md:text-4xl
            "
          >
            مقاله ویژه
          </h2>

        </div>

      </div>


      <article
        class="
          group
          grid
          overflow-hidden
          rounded-[32px]
          bg-white
          shadow-xl
          shadow-slate-200/50
          lg:grid-cols-2
        "
      >

        <div
          class="
            relative
            min-h-[300px]
            overflow-hidden
            lg:min-h-[440px]
          "
        >

          <img
            :src="featuredPost.image"
            :alt="featuredPost.title"
            class="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              transition
              duration-700
              group-hover:scale-105
            "
          />

          <div
            class="
              absolute
              inset-0
              bg-gradient-to-t
              from-slate-950/70
              via-transparent
              to-transparent
            "
          />

          <span
            class="
              absolute
              right-5
              top-5
              rounded-xl
              bg-brand
              px-4
              py-2
              text-xs
              font-black
              text-white
            "
          >
            ویژه
          </span>

        </div>


        <div
          class="
            flex
            flex-col
            justify-center
            p-7
            md:p-10
          "
        >

          <div
            class="
              flex
              flex-wrap
              items-center
              gap-3
              text-sm
            "
          >

            <span
              class="
                rounded-full
                bg-brand/10
                px-3
                py-1.5
                font-bold
                text-brand
              "
            >
              {{ featuredPost.category }}
            </span>

            <span class="text-slate-400">
              {{ featuredPost.date }}
            </span>

            <span class="text-slate-400">
              {{ featuredPost.readTime }} مطالعه
            </span>

          </div>


          <h3
            class="
              mt-5
              text-2xl
              font-black
              leading-9
              md:text-3xl
            "
          >
            {{ featuredPost.title }}
          </h3>


          <p
            class="
              mt-5
              text-sm
              leading-8
              text-slate-500
              md:text-base
            "
          >
            {{ featuredPost.excerpt }}
          </p>


          <button
            type="button"
            class="
              mt-7
              w-fit
              rounded-2xl
              bg-slate-950
              px-6
              py-3.5
              font-bold
              text-white
              transition
              hover:-translate-y-1
            "
          >
            مطالعه مقاله
            ←
          </button>

        </div>

      </article>

    </section>


    <!-- ========================= -->
    <!-- MAIN CONTENT -->
    <!-- ========================= -->

    <section
      id="blog-articles"
      class="container-shop mt-16"
    >

      <div
        class="
          grid
          gap-10
          lg:grid-cols-[1fr_320px]
        "
      >

        <!-- Articles -->

        <div>

          <div
            class="
              mb-7
              flex
              items-end
              justify-between
              gap-4
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
                تازه‌ترین مطالب
              </span>

              <h2
                class="
                  mt-2
                  text-3xl
                  font-black
                "
              >
                مقالات و مطالب
              </h2>

            </div>

            <span
              class="
                hidden
                rounded-full
                bg-slate-100
                px-4
                py-2
                text-sm
                font-bold
                text-slate-500
                sm:block
              "
            >
              {{ normalPosts.length }} مطلب
            </span>

          </div>


          <div
            v-if="normalPosts.length"
            class="
              grid
              gap-6
              sm:grid-cols-2
          "
          >

            <article
              v-for="post in normalPosts"
              :key="post.id"
              class="
                group
                overflow-hidden
                rounded-[28px]
                border
                border-slate-100
                bg-white
                shadow-sm
                transition
                duration-300
                hover:-translate-y-2
                hover:shadow-2xl
                hover:shadow-slate-200/60
              "
            >

              <div
                class="
                  relative
                  h-56
                  overflow-hidden
                  bg-slate-100
                "
              >

                <img
                  :src="post.image"
                  :alt="post.title"
                  class="
                    h-full
                    w-full
                    object-cover
                    transition
                    duration-500
                    group-hover:scale-110
                  "
                />

                <span
                  class="
                    absolute
                    right-4
                    top-4
                    rounded-xl
                    bg-white/95
                    px-3
                    py-2
                    text-xs
                    font-black
                    text-brand
                    shadow
                    backdrop-blur
                  "
                >
                  {{ post.category }}
                </span>

              </div>


              <div class="p-6">

                <div
                  class="
                    flex
                    items-center
                    gap-3
                    text-xs
                    text-slate-400
                  "
                >

                  <span>
                    {{ post.date }}
                  </span>

                  <span>
                    •
                  </span>

                  <span>
                    {{ post.readTime }} مطالعه
                  </span>

                </div>


                <h3
                  class="
                    mt-4
                    min-h-14
                    text-lg
                    font-black
                    leading-7
                    transition
                    group-hover:text-brand
                  "
                >
                  {{ post.title }}
                </h3>


                <p
                  class="
                    mt-3
                    line-clamp-2
                    text-sm
                    leading-7
                    text-slate-500
                  "
                >
                  {{ post.excerpt }}
                </p>


                <button
                  type="button"
                  class="
                    mt-5
                    font-bold
                    text-brand
                  "
                >
                  ادامه مطلب
                  ←
                </button>

              </div>

            </article>

          </div>


          <!-- Empty -->

          <div
            v-else
            class="
              rounded-[28px]
              bg-white
              p-12
              text-center
              shadow-sm
            "
          >

            <div class="text-5xl">
              🔎
            </div>

            <h3
              class="
                mt-5
                text-xl
                font-black
              "
            >
              مطلبی پیدا نشد
            </h3>

            <p
              class="
                mt-2
                text-sm
                text-slate-500
              "
            >
              عبارت جستجو یا دسته‌بندی دیگری را امتحان کنید.
            </p>

            <button
              type="button"
              class="
                mt-6
                rounded-2xl
                bg-brand
                px-6
                py-3
                font-bold
                text-white
              "
              @click="clearSearch"
            >
              نمایش همه مطالب
            </button>

          </div>

        </div>


        <!-- ========================= -->
        <!-- NEWS SIDEBAR -->
        <!-- ========================= -->

        <aside>

          <div
            class="
              sticky
              top-6
              overflow-hidden
              rounded-[28px]
              bg-slate-950
              p-6
              text-white
              shadow-xl
            "
          >

            <div
              class="
                flex
                items-center
                justify-between
              "
            >

              <div>

                <span
                  class="
                    text-xs
                    font-bold
                    text-brand
                  "
                >
                  NEWS
                </span>

                <h3
                  class="
                    mt-2
                    text-xl
                    font-black
                  "
                >
                  آخرین اخبار
                </h3>

              </div>

              <span
                class="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-white/10
                "
              >
                📰
              </span>

            </div>


            <div class="mt-6 divide-y divide-white/10">

              <article
                v-for="news in latestNews"
                :key="news.id"
                class="py-5 first:pt-0 last:pb-0"
              >

                <span
                  class="
                    text-xs
                    font-bold
                    text-brand
                  "
                >
                  {{ news.category }}
                </span>

                <h4
                  class="
                    mt-2
                    text-sm
                    font-black
                    leading-7
                  "
                >
                  {{ news.title }}
                </h4>

                <div
                  class="
                    mt-2
                    text-xs
                    text-white/40
                  "
                >
                  {{ news.date }}
                </div>

              </article>

            </div>


            <div
              class="
                mt-6
                rounded-2xl
                bg-white/5
                p-4
              "
            >

              <p
                class="
                  text-xs
                  leading-6
                  text-white/50
                "
              >
                اخبار و مطالب NEXORA را دنبال کنید تا از
                جدیدترین اتفاقات دنیای تکنولوژی باخبر باشید.
              </p>

            </div>

          </div>

        </aside>

      </div>

    </section>


    <!-- ========================= -->
    <!-- NEWSLETTER -->
    <!-- ========================= -->

    <section class="container-shop mt-16">

      <div
        class="
          relative
          overflow-hidden
          rounded-[32px]
          bg-brand
          px-6
          py-10
          text-white
          md:px-10
          md:py-12
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
            relative
            z-10
            flex
            flex-col
            gap-6
            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >

          <div>

            <h2
              class="
                text-2xl
                font-black
                md:text-3xl
              "
            >
              از دنیای تکنولوژی عقب نمانید 🚀
            </h2>

            <p
              class="
                mt-3
                text-sm
                leading-7
                text-white/70
              "
            >
              جدیدترین مطالب و اخبار تکنولوژی را در NEXORA دنبال کنید.
            </p>

          </div>


          <NuxtLink
            to="/products"
            class="
              w-fit
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
            رفتن به فروشگاه
          </NuxtLink>

        </div>

      </div>

    </section>

  </div>
</template>