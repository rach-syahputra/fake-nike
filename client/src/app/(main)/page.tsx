import Trending from './_components/Trending'
import ShopBySport from './_components/ShopBySport'
import TheLatestAndGreatest from './_components/TheLatestAndGreatest'
import Hero from './_components/Hero'

export default function Home() {
  return (
    <div className='flex flex-col gap-20'>
      <Hero />
      <Trending />
      <TheLatestAndGreatest />
      <ShopBySport />
    </div>
  )
}
