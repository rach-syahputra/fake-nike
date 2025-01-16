import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

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

const nikeFuturaND = localFont({
  src: './fonts/NikeFuturaND.woff',
  variable: '--font-nike-futura-nd'
})

export const metadata: Metadata = {
  title: 'Nike. Just Do It. Nike ID',
  description:
    "Inspiring the world's athletes, Nike delivers innovative products, experiences and services.",
  openGraph: {
    images: {
      url: '/nike-black-seo.jpg',
      alt: 'Nike logo'
    }
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='en'
      className={`${helveticaNowText.variable} ${helveticaNowTextMedium.variable} ${helveticaNowDisplayMedium.variable} ${nikeFuturaND.variable}`}
    >
      <body className='font-[family-name:var(--font-helvetica-now-text-medium)] antialiased'>
        {children}
      </body>
    </html>
  )
}
