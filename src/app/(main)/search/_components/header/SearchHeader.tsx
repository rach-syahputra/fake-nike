'use client'

import { cn } from '@/lib/utils'
import { useNavigationContenxt } from '@/context/NavigationContext'
import Container from '@/components/layouts/Container'
import SearchHeaderOptions from './SearchHeaderOptions'
import SearchResult from './SearchResult'

export default function SearchHeader() {
  const { showNavbar } = useNavigationContenxt()

  return (
    <Container
      className={cn(
        'sticky top-0 z-10 flex h-[60px] items-center justify-between border-b bg-white px-5 md:px-5 lg:border-none lg:px-12',
        {
          'top-[60px]': showNavbar
        }
      )}
    >
      <SearchResult />
      <SearchHeaderOptions />
    </Container>
  )
}
