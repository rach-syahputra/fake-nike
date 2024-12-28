import Container from '@/components/layouts/Container'
import SearchHeaderOptions from './SearchHeaderOptions'
import SearchResult from './SearchResult'

export default function SearchHeader() {
  return (
    <Container className='sticky top-[60px] z-10 flex h-[60px] items-center justify-between border-b bg-white px-5 md:px-5 lg:border-none lg:px-12'>
      <SearchResult />
      <SearchHeaderOptions />
    </Container>
  )
}
