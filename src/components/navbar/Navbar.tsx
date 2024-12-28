import Image from 'next/image'
import Link from 'next/link'
import { SessionProvider } from 'next-auth/react'
import { navLinks } from '@/lib/constants/nav-links'
import Container from '../layouts/Container'
import MobileMenu from './MobileMenu'
import SearchInput from './SearchInput'
import Auth from './Auth'
import Cart from './Cart'

export default function Navbar() {
  return (
    <nav className='sticky top-0 z-10 flex h-[60px] w-full items-center justify-center border bg-white'>
      <Container className='flex items-center justify-between gap-4 md:grid md:grid-cols-3'>
        <Link href='/' aria-label='Home page'>
          <Image
            src='/logo.svg'
            alt='nike logo'
            width={100}
            height={43}
            style={{ objectFit: 'cover' }}
            className='h-[20.57px] w-12 md:h-[27.43px] md:w-16'
          />
        </Link>

        <ul className='hidden w-full items-center justify-center gap-6 md:flex'>
          {navLinks.map((navLink, index) => (
            <li key={index}>
              <Link
                href={navLink.href}
                aria-label={`${navLink.label} category`}
                className='border-b-2 border-white py-1.5 font-medium hover:border-black'
              >
                {navLink.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className='flex w-full items-center justify-end gap-2'>
          <SearchInput />
          <Cart />
          <SessionProvider>
            <Auth />
            <MobileMenu />
          </SessionProvider>
        </div>
      </Container>
    </nav>
  )
}
