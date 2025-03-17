'use client'

import { useEffect, useState } from 'react'

import { fetchGetProducts } from '@/lib/apis/products'
import { IProductCard } from '@/lib/types/products'
import ProductSearchCard from './ProductSearchCard'

type ProductSearchListType = {
  searchBarQuery: string
}

export default function ProductSearchList({
  searchBarQuery
}: ProductSearchListType) {
  const [products, setProducts] = useState<IProductCard[]>([])

  useEffect(() => {
    getProducts()
  }, [searchBarQuery])

  const getProducts = async () => {
    const response = await fetchGetProducts(searchBarQuery, {
      limit: 3
    })

    setProducts(response.data.products)
  }

  return (
    <div className='start col-span-8 col-start-3 flex w-full flex-col gap-4'>
      <div className='grid w-full grid-cols-2 items-start gap-x-4 gap-y-6 md:grid-cols-3 lg:grid-cols-5 lg:gap-2'>
        {products && products.length > 0 ? (
          products.map((product, index) => (
            <ProductSearchCard key={index} {...product} className='w-full' />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  )
}
