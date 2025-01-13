'use client'

import { cn } from '@/lib/utils'

type ButtonProps = {
  type?: 'button' | 'submit'
  className?: string
  variant?: 'default' | 'secondary' | 'outline'
  onClick?: () => void
  disabled?: boolean
  children: React.ReactNode
}

export default function Button({
  type = 'button',
  className,
  variant = 'default',
  onClick,
  disabled,
  children
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'h-10 w-fit text-nowrap rounded-full px-6 font-medium',
        {
          'bg-black text-white hover:bg-opacity-60': variant === 'default',
          'text-black hover:text-gray-500': variant === 'secondary',
          'border border-gray-300 bg-white text-black hover:border-black':
            variant === 'outline',
          'bg-opacity-60': disabled
        },
        className
      )}
    >
      {children}
    </button>
  )
}
