'use client'

import {
  createContext,
  Dispatch,
  SetStateAction,
  Suspense,
  useContext,
  useState
} from 'react'
import { IProductCard } from '@/lib/types/types'

interface IFilteredProductsContext {
  products: IProductCard[]
  setProducts: Dispatch<SetStateAction<IProductCard[]>>
}

const FilteredProductsContext = createContext<
  IFilteredProductsContext | undefined
>(undefined)

const FilteredProductsProvider = ({
  children
}: {
  children: React.ReactNode
}) => {
  const [products, setProducts] = useState<IProductCard[]>([])

  return (
    <Suspense>
      <FilteredProductsContext.Provider value={{ products, setProducts }}>
        {children}
      </FilteredProductsContext.Provider>
    </Suspense>
  )
}

const useFilteredProductsContext = (): IFilteredProductsContext => {
  const context = useContext(FilteredProductsContext)
  if (context === undefined) {
    throw new Error(
      'useFilteredProducts must be used within a FilteredProductsProvider'
    )
  }
  return context
}

export { FilteredProductsProvider, useFilteredProductsContext }
