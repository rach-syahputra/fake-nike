'use client'

import Link from 'next/link'
import { useSession } from 'next-auth/react'

import { cn } from '@/lib/utils'
import Button from '../elements/Button'
import Avatar from './Avatar'

type UserProps = {
  className?: string
}

export default function Auth({ className }: UserProps) {
  const { data: session } = useSession()

  return session?.user ? (
    <Avatar
      image={session.user.image || '/logo.svg'}
      className='max-md:hidden'
    />
  ) : (
    <Button variant='secondary' className='hidden w-fit px-0 md:block'>
      <Link
        href='/sign-in'
        aria-label='Sign in page'
        className={cn('text-sm font-medium', className)}
      >
        Sign in
      </Link>
    </Button>
  )
}
