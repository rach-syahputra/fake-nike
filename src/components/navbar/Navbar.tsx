import { SessionProvider } from 'next-auth/react'
import Container from '../layouts/Container'
import MobileMenu from './MobileMenu'
import SearchInput from './SearchInput'
import Auth from './Auth'
import Cart from './Cart'
import Categories from './Categories'
import Logo from '../elements/Logo'

export default function Navbar() {
  return (
    <nav className='sticky top-0 z-20 flex h-[60px] w-full items-center justify-center border bg-white'>
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
      </Container>
    </nav>
  )
}
