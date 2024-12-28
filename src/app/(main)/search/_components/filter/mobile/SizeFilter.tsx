'use client'

import { useEffect, useState } from 'react'
import { sizes as sizesData } from '@/lib/constants/products'
import { useFilterContext } from '@/context/FilterContext'
import SizeItem from '../SizeItem'
import MobileFilterCard from './MobileFilterCard'

export default function SizeFilter() {
  const { sizes } = useFilterContext()
  const [selectedCount, setSelectedCount] = useState<number>(0)

  useEffect(() => {
    setSelectedCount(sizes.length)
  }, [sizes])

  return (
    <MobileFilterCard title='Size' selectedCount={selectedCount}>
      <div className='flex flex-wrap items-center gap-2.5 gap-y-1.5'>
        {sizesData.map((size, index) => (
          <SizeItem
            key={index}
            size={size}
            setSelectedCount={setSelectedCount}
          />
        ))}
      </div>
    </MobileFilterCard>
  )
}
