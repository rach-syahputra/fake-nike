'use client'

import Link from 'next/link'
import {
  faBars,
  faChevronRight,
  faXmark
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NAVBAR_MENU } from '@/lib/constants/menus'
import { useNavigationContenxt } from '@/context/NavigationContext'
import ModalContainer from '../layouts/ModalContainer'
import AuthMobile from './AuthMobile'

export default function MobileMenu() {
  const { onMobileMenu, setOnMobileMenu } = useNavigationContenxt()

  return (
    <div className='flex h-8 w-8 items-center justify-center md:hidden'>
      {/* BURGER */}
      <FontAwesomeIcon
        icon={faBars}
        onClick={() => setOnMobileMenu(true)}
        className='h-5 w-5'
      />
      {onMobileMenu && (
        <ModalContainer>
          <div className='fixed right-0 top-0 z-10 flex min-h-screen w-[320px] flex-col gap-8 bg-white p-8'>
            {/* CLOSE */}
            <FontAwesomeIcon
              icon={faXmark}
              onClick={() => setOnMobileMenu(false)}
              className='h-6 w-6 place-self-end text-gray-500'
            />
            <ul className='flex flex-col'>
              {NAVBAR_MENU.map((navLink, index) => (
                <li
                  key={index}
                  className='flex items-center justify-between gap-8'
                >
                  <Link
                    href={navLink.href}
                    aria-label={`${navLink.label}`}
                    className='py-3 text-2xl font-medium'
                  >
                    {navLink.label}
                  </Link>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className='h-6 w-6 text-gray-500'
                  />
                </li>
              ))}
            </ul>
            <AuthMobile />
          </div>
        </ModalContainer>
      )}
    </div>
  )
}
