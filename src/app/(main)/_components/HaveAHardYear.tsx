'use client'

import { useFilterContext } from '@/context/FilterContext'
import Button from '@/components/elements/Button'
import Container from '@/components/layouts/Container'

export default function HaveAHardYear() {
  const { updateParams } = useFilterContext()

  const handleCTAClick = () => {
    updateParams({ q: 'kobe' })
  }

  return (
    <Container className='flex flex-col gap-6'>
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
      <div className='flex flex-col items-center justify-center gap-6'>
        <div className='flex flex-col items-center justify-center gap-1'>
          <h3 className='font-[family-name:var(--font-nike-futura-nd)] text-4xl font-bold lg:text-7xl'>
            HAVE A HARD YEAR
          </h3>
          <p className='text-center font-[family-name:var(--font-helvetica-now-text)] font-medium'>
            This isn&rsquo;t the Year of Snake. This is the Year of the Mamba
          </p>
        </div>
        <Button onClick={() => handleCTAClick()} className='px-4'>
          Shop
        </Button>
      </div>
    </Container>
  )
}
