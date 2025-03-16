'use client'

import { useState } from 'react'
import Image from 'next/image'
import UserMenu from './UserMenu'
import { cn } from '@/lib/utils'

type AvatarProps = {
  image: string
  className?: string
}

export default function Avatar({ image, className }: AvatarProps) {
  const [openAuthMenu, setOpenAuthMenu] = useState<boolean>(false)

  return (
    <div
      onClick={() => setOpenAuthMenu(!openAuthMenu)}
      className={cn(
        'relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-gray-200',
        className
      )}
    >
      <Image
        src={image || '/logo.svg'}
        alt='User image'
        width={20}
        height={20}
        className='w-full rounded-full object-cover'
      />
      {openAuthMenu && <UserMenu className='hidden md:block' />}
    </div>
  )
}
