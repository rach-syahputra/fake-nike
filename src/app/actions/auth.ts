'use server'

import { signIn } from '@/auth'
import { AuthError } from 'next-auth'

export async function handleCredentialsSignin({
  email,
  password
}: {
  email: string
  password: string
}) {
  try {
    await signIn('credentials', { email, password, redirectTo: '/' })
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return {
            error: {
              message: 'Invalid credentials.'
            }
          }
        default:
          return {
            error: {
              message: 'Something went wrong.'
            }
          }
      }
    }
    throw error
  }
}
