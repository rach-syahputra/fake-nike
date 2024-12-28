'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import Image from 'next/image'
import { popularSearches } from '@/lib/constants/products'
import { useSearchContext } from '@/context/SearchContext'
import { useFilterContext } from '@/context/FilterContext'
import Container from '../layouts/Container'
import ModalContainer from '../layouts/ModalContainer'
import SearchInput from './SearchInput'
import Button from '../elements/Button'
import ProductSearchList from '../products/ProductSearchList'
import PopularSearchTerms from './PopularSearchTerms'
import TopSuggestions from './TopSuggestions'

export default function SearchBar() {
  const router = useRouter()
  const pathname = usePathname()

  const { onSearch, setOnSearch } = useSearchContext()
  const { searchQuery, setSearchQuery } = useFilterContext()

  const [searchBarQuery, setSearchBarQuery] = useState<string>(
    searchQuery || ''
  )

  useEffect(() => {
    setSearchBarQuery(searchQuery)
  }, [searchQuery])

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()

    setSearchBarQuery(event.target.value)
  }

  const handleSearchEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      if (pathname !== '/search') router.push('/search')
      setOnSearch(false)
      setSearchQuery(searchBarQuery)
    }
  }

  if (onSearch)
    return (
      <ModalContainer>
        <div className='sticky top-0 flex w-full flex-col items-center justify-center border bg-white pb-20 pt-2'>
          <Container className='flex flex-col gap-6'>
            <div className='flex w-full items-center justify-between lg:grid lg:grid-cols-10'>
              <Link
                href='/'
                aria-label='Home page'
                className='col-span-2 hidden h-[27.43px] w-16 lg:block'
              >
                <Image
                  src='/logo.svg'
                  alt='nike logo'
                  width={100}
                  height={42.86}
                  className='h-full w-full'
                />
              </Link>

              <SearchInput
                name='search'
                value={searchBarQuery}
                setSearchBarQuery={setSearchBarQuery}
                onChange={(event) => handleSearchChange(event)}
                onKeyDown={(event) => handleSearchEnter(event)}
              />

              <div className='col-span-2 flex items-center justify-end'>
                <Button onClick={() => setOnSearch(false)} variant='secondary'>
                  Cancel
                </Button>
              </div>
            </div>
            <div className='flex w-full flex-col items-center justify-between gap-4 lg:grid lg:grid-cols-10'>
              {searchBarQuery ? (
                <>
                  <TopSuggestions />
                  <ProductSearchList />
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
