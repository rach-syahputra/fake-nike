import { z } from 'zod'
import { signInSchema, signUpSchema } from '../validations/schema'
import { IProductCard } from './products'

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

export interface ITopSuggestions {
  id: number
  title: string
}

export interface User {
  username: string
  email: string
  image: string
}

export interface ICart {
  id: string
  size: number
  count: number
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

export interface ICartProductCard extends IProductCard {
  size: number
  count: number
}

export type SignInFormFields = z.infer<typeof signInSchema>
export type SignUpFormFields = z.infer<typeof signUpSchema>
