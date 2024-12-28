'use client'

import { useEffect, useState } from 'react'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { sortOptions } from '@/lib/constants/products'
import { capitalizeFirstLetter, cn } from '@/lib/utils'
import { useFilterContext } from '@/context/FilterContext'
import Icon from '@/components/elements/Icon'

export default function Sort() {
  const { sort, setSort, order, setOrder } = useFilterContext()
  const [openSort, setOpenSort] = useState<boolean>(false)
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
    <div className='flex flex-col items-end'>
      <button
        onClick={() => setOpenSort(!openSort)}
        className='hidden h-[34px] items-center justify-center gap-1.5 px-4 font-[family-name:var(--font-helvetica-now-text)] text-base lg:flex'
      >
        Sort By: <span className='text-gray-500'>{activeSort}</span>
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
        {sortOptions.map((sortOption, index) => (
          <li key={index}>
            <button
              onClick={() => handleSortChange(sortOption.toLowerCase())}
              className='cursor-pointer select-none py-0.5 font-[family-name:var(--font-helvetica-now-text)] font-semibold hover:text-gray-500'
            >
              {sortOption}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
