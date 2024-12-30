import { IProductJson } from '@/lib/types/types'
import { fetchProduct } from '@/lib/api/services'
import Container from '@/components/layouts/Container'
import ProductDetail from './_components/ProductDetail'
import ImageContainer from './_components/ImageContainer'
import ImageCarouselContainer from './_components/mobile/ImageCarouselContainer'

export default async function ShoeDetailPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug
  const product: IProductJson = (await fetchProduct(slug))[0]

  return (
    <Container className='px-0 md:px-0 lg:px-12'>
      <div className='relative mx-auto grid min-h-screen items-start overflow-visible lg:grid-cols-12 lg:py-8 xl:max-w-[1350px]'>
        <ImageCarouselContainer images={product.imageUrls} />
        <ImageContainer
          images={product.imageUrls}
          className='lg:col-span-6 xl:col-start-2'
        />
        <ProductDetail
          product={product}
          className='lg:col-span-4 xl:col-start-8'
        />
      </div>
    </Container>
  )
}
