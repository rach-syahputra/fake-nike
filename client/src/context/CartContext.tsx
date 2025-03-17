'use client'

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState
} from 'react'

import { cartKey } from '@/lib/constants/cart'
import {
  ICart,
  ICartContextErrors,
  ICartProductCard,
  IUpdateCart,
  IUpdateCartCount
} from '@/lib/types/carts'
import { ISize } from '@/lib/types/products'
import { fetchGetCartProducts } from '@/lib/apis/products'
import { getLocalStorage, setLocalStorage } from '@/hooks/local-storage'

interface ICartContext {
  cart: ICart[]
  addToCart: ({ id, size }: IUpdateCart) => void
  selectedSize: ISize | null
  setSelectedSize: Dispatch<SetStateAction<ISize | null>>
  errors: ICartContextErrors | null
  setErrors: Dispatch<SetStateAction<ICartContextErrors | null>>
  AddedProduct: IUpdateCart | null
  setAddedProduct: Dispatch<SetStateAction<IUpdateCart | null>>
  cartProducts: ICartProductCard[]
  setCartProducts: Dispatch<SetStateAction<ICartProductCard[]>>
  isLoading: boolean
  setIsLoading: Dispatch<SetStateAction<boolean>>
  increaseCount: ({ id, size }: IUpdateCartCount) => void
  decreaseCount: ({ id, size }: IUpdateCartCount) => void
  getCartProducts: () => void
}

const CartContext = createContext<ICartContext | undefined>(undefined)

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<ICart[]>([])
  const [cartProducts, setCartProducts] = useState<ICartProductCard[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [selectedSize, setSelectedSize] = useState<ISize | null>(null)
  const [AddedProduct, setAddedProduct] = useState<IUpdateCart | null>(null)
  const [errors, setErrors] = useState<ICartContextErrors | null>(null)

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const cartFromLocalStorage: ICart[] | null = getLocalStorage(cartKey)

      setCart(cartFromLocalStorage ? cartFromLocalStorage : [])
    }

    setSelectedSize(null)
  }, [])

  const addToCart = (product: IUpdateCart) => {
    if (product.size) {
      setErrors({ size: '' })

      setCart((prevState) => {
        const existingIndex = prevState.findIndex(
          (item) => item.id === product.id && item.size.id === product.size.id
        )

        if (existingIndex !== -1) {
          const updatedCart = [...prevState]
          updatedCart[existingIndex].count += 1

          return updatedCart
        }

        return [...prevState, { id: product.id, size: product.size, count: 1 }]
      })

      setAddedProduct(product)

      setTimeout(() => {
        setAddedProduct(null)
      }, 4000)
    } else {
      setErrors({ size: 'Please select a size' })
    }
  }

  const getCartProducts = async () => {
    try {
      setIsLoading(true)

      const cartProductIds = cart.map((item) => item.id)

      if (cartProductIds.length > 0) {
        const response = await fetchGetCartProducts(cartProductIds)
        const data = response.data

        const cartData: ICartProductCard[] = cart
          .map((cart) => {
            const product = data.products.find((item) => item.id === cart.id)

            return product
              ? {
                  id: product?.id,
                  slug: product?.slug,
                  title: product?.title,
                  category: product?.category,
                  createdAt: product?.createdAt,
                  image: product?.image,
                  price: product?.price,
                  size: cart.size,
                  count: cart.count
                }
              : null
          })
          .filter((item) => item !== null)

        setCartProducts(cartData)
      } else {
        setCartProducts([])
      }
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  const increaseCount = ({ id, size }: IUpdateCartCount) => {
    setCart((prevState) => {
      const existingIndex = prevState.findIndex(
        (item) => item.id === id && item.size.id === size.id
      )

      if (existingIndex !== -1) {
        const updatedCart = [...prevState]
        updatedCart[existingIndex].count += 1

        return updatedCart
      }

      return [...prevState]
    })
  }

  const decreaseCount = ({ id, size }: IUpdateCartCount) => {
    setCart((prevState) => {
      const existingIndex = prevState.findIndex(
        (item) => item.id === id && item.size.id === size.id
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

  useEffect(() => {
    setLocalStorage(cartKey, cart)
    getCartProducts()
  }, [cart])

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
        isLoading,
        setIsLoading,
        increaseCount,
        decreaseCount,
        getCartProducts
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
