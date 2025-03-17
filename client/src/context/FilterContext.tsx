'use client'

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState
} from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

import { OrderType, SortByType } from '@/lib/types/products'

type UpdateParamsType = Partial<{
  q: string | null
  order: OrderType | null
  sortBy: SortByType | null
  categories: number[] | null
  sizes: number[] | null
}>

export type QueryType = {
  q?: string | null
  order?: OrderType | null
  sortBy?: SortByType | null
  categories?: number[] | null
  sizes?: number[] | null
}

interface IFilterContext {
  onSidebar: boolean
  setOnSidebar: Dispatch<SetStateAction<boolean>>
  onMobileFilterModal: boolean
  setOnMobileFilterModal: Dispatch<SetStateAction<boolean>>
  query: QueryType
  updateParams: (newParams: UpdateParamsType) => void
}

const FilterContext = createContext<IFilterContext | undefined>(undefined)

const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()

  const searchParams = useSearchParams()
  const queryParams = searchParams.get('q')
  const sortByParams = searchParams.get('sortBy') as SortByType
  const orderParams = searchParams.get('order') as OrderType
  const categoriesParams = searchParams.get('categories')
  const sizesParams = searchParams.get('sizes')

  const [onSidebar, setOnSidebar] = useState<boolean>(true)
  const [onMobileFilterModal, setOnMobileFilterModal] = useState<boolean>(false)

  const query: QueryType = {
    q: queryParams,
    order: orderParams,
    sortBy: sortByParams,
    categories: categoriesParams
      ? categoriesParams?.toString().split(',').map(Number)
      : [],
    sizes: sizesParams ? sizesParams?.toString().split(',').map(Number) : []
  }

  useEffect(() => {
    if (onMobileFilterModal) {
      window.scrollTo({
        top: 0
      })
      document.documentElement.style.overflowY = 'hidden'
    }

    return () => {
      document.documentElement.style.overflowY = 'scroll'
    }
  }, [onMobileFilterModal])

  const updateParams = (newParams: UpdateParamsType) => {
    const params = new URLSearchParams(searchParams)

    Object.entries(newParams).forEach(([key, value]) => {
      if (value === null) {
        params.delete(key) // Remove param
      } else if (Array.isArray(value)) {
        params.set(key, value.join(',')) // Update array param

        if (!params.get(key)?.length) {
          params.delete(key)
        }
      } else {
        params.set(key, value) // Update single param

        if (!params.get(key) && key !== 'q') {
          params.delete(key)
        }
      }
    })

    router.push(`/search?${params.toString()}`)
  }

  return (
    <FilterContext.Provider
      value={{
        onSidebar,
        setOnSidebar,
        onMobileFilterModal,
        setOnMobileFilterModal,
        query,
        updateParams
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}

const useFilterContext = (): IFilterContext => {
  const context = useContext(FilterContext)
  if (context === undefined) {
    throw new Error('useFilterContext must be used within a FilterProvider')
  }
  return context
}

export { FilterProvider, useFilterContext }
