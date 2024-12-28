'use client'

import { cn } from '@/lib/utils'
import { useFilterContext } from '@/context/FilterContext'
import Sort from './Sort'
import GenderFilter from './GenderFilter'
import SizeFilter from './SizeFilter'
import FilterActions from './FilterActions'
import CloseModalButton from './CloseModalButton'

export default function MobileFilterModal() {
  const { onMobileFilterModal } = useFilterContext()

  return (
    <div
      className={cn(
        'absolute left-0 top-0 z-20 hidden h-full min-h-screen w-full flex-col gap-6 bg-white px-5 py-10 text-gray-900',
        {
          flex: onMobileFilterModal
        }
      )}
    >
      <CloseModalButton />

      <h1 className='font-[family-name:var(--font-helvetica-now-text)] font-semibold'>
        Filter
      </h1>

      <div className='flex flex-col gap-8'>
        <Sort />
        <div className='h-[0.5px] w-full bg-gray-300'></div>
        <GenderFilter />
        <SizeFilter />
      </div>

      <FilterActions />
    </div>
  )
}
