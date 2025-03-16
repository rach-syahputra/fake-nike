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
  CTASectionTitle
} from '@/components/sections/CTASection'

export default function RunningHero() {
  const { updateParams } = useFilterContext()

  const handleCTAClick = () => {
    updateParams({
      q: 'vomero',
      categories: [3, 4]
    })
  }

  return (
    <CTASection>
      <CTASectionMedia>
        <Image
          src='/running/running-banner.png'
          alt='Running banner'
          width={2880}
          height={1000}
          className='h-[600px] w-full object-cover'
        />
      </CTASectionMedia>
      <CTASectionContent>
        <CTASectionHeader>
          <CTASectionTitle>VOMERO 18</CTASectionTitle>
          <CTASectionDescription>
            Max cushioning for the ultimate ride.
          </CTASectionDescription>
        </CTASectionHeader>
        <CTASectionButton onClick={() => handleCTAClick()}>
          Shop
        </CTASectionButton>
      </CTASectionContent>
    </CTASection>
  )
}
