'use client'

import Image from 'next/image'
import { useFilterContext } from '@/context/FilterContext'
import Button from '@/components/elements/Button'
import Sort from './Sort'

export default function SearchHeaderOptions() {
  const {
    onSidebar,
    setOnSidebar,
    onMobileFilterModal,
    setOnMobileFilterModal
  } = useFilterContext()

  return (
    <div className='relative flex items-center'>
      <Button
        onClick={() => setOnMobileFilterModal(!onMobileFilterModal)}
        variant='outline'
        className='flex h-[34px] items-center justify-center gap-1.5 px-4 text-base lg:hidden'
      >
        Filter
        <Image
          src='/icons/filter.png'
          alt='icon'
          width={20}
          height={20}
          className='h-5 w-5'
        />
      </Button>
      <button
        onClick={() => setOnSidebar(!onSidebar)}
        className='hidden h-[34px] items-center justify-center gap-1.5 px-4 font-[family-name:var(--font-helvetica-now-text)] text-base lg:flex'
      >
        {onSidebar ? 'Hide filter' : 'Show filter'}
        <Image
          src='/icons/filter.png'
          alt='icon'
          width={20}
          height={20}
          className='h-5 w-5'
        />
      </button>

      <Sort />
    </div>
  )
}
