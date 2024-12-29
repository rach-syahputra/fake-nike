'use client'

import { useRouter } from 'next/navigation'
import { navLinks } from '@/lib/constants/nav-links'
import { useFilterContext } from '@/context/FilterContext'

export default function Categories() {
  const router = useRouter()
  const { setSearchQuery, setCategories } = useFilterContext()

  const handleCategoryClick = (category: string) => {
    router.push('/search')
    setSearchQuery('')
    setCategories([category])
  }

  return (
    <ul className='hidden w-full items-center justify-center gap-6 md:flex'>
      {navLinks.map((navLink, index) => (
        <li key={index}>
          <button
            onClick={() => handleCategoryClick(navLink.label.toLowerCase())}
            className='border-b-2 border-white py-1.5 font-medium hover:border-black'
          >
            {navLink.label}
          </button>
        </li>
      ))}
    </ul>
  )
}
