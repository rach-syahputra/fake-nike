import Container from './Container'

function Footer() {
  return (
    <Container>
      <div className='flex flex-col justify-between gap-10 border-t-[1px] border-gray-400 py-14 md:flex-row md:items-center'>
        <p className='text-sm text-gray-500'>
          © 2025 Nike, Inc. All rights reserved
        </p>
        <p className='text-sm text-gray-500'>
          This website is a fake/clone of Nike and is built for learning
          purposes only.
        </p>
      </div>
    </Container>
  )
}

export default Footer
