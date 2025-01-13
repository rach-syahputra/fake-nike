import Trending from './_components/Trending'
import TheLatestAndGreatest from './_components/TheLatestAndGreatest'

export default function Home() {
  return (
    <div className='flex flex-col gap-20 py-8'>
      <Trending />
      <TheLatestAndGreatest />
    </div>
  )
}
