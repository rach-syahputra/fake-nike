import { cn } from '@/lib/utils'

type ContainerProps = {
  children: React.ReactNode
  className?: string
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full px-4 md:px-6 lg:max-w-screen-xl lg:px-8',
        className
      )}
    >
      {children}
    </div>
  )
}
