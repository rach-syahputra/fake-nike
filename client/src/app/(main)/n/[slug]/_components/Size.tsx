'use client'

import { useEffect } from 'react'

import { cn } from '@/lib/utils'
import { ISize } from '@/lib/types/products'
import { useCartContext } from '@/context/CartContext'
import Heading from '@/components/elements/Heading'

type SizeProps = {
  sizes: ISize[]
}

export default function Size({ sizes }: SizeProps) {
  const { selectedSize, setSelectedSize, errors, setErrors } = useCartContext()

  useEffect(() => {
    setSelectedSize(null)
  }, [])

  const handleSelectSize = (size: ISize) => {
    setErrors({ size: '' })
    setSelectedSize(selectedSize?.id === size.id ? null : size)
  }

  return (
    <div className='flex flex-col gap-3 font-[family-name:var(--font-helvetica-now-text)]'>
      <Heading
        level={2}
        className={cn({
          'text-red-500': errors?.size
        })}
      >
        Select Size
      </Heading>
      <ul
        className={cn('grid grid-cols-5 gap-2 lg:grid-cols-4', {
          'rounded-lg border border-red-500': errors?.size
        })}
      >
        {sizes.map((size, index) => (
          <div
            key={index}
            onClick={() => handleSelectSize(size)}
            className={cn(
              'flex h-11 cursor-pointer select-none items-center justify-center rounded-md border',
              {
                'border-black': selectedSize?.id === size.id
              }
            )}
          >
            {size.label}
          </div>
        ))}
      </ul>
      {errors?.size && <p className='text-red-500'>{errors.size}</p>}
    </div>
  )
}
