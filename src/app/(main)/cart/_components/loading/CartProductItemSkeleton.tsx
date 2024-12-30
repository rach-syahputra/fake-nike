export default function CartProductItemSkeleton() {
  return (
    <div className='flex w-full gap-3 border-b pb-10'>
      <div className='flex flex-col gap-3'>
        <div className='aspect-square w-[154px] animate-pulse bg-gray-200 sm:w-[164px]'></div>
        <div className='h-10 w-28 animate-pulse bg-gray-200'></div>
      </div>
      <div className='flex w-full flex-col gap-2'>
        <div className='flex flex-col items-start justify-between gap-2 sm:flex-row'>
          <div className='h-6 w-1/3 animate-pulse bg-gray-200'></div>
          <div className='h-6 w-1/3 animate-pulse bg-gray-200'></div>
        </div>
        <div className='h-6 w-1/4 animate-pulse bg-gray-200'></div>
        <div className='h-6 w-1/4 animate-pulse bg-gray-200'></div>
      </div>
    </div>
  )
}
