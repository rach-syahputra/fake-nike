'use client'

import { useFilterContext } from '@/context/FilterContext'
import Button from '@/components/elements/Button'

export default function TrendingCTA() {
  const { updateParams } = useFilterContext()

  const handleCTAClick = () => {
    updateParams({ q: 'air force' })
  }

  return (
    <div className='flex flex-col items-center justify-center gap-6'>
      <div className='flex flex-col items-center justify-center gap-1'>
        <span>Air Force</span>
        <h3 className='font-[family-name:var(--font-nike-futura-nd)] text-5xl font-bold'>
          JUST DO IT
        </h3>
        <p className='text-center'>
          In 1988, one of the world&rsquo;s most recognisable slogans was
          coined: Just Do It.
        </p>
      </div>
      <Button onClick={() => handleCTAClick()} className='px-4'>
        Shop
      </Button>
    </div>
  )
}
