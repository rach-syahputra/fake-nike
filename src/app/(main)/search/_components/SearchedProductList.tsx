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
import Heading from '@/components/elements/Heading'

export default function SearchedProductList() {
  const { searchQuery, sort, order, categories, sizes } = useFilterContext()
  const { products, setProducts } = useFilteredProductsContext()
  const [page, setPage] = useState<number>(1)
  const [hasMore, setHasMore] = useState<boolean>(true)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const getFilteredProducts = async () => {
    setIsLoading(true)

    try {
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
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
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
        {isLoading ? (
          <>
            <SearchedProductCardSkeleton />
            <SearchedProductCardSkeleton />
            <SearchedProductCardSkeleton />
            <SearchedProductCardSkeleton />
          </>
        ) : products && products?.length === 0 ? (
          <div className='col-span-3 flex w-full items-center justify-center'>
            <Heading level={1}>
              Sorry, we couldn&rsquo;t find the products you&rsquo;re looking
              for
            </Heading>
          </div>
        ) : (
          products.map((product, index) => (
            <SearchProductCard key={index} {...product} />
          ))
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
