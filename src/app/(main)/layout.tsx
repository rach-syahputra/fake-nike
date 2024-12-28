import { Suspense } from 'react'
import { NavigationProvider } from '@/context/NavigationContext'
import { FilterProvider } from '@/context/FilterContext'
import { SearchProvider } from '@/context/SearchContext'
import Navbar from '@/components/navbar/Navbar'
import SearchBar from '@/components/search/SearchBar'

export default function MainLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <NavigationProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <FilterProvider>
            <SearchProvider>
              <Navbar />
              <SearchBar />
            </SearchProvider>
            <main>{children}</main>
          </FilterProvider>
        </Suspense>
      </NavigationProvider>
    </>
  )
}
