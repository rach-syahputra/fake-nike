'use client'

import { useEffect, useState } from 'react'

import { cn } from '@/lib/utils'
import { ParamsType, useFilterContext } from '@/context/FilterContext'
import Button from '@/components/elements/Button'

export default function FilterActions() {
  const { setOnMobileFilterModal, state, updateParams } = useFilterContext()
  const [selectedFilterCount, setSelectedFilterCount] = useState<number>(0)

  const handleClear = () => {
    const params: ParamsType = {
      sort: null,
      order: null,
      category: null,
      size: null
    }

    updateParams(params)
    setOnMobileFilterModal(false)
  }

  const handleApply = () => {
    setOnMobileFilterModal(false)
  }

  useEffect(() => {
    setSelectedFilterCount(
      (state.category?.length || 0) + (state.size?.length || 0)
    )
  }, [state])

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
