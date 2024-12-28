'use client'

import { useEffect, useState } from 'react'
import { IProductCard, IProductJson } from '@/lib/types/types'
import { fetchFilteredProducts } from '@/lib/api/services'
import { useFilterContext } from '@/context/FilterContext'
import ProductCard from './ProductCard'

export default function ProductSearchList() {
  const { searchQuery } = useFilterContext()
  const [products, setProducts] = useState<IProductCard[]>([])

  useEffect(() => {
    getProducts()
  }, [searchQuery])

  const getProducts = async () => {
    const data: IProductJson[] = await fetchFilteredProducts(searchQuery, {
      limit: 3
    })

    setProducts(
      data.map((product) => ({
        name: product.name,
        id: product.id,
        category: product.category,
        price: product.price,
        imageUrl: product.imageUrls[0]
      }))
    )
  }

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
