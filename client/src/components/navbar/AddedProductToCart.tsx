'use client'

import Image from 'next/image'
import Link from 'next/link'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import { formatToRupiah } from '@/lib/utils'
import { useCartContext } from '@/context/CartContext'
import Icon from '../elements/Icon'
import Button from '../elements/Button'
import CloseAddedProductButton from './CloseAddedProductButton'

export default function AddedProductToCart() {
  const { AddedProduct, cart } = useCartContext()

  if (AddedProduct) {
    return (
      <div className='absolute right-0 top-14 flex w-full flex-col items-start justify-center gap-6 rounded-lg bg-white p-6 shadow-md md:right-8 md:w-[400px]'>
        <div className='flex w-full items-start justify-between'>
          <div className='flex items-center gap-3'>
            <div className='flex h-6 w-6 items-center justify-center rounded-full bg-green-700'>
              <Icon icon={faCheck} className='h-3 w-3 text-white' />
            </div>
            <p>Added to Bag</p>
          </div>
          <CloseAddedProductButton />
        </div>

        <div className='flex items-start gap-3'>
          <Image
            src={AddedProduct.images[0].url}
            alt={AddedProduct.title}
            width={100}
            height={100}
            className='aspect-square w-24 rounded-md'
          />
          <div className='flex flex-col'>
            <p className='font-[family-name:var(--font-helvetica-now-text)] font-semibold'>
              {AddedProduct.title}
            </p>
            <p className='text-gray-500'>{AddedProduct.category.label}</p>
            <p className='text-gray-500'>Size {AddedProduct.size.label}</p>
            <p className='font-[family-name:var(--font-helvetica-now-text)] font-semibold'>
              {formatToRupiah(AddedProduct.price)}
            </p>
          </div>
        </div>

        <div className='flex w-full flex-col items-center justify-center gap-2'>
          <Link href='/cart' aria-label='Cart page' className='w-full'>
            <Button variant='outline' className='h-14 w-full'>
              View Bag ({cart.length})
            </Button>
          </Link>
          <Button className='h-14 w-full'>Checkout</Button>
        </div>
      </div>
    )
  }

  return null
}
