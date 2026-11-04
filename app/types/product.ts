export interface Product {
  id: number
  slug: string
  title: string
  category: string

  image: string
  images: string[]

  description: string
  price: number
  oldPrice?: number
  discount?: number

  stock: number
  rating: number
  reviews: number

  badge?: string
  specs: string[]

  // Optional catalog attributes for future product types.
  brand?: string
  sold?: number
  isNew?: boolean
  isFeatured?: boolean
  colors?: string[]
  tags?: string[]
}
