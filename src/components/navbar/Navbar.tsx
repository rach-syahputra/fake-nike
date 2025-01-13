'use client'

import { useEffect, useState } from 'react'
import { SessionProvider } from 'next-auth/react'

import { cn } from '@/lib/utils'
import { useCartContext } from '@/context/CartContext'
import Container from '../layouts/Container'
import MobileMenu from './MobileMenu'
import SearchInput from './SearchInput'
import Auth from './Auth'
import Cart from './Cart'
import Categories from './Categories'
import Logo from '../elements/Logo'
import AddedProductToCart from './AddedProductToCart'

export default function Navbar() {
  const { AddedProduct } = useCartContext()
  const [show, setShow] = useState<boolean>(true)
  const [lastScrollY, setLastScrollY] = useState<number>(0)

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShow(false)
    } else {
      setShow(true)
    }

    setLastScrollY(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar)

    return () => {
      window.removeEventListener('scroll', controlNavbar)
    }
  }, [lastScrollY])

  return (
    <nav
      className={cn(
        'invisible sticky top-0 z-20 flex h-[60px] w-full items-center justify-center bg-white',
        {
          visible: show
        }
      )}
    >
      <Container className='flex items-center justify-between gap-4 md:grid md:grid-cols-3'>
        <Logo className='h-[20.57px] w-12 md:h-[27.43px] md:w-16' />

        <Categories />

        <div className='flex w-full items-center justify-end gap-2'>
          <SearchInput />
          <Cart />
          <SessionProvider>
            <Auth />
            <MobileMenu />
          </SessionProvider>
        </div>

        {AddedProduct && <AddedProductToCart />}
      </Container>
    </nav>
  )
}
