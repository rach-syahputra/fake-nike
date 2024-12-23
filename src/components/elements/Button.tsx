import { cn } from '@/lib/utils'

type ButtonProps = {
  type?: 'button' | 'submit'
  className?: string
  variant?: 'default' | 'secondary' | 'outline'
  onClick?: () => void
  children: React.ReactNode
}

export default function Button({
  type = 'button',
  className,
  variant = 'default',
  onClick,
  children
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        'h-11 w-fit rounded-full px-6 font-medium',
        {
          'bg-black text-white': variant === 'default',
          'text-black hover:text-gray-500': variant === 'secondary',
          'border border-gray-300 bg-white text-black hover:border-black':
            variant === 'outline'
        },
        className
      )}
    >
      {children}
    </button>
  )
}
