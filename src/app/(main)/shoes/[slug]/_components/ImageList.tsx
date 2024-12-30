'use client'

import { Dispatch, SetStateAction } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import ImageListSkeleton from './loading/ImageListSkeleton'

type ImageListType = {
  images: string[]
  currentIndex: number
  setCurrentIndex: Dispatch<SetStateAction<number>>
  className?: string
}

export default function ImageList({
  images,
  currentIndex,
  setCurrentIndex,
  className
}: ImageListType) {
  return (
    <div
      className={cn(
        'hidden w-[60px] flex-col items-end gap-2 rounded-lg lg:flex',
        className
      )}
    >
      {images && images.length > 0 ? (
        images?.map((image, index) => (
          <div
            key={index}
            onMouseEnter={() => setCurrentIndex(index)}
            className='group relative w-[60px] overflow-hidden rounded-lg'
          >
            <div
              className={cn(
                'absolute left-0 top-0 h-full w-full bg-black bg-opacity-0 group-hover:bg-opacity-20',
                {
                  'bg-opacity-20': currentIndex === index
                }
              )}
            ></div>
            <Image
              src={image}
              alt='Shoe image'
              width={100}
              height={100}
              style={{ objectFit: 'cover' }}
              className='aspect-square w-full'
            />
          </div>
        ))
      ) : (
        <>
          <ImageListSkeleton />
          <ImageListSkeleton />
          <ImageListSkeleton />
        </>
      )}
    </div>
  )
}
