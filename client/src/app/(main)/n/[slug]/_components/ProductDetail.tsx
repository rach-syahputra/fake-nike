import { cn, formatToRupiah } from '@/lib/utils'
import { IProductDetail } from '@/lib/types/products'
import Heading from '@/components/elements/Heading'
import Size from './Size'
import ProductActions from './ProductActions'

type ProductDetailProps = {
  product: IProductDetail
  className?: string
}

export default function ProductDetail({
  product,
  className
}: ProductDetailProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-7 px-6 py-6 lg:ml-2 lg:py-0 lg:pl-6',
        className
      )}
    >
      <div className='flex flex-col gap-3'>
        <div className='flex flex-col'>
          <Heading level={1} className='text-xl'>
            {product.title}
          </Heading>
          <p className='font-[family-name:var(--font-helvetica-now-text)] text-gray-500'>
            {product.category.label}
          </p>
        </div>
        <p className='font-semibold'>{formatToRupiah(product.price)}</p>
      </div>

      <Size sizes={product.sizes} />

      <ProductActions product={product} />

      <p className='pt-5 font-[family-name:var(--font-helvetica-now-text)]'>
        {product.description}
      </p>
    </div>
  )
}
