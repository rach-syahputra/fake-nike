'use client'

import { faX } from '@fortawesome/free-solid-svg-icons'
import Icon from '../elements/Icon'
import { useCartContext } from '@/context/CartContext'

export default function CloseAddedProductButton() {
  const { setAddedProduct } = useCartContext()

  return (
    <button
      onClick={() => setAddedProduct(null)}
      className='flex h-8 w-8 items-center justify-center rounded-full bg-gray-100'
    >
      <Icon icon={faX} className='h-4 w-4' />
    </button>
  )
}
