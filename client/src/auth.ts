import NextAuth, { Session } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import Google from 'next-auth/providers/google'
import jwt from 'jsonwebtoken'

import { fetchLogin } from './lib/apis/users'
import { IUserToken } from './lib/types/users'
import { JWT } from 'next-auth/jwt'

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: '/sign-in'
  },
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 3
  },
  providers: [
    Credentials({
      async authorize(credentials) {
        const user = await fetchLogin({
          email: credentials.email as string,
          password: credentials.password as string
        })

        if (!user.success) return null

        return {
          accessToken: user.data.accessToken
        }
      }
    }),
    Google
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken
      }

      return token
    },

    async session({ session, token }: { session: Session; token: JWT }) {
      if (token) {
        session.user.accessToken = token.accessToken

        const decoded = jwt.decode(token.accessToken) as IUserToken

        session.user.id = decoded.id
        session.user.name = decoded.name
        session.user.email = decoded.email
      }

      return session
    }
  }
})
