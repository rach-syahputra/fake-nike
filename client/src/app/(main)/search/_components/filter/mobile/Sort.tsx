'use client'

import { useEffect, useState } from 'react'

import { SORT_OPTIONS } from '@/lib/constants/filter'
import { QueryType, useFilterContext } from '@/context/FilterContext'
import { IActiveSort } from '@/lib/types/filters'

export default function Sort() {
  const { query, updateParams } = useFilterContext()
  const [activeSort, setActiveSort] = useState<IActiveSort>({
    id: 2,
    label: 'Newest'
  })

  useEffect(() => {
    if (query.order === 'asc' && query.sortBy === 'price') {
      setActiveSort({
        id: 4,
        label: 'Price: Low-High'
      })
    } else if (query.order === 'desc' && query.sortBy === 'price') {
      setActiveSort({
        id: 3,
        label: 'Price: High-Low'
      })
    } else if (query.order === 'asc') {
      setActiveSort({
        id: 1,
        label: 'Oldest'
      })
    } else {
      setActiveSort({
        id: 2,
        label: 'Newest'
      })
    }
  }, [query.order, query.sortBy])

  const handleSortChange = (sortOption: number) => {
    const newParams: QueryType = {
      sortBy: null,
      order: null
    }

    if (sortOption === 1) {
      newParams.order = 'asc'
      newParams.sortBy = 'date'
    } else if (sortOption === 2) {
      newParams.order = 'desc'
      newParams.sortBy = 'date'
    } else if (sortOption === 3) {
      newParams.order = 'desc'
      newParams.sortBy = 'price'
    } else if (sortOption === 4) {
      newParams.order = 'asc'
      newParams.sortBy = 'price'
    }

    updateParams(newParams)
  }

  return (
    <div className='flex w-full flex-col gap-6'>
      <span className='font-[family-name:var(--font-helvetica-now-text)] font-semibold'>
        Sort By
      </span>
      <ul className='flex flex-col gap-1'>
        {SORT_OPTIONS.map((sortOption, index) => (
          <li
            key={index}
            className='flex items-center gap-2 py-2 font-[family-name:var(--font-helvetica-now-text)] font-semibold'
          >
            <input
              type='radio'
              checked={activeSort.id === sortOption.id}
              onChange={() => handleSortChange(sortOption.id)}
              id={sortOption.id.toString()}
              className='h-5 w-5 font-[family-name:var(--font-helvetica-now-text)] accent-black'
            />
            <label htmlFor={sortOption.id.toString()}>{sortOption.label}</label>
          </li>
        ))}
      </ul>
    </div>
  )
}
