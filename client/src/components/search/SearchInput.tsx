import { Dispatch, SetStateAction } from 'react'
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons'
import { cn } from '@/lib/utils'
import Icon from '../elements/Icon'

type SearchInputProps = {
  className?: string
  name?: string
  value?: string
  setSearchBarQuery: Dispatch<SetStateAction<string>>
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>
}

export default function SearchInput({
  className,
  name,
  value,
  setSearchBarQuery,
  onChange,
  onKeyDown
}: SearchInputProps) {
  return (
    <form
      className={cn(
        'col-span-6 flex h-9 w-full items-center justify-center gap-2 rounded-full bg-gray-100 px-3 py-1 md:max-w-screen-md',
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
        onKeyDown={onKeyDown}
        className='h-full w-full bg-gray-100 font-medium focus-within:outline-none'
      />
      {value && (
        <button onClick={() => setSearchBarQuery('')}>
          <Icon icon={faXmark} className='h-5 w-5 text-gray-900' />
        </button>
      )}
    </form>
  )
}
