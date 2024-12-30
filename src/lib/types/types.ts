import { z } from 'zod'
import { signInSchema, signUpSchema } from '../validations/schema'

export interface IProductJson {
  name: string
  id: string
  description: string
  category: string
  imageUrls: string[]
  sizes: number[]
  price: number
}

export interface IProduct {
  name: string
  id: string
  description: string
  category: string
  imageUrls: string[]
  sizes: number[]
  price: number
}

export interface IProductCard {
  name: string
  id: string
  category: string
  price: number
  imageUrl: string
}

export interface ITopSuggestions {
  name: string
  id: string
}

export interface User {
  username: string
  email: string
  image: string
}

export interface ICart {
  id: string
  size: number
}

export interface ICartContextErrors {
  size: string
}

export interface IAddedProduct {
  id: string
  size: string
}

export interface IAddedProductCard {
  name: string
  id: string
  category: string
  price: number
  imageUrl: string
  size: string
}

export type SignInFormFields = z.infer<typeof signInSchema>
export type SignUpFormFields = z.infer<typeof signUpSchema>
