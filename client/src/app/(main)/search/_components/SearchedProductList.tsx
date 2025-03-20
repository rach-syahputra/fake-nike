'use client'

import { useEffect, useState } from 'react'

import { fetchGetProducts } from '@/lib/apis/products'
import { useIsMobile } from '@/hooks/use-mobile'
import { useFilterContext } from '@/context/FilterContext'
import { useFilteredProductsContext } from '@/context/FilteredProductsContext'
import Button from '@/components/elements/Button'
import Container from '@/components/layouts/Container'
import Heading from '@/components/elements/Heading'
import SearchedProductCardSkeleton from './loading/SearchedProductCardSkeleton'
import SearchProductCard from './SearchedProductCard'

export default function SearchedProductList() {
  const { query } = useFilterContext()
  const { products, setProducts, totalProducts, setTotalProducts } =
    useFilteredProductsContext()
  const isMobile = useIsMobile()

  const [hasMore, setHasMore] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const getProducts = async () => {
    setIsLoading(true)

    try {
      const apiQuery: Record<string, string | number | number[]> = {}
      const limit = isMobile ? 12 : 15

      if (query.order) apiQuery.order = query.order
      if (query.sortBy) apiQuery.sortBy = query.sortBy
      if (query.categories) apiQuery.categories = query.categories
      if (query.sizes) apiQuery.sizes = query.sizes
      apiQuery.limit = limit

      const response = await fetchGetProducts(query.q || '', {
        ...apiQuery
      })

      if (response.success) {
        const newProducts = response.data.products
        const totalProducts = response.data.pagination.total

        setProducts(newProducts)
        setTotalProducts(totalProducts)
      }
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  const loadMoreProducts = async () => {
    setIsLoading(true)

    try {
      const apiQuery: Record<string, string | number | number[]> = {}
      const limit = isMobile ? 12 : 15

      if (query.order) apiQuery.order = query.order
      if (query.sortBy) apiQuery.sortBy = query.sortBy
      if (query.categories) apiQuery.categories = query.categories
      if (query.sizes) apiQuery.sizes = query.sizes
      if (products && products.length > 0)
        apiQuery.cursor = products[products.length - 1].productStyle.id
      apiQuery.limit = limit

      const response = await fetchGetProducts(query.q || '', {
        ...apiQuery
      })

      if (response.success) {
        const newProducts = response.data.products
        const totalProducts = response.data.pagination.total

        setProducts((prev) => [...prev, ...newProducts])

        setTotalProducts(totalProducts)
      }
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getProducts()
  }, [query])

  useEffect(() => {
    setHasMore(products.length >= totalProducts ? false : true)
  }, [products])

  return (
    <Container className='px-0 py-1 pb-6 md:px-0 lg:px-12'>
      <div className='grid grid-cols-2 gap-1.5 overflow-auto pb-8 lg:grid-cols-3 lg:gap-x-4 lg:gap-y-6'>
        {products &&
          products.length > 0 &&
          products.map((product, index) => (
            <SearchProductCard key={index} {...product} />
          ))}

        {isLoading && (
          <>
            <SearchedProductCardSkeleton />
            <SearchedProductCardSkeleton />
            <SearchedProductCardSkeleton />
            <SearchedProductCardSkeleton />
          </>
        )}

        {!isLoading && products.length === 0 && (
          <div className='col-span-3 flex w-full items-center justify-center pt-16'>
            <Heading level={1}>
              Sorry, we couldn&rsquo;t find the products you&rsquo;re looking
              for
            </Heading>
          </div>
        )}
      </div>
      {hasMore && (
        <div className='flex items-center justify-center'>
          <Button onClick={loadMoreProducts}>Load more</Button>
        </div>
      )}
    </Container>
  )
}
