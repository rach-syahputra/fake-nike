import Link from 'next/link'

import { MENU } from '@/lib/constants/menus'
import { cn } from '@/lib/utils'
import { NavLink } from '@/lib/types/menus'

type NavbarDropdownMenuProps = {
  category: string
  className?: string
}

type MenuProps = {
  title: string
  menus: NavLink[]
}

function NavbarDropdownMenu({ category, className }: NavbarDropdownMenuProps) {
  return (
    <div
      className={cn(
        'fixed left-0 top-[60px] z-20 flex w-full items-start justify-center gap-24 bg-white py-10',

        className
      )}
    >
      {category.toLowerCase() === 'men' ? (
        <MenDropdownMenu />
      ) : category.toLowerCase() === 'women' ? (
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
      <Menu title='Shoes' menus={MENU.men.shoes} />
      <Menu title='Clothing' menus={MENU.men.clothing} />
      <Menu title='Shop By Sport' menus={MENU.men.shopBySport} />
    </>
  )
}

function WomenDropdownMenu() {
  return (
    <>
      <Menu title='Shoes' menus={MENU.women.shoes} />
      <Menu title='Clothing' menus={MENU.women.clothing} />
      <Menu title='Shop By Sport' menus={MENU.women.shopBySport} />
    </>
  )
}

export default NavbarDropdownMenu
