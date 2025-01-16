export default function SearchedProductCardSkeleton() {
  return (
    <div className='flex flex-col gap-2'>
      <div className='aspect-square w-full animate-pulse bg-gray-200'></div>
      <div className='flex flex-col gap-2 p-3 lg:p-0'>
        <div className='flex flex-col gap-2'>
          <div className='h-6 w-full bg-gray-200'></div>
          <div className='h-4 w-1/4 bg-gray-200'></div>
        </div>
        <div className='h-4 w-full bg-gray-200'></div>
      </div>
    </div>
  )
}
