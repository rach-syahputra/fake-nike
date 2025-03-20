import { Metadata } from 'next'

import { fetchGetProductDetail } from '@/lib/apis/products'
import Container from '@/components/layouts/Container'
import ProductDetail from './_components/ProductDetail'
import ImageContainer from './_components/ImageContainer'
import ImageCarouselContainer from './_components/mobile/ImageCarouselContainer'

interface ProductDetailParams {
  productSlug: string
  productStyleSlug: string
}

export async function generateMetadata({
  params
}: {
  params: Promise<ProductDetailParams>
}): Promise<Metadata> {
  const productSlug = (await params).productSlug
  const productStyleSlug = (await params).productStyleSlug

  const response = await fetchGetProductDetail({
    productSlug,
    productStyleSlug
  })
  const product = response.data.product

  return {
    title: product ? `${product.title}. Nike ID` : 'Nike. Just Do It. Nike ID',
    description:
      product.description ||
      "Inspiring the world's athletes, Nike delivers innovative products, experiences and services"
  }
}

export default async function ProductDetailPage({
  params
}: {
  params: Promise<ProductDetailParams>
}) {
  const productSlug = (await params).productSlug
  const productStyleSlug = (await params).productStyleSlug
  const response = await fetchGetProductDetail({
    productSlug,
    productStyleSlug
  })
  const product = response.data.product
  const productStyleImages = product?.productStyle?.images.map(
    (image) => image.url
  )

  return (
    <Container className='px-0 md:px-0 lg:px-12'>
      <div className='relative mx-auto grid min-h-screen items-start overflow-visible lg:grid-cols-12 lg:py-8 xl:max-w-[1350px]'>
        <ImageCarouselContainer images={productStyleImages} />
        <ImageContainer
          images={productStyleImages}
          className='lg:col-span-6 xl:col-start-2'
        />
        <ProductDetail {...product} className='lg:col-span-4 xl:col-start-8' />
      </div>
    </Container>
  )
}
