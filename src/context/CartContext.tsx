'use client'

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState
} from 'react'
import { getLocalStorage, setLocalStorage } from '@/hooks/local-storage'
import { cartKey } from '@/lib/constants/cart'
import { IAddedProduct, ICart, ICartContextErrors } from '@/lib/types/types'

interface ICartContext {
  cart: ICart[]
  addToCart: ({ id, size }: { id: string; size: number }) => void
  selectedSize: string
  setSelectedSize: Dispatch<SetStateAction<string>>
  errors: ICartContextErrors | null
  setErrors: Dispatch<SetStateAction<ICartContextErrors | null>>
  AddedProduct: IAddedProduct | null
  setAddedProduct: Dispatch<SetStateAction<IAddedProduct | null>>
}

const CartContext = createContext<ICartContext | undefined>(undefined)

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<ICart[]>([])
  const [selectedSize, setSelectedSize] = useState<string>('')
  const [AddedProduct, setAddedProduct] = useState<IAddedProduct | null>(null)
  const [errors, setErrors] = useState<ICartContextErrors | null>(null)

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const cartFromLocalStorage: ICart[] | null = getLocalStorage(cartKey)

      setCart(cartFromLocalStorage ? cartFromLocalStorage : [])
    }

    setSelectedSize('')
  }, [])

  useEffect(() => {
    setLocalStorage(cartKey, cart)
  }, [cart])

  const addToCart = ({ id, size }: { id: string; size: number }) => {
    console.log('addToCart is called')
    if (size) {
      setErrors({ size: '' })

      setCart((prevState) => {
        const existingIndex = prevState.findIndex(
          (item) => item.id === id && item.size === size
        )

        if (existingIndex !== -1) {
          const updatedCart = [...prevState]
          updatedCart[existingIndex].count += 1

          return updatedCart
        }

        return [...prevState, { id, size, count: 1 }]
      })

      setAddedProduct({ id: id, size: size.toString() })

      setTimeout(() => {
        setAddedProduct(null)
      }, 4000)
    } else {
      setErrors({ size: 'Please select a size' })
    }
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        selectedSize,
        setSelectedSize,
        errors,
        setErrors,
        AddedProduct,
        setAddedProduct
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

const useCartContext = (): ICartContext => {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCartContext must be used within a CartProvider')
  }
  return context
}

export { CartProvider, useCartContext }
