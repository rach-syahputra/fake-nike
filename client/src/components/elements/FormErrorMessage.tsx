export default function FormErrorMessage({
  children
}: {
  children: React.ReactNode
}) {
  return <p className='text-xs text-red-500'>{children}</p>
}
