'use client'

import { useFilterContext } from '@/context/FilterContext'
import { useSearchContext } from '@/context/SearchContext'
import { usePathname, useRouter } from 'next/navigation'

type PopularSearchTermsProps = {
  popularSearches: string[]
  className?: string
}

export default function PopularSearchTerms({
  popularSearches,
  className
}: PopularSearchTermsProps) {
  const router = useRouter()
  const pathname = usePathname()

  const { setOnSearch } = useSearchContext()
  const { setSearchQuery } = useFilterContext()

  const handlePopularSearch = (query: string) => {
    if (pathname !== '/search') router.push('/search')
    setSearchQuery(query)
    setOnSearch(false)
  }

  return (
    <div className={className}>
      <span className='text-sm text-gray-500 lg:text-base'>
        Popular Search Terms
      </span>
      <ul className='flex flex-wrap gap-4'>
        {popularSearches.map((popularSearch, index) => (
          <li key={index}>
            <button
              onClick={() => handlePopularSearch(popularSearch)}
              className='flex h-8 select-none items-center justify-center rounded-full bg-gray-200 px-4'
            >
              {popularSearch}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
