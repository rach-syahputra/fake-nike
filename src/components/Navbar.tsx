import Image from 'next/image'
import Container from './Container'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBagShopping,
  faMagnifyingGlass
} from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  return (
    <nav className='w-full border'>
      <Container className='grid grid-cols-3 items-center'>
        <Image
          src='/logo.png'
          alt='nike logo'
          width={80}
          height={80}
          className='h-20 w-20'
        />
        <ul className='flex w-full flex-1 grow items-center justify-center gap-4'>
          <li>
            <Link
              href='#'
              aria-label='Men category'
              className='font-bold hover:underline'
            >
              Men
            </Link>
          </li>
          <li>
            <Link
              href='#'
              aria-label='Women category'
              className='font-bold hover:underline'
            >
              Women
            </Link>
          </li>
        </ul>

        <div className='flex items-center justify-center gap-4'>
          <div className='flex w-fit items-center justify-end gap-2 justify-self-end rounded-full bg-gray-100 p-3'>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className='h-4 w-4 text-gray-500'
            />
            <input
              type='text'
              placeholder='Search'
              className='max-w-40 bg-gray-100 focus-within:outline-none'
            />
          </div>
          <FontAwesomeIcon
            icon={faBagShopping}
            className='h-4 w-4 text-gray-500'
          />
        </div>
      </Container>
    </nav>
  )
}
