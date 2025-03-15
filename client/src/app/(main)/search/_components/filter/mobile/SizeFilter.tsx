'use client'

import { useEffect, useState } from 'react'

import { cn } from '@/lib/utils'
import { SIZES } from '@/lib/constants/filter'
import { useFilterContext } from '@/context/FilterContext'
import MobileFilterCard from './MobileFilterCard'

export default function SizeFilter() {
  const { query, updateParams } = useFilterContext()
  const [selectedCount, setSelectedCount] = useState<number>(0)

  const handleOnSelect = (size: number) => {
    const selected = query.sizes?.includes(size)

    let newSizes = Array.isArray(query.sizes) ? query.sizes : []

    if (selected) {
      newSizes = [...new Set([...newSizes, size])]
    } else {
      newSizes = newSizes.filter(
        (size) => !SIZES.map((size) => size.id).includes(size)
      )
    }

    updateParams({
      sizes: newSizes
    })
  }

  useEffect(() => {
    setSelectedCount(query.sizes?.length || 0)
  }, [query.sizes])

  return (
    <MobileFilterCard title='Size' selectedCount={selectedCount}>
      <div className='flex flex-wrap items-center gap-2.5 gap-y-1.5'>
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
    </MobileFilterCard>
  )
}
