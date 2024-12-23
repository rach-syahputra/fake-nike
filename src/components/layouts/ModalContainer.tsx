export default function ModalContainer({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className='fixed left-0 top-0 z-10 block h-full min-h-screen w-full bg-black bg-opacity-50'>
      {children}
    </div>
  )
}
