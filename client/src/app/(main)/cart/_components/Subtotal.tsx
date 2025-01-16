'use client'

import { useEffect, useState } from 'react'
import { formatToRupiah } from '@/lib/utils'
import { useCartContext } from '@/context/CartContext'

export default function Subtotal() {
  const { cartProducts } = useCartContext()
  const [subtotal, setSubtotal] = useState<number>(0)

  useEffect(() => {
    getSubtotalPrice()
  }, [cartProducts])

  const getSubtotalPrice = () => {
    setSubtotal(
      cartProducts?.reduce(
        (total, product) => total + product.price * product.count,
        0
      ) || 0
    )
  }

  return (
    <div className='flex items-center justify-between'>
      <span>Subtotal</span>
      <span>{formatToRupiah(subtotal)},00</span>
    </div>
  )
}
