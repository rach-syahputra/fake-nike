import Heading from '@/components/elements/Heading'
import Container from '@/components/layouts/Container'
import Image from 'next/image'

export default function Trending() {
  return (
    <section>
      <Container className='flex flex-col gap-6'>
        <Heading level={1}>Trending</Heading>
        <div className='grid md:grid-cols-2'>
          <Image
            src='/trending/trending-1.png'
            alt='Trending image'
            width={800}
            height={800}
            priority
            style={{ objectFit: 'cover' }}
            className='aspect-square w-full'
          />
          <Image
            src='/trending/trending-2.png'
            alt='Trending image'
            width={800}
            height={800}
            priority
            style={{ objectFit: 'cover' }}
            className='hidden aspect-square w-full md:block'
          />
        </div>
      </Container>
    </section>
  )
}
