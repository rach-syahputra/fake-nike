'use client'

import { useEffect, useState } from 'react'
import { sizes as sizeData } from '@/lib/constants/products'
import { useFilterContext } from '@/context/FilterContext'
import FilterCard from './FilterCard'
import SizeItem from './SizeItem'

export default function SizeFilter() {
  const { sizes } = useFilterContext()
  const [selectedCount, setSelectedCount] = useState<number>(0)

  useEffect(() => {
    setSelectedCount(sizes.length)
  }, [sizes])

  return (
    <FilterCard title='Size' selectedCount={selectedCount}>
      <div className='grid grid-cols-3 gap-x-3 gap-y-2'>
        {sizeData.map((size, index) => (
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
