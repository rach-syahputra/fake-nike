'use client'

import Button from '@/components/elements/Button'
import Container from '@/components/layouts/Container'

type CTASectionProps = {
  children: React.ReactNode
}

type CTASectionMediaProps = {
  children: React.ReactNode
}

type CTASectionContentProps = {
  children: React.ReactNode
}

type CTASectionHeaderProps = {
  children: React.ReactNode
}

type CTASectionTagProps = {
  children: React.ReactNode
}

type CTASectionTitleProps = {
  children: React.ReactNode
}

type CTASectionDescriptionProps = {
  children: React.ReactNode
}

type CTASectionButtonProps = {
  onClick: () => void
  children: React.ReactNode
}

function CTASection({ children }: CTASectionProps) {
  return <Container className='flex flex-col gap-8'>{children}</Container>
}

function CTASectionMedia({ children }: CTASectionMediaProps) {
  return <>{children}</>
}

function CTASectionContent({ children }: CTASectionContentProps) {
  return (
    <div className='flex flex-col items-center justify-center gap-6'>
      {children}
    </div>
  )
}

function CTASectionTag({ children }: CTASectionTagProps) {
  return <p className='text-center font-medium'>{children}</p>
}

function CTASectionHeader({ children }: CTASectionHeaderProps) {
  return (
    <div className='flex flex-col items-center justify-center gap-1'>
      {children}
    </div>
  )
}

function CTASectionTitle({ children }: CTASectionTitleProps) {
  return (
    <h3 className='font-[family-name:var(--font-nike-futura-nd)] text-4xl font-bold lg:text-7xl'>
      {children}
    </h3>
  )
}

function CTASectionDescription({ children }: CTASectionDescriptionProps) {
  return (
    <p className='text-center font-[family-name:var(--font-helvetica-now-text)] font-medium'>
      {children}
    </p>
  )
}

function CTASectionButton({ onClick, children }: CTASectionButtonProps) {
  return (
    <Button onClick={onClick} className='px-4'>
      {children}
    </Button>
  )
}

export {
  CTASection,
  CTASectionMedia,
  CTASectionContent,
  CTASectionHeader,
  CTASectionTag,
  CTASectionTitle,
  CTASectionDescription,
  CTASectionButton
}
