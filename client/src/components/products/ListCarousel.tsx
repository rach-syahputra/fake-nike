'use client'

import React, { useRef } from 'react'

import Container from '../layouts/Container'
import Heading from '../elements/Heading'
import CarouselButtons from './CarouselButtons'
import { cn } from '@/lib/utils'

type ListCarouselProps = {
  title: string
  link?: {
    href: string
    label: string
  }
  className?: string
  children: React.ReactNode
}

export default function ListCarousel({
  title,
  link,
  className,
  children
}: ListCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null)

  return (
    <section className='flex flex-col gap-6'>
      <Container className='flex items-center justify-between'>
        <Heading level={1}>{title}</Heading>
        {link ? (
          <CarouselButtons
            link={{ href: link.href, label: link.label }}
            ref={scrollContainerRef}
          />
        ) : (
          <CarouselButtons ref={scrollContainerRef} />
        )}
      </Container>
      <div ref={scrollContainerRef} className='scrollbar overflow-x-scroll'>
        <Container
          className={cn('grid w-fit grid-flow-col gap-3 pb-6', className)}
        >
          {children}
        </Container>
      </div>
    </section>
  )
}
