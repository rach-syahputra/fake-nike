'use client'

import { useEffect, useState } from 'react'

import { IProductCard } from '@/lib/types/products'
import { fetchTheLatestAndGreatest } from '@/lib/apis/products'
import ListCarousel from '@/components/products/ListCarousel'
import ProductCard from '@/components/products/ProductCard'
import ProductCardSkeleton from '@/components/products/ProductCardSkeleton'

export default function TheLatestAndGreatest() {
  const [products, setProducts] = useState<IProductCard[]>([])

  const getProducts = async () => {
    try {
      const response = await fetchTheLatestAndGreatest()

      setProducts(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <section>
      <ListCarousel
        title='The Latest & Greatest'
        link={{ href: '/', label: 'Shop' }}
      >
        {products.length > 0 ? (
          products.map((product, index) => (
            <ProductCard
              key={index}
              {...product}
              className='w-[70vw] lg:w-[30vw]'
            />
          ))
        ) : (
          <>
            <ProductCardSkeleton className='w-[70vw] lg:w-[30vw]' />
            <ProductCardSkeleton className='w-[70vw] lg:w-[30vw]' />
            <ProductCardSkeleton className='w-[70vw] lg:w-[30vw]' />
            <ProductCardSkeleton className='w-[70vw] lg:w-[30vw]' />
          </>
        )}
      </ListCarousel>
    </section>
  )
}
