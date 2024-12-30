import Image from 'next/image'
import Heading from '@/components/elements/Heading'
import Container from '@/components/layouts/Container'
import TrendingCTA from './TrendingCTA'

export default function Trending() {
  return (
    <section>
      <Container className='flex flex-col gap-6'>
        <Heading level={1}>Trending</Heading>
        <div className='grid md:grid-cols-2'>
          <div className='aspect-square w-full bg-gray-300'>
            <Image
              src='/trending/trending-1.png'
              alt='Trending image'
              width={800}
              height={800}
              priority
              style={{ objectFit: 'cover' }}
              className='aspect-square w-full'
            />
          </div>
          <div className='hidden aspect-square w-full bg-gray-300 md:block'>
            <Image
              src='/trending/trending-2.png'
              alt='Trending image'
              width={800}
              height={800}
              priority
              style={{ objectFit: 'cover' }}
              className='aspect-square w-full'
            />
          </div>
        </div>

        <TrendingCTA />
      </Container>
    </section>
  )
}
