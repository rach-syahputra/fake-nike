'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

import { sizes as sizeData } from '@/lib/constants/products'
import { cn } from '@/lib/utils'
import { useFilterContext } from '@/context/FilterContext'
import FilterCard from './FilterCard'

export default function SizeFilter() {
  const searchParams = useSearchParams()
  const sizeParams = searchParams.getAll('size')

  const { updateParams } = useFilterContext()
  const [selectedCount, setSelectedCount] = useState<number>(0)

  const handleOnSelect = (size: string) => {
    const selected = sizeParams?.includes(size)

    updateParams({ size: size }, selected ? 'remove' : 'add')
  }

  useEffect(() => {
    if (sizeParams) setSelectedCount(sizeParams.length)
    else setSelectedCount(0)
  }, [sizeParams])

  return (
    <FilterCard title='Size' selectedCount={selectedCount}>
      <div className='grid grid-cols-3 gap-x-3 gap-y-2'>
        {sizeData.map((size, index) => (
          <div
            key={index}
            onClick={() => handleOnSelect(size.toString())}
            className={cn(
              'flex min-w-14 flex-1 cursor-pointer select-none items-center justify-center rounded-lg border border-gray-300 py-1 font-[family-name:var(--font-helvetica-now-text)]',
              {
                'border-black': sizeParams?.includes(size.toString())
              }
            )}
          >
            {size}
          </div>
        ))}
      </div>
    </FilterCard>
  )
}
