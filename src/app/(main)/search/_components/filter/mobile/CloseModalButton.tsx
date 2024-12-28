import { faXmark } from '@fortawesome/free-solid-svg-icons'
import Button from '@/components/elements/Button'
import Icon from '@/components/elements/Icon'
import { useFilterContext } from '@/context/FilterContext'

export default function CloseModalButton() {
  const { setOnMobileFilterModal } = useFilterContext()

  return (
    <Button
      onClick={() => setOnMobileFilterModal(false)}
      className='absolute right-5 top-5 flex h-8 w-8 items-center justify-center p-0'
    >
      <Icon icon={faXmark} className='h-5 w-5' />
    </Button>
  )
}
