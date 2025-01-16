'use client'

import { useState } from 'react'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { cn } from '@/lib/utils'
import Icon from '@/components/elements/Icon'

type FilterCardProps = {
  title: string
  selectedCount?: number
  children: React.ReactNode
  className?: string
}

export default function FilterCard({
  title,
  selectedCount = 0,
  children,
  className
}: FilterCardProps) {
  const [onOpen, setOnOpen] = useState<boolean>(false)

  return (
    <div className={cn('flex flex-col gap-5 border-t py-3', className)}>
      <div
        onClick={() => setOnOpen(!onOpen)}
        className='flex cursor-pointer items-center justify-between'
      >
        <div className='flex items-center gap-2'>
          <span className='select-none text-gray-800'>{title}</span>
          {selectedCount > 0 && (
            <span className='text-gray-800'>({selectedCount})</span>
          )}
        </div>
        <Icon
          icon={faChevronUp}
          className={cn('h-4 w-4 transition-all duration-300 ease-in-out', {
            'rotate-180': !onOpen
          })}
        />
      </div>
      <div
        className={cn('hidden', {
          block: onOpen
        })}
      >
        {children}
      </div>
    </div>
  )
}
