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

export default function FootballHero() {
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
          src='/football/football-banner.png'
          alt='Football banner'
          width={2880}
          height={1000}
          className='h-[600px] w-full object-cover'
        />
      </CTASectionMedia>
      <CTASectionContent>
        <CTASectionHeader>
          <CTASectionTitle>MADE FOR THE MOMENT</CTASectionTitle>
          <CTASectionDescription>
            Introducing Nike United. Six athletes. Three boots. One common goal.
          </CTASectionDescription>
        </CTASectionHeader>
        <CTASectionButton onClick={() => handleCTAClick()}>
          Shop
        </CTASectionButton>
      </CTASectionContent>
    </CTASection>
  )
}
