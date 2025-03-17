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

export default function MadEnergyPack() {
  const { updateParams } = useFilterContext()

  const handleCTAClick = () => {
    updateParams({
      q: '',
      categories: [5]
    })
  }

  return (
    <CTASection>
      <CTASectionMedia>
        <Image
          src='/men/men-mad-energy-pack.jpg'
          alt='Mad energy pack image'
          width={2880}
          height={1000}
          className='h-auto w-full'
        />
      </CTASectionMedia>
      <CTASectionContent>
        <CTASectionHeader>
          <CTASectionTag>Nike Football</CTASectionTag>
          <CTASectionTitle>MAD ENERGY PACK</CTASectionTitle>
          <CTASectionDescription>
            The Energy to Reach New Levels
          </CTASectionDescription>
        </CTASectionHeader>
        <CTASectionButton onClick={() => handleCTAClick()}>
          Shop
        </CTASectionButton>
      </CTASectionContent>
    </CTASection>
  )
}
