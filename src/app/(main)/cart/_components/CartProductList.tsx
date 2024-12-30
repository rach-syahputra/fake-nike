'use client'

import { useCartContext } from '@/context/CartContext'
import CartProductItem from './CartProductItem'
import CartProductItemSkeleton from './loading/CartProductItemSkeleton'

export default function CartProductList() {
  const { cartProducts } = useCartContext()

  return (
    <div className='flex flex-col gap-5'>
      {cartProducts && cartProducts?.length > 0 ? (
        cartProducts.map((product, index) => (
          <CartProductItem key={index} {...product} />
        ))
      ) : (
        <>
          <CartProductItemSkeleton />
          <CartProductItemSkeleton />
        </>
      )}
    </div>
  )
}
