import Link from 'next/link'

type PopularSearchTermsProps = {
  popularSearches: string[]
  className?: string
}

export default function PopularSearchTerms({
  popularSearches,
  className
}: PopularSearchTermsProps) {
  return (
    <div className={className}>
      <span className='text-sm text-gray-500 lg:text-base'>
        Popular Search Terms
      </span>
      <ul className='flex flex-wrap gap-4'>
        {popularSearches.map((popularSearch, index) => (
          <li key={index}>
            <Link
              href='/'
              className='flex h-8 select-none items-center justify-center rounded-full bg-gray-200 px-4'
            >
              {popularSearch}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
