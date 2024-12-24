'use server'

import { AuthError } from 'next-auth'
import { signIn, signOut } from '@/auth'

export const handleCredentialsSignin = async ({
  email,
  password
}: {
  email: string
  password: string
}) => {
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

export const handleSignOut = async () => {
  return await signOut()
}
