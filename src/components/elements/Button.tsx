'use client'

import { cn } from '@/lib/utils'

type ButtonProps = {
  type?: 'button' | 'submit'
  className?: string
  variant?: 'default' | 'secondary' | 'outline' | 'white'
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
        'h-10 w-fit text-nowrap rounded-full px-4 font-medium',
        {
          'bg-black text-white hover:bg-opacity-60': variant === 'default',
          'text-black hover:text-gray-500': variant === 'secondary',
          'border border-gray-300 bg-white text-black hover:border-black':
            variant === 'outline',
          'bg-white text-black hover:bg-gray-300': variant === 'white',
          'bg-opacity-60': disabled
        },
        className
      )}
    >
      {children}
    </button>
  )
}
