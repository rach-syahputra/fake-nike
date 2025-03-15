'use client'

import { useEffect, useState } from 'react'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

import { cn } from '@/lib/utils'
import { SORT_OPTIONS } from '@/lib/constants/filter'
import { QueryType, useFilterContext } from '@/context/FilterContext'
import { IActiveSort } from '@/lib/types/filters'
import Icon from '@/components/elements/Icon'

export default function Sort() {
  const { query, updateParams } = useFilterContext()
  const [openSort, setOpenSort] = useState<boolean>(false)
  const [activeSort, setActiveSort] = useState<IActiveSort>({
    id: 1,
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
    <div className='flex flex-col items-end'>
      <button
        onClick={() => setOpenSort(!openSort)}
        className='hidden h-[34px] items-center justify-center gap-1.5 px-4 font-[family-name:var(--font-helvetica-now-text)] text-base lg:flex'
      >
        Sort By: <span className='text-gray-500'>{activeSort.label}</span>
        <Icon
          icon={faChevronUp}
          className={cn('h-4 w-4 transition-all duration-300 ease-in-out', {
            'rotate-180': !openSort
          })}
        />
      </button>
      <ul
        className={cn(
          'absolute top-8 hidden flex-col items-end rounded-lg bg-white p-6 shadow-sm',
          {
            flex: openSort
          }
        )}
      >
        {SORT_OPTIONS.map((sortOption, index) => (
          <li key={index}>
            <button
              onClick={() => handleSortChange(sortOption.id)}
              className='cursor-pointer select-none py-0.5 font-[family-name:var(--font-helvetica-now-text)] font-semibold hover:text-gray-500'
            >
              {sortOption.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
