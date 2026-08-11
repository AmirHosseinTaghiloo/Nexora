import { computed } from 'vue'
import { products } from '@/data/products'

export function useProducts() {

const allProducts = computed(() => products)

const latestProducts = computed(() =>
  [...products].sort((a,b)=>b.id-a.id)
)

const featuredProducts = computed(()=>
  products.filter(p=>p.isFeatured)
)

const bestSellerProducts = computed(()=>
  [...products].sort((a,b)=>b.sold-a.sold)
)

const newProducts = computed(()=>
  products.filter(p=>p.isNew)
)

const mobileProducts = computed(()=>
  products.filter(p=>p.category==='موبایل')
)

const laptopProducts = computed(()=>
  products.filter(p=>p.category==='لپتاپ')
)

const headphoneProducts = computed(()=>
  products.filter(p=>p.category==='هدفون')
)

const findBySlug = (slug:string)=>
products.find(p=>p.slug===slug)

const findById=(id:number)=>
products.find(p=>p.id===id)

return{

allProducts,

latestProducts,

featuredProducts,

bestSellerProducts,

newProducts,

mobileProducts,

laptopProducts,

headphoneProducts,

findBySlug,

findById

}

}