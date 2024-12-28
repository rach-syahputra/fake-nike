'use client'

import { useState } from 'react'
import { sizes } from '@/lib/constants/products'
import FilterCard from './FilterCard'
import SizeItem from './SizeItem'

export default function SizeFilter() {
  const [selectedCount, setSelectedCount] = useState<number>(0)

  return (
    <FilterCard title='Size' selectedCount={selectedCount}>
      <div className='grid grid-cols-3 gap-x-3 gap-y-2'>
        {sizes.map((size, index) => (
          <SizeItem
            key={index}
            size={size}
            setSelectedCount={setSelectedCount}
          />
        ))}
      </div>
    </FilterCard>
  )
}
