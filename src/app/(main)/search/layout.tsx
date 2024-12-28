import { Suspense } from 'react'
import { FilteredProductsProvider } from '@/context/FilteredProductsContext'

export default function SearchLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Suspense>
      <FilteredProductsProvider>{children}</FilteredProductsProvider>
    </Suspense>
  )
}
