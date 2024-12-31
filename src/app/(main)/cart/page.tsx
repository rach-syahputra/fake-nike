import { Metadata } from 'next'
import Container from '@/components/layouts/Container'
import Bag from './_components/Bag'
import Summary from './_components/Summary'

export const metadata: Metadata = {
  title: 'Bag. Nike Store.',
  description:
    "Inspiring the world's athletes, Nike delivers innovative products, experiences and services."
}

export default function CartPage() {
  return (
    <Container className='max-w-screen-lg px-3 py-3 md:px-3 lg:px-0 xl:px-6'>
      <div className='relative grid items-start gap-6 lg:grid-cols-12'>
        <Bag className='lg:col-span-8' />
        <Summary className='sticky top-[72px] lg:col-span-4' />
      </div>
    </Container>
  )
}
