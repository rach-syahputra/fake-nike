'use client'

import { useEffect, useRef, useState } from 'react'
import { fetchGreatestPoducts } from '@/lib/api/services'
import { IProductCard, IProductJson } from '@/lib/types/types'
import Container from '../layouts/Container'
import ProductCard from './ProductCard'
import Heading from '../elements/Heading'
import CarouselButtons from './CarouselButtons'
import ProductCardSkeleton from './ProductCardSkeleton'

export default function ProductListCarousel() {
  const [products, setProducts] = useState<IProductCard[]>([])
  const scrollContainerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = async () => {
    try {
      const data: IProductJson[] = await fetchGreatestPoducts('desc', 10)

      setProducts(
        data.map((product) => ({
          name: product.name,
          slug: product.slug,
          category: product.category,
          price: product.price,
          imageUrl: product.imageUrls[0]
        }))
      )
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <section className='flex flex-col gap-6'>
      <Container className='flex items-center justify-between'>
        <Heading level={1}>The Latest & Greatest</Heading>
        <CarouselButtons
          link={{ href: '/', label: 'Shop All' }}
          ref={scrollContainerRef}
        />
      </Container>
      <div ref={scrollContainerRef} className='scrollbar overflow-x-scroll'>
        <Container className='grid w-fit grid-flow-col gap-3 pb-6'>
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
        </Container>
      </div>
    </section>
  )
}
