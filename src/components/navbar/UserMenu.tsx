import { handleSignOut } from '@/app/actions/auth'
import Button from '../elements/Button'
import { cn } from '@/lib/utils'

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
      <Button
        variant='secondary'
        onClick={() => handleSignOut()}
        className='w-fit'
      >
        Logout
      </Button>
    </div>
  )
}
