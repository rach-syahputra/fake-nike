import Image from 'next/image'
import Link from 'next/link'
import { capitalizeFirstLetter, cn, formatToRupiah } from '@/lib/utils'
import Heading from '../elements/Heading'

type ProductCardProps = {
  name: string
  slug: string
  category: string
  price: number
  imageUrl: string
  className?: string
}

export default function ProductCard({
  name,
  slug,
  category,
  price,
  imageUrl,
  className
}: ProductCardProps) {
  return (
    <Link
      href={`/products/${slug}`}
      className={cn('flex flex-col gap-2', className)}
    >
      <Image
        src={imageUrl}
        alt='Product image'
        width={500}
        height={500}
        style={{ objectFit: 'cover' }}
        className='aspect-square h-auto w-full bg-gray-200'
      />
      <div className='flex flex-col'>
        <Heading level={2}>{name}</Heading>
        <p className='font-[family-name:var(--font-helvetica-now-text)] text-sm text-gray-500 lg:text-base'>
          {capitalizeFirstLetter(category)}
        </p>
      </div>
      <p className='text-sm lg:text-base'>{formatToRupiah(price)}</p>
    </Link>
  )
}
