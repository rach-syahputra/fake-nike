export default function AuthLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='mx-auto flex min-h-screen w-full max-w-[400px] items-center justify-center px-6'>
      {children}
    </div>
  )
}
