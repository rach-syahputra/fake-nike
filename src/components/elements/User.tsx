import Link from 'next/link'
import { cn } from '@/lib/utils'

type UserProps = {
  className?: string
}

export default function User({ className }: UserProps) {
  const authenticated = false

  if (authenticated) {
    return (
      <Link
        href='/'
        aria-label='User profile page'
        className={cn(
          'text-sm font-medium hover:underline md:text-base',
          className
        )}
      >
        Nadiya
      </Link>
    )
  }

  return (
    <Link
      href='/'
      aria-label='Sign in page'
      className={cn(
        'text-sm font-medium hover:underline md:text-base',
        className
      )}
    >
      Sign in
    </Link>
  )
}
