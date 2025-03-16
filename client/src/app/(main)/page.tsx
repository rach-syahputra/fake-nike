import HaveAHardYear from './_components/HaveAHardYear'
import Trending from './_components/Trending'
import ShopBySport from './_components/ShopBySport'
import TheLatestAndGreatest from './_components/TheLatestAndGreatest'

export default function Home() {
  return (
    <div className='flex flex-col gap-20'>
      <HaveAHardYear />
      <Trending />
      <TheLatestAndGreatest />
      <ShopBySport />
    </div>
  )
}
