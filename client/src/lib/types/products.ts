import { Json, Pagination } from './json'

export type OrderType = 'asc' | 'desc'
export type SortByType = 'date' | 'price'
export interface ISize {
  id: number
  label: string
}
export interface ICategory {
  id: number
  label: string
}
export interface IImage {
  url: string
}

export interface IProductCard {
  id: number
  slug: string
  title: string
  category: string
  image: string
  price: number
  createdAt: string
}

export interface IProductDetail {
  id: number
  title: string
  description: string
  category: ICategory
  images: IImage[]
  sizes: ISize[]
  price: number
  createdAt: string
}

export interface IProductCardJson extends Json {
  data: {
    products: IProductCard[]
    pagination: Pagination
  }
}

export interface ProductFilter {
  order?: OrderType
  sortBy?: SortByType
  categories?: number[]
  sizes?: number[]
  limit?: number
  cursor?: number
}

export interface IProductDetailJson extends Json {
  data: IProductDetail
}

export interface ITopSuggestions {
  slug: string
  title: string
}
