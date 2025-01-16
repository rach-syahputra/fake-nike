'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

import { sortOptions } from '@/lib/constants/products'
import { capitalizeFirstLetter } from '@/lib/utils'
import { ParamsType, useFilterContext } from '@/context/FilterContext'

export default function Sort() {
  const searchParams = useSearchParams()
  const sortParams = searchParams.get('sort')
  const orderParams = searchParams.get('order')

  const { updateParams } = useFilterContext()
  const [activeSort, setActiveSort] = useState<string>('Newest')

  useEffect(() => {
    if (sortParams) {
      setActiveSort(
        sortParams === 'price' && orderParams === 'desc'
          ? 'Price: High-Low'
          : sortParams === 'price' && orderParams === 'asc'
            ? 'Price: Low-High'
            : capitalizeFirstLetter(sortParams as string)
      )
    }
  }, [sortParams, orderParams])

  const handleSortChange = (sortOption: string) => {
    const newParams: ParamsType = {
      order: null,
      sort: null
    }
    // update order params
    if (sortOption.includes('high-low')) newParams.order = 'desc'
    if (sortOption.includes('low-high')) newParams.order = 'asc'

    // update sort params
    if (sortOption.includes('price')) newParams.sort = 'price'
    else newParams.sort = sortOption

    updateParams(newParams, 'add')
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
