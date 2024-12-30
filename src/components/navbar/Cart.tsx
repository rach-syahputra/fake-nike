'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useCartContext } from '@/context/CartContext'

export default function Cart() {
  const { cart } = useCartContext()

  return (
    <div className='relative flex h-8 w-8 items-center justify-center rounded-full hover:bg-gray-200'>
      <Link href='/cart' aria-label='Cart page'>
        <Image
          src='/icons/market.png'
          alt='cart icon'
          width={40}
          height={40}
          className='h-auto w-[22px]'
        />
      </Link>
      <p className='absolute bottom-1.5 select-none text-[10px] font-bold'>
        {cart.length}
      </p>
    </div>
  )
}
