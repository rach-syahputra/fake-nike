import Button from '@/components/elements/Button'
import Heading from '@/components/elements/Heading'
import Container from '@/components/layouts/Container'
import Image from 'next/image'

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
          <Button className='px-4'>Shop</Button>
        </div>
      </Container>
    </section>
  )
}
