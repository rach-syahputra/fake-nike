'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { SessionProvider } from 'next-auth/react'

import { cn } from '@/lib/utils'
import { NAVBAR_MENU } from '@/lib/constants/menus'
import { useNavigationContenxt } from '@/context/NavigationContext'
import { useCartContext } from '@/context/CartContext'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger
} from '@/components/ui/navigation-menu'
import NavbarDropdownMenu from './NavbarDropdownMenu'
import SearchInput from './SearchInput'
import Cart from './Cart'
import Auth from './Auth'
import MobileMenu from './MobileMenu'
import Logo from '../elements/Logo'
import Container from '../layouts/Container'
import AddedProductToCart from './AddedProductToCart'
import ModalContainer from '../layouts/ModalContainer'

export default function Navbar() {
  const {
    selectedNavbarMenu,
    setSelectedNavbarMenu,
    showNavbar,
    setShowNavbar
  } = useNavigationContenxt()
  const { AddedProduct } = useCartContext()

  const [lastScrollY, setLastScrollY] = useState<number>(0)

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShowNavbar(false)
    } else {
      setShowNavbar(true)
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
    <ModalContainer
      className={cn('invisible', {
        visible: selectedNavbarMenu !== ''
      })}
    >
      <NavigationMenu
        delayDuration={0}
        skipDelayDuration={0}
        className={cn('invisible', {
          visible: showNavbar
        })}
      >
        <Container className='flex items-center justify-between gap-4 md:grid md:grid-cols-3'>
          <Logo className='h-[20.57px] w-12 md:h-[27.43px] md:w-16' />
          <ul className='hidden h-full w-full items-center justify-center gap-6 md:flex'>
            {NAVBAR_MENU.map((menu, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuTrigger
                  onMouseEnter={() =>
                    setSelectedNavbarMenu(menu.label.toLowerCase())
                  }
                  onMouseLeave={() => setSelectedNavbarMenu('')}
                >
                  <Link href={menu.href} aria-label={menu.label}>
                    {menu.label}
                  </Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavbarDropdownMenu />
                </NavigationMenuContent>
              </NavigationMenuItem>
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

          {AddedProduct && <AddedProductToCart />}
        </Container>
      </NavigationMenu>
    </ModalContainer>
  )
}
