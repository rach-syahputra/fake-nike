import Link from 'next/link'
import { auth } from '@/auth'
import { cn } from '@/lib/utils'
import Button from '../elements/Button'
import Avatar from './Avatar'

type UserProps = {
  className?: string
}

export default async function Auth({ className }: UserProps) {
  const session = await auth()

  return session?.user ? (
    <Avatar image={session.user.image || ''} className='max-md:hidden' />
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
