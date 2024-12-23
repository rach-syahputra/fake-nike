import Trending from './_components/Trending'
import ProductListCarousel from '@/components/products/ProductListCarousel'

export default function Home() {
  return (
    <div className='flex flex-col gap-20 py-8'>
      <Trending />
      <ProductListCarousel />
    </div>
  )
}
