import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { SearchProvider } from '@/context/SearchContext'
import { NavigationProvider } from '@/context/NavigationContext'
import Navbar from '@/components/layouts/Navbar'
import SearchBar from '@/components/search/SearchBar'

const helveticaNowText = localFont({
  src: './fonts/HelveticaNowText-Regular.woff',
  variable: '--font-helvetica-now-text'
})

const helveticaNowTextMedium = localFont({
  src: './fonts/HelveticaNowText-Medium.woff',
  variable: '--font-helvetica-now-text-medium'
})

const helveticaNowDisplayMedium = localFont({
  src: './fonts/HelveticaNowDisplay-Medium.woff',
  variable: '--font-helvetica-now-display-medium'
})

export const metadata: Metadata = {
  title: 'Nike. Just Do It. Nike ID',
  description:
    "Inspiring the world's athletes, Nike delivers innovative products, experiences and services."
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='en'
      className={`${helveticaNowText.variable} ${helveticaNowTextMedium.variable} ${helveticaNowDisplayMedium.variable}`}
    >
      <body className='font-[family-name:var(--font-helvetica-now-text-medium)] antialiased'>
        <NavigationProvider>
          <SearchProvider>
            <Navbar />
            <SearchBar />
          </SearchProvider>
          <main>{children}</main>
        </NavigationProvider>
      </body>
    </html>
  )
}
