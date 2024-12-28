'use client'

import { cn } from '@/lib/utils'
import { useFilterContext } from '@/context/FilterContext'
import GenderFilter from './GenderFilter'
import SizeFilter from './SizeFilter'

export default function Sidebar() {
  const { onSidebar } = useFilterContext()

  return (
    <div
      className={cn(
        'sticky top-[120px] hidden w-[260px] flex-col gap-2 pl-12',
        {
          'lg:flex': onSidebar
        }
      )}
    >
      <GenderFilter />
      <SizeFilter />
    </div>
  )
}
