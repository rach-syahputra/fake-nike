/* eslint-disable @typescript-eslint/no-unused-vars */
import NextAuth from 'next-auth'
import { JWT } from 'next-auth/jwt'
import { IUserToken } from '@/lib/types/users'

declare module 'next-auth' {
  interface User {
    accessToken: string
  }

  interface Session {
    user: IUserToken & { accessToken: string }
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    accessToken: string
  }
}
