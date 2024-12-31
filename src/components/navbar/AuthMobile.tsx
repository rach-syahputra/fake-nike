'use client'

import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'
import Button from '../elements/Button'
import Avatar from './Avatar'

export default function AuthMobile() {
  const { data: session } = useSession()

  return session?.user ? (
    <div className='flex flex-col gap-3'>
      <div className='flex items-center gap-2'>
        <Avatar image={session.user.image || ''} />
        <p>{session.user.name}</p>
      </div>
      <Button
        variant='secondary'
        onClick={() => signOut()}
        className='px-0 text-lg text-red-500'
      >
        Logout
      </Button>
    </div>
  ) : (
    <Button variant='secondary' className='w-fit px-0'>
      <Link href='/sign-in' aria-label='Sign in page' className='text-lg'>
        Sign in
      </Link>
    </Button>
  )
}
