'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { fetchFilteredProducts } from '@/lib/api/services'
import { IProductJson, ITopSuggestions } from '@/lib/types/types'
import { useSearchContext } from '@/context/SearchContext'

type TopSuggestionsType = {
  searchBarQuery: string
}

export default function TopSuggestions({ searchBarQuery }: TopSuggestionsType) {
  const router = useRouter()
  const { setOnSearch } = useSearchContext()
  const [topSuggestions, setTopSuggestions] = useState<ITopSuggestions[]>([])

  useEffect(() => {
    getTopSuggestions()
  }, [searchBarQuery])

  const getTopSuggestions = async () => {
    const data: IProductJson[] = await fetchFilteredProducts(searchBarQuery, {
      limit: 3
    })

    setTopSuggestions(
      data.map((item) => ({
        id: item.id,
        name: item.name
      }))
    )
  }

  const handleTopSuggestionClick = (id: string) => {
    router.push(`/shoes/${id}`)
    setOnSearch(false)
  }

  return (
    <div className='col-span-2 flex h-full flex-col items-start gap-4 place-self-start px-3'>
      <p className='font-[family-name:var(--font-helvetica-now-text)] text-sm text-gray-500'>
        Top Suggestions
      </p>
      <ul className='flex h-full flex-col'>
        {topSuggestions.map((topSuggestion, index) => (
          <li key={index} className='rounded-lg py-2'>
            <button
              onClick={() => handleTopSuggestionClick(topSuggestion.id)}
              className='line-clamp-2 py-2 font-[family-name:var(--font-helvetica-now-text-medium)] text-lg hover:text-gray-500'
            >
              {topSuggestion.name.toLocaleLowerCase()}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
