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
  slug: string
  title: string
  category: string
  price: number
  productStyle: {
    id: number
    slug: string
    image: string
    createdAt: string
  }
}

export interface IProductStylePreview {
  slug: string
  image: string
}

export interface IProductDetail {
  slug: string
  title: string
  price: number
  description: string
  category: ICategory
  productStyle: {
    slug: string
    createdAt: string
    images: IImage[]
    sizes: ISize[]
  }
  productStylePreviews: IProductStylePreview[]
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
  data: {
    product: IProductDetail
  }
}

export interface ITopSuggestions {
  productSlug: string
  productStyleSlug: string
  title: string
}
