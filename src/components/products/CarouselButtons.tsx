'use client'

import { RefObject, useEffect, useState } from 'react'
import Link from 'next/link'
import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons'
import { cn } from '@/lib/utils'
import Button from '../elements/Button'
import Icon from '../elements/Icon'

type CarouselButtonsProps = {
  link?: {
    href: string
    label: string
  }
  ref: RefObject<HTMLDivElement | null>
}

export default function CarouselButtons({ link, ref }: CarouselButtonsProps) {
  const [isAtStart, setIsAtStart] = useState(true)
  const [isAtEnd, setIsAtEnd] = useState(false)

  useEffect(() => {
    const scrollContainer = ref.current

    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkScrollPosition)

      checkScrollPosition()

      return () =>
        scrollContainer.removeEventListener('scroll', checkScrollPosition)
    }
  }, [])

  const handlePrev = () => {
    if (ref.current) {
      ref.current.scrollBy({
        left: -400,
        behavior: 'smooth'
      })
    }
  }

  const handleNext = () => {
    if (ref.current) {
      ref.current.scrollBy({
        left: 400,
        behavior: 'smooth'
      })
    }
  }

  const checkScrollPosition = () => {
    if (ref.current) {
      const { scrollLeft, scrollWidth, clientWidth } = ref.current

      setIsAtStart(scrollLeft === 0)

      // if condition is used to prevent bug which causes isAtEnd becoming true at the first time render
      if (scrollLeft === 0) {
        setIsAtEnd(scrollLeft + clientWidth > scrollWidth)
      } else {
        setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 1)
      }
    }
  }

  return (
    <div className='hidden items-center gap-3 md:flex'>
      {link && (
        <Button variant='secondary' className='px-0'>
          <Link href={link.href} aria-label={`${link.label} page`}>
            {link.label}
          </Link>
        </Button>
      )}

      <div className='flex items-center gap-3'>
        {/* PREV */}
        <button
          onClick={handlePrev}
          className={cn(
            'flex h-12 w-12 items-center justify-center rounded-full bg-gray-200',
            {
              'bg-gray-100': isAtStart
            }
          )}
        >
          <Icon
            icon={faChevronLeft}
            className={cn('h-4 w-4 text-gray-900', {
              'text-gray-300': isAtStart
            })}
          />
        </button>

        {/* NEXT */}
        <button
          onClick={handleNext}
          className={cn(
            'flex h-12 w-12 items-center justify-center rounded-full bg-gray-200',
            {
              'bg-gray-100': isAtEnd
            }
          )}
        >
          <Icon
            icon={faChevronRight}
            className={cn('h-4 w-4 text-gray-900', {
              'text-gray-300': isAtEnd
            })}
          />
        </button>
      </div>
    </div>
  )
}
