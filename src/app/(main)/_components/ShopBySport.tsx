import Link from 'next/link'
import Image from 'next/image'

import Button from '@/components/elements/Button'
import Container from '@/components/layouts/Container'
import ListCarousel from '@/components/products/ListCarousel'

export default function ShopBySport() {
  const sports = [
    {
      href: '#',
      label: 'Running',
      image: '/shop-by-sport/shop-by-sport-running.jpg'
    },
    {
      href: '#',
      label: 'Football',
      image: '/shop-by-sport/shop-by-sport-football.jpg'
    },
    {
      href: '#',
      label: 'Basketball',
      image: '/shop-by-sport/shop-by-sport-basketball.jpg'
    },
    {
      href: '#',
      label: 'Training and Gym',
      image: '/shop-by-sport/shop-by-sport-training-and-gym.jpg'
    },
    {
      href: '#',
      label: 'Tennis',
      image: '/shop-by-sport/shop-by-sport-tennis.jpg'
    },
    {
      href: '#',
      label: 'Yoga',
      image: '/shop-by-sport/shop-by-sport-yoga.jpg'
    },
    {
      href: '#',
      label: 'Skateboarding',
      image: '/shop-by-sport/shop-by-sport-skateboarding.jpg'
    },
    {
      href: '#',
      label: 'Dance',
      image: '/shop-by-sport/shop-by-sport-dance.jpg'
    }
  ]
  return (
    <Container>
      <ListCarousel title='Shop By Sport'>
        {sports.map((sport, index) => (
          <Link
            key={index}
            href={sport.href}
            aria-label={sport.label}
            className='relative min-w-[300px] xs:w-[70vw] lg:w-[440px] 2xl:w-[28.5vw]'
          >
            <Image
              src={sport.image}
              width={880}
              height={600}
              className='h-auto w-full bg-gray-200'
              alt='Sport image'
            />
            <Button
              variant='outline'
              className='absolute bottom-4 left-8 hover:border-gray-300 hover:bg-gray-300'
            >
              {sport.label}
            </Button>
          </Link>
        ))}
      </ListCarousel>
    </Container>
  )
}
