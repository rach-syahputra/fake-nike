'use client'

import Heading from '@/components/elements/Heading'
import { useCartContext } from '@/context/CartContext'
import { cn } from '@/lib/utils'

type SizeProps = {
  sizes: number[]
}

export default function Size({ sizes }: SizeProps) {
  const { selectedSize, setSelectedSize, errors, setErrors } = useCartContext()

  const handleSelectSize = (size: string) => {
    setErrors({ size: '' })
    setSelectedSize(selectedSize === size ? '' : size)
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
            onClick={() => handleSelectSize(size.toString())}
            className={cn(
              'flex h-11 cursor-pointer select-none items-center justify-center rounded-md border',
              {
                'border-black': selectedSize === size.toString()
              }
            )}
          >
            {size}
          </div>
        ))}
      </ul>
      {errors?.size && <p className='text-red-500'>{errors.size}</p>}
    </div>
  )
}
