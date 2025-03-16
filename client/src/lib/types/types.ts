import { z } from 'zod'
import { signInSchema, signUpSchema } from '../validations/schema'

export interface User {
  username: string
  email: string
  image: string
}

export type SignInFormFields = z.infer<typeof signInSchema>
export type SignUpFormFields = z.infer<typeof signUpSchema>
