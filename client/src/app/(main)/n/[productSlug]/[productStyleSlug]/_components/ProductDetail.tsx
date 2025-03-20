import { cn, formatToRupiah } from '@/lib/utils'
import { IProductDetail } from '@/lib/types/products'
import Heading from '@/components/elements/Heading'
import Size from './Size'
import ProductActions from './ProductActions'
import ProductStyleImagePreview from './ProductStyleImagePreview'

interface ProductDetailProps extends IProductDetail {
  className?: string
}

export default function ProductDetail({
  title,
  price,
  slug,
  category,
  description,
  productStyle,
  productStylePreviews,
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
            {title}
          </Heading>
          <p className='font-[family-name:var(--font-helvetica-now-text)] text-gray-500'>
            {category.label}
          </p>
        </div>
        <p className='font-semibold'>{formatToRupiah(price)}</p>
      </div>

      <ProductStyleImagePreview
        productSlug={slug}
        currentProductStyle={productStyle.slug}
        images={productStylePreviews}
      />

      <Size sizes={productStyle.sizes} />

      <ProductActions
        product={{
          slug,
          price,
          title,
          category,
          description,
          productStyle,
          productStylePreviews
        }}
      />

      <p className='pt-5 font-[family-name:var(--font-helvetica-now-text)]'>
        {description}
      </p>
    </div>
  )
}
