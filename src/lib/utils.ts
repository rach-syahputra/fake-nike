import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function capitalizeFirstLetter(string: string) {
  const trimmedString = string.trim()
  if (!trimmedString) return ''
  return trimmedString.charAt(0).toUpperCase() + trimmedString.slice(1)
}

export function formatToRupiah(amount: number, replaceDots: string): string {
  const formattedAmount = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  })
    .format(amount)
    .replace('Rp', 'Rp ')

  return replaceDots
    ? formattedAmount.replaceAll('.', `${replaceDots}`)
    : formattedAmount
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
