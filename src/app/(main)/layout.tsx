import { NavigationProvider } from '@/context/NavigationContext'
import { SearchProvider } from '@/context/SearchContext'
import Navbar from '@/components/navbar/Navbar'
import SearchBar from '@/components/search/SearchBar'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <NavigationProvider>
        <SearchProvider>
          <Navbar />
          <SearchBar />
        </SearchProvider>
        <main>{children}</main>
      </NavigationProvider>
    </>
  )
}
