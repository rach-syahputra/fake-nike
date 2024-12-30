import { cn } from '@/lib/utils'
import Heading from '@/components/elements/Heading'
import Subtotal from './Subtotal'
import Total from './Total'
import Button from '@/components/elements/Button'

type SummaryType = {
  className?: string
}

export default function Summary({ className }: SummaryType) {
  return (
    <div className={cn('flex w-full flex-col gap-6', className)}>
      <Heading level={1}>Summary</Heading>

      <div className='flex flex-col gap-6 font-[family-name:var(--font-helvetica-now-text)]'>
        <div className='flex flex-col gap-3'>
          <Subtotal />

          <div className='flex items-center justify-between'>
            <span>Estimated Delivery & Handling</span>
            <span>Free</span>
          </div>

          <div className='flex items-center justify-between'>
            <span>Estimated Duties and Taxes</span>
            <span>—</span>
          </div>
        </div>
        <Total />

        <Button className='w-full'>Checkout</Button>
      </div>
    </div>
  )
}
