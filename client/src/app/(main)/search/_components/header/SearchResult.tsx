'use client'

import { useFilteredProductsContext } from '@/context/FilteredProductsContext'

export default function SearchResult() {
  const { totalProducts } = useFilteredProductsContext()

  return (
    <h1 className='text-base text-gray-500 max-lg:font-[family-name:var(--font-helvetica-now-text)] lg:text-2xl lg:text-black'>
      Search Result ({totalProducts})
    </h1>
  )
}
