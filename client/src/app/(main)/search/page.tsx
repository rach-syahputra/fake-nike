import { Metadata } from 'next'

import { fetchGetProducts } from '@/lib/apis/products'
import SearchHeader from './_components/header/SearchHeader'
import SearchedProductList from './_components/SearchedProductList'
import Sidebar from './_components/filter/Sidebar'
import MobileFilterModal from './_components/filter/mobile/MobileFilterModal'

export async function generateMetadata({
  searchParams
}: {
  searchParams: Promise<{ q: string }>
}): Promise<Metadata> {
  const query = (await searchParams).q || ''

  const response = await fetchGetProducts(query, {
    limit: 5
  })

  const products = response.data.products

  return {
    title: 'Nike Shoes. Nike ID',
    description:
      'Discover the latest lifestyle and activewear from Nike. Browse new footwear and apparel for all levels of activity.',
    openGraph: {
      title: `Search Results for ${query}`,
      description: `Discover products matching "${query}" on our store.`,
      images: products
        ? products.map((product) => ({
            url: product.image,
            alt: product.title
          }))
        : undefined
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
