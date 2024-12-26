import Link from 'next/link'
import { ITopSuggestions } from '@/lib/types/types'

type TopSuggestionsProps = {
  topSuggestions: ITopSuggestions[]
}

export default function TopSuggestions({
  topSuggestions
}: TopSuggestionsProps) {
  return (
    <div className='col-span-2 flex h-full flex-col items-start gap-4 place-self-start px-3'>
      <p className='font-[family-name:var(--font-helvetica-now-text)] text-sm text-gray-500'>
        Top Suggestions
      </p>
      <ul className='flex h-full flex-col'>
        {topSuggestions.map((topSuggestion, index) => (
          <li key={index} className='rounded-lg py-2'>
            <Link
              href={`/products/${topSuggestion.slug}`}
              className='line-clamp-2 py-2 font-[family-name:var(--font-helvetica-now-text-medium)] text-lg hover:text-gray-500'
            >
              {topSuggestion.name.toLocaleLowerCase()}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
