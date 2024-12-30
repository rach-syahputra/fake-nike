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
import {
  IAddedProduct,
  ICart,
  ICartContextErrors,
  ICartProductCard,
  IProductJson
} from '@/lib/types/types'
import { fetchCartProduct } from '@/lib/api/services'

interface ICartContext {
  cart: ICart[]
  addToCart: ({ id, size }: { id: string; size: number }) => void
  selectedSize: string
  setSelectedSize: Dispatch<SetStateAction<string>>
  errors: ICartContextErrors | null
  setErrors: Dispatch<SetStateAction<ICartContextErrors | null>>
  AddedProduct: IAddedProduct | null
  setAddedProduct: Dispatch<SetStateAction<IAddedProduct | null>>
  cartProducts: ICartProductCard[] | undefined
  setCartProducts: Dispatch<SetStateAction<ICartProductCard[] | undefined>>
  increaseCount: ({ id, size }: { id: string; size: number }) => void
  decreaseCount: ({ id, size }: { id: string; size: number }) => void
}

const CartContext = createContext<ICartContext | undefined>(undefined)

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<ICart[]>([])
  const [cartProducts, setCartProducts] = useState<
    ICartProductCard[] | undefined
  >(undefined)
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
    updateCartProducts()
  }, [cart])

  const addToCart = ({ id, size }: { id: string; size: number }) => {
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

  const updateCartProducts = async () => {
    const cartProductIds = cart?.map((data) => data.id)

    const data: IProductJson[] = await fetchCartProduct(cartProductIds)

    const mergedData: ICartProductCard[] | undefined = cart?.map((cart) => {
      const product = data.find((item) => item.id === cart.id)

      return {
        size: cart.size,
        count: cart.count,
        name: product?.name || '',
        id: product?.id || '',
        category: product?.category || '',
        price: product?.price || 0,
        imageUrl: product?.imageUrls[0] || ''
      }
    })

    setCartProducts(mergedData)
  }

  const increaseCount = ({ id, size }: { id: string; size: number }) => {
    setCart((prevState) => {
      const existingIndex = prevState.findIndex(
        (item) => item.id === id && item.size === size
      )

      if (existingIndex !== -1) {
        const updatedCart = [...prevState]
        updatedCart[existingIndex].count += 1

        return updatedCart
      }

      return [...prevState]
    })
  }

  const decreaseCount = ({ id, size }: { id: string; size: number }) => {
    setCart((prevState) => {
      const existingIndex = prevState.findIndex(
        (item) => item.id === id && item.size === size
      )

      if (existingIndex !== -1) {
        const updatedCart = [...prevState]

        updatedCart[existingIndex].count -= 1

        if (updatedCart[existingIndex].count === 0) {
          updatedCart.splice(existingIndex, 1)
        }

        return updatedCart
      }

      return [...prevState]
    })
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
        setAddedProduct,
        cartProducts,
        setCartProducts,
        increaseCount,
        decreaseCount
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
