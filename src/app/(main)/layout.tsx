import { NavigationProvider } from '@/context/NavigationContext'
import { FilterProvider } from '@/context/FilterContext'
import { SearchProvider } from '@/context/SearchContext'
import Navbar from '@/components/navbar/Navbar'
import SearchBar from '@/components/search/SearchBar'
import { Suspense } from 'react'

export default function MainLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <NavigationProvider>
        <FilterProvider>
          <Suspense>
            <SearchProvider>
              <Navbar />
              <SearchBar />
            </SearchProvider>
            <main>{children}</main>
          </Suspense>
        </FilterProvider>
      </NavigationProvider>
    </>
  )
}
