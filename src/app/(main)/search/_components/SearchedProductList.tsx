'use client'

import { useEffect, useState } from 'react'

import { fetchFilteredProducts } from '@/lib/api/services'
import { IProductCard, IProductJson } from '@/lib/types/types'
import { useFilterContext } from '@/context/FilterContext'
import Button from '@/components/elements/Button'
import Container from '@/components/layouts/Container'
import Heading from '@/components/elements/Heading'
import SearchedProductCardSkeleton from './loading/SearchedProductCardSkeleton'
import SearchProductCard from './SearchedProductCard'

export default function SearchedProductList() {
  const { state } = useFilterContext()

  const [page, setPage] = useState<number>(1)
  const [hasMore, setHasMore] = useState<boolean>(true)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [products, setProducts] = useState<IProductCard[]>([])

  const getFilteredProducts = async () => {
    setIsLoading(true)

    try {
      const params: Record<string, string | string[]> = {}

      if (state.category) params.categories = state.category
      if (state.order) params.order = state.order
      if (state.sort) params.sort = state.sort
      if (state.size) params.sizes = state.size

      const res: IProductJson[] = await fetchFilteredProducts(state.q || '', {
        ...params,
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
  }, [state])

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
