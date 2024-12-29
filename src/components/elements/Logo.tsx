import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

type LogoType = {
  className?: string
}

export default function Logo({ className }: LogoType) {
  return (
    <Link
      href='/'
      aria-label='Home page'
      className={cn('h-[27.43px] w-16', className)}
    >
      <Image
        src='/logo.svg'
        alt='nike logo'
        width={100}
        height={42.86}
        style={{ objectFit: 'cover' }}
        className='h-full w-full'
      />
    </Link>
  )
}
