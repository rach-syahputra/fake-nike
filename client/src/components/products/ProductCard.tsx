import Image from 'next/image'
import Link from 'next/link'

import { capitalizeFirstLetter, cn, formatToRupiah } from '@/lib/utils'
import { IProductCard } from '@/lib/types/products'
import Heading from '../elements/Heading'

interface ProductCardProps extends IProductCard {
  className?: string
}

export default function ProductCard({
  title,
  id,
  category,
  price,
  image,
  className
}: ProductCardProps) {
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
      <div className='flex flex-col'>
        <Heading level={2}>{title}</Heading>
        <p className='font-[family-name:var(--font-helvetica-now-text)] text-sm text-gray-500 lg:text-base'>
          {capitalizeFirstLetter(category)}
        </p>
      </div>
      <p className='text-sm lg:text-base'>{formatToRupiah(price, ',')}</p>
    </Link>
  )
}
