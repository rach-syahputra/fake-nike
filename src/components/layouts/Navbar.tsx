'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useSearch } from '@/context/SearchContext'
import { navLinks } from '@/lib/constants/nav-links'
import Container from './Container'
import SearchInput from '../elements/SearchInput'
import User from '../elements/User'
import MobileMenu from './MobileMenu'

export default function Navbar() {
  const { onSearch, setOnSearch } = useSearch()

  return (
    <nav
      className={`${onSearch ? 'hidden' : 'flex'} sticky top-0 h-[60px] w-full items-center justify-center border bg-white`}
    >
      <Container className='flex items-center justify-between gap-4 md:grid md:grid-cols-3'>
        <Image
          src='/logo.svg'
          alt='nike logo'
          width={100}
          height={43}
          style={{ objectFit: 'cover' }}
          className='h-[20.57px] w-12 md:h-[27.43px] md:w-16'
        />

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
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            onClick={() => setOnSearch(true)}
            className='h-6 w-6 text-gray-800 lg:hidden'
          />
          <SearchInput
            onClick={() => setOnSearch(true)}
            className='hidden lg:flex'
          />
          <div className='relative flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-200'>
            <Image
              src='/icons/market.png'
              alt='cart icon'
              width={40}
              height={40}
              className='h-7 w-7'
            />
            <p className='absolute bottom-2 select-none text-xs font-bold'>1</p>
          </div>
          <User className='hidden md:block' />
          <MobileMenu />
        </div>
      </Container>
    </nav>
  )
}
