'use client'

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

export default function TheNikeSwiftCollection() {
  const { updateParams } = useFilterContext()

  const handleCTAClick = () => {
    updateParams({ q: '', category: 'women' })
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
          <source src='/video/Women.mov' />
          Your browser does not support the video tag.
        </video>
      </CTASectionMedia>
      <CTASectionContent>
        <CTASectionHeader>
          <CTASectionTag>Run Ready</CTASectionTag>
          <CTASectionTitle>THE NIKE SWIFT COLLECTION</CTASectionTitle>
          <CTASectionDescription>
            The lightweight and breathable essentials you need to put in the
            miles.
          </CTASectionDescription>
        </CTASectionHeader>
        <CTASectionButton onClick={() => handleCTAClick()}>
          Shop
        </CTASectionButton>
      </CTASectionContent>
    </CTASection>
  )
}
