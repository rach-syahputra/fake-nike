'use client'

import { useEffect, useState } from 'react'

import { cn } from '@/lib/utils'
import { SIZES } from '@/lib/constants/filter'
import { useFilterContext } from '@/context/FilterContext'
import FilterCard from './FilterCard'

export default function SizeFilter() {
  const { query, updateParams } = useFilterContext()
  const [selectedCount, setSelectedCount] = useState<number>(0)

  const handleOnSelect = (size: number) => {
    const isSelected = query.sizes?.includes(size)

    let newSizes = Array.isArray(query.sizes) ? query.sizes : []

    if (isSelected) {
      newSizes = newSizes.filter((newSize) => newSize !== size)
    } else {
      newSizes = [...new Set([...newSizes, size])]
    }

    updateParams({
      sizes: newSizes
    })
  }

  useEffect(() => {
    setSelectedCount(query.sizes?.length || 0)
  }, [query.sizes])

  return (
    <FilterCard title='Size' selectedCount={selectedCount}>
      <div className='grid grid-cols-3 gap-x-3 gap-y-2'>
        {SIZES.map((size, index) => (
          <div
            key={index}
            onClick={() => handleOnSelect(size.id)}
            className={cn(
              'flex min-w-14 flex-1 cursor-pointer select-none items-center justify-center rounded-lg border border-gray-300 py-1 font-[family-name:var(--font-helvetica-now-text)]',
              {
                'border-black': query.sizes?.includes(size.id)
              }
            )}
          >
            {size.label}
          </div>
        ))}
      </div>
    </FilterCard>
  )
}
