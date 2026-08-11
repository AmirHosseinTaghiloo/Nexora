export interface Product {
  id: number

  slug: string

  title: string

  brand: string

  category: string

  image: string

  gallery: string[]

  description: string

  price: number

  oldPrice?: number

  discount?: number

  stock: number

  sold: number

  rating: number

  reviews: number

  badge?: string

  isNew: boolean

  isFeatured: boolean

  colors: string[]

  tags: string[]
}