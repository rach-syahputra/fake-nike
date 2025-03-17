/* eslint-disable @typescript-eslint/no-unused-vars */
import NextAuth from 'next-auth'
import { JWT } from 'next-auth/jwt'
import { IUserToken } from '@/lib/types/users'

declare module 'next-auth' {
  interface User {
    user: {
      id: number
      name: string
      email: string
      image: string | null
      accessToken: string
    }
  }

  interface Session {
    user: IUserToken & { accessToken: string }
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    user: {
      id: number | string
      name: string
      email: string
      image: string | null
      accessToken: string
      provider?: string
    }
  }
}
