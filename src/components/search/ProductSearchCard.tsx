'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { capitalizeFirstLetter, cn, formatToRupiah } from '@/lib/utils'
import { useSearchContext } from '@/context/SearchContext'
import Heading from '../elements/Heading'

type ProductSearchCardProps = {
  name: string
  id: string
  category: string
  price: number
  imageUrl: string
  className?: string
}

export default function ProductSearchCard({
  name,
  id,
  category,
  price,
  imageUrl,
  className
}: ProductSearchCardProps) {
  const router = useRouter()
  const { setOnSearch } = useSearchContext()

  const handleProductSearchCardClick = (id: string) => {
    router.push(`/shoes/${id}`)
    setOnSearch(false)
  }

  return (
    <button
      onClick={() => handleProductSearchCardClick(id)}
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
        <Heading level={2} className='text-left'>
          {name}
        </Heading>
        <p className='text-left font-[family-name:var(--font-helvetica-now-text)] text-sm text-gray-500 lg:text-base'>
          {capitalizeFirstLetter(category)}
        </p>
      </div>
      <p className='text-sm lg:text-base'>{formatToRupiah(price, ',')}</p>
    </button>
  )
}
