'use client'

import { useEffect, useState } from 'react'

import { fetchGreatestProducts } from '@/lib/api/services'
import { IProductCard, IProductJson } from '@/lib/types/types'
import ListCarousel from '@/components/products/ListCarousel'
import ProductCard from '@/components/products/ProductCard'
import ProductCardSkeleton from '@/components/products/ProductCardSkeleton'

export default function TheLatestAndGreatest() {
  const [products, setProducts] = useState<IProductCard[]>([])

  const getProducts = async () => {
    try {
      const data: IProductJson[] = await fetchGreatestProducts('desc', 10)

      setProducts(
        data.map((product) => ({
          name: product.name,
          id: product.id,
          category: product.category,
          price: product.price,
          imageUrl: product.imageUrls[0]
        }))
      )
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
