import Link from 'next/link'
import { User as UserType } from 'next-auth'
import { cn } from '@/lib/utils'

type UserProps = {
  user: UserType | null
  className?: string
}

export default function Auth({ user, className }: UserProps) {
  return user ? (
    <Link
      href='/'
      aria-label='User profile page'
      className={cn(
        'hidden text-sm font-medium hover:underline md:block md:text-base',
        className
      )}
    >
      {user?.name}
    </Link>
  ) : (
    <Link
      href='/sign-in'
      aria-label='Sign in page'
      className={cn(
        'hidden text-sm font-medium hover:underline md:block md:text-base',
        className
      )}
    >
      Sign in
    </Link>
  )
}
