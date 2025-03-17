import NextAuth, { Session } from 'next-auth'
import { JWT } from 'next-auth/jwt'
import Credentials from 'next-auth/providers/credentials'
import Google from 'next-auth/providers/google'
import jwt from 'jsonwebtoken'

import { fetchLogin } from './lib/apis/users'
import { IUserToken } from './lib/types/users'

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

        const decoded = jwt.decode(user.data.accessToken) as IUserToken

        return {
          user: {
            accessToken: user.data.accessToken,
            id: decoded.id as number,
            email: decoded.email,
            name: decoded.name,
            image: decoded.image
          }
        }
      }
    }),
    Google
  ],
  callbacks: {
    async jwt({ token, user, account, profile }) {
      if (account && account.provider === 'google') {
        token.user = {
          id: account?.userId as string,
          email: profile?.email as string,
          name: profile?.name as string,
          image: profile?.picture || null,
          accessToken: account?.access_token as string,
          provider: account?.provider || ''
        }
      } else if (user) {
        token.user = {
          ...user.user,
          provider: account?.provider || ''
        }
      }

      return token
    },

    async session({ session, token }: { session: Session; token: JWT }) {
      if (token) {
        session.user = token.user
      }

      return session
    }
  }
})
