'use client'

import {
  createContext,
  Dispatch,
  SetStateAction,
  Suspense,
  useContext,
  useEffect,
  useState
} from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { categoryData, sizeData, sortData } from '@/lib/constants/filter'
import { orderOptions } from '@/lib/constants/products'

interface IFilterContext {
  onSidebar: boolean
  setOnSidebar: Dispatch<SetStateAction<boolean>>
  onMobileFilterModal: boolean
  setOnMobileFilterModal: Dispatch<SetStateAction<boolean>>
  searchQuery: string
  setSearchQuery: Dispatch<SetStateAction<string>>
  sort: string
  setSort: Dispatch<SetStateAction<string>>
  order: string
  setOrder: Dispatch<SetStateAction<string>>
  categories: string[]
  setCategories: Dispatch<SetStateAction<string[]>>
  sizes: string[]
  setSizes: Dispatch<SetStateAction<string[]>>
  openFilterActions: boolean
  setOpenFilterActions: Dispatch<SetStateAction<boolean>>
  selectedFilterCount: number
  updateSearchURL: () => void
}

const FilterContext = createContext<IFilterContext | undefined>(undefined)

const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()
  const pathname = usePathname()

  const searchParams = useSearchParams()
  const queryParams = searchParams.get('q')
  const sortParams = searchParams.get('sort')
  const orderParams = searchParams.get('order')
  const categoryParams = searchParams.getAll('category')
  const sizeParams = searchParams.getAll('size')

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
  const [searchQuery, setSearchQuery] = useState<string>(initialQuery || '')
  const [order, setOrder] = useState<string>(initialOrder)
  const [sort, setSort] = useState<string>(initialSort)
  const [categories, setCategories] = useState<string[]>(
    initialCategories || []
  )
  const [sizes, setSizes] = useState<string[]>(initialSizes || [])
  const [openFilterActions, setOpenFilterActions] = useState<boolean>(false)
  const [selectedFilterCount, setSelectedFilterCount] = useState<number>(0)

  useEffect(() => {
    const filterCount = categories.length + sizes.length

    setSelectedFilterCount(filterCount)
    setOpenFilterActions(filterCount > 0)

    updateSearchURL()
  }, [searchQuery, sort, order, categories, sizes, pathname])

  useEffect(() => {
    if (onMobileFilterModal) {
      // hide overvlow y scroll
      document.documentElement.style.overflowY = 'hidden'
    }

    return () => {
      document.documentElement.style.overflowY = 'scroll'
    }
  }, [onMobileFilterModal])

  const updateSearchURL = () => {
    if (pathname === '/search') {
      // Update URL Query Params
      const params = new URLSearchParams(searchParams)

      // Update q params
      if (searchQuery) {
        params.set('q', searchQuery)
      } else {
        params.set('q', '')
      }

      // Update category params
      if (categories.length > 0) {
        params.set('category', categories.join(','))
      } else {
        params.delete('category')
      }

      // Update size params
      if (sizes.length > 0) {
        params.set('size', sizes.join(','))
      } else {
        params.delete('size')
      }

      // Update sort params
      if (sort) {
        params.set('sort', sort)
      } else {
        params.delete('sort')
      }

      // Update order params
      if (order) {
        params.set('order', order)
      } else {
        params.delete('order')
      }

      router.push(`/search?${params.toString()}`)
    }
  }

  return (
    <Suspense>
      <FilterContext.Provider
        value={{
          onSidebar,
          setOnSidebar,
          onMobileFilterModal,
          setOnMobileFilterModal,
          searchQuery,
          setSearchQuery,
          sort,
          setSort,
          order,
          setOrder,
          categories,
          setCategories,
          sizes,
          setSizes,
          openFilterActions,
          setOpenFilterActions,
          selectedFilterCount,
          updateSearchURL
        }}
      >
        {children}
      </FilterContext.Provider>
    </Suspense>
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
