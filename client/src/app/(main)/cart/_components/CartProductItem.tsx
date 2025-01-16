'use client'

import Image from 'next/image'
import { ICartProductCard } from '@/lib/types/types'
import { capitalizeFirstLetter, formatToRupiah } from '@/lib/utils'
import Heading from '@/components/elements/Heading'
import CountControls from './CountControls'

export default function CartProductItem(product: ICartProductCard) {
  return (
    <div className='flex gap-3 border-b pb-10'>
      <div className='flex flex-col gap-3'>
        <Image
          src={product.imageUrl}
          alt='Product image'
          width={200}
          height={200}
          className='aspect-square w-[154px] bg-gray-200 sm:w-[164px]'
        />

        <CountControls
          id={product.id}
          size={product.size}
          count={product.count}
        />
      </div>
      <div className='flex flex-1 flex-col'>
        <div className='flex flex-col items-start justify-between sm:flex-row'>
          <Heading level={2} className='order-2 sm:order-1'>
            {product.name}
          </Heading>
          <p className='order-1 font-medium sm:order-2'>
            {formatToRupiah(product.price * product.count)}
          </p>
        </div>
        <p className='font-[family-name:var(--font-helvetica-now-text)] text-gray-500'>
          {capitalizeFirstLetter(product.category)}
        </p>

        <p className='font-[family-name:var(--font-helvetica-now-text)] text-gray-500'>
          Size <span className='underline'>{product.size}</span>
        </p>
      </div>
    </div>
  )
}
