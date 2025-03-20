'use client'

import { createContext, useContext } from 'react'

import { cn } from '@/lib/utils'
import Button from '@/components/elements/Button'
import Container from '@/components/layouts/Container'

type CTASectionProps = {
  className?: string
  parallax?: boolean
  children: React.ReactNode
}

type CTASectionMediaProps = {
  children: React.ReactNode
}

type CTASectionContentProps = {
  className?: string
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

interface ICTASectionContext {
  parallax?: boolean
}

const CTASectionContext = createContext<ICTASectionContext | undefined>(
  undefined
)

const useCTASectionContext = (): ICTASectionContext => {
  const context = useContext(CTASectionContext)
  if (context === undefined) {
    throw new Error(
      'useCTASectionContext must be used within a CTASectionProvider'
    )
  }
  return context
}

function CTASection({ parallax, className, children }: CTASectionProps) {
  return (
    <CTASectionContext.Provider
      value={{
        parallax
      }}
    >
      <Container
        className={cn(
          'flex select-none flex-col gap-8',
          {
            relative: parallax
          },
          className
        )}
      >
        {children}
      </Container>
    </CTASectionContext.Provider>
  )
}

function CTASectionMedia({ children }: CTASectionMediaProps) {
  return <>{children}</>
}

function CTASectionContent({ className, children }: CTASectionContentProps) {
  const { parallax } = useCTASectionContext()

  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center gap-6 px-6',
        {
          'absolute bottom-24 w-full text-white': parallax
        },
        className
      )}
    >
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
  const { parallax } = useCTASectionContext()

  return (
    <Button
      onClick={onClick}
      variant={`${parallax ? 'white' : 'default'}`}
      className='px-4'
    >
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
