'use client'

import { useEffect, useState } from 'react'
import { fetchFilteredProducts } from '@/lib/api/services'
import { IProductJson } from '@/lib/types/types'
import { useFilteredProductsContext } from '@/context/FilteredProductsContext'
import { useFilterContext } from '@/context/FilterContext'
import SearchProductCard from './SearchedProductCard'
import Container from '@/components/layouts/Container'
import SearchedProductCardSkeleton from './loading/SearchedProductCardSkeleton'
import Button from '@/components/elements/Button'

export default function SearchedProductList() {
  const { searchQuery, sort, order, categories, sizes } = useFilterContext()
  const { products, setProducts } = useFilteredProductsContext()
  const [page, setPage] = useState<number>(1)
  const [hasMore, setHasMore] = useState<boolean>(true)

  const getFilteredProducts = async () => {
    const res: IProductJson[] = await fetchFilteredProducts(searchQuery, {
      categories: categories,
      order: order,
      sort: sort,
      sizes: sizes,
      limit: 9,
      page: page
    })

    const data = res.map((item) => ({
      ...item,
      imageUrl: item.imageUrls[0]
    }))

    if (data.length < 9) setHasMore(false)

    setProducts((prevState) => (page === 1 ? data : [...prevState, ...data]))
  }

  useEffect(() => {
    getFilteredProducts()
  }, [page])

  useEffect(() => {
    setHasMore(true)

    if (page === 1) {
      getFilteredProducts()
    } else {
      setPage(1)
    }
  }, [searchQuery, sort, order, categories, sizes])

  return (
    <Container className='px-0 py-1 pb-6 md:px-0 lg:px-12'>
      <div className='grid grid-cols-2 gap-1.5 overflow-auto pb-8 lg:grid-cols-3 lg:gap-x-4 lg:gap-y-6'>
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
      {hasMore && (
        <div className='flex items-center justify-center'>
          <Button onClick={() => setPage((prev) => prev + 1)} className=''>
            Load more
          </Button>
        </div>
      )}
    </Container>
  )
}
