'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

import { useFilterContext } from '@/context/FilterContext'
import FilterCard from './FilterCard'

export default function GenderFilter() {
  const searchParams = useSearchParams()
  const categoryParams = searchParams.getAll('category')

  const { updateParams } = useFilterContext()
  const [selectedCount, setSelectedCount] = useState<number>(0)

  useEffect(() => {
    if (categoryParams) setSelectedCount(categoryParams.length)
    else setSelectedCount(0)
  }, [categoryParams])

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, name } = event.target

    updateParams({ category: name }, checked ? 'add' : 'remove')
  }

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
            checked={categoryParams ? categoryParams?.includes('men') : false}
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
            checked={categoryParams ? categoryParams?.includes('women') : false}
            onChange={handleCheckboxChange}
            className='h-5 w-5 border-gray-800 accent-black'
          />
          Women
        </div>
      </div>
    </FilterCard>
  )
}
