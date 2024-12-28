'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { cn } from '@/lib/utils'
import { useFilterContext } from '@/context/FilterContext'
import Button from '@/components/elements/Button'

export default function FilterActions() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const {
    openFilterActions,
    setOnMobileFilterModal,
    selectedFilterCount,
    setSort,
    setOrder,
    setCategories,
    setSizes
  } = useFilterContext()

  const handleClear = () => {
    setSort('newest')
    setOrder('asc')
    setCategories([])
    setSizes([])

    const params = new URLSearchParams(searchParams)
    params.delete('sort')
    params.delete('category')
    params.delete('order')
    params.delete('size')

    router.push(`?${params.toString()}`)
  }

  const handleApply = () => {
    setOnMobileFilterModal(false)
  }

  return (
    <div
      className={cn(
        'absolute bottom-0 left-0 hidden w-full items-center justify-center gap-3 px-6 py-4',
        {
          flex: openFilterActions
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
