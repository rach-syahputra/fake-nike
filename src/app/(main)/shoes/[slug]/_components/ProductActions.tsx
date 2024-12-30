import { faHeart } from '@fortawesome/free-regular-svg-icons'
import Button from '@/components/elements/Button'
import Icon from '@/components/elements/Icon'

export default function ProductActions() {
  return (
    <div className='flex w-full flex-col gap-3'>
      <Button className='h-14 w-full text-lg'>Add to Bag</Button>
      <Button
        variant='outline'
        className='flex h-14 w-full items-center justify-center gap-2 text-lg'
      >
        Favourite
        <Icon icon={faHeart} className='h-5 w-5' />
      </Button>
    </div>
  )
}
