'use client'

import Heading from '@/components/elements/Heading'
import { cn } from '@/lib/utils'
import { useState } from 'react'

type SizeProps = {
  sizes: number[]
}

export default function Size({ sizes }: SizeProps) {
  const [selectedSize, setSelectedSize] = useState<string>('')

  const handleSelectSize = (size: string) => {
    setSelectedSize(selectedSize === size ? '' : size)
  }

  return (
    <div className='flex flex-col gap-3 font-[family-name:var(--font-helvetica-now-text)]'>
      <Heading level={2}>Select Size</Heading>
      <ul className='grid grid-cols-5 gap-2 lg:grid-cols-4'>
        {sizes.map((size, index) => (
          <div
            key={index}
            onClick={() => handleSelectSize(size.toString())}
            className={cn(
              'flex h-11 cursor-pointer items-center justify-center rounded-md border',
              {
                'border-black': selectedSize === size.toString()
              }
            )}
          >
            {size}
          </div>
        ))}
      </ul>
    </div>
  )
}
