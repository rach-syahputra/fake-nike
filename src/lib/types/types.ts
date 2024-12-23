import { z } from 'zod'
import { signInSchema } from '../validations/schema'

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

export interface User {
  username: string
  email: string
  image: string
}

export type FormFields = z.infer<typeof signInSchema>
export type FieldNames = 'email' | 'password'
