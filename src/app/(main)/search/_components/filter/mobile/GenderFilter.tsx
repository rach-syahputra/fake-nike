'use client'

import { useEffect, useState } from 'react'
import { useFilterContext } from '@/context/FilterContext'
import MobileFilterCard from './MobileFilterCard'

export default function GenderFilter() {
  const { categories, setCategories } = useFilterContext()
  const [selectedCount, setSelectedCount] = useState<number>(0)

  useEffect(() => {
    setSelectedCount(categories.length)
  }, [categories])

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, name } = event.target

    setSelectedCount((prevState) => (checked ? prevState + 1 : prevState - 1))
    setCategories((prevState) =>
      checked ? [...prevState, name] : prevState.filter((item) => item !== name)
    )
  }

  return (
    <MobileFilterCard title='Gender' selectedCount={selectedCount}>
      <div className='flex flex-col gap-1 font-[family-name:var(--font-helvetica-now-text)] font-semibold'>
        <div className='flex items-center gap-1.5'>
          <label htmlFor='men' className='sr-only'>
            Men
          </label>
          <input
            type='checkbox'
            name='men'
            checked={categories.includes('men')}
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
            checked={categories.includes('women')}
            onChange={handleCheckboxChange}
            className='h-5 w-5 border-gray-800 accent-black'
          />
          Women
        </div>
      </div>
    </MobileFilterCard>
  )
}
