import Link from 'next/link'
import { ITopSuggestions } from '@/lib/types/types'

type TopSuggestionsProps = {
  topSuggestions: ITopSuggestions[]
}

export default function TopSuggestions({
  topSuggestions
}: TopSuggestionsProps) {
  return (
    <div className='col-span-2 flex h-full flex-col items-start gap-4 px-3'>
      <p className='font-[family-name:var(--font-helvetica-now-text)] text-sm text-gray-500'>
        Top Suggestions
      </p>
      <ul className='flex flex-col gap-3'>
        {topSuggestions.map((topSuggestion, index) => (
          <li key={index}>
            <Link href={`/products/${topSuggestion.slug}`}>
              {topSuggestion.name.toLocaleLowerCase()}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
