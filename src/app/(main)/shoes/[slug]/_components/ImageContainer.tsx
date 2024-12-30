'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import ImageList from './ImageList'
import ImagePreview from './ImagePreview'

type ImageContainerProps = {
  images: string[]
  className?: string
}

export default function ImageContainer({
  images,
  className
}: ImageContainerProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  const prevImage = () => {
    setCurrentIndex((current) =>
      current === 0 ? images.length - 1 : currentIndex - 1
    )
  }

  const nextImage = () => {
    setCurrentIndex((current) =>
      current === images.length - 1 ? 0 : currentIndex + 1
    )
  }

  return (
    <div
      className={cn(
        'hidden gap-4 lg:sticky lg:top-[92px] lg:flex lg:pl-12',
        className
      )}
    >
      <ImageList
        images={images}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
      <ImagePreview
        image={images[currentIndex]}
        prevImage={prevImage}
        nextImage={nextImage}
      />
    </div>
  )
}
