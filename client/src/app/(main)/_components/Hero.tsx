'use client'

import Image from 'next/image'

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

export default function Hero() {
  const { updateParams } = useFilterContext()

  const handleCTAClick = () => {
    updateParams({
      q: 'air max dn8'
    })
  }

  return (
    <CTASection>
      <CTASectionMedia>
        <Image
          src='/home/hero.png'
          alt='Hero banner'
          width={720}
          height={1280}
          className='h-[600px] w-full object-cover'
        />
      </CTASectionMedia>
      <CTASectionContent>
        <CTASectionHeader>
          <CTASectionTag>Just In</CTASectionTag>
          <CTASectionTitle>AIR MAX DN8</CTASectionTitle>
          <CTASectionDescription>
            Exploration 1 of 8: Kobbie Mainoo by Gabriel Moses
          </CTASectionDescription>
        </CTASectionHeader>
        <CTASectionButton onClick={() => handleCTAClick()}>
          Shop
        </CTASectionButton>
      </CTASectionContent>
    </CTASection>
  )
}
