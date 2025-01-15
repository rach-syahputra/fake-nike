import Link from 'next/link'

import {
  MEN_CLOTHING_MENU,
  MEN_SHOES_MENU,
  NavLinks,
  WOMEN_CLOTHING_MENU,
  WOMEN_SHOES_MENU
} from '@/lib/constants/menus'
import { useNavigation } from '@/context/NavigationContext'
import { cn } from '@/lib/utils'

type NavbarDropdownMenuProps = {
  className?: string
}

type MenuProps = {
  title: string
  menus: NavLinks[]
}

function NavbarDropdownMenu({ className }: NavbarDropdownMenuProps) {
  const { selectedNavbarMenu } = useNavigation()

  return (
    <div
      className={cn(
        'fixed left-0 top-[60px] z-20 flex w-full items-start justify-center gap-24 bg-white py-10',

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

function Menu({ title, menus }: MenuProps) {
  return (
    <div className='flex flex-col gap-2'>
      <h2 className='text-sm'>{title}</h2>
      <ul className='flex flex-col gap-0.5'>
        {menus.map((menu, index) => (
          <li key={index}>
            <Link
              href={menu.href}
              className='text-xs text-gray-500 hover:text-black'
            >
              {menu.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

function MenDropdownMenu() {
  return (
    <>
      <Menu title='Shoes' menus={MEN_SHOES_MENU} />
      <Menu title='Clothing' menus={MEN_CLOTHING_MENU} />
    </>
  )
}

function WomenDropdownMenu() {
  return (
    <>
      <Menu title='Shoes' menus={WOMEN_SHOES_MENU} />
      <Menu title='Clothing' menus={WOMEN_CLOTHING_MENU} />
    </>
  )
}

export default NavbarDropdownMenu
