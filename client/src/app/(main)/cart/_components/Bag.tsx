import { cn } from '@/lib/utils'
import Heading from '@/components/elements/Heading'
import CartProductList from './CartProductList'

type BagType = {
  className?: string
}

export default function Bag({ className }: BagType) {
  return (
    <div className={cn('flex w-full flex-col gap-6', className)}>
      <Heading level={1}>Bag</Heading>
      <CartProductList />
    </div>
  )
}
