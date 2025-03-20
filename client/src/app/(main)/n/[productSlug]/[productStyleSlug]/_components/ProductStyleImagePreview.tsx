import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { IProductStylePreview } from '@/lib/types/products'
import { cn } from '@/lib/utils'

type ProductStyleImagePreviewProps = {
  productSlug: string
  currentProductStyle: string
  images: IProductStylePreview[]
}

function ProductStyleImagePreview({
  productSlug,
  currentProductStyle,
  images
}: ProductStyleImagePreviewProps) {
  return (
    <div className='flex w-full flex-wrap gap-1'>
      {images.map((image, index) => (
        <Link
          key={index}
          href={`/n/${productSlug}/${image.slug}`}
          aria-label='Product detail'
          className={cn(
            'cursor-pointer overflow-hidden rounded-lg border border-white bg-gray-200 hover:border-black',
            {
              'border-black': currentProductStyle === image.slug
            }
          )}
        >
          <Image
            src={image.image}
            alt='Product style image'
            width={120}
            height={120}
            className='h-[60px] w-[60px] object-cover'
          />
        </Link>
      ))}
    </div>
  )
}

export default ProductStyleImagePreview
