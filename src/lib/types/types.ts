export interface IProductJson {
  name: string
  slug: string
  description: string
  category: string
  imageUrls: string[]
  sizes: string[]
  price: number
}

export interface IProductCard {
  name: string
  slug: string
  category: string
  price: number
  imageUrl: string
}

export interface ITopSuggestions {
  name: string
  slug: string
}
