import Link from 'next/link'

import {
  MEN_CLOTHING_MENU,
  MEN_SHOES_MENU,
  WOMEN_CLOTHING_MENU,
  WOMEN_SHOES_MENU
} from '@/lib/constants/nav-links'
import { useNavigation } from '@/context/NavigationContext'
import { cn } from '@/lib/utils'

type NavbarDropdownMenuProps = {
  className?: string
}

function NavbarDropdownMenu({ className }: NavbarDropdownMenuProps) {
  const { selectedNavbarMenu } = useNavigation()

  return (
    <div
      className={cn(
        'fixed left-0 top-[60px] z-30 flex w-full items-start justify-center gap-24 bg-white py-10',

        className
      )}
    >
      {selectedNavbarMenu === 'men' ? (
        <MenDropdownMenu />
      ) : selectedNavbarMenu === 'women' ? (
        <WomenDropdownMenu />
      ) : (
        ''
      )}
    </div>
  )
}

function MenDropdownMenu() {
  return (
    <>
      <div className='flex flex-col gap-2'>
        <h2 className='text-sm'>Shoes</h2>
        <ul className='flex flex-col gap-0.5'>
          {MEN_SHOES_MENU.map((menu, index) => (
            <li key={index}>
              <Link href={menu.href} className='text-xs text-gray-500'>
                {menu.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className='flex flex-col gap-2'>
        <h2 className='text-sm'>Clothing</h2>
        <ul className='flex flex-col gap-0.5'>
          {MEN_CLOTHING_MENU.map((menu, index) => (
            <li key={index}>
              <Link href={menu.href} className='text-xs text-gray-500'>
                {menu.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

function WomenDropdownMenu() {
  return (
    <>
      <div className='flex flex-col gap-2'>
        <h2 className='text-sm'>Shoes</h2>
        <ul className='flex flex-col gap-0.5'>
          {WOMEN_SHOES_MENU.map((menu, index) => (
            <li key={index}>
              <Link href={menu.href} className='text-xs text-gray-500'>
                {menu.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className='flex flex-col gap-2'>
        <h2 className='text-sm'>Clothing</h2>
        <ul className='flex flex-col gap-0.5'>
          {WOMEN_CLOTHING_MENU.map((menu, index) => (
            <li key={index}>
              <Link href={menu.href} className='text-xs text-gray-500'>
                {menu.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default NavbarDropdownMenu
