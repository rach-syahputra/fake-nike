'use client'

import { useEffect, useState } from 'react'
import { sortOptions } from '@/lib/constants/products'
import { capitalizeFirstLetter } from '@/lib/utils'
import { useFilterContext } from '@/context/FilterContext'

export default function Sort() {
  const { sort, setSort, order, setOrder } = useFilterContext()
  const [activeSort, setActiveSort] = useState<string>('')

  useEffect(() => {
    setActiveSort(
      sort === 'price' && order === 'desc'
        ? 'Price: High-Low'
        : sort === 'price' && order === 'asc'
          ? 'Price: Low-High'
          : capitalizeFirstLetter(sort)
    )
  }, [sort, order])

  const handleSortChange = (sortOption: string) => {
    setOrder(sortOption.includes('high-low') ? 'desc' : 'asc')
    setSort(sortOption.includes('price') ? 'price' : sortOption)
  }

  return (
    <div className='flex w-full flex-col gap-6'>
      <span className='font-[family-name:var(--font-helvetica-now-text)] font-semibold'>
        Sort By
      </span>
      <ul className='flex flex-col gap-1'>
        {sortOptions.map((sortOption, index) => (
          <li
            key={index}
            className='flex items-center gap-2 py-2 font-[family-name:var(--font-helvetica-now-text)] font-semibold'
          >
            <input
              type='radio'
              checked={activeSort.toLowerCase() === sortOption.toLowerCase()}
              onChange={() => handleSortChange(sortOption.toLowerCase())}
              id={sortOption}
              className='h-5 w-5 font-[family-name:var(--font-helvetica-now-text)] accent-black'
            />
            <label htmlFor={sortOption}>{sortOption}</label>
          </li>
        ))}
      </ul>
    </div>
  )
}
