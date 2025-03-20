import Icon from '@/components/elements/Icon'
import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

type ImagePreviewType = {
  image: string
  prevImage: () => void
  nextImage: () => void
}

export default function ImagePreview({
  image,
  prevImage,
  nextImage
}: ImagePreviewType) {
  return (
    <div className='relative flex-1 overflow-hidden rounded-lg'>
      <Image
        src={image}
        alt='Product image preview'
        width={1000}
        height={1000}
        priority
        className='aspect-square w-full bg-gray-200'
      />
      <div className='absolute bottom-6 right-6 flex items-center justify-center gap-3'>
        <button
          onClick={prevImage}
          className='flex h-9 w-9 items-center justify-center rounded-full bg-white'
        >
          <Icon icon={faChevronLeft} className='h-4 w-4' />
        </button>
        <button
          onClick={nextImage}
          className='flex h-9 w-9 items-center justify-center rounded-full bg-white'
        >
          <Icon icon={faChevronRight} className='h-4 w-4' />
        </button>
      </div>
    </div>
  )
}
