'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'

type ImageCarouselContainerProps = {
  images: string[]
}

export default function ImageCarouselContainer({
  images
}: ImageCarouselContainerProps) {
  const [api, setApi] = useState<CarouselApi>()
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCurrentIndex(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrentIndex(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div className='relative lg:hidden'>
      <Carousel setApi={setApi} className='w-full'>
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className='pl-1'>
              <div>
                <Image
                  src={image}
                  alt='Product image'
                  width={500}
                  height={500}
                  className='aspect-square w-full'
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className='absolute bottom-6 flex w-full items-center justify-center gap-2'>
        {images.map((_, index) => (
          <div
            key={index}
            className={cn('h-2 w-2 rounded-full bg-gray-300', {
              'bg-gray-900': currentIndex === index + 1
            })}
          ></div>
        ))}
      </div>
    </div>
  )
}
