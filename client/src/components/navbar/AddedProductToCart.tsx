'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { fetchProduct } from '@/lib/api/services'
import { IAddedProductCard, IProductJson } from '@/lib/types/types'
import { capitalizeFirstLetter, formatToRupiah } from '@/lib/utils'
import { useCartContext } from '@/context/CartContext'
import Icon from '../elements/Icon'
import Button from '../elements/Button'
import CloseAddedProductButton from './CloseAddedProductButton'

export default function AddedProductToCart() {
  const { AddedProduct, cart } = useCartContext()
  const [product, setProduct] = useState<IAddedProductCard | null>(null)

  useEffect(() => {
    getProduct()
  }, [AddedProduct])

  const getProduct = async () => {
    const data: IProductJson[] = await fetchProduct(AddedProduct?.id || '')

    setProduct({
      id: data[0].id,
      category: data[0].category,
      name: data[0].name,
      price: data[0].price,
      imageUrl: data[0].imageUrls[0],
      size: AddedProduct?.size || ''
    })
  }

  if (AddedProduct && product) {
    return (
      <div className='absolute right-8 top-14 flex w-fit flex-col items-start justify-center gap-6 rounded-lg bg-white p-6'>
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
            src={product.imageUrl}
            alt='Product image'
            width={100}
            height={100}
            className='aspect-square w-24 rounded-md'
          />
          <div className='flex flex-col'>
            <p className='font-[family-name:var(--font-helvetica-now-text)] font-semibold'>
              {product.name}
            </p>
            <p className='text-gray-500'>
              {capitalizeFirstLetter(product.category)}
            </p>
            <p className='text-gray-500'>Size {product.size}</p>
            <p className='font-[family-name:var(--font-helvetica-now-text)] font-semibold'>
              {formatToRupiah(product.price)}
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
