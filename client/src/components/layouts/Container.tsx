import { cn } from '@/lib/utils'

type ContainerProps = {
  children: React.ReactNode
  className?: string
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn('mx-auto w-full px-6 md:px-8 lg:px-10 xl:px-12', className)}
    >
      {children}
    </div>
  )
}
