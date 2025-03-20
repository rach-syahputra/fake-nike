import Image from 'next/image'
import Link from 'next/link'

import Heading from '@/components/elements/Heading'
import Container from '@/components/layouts/Container'

export default function Trending() {
  const links = [
    {
      src: '/trending/trending-air-max.jpg',
      title: 'Air Max',
      href: '/search?q=air+max'
    },
    {
      src: '/trending/trending-air-force.jpg',
      title: 'Air Force',
      href: '/search?q=air+force'
    },
    {
      src: '/trending/trending-air-jordan.jpg',
      title: 'Air Jordan',
      href: '/search?q=air+jordan'
    }
  ]

  return (
    <section>
      <Container className='flex flex-col gap-6 md:px-12 lg:px-24 xl:px-24'>
        <Heading level={1}>Trending</Heading>
        <div className='transparent-scrollbar overflow-x-scroll'>
          <div className='grid w-full grid-flow-col gap-3 lg:grid-cols-3'>
            {links.map((link, index) => (
              <Link
                href={link.href}
                key={index}
                className='flex min-w-[300px] flex-col gap-6 xs:w-[70vw] lg:w-full'
              >
                <Image
                  src={link.src}
                  alt='Trending image'
                  width={500}
                  height={725}
                  priority
                  style={{ objectFit: 'cover' }}
                  className='h-auto w-full bg-gray-300'
                />
                <h2 className='font-[family-name:var(--font-helvetica-now-text-medium)] text-xl'>
                  {link.title}
                </h2>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
