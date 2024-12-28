'use client'

import { Dispatch, SetStateAction } from 'react'
import { cn } from '@/lib/utils'
import { useFilterContext } from '@/context/FilterContext'

type SizeItemProps = {
  size: number
  setSelectedCount: Dispatch<SetStateAction<number>>
}

export default function SizeItem({ size, setSelectedCount }: SizeItemProps) {
  const { sizes, setSizes } = useFilterContext()

  const handleOnSelect = () => {
    const selected = sizes.includes(size.toString())

    setSelectedCount((prevState) => (selected ? prevState - 1 : prevState + 1))
    setSizes((prevState) =>
      selected
        ? prevState.filter((item) => item !== size.toString())
        : [...prevState, size.toString()]
    )
  }

  return (
    <div
      onClick={() => handleOnSelect()}
      className={cn(
        'flex min-w-14 flex-1 cursor-pointer select-none items-center justify-center rounded-lg border border-gray-300 py-1 font-[family-name:var(--font-helvetica-now-text)]',
        {
          'border-black': sizes.includes(size.toString())
        }
      )}
    >
      {size}
    </div>
  )
}
