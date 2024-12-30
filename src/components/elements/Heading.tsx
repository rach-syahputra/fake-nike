import { cn } from '@/lib/utils'
import React from 'react'

type HeadingProps = {
  level: 1 | 2
  className?: string
  children: React.ReactNode
}

export default function Heading({ level, className, children }: HeadingProps) {
  const Tag = `h${level}` as keyof React.JSX.IntrinsicElements

  return (
    <Tag
      className={cn(
        {
          'font-[family-name:var(--font-helvetica-now-display-medium)] text-2xl':
            level === 1,
          'font-[family-name:var(--font-helvetica-now-text-medium)] font-medium':
            level === 2
        },
        className
      )}
    >
      {children}
    </Tag>
  )
}
