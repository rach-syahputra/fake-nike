import Trending from './_components/Trending'
import ShopBySport from './_components/ShopBySport'
import TheLatestAndGreatest from './_components/TheLatestAndGreatest'

export default function Home() {
  return (
    <div className='flex flex-col gap-20 py-8'>
      <Trending />
      <ShopBySport />
      <TheLatestAndGreatest />
    </div>
  )
}
