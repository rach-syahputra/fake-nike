import { cn } from '@/lib/utils'

type ProductCardSkeletonProps = {
  className?: string
}

export default function ProductCardSkeleton({
  className
}: ProductCardSkeletonProps) {
  return (
    <div className={cn('flex aspect-square flex-col gap-2', className)}>
      <div className='aspect-square w-full animate-pulse bg-gray-200'></div>
      <div className='h-7 w-full animate-pulse bg-gray-200'></div>
      <div className='h-6 w-1/4 animate-pulse bg-gray-200'></div>
      <div className='h-7 w-1/2 animate-pulse bg-gray-200'></div>
    </div>
  )
}
