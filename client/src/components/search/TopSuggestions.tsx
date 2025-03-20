'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import { ITopSuggestions } from '@/lib/types/products'
import { fetchGetProducts } from '@/lib/apis/products'
import { useSearchContext } from '@/context/SearchContext'

type TopSuggestionsType = {
  searchBarQuery: string
}

export default function TopSuggestions({ searchBarQuery }: TopSuggestionsType) {
  const router = useRouter()
  const { setOnSearch } = useSearchContext()
  const [topSuggestions, setTopSuggestions] = useState<ITopSuggestions[]>([])

  const getTopSuggestions = async () => {
    const response = await fetchGetProducts(searchBarQuery, {
      limit: 3
    })

    setTopSuggestions(
      response.data.products.map((product) => ({
        productSlug: product.slug,
        productStyleSlug: product.productStyle.slug,
        title: product.title
      }))
    )
  }

  const handleTopSuggestionClick = (
    productSlug: string,
    productStyleSlug: string
  ) => {
    router.push(`/n/${productSlug}/${productStyleSlug}`)
    setOnSearch(false)
  }

  useEffect(() => {
    getTopSuggestions()
  }, [searchBarQuery])

  return (
    <div className='col-span-2 flex h-full flex-col items-start gap-4 place-self-start px-0'>
      <p className='font-[family-name:var(--font-helvetica-now-text)] text-sm text-gray-500'>
        Top Suggestions
      </p>
      <ul className='flex h-full flex-col'>
        {topSuggestions.map((topSuggestion, index) => (
          <li key={index} className='rounded-lg'>
            <button
              onClick={() =>
                handleTopSuggestionClick(
                  topSuggestion.productSlug,
                  topSuggestion.productStyleSlug
                )
              }
              className='line-clamp-2 py-1 text-left font-[family-name:var(--font-helvetica-now-text-medium)] hover:text-gray-500'
            >
              {topSuggestion.title.toLocaleLowerCase()}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
