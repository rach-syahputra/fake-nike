import { signOut } from 'next-auth/react'
import { cn } from '@/lib/utils'
import Button from '../elements/Button'

type UserMenuProps = {
  className?: string
}

export default function UserMenu({ className }: UserMenuProps) {
  return (
    <div
      className={cn(
        'absolute right-0 top-8 rounded-md border border-gray-200 bg-white',
        className
      )}
    >
      <Button variant='secondary' onClick={() => signOut()} className='w-fit'>
        Logout
      </Button>
    </div>
  )
}
