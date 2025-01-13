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

import { categoryData, sizeData, sortData } from '@/lib/constants/filter'
import { orderOptions } from '@/lib/constants/products'

export type ParamsType = {
  q?: string | null
  category?: string | null
  order?: string | null
  sort?: string | null
  size?: string | null
}

type StateType = {
  q?: string | null
  category?: string[] | null
  order?: string | null
  sort?: string | null
  size?: string[] | null
}

interface IFilterContext {
  onSidebar: boolean
  setOnSidebar: Dispatch<SetStateAction<boolean>>
  onMobileFilterModal: boolean
  setOnMobileFilterModal: Dispatch<SetStateAction<boolean>>
  state: StateType
  updateParams: (params: ParamsType, action?: 'add' | 'remove') => void
}

const FilterContext = createContext<IFilterContext | undefined>(undefined)

const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()

  const searchParams = useSearchParams()
  const queryParams = searchParams.get('q')
  const sortParams = searchParams.get('sort')
  const orderParams = searchParams.get('order')
  const categoryParams = searchParams.getAll('category')
  const sizeParams = searchParams.getAll('size')

  // initialize state
  const initialQuery = queryParams

  const initialOrder: string =
    orderOptions.filter(
      (orderOption) => orderOption.toLowerCase() === orderParams
    )[0] || 'asc'

  const initialSort: string = sortData.includes(sortParams || '')
    ? sortParams || 'newest'
    : 'newest'

  const initialCategories: string[] = categoryParams.filter((category) =>
    categoryData.includes(category)
  )

  const initialSizes: string[] = sizeParams.filter((size) =>
    sizeData.includes(size)
  )

  const [onSidebar, setOnSidebar] = useState<boolean>(true)
  const [onMobileFilterModal, setOnMobileFilterModal] = useState<boolean>(false)
  const state: StateType = {
    q: initialQuery,
    category: initialCategories,
    size: initialSizes,
    order: initialOrder,
    sort: initialSort
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

  const updateParams = (params: ParamsType, action?: 'add' | 'remove') => {
    const updatedParams = new URLSearchParams(searchParams)

    Object.entries(params).forEach(([key, value]) => {
      if (value === null) {
        updatedParams.delete(key)
      } else if (['category', 'size'].includes(key) && action) {
        const values = updatedParams.getAll(key)
        if (action === 'add' && !values.includes(value)) {
          updatedParams.append(key, value)
        }
        if (action === 'remove') {
          const filteredValues = values.filter((val) => val !== value)
          updatedParams.delete(key)
          filteredValues.forEach((val) => updatedParams.append(key, val))
        }
      } else {
        updatedParams.set(key, value)
      }
    })

    router.push(`/search?${updatedParams.toString()}`, { scroll: true })
  }

  return (
    <FilterContext.Provider
      value={{
        onSidebar,
        setOnSidebar,
        onMobileFilterModal,
        setOnMobileFilterModal,
        state,
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
