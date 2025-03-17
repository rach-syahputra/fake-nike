'use client'

import { useEffect, useState } from 'react'
import { formatToRupiah } from '@/lib/utils'
import { useCartContext } from '@/context/CartContext'

export default function Total() {
  const { cartProducts } = useCartContext()
  const [total, setTotal] = useState<number>(0)

  useEffect(() => {
    getTotalPrice()
  }, [cartProducts])

  const getTotalPrice = () => {
    setTotal(
      cartProducts?.reduce(
        (acc, product) => acc + product.price * product.count,
        0
      ) || 0
    )
  }

  return (
    <div className='flex items-center justify-between border-b border-t py-4'>
      <span>Total</span>
      <span className='font-semibold'>{formatToRupiah(total)},00</span>
    </div>
  )
}
