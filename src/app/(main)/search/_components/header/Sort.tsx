'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

import { sortOptions } from '@/lib/constants/products'
import { capitalizeFirstLetter, cn } from '@/lib/utils'
import { ParamsType, useFilterContext } from '@/context/FilterContext'
import Icon from '@/components/elements/Icon'

export default function Sort() {
  const searchParams = useSearchParams()
  const sortParams = searchParams.get('sort')
  const orderParams = searchParams.get('order')

  const { updateParams } = useFilterContext()
  const [openSort, setOpenSort] = useState<boolean>(false)
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
