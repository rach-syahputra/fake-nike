import { cn } from '@/lib/utils'

type FilterCardProps = {
  title: string
  selectedCount?: number
  children: React.ReactNode
  className?: string
}

export default function MobileFilterCard({
  title,
  selectedCount = 0,
  children,
  className
}: FilterCardProps) {
  return (
    <div className={cn('flex flex-col gap-6 border-t py-3', className)}>
      <div className='flex items-center gap-2 font-[family-name:var(--font-helvetica-now-text)] font-semibold'>
        <span className='text-gray-800'>{title}</span>
        {selectedCount > 0 && (
          <span className='text-gray-800'>({selectedCount})</span>
        )}
      </div>

      <div>{children}</div>
    </div>
  )
}
