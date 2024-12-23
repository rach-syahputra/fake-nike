'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { fetchProductByName } from '@/lib/api/services'
import { IProductCard, IProductJson, ITopSuggestions } from '@/lib/types/types'
import { popularSearches } from '@/lib/constants/products'
import { useSearch } from '@/context/SearchContext'
import Container from '../layouts/Container'
import ModalContainer from '../layouts/ModalContainer'
import SearchInput from './SearchInput'
import Button from '../elements/Button'
import ProductSearchList from '../products/ProductSearchList'
import PopularSearchTerms from './PopularSearchTerms'
import TopSuggestions from './TopSuggestions'

export default function SearchBar() {
  const { onSearch, setOnSearch } = useSearch()
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [products, setProducts] = useState<IProductCard[]>([])
  const [topSuggestions, setTopSuggestions] = useState<ITopSuggestions[]>([])

  useEffect(() => {
    if (onSearch) {
      // hide overvlow y scroll
      document.documentElement.style.overflowY = 'hidden'
    } else {
      setSearchQuery('')
      setProducts([])
    }
    return () => {
      document.documentElement.style.overflowY = 'scroll'
    }
  }, [onSearch])

  useEffect(() => {
    if (searchQuery) {
      getProductByName()
    } else {
      setProducts([])
    }
  }, [searchQuery])

  const getProductByName = async () => {
    try {
      const data: IProductJson[] = await fetchProductByName(searchQuery, 5)

      setProducts(
        data.map((product) => ({
          name: product.name,
          slug: product.slug,
          category: product.category,
          price: product.price,
          imageUrl: product.imageUrls[0]
        }))
      )

      setTopSuggestions(
        data.slice(0, 3).map((product) => ({
          name: product.name,
          slug: product.slug
        }))
      )
    } catch (error) {
      console.error(error)
    }
  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()

    setSearchQuery(event.target.value)
  }

  if (onSearch)
    return (
      <ModalContainer>
        <div className='sticky top-0 flex w-full flex-col items-center justify-center border bg-white pb-20 pt-2'>
          <Container className='flex flex-col gap-6'>
            <div className='flex w-full items-center justify-between lg:grid lg:grid-cols-10'>
              <Image
                src='/logo.svg'
                alt='nike logo'
                width={100}
                height={42.86}
                className='col-span-2 hidden h-[27.43px] w-16 lg:block'
              />
              <SearchInput
                name='search'
                value={searchQuery}
                setSearchQuery={setSearchQuery}
                onChange={(event) => handleSearchChange(event)}
              />
              <div className='col-span-2 flex items-center justify-end'>
                <Button onClick={() => setOnSearch(false)} variant='secondary'>
                  Cancel
                </Button>
              </div>
            </div>
            <div className='flex w-full flex-col items-center justify-between gap-4 lg:grid lg:grid-cols-10'>
              {searchQuery && products.length > 0 ? (
                <>
                  <TopSuggestions topSuggestions={topSuggestions} />
                  <ProductSearchList products={products} />
                </>
              ) : (
                <PopularSearchTerms
                  popularSearches={popularSearches}
                  className='start col-span-6 col-start-3 flex w-full flex-col gap-4'
                />
              )}
            </div>
          </Container>
        </div>
      </ModalContainer>
    )

  return null
}
