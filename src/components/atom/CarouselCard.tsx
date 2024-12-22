import React from 'react'
import Image from 'next/image'

interface ICarouselCard {
    imageUrls?: string[]
    name?: string
    price?: number
    category?: string
}

export default function CarouselCard(item : ICarouselCard) {
  return (
    <div className='w-[400px] flex-shrink-0 space-y-1'>
        <Image alt={item.name || ''} src={item.imageUrls && item.imageUrls.length > 0 ? item.imageUrls[0] : ''} width={200} height={200} className='w-full h-[300px] object-cover rounded-lg'/>
        <p className='font-medium'>{item.name}</p>
        <p>{item.category}</p>
        <p className='font-medium'>Rp {item.price?.toLocaleString('id-ID')}</p>
    </div>
  )
}
