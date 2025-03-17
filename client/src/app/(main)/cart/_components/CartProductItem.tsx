'use client'

import Image from 'next/image'

import { formatToRupiah } from '@/lib/utils'
import { ICartProductCard } from '@/lib/types/carts'
import Heading from '@/components/elements/Heading'
import CountControls from './CountControls'

export default function CartProductItem({
  image,
  id,
  size,
  count,
  title,
  price,
  category
}: ICartProductCard) {
  return (
    <div className='flex gap-3 border-b pb-10'>
      <div className='flex flex-col gap-3'>
        <Image
          src={image || ''}
          alt={title || 'Product image'}
          width={200}
          height={200}
          className='aspect-square w-[154px] bg-gray-200 sm:w-[164px]'
        />

        <CountControls id={id} size={size} count={count || 0} />
      </div>
      <div className='flex flex-1 flex-col'>
        <div className='flex flex-col items-start justify-between sm:flex-row'>
          <Heading level={2} className='order-2 sm:order-1'>
            {title}
          </Heading>
          <p className='order-1 font-medium sm:order-2'>
            {formatToRupiah(price * count)}
          </p>
        </div>
        <p className='font-[family-name:var(--font-helvetica-now-text)] text-gray-500'>
          {category}
        </p>

        <p className='font-[family-name:var(--font-helvetica-now-text)] text-gray-500'>
          Size <span className='underline'>{size.label}</span>
        </p>
      </div>
    </div>
  )
}
