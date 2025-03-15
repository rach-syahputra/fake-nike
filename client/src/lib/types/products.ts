import { Json } from './json'

export type OrderType = 'asc' | 'desc'
export type SortByType = 'date' | 'price'

export interface IProductCard {
  id: number
  slug: string
  title: string
  category: string
  image: string
  price: number
  createdAt: string
}

export interface IProductCardJson extends Json {
  data: IProductCard[]
}

export interface ProductFilter {
  order?: OrderType
  sortBy?: SortByType
  categories?: number[]
  sizes?: number[]
  limit?: number
}
