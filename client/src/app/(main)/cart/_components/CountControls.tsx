'use client'

import { faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import { ISize } from '@/lib/types/products'
import { useCartContext } from '@/context/CartContext'
import Icon from '@/components/elements/Icon'

type CountControlsType = {
  id: number
  size: ISize
  count: number
}

export default function CountControls({ id, size, count }: CountControlsType) {
  const { increaseCount, decreaseCount } = useCartContext()

  return (
    <div className='flex w-fit items-center justify-between gap-3 rounded-full border p-3'>
      <button onClick={() => decreaseCount({ id, size })}>
        <Icon icon={faTrashCan} className='h-3.5 w-3.5 text-gray-900' />
      </button>
      <span className='flex w-8 items-center justify-center font-[family-name:var(--font-helvetica-now-text)]'>
        {count}
      </span>
      <button onClick={() => increaseCount({ id, size })}>
        <Icon icon={faPlus} className='h-3.5 w-3.5 text-gray-900' />
      </button>
    </div>
  )
}
