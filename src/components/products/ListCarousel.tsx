'use client'

import React, { useRef } from 'react'

import Container from '../layouts/Container'
import Heading from '../elements/Heading'
import CarouselButtons from './CarouselButtons'

type ListCarouselProps = {
  title: string
  link?: {
    href: string
    label: string
  }
  children: React.ReactNode
}

export default function ListCarousel({
  title,
  link,
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
        <Container className='grid w-fit grid-flow-col gap-3 pb-6'>
          {children}
        </Container>
      </div>
    </section>
  )
}
