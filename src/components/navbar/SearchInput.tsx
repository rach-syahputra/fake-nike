'use client'

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useSearch } from '@/context/SearchContext'
import Icon from '../elements/Icon'

export default function SearchInput() {
  const { setOnSearch } = useSearch()

  return (
    <div onClick={() => setOnSearch(true)}>
      <div className='hidden w-36 items-center justify-center gap-2 rounded-full bg-gray-100 px-3 py-1 md:flex'>
        <Icon icon={faMagnifyingGlass} className='h-5 w-5 text-gray-900' />
        <label htmlFor='search' className='sr-only'>
          Search
        </label>
        <input
          type='text'
          placeholder='Search'
          className='h-full w-full bg-gray-100 font-medium focus-within:outline-none'
        />
      </div>
      <div className='flex h-8 w-8 items-center justify-center md:hidden'>
        <Icon
          icon={faMagnifyingGlass}
          className='h-[18px] w-[18px] text-gray-900'
        />
      </div>
    </div>
  )
}
