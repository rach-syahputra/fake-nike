'use client'

import { cn } from '@/lib/utils'
import { useNavigationContenxt } from '@/context/NavigationContext'
import { useFilterContext } from '@/context/FilterContext'
import GenderFilter from './GenderFilter'
import SizeFilter from './SizeFilter'

export default function Sidebar() {
  const { showNavbar } = useNavigationContenxt()
  const { onSidebar } = useFilterContext()

  return (
    <div
      className={cn(
        'sticky top-[60px] hidden w-[260px] flex-col gap-2 pl-12',
        {
          'lg:flex': onSidebar
        },
        {
          'top-[120px]': showNavbar
        }
      )}
    >
      <GenderFilter />
      <SizeFilter />
    </div>
  )
}
