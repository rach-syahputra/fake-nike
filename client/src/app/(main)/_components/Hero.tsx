'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

import { cn } from '@/lib/utils'
import { BANNERS } from '@/lib/constants/heros'
import { useFilterContext } from '@/context/FilterContext'
import {
  CTASection,
  CTASectionButton,
  CTASectionContent,
  CTASectionDescription,
  CTASectionHeader,
  CTASectionMedia,
  CTASectionTag,
  CTASectionTitle
} from '@/components/sections/CTASection'
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'

export default function Hero() {
  const { updateParams } = useFilterContext()
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  const handleCTAClick = () => {
    updateParams({
      q: 'air max dn8'
    })
  }

  useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap())

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <Carousel
      opts={{
        duration: 40,
        loop: true
      }}
      setApi={setApi}
      className='w-full'
    >
      <CarouselContent>
        {BANNERS.map((banner, index) => (
          <CarouselItem key={index} className='pl-0'>
            <CTASection
              parallax
              className='bg-gray-200 px-0 md:px-0 lg:px-0 xl:px-0'
            >
              <CTASectionMedia>
                <div className='grid h-[700px] grid-cols-2'>
                  {banner.assets.map((asset, index) =>
                    asset.format === 'image' ? (
                      <Image
                        key={index}
                        src={asset.url}
                        alt='Hero banner'
                        width={720}
                        height={1280}
                        className='aspect-square h-auto w-full object-cover'
                      />
                    ) : (
                      <video
                        key={index}
                        preload='auto'
                        autoPlay
                        loop
                        muted
                        className='aspect-square h-auto w-full object-cover'
                      >
                        <source src={asset.url} />
                        Your browser does not support the video tag.
                      </video>
                    )
                  )}
                </div>
              </CTASectionMedia>
              <CTASectionContent>
                <CTASectionHeader>
                  <CTASectionTag>{banner.content.tag}</CTASectionTag>
                  <CTASectionTitle>{banner.content.title}</CTASectionTitle>
                  <CTASectionDescription>
                    {banner.content.description}
                  </CTASectionDescription>
                </CTASectionHeader>
                <CTASectionButton onClick={() => handleCTAClick()}>
                  Shop
                </CTASectionButton>
              </CTASectionContent>
            </CTASection>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className='absolute bottom-0 right-4 z-20 flex w-fit items-center justify-center gap-2'>
        <CarouselPrevious className='static flex items-center justify-center border-gray-300 bg-gray-300' />
        <CarouselNext className='static flex items-center justify-center border-gray-300 bg-gray-300' />
      </div>

      <div className='absolute bottom-10 flex w-full -translate-x-[7.5px] items-center justify-center'>
        <div className='flex items-center justify-center gap-1.5 justify-self-start'>
          {Array.from({ length: BANNERS.length }).map((_, index) => (
            <div
              key={index}
              className={cn('h-1.5 w-1.5 rounded-full bg-gray-400', {
                'bg-white': current === index
              })}
            ></div>
          ))}
        </div>
      </div>
    </Carousel>
  )
}
