import { Metadata } from 'next'
import { fetchFilteredProducts } from '@/lib/api/services'
import { IProductJson } from '@/lib/types/types'
import SearchHeader from './_components/header/SearchHeader'
import SearchedProductList from './_components/SearchedProductList'
import Sidebar from './_components/filter/Sidebar'
import MobileFilterModal from './_components/filter/mobile/MobileFilterModal'

export async function generateMetadata({
  searchParams
}: {
  searchParams: { q?: string }
}): Promise<Metadata> {
  const query = searchParams.q || ''

  const products: IProductJson[] = await fetchFilteredProducts(query, {
    limit: 5
  })

  return {
    title: 'Nike Shoes. Nike ID',
    description:
      'Discover the latest lifestyle and activewear from Nike. Browse new footwear and apparel for all levels of activity.',
    openGraph: {
      title: `Search Results for ${query}`,
      description: `Discover products matching "${query}" on our store.`,
      images: products.map((product) => ({
        url: product.imageUrls[0],
        alt: product.name
      }))
    }
  }
}

export default function SearchPage() {
  return (
    <div className='flex flex-col'>
      <MobileFilterModal />
      <SearchHeader />
      <div className='flex items-start'>
        <Sidebar />
        <SearchedProductList />
      </div>
    </div>
  )
}
