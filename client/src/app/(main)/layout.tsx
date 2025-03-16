import { Suspense } from 'react'
import { NavigationProvider } from '@/context/NavigationContext'
import { FilterProvider } from '@/context/FilterContext'
import { SearchProvider } from '@/context/SearchContext'
import { CartProvider } from '@/context/CartContext'
import SearchBar from '@/components/search/SearchBar'
import LoadingSpinner from '@/components/elements/LoadingSpinner'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/layouts/Footer'

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
              <main className='min-h-screen pb-8 pt-[60px]'>{children}</main>
              <Footer />
            </CartProvider>
          </FilterProvider>
        </Suspense>
      </NavigationProvider>
    </>
  )
}
