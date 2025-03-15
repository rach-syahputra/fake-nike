'use client'

import { useEffect, useState } from 'react'

import { cn } from '@/lib/utils'
import { useFilterContext } from '@/context/FilterContext'
import Button from '@/components/elements/Button'

export default function FilterActions() {
  const { setOnMobileFilterModal, query, updateParams } = useFilterContext()
  const [selectedFilterCount, setSelectedFilterCount] = useState<number>(0)

  const handleClear = () => {
    updateParams({ order: null, categories: null, sizes: null, sortBy: null })
    setOnMobileFilterModal(false)
  }

  const handleApply = () => {
    setOnMobileFilterModal(false)
  }

  useEffect(() => {
    setSelectedFilterCount(
      (query.categories?.length || 0) + (query.sizes?.length || 0)
    )
  }, [query])

  return (
    <div
      className={cn(
        'absolute bottom-0 left-0 hidden w-full items-center justify-center gap-3 px-6 py-4',
        {
          flex: selectedFilterCount > 0
        }
      )}
    >
      <Button
        onClick={() => handleClear()}
        variant='outline'
        className='flex-1 text-base'
      >
        Clear ({selectedFilterCount})
      </Button>
      <Button onClick={() => handleApply()} className='flex-1 text-base'>
        Apply
      </Button>
    </div>
  )
}
