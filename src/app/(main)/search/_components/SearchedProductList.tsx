'use client'

import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { fetchFilteredProducts } from '@/lib/api/services'
import { IProductJson } from '@/lib/types/types'
import { useFilteredProductsContext } from '@/context/FilteredProductsContext'
import { useFilterContext } from '@/context/FilterContext'
import SearchProductCard from './SearchedProductCard'
import Container from '@/components/layouts/Container'
import SearchedProductCardSkeleton from './loading/SearchedProductCardSkeleton'

export default function SearchedProductList() {
  const searchParams = useSearchParams()
  const { searchQuery, sort, order, categories, sizes } = useFilterContext()
  const { products, setProducts } = useFilteredProductsContext()

  useEffect(() => {
    getFilteredProducts()
  }, [searchParams])

  const getFilteredProducts = async () => {
    const data: IProductJson[] = await fetchFilteredProducts(searchQuery, {
      categories: categories,
      order: order,
      sort: sort,
      sizes: sizes
    })

    setProducts(
      data.map((item) => ({
        ...item,
        imageUrl: item.imageUrls[0]
      }))
    )
  }

  return (
    <Container className='px-0 py-1 md:px-0 lg:px-12'>
      <div className='grid grid-cols-2 gap-1.5 pb-8 lg:grid-cols-3 lg:gap-x-4 lg:gap-y-6'>
        {products && products.length > 0 ? (
          products.map((product, index) => (
            <SearchProductCard key={index} {...product} />
          ))
        ) : (
          <>
            <SearchedProductCardSkeleton />
            <SearchedProductCardSkeleton />
            <SearchedProductCardSkeleton />
            <SearchedProductCardSkeleton />
          </>
        )}
      </div>
    </Container>
  )
}
