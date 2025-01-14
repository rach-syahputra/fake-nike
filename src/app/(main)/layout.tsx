import { Suspense } from 'react'
import { NavigationProvider } from '@/context/NavigationContext'
import { FilterProvider } from '@/context/FilterContext'
import { SearchProvider } from '@/context/SearchContext'
import { CartProvider } from '@/context/CartContext'
import SearchBar from '@/components/search/SearchBar'
import LoadingSpinner from '@/components/elements/LoadingSpinner'
import Navbar from '@/components/navbar/Navbar'

export default function MainLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <NavigationProvider>
        <Suspense
          fallback={
            <div className='flex min-h-screen w-screen items-center justify-center'>
              <LoadingSpinner />
            </div>
          }
        >
          <FilterProvider>
            <CartProvider>
              <SearchProvider>
                <Navbar />
                <SearchBar />
              </SearchProvider>
              <main>{children}</main>
            </CartProvider>
          </FilterProvider>
        </Suspense>
      </NavigationProvider>
    </>
  )
}
