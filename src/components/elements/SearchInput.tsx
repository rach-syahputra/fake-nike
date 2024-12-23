import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { cn } from '@/lib/utils'
import Icon from './Icon'

type SearchInputProps = {
  onClick?: () => void
  className?: string
  name?: string
  value?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function SearchInput({
  onClick,
  className,
  name,
  value,
  onChange
}: SearchInputProps) {
  return (
    <form
      onClick={onClick}
      className={cn(
        'flex w-36 items-center justify-center gap-2 rounded-full bg-gray-100 px-3 py-1',
        className
      )}
    >
      <Icon icon={faMagnifyingGlass} className='h-5 w-5 text-gray-900' />
      <label htmlFor={name} className='sr-only'>
        Search
      </label>
      <input
        type='text'
        placeholder='Search'
        name={name}
        value={value}
        onChange={onChange}
        className='h-full w-full bg-gray-100 font-medium focus-within:outline-none'
      />
    </form>
  )
}
