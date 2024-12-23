import { IProductCard } from '@/lib/types/types'
import ProductCard from './ProductCard'

type ProductSearchListProps = {
  products: IProductCard[]
}

export default function ProductSearchList({
  products
}: ProductSearchListProps) {
  return (
    <div className='start col-span-8 col-start-3 flex w-full flex-col gap-4'>
      <div className='grid w-full grid-cols-2 items-start gap-x-4 gap-y-6 md:grid-cols-3 lg:grid-cols-5 lg:gap-2'>
        {products && products.length > 0 ? (
          products.map((product, index) => (
            <ProductCard key={index} {...product} className='w-full' />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  )
}
