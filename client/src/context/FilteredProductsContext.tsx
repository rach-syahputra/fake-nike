'use client'

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState
} from 'react'

import { IProductCard } from '@/lib/types/products'

interface IFilteredProductsContext {
  products: IProductCard[]
  setProducts: Dispatch<SetStateAction<IProductCard[]>>
  totalProducts: number
  setTotalProducts: Dispatch<SetStateAction<number>>
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
  const [totalProducts, setTotalProducts] = useState<number>(0)

  return (
    <FilteredProductsContext.Provider
      value={{ products, setProducts, totalProducts, setTotalProducts }}
    >
      {children}
    </FilteredProductsContext.Provider>
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
