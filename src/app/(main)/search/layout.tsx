import { FilteredProductsProvider } from '@/context/FilteredProductsContext'

export default function SearchLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return <FilteredProductsProvider>{children}</FilteredProductsProvider>
}
