import { cn } from '@/lib/utils'

type ModalContainerProps = {
  className?: string
  children: React.ReactNode
}

export default function ModalContainer({
  className,
  children
}: ModalContainerProps) {
  return (
    <div
      className={cn(
        'fixed left-0 top-0 z-10 block h-svh min-h-screen w-full bg-black bg-opacity-50',
        className
      )}
    >
      {children}
    </div>
  )
}
