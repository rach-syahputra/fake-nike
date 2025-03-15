'use client'

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

export default function HaveAHardYear() {
  const { updateParams } = useFilterContext()

  const handleCTAClick = () => {
    updateParams({
      q: 'kobe'
    })
  }

  return (
    <CTASection>
      <CTASectionMedia>
        <video
          preload='auto'
          autoPlay
          loop
          muted
          className='aspect-[3_/_4] h-auto w-full object-cover lg:aspect-auto'
        >
          <source src='/video/Nike Just Do It  - Landing Page.mov' />
          Your browser does not support the video tag.
        </video>
      </CTASectionMedia>
      <CTASectionContent>
        <CTASectionHeader>
          <CTASectionTitle>HAVE A HARD YEAR</CTASectionTitle>
          <CTASectionDescription>
            This isn&rsquo;t the Year of Snake. This is the Year of the Mamba
          </CTASectionDescription>
        </CTASectionHeader>
        <CTASectionButton onClick={() => handleCTAClick()}>
          Shop
        </CTASectionButton>
      </CTASectionContent>
    </CTASection>
  )
}
