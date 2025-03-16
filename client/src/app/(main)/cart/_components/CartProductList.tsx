'use client'

import { useEffect } from 'react'

import { useCartContext } from '@/context/CartContext'
import CartProductItem from './CartProductItem'
import CartProductItemSkeleton from './loading/CartProductItemSkeleton'

export default function CartProductList() {
  const { isLoading, cart, cartProducts, getCartProducts } = useCartContext()

  useEffect(() => {
    getCartProducts()
  }, [cart])

  return (
    <div className='flex flex-col gap-5'>
      {isLoading ? (
        <>
          <CartProductItemSkeleton />
          <CartProductItemSkeleton />
        </>
      ) : cartProducts && cartProducts?.length > 0 ? (
        cartProducts.map((product, index) => (
          <CartProductItem key={index} {...product} />
        ))
      ) : (
        <p className='font-[family-name:var(--font-helvetica-now-text)]'>
          There are no items in your bag.
        </p>
      )}
    </div>
  )
}
