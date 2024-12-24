import { z } from 'zod'

export const signInSchema = z.object({
  email: z
    .string({ required_error: 'Required' })
    .email({ message: 'Invalid email address' }),
  password: z
    .string({ required_error: 'Required' })
    .min(8, { message: 'Minimum of 8 characters' })
})
