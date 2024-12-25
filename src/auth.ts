import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import Google from 'next-auth/providers/google'
import { fetchUserByEmailAndPassword } from './lib/api/services'
import { User } from './lib/types/types'

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
        const user: User[] = await fetchUserByEmailAndPassword({
          email: credentials.email as string,
          password: credentials.password as string
        })

        if (!user.length) return null

        return user[0]
      }
    }),
    Google
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.name = user.name
        token.email = user.email
        token.image = user.image
      }

      return token
    },

    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string
        session.user.email = token.email as string
        session.user.image = token.image as string
        session.user.name = token.name as string
      }

      return session
    }
  }
})
