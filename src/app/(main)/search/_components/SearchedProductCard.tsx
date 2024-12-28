import Image from 'next/image'
import Link from 'next/link'
import { capitalizeFirstLetter, cn, formatToRupiah } from '@/lib/utils'
import Heading from '@/components/elements/Heading'

type SearchedProductCardProps = {
  name: string
  id: string
  category: string
  price: number
  imageUrl: string
  className?: string
}

export default function SearchProductCard({
  name,
  id,
  category,
  price,
  imageUrl,
  className
}: SearchedProductCardProps) {
  return (
    <Link
      href={`/products/${id}`}
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
      <div className='flex flex-col gap-2 p-3 lg:p-0'>
        <div className='flex flex-col'>
          <Heading level={2}>{name}</Heading>
          <p className='font-[family-name:var(--font-helvetica-now-text)] text-sm text-gray-500 lg:text-base'>
            {capitalizeFirstLetter(category)}
          </p>
        </div>
        <p className='text-sm lg:text-base'>{formatToRupiah(price)}</p>
      </div>
    </Link>
  )
}
