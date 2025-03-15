'use client'

import { useEffect, useState } from 'react'

import {
  CATEGORIES_FOR_MEN,
  CATEGORIES_FOR_WOMEN
} from '@/lib/constants/filter'
import { useFilterContext } from '@/context/FilterContext'
import FilterCard from './FilterCard'

export default function GenderFilter() {
  const { query, updateParams } = useFilterContext()
  const [selectedCount, setSelectedCount] = useState<number>(0)

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, name } = event.target

    let newCategories = Array.isArray(query.categories) ? query.categories : []

    if (name === 'men' && checked) {
      newCategories = [...new Set([...newCategories, ...CATEGORIES_FOR_MEN])]
    } else if (name === 'women' && checked) {
      newCategories = [...new Set([...newCategories, ...CATEGORIES_FOR_WOMEN])]
    } else if (name === 'men') {
      newCategories = newCategories.filter(
        (category) => !CATEGORIES_FOR_MEN.includes(category)
      )
    } else if (name === 'women') {
      newCategories = newCategories.filter(
        (category) => !CATEGORIES_FOR_WOMEN.includes(category)
      )
    } else {
      newCategories = []
    }

    updateParams({ categories: newCategories })
  }

  useEffect(() => {
    const men = CATEGORIES_FOR_MEN.every((category) =>
      query.categories?.includes(category)
    )
    const women = CATEGORIES_FOR_WOMEN.every((category) =>
      query.categories?.includes(category)
    )

    if (men && women) {
      setSelectedCount(2)
    } else if (men || women) {
      setSelectedCount(1)
    } else {
      setSelectedCount(0)
    }
  }, [query.categories])

  return (
    <FilterCard title='Gender' selectedCount={selectedCount}>
      <div className='flex flex-col gap-1 font-[family-name:var(--font-helvetica-now-text)]'>
        <div className='flex items-center gap-1.5'>
          <label htmlFor='men' className='sr-only'>
            Men
          </label>
          <input
            type='checkbox'
            name='men'
            checked={
              query.categories && query.categories.length > 0
                ? CATEGORIES_FOR_MEN.every((category) =>
                    query.categories?.includes(category)
                  )
                : false
            }
            onChange={handleCheckboxChange}
            className='h-5 w-5 border-gray-800 accent-black'
          />
          Men
        </div>
        <div className='flex items-center gap-1.5'>
          <label htmlFor='women' className='sr-only'>
            Women
          </label>
          <input
            type='checkbox'
            name='women'
            checked={
              query.categories && query.categories.length > 0
                ? CATEGORIES_FOR_WOMEN.every((category) =>
                    query.categories?.includes(category)
                  )
                : false
            }
            onChange={handleCheckboxChange}
            className='h-5 w-5 border-gray-800 accent-black'
          />
          Women
        </div>
      </div>
    </FilterCard>
  )
}
