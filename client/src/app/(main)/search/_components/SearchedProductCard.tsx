import Image from 'next/image'
import Link from 'next/link'

import { IProductCard } from '@/lib/types/products'
import { capitalizeFirstLetter, cn, formatToRupiah } from '@/lib/utils'
import Heading from '@/components/elements/Heading'

interface SearchedProductCardProps extends IProductCard {
  className?: string
}

export default function SearchProductCard({
  id,
  title,
  category,
  price,
  image,
  className
}: SearchedProductCardProps) {
  return (
    <Link
      href={`/shoes/${id}`}
      className={cn('flex flex-col gap-2', className)}
    >
      <Image
        src={image}
        alt={title}
        width={500}
        height={500}
        style={{ objectFit: 'cover' }}
        className='aspect-square h-auto w-full bg-gray-200'
      />
      <div className='flex flex-col gap-2 p-3 lg:p-0'>
        <div className='flex flex-col'>
          <Heading level={2}>{title}</Heading>
          <p className='font-[family-name:var(--font-helvetica-now-text)] text-sm text-gray-500 lg:text-base'>
            {capitalizeFirstLetter(category)}
          </p>
        </div>
        <p className='text-sm lg:text-base'>{formatToRupiah(price, ',')}</p>
      </div>
    </Link>
  )
}
