'use client'

import { useCartContext } from '@/context/CartContext'
import Image from 'next/image'

export default function Cart() {
  const { cart } = useCartContext()

  return (
    <div className='relative flex h-8 w-8 items-center justify-center rounded-full hover:bg-gray-200'>
      <Image
        src='/icons/market.png'
        alt='cart icon'
        width={40}
        height={40}
        className='h-auto w-[22px]'
      />
      <p className='absolute bottom-1.5 select-none text-[10px] font-bold'>
        {cart.length}
      </p>
    </div>
  )
}
