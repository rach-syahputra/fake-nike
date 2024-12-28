import SearchHeader from './_components/header/SearchHeader'
import SearchedProductList from './_components/SearchedProductList'
import Sidebar from './_components/filter/Sidebar'
import MobileFilterModal from './_components/filter/mobile/MobileFilterModal'

export default function SearchPage() {
  return (
    <div className='flex flex-col'>
      <MobileFilterModal />
      <SearchHeader />
      <div className='flex items-start'>
        <Sidebar />
        <SearchedProductList />
      </div>
    </div>
  )
}
